import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysis, AIGrade, ExamPart, DrillType, DrillResult } from "./types";

// Define Models
// Primary: The "Test Mode" or Advanced model (Gemini 3 Pro Preview)
// Fallback: The "Normal" model (Gemini 2.5 Flash)
const MODEL_PRIMARY = 'gemini-3-pro-preview';
const MODEL_FALLBACK = 'gemini-2.5-flash';

// Helper to get client
const getAiClient = () => {
  // Safe access to environment variable for Vercel/Vite
  // Uses optional chaining to prevent crashes if env is undefined
  const apiKey = (import.meta as any).env?.VITE_API_KEY;
  
  if (!apiKey) {
    console.error("API Key is missing. Please check your Vercel Environment Variables.");
    throw new Error("API Key not found");
  }
  
  return new GoogleGenAI({ apiKey });
};

/**
 * Executes a GenAI operation with fallback logic.
 * Tries MODEL_PRIMARY first. If it fails (e.g., 429, 503), tries MODEL_FALLBACK.
 */
async function withModelFallback<T>(
  operation: (model: string) => Promise<T>
): Promise<T> {
  try {
    return await operation(MODEL_PRIMARY);
  } catch (error) {
    console.warn(`Primary model ${MODEL_PRIMARY} failed. Falling back to ${MODEL_FALLBACK}.`, error);
    return await operation(MODEL_FALLBACK);
  }
}

// 1. TEACHING MODE: Analyze the ideal answer
export const analyzeIdealAnswer = async (question: string, answer: string): Promise<AIAnalysis> => {
  const ai = getAiClient();
  
  const prompt = `
    You are an expert Dutch tutor for Chinese A2 Inburgering students.
    Analyze this Question and Answer pair.
    Question: "${question}"
    Answer: "${answer}"

    Provide analysis in structured JSON.
    IMPORTANT: All explanations MUST be in simplified CHINESE (中文).
    
    - grammar: List key grammar points used (explain in Chinese).
    - vocabulary: List key words with their meanings in Chinese.
    - tips: A helpful tip for remembering this (in Chinese).
    - structure: A text explanation of the sentence structure (in Chinese).
    - syntaxFormula: An array of strings representing the word order "formula" (e.g. ["主语 (Ik)", "动词 (ben)", "其余 (blij)"]). Use Chinese labels.
    - keyWords: Extract the 2-3 most important Dutch words (especially the VERB) from the answer for the student to practice.
    - wordAlignment: Break down the Answer sentence word-by-word (or logical phrases) and provide the direct Chinese meaning for each part. Example: [{"dutch": "Ik", "chinese": "我"}, {"dutch": "ben", "chinese": "是"}].
    - realLifeContext: Where this sentence can be used (explain in Chinese).
    - relatedTopics: Other topics related to this (in Chinese).
  `;

  return withModelFallback(async (modelId) => {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            grammar: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            vocabulary: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  meaning: { type: Type.STRING },
                }
              }
            },
            tips: { type: Type.STRING },
            structure: { type: Type.STRING },
            syntaxFormula: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Visual blocks for sentence structure, e.g. ['Subject', 'Verb', 'Object']"
            },
            keyWords: {
               type: Type.ARRAY,
               items: { type: Type.STRING },
               description: "Key Dutch words/verbs from the sentence"
            },
            wordAlignment: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  dutch: { type: Type.STRING },
                  chinese: { type: Type.STRING }
                }
              },
              description: "Word-by-word alignment for gloss view"
            },
            realLifeContext: { type: Type.STRING },
            relatedTopics: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIAnalysis;
    }
    throw new Error(`No response text from ${modelId}`);
  });
};

