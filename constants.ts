import { ExamPart, QuestionItem, StudyPlanDay, DrillType, TopicReference, GrammarRule } from './types';

export const DRILL_SCENARIOS = {
  [DrillType.Completion]: [
    // --- WANT (Coordinating: No change in word order) ---
    { prompt: "Ik ga niet naar buiten, want ...", hint: "我不出去，因为... (want + 主 + 动)" },
    { prompt: "Ik leer Nederlands, want ...", hint: "我学荷兰语，因为... (want + ...)" },
    { prompt: "Ik ben blij, want ...", hint: "我很开心，因为... (want + ...)" },
    { prompt: "Hij gaat naar de dokter, want ...", hint: "他去看医生，因为... (want + ...)" },
    { prompt: "Zij koopt een nieuwe auto, want ...", hint: "她买新车，因为... (want + ...)" },
    // --- OMDAT (Subordinating: Verb at the end) ---
    { prompt: "Ik ga niet naar buiten, omdat ...", hint: "我不出去，因为... (omdat + ... + 动词)" },
    { prompt: "Ik ben blij, omdat ...", hint: "我很开心，因为... (omdat + ... + 动词)" },
    { prompt: "Hij is ziek, omdat ...", hint: "他病了，因为... (omdat + ... + 动词)" },
    { prompt: "Ik leer elke dag, omdat ...", hint: "我每天学习，因为... (omdat + ... + 动词)" },
    { prompt: "Zij komt te laat, omdat ...", hint: "她迟到了，因为... (omdat + ... + 动词)" },
    // --- ALS (If/When - Subordinating) ---
    { prompt: "Als het regent, ...", hint: "如果下雨，(我就... 注意主谓倒装)" },
    { prompt: "Als ik tijd heb, ...", hint: "如果我有时间，(我就...)" },
    { prompt: "Als ik ziek ben, ...", hint: "如果我病了，..." },
    // --- MAAR / DUS ---
    { prompt: "Ik wil graag komen, maar ...", hint: "我想来，但是..." },
    { prompt: "Het is duur, maar ...", hint: "它很贵，但是..." },
    { prompt: "Ik heb honger, dus ...", hint: "我饿了，所以..." },
  ],

  [DrillType.Expansion]: [
    // --- BASIC S-V-T-P ---
    { prompt: "Ik werk. (请加入：elke dag / op kantoor)", hint: "我每天在办公室工作。" },
    { prompt: "Ik kook. (请加入：vanavond / thuis)", hint: "我今晚在家做饭。" },
    { prompt: "Wij eten. (请加入：om 6 uur / in de keuken)", hint: "我们6点在厨房吃饭。" },
    { prompt: "Zij fietst. (请加入：morgen / naar school)", hint: "她明天骑车去学校。" },
    // --- INVERSION ---
    { prompt: "Ik ga naar de markt. (请把 'Morgen' 放在句首)", hint: "明天我去市场。 (Morgen ga ik...)" },
    { prompt: "Ik ben vrij. (请把 'Vandaag' 放在句首)", hint: "今天我有空。 (Vandaag ben ik...)" },
    { prompt: "Ik heb een afspraak. (请把 'Om 9 uur' 放在句首)", hint: "9点我有约。 (Om 9 uur heb ik...)" },
    // --- MANNER ---
    { prompt: "Ik luister naar muziek. (请加入：graag)", hint: "我喜欢听音乐。" },
    { prompt: "Ik eet vis. (请加入：niet)", hint: "我不吃鱼。" },
    { prompt: "Ik rijd auto. (请加入：niet graag)", hint: "我不喜欢开车。" },
  ],

  [DrillType.Sequence]: [
    // --- DAILY ROUTINE ---
    { prompt: "Koffie zetten (泡咖啡)", hint: "用 Eerst..., Daarna... 描述步骤 (water koken, koffie in kopje)." },
    { prompt: "Opstaan (起床)", hint: "用 Eerst..., Daarna... 描述早晨 (wekker gaat, uit bed stappen)." },
    { prompt: "Tanden poetsen (刷牙)", hint: "用 Eerst..., Daarna... 描述 (tandpasta pakken, poetsen)." },
    { prompt: "Douchen (淋浴)", hint: "用 Eerst..., Daarna... 描述 (kraan openen, wassen)." },
    { prompt: "Naar het werk gaan (去上班)", hint: "用 Eerst..., Daarna... (fiets pakken, fietsen)." },
    // --- EVENTS ---
    { prompt: "Boodschappen doen (买菜)", hint: "用 Eerst..., Daarna... (lijstje maken, naar supermarkt)." },
    { prompt: "Met de trein (坐火车)", hint: "用 Eerst..., Daarna... (kaartje kopen, instappen)." },
    { prompt: "Naar de dokter (看医生)", hint: "用 Eerst..., Daarna... (bellen, erheen gaan)." },
    { prompt: "Een taart bakken (烤蛋糕)", hint: "用 Eerst, Daarna, Tot slot (mixen, bakken, eten)." },
    { prompt: "Huis kopen (买房)", hint: "用 Eerst, Daarna, Tot slot (kijken, kopen, verhuizen)." },
  ]
};

