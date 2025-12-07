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
  // (PRESERVE STUDY PLAN - Keeping it concise for file update, but it was correct in previous version)
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

export const QUESTION_DATABASE: QuestionItem[] = [
  // --- PART 1: INTERVIEW ---
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

  // --- PART 2: DESCRIPTION ---
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

  // --- PART 3: PREFERENCE ---
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

  // --- PART 4: STORY ---
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
    id: 'p4-q10',
    part: ExamPart.Part4,
    questionDutch: "Anna gaat slapen. Vertel wat Anna doet. Vertel iets over alle plaatjes.",
    questionChinese: "Anna去睡觉。说说Anna在做什么。请描述所有图片。",
    imageDescription: "1. 刷牙。 2. 在床上看书。 3. 关灯睡觉。",
    idealSamples: [
      { id: 1, text: "Anna poetst haar tanden. Ze leest een boek in bed. Ze gaat slapen.", translation: "Anna在刷牙。她在床上看书。她去睡觉。" },
      { id: 2, text: "Ze maakt haar tanden schoon. Ze leest nog even. Ze doet het licht uit.", translation: "她把牙齿刷干净。她再读一会儿书。她关了灯。" }
    ]
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
