export type Bi = { zh: string; en: string };

export const content = {
  meta: {
    title: {
      zh: "识途学辅 · 蒙特利尔升学与学科辅导",
      en: "Tutela · Montreal Admission & Academic Tutoring",
    },
    description: {
      zh: "由来自魁北克顶尖中学的精英学生提供的小组辅导，打牢基础，启发兴趣，助力升学。",
      en: "Small-group academic & admission exam tutoring by students from top Quebec secondary schools.",
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
    backToTop: { zh: "返回顶部", en: "Back to top" },
  },
  guidesIndex: {
    title: { zh: "备考指南", en: "Prep Guides" },
    intro: {
      zh: "关于魁北克中学入学考试的实用指南，由亲身经历这场考试的我们整理。",
      en: "Practical guides to Quebec's secondary admission exam, from students who've been through it themselves.",
    },
  },
  announcement: {
    zh: "7 月 30 日信息分享会 & 数学免费公开课（晚 7:30–9:00）",
    en: "July 30 Info Session & Free Math Trial Class (7:30–9:00 PM)",
  },
  hero: {
    tag: { zh: "蒙特利尔 · 升学与学科辅导", en: "Montreal · Admission & Academic Tutoring" },
    title: { zh: "打牢基础，启发兴趣，从容应对挑战", en: "Build Strong Fundamentals, Inspire Genuine Interest" },
    subtitle: {
      zh: "我们是来自魁北克顶尖中学的学生，帮助孩子打好基础、爱上学习——也帮孩子顺利通过中学入学考试。",
      en: "We are students from top Quebec secondary schools, helping children build strong foundations and a genuine love for learning — while also guiding them to successfully pass their secondary admission exams.",
    },
  },
  stats: [
    { value: { zh: "5–10", en: "5–10" }, label: { zh: "人 / 每班", en: "per class" } },
    { value: { zh: "3", en: "3" }, label: { zh: "门科目", en: "subjects" } },
    { value: { zh: "Zoom", en: "Zoom" }, label: { zh: "线上授课", en: "fully online" } },
  ] as { value: Bi; label: Bi }[],
  whyUs: {
    title: { zh: "为什么选择我们", en: "Why choose us" },
    points: [
      {
        zh: "我们亲身考过同样的入学考试，最清楚考什么、该怎么准备。",
        en: "We've sat the same admission exams ourselves: we know exactly what they test and how to prepare.",
      },
      {
        zh: "导师均来自魁北克顶尖中学（包括 Collège Jean-de-Brébeuf 等），学术优异。",
        en: "Our tutors all come from top Quebec secondary schools, including Collège Jean-de-Brébeuf.",
      },
      {
        zh: "5–10 人小班，名额有限，确保每个孩子都得到充分关注。",
        en: "Small classes of 5–10 with limited spots, so every child gets real attention.",
      },
    ] as Bi[],
  },
  whoWeAre: {
    title: { zh: "关于我们", en: "Who we are" },
    body: {
      zh: "我们相信，好的辅导不只是应付考试，更是帮孩子建立学习的信心和兴趣。我们自己也走过中学入学考试这条路，深知孩子需要什么样的准备。作为来自魁北克顶尖中学（包括 Collège Jean-de-Brébeuf 等）的学生，我们希望把我们的经验和学习方法分享给更多的孩子，帮他们建立扎实的基础和对学习的真实热忱。",
      en: "We believe that good tutoring is not just about passing exams, but also about building children's confidence and interest in learning. Having walked the path of secondary admission exams ourselves, we know exactly what kind of preparation children need. As students from top Quebec secondary schools (including Collège Jean-de-Brébeuf), we want to share our experience and study methods with more children, helping them build solid foundations and a genuine enthusiasm for learning.",
    },
  },
  whatWeOffer: {
    title: { zh: "我们提供什么", en: "What we offer" },
    body: {
      zh: "我们提供两大教学体系，旨在帮助不同阶段的孩子。我们以中学入学考试备考为核心优势，同时也致力于为低年级孩子打下稳固的学术基础与良好的学习习惯。",
      en: "We offer two distinct educational tracks to support children at different stages. While secondary admission exam preparation remains our core focus and strength, we are equally committed to helping younger children build solid foundations and strong learning habits.",
    },
    tracks: [
      {
        name: { zh: "中学入学考试备考 (主推)", en: "Secondary Admission Exam Prep (Primary)" },
        desc: {
          zh: "面向三、四、五年级学生。针对数学、法语、英语三门核心科目进行系统化备考，紧扣考点，训练解题策略与考场心态。这是我们的王牌项目，也是我们实力的最佳证明。",
          en: "For grades 3–5. Systematic preparation across the core subjects of Math, French, and English. We focus on key exam topics, problem-solving strategies, and exam-day confidence. This is our lead product and primary credibility signal.",
        },
        badge: { zh: "核心项目 (Grades 3–5)", en: "Primary Focus (Grades 3–5)" }
      },
      {
        name: { zh: "一般学科辅导", en: "General Academic Tutoring" },
        desc: {
          zh: "面向四年级及以下的学生。不针对特定考试，而是专注于打牢数学与语言基础，培养良好的学习习惯、专注力以及对学习的浓厚兴趣，为未来的高年级学习做好充足准备。",
          en: "For grade 4 and below. Rather than being exam-specific, this track focuses on strengthening foundational skills in math and language, building solid study habits, focus, and a genuine curiosity for learning.",
        },
        badge: { zh: "基础养成 (Grade 4 & below)", en: "Foundations (Grade 4 & below)" }
      }
    ],
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
    title: { zh: "上课方式与时间", en: "Format & Schedule" },
    body: {
      zh: "我们采用小班授课（每组 5–10 人），确保每个孩子都能得到充分的关注和指导。所有课程完全在线上通过 Zoom 进行，避免路途奔波，让孩子在舒适熟悉的环境中高效学习。",
      en: "We run small group classes (5–10 students per group) to ensure every child gets personalized attention. All classes are conducted fully online via Zoom, saving travel time and letting your child learn in a comfortable, focused home environment.",
    },
  },
  schedule: {
    title: { zh: "各科目上课时间", en: "Subject Schedule" },
    items: [
      { subject: { zh: "英语 (English)", en: "English" }, time: { zh: "每周六上午 10:00–11:00", en: "Saturdays 10:00–11:00 AM" } },
      { subject: { zh: "数学 (Math)", en: "Math" }, time: { zh: "每周日上午 10:30–11:30", en: "Sundays 10:30–11:30 AM" } },
      { subject: { zh: "法语 (French)", en: "French" }, time: { zh: "每周六晚上 7:00–8:00", en: "Saturdays 7:00–8:00 PM" } },
    ] as { subject: Bi; time: Bi }[],
  },
  pricing: {
    title: { zh: "收费", en: "Pricing" },
    rows: [
      { label: { zh: "单科报名（每科）", en: "1 subject" }, price: "$20" },
      { label: { zh: "双科报名", en: "2 subjects" }, price: "$40" },
      { label: { zh: "三科报名（套餐特惠）", en: "3 subjects (bundle)" }, price: "$45" },
    ] as { label: Bi; price: string }[],
    note: {
      zh: "单科报名价格为每节课 $20。同时报名全部三门科目（仅限入学考试备考班）可享受套餐优惠，低至 $15/科（总共 $45/周）。",
      en: "Standalone classes are $20/class per subject. Enrolling in all three subjects (admission exam prep only) unlocks our bundle rate of $15/class per subject ($45/week total).",
    },
  },
  whoItsFor: {
    title: { zh: "适合谁", en: "Who it's for" },
    body: {
      zh: "我们的课程主要分为两大方向：\n\n1. 中学入学考试备考班：最适合小学三、四、五年级，目标报考蒙特利尔顶尖私立或公立中学的学生。我们将针对考试题型做系统化辅导，帮助孩子稳稳跨过入学门槛。\n\n2. 一般学科辅导：适合小学四年级及以下的学生。重在夯实语言和数学功底，培养学习信心和良好习惯，激发探索未知和学习新知的主动性。\n\n如有其他特殊情况（例如 Sec 1 跨年级转学）或想了解一对一专属辅导，欢迎随时私信联系我们。",
      en: "Our offerings are structured into two pathways:\n\n1. Secondary Admission Exam Prep: Designed for students in primary grades 3, 4, and 5 targeting top Quebec secondary schools. We provide systematic training on exam patterns to ensure your child crosses the threshold with confidence.\n\n2. General Academic Tutoring: Designed for students in grade 4 and below. We focus on cementing foundational language and math skills, building academic confidence, and nurturing a genuine interest in learning.\n\nFor unique circumstances (e.g., Sec 1 students transferring) or custom 1-on-1 tutoring, please feel free to message us privately.",
    },
  },
  advantages: {
    title: { zh: "我们的优势", en: "Why choose Tutela" },
    intro: {
      zh: "我们把最关键的几件事做好，帮孩子打牢基础，从容应对升学与日常学科挑战。",
      en: "We focus on the few things that matter most to help your child build solid foundations and feel confident when facing exams.",
    },
    items: [
      {
        title: { zh: "扎实基础，从容应考", en: "Solid fundamentals, confident testing" },
        body: {
          zh: "无论是日常学习还是应对入学考试，我们都从打牢基础出发，帮助孩子建立真正的学科信心与解题策略。",
          en: "Whether for daily classes or admission exams, we start by cementing solid fundamentals, helping children build true confidence and effective problem-solving strategies.",
        },
      },
      {
        title: { zh: "小班，名额有限", en: "Small groups, limited spots" },
        body: {
          zh: "每组 5–10 人，每个孩子都能得到导师的真正关注，而不是在大班里被忽视。",
          en: "Groups of 5–10 so every child gets genuine attention, not lost in a large class.",
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
          { zh: "语法应用：在阅读与写作中理解与运用", en: "Grammar in context: applied through reading and writing tasks" },
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
      zh: "我们的课程体系兼顾升学备考与学术基础。中学入学考试备考班围绕数学、法语、英语三科，提炼核心考点；一般学科辅导则侧重习惯、兴趣与基础能力的培养。以下是具体安排：",
      en: "Our curriculum addresses both selective admission prep and daily academic progress. Secondary prep systematically covers Math, French, and English; general tutoring focuses on building strong study habits and core competencies. Below are the details:",
    },
    coversLabel: { zh: "我们会覆盖", en: "What we cover" },
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
          zh: "每组 5–10 人，名额有限，老师能照顾到每个孩子的薄弱点。",
          en: "Groups of 5–10 with limited spots, so each tutor can address every child's weak spots.",
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
    items: [
      {
        date: { zh: "7 月 30 日", en: "July 30" },
        label: {
          zh: "新项目说明会 & 数学免试听课 · 晚上 7:30–9:00",
          en: "New Program Info Session & Free Math Trial Class · 7:30–9:00 PM",
        },
        note: {
          zh: "届时我们将详细介绍全新推出的一般学科辅导项目（低年级），随后进行数学免费试听公开课，欢迎家长和孩子扫码报名参加。",
          en: "We will introduce our brand new general tutoring program for younger grades, followed by a free math trial class. Parents and children are welcome to scan the QR code to register.",
        },
      },
    ] as { date: Bi; label: Bi; note: Bi }[],
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
        zh: "小组课程单科报名为每节课 $20。如果同时报名三门科目（仅限入学考试备考班），可享受折扣套餐价每节课 $15/科（每周共 $45）。一对一专属辅导价格因导师而异，请私信咨询。",
        en: "Group classes are $20/class per subject. Enrolling in all three subjects (for the admission prep track only) unlocks our bundle rate of $15/class per subject ($45/week total). One-on-one pricing varies by tutor; please message us.",
      },
    },
    {
      q: { zh: "一般学科辅导和入学考试班有什么区别？", en: "What is the difference between general tutoring and the admission exam prep class?" },
      a: {
        zh: "一般学科辅导面向四年级及以下的学生，重点是打好基础、培养学习兴趣和习惯；入学考试班则专门针对三、四、五年级学生的入学考试做系统备考。",
        en: "General academic tutoring is designed for students in grade 4 and below, focusing on building solid fundamentals, study habits, and learning interest. The admission exam prep classes are tailored specifically for students in grades 3–5 to systematically prepare for secondary school admission exams.",
      },
    },
    {
      q: { zh: "小班课通常有几个人？", en: "How many students are in a group class?" },
      a: {
        zh: "我们将每组人数设定在 5 至 10 人，这样每个孩子都能得到足够的关注，学习效果更好。",
        en: "We keep groups to 5–10 students so every child gets enough attention and learns better.",
      },
    },
    {
      q: { zh: "上课地点在哪里？", en: "Where are the classes held?" },
      a: {
        zh: "我们的课程完全在线上通过 Zoom 进行，方便家长和孩子，无需因路途奔波影响学习状态。",
        en: "All classes are held fully online via Zoom, removing the hassle of commuting and helping students focus.",
      },
    },
    {
      q: { zh: "是线上还是线下上课？", en: "Are classes online or in person?" },
      a: {
        zh: "我们目前仅提供高品质的线上直播互动课程，通过精心设计的线上课件与互动工具，保证学习效果与线下一致甚至更佳。",
        en: "We currently offer high-quality live interactive online classes only. With well-designed digital materials and tools, we ensure the learning outcomes are as effective as or better than in-person classes.",
      },
    },
    {
      q: { zh: "什么时候开课？", en: "When does tutoring run?" },
      a: {
        zh: "我们今年夏天开课，一直持续到九月新学年开始前。具体上课时间会在报名后同步。",
        en: "Classes run through this summer, up until the new school year begins around September. Exact dates are shared after you enrol.",
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
        zh: "主要适合小学三、四、五年级准备中学入学考试的学生，以及四年级及以下希望夯实学科基础、培养学习习惯的学生。特殊情况请私信联系。",
        en: "Mainly primary grades 3, 4, and 5 preparing for the secondary admission exams, as well as grade 4 and below looking to build solid foundations and study habits. For special cases, please message us.",
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
  footer: {
    cta: { zh: "扫码联系我", en: "Scan to contact me" },
    scanHint: {
      zh: "扫一扫，添加微信咨询与报名。",
      en: "Scan to add us on WeChat for questions and enrolment.",
    },
    qrHelp: {
      zh: "手机访问：在微信中长按二维码即可识别；或截图保存后用「扫一扫」从相册识别。",
      en: "On a phone: long-press the QR in WeChat to recognise it, or save a screenshot and scan it from your album.",
    },
    wechatIdLabel: { zh: "微信号", en: "WeChat ID" },
    wechatId: { zh: "wxid_qs6tqmt94en122", en: "wxid_qs6tqmt94en122" },
    contactLabel: { zh: "联系人", en: "Contact" },
    contactName: "Dennis",
    note: { zh: "有问题欢迎私信。", en: "Message us with any questions." },
    privacy: {
      zh: "您的联系方式仅用于课程沟通，不会用于其他用途。",
      en: "Your contact details are used only to reach you about classes.",
    },
    copyright: {
      zh: "© 2026 识途学辅 · 蒙特利尔升学与学科辅导",
      en: "© 2026 Tutela · Montreal Admission & Academic Tutoring",
    },
    privacyLink: { zh: "隐私政策", en: "Privacy Policy" },
    termsLink: { zh: "服务条款", en: "Terms of Service" },
  },
};

export type Content = typeof content;
