import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysis, AIGrade } from "./types";

// Helper to get client
const getAiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// 1. TEACHING MODE: Analyze the ideal answer
export const analyzeIdealAnswer = async (question: string, answer: string): Promise<AIAnalysis> => {
  const ai = getAiClient();
  
  const prompt = `
    You are an expert Dutch tutor for Chinese A2 Inburgering students.
    Analyze this Question and Answer pair.
    Question: "${question}"
    Answer: "${answer}"

    Provide a detailed breakdown for a Chinese student:
    1. Structure: Explain the sentence structure (Subject-Verb-Rest, Want/Omdat usage) in Chinese.
    2. Vocabulary: Key words with Chinese meanings.
    3. Grammar Tip: One specific rule (e.g., inversion, conjugation).
    4. Real-life Context: Where/When would a student see or use this? (e.g., "At the station", "Making appointments").
    5. Related Topics: Predict 2-3 other related exam topics or vocabulary themes.

    Return JSON.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 1024 }, // Enable thinking for precision, kept modest to save tokens
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          structure: { type: Type.STRING, description: "Sentence structure explanation in Chinese" },
          vocabulary: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                word: { type: Type.STRING },
                meaning: { type: Type.STRING, description: "Chinese meaning" }
              }
            }
          },
          grammar: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING, description: "Grammar rules present" } 
          },
          tips: { type: Type.STRING, description: "Exam tip in Chinese" },
          realLifeContext: { type: Type.STRING, description: "Where/when to use this in real life (Chinese)" },
          relatedTopics: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING, description: "Related exam themes" } 
          }
        }
      }
    }
  });

  if (response.text) {
    return JSON.parse(response.text) as AIAnalysis;
  }
  throw new Error("Failed to analyze answer");
};

// 2. GRADING MODE: Grade audio
export const gradeUserAudio = async (question: string, audioBase64: string): Promise<AIGrade> => {
  const ai = getAiClient();

  const prompt = `
    You are a strict but helpful Dutch exam examiner for the Inburgering A2 Spreken exam.
    The student is answering the question: "${question}".
    
    Listen to the audio.
    1. Transcribe exactly what they said.
    2. Rate from 1-10 (A2 level). 6 is passing.
    3. Correct grammar.
    4. Provide feedback in Chinese (Mandarin).
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: {
      parts: [
        { text: prompt },
        {
          inlineData: {
            mimeType: "audio/webm;codecs=opus", 
            data: audioBase64
          }
        }
      ]
    },
    config: {
      thinkingConfig: { thinkingBudget: 1024 }, // Enable thinking for fair and precise grading
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          transcription: { type: Type.STRING },
          pronunciation: { type: Type.STRING, description: "Comments on pronunciation" },
          grammarCorrection: { type: Type.STRING, description: "Corrected Dutch sentence" },
          feedback: { type: Type.STRING, description: "Feedback in Chinese" }
        }
      }
    }
  });

  if (response.text) {
    return JSON.parse(response.text) as AIGrade;
  }
  throw new Error("Failed to grade audio");
};