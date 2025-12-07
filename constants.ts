import { ExamPart, QuestionItem, StudyPlanDay } from './types';

export const STUDY_PLAN: StudyPlanDay[] = [
  // --- PHASE 1: FOUNDATION (PART 1) ---
  {
    day: 1,
    title: "基础与个人介绍",
    focus: "Part 1: Interview",
    description: "万事开头难。今天专注于掌握关于你自己的基础问题。使用简短、正确的句子。",
    tasks: ["练习 5 道 'Part 1' 题目。", "重点练习句型: 'Ik ben...', 'Ik woon...', 'Ik doe...'."],
    recommendedParts: [ExamPart.Part1]
  },
  {
    day: 2,
    title: "工作与教育",
    focus: "Part 1: Interview",
    description: "扩展到工作话题。学习职业名称和学习相关的词汇。",
    tasks: ["练习 5 道 'Part 1' 题目。", "学习 3 个荷兰语职业名称。"],
    recommendedParts: [ExamPart.Part1]
  },
  {
    day: 3,
    title: "家庭与住房",
    focus: "Part 1: Interview",
    description: "谈论你的房子和家人。练习数字（年份、年龄）。",
    tasks: ["练习 5 道 'Part 1' 题目。", "用 3 句话描述你的客厅。"],
    recommendedParts: [ExamPart.Part1]
  },
  {
    day: 4,
    title: "日常生活与复习",
    focus: "Part 1: Review",
    description: "第一次小复习。随机抽取 Part 1 题目以提高反应速度。",
    tasks: ["使用 '随机练习' 功能练习 Part 1 (10 次)。", "目标：犹豫时间小于 5 秒。"],
    recommendedParts: [ExamPart.Part1]
  },

  // --- PHASE 2: OBSERVATION (PART 2) + SPIRAL REVIEW ---
  {
    day: 5,
    title: "你看到了什么？",
    focus: "Part 2: Description",
    description: "Part 2 入门。使用简单的主语-动词-其余成分 (S-V-R) 结构。不要过度解读，只描述看到的。",
    tasks: ["练习 4 道 'Part 2' 题目。", "复习 2 道 'Part 1' 题目 (螺旋式复习)。"],
    recommendedParts: [ExamPart.Part2, ExamPart.Part1]
  },
  {
    day: 6,
    title: "动作动词",
    focus: "Part 2: Description",
    description: "关注动词：Lopen (走), praten (说), koken (做饭), kopen (买)。那个人在做什么？",
    tasks: ["练习 5 道 'Part 2' 题目。", "注意动词变位 (stam+t)。"],
    recommendedParts: [ExamPart.Part2]
  },
  {
    day: 7,
    title: "细节与颜色",
    focus: "Part 2: Description",
    description: "添加细节。例如 'De rode auto' (红色的车), 'twee mensen' (两个人)。",
    tasks: ["练习 5 道 'Part 2' 题目。", "复习 3 道 'Part 1' 题目。"],
    recommendedParts: [ExamPart.Part2, ExamPart.Part1]
  },
  {
    day: 8,
    title: "问题与解决方案",
    focus: "Part 2: Complex Situations",
    description: "情景：火灾、车坏了、生病。他们该给谁打电话？",
    tasks: ["练习 5 道 'Part 2' 题目。", "学习词汇: Brandweer (消防), Politie (警察), Dokter (医生), Monteur (技工)。"],
    recommendedParts: [ExamPart.Part2]
  },
  {
    day: 9,
    title: "Part 2 熟练度检查",
    focus: "Part 2: Speed",
    description: "随机 Part 2 提问。尝试立即作答。",
    tasks: ["做 10 道 Part 2 随机题。", "做 2 道 Part 1 随机题。"],
    recommendedParts: [ExamPart.Part2, ExamPart.Part1]
  },

  // --- PHASE 3: OPINIONS (PART 3) + SPIRAL REVIEW ---
  {
    day: 10,
    title: "做出选择",
    focus: "Part 3: Preference",
    description: "Part 3 入门。句型：'Ik doe liever...' (我更喜欢做...), 'Ik vind... leuker' (我觉得...更有趣)。",
    tasks: ["练习 4 道 'Part 3' 题目。", "背诵区别: 'Liever' (更喜欢/动词副词) vs 'Leuker' (更有趣/形容词比较级)。"],
    recommendedParts: [ExamPart.Part3]
  },
  {
    day: 11,
    title: "Omdat/Want 规则",
    focus: "Part 3: Grammar",
    description: "关键语法！'Want' + 正常语序。 'Omdat' + 动词放句尾。",
    tasks: ["练习 5 道 'Part 3' 题目，只使用 'Want'。", "复习 2 道 'Part 2' 题目。"],
    recommendedParts: [ExamPart.Part3, ExamPart.Part2]
  },
  {
    day: 12,
    title: "情景：工作与家庭",
    focus: "Part 3: Topics",
    description: "比较工作环境、居住情况和交通方式。",
    tasks: ["练习 5 道 'Part 3' 题目。", "复习 2 道 'Part 1' 题目。"],
    recommendedParts: [ExamPart.Part3, ExamPart.Part1]
  },
  {
    day: 13,
    title: "情景：空闲时间",
    focus: "Part 3: Topics",
    description: "比较运动、食物和爱好。给出一个清晰的理由。",
    tasks: ["练习 5 道 'Part 3' 题目。", "复习 2 道 'Part 2' 题目。"],
    recommendedParts: [ExamPart.Part3, ExamPart.Part2]
  },
  {
    day: 14,
    title: "观点表达大师",
    focus: "Part 3 & Review",
    description: "混合练习。Part 3 需要思考。练习果断地表达。",
    tasks: ["10 道 Part 3 随机题。", "3 道 Part 1 随机题。"],
    recommendedParts: [ExamPart.Part3, ExamPart.Part1]
  },

  // --- PHASE 4: STORYTELLING (PART 4) & FINAL SPRINT ---
  {
    day: 15,
    title: "连接词",
    focus: "Part 4: Story",
    description: "Part 4 入门。魔法三剑客：'Eerst' (首先), 'Daarna' (然后), 'Tot slot' (最后)。",
    tasks: ["练习 3 道 'Part 4' 题目。", "在每个回答中强制使用这三个词。"],
    recommendedParts: [ExamPart.Part4]
  },
  {
    day: 16,
    title: "过去时 (简单版)",
    focus: "Part 4: Grammar",
    description: "故事通常发生在过去。使用完成时 'Hij heeft gekookt'。保持简单。",
    tasks: ["练习 4 道 'Part 4' 题目。", "复习 2 道 'Part 3' 题目。"],
    recommendedParts: [ExamPart.Part4, ExamPart.Part3]
  },
  {
    day: 17,
    title: "日常生活流程",
    focus: "Part 4: Story",
    description: "做饭、睡觉、旅行的故事。逻辑性地连接图片。",
    tasks: ["练习 4 道 'Part 4' 题目。", "复习 2 道 'Part 2' 题目。"],
    recommendedParts: [ExamPart.Part4, ExamPart.Part2]
  },
  {
    day: 18,
    title: "全方位螺旋复习",
    focus: "All Parts",
    description: "高强度练习日。覆盖所有 4 个部分。",
    tasks: ["Part 1, 2, 3, 4 各做 2 道题。", "注意切换思维模式。"],
    recommendedParts: [ExamPart.Part1, ExamPart.Part2, ExamPart.Part3, ExamPart.Part4]
  },
  {
    day: 19,
    title: "模拟考试 1",
    focus: "Simulation",
    description: "像真正的考试一样对待。不要暂停。录下所有内容。",
    tasks: ["使用 '随机' 按钮进行 20 分钟模拟。", "不要重录。坚持说下去。"],
    recommendedParts: [ExamPart.Part1, ExamPart.Part2, ExamPart.Part3, ExamPart.Part4]
  },
  {
    day: 20,
    title: "建立终极自信",
    focus: "Relax & Shine",
    description: "你准备好了。今天轻松练习，增强自信。",
    tasks: ["做你最擅长的 5 道题。", "对自己说：'Ik kan dit!' (我能行！)"],
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
    imageDescription: "场景: 市场摊位上有蔬菜（甜椒、西葫芦、西红柿）。",
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
    imageDescription: "场景: 穿着职业装的女性在笔记本电脑上打字。",
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
    imageDescription: "场景: 男士拿着一件外套，站在柜台前拿着银行卡。",
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
    imageDescription: "场景: 厨房冒烟。女人跑出去打112求救。",
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
    imageDescription: "场景: 孩子们在玩球。父母坐在长椅上。",
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
    imageDescription: "场景: Fatima捂着耳朵很痛苦。医生在检查耳朵。",
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
    imageDescription: "场景: 学生在笔记本上写字。老师在黑板上写字。",
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
    imageDescription: "场景: 女士在煎蛋。使用平底锅。",
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
    imageDescription: "场景: 男士在看引擎盖下面。技工/路援到达。",
    idealSamples: [
      { id: 1, text: "De man kijkt naar de motor. De monteur helpt hem." },
      { id: 2, text: "Hij belt de garage. De wegenwacht komt helpen." }
    ]
  },
  {
    id: 'p2-q10',
    part: ExamPart.Part2,
    questionDutch: "Het is feest. Wat doet de mensen? Vertel ook wat ze eten.",
    questionChinese: "现在是聚会。人们在做什么？也说说他们在吃什么。",
    imageDescription: "场景: 人们在跳舞/聊天。桌子上有蛋糕。",
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
    imageDescription: "图片 1: 在沙滩上放松。 图片 2: 在森林里徒步。",
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
    imageDescription: "图片 1: 足球。 图片 2: 篮球。",
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
    imageDescription: "图片 1: 在繁忙的餐厅工作。 图片 2: 在安静的办公室工作。",
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
    imageDescription: "图片 1: 电影院。 图片 2: 舞厅/夜店。",
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
    imageDescription: "图片 1: 超市。 图片 2: 露天市场。",
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
    imageDescription: "图片 1: 城市公寓。 图片 2: 乡村别墅。",
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
    imageDescription: "图片 1: 在家做饭。 图片 2: 去餐厅吃。",
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
    imageDescription: "图片 1: 上大课。 图片 2: 独自用电脑学。",
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
    imageDescription: "图片 1: 行李箱。 图片 2: 双肩背包。",
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
    imageDescription: "图片 1: 狗。 图片 2: 猫。",
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
    imageDescription: "1. 洗甜椒。 2. 切甜椒。 3. 在锅里炒甜椒。",
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
    imageDescription: "1. 戴上泳镜。 2. 游泳。 3. 淋浴。",
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
    imageDescription: "1. Sara卧病在床，量体温。 2. Sara给医生打电话。 3. Sara吃药。",
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
    imageDescription: "1. 在机器上买票。 2. 在站台等待。 3. 坐在火车上。",
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
    imageDescription: "1. 写信。 2. 贴邮票。 3. 投进信箱。",
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
    imageDescription: "1. 轮胎没气了。 2. 给轮胎打气。 3. 开心地骑走了。",
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
    imageDescription: "1. 看橱窗里的鞋子。 2. 试穿鞋子。 3. 结账。",
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
    imageDescription: "1. 乌云密布。 2. 打开雨伞。 3. 在雨中行走。",
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
    imageDescription: "1. 烧水。 2. 放茶包。 3. 喝茶。",
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
    imageDescription: "1. 刷牙。 2. 在床上看书。 3. 关灯睡觉。",
    idealSamples: [
      { id: 1, text: "Anna poetst haar tanden. Ze leest een boek in bed. Ze gaat slapen." },
      { id: 2, text: "Ze maakt haar tanden schoon. Ze leest nog even. Ze doet het licht uit." }
    ]
  }
];