import { ExamPart, QuestionItem, StudyPlanDay, DrillType } from './types';

export const DRILL_SCENARIOS = {
  [DrillType.Completion]: [
    // --- WANT (Coordinating: No change in word order) ---
    { prompt: "Ik ga niet naar buiten, want ...", hint: "我不出去，因为... (want + 主 + 动)" },
    { prompt: "Ik leer Nederlands, want ...", hint: "我学荷兰语，因为... (want + ...)" },
    { prompt: "Ik ben blij, want ...", hint: "我很开心，因为... (want + ...)" },
    { prompt: "Hij gaat naar de dokter, want ...", hint: "他去看医生，因为... (want + ...)" },
    { prompt: "Zij koopt een nieuwe auto, want ...", hint: "她买新车，因为... (want + ...)" },
    { prompt: "Wij blijven thuis, want ...", hint: "我们待在家里，因为... (want + ...)" },
    { prompt: "Ik eet geen vlees, want ...", hint: "我不吃肉，因为... (want + ...)" },
    { prompt: "Ik ga vroeg naar bed, want ...", hint: "我早睡，因为... (want + ...)" },
    { prompt: "Ik neem de trein, want ...", hint: "我坐火车，因为... (want + ...)" },
    { prompt: "Ik draag een jas, want ...", hint: "我穿外套，因为... (want + ...)" },
    { prompt: "Ik bel mijn moeder, want ...", hint: "我给妈妈打电话，因为... (want + ...)" },
    { prompt: "Ik drink koffie, want ...", hint: "我喝咖啡，因为... (want + ...)" },
    { prompt: "Ik zoek een nieuwe baan, want ...", hint: "我找新工作，因为... (want + ...)" },
    { prompt: "Ik houd van de zomer, want ...", hint: "我喜欢夏天，因为... (want + ...)" },
    { prompt: "Ik ga naar de markt, want ...", hint: "我去市场，因为... (want + ...)" },

    // --- OMDAT (Subordinating: Verb at the end) ---
    { prompt: "Ik ga niet naar buiten, omdat ...", hint: "我不出去，因为... (omdat + ... + 动词)" },
    { prompt: "Ik ben blij, omdat ...", hint: "我很开心，因为... (omdat + ... + 动词)" },
    { prompt: "Hij is ziek, omdat ...", hint: "他病了，因为... (omdat + ... + 动词)" },
    { prompt: "Ik leer elke dag, omdat ...", hint: "我每天学习，因为... (omdat + ... + 动词)" },
    { prompt: "Zij komt te laat, omdat ...", hint: "她迟到了，因为... (omdat + ... + 动词)" },
    { prompt: "Wij gaan wandelen, omdat ...", hint: "我们去散步，因为... (omdat + ... + 动词)" },
    { prompt: "Ik spaar geld, omdat ...", hint: "我存钱，因为... (omdat + ... + 动词)" },
    { prompt: "Ik ben moe, omdat ...", hint: "我累了，因为... (omdat + ... + 动词)" },
    { prompt: "Het is koud, omdat ...", hint: "天气冷，因为... (omdat + ... + 动词)" },
    { prompt: "Ik vind Nederland leuk, omdat ...", hint: "我觉得荷兰很好，因为... (omdat + ... + 动词)" },
    { prompt: "Ik eet gezond, omdat ...", hint: "我吃得健康，因为... (omdat + ... + 动词)" },
    { prompt: "Ik heb geen tijd, omdat ...", hint: "我没时间，因为... (omdat + ... + 动词)" },
    { prompt: "Ik wil verhuizen, omdat ...", hint: "我想搬家，因为... (omdat + ... + 动词)" },
    { prompt: "Ik lees een boek, omdat ...", hint: "我看书，因为... (omdat + ... + 动词)" },
    { prompt: "Ik draag een bril, omdat ...", hint: "我戴眼镜，因为... (omdat + ... + 动词)" },

    // --- ALS (If/When - Subordinating: Verb at the end) ---
    { prompt: "Als het regent, ...", hint: "如果下雨，(我就... 注意主谓倒装)" },
    { prompt: "Als ik tijd heb, ...", hint: "如果我有时间，(我就...)" },
    { prompt: "Als ik ziek ben, ...", hint: "如果我病了，..." },
    { prompt: "Als de zon schijnt, ...", hint: "如果阳光明媚，..." },
    { prompt: "Als ik naar de winkel ga, ...", hint: "如果我去商店，..." },
    { prompt: "Als mijn vrienden komen, ...", hint: "如果朋友们来了，..." },
    { prompt: "Als ik klaar ben met werken, ...", hint: "如果我工作做完了，..." },
    { prompt: "Als de trein vertraging heeft, ...", hint: "如果火车晚点了，..." },
    { prompt: "Als ik veel geld heb, ...", hint: "如果我有很多钱，..." },
    { prompt: "Als ik op vakantie ga, ...", hint: "如果我去度假，..." },

    // --- MAAR / DUS (Coordinating) ---
    { prompt: "Ik wil graag komen, maar ...", hint: "我想来，但是..." },
    { prompt: "Het is duur, maar ...", hint: "它很贵，但是..." },
    { prompt: "Ik heb honger, dus ...", hint: "我饿了，所以..." },
    { prompt: "Het regent hard, dus ...", hint: "雨下得很大，所以..." },
    { prompt: "Ik versta het niet, dus ...", hint: "我听不懂，所以..." },
    { prompt: "Ik vind koken leuk, maar ...", hint: "我觉得做饭很有趣，但是..." },
    { prompt: "De auto is kapot, dus ...", hint: "车坏了，所以..." },
    { prompt: "Ik spreek Engels, maar ...", hint: "我说英语，但是..." },
    { prompt: "Ik moet werken, dus ...", hint: "我得工作，所以..." },
    { prompt: "Het huis is mooi, maar ...", hint: "房子很漂亮，但是..." },
  ],

  [DrillType.Expansion]: [
    // --- BASIC S-V-T-P (Subject-Verb-Time-Place) ---
    { prompt: "Ik werk. (请加入：elke dag / op kantoor)", hint: "我每天在办公室工作。" },
    { prompt: "Ik kook. (请加入：vanavond / thuis)", hint: "我今晚在家做饭。" },
    { prompt: "Wij eten. (请加入：om 6 uur / in de keuken)", hint: "我们6点在厨房吃饭。" },
    { prompt: "Zij fietst. (请加入：morgen / naar school)", hint: "她明天骑车去学校。" },
    { prompt: "Hij leest. (请加入：nu / in de woonkamer)", hint: "他现在在客厅看书。" },
    { prompt: "Ik wandel. (请加入：in het weekend / in het bos)", hint: "我周末在森林散步。" },
    { prompt: "Wij spelen. (请加入：vaak / buiten)", hint: "我们经常在外面玩。" },
    { prompt: "Ik sport. (请加入：op maandag / in de sportschool)", hint: "我周一在健身房运动。" },
    { prompt: "Zij wacht. (请加入：al lang / op de bus)", hint: "她在等公交，等了很久了。" },
    { prompt: "Ik slaap. (请加入：'s nachts / goed)", hint: "我晚上睡得很好。" },
    { prompt: "Hij werkt. (请加入：soms / thuis)", hint: "他有时在家工作。" },
    { prompt: "Wij gaan. (请加入：in de zomer / naar Frankrijk)", hint: "我们夏天去法国。" },
    { prompt: "Ik drink thee. (请加入：'s ochtends / in bed)", hint: "我早上在床上喝茶。" },
    { prompt: "Zij praat. (请加入：veel / met haar buren)", hint: "她经常和邻居说话。" },
    { prompt: "Ik leer. (请加入：nu / Nederlands)", hint: "我现在学荷兰语。" },

    // --- INVERSION (Time-Verb-Subject-Place) ---
    { prompt: "Ik ga naar de markt. (请把 'Morgen' 放在句首)", hint: "明天我去市场。 (Morgen ga ik...)" },
    { prompt: "Ik ben vrij. (请把 'Vandaag' 放在句首)", hint: "今天我有空。 (Vandaag ben ik...)" },
    { prompt: "Ik heb een afspraak. (请把 'Om 9 uur' 放在句首)", hint: "9点我有约。 (Om 9 uur heb ik...)" },
    { prompt: "Het is koud. (请把 'In de winter' 放在句首)", hint: "冬天很冷。" },
    { prompt: "Ik eet brood. (请把 'Soms' 放在句首)", hint: "有时我吃面包。" },
    { prompt: "Ik ga sporten. (请把 'Vanavond' 放在句首)", hint: "今晚我去运动。" },
    { prompt: "Wij gaan zwemmen. (请把 'In de zomer' 放在句首)", hint: "夏天我们去游泳。" },
    { prompt: "Ik ben moe. (请把 'Nu' 放在句首)", hint: "现在我很累。" },
    { prompt: "Ik drink koffie. (请把 'Daarna' 放在句首)", hint: "然后我喝咖啡。" },
    { prompt: "Hij komt thuis. (请把 'Laat' 放在句首)", hint: "他回来得很晚。" },

    // --- MANNER (Graag / Niet) ---
    { prompt: "Ik luister naar muziek. (请加入：graag)", hint: "我喜欢听音乐。" },
    { prompt: "Ik eet vis. (请加入：niet)", hint: "我不吃鱼。" },
    { prompt: "Ik rijd auto. (请加入：niet graag)", hint: "我不喜欢开车。" },
    { prompt: "Zij zingt. (请加入：mooi)", hint: "她唱得很好听。" },
    { prompt: "Hij werkt. (请加入：hard)", hint: "他工作很努力。" },
    { prompt: "Ik spreek Nederlands. (请加入：een beetje)", hint: "我会说一点荷兰语。" },
    { prompt: "Ik loop. (请加入：snel / naar huis)", hint: "我快步走回家。" },
    { prompt: "Wij dansen. (请加入：samen / op het feest)", hint: "我们在派对上一起跳舞。" },
    { prompt: "Ik koop kleren. (请加入：vaak / online)", hint: "我经常在网上买衣服。" },
    { prompt: "Het regent. (请加入：hard / buiten)", hint: "外面雨下得很大。" },
    
    // --- COMPLEX EXPANSION ---
    { prompt: "Ik bel. (请加入：straks / de dokter)", hint: "我一会儿给医生打电话。" },
    { prompt: "Ik zoek. (请加入：al een uur / mijn sleutels)", hint: "我找钥匙找了一个小时了。" },
    { prompt: "Zij geeft. (请加入：een cadeau / aan haar moeder)", hint: "她给妈妈一个礼物。" },
    { prompt: "Hij stuurt. (请加入：een brief / naar zijn familie)", hint: "他给家人寄信。" },
    { prompt: "Wij maken. (请加入：een afspraak / bij de gemeente)", hint: "我们在市政厅预约。" },
    { prompt: "Ik poets. (请加入：elke avond / mijn tanden)", hint: "我每晚刷牙。" },
    { prompt: "Zij wast. (请加入：nu / haar handen)", hint: "她现在在洗手。" },
    { prompt: "Hij repareert. (请加入：zondag / zijn fiets)", hint: "他周日修自行车。" },
    { prompt: "Ik nodig uit. (请加入：mijn vrienden / voor een etentje)", hint: "我邀请朋友吃饭。" },
    { prompt: "Wij vieren. (请加入：morgen / mijn verjaardag)", hint: "我们明天庆祝我的生日。" },
  ],

  [DrillType.Sequence]: [
    // --- DAILY ROUTINE ---
    { prompt: "Koffie zetten (泡咖啡)", hint: "用 Eerst..., Daarna... 描述步骤 (water koken, koffie in kopje)." },
    { prompt: "Opstaan (起床)", hint: "用 Eerst..., Daarna... 描述早晨 (wekker gaat, uit bed stappen)." },
    { prompt: "Tanden poetsen (刷牙)", hint: "用 Eerst..., Daarna... 描述 (tandpasta pakken, poetsen)." },
    { prompt: "Douchen (淋浴)", hint: "用 Eerst..., Daarna... 描述 (kraan openen, wassen)." },
    { prompt: "Aankleden (穿衣)", hint: "用 Eerst..., Daarna... 描述 (kleren pakken, aandoen)." },
    { prompt: "Ontbijten (吃早餐)", hint: "用 Eerst..., Daarna... 描述 (brood smeren, eten)." },
    { prompt: "Naar het werk gaan (去上班)", hint: "用 Eerst..., Daarna... (fiets pakken, fietsen)." },
    { prompt: "Thuiskomen (回家)", hint: "用 Eerst..., Daarna... (jas uitdoen, op de bank zitten)." },
    { prompt: "Koken (做饭)", hint: "用 Eerst..., Daarna... (groenten snijden, bakken)." },
    { prompt: "Slapen gaan (睡觉)", hint: "用 Eerst..., Daarna... (boek lezen, licht uit)." },

    // --- TASKS & CHORES ---
    { prompt: "Boodschappen doen (买菜)", hint: "用 Eerst..., Daarna... (lijstje maken, naar supermarkt)." },
    { prompt: "Afrekenen (结账)", hint: "用 Eerst..., Daarna... (spullen op band, betalen)." },
    { prompt: "De was doen (洗衣服)", hint: "用 Eerst..., Daarna... (kleren in machine, aanzetten)." },
    { prompt: "Schoonmaken (打扫)", hint: "用 Eerst..., Daarna... (opruimen, stofzuigen)." },
    { prompt: "Brief posten (寄信)", hint: "用 Eerst..., Daarna... (schrijven, postzegel plakken)." },
    { prompt: "Vuilnis buitenzetten (倒垃圾)", hint: "用 Eerst..., Daarna... (zak dichtmaken, in container)." },
    { prompt: "Hond uitlaten (遛狗)", hint: "用 Eerst..., Daarna... (riem pakken, wandelen)." },
    { prompt: "Auto wassen (洗车)", hint: "用 Eerst..., Daarna... (water pakken, schoonmaken)." },
    { prompt: "Fiets plakken (补胎)", hint: "用 Eerst..., Daarna... (band controleren, plakken)." },
    { prompt: "Lamp vervangen (换灯泡)", hint: "用 Eerst..., Daarna... (oude eruit, nieuwe erin)." },

    // --- EVENTS & TRIPS ---
    { prompt: "Met de trein (坐火车)", hint: "用 Eerst..., Daarna... (kaartje kopen, instappen)." },
    { prompt: "Naar de dokter (看医生)", hint: "用 Eerst..., Daarna... (bellen, erheen gaan)." },
    { prompt: "Een feestje (派对)", hint: "用 Eerst..., Daarna... (uitnodigen, vieren)." },
    { prompt: "Vakantie boeken (订度假)", hint: "用 Eerst..., Daarna... (zoeken, betalen)." },
    { prompt: "Naar de film (看电影)", hint: "用 Eerst..., Daarna... (kaartje kopen, kijken)." },
    { prompt: "Uit eten (外出吃饭)", hint: "用 Eerst..., Daarna... (bestellen, eten)." },
    { prompt: "Vrienden bezoeken (访友)", hint: "用 Eerst..., Daarna... (aanbellen, praten)." },
    { prompt: "Naar de markt (去市场)", hint: "用 Eerst..., Daarna... (kijken, kopen)." },
    { prompt: "In het park (在公园)", hint: "用 Eerst..., Daarna... (wandelen, zitten)." },
    { prompt: "Naar bed (睡觉流程)", hint: "用 Eerst..., Daarna..., Tot slot... (tanden poetsen, pyjama aan, slapen)." },

    // --- COMPLEX (3 STEPS) ---
    { prompt: "Een taart bakken (烤蛋糕)", hint: "用 Eerst, Daarna, Tot slot (mixen, bakken, eten)." },
    { prompt: "Een reis maken (旅行)", hint: "用 Eerst, Daarna, Tot slot (koffer pakken, reizen, aankomen)." },
    { prompt: "Nieuwe baan (新工作)", hint: "用 Eerst, Daarna, Tot slot (solliciteren, gesprek, werken)." },
    { prompt: "Huis kopen (买房)", hint: "用 Eerst, Daarna, Tot slot (kijken, kopen, verhuizen)." },
    { prompt: "Nederlands leren (学荷兰语)", hint: "用 Eerst, Daarna, Tot slot (les nemen, oefenen, examen doen)." },
    { prompt: "Ziek zijn (生病)", hint: "用 Eerst, Daarna, Tot slot (koorts hebben, dokter bellen, beter worden)." },
    { prompt: "Ongeluk (事故)", hint: "用 Eerst, Daarna, Tot slot (vallen, pijn hebben, hulp krijgen)." },
    { prompt: "Restaurant (餐厅)", hint: "用 Eerst, Daarna, Tot slot (binnenkomen, eten, betalen)." },
    { prompt: "Verjaardag (生日)", hint: "用 Eerst, Daarna, Tot slot (zingen, taart eten, cadeaus)." },
    { prompt: "Ochtendroutine (早晨)", hint: "用 Eerst, Daarna, Tot slot (douchen, ontbijten, weggaan)." },
  ]
};

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
      { id: 1, text: "Ik speel in mijn vrije tijd met mijn kinderen in ons huis.", translation: "空闲时间里我在家里和我的孩子们玩。" },
      { id: 2, text: "Ik wandel graag in het park. Dat doe ik in het weekend.", translation: "我喜欢在公园散步。我周末会这么做。" }
    ]
  },
  {
    id: 'p1-q2',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u een leuk programma op de televisie? Vertel ook wat u geen leuk programma vindt.",
    questionChinese: "您觉得电视上什么节目好看？也请告诉我您觉得什么节目不好看。",
    idealSamples: [
      { id: 1, text: "Ik vind het journaal interessant, maar ik houd niet van sportprogramma's.", translation: "我觉得新闻很有趣，但我不喜欢体育节目。" },
      { id: 2, text: "Ik kijk graag naar films. Ik vind reclames niet leuk.", translation: "我喜欢看电影。我不喜欢广告。" }
    ]
  },
  {
    id: 'p1-q3',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u van uw buren? En hoe lang kent u ze al?",
    questionChinese: "您觉得您的邻居怎么样？您认识他们多久了？",
    idealSamples: [
      { id: 1, text: "Mijn buren zijn heel rustig. Ik ken ze nu twee jaar.", translation: "我的邻居很安静。我认识他们两年了。" },
      { id: 2, text: "Ik heb aardige buren. Ik woon hier pas één maand.", translation: "我有很好的邻居。我才住在这里一个月。" }
    ]
  },
  {
    id: 'p1-q4',
    part: ExamPart.Part1,
    questionDutch: "Wie doet bij u thuis het huishouden? Vertel ook wat u leuk vindt om te doen in huis.",
    questionChinese: "在您家里谁做家务？也请说说您喜欢在家里做什么家务。",
    idealSamples: [
      { id: 1, text: "Ik doe zelf het huishouden. Ik vind koken erg leuk om te doen.", translation: "我自己做家务。我觉得做饭很有趣。" },
      { id: 2, text: "Mijn man en ik doen het samen. Ik vind schoonmaken niet erg.", translation: "我和我丈夫一起做。我不介意打扫卫生。" }
    ]
  },
  {
    id: 'p1-q5',
    part: ExamPart.Part1,
    questionDutch: "Reist u liever met de auto of met de trein? Vertel ook waarom.",
    questionChinese: "您更喜欢坐车还是坐火车？请说说为什么。",
    idealSamples: [
      { id: 1, text: "Ik reis liever met de trein, want ik kan dan lezen.", translation: "我更喜欢坐火车旅行，因为那样我可以看书。" },
      { id: 2, text: "Ik ga liever met de auto. Dat is sneller dan de trein.", translation: "我更喜欢开车。那比火车快。" }
    ]
  },
  {
    id: 'p1-q6',
    part: ExamPart.Part1,
    questionDutch: "Wat is uw favoriete eten? En hoe vaak eet u dat?",
    questionChinese: "您最喜欢的食物是什么？您多久吃一次？",
    idealSamples: [
      { id: 1, text: "Mijn favoriete eten is rijst met kip. Ik eet dat twee keer per week.", translation: "我最喜欢的食物是鸡肉饭。我每周吃两次。" },
      { id: 2, text: "Ik vind pasta heel lekker. Ik eet dat elke vrijdag.", translation: "我觉得意大利面很好吃。我每周五都吃。" }
    ]
  },
  {
    id: 'p1-q7',
    part: ExamPart.Part1,
    questionDutch: "Waarom leert u Nederlands? Vertel ook waar u Nederlands leert.",
    questionChinese: "您为什么学荷兰语？也请告诉我您在哪里学荷兰语。",
    idealSamples: [
      { id: 1, text: "Ik leer Nederlands omdat ik werk zoek. Ik leer het op school.", translation: "我学荷兰语是因为我在找工作。我在学校学习。" },
      { id: 2, text: "Ik wil met de buren praten. Ik leer de taal online.", translation: "我想和邻居说话。我在网上学这门语言。" }
    ]
  },
  {
    id: 'p1-q8',
    part: ExamPart.Part1,
    questionDutch: "Wat doet u als het regent? Vertel ook wat u doet als de zon schijnt.",
    questionChinese: "下雨时您做什么？也请说说阳光明媚时您做什么。",
    idealSamples: [
      { id: 1, text: "Als het regent, kijk ik tv. Als de zon schijnt, ga ik naar buiten.", translation: "如果下雨，我看电视。如果阳光明媚，我出去。" },
      { id: 2, text: "Met regen blijf ik thuis. Met zon ga ik fietsen.", translation: "下雨我就待在家里。出太阳我就去骑车。" }
    ]
  },
  {
    id: 'p1-q9',
    part: ExamPart.Part1,
    questionDutch: "Hoe viert u uw verjaardag? Vertel ook met wie u dat doet.",
    questionChinese: "您怎么庆祝生日？也请说说您和谁一起庆祝。",
    idealSamples: [
      { id: 1, text: "Ik eet taart op mijn verjaardag. Ik doe dat met mijn familie.", translation: "我在生日那天吃蛋糕。我和家人一起庆祝。" },
      { id: 2, text: "Ik geef een feestje. Ik vier het met vrienden.", translation: "我办个聚会。我和朋友们一起庆祝。" }
    ]
  },
  {
    id: 'p1-q10',
    part: ExamPart.Part1,
    questionDutch: "Wat vindt u van Nederland? Vertel ook wat u van het weer in Nederland vindt.",
    questionChinese: "您觉得荷兰怎么样？也请说说您觉得荷兰的天气怎么样。",
    idealSamples: [
      { id: 1, text: "Ik vind Nederland een mooi land, maar ik vind het weer te koud.", translation: "我觉得荷兰是个美丽的国家，但我觉得天气太冷了。" },
      { id: 2, text: "Nederland is goed georganiseerd. Het regent wel vaak.", translation: "荷兰组织得很好。不过经常下雨。" }
    ]
  },
  {
    id: 'p1-q11',
    part: ExamPart.Part1,
    questionDutch: "Wat is uw beroep? En werkt u liever alleen of samen?",
    questionChinese: "您的职业是什么？您更喜欢独自工作还是合作？",
    idealSamples: [
      { id: 1, text: "Ik ben kapper. Ik werk liever samen met collega's.", translation: "我是理发师。我更喜欢和同事一起工作。" },
      { id: 2, text: "Ik heb geen werk. Ik wil graag samenwerken.", translation: "我没有工作。我很想合作工作。" }
    ]
  },
  {
    id: 'p1-q12',
    part: ExamPart.Part1,
    questionDutch: "Heeft u huisdieren? Vertel ook welk dier u leuk vindt.",
    questionChinese: "您有宠物吗？也请说说您喜欢什么动物。",
    idealSamples: [
      { id: 1, text: "Ik heb geen huisdieren. Ik vind honden wel leuk.", translation: "我没有宠物。我觉得狗挺可爱的。" },
      { id: 2, text: "Ja, ik heb een kat. Ik houd van katten.", translation: "是的，我有一只猫。我喜欢猫。" }
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
      { id: 1, text: "Kees ziet paprika's en courgettes. Ik vind die groentes lekker en gezond.", translation: "Kees看到了甜椒和西葫芦。我觉得这些蔬菜又好吃又健康。" },
      { id: 2, text: "Kees ziet tomaten en bloemkool. Ik vind groenten van de markt altijd vers.", translation: "Kees看到了西红柿和花菜。我觉得市场的蔬菜总是很新鲜。" }
    ]
  },
  {
    id: 'p2-q2',
    part: ExamPart.Part2,
    questionDutch: "José is aan het werk. Wat is haar beroep? Vertel ook wat ze nu doet.",
    questionChinese: "José正在工作。她的职业是什么？说说她现在在做什么。",
    imageDescription: "场景: 穿着职业装的女性在笔记本电脑上打字。",
    idealSamples: [
      { id: 1, text: "José is dokter. Ze werkt op haar laptop.", translation: "José是医生。她在用笔记本电脑工作。" },
      { id: 2, text: "Zij is secretaresse. Ze beantwoordt een e-mail.", translation: "她是秘书。她在回复电子邮件。" }
    ]
  },
  {
    id: 'p2-q3',
    part: ExamPart.Part2,
    questionDutch: "Meneer Jansen is in de winkel. Wat wil hij kopen? Vertel ook hoe hij betaalt.",
    questionChinese: "Jansen先生在商店里。他想买什么？说说他怎么付款。",
    imageDescription: "场景: 男士拿着一件外套，站在柜台前拿着银行卡。",
    idealSamples: [
      { id: 1, text: "Meneer Jansen wil een nieuwe jas kopen. Hij betaalt met zijn pinpas.", translation: "Jansen先生想买件新外套。他用银行卡付款。" },
      { id: 2, text: "Hij koopt kleren. Hij betaalt niet met contant geld, maar met de pin.", translation: "他买衣服。他不用现金付，而是刷卡。" }
    ]
  },
  {
    id: 'p2-q4',
    part: ExamPart.Part2,
    questionDutch: "Er is brand in het huis. Wat doet de vrouw? Vertel ook wie zij belt.",
    questionChinese: "房子着火了。那个女人在做什么？说说她在给谁打电话。",
    imageDescription: "场景: 厨房冒烟。女人跑出去打112求救。",
    idealSamples: [
      { id: 1, text: "De vrouw loopt snel naar buiten. Zij belt de brandweer.", translation: "女人快步走到外面。她打电话给消防队。" },
      { id: 2, text: "Ze gaat het huis uit. Ze belt 112 voor hulp.", translation: "她走出房子。她拨打112求助。" }
    ]
  },
  {
    id: 'p2-q5',
    part: ExamPart.Part2,
    questionDutch: "De familie de Vries is in het park. Wat doen de kinderen? Vertel ook wat de ouders doen.",
    questionChinese: "De Vries一家在公园里。孩子们在做什么？也说说父母在做什么。",
    imageDescription: "场景: 孩子们在玩球。父母坐在长椅上。",
    idealSamples: [
      { id: 1, text: "De kinderen spelen met een bal. De ouders zitten op een bankje.", translation: "孩子们在玩球。父母坐在长椅上。" },
      { id: 2, text: "De kinderen zijn aan het voetballen. De vader en moeder kijken toe.", translation: "孩子们在踢足球。爸爸妈妈在看着。" }
    ]
  },
  {
    id: 'p2-q6',
    part: ExamPart.Part2,
    questionDutch: "Fatima is bij de huisarts. Wat is het probleem? Vertel ook wat de dokter doet.",
    questionChinese: "Fatima在看家庭医生。怎么了？也说说医生在做什么。",
    imageDescription: "场景: Fatima捂着耳朵很痛苦。医生在检查耳朵。",
    idealSamples: [
      { id: 1, text: "Fatima heeft oorpijn. De dokter kijkt in haar oor.", translation: "Fatima耳朵疼。医生在检查她的耳朵。" },
      { id: 2, text: "Zij heeft pijn aan haar hoofd. De dokter onderzoekt haar.", translation: "她头疼。医生在给她检查。" }
    ]
  },
  {
    id: 'p2-q7',
    part: ExamPart.Part2,
    questionDutch: "Mehmet is op school. Wat doet hij? Vertel ook wat de leraar doet.",
    questionChinese: "Mehmet在学校。他在做什么？也说说老师在做什么。",
    imageDescription: "场景: 学生在笔记本上写字。老师在黑板上写字。",
    idealSamples: [
      { id: 1, text: "Mehmet schrijft in zijn schrift. De leraar schrijft op het bord.", translation: "Mehmet在作业本上写字。老师在黑板上写字。" },
      { id: 2, text: "Hij maakt een opdracht. De meester geeft uitleg.", translation: "他在做作业。老师在讲解。" }
    ]
  },
  {
    id: 'p2-q8',
    part: ExamPart.Part2,
    questionDutch: "Mevrouw Smit is in de keuken. Wat maakt ze klaar? Vertel ook wat ze gebruikt.",
    questionChinese: "Smit女士在厨房。她在做什么吃的？也说说她在用什么。",
    imageDescription: "场景: 女士在煎蛋。使用平底锅。",
    idealSamples: [
      { id: 1, text: "Mevrouw Smit bakt een ei. Ze gebruikt een pan.", translation: "Smit女士在煎蛋。她用的是平底锅。" },
      { id: 2, text: "Ze maakt het ontbijt klaar. Ze kookt op het fornuis.", translation: "她在准备早餐。她在炉子上做饭。" }
    ]
  },
  {
    id: 'p2-q9',
    part: ExamPart.Part2,
    questionDutch: "De auto is kapot. Wat doet de man? Vertel ook wie hem helpt.",
    questionChinese: "车坏了。那个人在做什么？也说说谁在帮他。",
    imageDescription: "场景: 男士在看引擎盖下面。技工/路援到达。",
    idealSamples: [
      { id: 1, text: "De man kijkt naar de motor. De monteur helpt hem.", translation: "那个人在看发动机。技工在帮他。" },
      { id: 2, text: "Hij belt de garage. De wegenwacht komt helpen.", translation: "他给修车厂打电话。道路救援来帮忙了。" }
    ]
  },
  {
    id: 'p2-q10',
    part: ExamPart.Part2,
    questionDutch: "Het is feest. Wat doet de mensen? Vertel ook wat ze eten.",
    questionChinese: "现在是聚会。人们在做什么？也说说他们在吃什么。",
    imageDescription: "场景: 人们在跳舞/聊天。桌子上有蛋糕。",
    idealSamples: [
      { id: 1, text: "De mensen dansen en praten. Ze eten taart.", translation: "人们在跳舞和聊天。他们在吃蛋糕。" },
      { id: 2, text: "Iedereen is vrolijk. Ze eten gebakjes.", translation: "每个人都很开心。他们在吃糕点。" }
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
      { id: 1, text: "Ik ga liever naar het strand, want ik lig graag in de zon.", translation: "我更喜欢去海滩，因为我喜欢躺在阳光下。" },
      { id: 2, text: "Ik ga liever wandelen, omdat ik van de natuur houd.", translation: "我更喜欢去徒步，因为我热爱大自然。" }
    ]
  },
  {
    id: 'p3-q2',
    part: ExamPart.Part3,
    questionDutch: "Welke sport vindt u leuker? Vertel ook waarom.",
    questionChinese: "您更喜欢哪种运动？说说为什么。",
    imageDescription: "图片 1: 足球。 图片 2: 篮球。",
    idealSamples: [
      { id: 1, text: "Ik vind voetbal leuker, want ik speel dat met mijn vrienden.", translation: "我觉得足球更有趣，因为我和朋友们一起踢。" },
      { id: 2, text: "Ik vind basketbal leuker. Ik vind voetbal een beetje saai.", translation: "我觉得篮球更有趣。我觉得足球有点无聊。" }
    ]
  },
  {
    id: 'p3-q3',
    part: ExamPart.Part3,
    questionDutch: "U wilt gaan werken. Waar werkt u liever? Vertel ook waarom.",
    questionChinese: "您想去工作。您更喜欢在哪里工作？说说为什么。",
    imageDescription: "图片 1: 在繁忙的餐厅工作。 图片 2: 在安静的办公室工作。",
    idealSamples: [
      { id: 1, text: "Ik werk liever in een restaurant, want ik houd van mensen om mij heen.", translation: "我更喜欢在餐厅工作，因为我喜欢周围有人。" },
      { id: 2, text: "Ik werk liever op een kantoor. Dat is rustiger.", translation: "我更喜欢在办公室工作。那更安静。" }
    ]
  },
  {
    id: 'p3-q4',
    part: ExamPart.Part3,
    questionDutch: "U gaat een avondje uit. Wat doet u liever? Vertel ook waarom.",
    questionChinese: "您晚上要出去玩。您更喜欢做什么？说说为什么。",
    imageDescription: "图片 1: 电影院。 图片 2: 舞厅/夜店。",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar de bioscoop, want ik wil de nieuwe film zien.", translation: "我更喜欢去电影院，因为我想看新电影。" },
      { id: 2, text: "Ik ga liever dansen, want ik houd van muziek.", translation: "我更喜欢去跳舞，因为我喜欢音乐。" }
    ]
  },
  {
    id: 'p3-q5',
    part: ExamPart.Part3,
    questionDutch: "U gaat boodschappen doen. Waar gaat u liever heen? Vertel ook waarom.",
    questionChinese: "您要去买菜。您更喜欢去哪里？说说为什么。",
    imageDescription: "图片 1: 超市。 图片 2: 露天市场。",
    idealSamples: [
      { id: 1, text: "Ik ga liever naar de supermarkt, want dat is dichterbij.", translation: "我更喜欢去超市，因为那更近。" },
      { id: 2, text: "Ik ga liever naar de markt, want daar is het fruit verser.", translation: "我更喜欢去市场，因为那里的水果更新鲜。" }
    ]
  },
  {
    id: 'p3-q6',
    part: ExamPart.Part3,
    questionDutch: "U wilt ergens wonen. Waar woont u liever? Vertel ook waarom.",
    questionChinese: "您想找个地方住。您更喜欢住在哪里？说说为什么。",
    imageDescription: "图片 1: 城市公寓。 图片 2: 乡村别墅。",
    idealSamples: [
      { id: 1, text: "Ik woon liever in de stad, want daar zijn veel winkels.", translation: "我更喜欢住在城市，因为那里有很多商店。" },
      { id: 2, text: "Ik woon liever in een dorp, omdat het daar rustig is.", translation: "我更喜欢住在村里，因为那里很安静。" }
    ]
  },
  {
    id: 'p3-q7',
    part: ExamPart.Part3,
    questionDutch: "U gaat eten. Wat doet u liever? Vertel ook waarom.",
    questionChinese: "您要吃饭。您更喜欢怎么做？说说为什么。",
    imageDescription: "图片 1: 在家做饭。 图片 2: 去餐厅吃。",
    idealSamples: [
      { id: 1, text: "Ik kook liever thuis, want dat is goedkoper.", translation: "我更喜欢在家做饭，因为那更便宜。" },
      { id: 2, text: "Ik eet liever in een restaurant, want ik kan niet goed koken.", translation: "我更喜欢在餐厅吃，因为我不太会做饭。" }
    ]
  },
  {
    id: 'p3-q8',
    part: ExamPart.Part3,
    questionDutch: "U wilt een taal leren. Hoe doet u dat liever? Vertel ook waarom.",
    questionChinese: "您想学一门语言。您更喜欢怎么学？说说为什么。",
    imageDescription: "图片 1: 上大课。 图片 2: 独自用电脑学。",
    idealSamples: [
      { id: 1, text: "Ik leer liever in een klas, want dan kan ik praten met anderen.", translation: "我更喜欢在班级里学，因为那样我可以和别人说话。" },
      { id: 2, text: "Ik leer liever alleen, want dan kan ik mij beter concentreren.", translation: "我更喜欢独自学习，因为那样我能更好地集中注意力。" }
    ]
  },
  {
    id: 'p3-q9',
    part: ExamPart.Part3,
    questionDutch: "U gaat op reis. Wat neemt u mee? Vertel ook waarom.",
    questionChinese: "您去旅行。您会带什么？说说为什么。",
    imageDescription: "图片 1: 行李箱。 图片 2: 双肩背包。",
    idealSamples: [
      { id: 1, text: "Ik neem liever een koffer mee, want daar kan veel in.", translation: "我更喜欢带箱子，因为能装很多东西。" },
      { id: 2, text: "Ik neem liever een rugzak mee, want dat is makkelijker dragen.", translation: "我更喜欢带背包，因为背起来更容易。" }
    ]
  },
  {
    id: 'p3-q10',
    part: ExamPart.Part3,
    questionDutch: "U wilt een huisdier. Wat kiest u? Vertel ook waarom.",
    questionChinese: "您想要个宠物。您选什么？说说为什么。",
    imageDescription: "图片 1: 狗。 图片 2: 猫。",
    idealSamples: [
      { id: 1, text: "Ik kies een hond, want ik houd van wandelen.", translation: "我选狗，因为我喜欢散步。" },
      { id: 2, text: "Ik kies een kat, omdat een kat rustig is.", translation: "我选猫，因为猫很安静。" }
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
      { id: 1, text: "Eerst wast Jessica de paprika. Daarna snijdt ze de paprika. Tot slot bakt ze de paprika in een pan.", translation: "Jessica首先洗甜椒。然后她切甜椒。最后她在锅里炒甜椒。" },
      { id: 2, text: "Jessica maakt de groente schoon, snijdt het in stukjes en kookt het eten.", translation: "Jessica把蔬菜洗干净，切成小块，然后做饭。" }
    ]
  },
  {
    id: 'p4-q2',
    part: ExamPart.Part4,
    questionDutch: "Jack gaat naar het zwembad. Kijk naar de plaatjes. Vertel wat Jack doet. Vertel iets over alle plaatjes.",
    questionChinese: "Jack去游泳池。看图片，说说Jack在做什么。",
    imageDescription: "1. 戴上泳镜。 2. 游泳。 3. 淋浴。",
    idealSamples: [
      { id: 1, text: "Jack doet zijn zwembril op. Hij zwemt in het water. Daarna gaat hij douchen.", translation: "Jack戴上他的泳镜。他在水里游泳。然后他去淋浴。" },
      { id: 2, text: "Eerst pakt Jack zijn bril. Dan neemt hij een duik. Als laatste wast hij zich onder de douche.", translation: "Jack首先拿起眼镜。然后他跳入水中。最后他在淋浴下清洗自己。" }
    ]
  },
  {
    id: 'p4-q3',
    part: ExamPart.Part4,
    questionDutch: "Sara is ziek. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "Sara病了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. Sara卧病在床，量体温。 2. Sara给医生打电话。 3. Sara吃药。",
    idealSamples: [
      { id: 1, text: "Sara ligt in bed en heeft koorts. Ze belt de huisarts. Daarna neemt ze medicijnen in.", translation: "Sara躺在床上发烧了。她给家庭医生打电话。然后她吃了药。" },
      { id: 2, text: "Sara is ziek. Ze maakt een afspraak met de dokter. Ze drinkt een medicijn.", translation: "Sara病了。她和医生预约。她喝了药。" }
    ]
  },
  {
    id: 'p4-q4',
    part: ExamPart.Part4,
    questionDutch: "Tom gaat met de trein. Vertel wat Tom doet. Vertel iets over alle plaatjes.",
    questionChinese: "Tom坐火车。说说Tom在做什么。请描述所有图片。",
    imageDescription: "1. 在机器上买票。 2. 在站台等待。 3. 坐在火车上。",
    idealSamples: [
      { id: 1, text: "Tom koopt een kaartje bij de automaat. Hij wacht op het perron. Hij zit in de trein.", translation: "Tom在自动售票机买票。他在站台上等。他坐在火车上。" },
      { id: 2, text: "Eerst pakt hij een kaartje. Dan wacht hij op de trein. Tot slot reist hij met de trein.", translation: "他首先拿了张票。然后他等火车。最后他坐火车旅行。" }
    ]
  },
  {
    id: 'p4-q5',
    part: ExamPart.Part4,
    questionDutch: "Lisa stuurt een brief. Vertel wat Lisa doet. Vertel iets over alle plaatjes.",
    questionChinese: "Lisa寄信。说说Lisa在做什么。请描述所有图片。",
    imageDescription: "1. 写信。 2. 贴邮票。 3. 投进信箱。",
    idealSamples: [
      { id: 1, text: "Lisa schrijft een brief. Ze plakt een postzegel op de envelop. Ze doet de brief in de brievenbus.", translation: "Lisa写了一封信。她在信封上贴了张邮票。她把信投进信箱。" },
      { id: 2, text: "Eerst schrijft ze. Dan doet ze de postzegel erop. Tot slot verstuurt ze de brief.", translation: "她先写信。然后贴上邮票。最后寄出了信。" }
    ]
  },
  {
    id: 'p4-q6',
    part: ExamPart.Part4,
    questionDutch: "De fiets is kapot. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "自行车坏了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. 轮胎没气了。 2. 给轮胎打气。 3. 开心地骑走了。",
    idealSamples: [
      { id: 1, text: "De fiets heeft een lekke band. De man pompt de band op. Hij fietst weer weg.", translation: "自行车爆胎了。那个人给轮胎打气。他又骑走了。" },
      { id: 2, text: "De band is leeg. Hij maakt de fiets. Daarna kan hij weer fietsen.", translation: "轮胎瘪了。他修好了自行车。然后他又能骑了。" }
    ]
  },
  {
    id: 'p4-q7',
    part: ExamPart.Part4,
    questionDutch: "Marie koopt nieuwe schoenen. Vertel wat ze doet. Vertel iets over alle plaatjes.",
    questionChinese: "Marie买新鞋。说说她在做什么。请描述所有图片。",
    imageDescription: "1. 看橱窗里的鞋子。 2. 试穿鞋子。 3. 结账。",
    idealSamples: [
      { id: 1, text: "Marie kijkt naar de schoenen. Ze past de schoenen. Ze betaalt aan de kassa.", translation: "Marie看着鞋子。她试穿鞋子。她在收银台付款。" },
      { id: 2, text: "Ze ziet leuke schoenen. Ze doet ze aan. Ze koopt de schoenen.", translation: "她看到了好看的鞋子。她穿上它们。她买下了鞋子。" }
    ]
  },
  {
    id: 'p4-q8',
    part: ExamPart.Part4,
    questionDutch: "Het gaat regenen. Vertel wat er gebeurt. Vertel iets over alle plaatjes.",
    questionChinese: "要下雨了。说说发生了什么。请描述所有图片。",
    imageDescription: "1. 乌云密布。 2. 打开雨伞。 3. 在雨中行走。",
    idealSamples: [
      { id: 1, text: "Er zijn donkere wolken. De vrouw opent haar paraplu. Ze loopt in de regen.", translation: "有乌云。女人打开了她的伞。她在雨中走。" },
      { id: 2, text: "Het wordt slecht weer. Ze pakt een paraplu. Ze wordt niet nat.", translation: "天气变坏了。她拿了一把伞。她没被淋湿。" }
    ]
  },
  {
    id: 'p4-q9',
    part: ExamPart.Part4,
    questionDutch: "Jan maakt thee. Vertel wat Jan doet. Vertel iets over alle plaatjes.",
    questionChinese: "Jan泡茶。说说Jan在做什么。请描述所有图片。",
    imageDescription: "1. 烧水。 2. 放茶包。 3. 喝茶。",
    idealSamples: [
      { id: 1, text: "Jan kookt water. Hij doet het theezakje in het kopje. Hij drinkt de thee.", translation: "Jan在烧水。他把茶包放进杯子里。他喝茶。" },
      { id: 2, text: "Eerst maakt hij het water heet. Dan maakt hij thee. Hij drinkt het lekker op.", translation: "他先把水烧热。然后他泡茶。他美美地喝了。" }
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
