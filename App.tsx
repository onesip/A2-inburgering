import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Volume2, BookOpen, GraduationCap, ChevronRight, ChevronLeft, RefreshCw, CheckCircle2, AlertCircle, Lightbulb, MapPin, List, Shuffle, Calendar, Target, Clock, Trophy, Gauge, Hammer, Plus, Ear, CheckSquare, PartyPopper, Sparkles, Dumbbell } from 'lucide-react';
import { QUESTION_DATABASE, STUDY_PLAN, DRILL_SCENARIOS } from './constants';
import { ExamPart, QuestionItem, AIAnalysis, AIGrade, StudyPlanDay, DrillType, DrillResult } from './types';
import { analyzeIdealAnswer, gradeUserAudio, gradeDrillAudio } from './geminiService';

// --- UTILS ---

/**
 * Helper to force browser to use a Dutch voice.
 * Browsers often default to English if 'voice' object is not explicitly set,
 * even if 'lang' is set to 'nl-NL'.
 */
const speakDutch = (text: string, rate: number = 0.9) => {
  // Cancel any currently playing audio to avoid overlap
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = rate;

  // Get all available voices
  const voices = window.speechSynthesis.getVoices();
  
  // Try to find a Dutch voice
  // 1. Exact match for Netherlands
  // 2. Any Dutch match (could be Belgian Dutch, which is fine)
  const dutchVoice = voices.find(v => v.lang === 'nl-NL') || 
                     voices.find(v => v.lang.toLowerCase().includes('nl'));

  if (dutchVoice) {
    utterance.voice = dutchVoice;
  } else {
    console.warn("No specific Dutch voice found. Browser will use default.");
  }

  window.speechSynthesis.speak(utterance);
};

// --- COMPONENTS ---

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

interface WordSpeakerProps {
  text: string;
  speed: number;
  chinese?: string;
  highlighted?: boolean;
}

const WordSpeaker: React.FC<WordSpeakerProps> = ({ text, speed, chinese, highlighted }) => {
  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakDutch(text, speed);
  };

  return (
    <div 
      onClick={speak} 
      className={`
        flex flex-col items-center cursor-pointer rounded px-1 transition-all
        ${highlighted ? 'bg-orange-100 scale-105' : 'hover:bg-slate-100'}
      `}
      title="点击发音"
    >
      <span className={`text-lg font-medium ${highlighted ? 'text-orange-700 font-bold' : 'text-slate-800'}`}>
        {text}
      </span>
      {chinese && (
        <span className={`text-xs ${highlighted ? 'text-orange-600 font-bold' : 'text-slate-500'}`}>
          {chinese}
        </span>
      )}
    </div>
  );
};

interface SentenceSpeakerProps {
  text: string;
  speed: number;
  minimal?: boolean;
  translation?: string;
  alignment?: { dutch: string, chinese: string }[];
}

const SentenceSpeaker: React.FC<SentenceSpeakerProps> = ({ 
  text, 
  speed, 
  minimal = false, 
  translation,
  alignment 
}) => {
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);

  const speak = () => {
    speakDutch(text, speed);
  };

  const words = text.split(' ');

  return (
    <div className={`flex flex-col gap-3 group ${minimal ? '' : 'w-full'}`}>
      <div className={`flex flex-wrap gap-x-2 gap-y-3 leading-relaxed ${minimal ? '' : 'p-4 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:border-orange-300 transition-colors'}`}>
        
        {/* Render Words: Either simple split OR Aligned Gloss */}
        {alignment ? (
           alignment.map((item, i) => (
             <WordSpeaker 
               key={i} 
               text={item.dutch} 
               speed={speed} 
               chinese={item.chinese} 
               highlighted={activeWordIndex === i}
             />
           ))
        ) : (
          words.map((word, i) => (
            <WordSpeaker key={i} text={word} speed={speed} />
          ))
        )}
      </div>

      {/* Full Sentence Translation */}
      {translation && (
        <div className={`text-sm text-slate-500 italic px-1 ${minimal ? '' : 'ml-1'}`}>
           <span className="font-bold text-slate-400 text-xs uppercase mr-2">意思:</span>
           {translation}
        </div>
      )}

      {/* Action Button */}
      {!minimal && (
        <button 
          onClick={speak}
          className="self-start flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full"
        >
          <Volume2 size={14} /> 听整句
        </button>
      )}
      {minimal && (
         <button 
          onClick={speak}
          className="self-start flex items-center gap-1.5 text-xs text-green-700 font-bold hover:text-green-800 bg-green-200/50 px-2 py-1 rounded shadow-sm mt-1"
        >
          <Volume2 size={12} /> 听标准示范 (整句)
        </button>
      )}
    </div>
  );
};

