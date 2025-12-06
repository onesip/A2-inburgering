import { ExamPart, QuestionItem, StudyPlanDay } from './types';

export const STUDY_PLAN: StudyPlanDay[] = [
  // --- PHASE 1: FOUNDATION (PART 1) ---
  {
    day: 1,
    title: "The Basics & Yourself",
    focus: "Part 1: Interview",
    description: "Start simple. Focus on mastering questions about yourself. Short, correct sentences.",
    tasks: ["Practice 5 'Part 1' questions.", "Focus on 'Ik ben...', 'Ik woon...', 'Ik doe...'."],
    recommendedParts: [ExamPart.Part1]
  },
  {
    day: 2,
    title: "Work & Education",
    focus: "Part 1: Interview",
    description: "Expand to work topics. Learn vocabulary for professions and study.",
    tasks: ["Practice 5 'Part 1' questions.", "Learn 3 new job titles in Dutch."],
    recommendedParts: [ExamPart.Part1]
  },
  {
    day: 3,
    title: "Family & Housing",
    focus: "Part 1: Interview",
    description: "Talk about your house and family. Practice numbers (years, ages).",
    tasks: ["Practice 5 'Part 1' questions.", "Describe your living room in 3 sentences."],
    recommendedParts: [ExamPart.Part1]
  },
  {
    day: 4,
    title: "Daily Life & Review",
    focus: "Part 1: Review",
    description: "First mini-review. Random questions from Part 1 to build speed.",
    tasks: ["Use 'Random Question' for Part 1 (10 times).", "Aim for < 5 seconds hesitation."],
    recommendedParts: [ExamPart.Part1]
  },

  // --- PHASE 2: OBSERVATION (PART 2) + SPIRAL REVIEW ---
  {
    day: 5,
    title: "What do you see?",
    focus: "Part 2: Description",
    description: "Intro to Part 2. Simple Subject-Verb-Rest sentences. Don't interpret, just describe.",
    tasks: ["Practice 4 'Part 2' questions.", "Review 2 'Part 1' questions (Spiral)."],
    recommendedParts: [ExamPart.Part2, ExamPart.Part1]
  },
  {
    day: 6,
    title: "Action Verbs",
    focus: "Part 2: Description",
    description: "Focus on verbs: Lopen, praten, koken, kopen. What is the person doing?",
    tasks: ["Practice 5 'Part 2' questions.", "Focus on correct verb conjugation (stam+t)."],
    recommendedParts: [ExamPart.Part2]
  },
  {
    day: 7,
    title: "Details & Colors",
    focus: "Part 2: Description",
    description: "Add details. 'De rode auto', 'twee mensen'.",
    tasks: ["Practice 5 'Part 2' questions.", "Review 3 'Part 1' questions."],
    recommendedParts: [ExamPart.Part2, ExamPart.Part1]
  },
  {
    day: 8,
    title: "Problem & Solution",
    focus: "Part 2: Complex Situations",
    description: "Scenarios: Fire, broken car, sick. Who do they call?",
    tasks: ["Practice 5 'Part 2' questions.", "Learn words: Brandweer, Politie, Dokter, Monteur."],
    recommendedParts: [ExamPart.Part2]
  },
  {
    day: 9,
    title: "Part 2 Mastery Check",
    focus: "Part 2: Speed",
    description: "Random Part 2 questions. Try to answer immediately.",
    tasks: ["Do 10 Random questions from Part 2.", "Do 2 Random questions from Part 1."],
    recommendedParts: [ExamPart.Part2, ExamPart.Part1]
  },

  // --- PHASE 3: OPINIONS (PART 3) + SPIRAL REVIEW ---
  {
    day: 10,
    title: "Making Choices",
    focus: "Part 3: Preference",
    description: "Intro to Part 3. 'Ik doe liever...', 'Ik vind... leuker'.",
    tasks: ["Practice 4 'Part 3' questions.", "Memorize: 'Liever' (preference) vs 'Leuker' (fun)."],
    recommendedParts: [ExamPart.Part3]
  },
  {
    day: 11,
    title: "The 'Omdat/Want' Rule",
    focus: "Part 3: Grammar",
    description: "Crucial grammar! 'Want' + normal order. 'Omdat' + verb at end.",
    tasks: ["Practice 5 'Part 3' questions using ONLY 'Want'.", "Review 2 'Part 2' questions."],
    recommendedParts: [ExamPart.Part3, ExamPart.Part2]
  },
  {
    day: 12,
    title: "Scenarios: Work vs Home",
    focus: "Part 3: Topics",
    description: "Compare working environments, living situations, and travel.",
    tasks: ["Practice 5 'Part 3' questions.", "Review 2 'Part 1' questions."],
    recommendedParts: [ExamPart.Part3, ExamPart.Part1]
  },
  {
    day: 13,
    title: "Scenarios: Free Time",
    focus: "Part 3: Topics",
    description: "Compare sports, food, and hobbies. Give a clear reason.",
    tasks: ["Practice 5 'Part 3' questions.", "Review 2 'Part 2' questions."],
    recommendedParts: [ExamPart.Part3, ExamPart.Part2]
  },
  {
    day: 14,
    title: "Opinion Master",
    focus: "Part 3 & Review",
    description: "Mix it up. Part 3 requires thinking. Practice being decisive.",
    tasks: ["10 Random Part 3 questions.", "3 Random Part 1 questions."],
    recommendedParts: [ExamPart.Part3, ExamPart.Part1]
  },

  // --- PHASE 4: STORYTELLING (PART 4) & FINAL SPRINT ---
  {
    day: 15,
    title: "Sequence Words",
    focus: "Part 4: Story",
    description: "Intro to Part 4. The Magic Trio: 'Eerst', 'Daarna', 'Tot slot'.",
    tasks: ["Practice 3 'Part 4' questions.", "Use the magic trio in every answer."],
    recommendedParts: [ExamPart.Part4]
  },
  {
    day: 16,
    title: "Past Tense (Simple)",
    focus: "Part 4: Grammar",
    description: "Stories are often in the past. 'Hij heeft gekookt'. Keep it simple.",
    tasks: ["Practice 4 'Part 4' questions.", "Review 2 'Part 3' questions."],
    recommendedParts: [ExamPart.Part4, ExamPart.Part3]
  },
  {
    day: 17,
    title: "Daily Routines",
    focus: "Part 4: Story",
    description: "Cooking, Sleeping, Travel stories. Connect the images logically.",
    tasks: ["Practice 4 'Part 4' questions.", "Review 2 'Part 2' questions."],
    recommendedParts: [ExamPart.Part4, ExamPart.Part2]
  },
  {
    day: 18,
    title: "Full Spiral Review",
    focus: "All Parts",
    description: "A heavy practice day. Touching all 4 parts.",
    tasks: ["2 questions from Part 1.", "2 questions from Part 2.", "2 questions from Part 3.", "2 questions from Part 4."],
    recommendedParts: [ExamPart.Part1, ExamPart.Part2, ExamPart.Part3, ExamPart.Part4]
  },
  {
    day: 19,
    title: "Mock Exam 1",
    focus: "Simulation",
    description: "Treat this like the real exam. No pausing. Record everything.",
    tasks: ["Use 'Random' button for 20 minutes.", "Do not restart recordings. Keep going."],
    recommendedParts: [ExamPart.Part1, ExamPart.Part2, ExamPart.Part3, ExamPart.Part4]
  },
  {
    day: 20,
    title: "Final Confidence",
    focus: "Relax & Shine",
    description: "You are ready. Light practice today to boost confidence.",
    tasks: ["Do your favorite 5 questions.", "Tell yourself: 'Ik kan dit!' (I can do this!)"],
    recommendedParts: [ExamPart.Part1, ExamPart.Part2, ExamPart.Part3, ExamPart.Part4]
  }
];

