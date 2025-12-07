
export enum ExamPart {
  Part1 = 'Part 1: Interview',
  Part2 = 'Part 2: Description',
  Part3 = 'Part 3: Preference',
  Part4 = 'Part 4: Story',
}

export enum DrillType {
  Completion = 'completion', // Finish the sentence (want/omdat)
  Expansion = 'expansion',   // Add Time/Place
  Sequence = 'sequence'      // Eerst/Daarna
}

export interface IdealSample {
  id: number;
  text: string;
  translation: string; // New: Full sentence translation
  explanation?: string; // Optional pre-calculated explanation
}

export interface QuestionItem {
  id: string;
  part: ExamPart;
  questionDutch: string;
  questionChinese?: string; // Context/Translation
  imageDescription?: string; // For Parts 2, 3, 4
  context?: string; // Additional context
  idealSamples: IdealSample[];
}

export interface WordAlignment {
  dutch: string;
  chinese: string;
}

export interface AIAnalysis {
  grammar: string[];
  vocabulary: Array<{ word: string; meaning: string }>;
  tips: string;
  structure: string; // Text description of structure
  syntaxFormula: string[]; // Visual formula e.g. ["Subject", "Verb", "Time"]
  keyWords: string[]; // Extracted keywords/verbs for practice
  wordAlignment: WordAlignment[]; // New: Word-by-word translation alignment
  realLifeContext: string; // Where can this be seen/used?
  relatedTopics: string[]; // Predicted related exam topics
}

export interface AIGrade {
  score: number; // 1-10
  transcription: string;
  pronunciation: string;
  grammarCorrection: string;
  feedback: string;
}

export interface DrillResult {
  isCorrect: boolean;
  transcription: string;
  feedback: string; // Chinese explanation of the structure
  betterVersion?: string;
}

export interface StudyPlanDay {
  day: number;
  title: string;
  focus: string; // "Part 1 & Grammar"
  description: string;
  tasks: string[];
  recommendedParts: ExamPart[];
}

// --- NEW TYPES FOR KNOWLEDGE BASE ---
export interface TopicReference {
  id: string;
  title: string;
  icon: string; // Emoji
  keywords: Array<{ word: string; mean: string; type: 'verb' | 'noun' | 'adj' }>;
  sentences: Array<{ nl: string; cn: string }>;
}

export interface GrammarRule {
  id: string;
  title: string;
  formula: string[];
  description: string;
  examples: Array<{ wrong?: string; right: string; note: string }>;
}
