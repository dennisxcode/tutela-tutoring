export type Bi = { zh: string; en: string };

export const content = {
  meta: {
    title: {
      zh: "识途学辅 · 中学入学考试辅导",
      en: "Tutela · Secondary Admission Exam Tutoring",
    },
    description: {
      zh: "由亲身经历过中学入学考试的尖子生提供的小组辅导。",
      en: "Small-group secondary admission exam tutoring by students who've been through the exams themselves.",
    },
    brand: { zh: "识途学辅", en: "Tutela" },
  },
  nav: {
    contact: { zh: "联系我", en: "Contact me" },
    guides: { zh: "备考指南", en: "Guides" },
    home: { zh: "首页", en: "Home" },
    program: { zh: "课程", en: "Program" },
  },
  ui: {
    viewProgram: { zh: "查看完整课程", en: "See the full program" },
    menu: { zh: "菜单", en: "Menu" },
    close: { zh: "关闭", en: "Close" },
    seePricing: { zh: "查看收费与安排", en: "Pricing and schedule" },
  },
  guidesIndex: {
    title: { zh: "备考指南", en: "Prep Guides" },
    intro: {
      zh: "关于魁北克中学入学考试的实用指南，由亲身经历这场考试的我们整理。",
      en: "Practical guides to Quebec's secondary admission exam, from students who've been through it themselves.",
    },
  },
  // The ribbon shows the next upcoming dated event when there is one; otherwise
  // it falls back to this standing line, so it can never display a dead date.
  // The fallback is a promise rather than an announcement: a parent should never
  // land here and wonder whether they can try before committing.
  announcement: {
    evergreen: {
      zh: "先免费试听，再决定报名",
      en: "Try a free class first, then decide",
    },
  },
  hero: {
    tag: { zh: "蒙特利尔 · 中学入学考试备考", en: "Montreal · Secondary admission exam prep" },
    title: { zh: "中学入学考试辅导", en: "Secondary Admission Exam Tutoring" },
    subtitle: {
      zh: "我们是亲身经历过中学入学考试的尖子生，为小学三、四、五年级的孩子做小班备考。",
      en: "We're top students who've sat the same admission exams, running small-group prep for children in primary grades 3, 4, and 5.",
    },
    // Sits directly under the CTA, where the decision actually happens — the
    // ribbon gives way to dated events, so the promise needs a permanent home.
    trialPromise: {
      zh: "第一节课免费试听，孩子体验之后再决定是否报名。",
      en: "Your first class is a free trial — decide after your child has sat in one.",
    },
  },
  // Quick facts, as outlined chips under the hero — the things a parent skimming
  // from WeChat or RED wants before they decide to read further.
  facts: [
    { zh: "周六上午 9:00–12:00", en: "Saturdays 9:00–12:00" },
    { zh: "1–10 人小班", en: "Groups of 1–10" },
    { zh: "$20 / 科目 · 小时", en: "$20 per subject / hour" },
    { zh: "课后随时答疑", en: "Questions answered anytime" },
  ] as Bi[],
  whoWeAre: {
    title: { zh: "关于我们", en: "Who we are" },
    body: {
      zh: "我们是来自魁北克顶尖中学的学生，包括 Collège Jean-de-Brébeuf。我们走过了中学入学考试这条路，希望把自己的备考经验，分享给正在准备的孩子和家庭。",
      en: "We're students from top Quebec secondary schools, including Collège Jean-de-Brébeuf. We've been through the secondary admission exams ourselves, and we want to share what we learned with the children and families preparing for them now.",
    },
    // One verifiable credential line, surfaced on the home page — trust comes
    // from specifics we can stand behind, not from claims we can't.
    credential: {
      zh: "数学导师在 AMC 与 Waterloo（CEMC）数学竞赛中名列前茅；法语导师多次获得 Brébeuf 写作比赛奖项。",
      en: "Our math tutor places among the top in the AMC and Waterloo (CEMC) contests; our French tutor has won Brébeuf writing competitions multiple times.",
    },
  },
  whatWeOffer: {
    title: { zh: "我们提供什么", en: "What we offer" },
    body: {
      zh: "我们主要提供针对中学入学考试的小组辅导，科目包括数学、法语、英语。课程适合小学三、四、五年级的学生，按年级和报名人数分组。除了入学考试备考，我们也提供一般学科辅导。",
      en: "We focus on small-group tutoring for the secondary admission exams, covering Math, French, and English. Classes suit primary grades 3, 4, and 5, grouped by grade level and enrolment. Beyond admission prep, we also offer general academic tutoring.",
    },
    mockExams: {
      zh: "我们还将提供基于近年入学考试内容设计的模拟测试，帮助孩子熟悉考试形式。（即将推出）",
      en: "We'll also provide practice exams modeled on recent admission-exam content to help children get familiar with the format. (Coming soon)",
    },
  },
  tutors: {
    title: { zh: "导师团队", en: "The tutors" },
    math: {
      zh: "数学导师在 AMC（美国数学竞赛）及 Waterloo（CEMC）数学竞赛中名列前茅。",
      en: "Our math tutor places among the top in AMC (American Mathematics Competitions) and Waterloo (CEMC) math contests.",
    },
    english: {
      zh: "英语导师就读于 Brébeuf 最高级别的英语课程，成绩优异。",
      en: "Our English tutor is enrolled in the highest level of English at Brébeuf, with excellent results.",
    },
    french: {
      zh: "法语导师曾多次在 Brébeuf 写作比赛中获奖。",
      en: "Our French tutor has won Brébeuf writing competitions multiple times.",
    },
  },
  howItWorks: {
    title: { zh: "上课方式", en: "How it works" },
    body: {
      zh: "小组课程在每周六上午9点至12点进行。每组人数设定在1至10人，这样每个孩子都能得到足够的关注。我们采用线下 + 线上结合的方式，根据孩子的情况灵活安排。上课地点正在确认中，确定后会第一时间在家长群通知。",
      en: "Group classes run every Saturday, 9:00 AM–12:00 PM. Each group is kept to 1–10 students so every child gets enough attention. We combine in-person and online formats, arranged to suit your child. The class location is being finalized and will be announced in the parents' group as soon as it's confirmed.",
    },
  },
  pricing: {
    title: { zh: "收费", en: "Pricing" },
    intro: {
      zh: "按科目收费，每科每小时 $20。三门一起报名有套餐价。",
      en: "Priced per subject at $20 per hour, with a bundle rate for all three.",
    },
    rows: [
      { label: { zh: "选 1 门", en: "1 subject" }, price: "$20" },
      { label: { zh: "选 2 门", en: "2 subjects" }, price: "$40" },
      { label: { zh: "选 3 门（套餐）", en: "3 subjects (bundle)" }, price: "$45" },
    ] as { label: Bi; price: string }[],
    note: {
      zh: "建议参加全部三门课，效果更全面，也更划算。",
      en: "We recommend all three subjects: more complete preparation, better value.",
    },
    unit: { zh: "每小时", en: "per hour" },
  },
  whoItsFor: {
    title: { zh: "适合谁", en: "Who it's for" },
    body: {
      zh: "主要适合小学三、四、五年级，准备中学入学考试的学生。有特殊情况（例如 Sec 1 想转入 Sec 2）或想了解一对一辅导的家长，欢迎私信联系我们。",
      en: "Best for primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases (e.g. a Sec 1 student transferring into Sec 2) or one-on-one tutoring, message us privately.",
    },
  },
  advantages: {
    title: { zh: "我们的优势", en: "Why choose Tutela" },
    intro: {
      zh: "我们把最关键的几件事做好，帮孩子稳稳通过中学入学考试。",
      en: "We focus on the few things that matter most to get your child through the secondary admission exam.",
    },
    items: [
      {
        title: { zh: "专为入学考试设计", en: "Built for the admission exam" },
        body: {
          zh: "每节课都围绕中学入学考试展开，不是通识补习，而是针对这场考试的专项备考。",
          en: "Every class is built around the secondary admission exam. Not general academic tutoring, but preparation targeted at this specific test.",
        },
      },
      {
        title: { zh: "小班，名额有限", en: "Small groups, limited spots" },
        body: {
          zh: "每组 1–10 人，每个孩子都能得到导师的真正关注，而不是在大班里被忽视。",
          en: "Groups of 1–10 so every child gets genuine attention, not lost in a large class.",
        },
      },
      {
        title: { zh: "课外随时答疑", en: "Help outside of class" },
        body: {
          zh: "孩子课后遇到不懂的问题，随时可以联系我们，不必等到下次上课。",
          en: "When your child gets stuck outside of class, we're available to answer. No need to wait until the next session.",
        },
      },
    ] as { title: Bi; body: Bi }[],
  },
  subjects: {
    title: { zh: "科目与年级", en: "Subjects & grades" },
    intro: {
      zh: "针对中学入学考试的三门核心科目，按年级和报名人数分组。",
      en: "The three core subjects for the secondary admission exam, grouped by grade and enrolment.",
    },
    list: [
      {
        name: { zh: "数学", en: "Math" },
        blurb: {
          zh: "考试重在逻辑推理与解题策略，训练孩子有条理地分析问题。",
          en: "The exam focuses on logical reasoning and problem-solving strategy. We train children to approach problems methodically.",
        },
        covers: [
          { zh: "逻辑推理：规律识别与有序推导", en: "Logical reasoning: spotting patterns and working through problems step by step" },
          { zh: "数感：分数、小数与基本运算", en: "Number sense: fractions, decimals, and arithmetic" },
          { zh: "应用题的审题与解题策略", en: "Word problems: careful reading and structured problem-solving" },
          { zh: "几何与空间推理", en: "Geometry and spatial reasoning" },
        ] as Bi[],
      },
      {
        name: { zh: "法语", en: "French" },
        blurb: {
          zh: "阅读、写作与语法，贴近考试要求。",
          en: "Reading, writing, and grammar, aligned to the exam.",
        },
        covers: [
          { zh: "阅读理解：抓住文章重点与细节", en: "Reading comprehension: main ideas and details" },
          { zh: "写作：结构清晰、表达准确", en: "Writing: clear structure and accurate expression" },
          { zh: "语法应用：在阅读与写作中理解和运用", en: "Grammar in context: applied through reading and writing tasks" },
          { zh: "答题技巧与考试节奏", en: "Answering technique and exam pacing" },
        ] as Bi[],
      },
      {
        name: { zh: "英语", en: "English" },
        blurb: {
          zh: "以英语分班测试为目标，重点培养阅读理解与写作表达能力。",
          en: "Reading and writing focused on scoring well on the English placement test.",
        },
        covers: [
          { zh: "阅读理解：主旨把握与细节提取", en: "Reading comprehension: main ideas and details" },
          { zh: "写作：有条理地表达观点", en: "Writing: expressing ideas clearly and with structure" },
          { zh: "词汇积累与语言感知", en: "Vocabulary and language sense" },
          { zh: "备战英语分班测试", en: "Preparing for the English placement test" },
        ] as Bi[],
      },
    ] as { name: Bi; blurb: Bi; covers: Bi[] }[],
    grades: {
      zh: "适合小学三、四、五年级。除入学考试备考外，我们也提供一般学科辅导。",
      en: "For primary grades 3, 4, and 5. Beyond admission prep, we also offer general academic tutoring.",
    },
    special: {
      zh: "有特殊情况（例如 Sec 1 想转入 Sec 2）或想了解一对一辅导，欢迎私信联系我们。",
      en: "For special cases (e.g. a Sec 1 student moving into Sec 2) or one-on-one tutoring, message us privately.",
    },
  },
  program: {
    tag: { zh: "课程", en: "Program" },
    title: { zh: "我们在课上教什么", en: "What we teach in class" },
    intro: {
      zh: "我们的每一节课都围绕中学入学考试展开：把每一科最关键的内容讲清楚，再带孩子练扎实。下面是三门核心科目我们会重点覆盖的部分，以及上课、收费和报名的具体安排。",
      en: "Every class is built around the secondary admission exam. For each subject we make the key material clear, then practise it until it's solid. Below is what we focus on in the three core subjects, plus how classes, pricing, and enrolment work.",
    },
  },
  // The seasonal spine of the whole thing: the exam lands early in Grade 6, so
  // the useful preparation window is Grade 5. Stages are deliberately described
  // as the general pattern — school-specific dates are never asserted.
  timeline: {
    title: { zh: "备考时间线", en: "The prep timeline" },
    intro: {
      zh: "入学考试通常在六年级开学后不久举行，考的却是五年级的内容。也就是说，真正有效的准备窗口，在考试之前的那一年。",
      en: "The admission exam usually falls shortly after Grade 6 begins, but it tests Grade 5 material. The window where preparation actually pays off is the year before the exam.",
    },
    stages: [
      {
        when: { zh: "五年级全年", en: "Through Grade 5" },
        title: { zh: "打基础", en: "Build the foundation" },
        body: {
          zh: "跟上学校进度，重点打牢法语与数学基础，尽早发现并补上薄弱环节。",
          en: "Keep up with school, build solid French and Math foundations, and find and fix weak spots early.",
        },
      },
      {
        when: { zh: "暑假至六年级开学", en: "Summer into Grade 6" },
        title: { zh: "熟悉题型", en: "Learn the format" },
        body: {
          zh: "开始接触真实题型与模拟练习，让孩子适应考试节奏，同时确认目标学校的报名日期。",
          en: "Start working with real question types and mock papers so your child adjusts to the pace, and confirm each target school's registration dates.",
        },
      },
      {
        when: { zh: "六年级九月至十月", en: "September–October, Grade 6" },
        title: { zh: "考试期", en: "Exam window" },
        body: {
          zh: "多数学校在这段时间安排入学考试，重点转为查漏补缺与稳定心态。",
          en: "Most schools hold their admission exams in this window; the focus shifts to closing gaps and staying steady.",
        },
      },
      {
        when: { zh: "十二月前后", en: "Around December" },
        title: { zh: "放榜", en: "Results" },
        body: {
          zh: "录取结果陆续公布。更低年级的孩子，这时正好是开始打基础的时候。",
          en: "Results are released. For children in earlier grades, this is exactly when foundation-building should begin.",
        },
      },
    ] as { when: Bi; title: Bi; body: Bi }[],
    note: {
      zh: "以上是普遍规律。每所学校自行命题、自行招生，具体报名与考试日期请以各校官方公布为准。",
      en: "This is the general pattern. Each school sets its own exam and admissions, so confirm registration and exam dates with each school directly.",
    },
    nowLabel: { zh: "现在", en: "Now" },
  },
  philosophy: {
    title: { zh: "为什么学生会进步", en: "Why students improve" },
    intro: {
      zh: "我们的方法很简单：用走过这条路的人，带还在路上的孩子。",
      en: "Our approach is simple: students who've walked the path guide the ones still on it.",
    },
    principles: [
      {
        title: { zh: "真正懂这场考试", en: "We actually know this exam" },
        body: {
          zh: "我们亲身经历过同样的入学考试，最清楚考什么、该怎么准备，帮孩子少走弯路。",
          en: "We've sat the same admission exams, so we know exactly what they test and how to prepare, with fewer detours for your child.",
        },
      },
      {
        title: { zh: "小班，真关注", en: "Small groups, real attention" },
        body: {
          zh: "每组 1–10 人，名额有限，老师能照顾到每个孩子的薄弱点。",
          en: "Groups of 1–10 with limited spots, so each tutor can address every child's weak spots.",
        },
      },
      {
        title: { zh: "按真实题型练习", en: "Practice on the real format" },
        body: {
          zh: "我们将提供基于近年入学考试内容设计的模拟测试，让孩子提前熟悉考试形式。（即将推出）",
          en: "We'll provide practice exams modeled on recent admission-exam content, so children get familiar with the format ahead of time. (Coming soon)",
        },
      },
    ] as { title: Bi; body: Bi }[],
  },
  dates: {
    title: { zh: "重要日期", en: "Key dates" },
    // Shown instead of the dates list when nothing upcoming is scheduled, so the
    // section is always useful and never displays an expired event.
    standingTitle: { zh: "下一步", en: "Next steps" },
    // Add events here with an ISO date; past ones disappear on their own.
    // Example:
    // {
    //   iso: "2026-09-05",
    //   date: { zh: "9 月 5 日", en: "September 5" },
    //   label: { zh: "法语试听课（免费）· 上午 10:00–11:00", en: "Free trial French class · 10:00–11:00 AM" },
    //   note: { zh: "免费试听一节法语课。", en: "A free trial French class." },
    // },
    items: [] as { iso: string; date: Bi; label: Bi; note: Bi }[],
    trial: {
      title: { zh: "免费试听课", en: "Free trial class" },
      body: {
        zh: "想先看看我们怎么上课？私信我们安排一节免费试听，孩子实际体验后再决定。",
        en: "Want to see how we teach first? Message us to arrange a free trial class, and decide after your child has actually sat in one.",
      },
    },
  },
  enrol: {
    title: { zh: "报名流程", en: "How to enrol" },
    steps: [
      {
        zh: "扫码加微信，私信联系我们。",
        en: "Scan the QR code and message us on WeChat.",
      },
      {
        zh: "确认报名后，我们会邀请您加入家长群，及时同步上课信息。",
        en: "Once you enrol, we'll add you to the parents' group so you get all the class updates.",
      },
    ] as Bi[],
  },
  faq: [
    {
      q: { zh: "你们是怎么收费的？", en: "How do you charge?" },
      a: {
        zh: "小组课程 20$/小时/科目。选1门20$，选2门40$，选3门45$（套餐优惠）。一对一价格因导师而异，请私信。",
        en: "Group classes are $20/hour/subject. 1 subject $20, 2 subjects $40, 3 subjects $45 (bundle). One-on-one pricing varies by tutor; please message us.",
      },
    },
    {
      q: { zh: "小班课通常有几个人？", en: "How many students are in a group class?" },
      a: {
        zh: "我们将每组人数设定在1至10人，这样每个孩子都能得到足够的关注，学习效果更好。",
        en: "We keep groups to 1–10 students so every child gets enough attention and learns better.",
      },
    },
    {
      q: { zh: "上课地点在哪里？", en: "Where are the classes held?" },
      a: {
        zh: "上课地点正在确认中。我们计划安排线下教室，同时也提供线上课程，具体细节确认后通知。",
        en: "The location is being finalized. We plan to hold in-person classes and also offer online sessions; we'll share details once confirmed.",
      },
    },
    {
      q: { zh: "可以先试听吗？", en: "Can we try a class first?" },
      a: {
        zh: "可以。我们提供免费试听课，私信我们安排时间，孩子体验过之后再决定是否报名。",
        en: "Yes. We offer a free trial class: message us to arrange a time, and decide whether to enrol after your child has experienced one.",
      },
    },
    {
      q: { zh: "什么时候开课？", en: "When does tutoring run?" },
      a: {
        zh: "我们全年开班，按年级和报名人数分组。具体上课时间会在报名后同步，也可以私信我们了解当前正在开的班。",
        en: "We run classes year-round, grouped by grade and enrolment. Exact times are shared after you enrol; message us to ask which groups are running right now.",
      },
    },
    {
      q: { zh: "是线上还是线下上课？", en: "Are classes online or in person?" },
      a: {
        zh: "线上、线下我们都提供，根据学生的情况安排：线上报名人数足够就开线上班，线下人数足够就开线下班。",
        en: "We offer both online and in-person, arranged around what students need: if enough students sign up online we run an online class, and likewise for in-person.",
      },
    },
    {
      q: { zh: "有一对一辅导吗？", en: "Do you offer one-on-one tutoring?" },
      a: {
        zh: "提供。一对一辅导请私信联系我们单独安排。",
        en: "Yes. For one-on-one tutoring, please message us privately to arrange it.",
      },
    },
    {
      q: { zh: "孩子课后有问题，找谁问？", en: "Where can my child ask questions after class?" },
      a: {
        zh: "我们提供 24/7 在线答疑，孩子随时遇到不懂的问题，都可以联系我们，不必等到下次上课。",
        en: "We offer 24/7 question support: whenever your child gets stuck, they can reach us, no need to wait for the next class.",
      },
    },
    {
      q: { zh: "课程由谁授课？", en: "Who teaches the classes?" },
      a: {
        zh: "授课由我们的导师团队负责，每位导师教自己的科目。",
        en: "Classes are taught by our tutor team; each tutor teaches their own subject.",
      },
    },
    {
      q: { zh: "适合几年级的孩子？", en: "What grades is this for?" },
      a: {
        zh: "主要适合小学三、四、五年级，准备中学入学考试的学生。特殊情况请私信。",
        en: "Mainly primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases, please message us.",
      },
    },
  ] as { q: Bi; a: Bi }[],
  finalCta: {
    heading: { zh: "准备好帮孩子开始了吗？", en: "Ready to help your child get started?" },
    subtitle: {
      zh: "扫码联系我们，了解详情并开始报名。",
      en: "Message us on WeChat to learn more and get started.",
    },
  },
  notFound: {
    title: { zh: "页面不存在", en: "Page not found" },
    body: {
      zh: "这个链接可能已经失效，或者地址输错了。",
      en: "This link may no longer exist, or the address was mistyped.",
    },
    home: { zh: "返回首页", en: "Back to home" },
  },
  footer: {
    cta: { zh: "扫码联系我", en: "Scan to contact me" },
    qrHelp: {
      zh: "手机访问：在微信中长按二维码即可识别；或截图保存后用「扫一扫」从相册识别。",
      en: "On a phone: long-press the QR in WeChat to recognise it, or save a screenshot and scan it from your album.",
    },
    wechatIdLabel: { zh: "微信号", en: "WeChat ID" },
    wechatId: { zh: "wxid_qs6tqmt94en122", en: "wxid_qs6tqmt94en122" },
    copyHint: { zh: "点击复制", en: "Tap to copy" },
    copied: { zh: "已复制", en: "Copied" },
    contactLabel: { zh: "联系人", en: "Contact" },
    contactName: "Dennis",
    note: { zh: "有问题欢迎私信。", en: "Message us with any questions." },
    privacy: {
      zh: "您的联系方式仅用于课程沟通，不会用于其他用途。",
      en: "Your contact details are used only to reach you about classes.",
    },
    copyright: {
      zh: "© 2026 识途学辅 · 蒙特利尔升学辅导",
      en: "© 2026 Tutela · Montreal admission-exam tutoring",
    },
    privacyLink: { zh: "隐私政策", en: "Privacy Policy" },
    termsLink: { zh: "服务条款", en: "Terms of Service" },
  },
};

export type Content = typeof content;