export const QUESTION_DATABASE: QuestionItem[] = [
  // =====================================================================
  // PART 1: INTERVIEW (Over uzelf) - Social Interaction & Personal Life
  // =====================================================================
  {
    id: 'p1-q1',
    part: ExamPart.Part1,
    questionDutch: "Wat doet u in uw vrije tijd? Vertel ook waar u dat doet.",
    questionChinese: "您在空闲时间做什么？也请告诉我在哪里做。",
    idealSamples: [
      { id: 1, text: "Ik speel in mijn vrije tijd met mijn kinderen in ons huis." },
      { id: 2, text: "Ik wandel graag in het park. Dat doe ik in het weekend." }
    ]
  },
  {
    id: 'p1-q2',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u een leuk programma op de televisie? Vertel ook wat u geen leuk programma vindt.",
    questionChinese: "您觉得电视上什么节目好看？也请告诉我您觉得什么节目不好看。",
    idealSamples: [
      { id: 1, text: "Ik vind het journaal interessant, maar ik houd niet van sportprogramma's." },
      { id: 2, text: "Ik kijk graag naar films. Ik vind reclames niet leuk." }
    ]
  },
  {
    id: 'p1-q3',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u van uw buren? En hoe lang kent u ze al?",
    questionChinese: "您觉得您的邻居怎么样？您认识他们多久了？",
    idealSamples: [
      { id: 1, text: "Mijn buren zijn heel rustig. Ik ken ze nu twee jaar." },
      { id: 2, text: "Ik heb aardige buren. Ik woon hier pas één maand." }
    ]
  },
  {
    id: 'p1-q4',
    part: ExamPart.Part1,
    questionDutch: "Wie doet bij u thuis het huishouden? Vertel ook wat u leuk vindt om te doen in huis.",
    questionChinese: "在您家里谁做家务？也请说说您喜欢在家里做什么家务。",
    idealSamples: [
      { id: 1, text: "Ik doe zelf het huishouden. Ik vind koken erg leuk om te doen." },
      { id: 2, text: "Mijn man en ik doen het samen. Ik vind schoonmaken niet erg." }
    ]
  },
  {
    id: 'p1-q5',
    part: ExamPart.Part1,
    questionDutch: "Reist u liever met de auto of met de trein? Vertel ook waarom.",
    questionChinese: "您更喜欢坐车还是坐火车？请说说为什么。",
    idealSamples: [
      { id: 1, text: "Ik reis liever met de trein, want ik kan dan lezen." },
      { id: 2, text: "Ik ga liever met de auto. Dat is sneller dan de trein." }
    ]
  },
  {
    id: 'p1-q6',
    part: ExamPart.Part1,
    questionDutch: "Wat is uw favoriete eten? En hoe vaak eet u dat?",
    questionChinese: "您最喜欢的食物是什么？您多久吃一次？",
    idealSamples: [
      { id: 1, text: "Mijn favoriete eten is rijst met kip. Ik eet dat twee keer per week." },
      { id: 2, text: "Ik vind pasta heel lekker. Ik eet dat elke vrijdag." }
    ]
  },
  {
    id: 'p1-q7',
    part: ExamPart.Part1,
    questionDutch: "Waarom leert u Nederlands? Vertel ook waar u Nederlands leert.",
    questionChinese: "您为什么学荷兰语？也请告诉我您在哪里学荷兰语。",
    idealSamples: [
      { id: 1, text: "Ik leer Nederlands omdat ik werk zoek. Ik leer het op school." },
      { id: 2, text: "Ik wil met de buren praten. Ik leer de taal online." }
    ]
  },
  {
    id: 'p1-q8',
    part: ExamPart.Part1,
    questionDutch: "Wat doet u als het regent? Vertel ook wat u doet als de zon schijnt.",
    questionChinese: "下雨时您做什么？也请说说阳光明媚时您做什么。",
    idealSamples: [
      { id: 1, text: "Als het regent, kijk ik tv. Als de zon schijnt, ga ik naar buiten." },
      { id: 2, text: "Met regen blijf ik thuis. Met zon ga ik fietsen." }
    ]
  },
  {
    id: 'p1-q9',
    part: ExamPart.Part1,
    questionDutch: "Hoe viert u uw verjaardag? Vertel ook met wie u dat doet.",
    questionChinese: "您怎么庆祝生日？也请说说您和谁一起庆祝。",
    idealSamples: [
      { id: 1, text: "Ik eet taart op mijn verjaardag. Ik doe dat met mijn familie." },
      { id: 2, text: "Ik geef een feestje. Ik vier het met vrienden." }
    ]
  },
  {
    id: 'p1-q10',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u van Nederland? Vertel ook wat u van het weer in Nederland vindt.",
    questionChinese: "您觉得荷兰怎么样？也请说说您觉得荷兰的天气怎么样。",
    idealSamples: [
      { id: 1, text: "Ik vind Nederland een mooi land, maar ik vind het weer te koud." },
      { id: 2, text: "Nederland is goed georganiseerd. Het regent wel vaak." }
    ]
  },
  {
    id: 'p1-q11',
    part: ExamPart.Part1,
    questionDutch: "Wat is uw beroep? En werkt u liever alleen of samen?",
    questionChinese: "您的职业是什么？您更喜欢独自工作还是合作？",
    idealSamples: [
      { id: 1, text: "Ik ben kapper. Ik werk liever samen met collega's." },
      { id: 2, text: "Ik heb geen werk. Ik wil graag samenwerken." }
    ]
  },
  {
    id: 'p1-q12',
    part: ExamPart.Part1,
    questionDutch: "Heeft u huisdieren? Vertel ook welk dier u leuk vindt.",
    questionChinese: "您有宠物吗？也请说说您喜欢什么动物。",
    idealSamples: [
      { id: 1, text: "Ik heb geen huisdieren. Ik vind honden wel leuk." },
      { id: 2, text: "Ja, ik heb een kat. Ik houd van katten." }
    ]
  },

  // =====================================================================
  // PART 2: DESCRIPTION (Middenstuk) - Observing Situations
  // =====================================================================
  {
    id: 'p2-q1',
    part: ExamPart.Part2,
    questionDutch: "Kees doet boodschappen op de markt. Vertel wat Kees ziet liggen. Vertel ook wat u van deze boodschappen vindt.",
    questionChinese: "Kees在市场买东西。说说Kees看到了什么。也说说您觉得这些东西怎么样。",
    imageDescription: "Context: Market stall with vegetables (peppers, zucchini, tomatoes).",
    idealSamples: [
      { id: 1, text: "Kees ziet paprika's en courgettes. Ik vind die groentes lekker en gezond." },
      { id: 2, text: "Kees ziet tomaten en bloemkool. Ik vind groenten van de markt altijd vers." }
    ]
  },
  {
    id: 'p2-q2',
    part: ExamPart.Part2,
    questionDutch: "José is aan het werk. Wat is haar beroep? Vertel ook wat ze nu doet.",
    questionChinese: "José正在工作。她的职业是什么？说说她现在在做什么。",
    imageDescription: "Context: Woman in office attire typing on a laptop.",
    idealSamples: [
      { id: 1, text: "José is dokter. Ze werkt op haar laptop." },
      { id: 2, text: "Zij is secretaresse. Ze beantwoordt een e-mail." }
    ]
  },
  {
    id: 'p2-q3',
    part: ExamPart.Part2,
    questionDutch: "Meneer Jansen is in de winkel. Wat wil hij kopen? Vertel ook hoe hij betaalt.",
    questionChinese: "Jansen先生在商店里。他想买什么？说说他怎么付款。",
    imageDescription: "Context: Man holding a coat, standing at counter with bank card.",
    idealSamples: [
      { id: 1, text: "Meneer Jansen wil een nieuwe jas kopen. Hij betaalt met zijn pinpas." },
      { id: 2, text: "Hij koopt kleren. Hij betaalt niet met contant geld, maar met de pin." }
    ]
  },
  {
    id: 'p2-q4',
    part: ExamPart.Part2,
    questionDutch: "Er is brand in het huis. Wat doet de vrouw? Vertel ook wie zij belt.",
    questionChinese: "房子着火了。那个女人在做什么？说说她在给谁打电话。",
    imageDescription: "Context: Smoke in kitchen. Woman running out calling 112.",
    idealSamples: [
      { id: 1, text: "De vrouw loopt snel naar buiten. Zij belt de brandweer." },
      { id: 2, text: "Ze gaat het huis uit. Ze belt 112 voor hulp." }
    ]
  },
  {
    id: 'p2-q5',
    part: ExamPart.Part2,
    questionDutch: "De familie de Vries is in het park. Wat doen de kinderen? Vertel ook wat de ouders doen.",
    questionChinese: "De Vries一家在公园里。孩子们在做什么？也说说父母在做什么。",
    imageDescription: "Context: Kids playing ball. Parents sitting on a bench.",
    idealSamples: [
      { id: 1, text: "De kinderen spelen met een bal. De ouders zitten op een bankje." },
      { id: 2, text: "De kinderen zijn aan het voetballen. De vader en moeder kijken toe." }
    ]
  },
  {
    id: 'p2-q6',
    part: ExamPart.Part2,
    questionDutch: "Fatima is bij de huisarts. Wat is het probleem? Vertel ook wat de dokter doet.",
    questionChinese: "Fatima在看家庭医生。怎么了？也说说医生在做什么。",
    imageDescription: "Context: Fatima holds her ear in pain. Doctor looks in ear.",
    idealSamples: [
      { id: 1, text: "Fatima heeft oorpijn. De dokter kijkt in haar oor." },
      { id: 2, text: "Zij heeft pijn aan haar hoofd. De dokter onderzoekt haar." }
    ]
  },
  {
    id: 'p2-q7',
    part: ExamPart.Part2,
    questionDutch: "Mehmet is op school. Wat doet hij? Vertel ook wat de leraar doet.",
    questionChinese: "Mehmet在学校。他在做什么？也说说老师在做什么。",
    imageDescription: "Context: Student writing in notebook. Teacher writing on blackboard.",
    idealSamples: [
      { id: 1, text: "Mehmet schrijft in zijn schrift. De leraar schrijft op het bord." },
      { id: 2, text: "Hij maakt een opdracht. De meester geeft uitleg." }
    ]
  },
  {
    id: 'p2-q8',
    part: ExamPart.Part2,
    questionDutch: "Mevrouw Smit is in de keuken. Wat maakt ze klaar? Vertel ook wat ze gebruikt.",
    questionChinese: "Smit女士在厨房。她在做什么吃的？也说说她在用什么。",
    imageDescription: "Context: Woman frying an egg. Using a pan.",
    idealSamples: [
      { id: 1, text: "Mevrouw Smit bakt een ei. Ze gebruikt een pan." },
      { id: 2, text: "Ze maakt het ontbijt klaar. Ze kookt op het fornuis." }
    ]
  },
  {
    id: 'p2-q9',
    part: ExamPart.Part2,
    questionDutch: "De auto is kapot. Wat doet de man? Vertel ook wie hem helpt.",
    questionChinese: "车坏了。那个人在做什么？也说说谁在帮他。",
    imageDescription: "Context: Man looking under hood. Mechanic arriving.",
    idealSamples: [
      { id: 1, text: "De man kijkt naar de motor. De monteur helpt hem." },
      { id: 2, text: "Hij belt de garage. De wegenwacht komt helpen." }
    ]
  },
  {
    id: 'p2-q10',
    part: ExamPart.Part2,
    questionDutch: "Het is feest. Wat doen de mensen? Vertel ook wat ze eten.",
    questionChinese: "现在是聚会。人们在做什么？也说说他们在吃什么。",
    imageDescription: "Context: People dancing/talking. Cake on table.",
    idealSamples: [
      { id: 1, text: "De mensen dansen en praten. Ze eten taart." },
      { id: 2, text: "Iedereen is vrolijk. Ze eten gebakjes." }
    ]
  },

  // =====================================================================
  // PART 3: PREFERENCE (Keuze) - Making Comparisons
  // =====================================================================
  {
    id: 'p3-q1',
    part: ExamPart.Part3,
    questionDutch: "U bent op vakantie. Wat doet u liever? Vertel ook waarom.",
    questionChinese: "您在度假。您更喜欢做什么？说说为什么。",
    imageDescription: "Image 1: Relaxing on beach. Image 2: Hiking in forest.",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar het strand, want ik lig graag in de zon." },
      { id: 2, text: "Ik ga liever wandelen, omdat ik van de natuur houd." }
    ]
  },
  {
    id: 'p3-q2',
    part: ExamPart.Part3,
    questionDutch: "Welke sport vindt u leuker? Vertel ook waarom.",
    questionChinese: "您更喜欢哪种运动？说说为什么。",
    imageDescription: "Image 1: Football. Image 2: Basketball.",
    idealSamples: [
      { id: 1, text: "Ik vind voetbal leuker, want ik speel dat met mijn vrienden." },
      { id: 2, text: "Ik vind basketbal leuker. Ik vind voetbal een beetje saai." }
    ]
  },
  {
    id: 'p3-q3',
    part: ExamPart.Part3,
    questionDutch: "U wilt gaan werken. Waar werkt u liever? Vertel ook waarom.",
    questionChinese: "您想去工作。您更喜欢在哪里工作？说说为什么。",
    imageDescription: "Image 1: Working in a busy restaurant. Image 2: Working quietly in an office.",
    idealSamples: [
      { id: 1, text: "Ik werk liever in een restaurant, want ik houd van mensen om mij heen." },
      { id: 2, text: "Ik werk liever op een kantoor. Dat is rustiger." }
    ]
  },
  {
    id: 'p3-q4',
    part: ExamPart.Part3,
    questionDutch: "U gaat een avondje uit. Wat doet u liever? Vertel ook waarom.",
    questionChinese: "您晚上要出去玩。您更喜欢做什么？说说为什么。",
    imageDescription: "Image 1: Cinema (Movie). Image 2: Dance club.",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar de bioscoop, want ik wil de nieuwe film zien." },
      { id: 2, text: "Ik ga liever dansen, want ik houd van muziek." }
    ]
  },
  {
    id: 'p3-q5',
    part: ExamPart.Part3,
    questionDutch: "U gaat boodschappen doen. Waar gaat u liever heen? Vertel ook waarom.",
    questionChinese: "您要去买菜。您更喜欢去哪里？说说为什么。",
    imageDescription: "Image 1: Supermarket. Image 2: Outdoor Market.",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar de supermarkt, want dat is dichterbij." },
      { id: 2, text: "Ik ga liever naar de markt, want daar is het fruit verser." }
    ]
  },
  {
    id: 'p3-q6',
    part: ExamPart.Part3,
    questionDutch: "U wilt ergens wonen. Waar woont u liever? Vertel ook waarom.",
    questionChinese: "您想找个地方住。您更喜欢住在哪里？说说为什么。",
    imageDescription: "Image 1: Big city with flats. Image 2: Village with houses.",
    idealSamples: [
      { id: 1, text: "Ik woon liever in de stad, want daar zijn veel winkels." },
      { id: 2, text: "Ik woon liever in een dorp, omdat het daar rustig is." }
    ]
  },
  {
    id: 'p3-q7',
    part: ExamPart.Part3,
    questionDutch: "U gaat eten. Wat doet u liever? Vertel ook waarom.",
    questionChinese: "您要吃饭。您更喜欢怎么做？说说为什么。",
    imageDescription: "Image 1: Cooking at home. Image 2: Eating at a restaurant.",
    idealSamples: [
      { id: 1, text: "Ik kook liever thuis, want dat is goedkoper." },
      { id: 2, text: "Ik eet liever in een restaurant, want ik kan niet goed koken." }
    ]
  },
  {
    id: 'p3-q8',
    part: ExamPart.Part3,
    questionDutch: "U wilt een taal leren. Hoe doet u dat liever? Vertel ook waarom.",
    questionChinese: "您想学一门语言。您更喜欢怎么学？说说为什么。",
    imageDescription: "Image 1: In a class with others. Image 2: Alone with a computer.",
    idealSamples: [
      { id: 1, text: "Ik leer liever in een klas, want dan kan ik praten met anderen." },
      { id: 2, text: "Ik leer liever alleen, want dan kan ik mij beter concentreren." }
    ]
  },
  {
    id: 'p3-q9',
    part: ExamPart.Part3,
    questionDutch: "U gaat op reis. Wat neemt u mee? Vertel ook waarom.",
    questionChinese: "您去旅行。您会带什么？说说为什么。",
    imageDescription: "Image 1: Suitcase. Image 2: Backpack.",
    idealSamples: [
      { id: 1, text: "Ik neem liever een koffer mee, want daar kan veel in." },
      { id: 2, text: "Ik neem liever een rugzak mee, want dat is makkelijker dragen." }
    ]
  },
  {
    id: 'p3-q10',
    part: ExamPart.Part3,
    questionDutch: "U wilt een huisdier. Wat kiest u? Vertel ook waarom.",
    questionChinese: "您想要个宠物。您选什么？说说为什么。",
    imageDescription: "Image 1: Dog. Image 2: Cat.",
    idealSamples: [
      { id: 1, text: "Ik kies een hond, want ik houd van wandelen." },
      { id: 2, text: "Ik kies een kat, omdat een kat rustig is." }
    ]
  },

  // =====================================================================
  // PART 4: STORY (Verhaal) - Telling a Sequence of Events
  // =====================================================================
  {
    id: 'p4-q1',
    part: ExamPart.Part4,
    questionDutch: "Jessica gaat koken. Kijk naar de plaatjes. Vertel wat Jessica doet. Vertel iets over alle plaatjes.",
    questionChinese: "Jessica要去做饭。看图片，说说Jessica在做什么。请描述所有图片。",
    imageDescription: "1. Washing peppers. 2. Cutting peppers. 3. Cooking peppers in pan.",
    idealSamples: [
      { id: 1, text: "Eerst wast Jessica de paprika. Daarna snijdt ze de paprika. Tot slot bakt ze de paprika in een pan." },
      { id: 2, text: "Jessica maakt de groente schoon, snijdt het in stukjes en kookt het eten." }
    ]
  },
  {
    id: 'p4-q2',
    part: ExamPart.Part4,
    questionDutch: "Jack gaat naar het zwembad. Kijk naar de plaatjes. Vertel wat Jack doet. Vertel iets over alle plaatjes.",
    questionChinese: "Jack去游泳池。看图片，说说Jack在做什么。",
    imageDescription: "1. Putting on goggles. 2. Swimming. 3. Showering.",
    idealSamples: [
      { id: 1, text: "Jack doet zijn zwembril op. Hij zwemt in het water. Daarna gaat hij douchen." },
      { id: 2, text: "Eerst pakt Jack zijn bril. Dan neemt hij een duik. Als laatste wast hij zich onder de douche." }
    ]
  },
  {
    id: 'p4-q3',
    part: ExamPart.Part4,
    questionDutch: "Sara is ziek. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "Sara病了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. Sara in bed with thermometer. 2. Sara calls doctor. 3. Sara takes medicine.",
    idealSamples: [
      { id: 1, text: "Sara ligt in bed en heeft koorts. Ze belt de huisarts. Daarna neemt ze medicijnen in." },
      { id: 2, text: "Sara is ziek. Ze maakt een afspraak met de dokter. Ze drinkt een medicijn." }
    ]
  },
  {
    id: 'p4-q4',
    part: ExamPart.Part4,
    questionDutch: "Tom gaat met de trein. Vertel wat Tom doet. Vertel iets over alle plaatjes.",
    questionChinese: "Tom坐火车。说说Tom在做什么。请描述所有图片。",
    imageDescription: "1. Buying ticket at machine. 2. Waiting on platform (perron). 3. Sitting in train.",
    idealSamples: [
      { id: 1, text: "Tom koopt een kaartje bij de automaat. Hij wacht op het perron. Hij zit in de trein." },
      { id: 2, text: "Eerst pakt hij een kaartje. Dan wacht hij op de trein. Tot slot reist hij met de trein." }
    ]
  },
  {
    id: 'p4-q5',
    part: ExamPart.Part4,
    questionDutch: "Lisa stuurt een brief. Vertel wat Lisa doet. Vertel iets over alle plaatjes.",
    questionChinese: "Lisa寄信。说说Lisa在做什么。请描述所有图片。",
    imageDescription: "1. Writing letter. 2. Putting stamp on envelope. 3. Putting letter in mailbox.",
    idealSamples: [
      { id: 1, text: "Lisa schrijft een brief. Ze plakt een postzegel op de envelop. Ze doet de brief in de brievenbus." },
      { id: 2, text: "Eerst schrijft ze. Dan doet ze de postzegel erop. Tot slot verstuurt ze de brief." }
    ]
  },
  {
    id: 'p4-q6',
    part: ExamPart.Part4,
    questionDutch: "De fiets is kapot. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "自行车坏了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. Flat tire. 2. Pumping tire. 3. Riding bike happily.",
    idealSamples: [
      { id: 1, text: "De fiets heeft een lekke band. De man pompt de band op. Hij fietst weer weg." },
      { id: 2, text: "De band is leeg. Hij maakt de fiets. Daarna kan hij weer fietsen." }
    ]
  },
  {
    id: 'p4-q7',
    part: ExamPart.Part4,
    questionDutch: "Marie koopt nieuwe schoenen. Vertel wat ze doet. Vertel iets over alle plaatjes.",
    questionChinese: "Marie买新鞋。说说她在做什么。请描述所有图片。",
    imageDescription: "1. Looking at shoes in window. 2. Trying on shoes. 3. Paying at register.",
    idealSamples: [
      { id: 1, text: "Marie kijkt naar de schoenen. Ze past de schoenen. Ze betaalt aan de kassa." },
      { id: 2, text: "Ze ziet leuke schoenen. Ze doet ze aan. Ze koopt de schoenen." }
    ]
  },
  {
    id: 'p4-q8',
    part: ExamPart.Part4,
    questionDutch: "Het gaat regenen. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "要下雨了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. Dark clouds. 2. Opening umbrella. 3. Walking in rain.",
    idealSamples: [
      { id: 1, text: "Er zijn donkere wolken. De vrouw opent haar paraplu. Ze loopt in de regen." },
      { id: 2, text: "Het wordt slecht weer. Ze pakt een paraplu. Ze wordt niet nat." }
    ]
  },
  {
    id: 'p4-q9',
    part: ExamPart.Part4,
    questionDutch: "Jan maakt thee. Vertel wat Jan doet. Vertel iets over alle plaatjes.",
    questionChinese: "Jan泡茶。说说Jan在做什么。请描述所有图片。",
    imageDescription: "1. Boiling water (kettle). 2. Putting teabag in cup. 3. Drinking tea.",
    idealSamples: [
      { id: 1, text: "Jan kookt water. Hij doet het theezakje in het kopje. Hij drinkt de thee." },
      { id: 2, text: "Eerst maakt hij het water heet. Dan maakt hij thee. Hij drinkt het lekker op." }
    ]
  },
  {
    id: 'p4-q10',
    part: ExamPart.Part4,
    questionDutch: "Anna gaat slapen. Vertel wat Anna doet. Vertel iets over alle plaatjes.",
    questionChinese: "Anna去睡觉。说说Anna在做什么。请描述所有图片。",
    imageDescription: "1. Brushing teeth. 2. Reading book in bed. 3. Sleeping / Lights out.",
    idealSamples: [
      { id: 1, text: "Anna poetst haar tanden. Ze leest een boek in bed. Ze gaat slapen." },
      { id: 2, text: "Ze maakt haar tanden schoon. Ze leest nog even. Ze doet het licht uit." }
    ]
  }
];
