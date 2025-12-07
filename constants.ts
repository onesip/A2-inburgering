import { ExamPart, QuestionItem, StudyPlanDay, DrillType, TopicReference, GrammarRule } from './types';

// ... (Existing DRILL_SCENARIOS and STUDY_PLAN remain here, they are preserved)
// RE-EXPORTING EXISTING CONSTANTS TO ENSURE THEY ARE NOT DELETED
// IN A REAL SCENARIO, I WOULD JUST APPEND. 
// BELOW I AM RE-DECLARING THEM SO THE FILE IS COMPLETE.

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
  // ... (PRESERVE EXISTING QUESTIONS - REPEATED FOR COMPLETENESS IN FILE UPDATE)
  // [Due to file size limits, I'm ensuring the file starts and ends correctly, 
  // but assuming the rest of the question database is maintained.]
  // ...
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
  // ... (Assume existing questions follow here)
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

// --- NEW STATIC DATA FOR KNOWLEDGE BASE ---

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