export const STUDY_PLAN: StudyPlanDay[] = [
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

export const TOPIC_CHEAT_SHEETS: TopicReference[] = [
  {
    id: 'topic-work',
    title: "工作 (Werk & Solliciteren)",
    icon: "💼",
    keywords: [
      { word: "Solliciteren", mean: "申请工作", type: "verb" },
      { word: "Vergadering", mean: "会议", type: "noun" },
      { word: "Collega", mean: "同事", type: "noun" },
      { word: "Ervaring", mean: "经验", type: "noun" },
      { word: "Fulltime", mean: "全职", type: "adj" },
      { word: "Samenwerken", mean: "合作", type: "verb" }
    ],
    sentences: [
      { nl: "Ik zoek werk als schoonmaker.", cn: "我在找清洁工的工作。" },
      { nl: "Ik heb veel ervaring.", cn: "我有很多经验。" },
      { nl: "Ik werk graag met mensen.", cn: "我喜欢和人一起工作。" }
    ]
  },
  {
    id: 'topic-health',
    title: "健康 (Gezondheid)",
    icon: "🏥",
    keywords: [
      { word: "Huisarts", mean: "家庭医生", type: "noun" },
      { word: "Afspraak maken", mean: "预约", type: "verb" },
      { word: "Koorts", mean: "发烧", type: "noun" },
      { word: "Pijn", mean: "疼", type: "noun" },
      { word: "Medicijnen", mean: "药", type: "noun" },
      { word: "Apotheek", mean: "药房", type: "noun" }
    ],
    sentences: [
      { nl: "Ik wil een afspraak maken.", cn: "我想预约。" },
      { nl: "Ik heb pijn aan mijn rug.", cn: "我背疼。" },
      { nl: "Ik moet medicijnen halen.", cn: "我得去拿药。" }
    ]
  },
  {
    id: 'topic-transport',
    title: "交通 (Vervoer)",
    icon: "🚆",
    keywords: [
      { word: "Vertraging", mean: "晚点/延误", type: "noun" },
      { word: "OV-chipkaart", mean: "公交卡", type: "noun" },
      { word: "Inchecken", mean: "刷卡进站", type: "verb" },
      { word: "Spoor", mean: "站台(轨道)", type: "noun" },
      { word: "Halte", mean: "车站", type: "noun" },
      { word: "Overstappen", mean: "换乘", type: "verb" }
    ],
    sentences: [
      { nl: "De trein heeft vertraging.", cn: "火车晚点了。" },
      { nl: "Ik ga met de bus naar school.", cn: "我坐公车去学校。" },
      { nl: "Waar moet ik uitstappen?", cn: "我该在哪里下车？" }
    ]
  },
  {
    id: 'topic-housing',
    title: "住房 (Wonen)",
    icon: "🏠",
    keywords: [
      { word: "Huur", mean: "房租", type: "noun" },
      { word: "Buren", mean: "邻居", type: "noun" },
      { word: "Flat", mean: "公寓", type: "noun" },
      { word: "Verhuizen", mean: "搬家", type: "verb" },
      { word: "Woonkamer", mean: "客厅", type: "noun" },
      { word: "Gezellig", mean: "温馨/惬意", type: "adj" }
    ],
    sentences: [
      { nl: "Ik woon in een rijtjeshuis.", cn: "我住在联排房子里。" },
      { nl: "Mijn buren zijn aardig.", cn: "我的邻居很友好。" },
      { nl: "De huur is hoog.", cn: "房租很高。" }
    ]
  }
];

export const GRAMMAR_CHEAT_SHEETS: GrammarRule[] = [
  {
    id: 'word-order-basic',
    title: "基础语序 (Basic Word Order)",
    formula: ["Subject", "Verb", "Rest"],
    description: "荷兰语中最基本的陈述句结构。动词始终在第二位。",
    examples: [
      { right: "Ik (S) werk (V) vandaag (R).", note: "我今天工作。" },
      { right: "Hij (S) woont (V) in Amsterdam (R).", note: "他住在阿姆斯特丹。" }
    ]
  },
  {
    id: 'word-order-inversion',
    title: "倒装句 (Inversion)",
    formula: ["Time/Place", "Verb", "Subject"],
    description: "当你把时间或地点放在句首强调时，动词必须紧跟在后，主语放到动词后面。",
    examples: [
      { wrong: "Vandaag ik werk.", right: "Vandaag (T) werk (V) ik (S).", note: "今天我工作。" },
      { right: "In Amsterdam (P) woont (V) hij (S).", note: "在阿姆斯特丹他住。" }
    ]
  },
  {
    id: 'connector-want',
    title: "Want (因为) - 不变序",
    formula: ["..., want", "Subject", "Verb", "Rest"],
    description: "使用 'Want' 连接两个句子时，后面的句子语序不变。",
    examples: [
      { right: "Ik ga naar bed, want ik ben moe.", note: "我去睡觉，因为我累了。(ik ben moe 正常语序)" }
    ]
  },
  {
    id: 'connector-omdat',
    title: "Omdat (因为) - 动词后置",
    formula: ["..., omdat", "Subject", "Rest", "Verb"],
    description: "使用 'Omdat' 时，动词必须踢到句子最后面！这是考试重点。",
    examples: [
      { wrong: "Omdat ik ben ziek.", right: "Omdat ik ziek ben.", note: "因为我病了。" }
    ]
  }
];

export const QUESTION_DATABASE: QuestionItem[] = [
  // ============================
  // PART 1: INTERVIEW (20 Questions)
  // ============================
  {
    id: 'p1-q1',
    part: ExamPart.Part1,
    questionDutch: "Wat doet u in uw vrije tijd? Vertel ook waar u dat doet.",
    questionChinese: "您在空闲时间做什么？也请告诉我在哪里做。",
    idealSamples: [
      { id: 1, text: "Ik speel in mijn vrije tijd met mijn kinderen in ons huis.", translation: "空闲时间里我在家里和我的孩子们玩。" },
      { id: 2, text: "Ik wandel graag in het park. Dat doe ik in het weekend.", translation: "我喜欢在公园散步。我周末会这么做。" }
    ]
  },
  {
    id: 'p1-q2',
    part: ExamPart.Part1,
    questionDutch: "Wat voor werk doet u? En vindt u het werk leuk?",
    questionChinese: "您做什么工作？您喜欢这个工作吗？",
    idealSamples: [
      { id: 1, text: "Ik werk als schoonmaker. Ik vind het leuk, want mijn collega's zijn aardig.", translation: "我是清洁工。我喜欢它，因为我的同事很友好。" },
      { id: 2, text: "Ik werk nu niet. Ik zoek een baan in de horeca.", translation: "我现在不工作。我在找餐饮业的工作。" }
    ]
  },
  {
    id: 'p1-q3',
    part: ExamPart.Part1,
    questionDutch: "Hoe komt u naar de les? En hoe lang duurt de reis?",
    questionChinese: "您怎么来上课？路程要多久？",
    idealSamples: [
      { id: 1, text: "Ik kom met de fiets naar de les. Het duurt 20 minuten.", translation: "我骑自行车来上课。需要20分钟。" },
      { id: 2, text: "Ik neem de bus. Ik ben 30 minuten onderweg.", translation: "我坐公交车。我在路上花30分钟。" }
    ]
  },
  {
    id: 'p1-q4',
    part: ExamPart.Part1,
    questionDutch: "Naar welke muziek luistert u graag? En wanneer luistert u muziek?",
    questionChinese: "您喜欢听什么音乐？您什么时候听音乐？",
    idealSamples: [
      { id: 1, text: "Ik luister graag naar popmuziek. Ik luister muziek als ik kook.", translation: "我喜欢听流行音乐。我做饭的时候听音乐。" },
      { id: 2, text: "Ik houd van rustige muziek. Ik luister 's avonds op de bank.", translation: "我喜欢安静的音乐。我晚上在沙发上听。" }
    ]
  },
  {
    id: 'p1-q5',
    part: ExamPart.Part1,
    questionDutch: "Wat eet u het liefst? En wie kookt er bij u thuis?",
    questionChinese: "您最喜欢吃什么？在您家里谁做饭？",
    idealSamples: [
      { id: 1, text: "Ik eet het liefst rijst met groenten. Ik kook meestal zelf.", translation: "我最喜欢吃米饭配蔬菜。通常我自己做饭。" },
      { id: 2, text: "Ik vind vis erg lekker. Mijn man kookt in het weekend.", translation: "我觉得鱼很好吃。我丈夫周末做饭。" }
    ]
  },
  {
    id: 'p1-q6',
    part: ExamPart.Part1,
    questionDutch: "Hebt u familie in Nederland? Waar wonen zij?",
    questionChinese: "您在荷兰有家人吗？他们住在哪里？",
    idealSamples: [
      { id: 1, text: "Ja, mijn broer woont ook in Nederland. Hij woont in Rotterdam.", translation: "是的，我哥哥也住在荷兰。他住在鹿特丹。" },
      { id: 2, text: "Nee, mijn familie woont in mijn land. Ik woon hier alleen met mijn man.", translation: "没有，我的家人住在我的国家。我和我丈夫住在这里。" }
    ]
  },
  {
    id: 'p1-q7',
    part: ExamPart.Part1,
    questionDutch: "Hoe laat staat u meestal op? En wat doet u daarna?",
    questionChinese: "您通常几点起床？之后您做什么？",
    idealSamples: [
      { id: 1, text: "Ik sta om 7 uur op. Daarna neem ik een douche.", translation: "我7点起床。然后我洗个澡。" },
      { id: 2, text: "Ik word om 8 uur wakker. Dan maak ik ontbijt voor mijn kinderen.", translation: "我8点醒来。然后我给孩子们做早饭。" }
    ]
  },
  {
    id: 'p1-q8',
    part: ExamPart.Part1,
    questionDutch: "Wat is uw lievelingskleur? En welke kleren draagt u graag?",
    questionChinese: "您最喜欢什么颜色？您喜欢穿什么衣服？",
    idealSamples: [
      { id: 1, text: "Mijn lievelingskleur is blauw. Ik draag graag een spijkerbroek.", translation: "我最喜欢的颜色是蓝色。我喜欢穿牛仔裤。" },
      { id: 2, text: "Ik vind rood mooi. Ik draag vaak een jurk.", translation: "我觉得红色很好看。我经常穿裙子。" }
    ]
  },
  {
    id: 'p1-q9',
    part: ExamPart.Part1,
    questionDutch: "Houdt u van lezen? Wat leest u graag?",
    questionChinese: "您喜欢读书吗？您喜欢读什么？",
    idealSamples: [
      { id: 1, text: "Ja, ik lees graag boeken. Ik lees boeken in mijn eigen taal.", translation: "是的，我喜欢读书。我读我自己语言的书。" },
      { id: 2, text: "Nee, ik houd niet van lezen. Ik kijk liever televisie.", translation: "不，我不喜欢读书。我更喜欢看电视。" }
    ]
  },
  {
    id: 'p1-q10',
    part: ExamPart.Part1,
    questionDutch: "Hebt u een tuin of een balkon? Wat doet u daar?",
    questionChinese: "您有花园或阳台吗？您在那里做什么？",
    idealSamples: [
      { id: 1, text: "Ik heb een klein balkon. Ik zit daar in de zomer.", translation: "我有个小阳台。夏天我坐在那里。" },
      { id: 2, text: "Ik heb een tuin. Ik speel daar met mijn hond.", translation: "我有花园。我在那里和我的狗玩。" }
    ]
  },
  {
    id: 'p1-q11',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u van het weer in Nederland? Waarom?",
    questionChinese: "您觉得荷兰的天气怎么样？为什么？",
    idealSamples: [
      { id: 1, text: "Ik vind het weer niet leuk, want het regent vaak.", translation: "我不喜欢这天气，因为经常下雨。" },
      { id: 2, text: "Ik vind het prima. De zomer is soms lekker warm.", translation: "我觉得还可以。夏天有时很暖和。" }
    ]
  },
  {
    id: 'p1-q12',
    part: ExamPart.Part1,
    questionDutch: "Hoelang woont u al in Nederland? En waar woonde u daarvoor?",
    questionChinese: "您在荷兰住多久了？之前您住在哪里？",
    idealSamples: [
      { id: 1, text: "Ik woon hier nu twee jaar. Daarvoor woonde ik in China.", translation: "我住在这里两年了。之前我住在中国。" },
      { id: 2, text: "Ik ben hier pas zes maanden. Ik kom uit Shanghai.", translation: "我才来这里六个月。我来自上海。" }
    ]
  },
  {
    id: 'p1-q13',
    part: ExamPart.Part1,
    questionDutch: "Wat doet u als u ziek bent? Wie belt u dan?",
    questionChinese: "您生病的时候做什么？您给谁打电话？",
    idealSamples: [
      { id: 1, text: "Als ik ziek ben, blijf ik in bed. Ik bel mijn huisarts.", translation: "如果我病了，我就待在床上。我给家庭医生打电话。" },
      { id: 2, text: "Ik neem medicijnen. Ik bel mijn baas dat ik niet kom.", translation: "我吃药。我给老板打电话说我不来了。" }
    ]
  },
  {
    id: 'p1-q14',
    part: ExamPart.Part1,
    questionDutch: "Doet u aan sport? Zo ja, welke sport?",
    questionChinese: "您做运动吗？如果是，什么运动？",
    idealSamples: [
      { id: 1, text: "Ja, ik voetbal elke zaterdag.", translation: "是的，我每个星期六踢足球。" },
      { id: 2, text: "Nee, ik sport niet. Ik wandel wel veel.", translation: "不，我不运动。不过我经常散步。" }
    ]
  },
  {
    id: 'p1-q15',
    part: ExamPart.Part1,
    questionDutch: "Hoe viert u uw verjaardag? Met wie?",
    questionChinese: "您怎么庆祝生日？和谁一起？",
    idealSamples: [
      { id: 1, text: "Ik eet taart met mijn familie. Het is altijd gezellig.", translation: "我和家人吃蛋糕。总是很温馨。" },
      { id: 2, text: "Ik geef een feestje voor mijn vrienden thuis.", translation: "我在家为朋友举办派对。" }
    ]
  },
  {
    id: 'p1-q16',
    part: ExamPart.Part1,
    questionDutch: "Kijkt u vaak televisie? Wat is uw favoriete programma?",
    questionChinese: "您经常看电视吗？您最喜欢的节目是什么？",
    idealSamples: [
      { id: 1, text: "Ja, ik kijk elke avond naar het nieuws.", translation: "是的，我每晚看新闻。" },
      { id: 2, text: "Ik kijk graag naar films op Netflix.", translation: "我喜欢在Netflix上看电影。" }
    ]
  },
  {
    id: 'p1-q17',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u moeilijk aan de Nederlandse taal? En wat is makkelijk?",
    questionChinese: "您觉得荷兰语什么难？什么容易？",
    idealSamples: [
      { id: 1, text: "Ik vind de grammatica moeilijk. Woorden leren is makkelijk.", translation: "我觉得语法很难。学单词很容易。" },
      { id: 2, text: "Spreken is lastig. Lezen gaat wel goed.", translation: "说很难。读还可以。" }
    ]
  },
  {
    id: 'p1-q18',
    part: ExamPart.Part1,
    questionDutch: "Hebt u huisdieren? Welke?",
    questionChinese: "您有宠物吗？什么宠物？",
    idealSamples: [
      { id: 1, text: "Ja, ik heb een kat. Hij heet Tijger.", translation: "是的，我有一只猫。它叫Tijger。" },
      { id: 2, text: "Nee, ik heb geen huisdieren. Mijn huis is te klein.", translation: "没有，我没有宠物。我的房子太小了。" }
    ]
  },
  {
    id: 'p1-q19',
    part: ExamPart.Part1,
    questionDutch: "Waar gaat u boodschappen doen? En hoe vaak?",
    questionChinese: "您去哪里买菜？多久一次？",
    idealSamples: [
      { id: 1, text: "Ik ga naar de Albert Heijn. Ik ga twee keer per week.", translation: "我去Albert Heijn。我每周去两次。" },
      { id: 2, text: "Ik ga naar de markt op zaterdag. Dat is goedkoper.", translation: "我周六去市场。那更便宜。" }
    ]
  },
  {
    id: 'p1-q20',
    part: ExamPart.Part1,
    questionDutch: "Wat wilt u later worden? Of wat zijn uw plannen?",
    questionChinese: "您以后想做什么？或者您有什么计划？",
    idealSamples: [
      { id: 1, text: "Ik wil graag in een winkel werken.", translation: "我想在商店工作。" },
      { id: 2, text: "Ik wil eerst beter Nederlands leren spreken.", translation: "我想先更好地学说荷兰语。" }
    ]
  },

  // ============================
  // PART 2: DESCRIPTION (15 Questions)
  // ============================
  {
    id: 'p2-q1',
    part: ExamPart.Part2,
    questionDutch: "Kijk naar de foto. Wat ziet u? Vertel ook wat u van de situatie vindt.",
    questionChinese: "看照片。您看到了什么？也说说您对这种情况的看法。",
    imageDescription: "一个人在雨中骑自行车，看起来很冷。",
    idealSamples: [
      { id: 1, text: "Ik zie een man op de fiets. Het regent hard. Ik vind het zielig voor hem.", translation: "我看到一个男人骑车。雨下得很大。我觉得他很可怜。" },
      { id: 2, text: "Een persoon fietst in de regen. Ik vind fietsen in de regen niet leuk.", translation: "一个人在雨中骑车。我不喜欢在雨中骑车。" }
    ]
  },
  {
    id: 'p2-q2',
    part: ExamPart.Part2,
    questionDutch: "Wat doen de mensen? Vertel ook of u dat vaak doet.",
    questionChinese: "人们在做什么？也请告诉我也请告诉我您是否经常这样做。",
    imageDescription: "两个人在超市买菜。",
    idealSamples: [
      { id: 1, text: "De mensen doen boodschappen in de supermarkt. Ik doe dat ook elke week.", translation: "人们在超市买东西。我也每周这样做。" },
      { id: 2, text: "Ze kopen groenten en fruit. Ik ga ook vaak naar de supermarkt.", translation: "他们买蔬菜和水果。我也经常去超市。" }
    ]
  },
  {
    id: 'p2-q3',
    part: ExamPart.Part2,
    questionDutch: "Wat ziet u op het plaatje? Doet u dit ook wel eens?",
    questionChinese: "您在图片上看到了什么？您也会这样做吗？",
    imageDescription: "一个人坐在候诊室等医生。",
    idealSamples: [
      { id: 1, text: "Ik zie een mevrouw in de wachtkamer. Ze wacht op de dokter. Ik doe dat als ik ziek ben.", translation: "我看到一位女士在候诊室。她在等医生。我生病的时候也会这样做。" },
      { id: 2, text: "Iemand zit op een stoel bij de dokter. Soms moet ik ook wachten.", translation: "有人坐在医生的椅子上。有时我也得等。" }
    ]
  },
  {
    id: 'p2-q4',
    part: ExamPart.Part2,
    questionDutch: "Beschrijf wat er gebeurt. Wat vindt u daarvan?",
    questionChinese: "描述发生了什么。您觉得怎么样？",
    imageDescription: "一个人在乱扔垃圾。",
    idealSamples: [
      { id: 1, text: "De man gooit afval op de straat. Ik vind dat niet netjes.", translation: "这个男人把垃圾扔在街上。我觉得这不礼貌。" },
      { id: 2, text: "Hij gebruikt de prullenbak niet. Ik vind dat slecht voor de natuur.", translation: "他不用垃圾桶。我觉得这虽然对自然不好。" }
    ]
  },
  {
    id: 'p2-q5',
    part: ExamPart.Part2,
    questionDutch: "Wat doet de vrouw? Hebt u dat ook?",
    questionChinese: "这个女人在做什么？您有这个吗？",
    imageDescription: "一个女人在用电脑工作。",
    idealSamples: [
      { id: 1, text: "De vrouw werkt op een computer. Ik heb ook een laptop thuis.", translation: "女人在电脑上工作。我家里也有一台笔记本电脑。" },
      { id: 2, text: "Ze zit achter de computer. Ik gebruik mijn computer elke dag.", translation: "她坐在电脑后面。我每天都用我的电脑。" }
    ]
  },
  {
    id: 'p2-q6',
    part: ExamPart.Part2,
    questionDutch: "Wat doet de man? Kunt u dat ook?",
    questionChinese: "这个男人在做什么？您也会吗？",
    imageDescription: "一个男人在修理自行车。",
    idealSamples: [
      { id: 1, text: "De man repareert zijn fiets. Ik kan dat niet, ik ga naar de fietsenmaker.", translation: "这个男人在修自行车。我不会，我去自行车店。" },
      { id: 2, text: "Hij maakt de band van de fiets. Ik kan dat ook.", translation: "他在修车胎。我也会。" }
    ]
  },
  {
    id: 'p2-q7',
    part: ExamPart.Part2,
    questionDutch: "Wat ziet u? Vindt u dat leuk?",
    questionChinese: "您看到了什么？您觉得这有趣吗？",
    imageDescription: "一群孩子在外面踢足球。",
    idealSamples: [
      { id: 1, text: "Ik zie kinderen die voetballen. Ik vind dat leuk om te zien.", translation: "我看到孩子们在踢足球。我觉得看着很有趣。" },
      { id: 2, text: "Ze spelen buiten. Ik houd ook van voetbal.", translation: "他们在外面玩。我也喜欢足球。" }
    ]
  },
  {
    id: 'p2-q8',
    part: ExamPart.Part2,
    questionDutch: "Wat gebeurt er op de foto? Hoe betaalt u meestal?",
    questionChinese: "照片上发生了什么？您通常怎么支付？",
    imageDescription: "一个人在商店用银行卡付款。",
    idealSamples: [
      { id: 1, text: "De vrouw betaalt met een pinpas. Ik betaal ook altijd met de kaart.", translation: "女人用银行卡支付。我也总是用卡支付。" },
      { id: 2, text: "Ze staat bij de kassa. Ik betaal liever met contant geld.", translation: "她站在收银台。我更喜欢用现金支付。" }
    ]
  },
  {
    id: 'p2-q9',
    part: ExamPart.Part2,
    questionDutch: "Wat doet de persoon? Hebt u dat recent gedaan?",
    questionChinese: "这个人在做什么？您最近做过吗？",
    imageDescription: "一个人在粉刷墙壁。",
    idealSamples: [
      { id: 1, text: "De man schildert de muur. Ik heb dat vorige maand ook gedaan.", translation: "男人在刷墙。我上个月也做过。" },
      { id: 2, text: "Hij maakt het huis mooi. Ik houd niet van klussen.", translation: "他把房子变漂亮。我不喜欢做手工活。" }
    ]
  },
  {
    id: 'p2-q10',
    part: ExamPart.Part2,
    questionDutch: "Wat ziet u? Met wie doet u dit?",
    questionChinese: "您看到了什么？您和谁一起做这个？",
    imageDescription: "一家人在餐桌上吃饭。",
    idealSamples: [
      { id: 1, text: "Ik zie een familie die eet. Ik eet elke avond met mijn man.", translation: "我看到一家人在吃饭。我每晚和我丈夫一起吃。" },
      { id: 2, text: "Ze zitten aan tafel. Ik eet vaak alleen.", translation: "他们坐在桌边。我经常一个人吃。" }
    ]
  },
  {
    id: 'p2-q11',
    part: ExamPart.Part2,
    questionDutch: "Wat doet de vrouw? Waarom denkt u?",
    questionChinese: "女人在做什么？您觉得为什么？",
    imageDescription: "一个女人在跑着追公交车。",
    idealSamples: [
      { id: 1, text: "Ze rent naar de bus. Ze is denk ik te laat.", translation: "她跑向公交车。我想她迟到了。" },
      { id: 2, text: "Ze wil de bus halen. Ik ren nooit voor de bus.", translation: "她想赶上车。我从不追公交车。" }
    ]
  },
  {
    id: 'p2-q12',
    part: ExamPart.Part2,
    questionDutch: "Wat doet de man? Hebt u een dier?",
    questionChinese: "男人在做什么？您有动物吗？",
    imageDescription: "一个男人在公园遛狗。",
    idealSamples: [
      { id: 1, text: "De man wandelt met zijn hond. Ik heb geen hond.", translation: "男人在遛狗。我没有狗。" },
      { id: 2, text: "Hij loopt buiten met de hond. Ik heb wel een kat.", translation: "他和狗在外面走。我有一只猫。" }
    ]
  },
  {
    id: 'p2-q13',
    part: ExamPart.Part2,
    questionDutch: "Wat ziet u? Leest u graag?",
    questionChinese: "您看到了什么？您喜欢阅读吗？",
    imageDescription: "一个人在读报纸。",
    idealSamples: [
      { id: 1, text: "De man leest de krant. Ik lees liever een boek.", translation: "男人在读报纸。我更喜欢看书。" },
      { id: 2, text: "Hij leest het nieuws. Ik lees het nieuws op mijn telefoon.", translation: "他在读新闻。我在手机上看新闻。" }
    ]
  },
  {
    id: 'p2-q14',
    part: ExamPart.Part2,
    questionDutch: "Wat doen de mannen? Wanneer doet u dit?",
    questionChinese: "男人们在做什么？您什么时候做这个？",
    imageDescription: "两个男人在握手。",
    idealSamples: [
      { id: 1, text: "Ze geven elkaar een hand. Ik doe dat als ik iemand ontmoet.", translation: "他们互相握手。我见到某人时会这样做。" },
      { id: 2, text: "Het zijn kennissen. Ze zeggen hallo.", translation: "他们是熟人。他们在打招呼。" }
    ]
  },
  {
    id: 'p2-q15',
    part: ExamPart.Part2,
    questionDutch: "Wat doet de toerist? Gebruikt u dit ook?",
    questionChinese: "游客在做什么？您也用这个吗？",
    imageDescription: "一个人在看地图找路。",
    idealSamples: [
      { id: 1, text: "Hij kijkt op de kaart. Ik gebruik Google Maps op mijn telefoon.", translation: "他在看地图。我用手机上的谷歌地图。" },
      { id: 2, text: "Hij zoekt de weg. Ik heb geen kaart nodig.", translation: "他在找路。我不需要地图。" }
    ]
  },

  // ============================
  // PART 3: PREFERENCE (35 Questions)
  // ============================
  {
    id: 'p3-q1',
    part: ExamPart.Part3,
    questionDutch: "U wilt gaan sporten. U kunt gaan zwemmen of gaan hardlopen. Wat doet u liever? En waarom?",
    questionChinese: "您想去运动。您可以去游泳或去跑步。您更喜欢做什么？为什么？",
    imageDescription: "图1：游泳池。 图2：跑步的人。",
    idealSamples: [
      { id: 1, text: "Ik ga liever zwemmen, want ik houd van water.", translation: "我更喜欢游泳，因为我喜欢水。" },
      { id: 2, text: "Ik loop liever hard, omdat dat gratis is.", translation: "我更喜欢跑步，因为那是免费的。" }
    ]
  },
  {
    id: 'p3-q2',
    part: ExamPart.Part3,
    questionDutch: "U gaat op vakantie. U kunt met de auto of met het vliegtuig. Wat kiest u? Waarom?",
    questionChinese: "您去度假。您可以开车或坐飞机。您选什么？为什么？",
    imageDescription: "图1：汽车。 图2：飞机。",
    idealSamples: [
      { id: 1, text: "Ik ga liever met de auto, want dan kan ik veel spullen meenemen.", translation: "我更喜欢开车，因为那样我可以带很多东西。" },
      { id: 2, text: "Ik kies het vliegtuig, omdat dat sneller is.", translation: "我选飞机，因为那更快。" }
    ]
  },
  {
    id: 'p3-q3',
    part: ExamPart.Part3,
    questionDutch: "U wilt een huisdier. U kunt een hond of een kat nemen. Wat vindt u leuker? Waarom?",
    questionChinese: "您想要个宠物。您可以养狗或养猫。您觉得哪个更有趣？为什么？",
    imageDescription: "图1：狗。 图2：猫。",
    idealSamples: [
      { id: 1, text: "Ik vind een hond leuker, want je kunt met hem wandelen.", translation: "我觉得狗更有趣，因为你可以和它散步。" },
      { id: 2, text: "Ik neem liever een kat, omdat een kat rustig is.", translation: "我更喜欢养猫，因为猫很安静。" }
    ]
  },
  {
    id: 'p3-q4',
    part: ExamPart.Part3,
    questionDutch: "U gaat eten. U kunt thuis koken of naar een restaurant gaan. Wat doet u liever? Waarom?",
    questionChinese: "您要吃饭。您可以自家做饭或去餐厅。您更喜欢做什么？为什么？",
    imageDescription: "图1：在厨房做饭。 图2：在餐厅吃饭。",
    idealSamples: [
      { id: 1, text: "Ik kook liever thuis, want dat is gezonder.", translation: "我更喜欢在家做饭，因为那样更健康。" },
      { id: 2, text: "Ik ga liever naar een restaurant, omdat ik niet van koken houd.", translation: "我更喜欢去餐厅，因为我不喜欢做饭。" }
    ]
  },
  {
    id: 'p3-q5',
    part: ExamPart.Part3,
    questionDutch: "U wilt een nieuwe taal leren. U kunt een boek lezen of naar de les gaan. Wat kiest u? Waarom?",
    questionChinese: "您想学新语言。您可以看书或去上课。您选什么？为什么？",
    imageDescription: "图1：书本。 图2：教室。",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar de les, want dan kan ik praten met de docent.", translation: "我更喜欢去上课，因为那样我可以和老师说话。" },
      { id: 2, text: "Ik kies het boek, omdat ik thuis wil leren.", translation: "我选书，因为我想在家里学。" }
    ]
  },
  {
    id: 'p3-q6',
    part: ExamPart.Part3,
    questionDutch: "U zoekt een huis. U kunt in de stad wonen of in een dorp. Wat wilt u liever? Waarom?",
    questionChinese: "您在找房子。您可以住在城市或村庄。您更想要什么？为什么？",
    imageDescription: "图1：繁忙城市。 图2：安静村庄。",
    idealSamples: [
      { id: 1, text: "Ik woon liever in de stad, want er zijn veel winkels.", translation: "我更喜欢住城市，因为有很多商店。" },
      { id: 2, text: "Ik kies het dorp, omdat het daar rustig is.", translation: "我选村庄，因为那里很安静。" }
    ]
  },
  {
    id: 'p3-q7',
    part: ExamPart.Part3,
    questionDutch: "U gaat wonen. Wilt u een huis met een tuin of een appartement met een balkon?",
    questionChinese: "您要居住。您想要带花园的房子还是带阳台的公寓？",
    imageDescription: "图1：带花园的房子。 图2：带阳台的公寓。",
    idealSamples: [
      { id: 1, text: "Ik wil een huis met een tuin, want ik houd van bloemen.", translation: "我想要带花园的房子，因为我喜欢花。" },
      { id: 2, text: "Ik kies een appartement, omdat dat goedkoper is.", translation: "我选公寓，因为那更便宜。" }
    ]
  },
  {
    id: 'p3-q8',
    part: ExamPart.Part3,
    questionDutch: "U zoekt werk. Wilt u binnen werken of buiten werken?",
    questionChinese: "您在找工作。您想在室内工作还是室外工作？",
    imageDescription: "图1：办公室。 图2：建筑工地/室外。",
    idealSamples: [
      { id: 1, text: "Ik werk liever binnen, want buiten is het koud.", translation: "我更喜欢在室内工作，因为外面冷。" },
      { id: 2, text: "Ik werk graag buiten, omdat ik van frisse lucht houd.", translation: "我喜欢在室外工作，因为我喜欢新鲜空气。" }
    ]
  },
  {
    id: 'p3-q9',
    part: ExamPart.Part3,
    questionDutch: "U gaat werken. Werkt u liever alleen of in een team?",
    questionChinese: "您要去工作。您更喜欢独自工作还是在团队中工作？",
    imageDescription: "图1：一个人在桌前。 图2：一群人开会。",
    idealSamples: [
      { id: 1, text: "Ik werk liever in een team, want dat is gezellig.", translation: "我更喜欢在团队工作，因为那样很愉快。" },
      { id: 2, text: "Ik werk liever alleen, omdat ik me dan goed kan concentreren.", translation: "我更喜欢独自工作，因为那样我能集中注意力。" }
    ]
  },
  {
    id: 'p3-q10',
    part: ExamPart.Part3,
    questionDutch: "U reist naar uw werk. Gaat u met de fiets of met de bus?",
    questionChinese: "您去上班。您骑自行车还是坐公交？",
    imageDescription: "图1：自行车。 图2：公交车。",
    idealSamples: [
      { id: 1, text: "Ik ga liever met de fiets, want dat is gezond.", translation: "我更喜欢骑车，因为那很健康。" },
      { id: 2, text: "Ik neem de bus, omdat het regent.", translation: "我坐公交，因为下雨了。" }
    ]
  },
  {
    id: 'p3-q11',
    part: ExamPart.Part3,
    questionDutch: "U wilt iets drinken. Kiest u koffie of thee?",
    questionChinese: "您想喝点什么。您选咖啡还是茶？",
    imageDescription: "图1：咖啡。 图2：茶。",
    idealSamples: [
      { id: 1, text: "Ik drink liever koffie, want ik heb energie nodig.", translation: "我更喜欢喝咖啡，因为我需要能量。" },
      { id: 2, text: "Ik kies thee, omdat ik koffie niet lekker vind.", translation: "我选茶，因为我不喜欢咖啡。" }
    ]
  },
  {
    id: 'p3-q12',
    part: ExamPart.Part3,
    questionDutch: "U gaat boodschappen doen. Gaat u naar de supermarkt of naar de markt?",
    questionChinese: "您去买菜。您去超市还是去市场？",
    imageDescription: "图1：超市。 图2：露天市场。",
    idealSamples: [
      { id: 1, text: "Ik ga naar de supermarkt, want die is tot laat open.", translation: "我去超市，因为它开得很晚。" },
      { id: 2, text: "Ik ga liever naar de markt, omdat de groenten daar vers zijn.", translation: "我更喜欢去市场，因为那里的蔬菜很新鲜。" }
    ]
  },
  {
    id: 'p3-q13',
    part: ExamPart.Part3,
    questionDutch: "U hebt vrije tijd. Gaat u naar een museum of naar de bioscoop?",
    questionChinese: "您有空闲时间。您去博物馆还是去电影院？",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar de bioscoop, want ik houd van films.", translation: "我更喜欢去电影院，因为我喜欢电影。" },
      { id: 2, text: "Ik kies het museum, omdat ik iets wil leren.", translation: "我选博物馆，因为我想学点东西。" }
    ]
  },
  {
    id: 'p3-q14',
    part: ExamPart.Part3,
    questionDutch: "U gaat op reis. Gaat u naar een warm land of een koud land?",
    questionChinese: "您去旅行。您去热的国家还是冷的国家？",
    imageDescription: "图1：海滩/太阳。 图2：雪山。",
    idealSamples: [
      { id: 1, text: "Ik ga naar een warm land, want ik houd van de zon.", translation: "我去热的国家，因为我喜欢太阳。" },
      { id: 2, text: "Ik kies een koud land, omdat ik wil skiën.", translation: "我选冷的国家，因为我想滑雪。" }
    ]
  },
  {
    id: 'p3-q15',
    part: ExamPart.Part3,
    questionDutch: "U koopt kleren. Koopt u online of in de winkel?",
    questionChinese: "您买衣服。您在网上买还是在店里买？",
    imageDescription: "图1：电脑购物。 图2：实体店。",
    idealSamples: [
      { id: 1, text: "Ik koop liever in de winkel, want ik wil de kleren passen.", translation: "我更喜欢在店里买，因为我想试穿衣服。" },
      { id: 2, text: "Ik koop online, omdat dat makkelijk is.", translation: "我在网上买，因为那很方便。" }
    ]
  },
  {
    id: 'p3-q16',
    part: ExamPart.Part3,
    questionDutch: "U moet betalen. Betaalt u contant of met de pin?",
    questionChinese: "您得付款。您付现金还是刷卡？",
    imageDescription: "图1：现金。 图2：刷卡机。",
    idealSamples: [
      { id: 1, text: "Ik betaal met de pin, want dat gaat snel.", translation: "我刷卡，因为那很快。" },
      { id: 2, text: "Ik betaal contant, omdat ik geen geld op de bank heb.", translation: "我付现金，因为我银行里没钱。" }
    ]
  },
  {
    id: 'p3-q17',
    part: ExamPart.Part3,
    questionDutch: "U wilt contact met een vriend. Gaat u bellen of sturen?",
    questionChinese: "您想联系朋友。您打电话还是发信息？",
    imageDescription: "图1：打电话。 图2：发短信/Whatsapp。",
    idealSamples: [
      { id: 1, text: "Ik ga bellen, want ik wil zijn stem horen.", translation: "我打电话，因为我想听他的声音。" },
      { id: 2, text: "Ik stuur een berichtje, omdat ik het druk heb.", translation: "我发个信息，因为我很忙。" }
    ]
  },
  {
    id: 'p3-q18',
    part: ExamPart.Part3,
    questionDutch: "U krijgt een cadeau. Wilt u geld of een cadeautje?",
    questionChinese: "您收到礼物。您想要钱还是小礼物？",
    imageDescription: "图1：钱。 图2：礼盒。",
    idealSamples: [
      { id: 1, text: "Ik wil liever geld, want dan kan ik zelf iets kopen.", translation: "我更想要钱，因为那样我可以自己买东西。" },
      { id: 2, text: "Ik vind een cadeautje leuker, omdat dat een verrassing is.", translation: "我觉得礼物更有趣，因为那是个惊喜。" }
    ]
  },
  {
    id: 'p3-q19',
    part: ExamPart.Part3,
    questionDutch: "U bent jarig. Geeft u een groot feest of een klein etentje?",
    questionChinese: "您过生日。您办大派对还是小聚餐？",
    imageDescription: "图1：很多人跳舞。 图2：几个人吃饭。",
    idealSamples: [
      { id: 1, text: "Ik geef een groot feest, want ik houd van dansen.", translation: "我办大派对，因为我喜欢跳舞。" },
      { id: 2, text: "Ik houd een klein etentje, omdat ik niet van drukte houd.", translation: "我办小聚餐，因为我不喜欢吵闹。" }
    ]
  },
  {
    id: 'p3-q20',
    part: ExamPart.Part3,
    questionDutch: "U gaat sporten. Doet u dat 's ochtends of 's avonds?",
    questionChinese: "您去运动。您早上做还是晚上做？",
    imageDescription: "图1：太阳升起。 图2：月亮/晚上。",
    idealSamples: [
      { id: 1, text: "Ik sport 's ochtends, want dan ben ik fit.", translation: "我早上运动，因为那时我精力充沛。" },
      { id: 2, text: "Ik sport liever 's avonds, omdat ik overdag werk.", translation: "我更喜欢晚上运动，因为我白天工作。" }
    ]
  },
  {
    id: 'p3-q21',
    part: ExamPart.Part3,
    questionDutch: "U leert Nederlands. Vindt u spreken of schrijven belangrijker?",
    questionChinese: "您学荷兰语。您觉得说更重要还是写更重要？",
    imageDescription: "图1：说话图标。 图2：写字笔。",
    idealSamples: [
      { id: 1, text: "Ik vind spreken belangrijker, want ik moet praten op mijn werk.", translation: "我觉得说更重要，因为我工作时得说话。" },
      { id: 2, text: "Schrijven is belangrijk, omdat ik e-mails moet sturen.", translation: "写很重要，因为我得发邮件。" }
    ]
  },
  {
    id: 'p3-q22',
    part: ExamPart.Part3,
    questionDutch: "U kijkt nieuws. Leest u de krant of kijkt u tv?",
    questionChinese: "您看新闻。您读报纸还是看电视？",
    imageDescription: "图1：报纸。 图2：电视新闻。",
    idealSamples: [
      { id: 1, text: "Ik kijk tv, want dat is makkelijker.", translation: "我看电视，因为那更容易。" },
      { id: 2, text: "Ik lees de krant, omdat ik dan rustig kan lezen.", translation: "我读报纸，因为那样我可以安静地读。" }
    ]
  },
  {
    id: 'p3-q23',
    part: ExamPart.Part3,
    questionDutch: "U gaat lunchen. Eet u brood of warm eten?",
    questionChinese: "您去吃午饭。您吃面包还是热食？",
    imageDescription: "图1：三明治。 图2：热菜/面条。",
    idealSamples: [
      { id: 1, text: "Ik eet brood, want dat is typisch Nederlands.", translation: "我吃面包，因为那是典型的荷兰式。" },
      { id: 2, text: "Ik eet liever warm, omdat ik dat lekkerder vind.", translation: "我更喜欢吃热的，因为我觉得那更好吃。" }
    ]
  },
  {
    id: 'p3-q24',
    part: ExamPart.Part3,
    questionDutch: "U koopt een fiets. Koopt u een nieuwe of een tweedehands?",
    questionChinese: "您买自行车。您买新的还是二手的？",
    imageDescription: "图1：闪亮新车。 图2：旧车。",
    idealSamples: [
      { id: 1, text: "Ik koop een tweedehands fiets, want dat is goedkoop.", translation: "我买二手车，因为那便宜。" },
      { id: 2, text: "Ik wil een nieuwe, omdat die niet snel kapot gaat.", translation: "我想要新的，因为那样不容易坏。" }
    ]
  },
  {
    id: 'p3-q25',
    part: ExamPart.Part3,
    questionDutch: "U gaat schoonmaken. Doet u liever stofzuigen of afwassen?",
    questionChinese: "您去打扫。您更喜欢吸尘还是洗碗？",
    imageDescription: "图1：吸尘器。 图2：洗碗池。",
    idealSamples: [
      { id: 1, text: "Ik ga liever stofzuigen, want dat gaat snel.", translation: "我更喜欢吸尘，因为那很快。" },
      { id: 2, text: "Ik was liever af, omdat ik geen vaatwasser heb.", translation: "我更喜欢洗碗，因为我没有洗碗机。" }
    ]
  },
  {
    id: 'p3-q26',
    part: ExamPart.Part3,
    questionDutch: "U gaat naar het bos of naar het strand. Wat kiest u?",
    questionChinese: "您去森林还是去海滩。您选什么？",
    imageDescription: "图1：树林。 图2：沙滩大海。",
    idealSamples: [
      { id: 1, text: "Ik ga naar het bos, want ik houd van bomen.", translation: "我去森林，因为我喜欢树。" },
      { id: 2, text: "Ik kies het strand, omdat ik wil zwemmen.", translation: "我选海滩，因为我想游泳。" }
    ]
  },
  {
    id: 'p3-q27',
    part: ExamPart.Part3,
    questionDutch: "U luistert muziek. Houdt u van harde muziek of zachte muziek?",
    questionChinese: "您听音乐。您喜欢大声音乐还是轻音乐？",
    imageDescription: "图1：摇滚/喇叭。 图2：小提琴/轻声。",
    idealSamples: [
      { id: 1, text: "Ik houd van harde muziek, want dan kan ik dansen.", translation: "我喜欢大声音乐，因为那样我可以跳舞。" },
      { id: 2, text: "Ik luister liever zachte muziek, omdat ik rust wil.", translation: "我更喜欢听轻音乐，因为我想要安静。" }
    ]
  },
  {
    id: 'p3-q28',
    part: ExamPart.Part3,
    questionDutch: "U gaat slapen. Gaat u vroeg of laat naar bed?",
    questionChinese: "您去睡觉。您早睡还是晚睡？",
    imageDescription: "图1：21:00。 图2：01:00。",
    idealSamples: [
      { id: 1, text: "Ik ga vroeg naar bed, want ik moet werken.", translation: "我早睡，因为我得工作。" },
      { id: 2, text: "Ik ga laat naar bed, omdat ik 's avonds tv kijk.", translation: "我晚睡，因为我晚上看电视。" }
    ]
  },
  {
    id: 'p3-q29',
    part: ExamPart.Part3,
    questionDutch: "U reist met de trein. Zit u in de stiltecoupé of de gewone coupé?",
    questionChinese: "您坐火车旅行。您坐静音车厢还是普通车厢？",
    imageDescription: "图1：安静标志。 图2：说话的人。",
    idealSamples: [
      { id: 1, text: "Ik zit in de stiltecoupé, want ik wil lezen.", translation: "我坐静音车厢，因为我想看书。" },
      { id: 2, text: "Ik zit gewoon, omdat ik wil bellen.", translation: "我坐普通座，因为我想打电话。" }
    ]
  },
  {
    id: 'p3-q30',
    part: ExamPart.Part3,
    questionDutch: "U hebt een probleem. Lost u het zelf op of vraagt u hulp?",
    questionChinese: "您有个问题。您自己解决还是寻求帮助？",
    imageDescription: "图1：独自思考。 图2：求助他人。",
    idealSamples: [
      { id: 1, text: "Ik los het zelf op, want ik ben handig.", translation: "我自己解决，因为我很灵巧。" },
      { id: 2, text: "Ik vraag hulp, omdat ik het niet weet.", translation: "我寻求帮助，因为我不知道。" }
    ]
  },
  {
    id: 'p3-q31',
    part: ExamPart.Part3,
    questionDutch: "U gaat winkelen. Gaat u alleen of met een vriend?",
    questionChinese: "您去逛街。您一个人去还是和朋友去？",
    imageDescription: "图1：独自一人。 图2：两个人。",
    idealSamples: [
      { id: 1, text: "Ik ga alleen, want dat is sneller.", translation: "我一个人去，因为那更快。" },
      { id: 2, text: "Ik ga met een vriend, omdat dat gezellig is.", translation: "我和朋友去，因为那很开心。" }
    ]
  },
  {
    id: 'p3-q32',
    part: ExamPart.Part3,
    questionDutch: "U zoekt een baan. Wilt u fulltime of parttime werken?",
    questionChinese: "您找工作。您想全职还是兼职？",
    imageDescription: "图1：40小时。 图2：20小时。",
    idealSamples: [
      { id: 1, text: "Ik wil fulltime werken, want ik heb geld nodig.", translation: "我想全职，因为我需要钱。" },
      { id: 2, text: "Ik werk liever parttime, omdat ik kinderen heb.", translation: "我更喜欢兼职，因为我有孩子。" }
    ]
  },
  {
    id: 'p3-q33',
    part: ExamPart.Part3,
    questionDutch: "U eet fruit. Eet u liever een appel of een banaan?",
    questionChinese: "您吃水果。您更喜欢吃苹果还是香蕉？",
    imageDescription: "图1：苹果。 图2：香蕉。",
    idealSamples: [
      { id: 1, text: "Ik eet een appel, want die is fris.", translation: "我吃苹果，因为那很清爽。" },
      { id: 2, text: "Ik heb liever een banaan, omdat die zoet is.", translation: "我更喜欢香蕉，因为那很甜。" }
    ]
  },
  {
    id: 'p3-q34',
    part: ExamPart.Part3,
    questionDutch: "U bent thuis. Draagt u schoenen of pantoffels?",
    questionChinese: "您在家。您穿鞋还是拖鞋？",
    imageDescription: "图1：皮鞋。 图2：拖鞋。",
    idealSamples: [
      { id: 1, text: "Ik draag pantoffels, want dat is comfortabel.", translation: "我穿拖鞋，因为那很舒服。" },
      { id: 2, text: "Ik houd mijn schoenen aan, omdat ik nog weg moet.", translation: "我穿着鞋，因为我还得出门。" }
    ]
  },
  {
    id: 'p3-q35',
    part: ExamPart.Part3,
    questionDutch: "U gaat op bezoek. Neemt u bloemen mee of chocolade?",
    questionChinese: "您去拜访。您带花还是巧克力？",
    imageDescription: "图1：花束。 图2：巧克力。",
    idealSamples: [
      { id: 1, text: "Ik neem bloemen mee, want dat staat mooi.", translation: "我带花，因为那很好看。" },
      { id: 2, text: "Ik geef chocolade, omdat iedereen dat lekker vindt.", translation: "我送巧克力，因为大家都觉得好吃。" }
    ]
  },

  // ============================
  // PART 4: STORY (15 Questions)
  // ============================
  {
    id: 'p4-q1',
    part: ExamPart.Part4,
    questionDutch: "Anna gaat een taart bakken. Vertel wat Anna doet. Gebruik de woorden 'eerst', 'daarna' en 'tot slot'.",
    questionChinese: "Anna要烤蛋糕。说说Anna做什么。使用词语'eerst', 'daarna', 'tot slot'。",
    imageDescription: "1. 买材料。 2. 搅拌。 3. 吃蛋糕。",
    idealSamples: [
      { id: 1, text: "Eerst koopt Anna de ingrediënten in de winkel. Daarna maakt ze het deeg. Tot slot eet ze de taart.", translation: "首先Anna在商店买材料。然后她制作面团。最后她吃蛋糕。" },
      { id: 2, text: "Eerst gaat ze naar de supermarkt. Daarna bakt ze de taart in de oven. Tot slot is de taart klaar.", translation: "首先她去超市。然后她在烤箱里烤蛋糕。最后蛋糕做好了。" }
    ]
  },
  {
    id: 'p4-q2',
    part: ExamPart.Part4,
    questionDutch: "Tom is ziek. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "Tom病了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. 躺在床上发烧。 2. 打电话给医生。 3. 吃药。",
    idealSamples: [
      { id: 1, text: "Eerst ligt Tom in bed met koorts. Daarna belt hij de dokter. Tot slot neemt hij medicijnen.", translation: "首先Tom发烧躺在床上。然后他给医生打电话。最后他吃药。" },
      { id: 2, text: "Tom voelt zich niet lekker. Hij maakt een afspraak. Hij haalt pillen bij de apotheek.", translation: "Tom感觉不舒服。他预约了。他在药房拿药。" }
    ]
  },
  {
    id: 'p4-q3',
    part: ExamPart.Part4,
    questionDutch: "Lisa gaat met de trein. Vertel het verhaal.",
    questionChinese: "Lisa坐火车。讲讲这个故事。",
    imageDescription: "1. 买票。 2. 等火车。 3. 坐在车厢里。",
    idealSamples: [
      { id: 1, text: "Eerst koopt Lisa een kaartje bij de automaat. Daarna wacht ze op het perron. Tot slot zit ze in de trein.", translation: "首先Lisa在自动售票机买票。然后她在站台等。最后她坐在火车里。" },
      { id: 2, text: "Ze koopt een ticket. De trein komt eraan. Ze leest een boek in de trein.", translation: "她买了一张票。火车来了。她在火车上看书。" }
    ]
  },
  {
    id: 'p4-q4',
    part: ExamPart.Part4,
    questionDutch: "Mehmet zoekt werk. Wat doet hij? Vertel bij elk plaatje iets.",
    questionChinese: "Mehmet找工作。他做什么？每张图都说一点。",
    imageDescription: "1. 看报纸广告。 2. 写信/发邮件。 3. 面试握手。",
    idealSamples: [
      { id: 1, text: "Eerst kijkt Mehmet in de krant naar vacatures. Daarna schrijft hij een sollicitatiebrief. Tot slot heeft hij een gesprek.", translation: "首先Mehmet在报纸上看空缺职位。然后他写求职信。最后他进行面试。" },
      { id: 2, text: "Hij zoekt een baan. Hij stuurt zijn CV op. Hij praat met de baas.", translation: "他找工作。他寄出简历。他和老板谈话。" }
    ]
  },
  {
    id: 'p4-q5',
    part: ExamPart.Part4,
    questionDutch: "Anna gaat slapen. Vertel wat Anna doet. Vertel iets over alle plaatjes.",
    questionChinese: "Anna去睡觉。说说Anna在做什么。请描述所有图片。",
    imageDescription: "1. 刷牙。 2. 在床上看书。 3. 关灯睡觉。",
    idealSamples: [
      { id: 1, text: "Anna poetst haar tanden. Ze leest een boek in bed. Ze gaat slapen.", translation: "Anna在刷牙。她在床上看书。她去睡觉。" },
      { id: 2, text: "Ze maakt haar tanden schoon. Ze leest nog even. Ze doet het licht uit.", translation: "她把牙齿刷干净。她再读一会儿书。她关了灯。" }
    ]
  },
  {
    id: 'p4-q6',
    part: ExamPart.Part4,
    questionDutch: "Peter gaat wassen. Vertel wat hij doet.",
    questionChinese: "Peter去洗衣服。说说他做什么。",
    imageDescription: "1. 衣服放进洗衣机。 2. 晾衣服。 3. 熨衣服。",
    idealSamples: [
      { id: 1, text: "Eerst stopt Peter de kleren in de wasmachine. Daarna hangt hij de was op. Tot slot strijkt hij het overhemd.", translation: "首先Peter把衣服放进洗衣机。然后他晾衣服。最后他熨衬衫。" },
      { id: 2, text: "Hij doet de was. Hij droogt de kleren. Hij maakt de kleren netjes.", translation: "他洗衣服。他弄干衣服。他把衣服弄整洁。" }
    ]
  },
  {
    id: 'p4-q7',
    part: ExamPart.Part4,
    questionDutch: "Maria stuurt een brief. Vertel het verhaal.",
    questionChinese: "Maria寄信。讲讲这个故事。",
    imageDescription: "1. 写信。 2. 贴邮票。 3. 投进邮箱。",
    idealSamples: [
      { id: 1, text: "Eerst schrijft Maria een brief. Daarna plakt ze een postzegel. Tot slot gooit ze de brief in de bus.", translation: "首先Maria写信。然后她贴邮票。最后她把信扔进邮箱。" },
      { id: 2, text: "Ze schrijft aan haar moeder. Ze doet de postzegel erop. Ze verstuurt de brief.", translation: "她给妈妈写信。她贴上邮票。她寄出信。" }
    ]
  },
  {
    id: 'p4-q8',
    part: ExamPart.Part4,
    questionDutch: "Jan koopt nieuwe schoenen. Wat doet hij?",
    questionChinese: "Jan买新鞋。他做什么？",
    imageDescription: "1. 进鞋店。 2. 试鞋。 3. 付款。",
    idealSamples: [
      { id: 1, text: "Eerst gaat Jan de schoenenwinkel binnen. Daarna past hij de schoenen. Tot slot betaalt hij bij de kassa.", translation: "首先Jan进鞋店。然后他试鞋。最后他在收银台付款。" },
      { id: 2, text: "Hij zoekt schoenen. Hij doet ze aan. Hij koopt ze.", translation: "他找鞋子。他穿上它们。他买下它们。" }
    ]
  },
  {
    id: 'p4-q9',
    part: ExamPart.Part4,
    questionDutch: "De auto is leeg. Wat doet de man? Vertel het verhaal.",
    questionChinese: "车没油了。男人做什么？讲讲这个故事。",
    imageDescription: "1. 停在加油站。 2. 加油。 3. 付款。",
    idealSamples: [
      { id: 1, text: "Eerst stopt de man bij het tankstation. Daarna tankt hij benzine. Tot slot betaalt hij.", translation: "首先男人停在加油站。然后他加汽油。最后他付款。" },
      { id: 2, text: "De benzine is op. Hij vult de tank. Hij gaat afrekenen.", translation: "汽油没了。他加满油箱。他去结账。" }
    ]
  },
  {
    id: 'p4-q10',
    part: ExamPart.Part4,
    questionDutch: "Sarah gaat naar de bioscoop. Wat gebeurt er?",
    questionChinese: "Sarah去电影院。发生了什么？",
    imageDescription: "1. 买票。 2. 买爆米花。 3. 看电影。",
    idealSamples: [
      { id: 1, text: "Eerst koopt Sarah een kaartje. Daarna koopt ze popcorn. Tot slot kijkt ze naar de film.", translation: "首先Sarah买票。然后她买爆米花。最后她看电影。" },
      { id: 2, text: "Ze haalt een ticket. Ze neemt wat te eten. Ze zit in de zaal.", translation: "她拿了张票。她拿了点吃的。她坐在放映厅里。" }
    ]
  },
  {
    id: 'p4-q11',
    part: ExamPart.Part4,
    questionDutch: "Kees gaat naar de bibliotheek. Vertel wat hij doet.",
    questionChinese: "Kees去图书馆。说说他做什么。",
    imageDescription: "1. 找书。 2. 刷借书卡。 3. 读书。",
    idealSamples: [
      { id: 1, text: "Eerst zoekt Kees een leuk boek. Daarna laat hij zijn pasje zien. Tot slot leest hij het boek.", translation: "首先Kees找一本有趣的书。然后他出示卡片。最后他读书。" },
      { id: 2, text: "Hij pakt een boek uit de kast. Hij leent het boek. Hij gaat lezen.", translation: "他从柜子里拿出一本书。他借了书。他去读书。" }
    ]
  },
  {
    id: 'p4-q12',
    part: ExamPart.Part4,
    questionDutch: "Meneer Jansen gaat naar de kapper. Wat gebeurt er?",
    questionChinese: "Jansen先生去理发店。发生了什么？",
    imageDescription: "1. 坐下。 2. 理发师剪发。 3. 照镜子/付款。",
    idealSamples: [
      { id: 1, text: "Eerst gaat meneer Jansen zitten. Daarna knipt de kapper zijn haar. Tot slot betaalt hij.", translation: "首先Jansen先生坐下。然后理发师剪他的头发。最后他付款。" },
      { id: 2, text: "Hij zit in de stoel. Zijn haren worden kort. Hij is klaar.", translation: "他坐在椅子上。他的头发变短了。他好了。" }
    ]
  },
  {
    id: 'p4-q13',
    part: ExamPart.Part4,
    questionDutch: "Eva werkt in de tuin. Vertel het verhaal.",
    questionChinese: "Eva在花园工作。讲讲这个故事。",
    imageDescription: "1. 挖坑/种花。 2. 浇水。 3. 花开了。",
    idealSamples: [
      { id: 1, text: "Eerst plant Eva de bloemen in de grond. Daarna geeft ze water. Tot slot groeien de bloemen.", translation: "首先Eva把花种在土里。然后她浇水。最后花长出来了。" },
      { id: 2, text: "Ze stopt zaadjes in de aarde. Ze gebruikt de gieter. De tuin is mooi.", translation: "她把种子放进土里。她用水壶。花园很美。" }
    ]
  },
  {
    id: 'p4-q14',
    part: ExamPart.Part4,
    questionDutch: "De familie gaat verhuizen. Wat doen ze?",
    questionChinese: "这家人要搬家。他们做什么？",
    imageDescription: "1. 打包箱子。 2. 搬上卡车。 3. 到了新家。",
    idealSamples: [
      { id: 1, text: "Eerst pakt de familie de dozen in. Daarna zetten ze alles in de vrachtwagen. Tot slot rijden ze naar het nieuwe huis.", translation: "首先这家人打包箱子。然后他们把所有东西放进卡车。最后他们开往新家。" },
      { id: 2, text: "Ze doen spullen in dozen. Ze dragen de dozen. Ze zijn in hun nieuwe woning.", translation: "他们把东西放进箱子。他们搬箱子。他们在他们的新住处。" }
    ]
  },
  {
    id: 'p4-q15',
    part: ExamPart.Part4,
    questionDutch: "Ali maakt thee. Vertel hoe dat moet.",
    questionChinese: "Ali泡茶。说说怎么做。",
    imageDescription: "1. 烧水。 2. 放茶包。 3. 喝茶。",
    idealSamples: [
      { id: 1, text: "Eerst kookt Ali het water. Daarna doet hij het theezakje in het kopje. Tot slot drinkt hij de thee.", translation: "首先Ali烧水。然后他把茶包放进杯子。最后他喝茶。" },
      { id: 2, text: "Hij maakt het water heet. Hij pakt een kopje. De thee is lekker.", translation: "他把水弄热。他拿个杯子。茶很好喝。" }
    ]
  }
];
