import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysis, AIGrade } from "./types";

// Helper to get client
const getAiClient = () => {
  // CRITICAL FIX: Use import.meta.env.VITE_API_KEY for Vercel/Vite deployments.
  // 'process.env' does not exist in the browser and causes a white screen crash.
  const apiKey = (import.meta as any).env.VITE_API_KEY;
  
  if (!apiKey) {
    console.error("API Key is missing. Please check your Vercel Environment Variables.");
    throw new Error("API Key not found");
  }
  
  return new GoogleGenAI({ apiKey });
};

// 1. TEACHING MODE: Analyze the ideal answer
export const analyzeIdealAnswer = async (question: string, answer: string): Promise<AIAnalysis> => {
  const ai = getAiClient();
  
  const prompt = `
    You are an expert Dutch tutor for Chinese A2 Inburgering students.
    Analyze this Question and Answer pair.
    Question: "${question}"
    Answer: "${answer}"

    Provide analysis in structured JSON.
    - grammar: List key grammar points used.
    - vocabulary: List key words with their meanings in Chinese.
    - tips: A helpful tip for remembering this.
    - structure: The sentence structure used.
    - realLifeContext: Where this sentence can be used.
    - relatedTopics: Other topics related to this.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
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
  throw new Error("No response from AI");
};

// 2. EXAM MODE: Grade the user's audio
export const gradeUserAudio = async (question: string, audioBase64: string): Promise<AIGrade> => {
  const ai = getAiClient();

  const prompt = `
    You are a Dutch Inburgering Exam (A2 level) examiner.
    The student is answering the question: "${question}".
    Evaluate the audio response.
    
    Return a JSON object with:
    - score: number (1-10) based on A2 level expectations (understandability is key).
    - transcription: what you heard.
    - pronunciation: specific feedback on pronunciation errors.
    - grammarCorrection: correct the sentence if grammar is wrong.
    - feedback: general constructive feedback in English.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
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
  throw new Error("No response from AI");
};