// 2. EXAM MODE: Grade the user's audio
export const gradeUserAudio = async (
  question: string, 
  audioBase64: string, 
  part: ExamPart,
  keyWordsContext?: string[]
): Promise<AIGrade> => {
  const ai = getAiClient();

  // If keywords are provided, this is a Grammar Drill. Adjust the persona.
  const isDrill = keyWordsContext && keyWordsContext.length > 0;

  const drillContext = isDrill 
    ? `IMPORTANT: This is a GRAMMAR DRILL. The student MUST use these words: ${keyWordsContext.join(', ')}. Focus heavily on Word Order (Syntax).` 
    : "";

  // Specific rubric based on PDF analysis
  let specificCriteria = "";
  if (!isDrill) {
    switch (part) {
      case ExamPart.Part1:
        specificCriteria = `
          CRITICAL CHECK FOR PART 1:
          The question usually asks TWO things (e.g. "How often?" AND "Where?"). 
          Check if the student answered BOTH parts. If they missed one part, mention it in feedback and lower the score.
          Keep answers simple (2-3 sentences).
        `;
        break;
      case ExamPart.Part2:
        specificCriteria = `
          CRITICAL CHECK FOR PART 2 (Image Description):
          Did the student describe the person/action?
          Did the student relate it to themselves (e.g., "Ik doe..." or "Ik vind...")?
          Encourage use of present tense.
        `;
        break;
      case ExamPart.Part3:
        specificCriteria = `
          CRITICAL CHECK FOR PART 3 (Preferences):
          Did the student use comparison logic?
          Look for keywords: "Liever" (prefer), "want" or "omdat" (because).
          If they didn't give a reason, deduct points.
        `;
        break;
      case ExamPart.Part4:
        specificCriteria = `
          CRITICAL CHECK FOR PART 4 (Storytelling):
          Did the student tell a sequence?
          LOOK FOR MANDATORY CONNECTORS: "Eerst" (First), "Daarna" (Then), "Tot slot" (Finally).
          If these words are missing, suggest them strongly in feedback.
          Simple Past (imperfectum) or Perfect (perfectum) is encouraged but Present is acceptable if clear.
        `;
        break;
    }
  }

  const prompt = `
    You are a Dutch Inburgering Exam (A2 level) examiner.
    The student is answering the question: "${question}".
    Current Exam Part: ${part}.
    ${drillContext}
    
    ${specificCriteria}

    Evaluate the audio response.
    
    Return a JSON object with:
    - score: number (1-10) based on A2 level expectations (understandability is key).
    - transcription: what you heard (Dutch).
    - pronunciation: specific feedback on pronunciation errors (Explain in CHINESE).
    - grammarCorrection: The FULL CORRECTED DUTCH SENTENCE ONLY. Do not include Chinese explanation here. Just the correct Dutch text.
    - feedback: general constructive feedback in SIMPLIFIED CHINESE (中文). Include explanation of grammar mistakes here. Mention the specific criteria for this exam part.
  `;

  return withModelFallback(async (modelId) => {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'audio/webm',
              data: audioBase64
            }
          },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            transcription: { type: Type.STRING },
            pronunciation: { type: Type.STRING },
            grammarCorrection: { type: Type.STRING },
            feedback: { type: Type.STRING },
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIGrade;
    }
    throw new Error(`No response text from ${modelId}`);
  });
};

// 3. SENTENCE GYM: Grade sentence drills
export const gradeDrillAudio = async (
  drillType: DrillType, 
  promptText: string,
  audioBase64: string
): Promise<DrillResult> => {
  const ai = getAiClient();

  const rubric = {
    [DrillType.Completion]: "Did the student complete the sentence logically AND use correct word order for the conjunction (want vs omdat)?",
    [DrillType.Expansion]: "Did the student include the requested elements (Time/Place) in the correct position (S-V-Time-Place or Time-V-S-Place)?",
    [DrillType.Sequence]: "Did the student use 'Eerst', 'Daarna' (or similar connectors) to describe a sequence?"
  }[drillType];

  const prompt = `
    You are a strict Dutch grammar drill sergeant.
    Drill Type: ${drillType}
    Prompt/Task: "${promptText}"
    
    Evaluate the student's audio.
    CRITERIA: ${rubric}
    
    Return JSON:
    - isCorrect: boolean (strict check on word order and completion).
    - transcription: what was said.
    - feedback: Explanation in SIMPLIFIED CHINESE. Explain WHY the word order is right or wrong.
    - betterVersion: The perfect version of the sentence.
  `;

  return withModelFallback(async (modelId) => {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'audio/webm',
              data: audioBase64
            }
          },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isCorrect: { type: Type.BOOLEAN },
            transcription: { type: Type.STRING },
            feedback: { type: Type.STRING },
            betterVersion: { type: Type.STRING }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as DrillResult;
    }
    throw new Error(`No response text from ${modelId}`);
  });
};