const StrategyCard = ({ part }: { part: ExamPart }) => {
  let content = {
    title: "",
    tips: [] as string[],
    templates: [] as string[]
  };

  switch (part) {
    case ExamPart.Part1:
      content = {
        title: "Part 1: 问答题策略",
        tips: ["必须回答两个点 (频率 + 地点)", "使用连词 'en' 连接", "保持简短，不要过多发挥"],
        templates: ["Ik ga ... en ik ...", "Dat doe ik ... keer per week."]
      };
      break;
    case ExamPart.Part2:
      content = {
        title: "Part 2: 单图描述策略",
        tips: ["描述人物 + 动作", "必须联系自身经验 (Ik)", "使用现在时"],
        templates: ["Op de foto zie ik ...", "Ik doe dit ook vaak.", "Ik vind dit leuk."]
      };
      break;
    case ExamPart.Part3:
      content = {
        title: "Part 3: 偏好选择策略",
        tips: ["明确表达选择 (liever)", "必须给出理由 (want/omdat)", "对比两张图的优缺点"],
        templates: ["Ik ... liever ..., want ...", "Ik vind ... leuker/beter."]
      };
      break;
    case ExamPart.Part4:
      content = {
        title: "Part 4: 故事讲述策略",
        tips: ["必须有顺序逻辑 (Start-Middle-End)", "注意时态一致", "添加情感结尾"],
        templates: ["Eerst ... (首先)", "Daarna ... (然后)", "Tot slot ... (最后)"]
      };
      break;
  }

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 rounded-xl p-4 mb-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="text-orange-500" size={18} />
        <h4 className="font-bold text-orange-900 text-sm uppercase tracking-wide">{content.title}</h4>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
           <span className="text-xs font-bold text-orange-400 block mb-1">关键技巧 (Tips)</span>
           <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
             {content.tips.map((t, i) => <li key={i}>{t}</li>)}
           </ul>
        </div>
        <div className="bg-white/60 rounded-lg p-3 border border-orange-100/50">
           <span className="text-xs font-bold text-orange-400 block mb-1">万能模板 (Templates)</span>
           <div className="flex flex-col gap-2">
             {content.templates.map((t, i) => (
               <div key={i} className="text-sm font-medium text-orange-800 bg-orange-100/50 px-2 py-1 rounded border border-orange-200/30">
                 {t}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

const SentenceGym = () => {
  const [activeDrill, setActiveDrill] = useState<DrillType>(DrillType.Completion);
  const [prompt, setPrompt] = useState(DRILL_SCENARIOS[DrillType.Completion][0]);
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState<DrillResult | null>(null);
  const [isGrading, setIsGrading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const generatePrompt = (type: DrillType) => {
    const list = DRILL_SCENARIOS[type];
    const random = list[Math.floor(Math.random() * list.length)];
    setPrompt(random);
    setResult(null);
  };

  const handleTabChange = (type: DrillType) => {
    setActiveDrill(type);
    generatePrompt(type);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setResult(null);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("无法访问麦克风。");
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorderRef.current) return;
    
    mediaRecorderRef.current.stop();
    setIsRecording(false);

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        await handleGrade(base64Audio);
      };
    };
  };

  const handleGrade = async (audioBase64: string) => {
    setIsGrading(true);
    try {
      const res = await gradeDrillAudio(activeDrill, prompt.prompt, audioBase64);
      setResult(res);
    } catch (error) {
      console.error(error);
      alert("AI 老师休息中，请稍后再试。");
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6 shadow-sm mt-6 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
          <Dumbbell size={150} />
       </div>

       <div className="flex items-center gap-2 mb-6 relative z-10">
         <div className="bg-emerald-500 text-white p-2 rounded-lg shadow">
           <Dumbbell size={24} />
         </div>
         <div>
            <h3 className="font-bold text-emerald-900 text-lg">句型健身房 (Sentence Gym)</h3>
            <p className="text-xs text-emerald-600">不练整段，只练肌肉记忆！(yiban / yikun)</p>
         </div>
       </div>

       {/* Tabs */}
       <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide relative z-10">
         {[
           { id: DrillType.Completion, label: '半句接龙 (Completion)' },
           { id: DrillType.Expansion, label: '扩句挑战 (Expansion)' },
           { id: DrillType.Sequence, label: '逻辑链 (Sequence)' }
         ].map(tab => (
           <button
             key={tab.id}
             onClick={() => handleTabChange(tab.id)}
             className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
               activeDrill === tab.id 
                 ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-200' 
                 : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
             }`}
           >
             {tab.label}
           </button>
         ))}
       </div>

       {/* Challenge Card */}
       <div className="bg-white rounded-xl shadow border border-emerald-100 p-6 flex flex-col items-center text-center relative z-10">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">你的挑战任务</span>
          <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 leading-relaxed">
            {prompt.prompt}
          </h4>
          <p className="text-sm text-slate-500 mb-6 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
             💡 {prompt.hint}
          </p>

          <div className="flex items-center gap-4">
             <button
               onClick={() => generatePrompt(activeDrill)}
               className="p-3 text-slate-400 hover:text-emerald-600 transition-colors"
               title="换一题"
             >
               <RefreshCw size={20} />
             </button>

             <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg
                  ${isRecording 
                    ? 'bg-red-500 text-white scale-110 ring-4 ring-red-200 animate-pulse' 
                    : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105'
                  }
                `}
             >
                {isRecording ? <Square size={24} fill="currentColor" /> : <Mic size={24} />}
             </button>
          </div>
          
          <p className="text-xs text-slate-400 mt-4 h-4">
            {isRecording ? "正在录音... 请补全句子" : "点击麦克风开始挑战"}
          </p>
       </div>

       {/* Feedback Area */}
       {isGrading && (
         <div className="mt-4 text-center text-emerald-600 text-sm animate-pulse font-medium">
           AI 教练正在检查你的语序...
         </div>
       )}

       {result && !isGrading && (
         <div className={`mt-4 rounded-xl p-4 border animate-in slide-in-from-top-2 relative z-10 ${result.isCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
            <div className="flex items-start gap-3">
               <div className={`mt-1 p-1 rounded-full text-white ${result.isCorrect ? 'bg-green-500' : 'bg-orange-500'}`}>
                 {result.isCorrect ? <CheckSquare size={16} /> : <AlertCircle size={16} />}
               </div>
               <div className="text-left">
                  <h5 className={`font-bold text-sm mb-1 ${result.isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                    {result.isCorrect ? "挑战成功！" : "还需要调整"}
                  </h5>
                  <p className="text-slate-700 text-sm mb-2">"{result.transcription}"</p>
                  <p className="text-xs text-slate-500 mb-3">{result.feedback}</p>
                  
                  {result.betterVersion && (
                    <div className="bg-white/50 p-2 rounded border border-black/5">
                      <span className="text-xs font-bold text-slate-400 uppercase mr-2">标准示范:</span>
                      <span className="text-sm font-medium text-slate-700">{result.betterVersion}</span>
                      <button 
                        onClick={() => speakDutch(result.betterVersion!, 0.85)}
                        className="ml-2 inline-block align-middle text-blue-500 hover:text-blue-700"
                      >
                         <Volume2 size={14} />
                      </button>
                    </div>
                  )}
               </div>
            </div>
         </div>
       )}
    </div>
  );
}

const StudyPlanCard = ({ 
  currentDay, 
  plan, 
  examDate,
  onStartPractice,
  completedTasks,
  onToggleTask
}: { 
  currentDay: number, 
  plan: StudyPlanDay, 
  examDate: Date,
  onStartPractice: (parts: ExamPart[]) => void,
  completedTasks: number[],
  onToggleTask: (index: number) => void
}) => {
  const today = new Date();
  const diffTime = Math.abs(examDate.getTime() - today.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculate Progress
  const totalTasks = plan.tasks.length;
  const completedCount = completedTasks.length;
  const progressPercentage = Math.round((completedCount / totalTasks) * 100);
  const isDayComplete = completedCount === totalTasks && totalTasks > 0;

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white shadow-xl mb-6 relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Target size={120} />
      </div>
      
      {/* Header Info */}
      <div className="flex justify-between items-start relative z-10 mb-4">
         <div>
           <div className="flex items-center gap-2 text-indigo-200 text-sm font-bold uppercase tracking-wider mb-1">
             <Calendar size={14} /> 20天螺旋式突击计划
           </div>
           <h2 className="text-2xl font-bold">第 {plan.day} 天: {plan.title}</h2>
         </div>
         <div className="text-right">
           <div className="text-3xl font-bold text-yellow-300">{diffDays}</div>
           <div className="text-xs text-indigo-200 uppercase font-bold">距离考试(天)</div>
         </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 mb-6">
        <div className="flex justify-between text-xs font-bold text-indigo-200 mb-1">
          <span>今日进度</span>
          <span>{progressPercentage}%</span>
        </div>
        <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-green-400 transition-all duration-700 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Celebration Banner */}
      {isDayComplete && (
        <div className="mb-4 bg-yellow-400/90 text-yellow-900 p-3 rounded-lg font-bold flex items-center justify-center gap-2 animate-in zoom-in slide-in-from-top-2 shadow-lg backdrop-blur-md ring-2 ring-yellow-200">
          <PartyPopper className="animate-bounce" />
          太棒了！今日任务全部完成！
        </div>
      )}

      {/* Tasks List */}
      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 mb-4">
        <p className="text-indigo-100 italic mb-4 border-b border-white/10 pb-2">"{plan.description}"</p>
        <ul className="space-y-3">
          {plan.tasks.map((task, i) => {
            const isCompleted = completedTasks.includes(i);
            return (
              <li 
                key={i} 
                onClick={() => onToggleTask(i)}
                className={`
                  flex items-start gap-3 text-sm font-medium cursor-pointer group p-2 rounded-lg transition-all
                  ${isCompleted ? 'bg-green-500/20' : 'hover:bg-white/5'}
                `}
              >
                 <div className={`mt-0.5 transition-colors ${isCompleted ? 'text-green-300' : 'text-indigo-300 group-hover:text-white'}`}>
                    {isCompleted ? <CheckSquare size={18} /> : <Square size={18} />}
                 </div>
                 <span className={`transition-all ${isCompleted ? 'text-indigo-200 line-through decoration-indigo-400/50' : 'text-white'}`}>
                   {task}
                 </span>
              </li>
            );
          })}
        </ul>
      </div>

      <button 
        onClick={() => onStartPractice(plan.recommendedParts)}
        className="w-full bg-yellow-400 text-indigo-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 shadow-lg transform active:scale-95"
      >
        <Trophy size={18} /> 开始今日练习
      </button>
    </div>
  );
};

// --- MAIN APP ---

const App: React.FC = () => {
  const [activePart, setActivePart] = useState<ExamPart>(ExamPart.Part1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGrading, setIsGrading] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isDrillMode, setIsDrillMode] = useState(false); // New: Track if user is in "Drill" mode
  
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [grade, setGrade] = useState<AIGrade | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  // Study Plan State
  const [startDay, setStartDay] = useState<number | null>(null);
  const [currentPlanDay, setCurrentPlanDay] = useState<number>(1);
  
  // Tracker State: { [dayNumber]: [indexOfTask1, indexOfTask2] }
  const [dailyProgress, setDailyProgress] = useState<{ [key: number]: number[] }>({});

  const EXAM_DATE = new Date('2024-12-30'); 

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Pre-load voices to ensure they are available when user clicks
  useEffect(() => {
    const loadVoices = () => {
       window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  // Initialize Plan Logic & Load Progress
  useEffect(() => {
    // 1. Plan Date Logic
    const storedStart = localStorage.getItem('studyPlanStartDate');
    const today = new Date();
    
    if (storedStart) {
      const startDate = new Date(parseInt(storedStart));
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      const dayNum = Math.max(1, Math.min(20, diffDays)); 
      setCurrentPlanDay(dayNum);
      setStartDay(parseInt(storedStart));
    } else {
      const now = Date.now();
      localStorage.setItem('studyPlanStartDate', now.toString());
      setStartDay(now);
      setCurrentPlanDay(1);
    }

    // 2. Load Task Progress
    const storedProgress = localStorage.getItem('studyPlanProgress');
    if (storedProgress) {
      try {
        setDailyProgress(JSON.parse(storedProgress));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  // Save Progress whenever it changes
  useEffect(() => {
    if (Object.keys(dailyProgress).length > 0) {
      localStorage.setItem('studyPlanProgress', JSON.stringify(dailyProgress));
    }
  }, [dailyProgress]);

  const handleTaskToggle = (taskIndex: number) => {
    setDailyProgress(prev => {
      const currentDayTasks = prev[currentPlanDay] || [];
      const isCompleted = currentDayTasks.includes(taskIndex);
      
      let newTasks;
      if (isCompleted) {
        // Remove
        newTasks = currentDayTasks.filter(id => id !== taskIndex);
      } else {
        // Add
        newTasks = [...currentDayTasks, taskIndex];
      }
      
      return {
        ...prev,
        [currentPlanDay]: newTasks
      };
    });
  };

  // Filter questions for active part
  const questions = QUESTION_DATABASE.filter(q => q.part === activePart);
  const currentQuestion = questions[currentQuestionIndex];

  // Reset state when question changes
  useEffect(() => {
    setAnalysis(null);
    setGrade(null);
    setIsDrillMode(false); // Reset drill mode
  }, [currentQuestionIndex, activePart]);

  // Check for API Key (Updated for Vite)
  useEffect(() => {
    // VITE SPECIFIC: Use import.meta.env.VITE_API_KEY
    // Safely cast to 'any' to avoid TypeScript errors if types aren't loaded
    const apiKey = (import.meta as any).env?.VITE_API_KEY;
    if (!apiKey) {
      setApiKeyMissing(true);
    }
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRandom = () => {
    if (questions.length <= 1) return;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * questions.length);
    } while (newIndex === currentQuestionIndex);
    setCurrentQuestionIndex(newIndex);
  };

  const handlePlanPractice = (parts: ExamPart[]) => {
    // Set the first recommended part as active
    if (parts.length > 0) {
      setActivePart(parts[0]);
      setCurrentQuestionIndex(0);
      window.scrollTo({ top: 500, behavior: 'smooth' }); // Scroll to practice area
    }
  };

  const playQuestionAudio = () => {
    if (!currentQuestion) return;
    speakDutch(currentQuestion.questionDutch, playbackSpeed);
  };

  const handleAnalyze = async () => {
    if (!currentQuestion) return;
    setIsAnalyzing(true);
    try {
      // Analyze the first ideal sample
      const result = await analyzeIdealAnswer(currentQuestion.questionDutch, currentQuestion.idealSamples[0].text);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("分析失败，请检查网络或 API Key。");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const startRecording = async (isDrill: boolean = false) => {
    setGrade(null);
    setIsDrillMode(isDrill); // Set whether this is a drill or normal exam
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("无法访问麦克风。");
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorderRef.current) return;
    
    mediaRecorderRef.current.stop();
    setIsRecording(false);

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        await handleGrade(base64Audio);
      };
    };
  };

  const handleGrade = async (audioBase64: string) => {
    if (!currentQuestion) return;
    setIsGrading(true);
    
    // If in drill mode and analysis exists, pass keywords for specific checking
    const keywords = (isDrillMode && analysis?.keyWords) ? analysis.keyWords : undefined;

    try {
      // Updated: Pass activePart to gradeUserAudio for specific rubric checking
      const result = await gradeUserAudio(currentQuestion.questionDutch, audioBase64, activePart, keywords);
      setGrade(result);
    } catch (error) {
      console.error(error);
      alert("评分失败，请重试。");
    } finally {
      setIsGrading(false);
    }
  };

  if (apiKeyMissing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">缺少 API Key</h1>
          <p className="text-slate-600 mb-4">
            应用无法连接到 Google Gemini AI。
          </p>
          <div className="bg-slate-50 p-3 rounded text-left text-sm text-slate-700 font-mono overflow-x-auto border border-slate-200">
             Vercel 环境变量名:<br/>
             <span className="font-bold text-indigo-600">VITE_API_KEY</span>
          </div>
          <p className="text-xs text-slate-500 mt-4">
             请检查 Vercel 项目设置 &gt; Environment Variables.
          </p>
        </div>
      </div>
    );
  }

  // Get current plan data
  const todaysPlan = STUDY_PLAN.find(p => p.day === currentPlanDay) || STUDY_PLAN[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      {/* Header */}
      <header className="bg-orange-600 text-white p-4 sticky top-0 z-20 shadow-md">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-orange-200" />
            <h1 className="font-bold text-lg md:text-xl tracking-tight">荷兰语融入考试 A2 教练</h1>
          </div>
          <div className="text-xs font-bold bg-orange-700/50 border border-orange-500/50 px-3 py-1 rounded-full text-orange-50">
            AI 助教
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 flex flex-col gap-6">
        
        {/* STUDY PLAN DASHBOARD (TRACKER UPDATED) */}
        <StudyPlanCard 
          currentDay={currentPlanDay}
          plan={todaysPlan}
          examDate={EXAM_DATE}
          onStartPractice={handlePlanPractice}
          completedTasks={dailyProgress[currentPlanDay] || []}
          onToggleTask={handleTaskToggle}
        />

        {/* Part Selector */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {Object.values(ExamPart).map((part) => (
            <button
              key={part}
              onClick={() => { setActivePart(part); setCurrentQuestionIndex(0); }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activePart === part 
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {part}
            </button>
          ))}
        </div>

        {/* Speed Control */}
        <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <Gauge size={18} className="text-indigo-500" />
            <span>语音语速</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            {[0.5, 0.75, 1.0, 1.25].map((speed) => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`text-xs font-bold px-3 py-1.5 rounded-md transition-all ${
                  playbackSpeed === speed
                    ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                    : 'text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>

        {questions.length === 0 ? (
           <div className="text-center py-20 text-slate-500">该部分暂无题目。</div>
        ) : (
          <>
            {/* Strategy Card - NEW: Shows tips from PDF based on active part */}
            <StrategyCard part={activePart} />

            {/* SENTENCE GYM - NEW: Drills for sentence structure */}
            <SentenceGym />

            {/* Navigation & Tools */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-slate-500 text-sm font-medium">
                <button 
                  onClick={handlePrev} 
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-1 disabled:opacity-30 hover:text-blue-600 transition-colors"
                >
                  <ChevronLeft size={16} /> 上一题
                </button>
                <span className="bg-slate-200 px-2 py-0.5 rounded text-xs text-slate-600">
                  {currentQuestionIndex + 1} / {questions.length}
                </span>
                <button 
                  onClick={handleNext} 
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="flex items-center gap-1 disabled:opacity-30 hover:text-blue-600 transition-colors"
                >
                  下一题 <ChevronRight size={16} />
                </button>
              </div>

              {/* Muscle Memory Builder Tool */}
              <button 
                onClick={handleRandom}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg shadow hover:from-teal-600 hover:to-teal-700 transition-all font-semibold text-sm"
              >
                <Shuffle size={16} /> 随机练习 (培养语感)
              </button>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ring-1 ring-slate-100">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 border-b border-blue-100 relative">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block flex items-center gap-1">
                   <Lightbulb size={12} /> 考试真题
                </span>
                
                <div className="flex gap-3 items-start">
                  <h2 className="text-xl font-bold text-slate-800 leading-snug flex-grow">
                    {currentQuestion.questionDutch}
                  </h2>
                  <button 
                    onClick={playQuestionAudio}
                    className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-blue-700 hover:bg-blue-200 hover:scale-105 transition-all shadow-sm"
                    title="听问题"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
                
                <p className="text-slate-500 mt-2 text-base font-medium border-l-4 border-blue-300 pl-3">
                  {currentQuestion.questionChinese}
                </p>
              </div>

              {currentQuestion.imageDescription && (
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-start gap-3">
                   <div className="mt-0.5 text-slate-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                   </div>
                   <p className="text-slate-600 italic text-sm">{currentQuestion.imageDescription}</p>
                </div>
              )}

              {/* Ideal Samples Section */}
              <div className="p-5">
                 <div className="flex justify-between items-center mb-4">
                   <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                     标准范例
                   </h3>
                   <button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="flex items-center gap-2 text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-md shadow-indigo-200 disabled:opacity-70"
                   >
                     {isAnalyzing ? <Spinner /> : <BookOpen size={16} />}
                     {isAnalyzing ? "正在分析..." : "老师帮我拆解!"}
                   </button>
                 </div>

                 <div className="flex flex-col gap-6">
                    {currentQuestion.idealSamples.map((sample, idx) => (
                      <div key={sample.id} className="relative">
                        <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 to-orange-100 rounded-full"></div>
                        <div className="text-xs text-slate-400 mb-1 font-bold uppercase tracking-wider">选项 {idx + 1}</div>
                        <SentenceSpeaker 
                          text={sample.text} 
                          speed={playbackSpeed} 
                          translation={sample.translation}
                          // Only provide alignment for the first sample IF analysis is present
                          alignment={idx === 0 && analysis?.wordAlignment ? analysis.wordAlignment : undefined}
                        />
                      </div>
                    ))}
                 </div>
              </div>

              {/* AI Analysis Result */}
              {analysis && (
                <div className="m-5 mt-0 bg-indigo-50/80 rounded-xl p-5 border border-indigo-100 animate-in fade-in slide-in-from-top-4 backdrop-blur-sm">
                  <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2 text-lg border-b border-indigo-200 pb-2">
                    <GraduationCap size={20} /> 
                    名师详解
                  </h4>
                  
                  <div className="space-y-6">
                    {/* Structure Formula Visualizer */}
                    <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-sm">
                      <span className="font-bold text-xs text-indigo-400 uppercase tracking-wider block mb-2">语序公式 (The Formula)</span>
                      {analysis.syntaxFormula && analysis.syntaxFormula.length > 0 ? (
                        <div className="flex flex-wrap gap-2 items-center">
                          {analysis.syntaxFormula.map((block, i) => (
                            <React.Fragment key={i}>
                               <div className="bg-indigo-600 text-white px-3 py-1.5 rounded-md font-bold text-sm shadow">
                                 {block}
                               </div>
                               {i < analysis.syntaxFormula.length - 1 && <Plus size={16} className="text-indigo-300" />}
                            </React.Fragment>
                          ))}
                        </div>
                      ) : (
                        <div className="text-slate-500 text-sm italic">{analysis.structure}</div>
                      )}
                    </div>

                    {/* Vocabulary */}
                    <div>
                      <span className="font-bold text-xs text-indigo-400 uppercase tracking-wider block mb-1">核心词汇</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {analysis.vocabulary.map((v, i) => (
                          <div key={i} className="flex justify-between bg-white px-3 py-2 rounded-lg border border-indigo-100 shadow-sm hover:border-indigo-300 transition-colors">
                             <span className="font-semibold text-slate-700">{v.word}</span>
                             <span className="text-slate-500 text-sm">{v.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {/* Grammar Tip */}
                       <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                          <span className="font-bold text-xs text-orange-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                             <Lightbulb size={12} /> 语法点拨
                          </span>
                          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                            {analysis.grammar.map((g, i) => <li key={i}>{g}</li>)}
                          </ul>
                       </div>

                       {/* Context */}
                       <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <span className="font-bold text-xs text-green-700 uppercase tracking-wider block mb-1 flex items-center gap-1">
                             <MapPin size={12} /> 使用场景
                          </span>
                          <p className="text-slate-700 text-sm">{analysis.realLifeContext}</p>
                       </div>
                    </div>

                    <div className="text-xs text-right text-indigo-400 italic">
                       * 记忆小贴士: {analysis.tips}
                    </div>

                    {/* GRAMMAR DRILL BUTTON */}
                    {analysis.keyWords && analysis.keyWords.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-indigo-200">
                         <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                            <h5 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                               <Hammer size={18} /> 语法造句特训 (Grammar Drill)
                            </h5>
                            <p className="text-sm text-yellow-700 mb-3">
                               请尝试使用以下词汇造句，AI 将专门检查你的<b>语序</b>是否正确：
                            </p>
                            <div className="flex gap-2 flex-wrap mb-4">
                               {analysis.keyWords.map((kw, i) => (
                                  <div key={i} className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-yellow-300 text-yellow-900 font-medium text-sm">
                                     {kw}
                                     <Volume2 
                                        size={12} 
                                        className="text-yellow-500 cursor-pointer hover:text-yellow-700"
                                        onClick={() => speakDutch(kw, 0.8)}
                                     />
                                  </div>
                               ))}
                            </div>
                            
                            <button
                              onClick={() => isRecording ? stopRecording() : startRecording(true)}
                              className={`w-full py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                                isRecording && isDrillMode
                                  ? 'bg-red-500 text-white animate-pulse'
                                  : 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300'
                              }`}
                            >
                               {isRecording && isDrillMode ? <Square size={16} /> : <Mic size={16} />}
                               {isRecording && isDrillMode ? "录音中... 点击停止" : "开始造句挑战"}
                            </button>
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Practice Section (Standard Exam Mode) */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-pink-500"></div>
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-lg">
                <Mic className="text-red-500" /> 模拟考试
              </h3>
              
              <div className="flex flex-col items-center gap-6">
                 <button
                   onClick={() => isRecording ? stopRecording() : startRecording(false)}
                   className={`
                     relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group
                     ${isRecording && !isDrillMode
                        ? 'bg-red-50 text-red-600 border-4 border-red-500 scale-110 shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                        : 'bg-gradient-to-br from-red-500 to-pink-600 text-white hover:shadow-xl hover:scale-105'
                     }
                   `}
                 >
                   {isRecording && !isDrillMode ? <Square size={36} fill="currentColor" /> : <Mic size={36} />}
                   {isRecording && !isDrillMode && (
                     <span className="absolute -bottom-10 text-xs font-bold text-red-500 animate-pulse bg-red-100 px-2 py-1 rounded">录音中...</span>
                   )}
                 </button>
                 <p className="text-sm text-slate-500 text-center max-w-sm">
                   {isRecording && !isDrillMode
                     ? "请清晰朗读。完成后点击停止。" 
                     : "点击麦克风开始模拟回答，获取综合打分。"}
                 </p>
              </div>

              {/* Grading Result */}
              {isGrading && (
                <div className="mt-8 text-center text-slate-500 flex flex-col items-center gap-3 animate-pulse">
                  <RefreshCw className="animate-spin text-blue-500" size={24} />
                  <span className="font-medium">{isDrillMode ? "正在检查语序..." : "正在评分中..."}</span>
                </div>
              )}

              {grade && !isGrading && (
                <div className="mt-8 border-t border-slate-100 pt-6 animate-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                      {isDrillMode ? <Hammer size={20} className="text-yellow-600"/> : <Trophy size={20} className="text-yellow-600"/>}
                      {isDrillMode ? "特训反馈" : "成绩单"}
                    </h4>
                    <div className={`px-5 py-2 rounded-xl font-bold text-2xl shadow-sm ${
                      grade.score >= 8 ? 'bg-green-100 text-green-700 border border-green-200' :
                      grade.score >= 6 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                      'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {grade.score}<span className="text-sm text-opacity-60 ml-1">/10</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-2">你的回答</span>
                      <p className="text-slate-800 font-medium leading-relaxed">"{grade.transcription}"</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                       <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                          <span className="flex items-center gap-1.5 text-xs font-bold text-green-700 uppercase tracking-wide mb-2">
                            <CheckCircle2 size={14} /> 语法修正 / 正确发音 (点击单词跟读)
                          </span>
                          {/* UPDATED: Use SentenceSpeaker here so users can listen to correct pronunciation */}
                          <div className="mt-1">
                             <SentenceSpeaker text={grade.grammarCorrection} speed={playbackSpeed} minimal={true} />
                          </div>
                       </div>
                       <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                          <span className="flex items-center gap-1.5 text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">
                            <Ear size={14} /> 发音诊断
                          </span>
                          <p className="text-orange-900 text-sm">{grade.pronunciation}</p>
                       </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                       <span className="text-xs font-bold text-blue-700 uppercase tracking-wide block mb-2">教练点评</span>
                       <p className="text-blue-900 text-sm leading-relaxed">{grade.feedback}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;