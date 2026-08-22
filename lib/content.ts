export type Bi = { zh: string; en: string };

export const content = {
  // "Tutela" on its own is a common Latin word, so the brand is written in both
  // scripts — Tutela 识途学辅 — everywhere a search engine reads a name: the
  // title, the description, the footer, the structured data. A parent who
  // searches either half should land on tutelamtl.ca.
  meta: {
    title: {
      zh: "Tutela 识途学辅 · 蒙特利尔中学入学考试与学科辅导",
      en: "Tutela 识途学辅 · Montreal Admission Exam & Academic Tutoring",
    },
    description: {
      zh: "Tutela（识途学辅）是蒙特利尔的中学入学考试备考与学科辅导团队：来自魁北克顶尖中学的学生授课，5–10 人线上小班，打牢基础，启发兴趣，助力升学。",
      en: "Tutela (识途学辅) is a Montreal small-group tutoring team for Quebec secondary admission exams and academic foundations, taught online by students from top Quebec secondary schools.",
    },
    brand: { zh: "识途学辅", en: "Tutela" },
  },
  nav: {
    contact: { zh: "联系我", en: "Contact me" },
    guides: { zh: "备考指南", en: "Guides" },
    home: { zh: "首页", en: "Home" },
    program: { zh: "课程", en: "Program" },
    about: { zh: "关于我们", en: "About" },
    contactPage: { zh: "联系方式", en: "Contact" },
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
  // The ribbon shows the soonest upcoming dated event from `dates.items`;
  // once that date passes it falls back to this standing line, so it can never
  // advertise an event that has already happened. The fallback is a promise
  // rather than an announcement: a parent should never land here and wonder
  // whether they can try a class before committing.
  announcement: {
    evergreen: {
      zh: "先免费试听，再决定报名",
      en: "Try a free class first, then decide",
    },
  },
  hero: {
    tag: { zh: "蒙特利尔 · 升学与学科辅导", en: "Montreal · Admission & Academic Tutoring" },
    title: { zh: "打牢基础，启发兴趣，从容应对挑战", en: "Build Strong Fundamentals, Inspire Genuine Interest" },
    subtitle: {
      zh: "我们是来自魁北克顶尖中学的学生，帮助孩子打好基础、爱上学习——也帮孩子顺利通过中学入学考试。",
      en: "We are students from top Quebec secondary schools, helping children build strong foundations and a genuine love for learning — while also guiding them to successfully pass their secondary admission exams.",
    },
    // Sits directly under the CTA, where the decision actually happens — the
    // ribbon gives way to dated events, so the promise needs a permanent home.
    trialPromise: {
      zh: "第一节课免费试听，孩子体验之后再决定是否报名。",
      en: "Your first class is a free trial — decide after your child has sat in one.",
    },
  },
  // Quick facts, as outlined chips under the hero — what a parent skimming from
  // WeChat or RED wants before deciding to read on. Keep these in step with
  // `howItWorks`, `schedule` and `pricing`; they are the first thing read and
  // the easiest thing to leave stale.
  facts: [
    { zh: "Zoom 线上授课", en: "Fully online via Zoom" },
    { zh: "5–10 人小班", en: "Groups of 5–10" },
    { zh: "$20 / 科目 · 每节课", en: "$20 per subject / class" },
    { zh: "课后随时答疑", en: "Questions answered anytime" },
  ] as Bi[],
  whoWeAre: {
    title: { zh: "关于我们", en: "Who we are" },
    body: {
      zh: "我们相信，好的辅导不只是应付考试，更是帮孩子建立学习的信心和兴趣。我们自己也走过中学入学考试这条路，深知孩子需要什么样的准备。作为来自魁北克顶尖中学（包括 Collège Jean-de-Brébeuf 等）的学生，我们希望把我们的经验和学习方法分享给更多的孩子，帮他们建立扎实的基础和对学习的真实热忱。",
      en: "We believe that good tutoring is not just about passing exams, but also about building children's confidence and interest in learning. Having walked the path of secondary admission exams ourselves, we know exactly what kind of preparation children need. As students from top Quebec secondary schools (including Collège Jean-de-Brébeuf), we want to share our experience and study methods with more children, helping them build solid foundations and a genuine enthusiasm for learning.",
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
    unit: { zh: "每节课", en: "per class" },
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
  // Orientation for parents new to the admission-exam process. Deliberately
  // low-pressure: it explains how the year is shaped rather than pushing, which
  // suits a brand that also serves younger children with no exam ahead of them.
  timeline: {
    title: { zh: "备考时间线", en: "How the year is shaped" },
    intro: {
      zh: "很多家长问我们：什么时候该开始准备？入学考试通常在六年级开学后不久举行，考的却是五年级的内容——所以下面这条时间线，供你参考。",
      en: "Parents often ask us when preparation should begin. The admission exam usually falls shortly after Grade 6 starts, but it tests Grade 5 material — so here is how the year tends to be shaped.",
    },
    stages: [
      {
        when: { zh: "五年级全年", en: "Through Grade 5" },
        title: { zh: "打基础", en: "Build the foundation" },
        body: {
          zh: "跟上学校进度，打牢法语与数学基础，尽早发现并补上薄弱环节。",
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
          zh: "录取结果陆续公布。对更低年级的孩子来说，这段时间正适合安心打基础。",
          en: "Results are released. For children in earlier grades, this is a good stretch to quietly build foundations.",
        },
      },
    ] as { when: Bi; title: Bi; body: Bi }[],
    note: {
      zh: "以上是普遍规律。每所学校自行命题、自行招生，具体报名与考试日期请以各校官方公布为准。低年级的孩子不必着急，打好基础本身就是最好的准备。",
      en: "This is the general pattern. Each school sets its own exam and admissions, so confirm dates with each school directly. There's no rush for younger children — a solid foundation is itself the best preparation.",
    },
    nowLabel: { zh: "现在", en: "Now" },
  },
  dates: {
    title: { zh: "重要日期", en: "Key dates" },
    // Shown instead of the dates list when nothing upcoming is scheduled, so the
    // section is always useful and never displays an expired event.
    standingTitle: { zh: "下一步", en: "Next steps" },
    // Every event carries an ISO date and disappears by itself once that date
    // passes — add new ones here and they need no follow-up.
    items: [
      {
        iso: "2026-07-30",
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
    ] as { iso: string; date: Bi; label: Bi; note: Bi }[],
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
  // The guides teaser on the landing page. The guides are the part of the site
  // a parent can use without ever contacting us, so the home page points at
  // them by name rather than burying them in the nav.
  homeGuides: {
    title: { zh: "免费备考指南", en: "Free prep guides" },
    intro: {
      zh: "关于魁北克中学入学考试的常见疑问，我们写成了公开的指南——不必报名，也不必加微信，读完就能自己判断该怎么准备。",
      en: "We've written up the questions families ask about Quebec's secondary admission exam as open guides — no enrolment, no WeChat needed, just read them and judge for yourself how to prepare.",
    },
    more: { zh: "查看全部指南", en: "See all guides" },
  },
  // A short answer set on the landing page itself. The full FAQ lives on
  // /program; these four are the ones parents ask before they are willing to
  // click anything, so they are answered in plain prose rather than hidden
  // behind an accordion — readable to a parent skimming and to a crawler alike.
  homeFaq: {
    title: { zh: "家长常问", en: "Parents often ask" },
    intro: {
      zh: "报名前家长问得最多的几个问题，答案就写在这里，不必先加微信再问。",
      en: "The questions parents ask most before enrolling, answered here rather than after you message us.",
    },
    more: { zh: "查看全部常见问题", en: "See all questions" },
    // Which of `faq` to surface here, matched on a fragment of the Chinese
    // question so reordering the FAQ can't silently change the selection.
    // Picked to cover six different worries rather than the first six entries,
    // which repeat each other on where classes are held.
    featured: ["收费", "区别", "几个人", "线上还是线下", "什么时候开课", "适合几年级"],
  },
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
    // The 404 is the page automated crawlers hit most often, so it also hands
    // them a machine-readable index of where the real content lives.
    agentsTitle: { zh: "给自动抓取工具", en: "For AI agents and crawlers" },
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
      zh: "© 2026 Tutela 识途学辅 · 蒙特利尔中学入学考试与学科辅导 · tutelamtl.ca",
      en: "© 2026 Tutela 识途学辅 · Montreal Admission Exam & Academic Tutoring · tutelamtl.ca",
    },
    privacyLink: { zh: "隐私政策", en: "Privacy Policy" },
    termsLink: { zh: "服务条款", en: "Terms of Service" },
    // The footer repeats the same name / area / format / contact block that
    // /about, /contact and the structured data carry, so every page states the
    // brand's details identically.
    napTitle: { zh: "机构信息", en: "Our details" },
  },
  // Name, area served, format and contact in one place. The footer, /about,
  // /contact, the JSON-LD and the agent-facing markdown all read from here, so
  // a directory listing, a crawler and a parent scanning the footer always see
  // identical details — the consistency is what makes the brand name findable.
  org: {
    name: { zh: "识途学辅（Tutela）", en: "Tutela（识途学辅）" },
    tagline: {
      zh: "蒙特利尔中学入学考试备考与学科基础辅导",
      en: "Montreal secondary admission exam prep and academic tutoring",
    },
    areaServedLabel: { zh: "服务地区", en: "Area served" },
    areaServed: {
      zh: "加拿大魁北克省 · 大蒙特利尔地区",
      en: "Greater Montreal, Quebec, Canada",
    },
    formatLabel: { zh: "上课方式", en: "Format" },
    format: {
      zh: "全部课程线上进行（Zoom），5–10 人小班",
      en: "All classes run online over Zoom, in groups of 5–10",
    },
    languagesLabel: { zh: "语言", en: "Languages" },
    languages: {
      zh: "中文 · English · français",
      en: "Chinese · English · French",
    },
    contactLabel: { zh: "联系方式", en: "Contact" },
    contactLine: {
      zh: "微信联系 Dennis，微信号 wxid_qs6tqmt94en122",
      en: "WeChat Dennis, ID wxid_qs6tqmt94en122",
    },
    siteLabel: { zh: "网站", en: "Website" },
    site: "tutelamtl.ca",
  },
  about: {
    tag: { zh: "关于", en: "About" },
    title: { zh: "关于识途学辅", en: "About Tutela" },
    lede: {
      zh: "识途学辅（Tutela）是一支来自魁北克顶尖中学的学生团队，为大蒙特利尔地区的家庭提供中学入学考试备考与学科基础辅导。全部课程线上进行，5–10 人小班，中英双语沟通。",
      en: "Tutela is a team of students from top Quebec secondary schools, offering secondary admission exam preparation and foundational academic tutoring to families in Greater Montreal. Classes run online in groups of 5–10, and we correspond in both Chinese and English.",
    },
    sections: [
      {
        heading: { zh: "我们是谁", en: "Who we are" },
        body: [
          {
            zh: "Tutela 一词来自拉丁语，意为「守护」。我们是一群仍在魁北克顶尖中学（包括 Collège Jean-de-Brébeuf）就读的学生：几年前，我们自己也坐在同一场中学入学考试的考场里，知道那几个月是什么滋味，也知道哪些准备真正管用、哪些只是白花时间。",
            en: "Tutela is Latin for guardianship. We are students currently enrolled at top Quebec secondary schools, including Collège Jean-de-Brébeuf. A few years ago we sat the same secondary admission exam ourselves, so we know what those months feel like — and which kinds of preparation actually move the needle rather than just filling time.",
          },
          {
            zh: "我们以团队的方式授课，每位导师负责自己最擅长的科目：数学导师在 AMC（美国数学竞赛）与 Waterloo（CEMC）数学竞赛中名列前茅；法语导师曾多次在 Brébeuf 写作比赛中获奖；英语导师就读于 Brébeuf 最高级别的英语课程。我们把能拿得出证据的资历写在这里，其余的留给课堂本身证明。",
            en: "We teach as a team, each tutor taking the subject they know best. Our math tutor places among the top in the AMC and Waterloo (CEMC) contests; our French tutor has won Brébeuf writing competitions multiple times; our English tutor is enrolled in the highest level of English at Brébeuf. We list the credentials we can evidence, and leave the rest for the classroom to prove.",
          },
        ],
      },
      {
        heading: { zh: "我们做什么", en: "What we do" },
        body: [
          {
            zh: "我们有两条并行的课程线。中学入学考试备考班面向小学三、四、五年级，围绕数学、法语、英语三门核心科目，讲考点、练题型、稳心态，是我们的主推项目。一般学科辅导面向四年级及以下的孩子，不针对某一场考试，重在把数学与语言的基础打牢，把学习习惯和专注力养起来。",
            en: "We run two parallel tracks. The secondary admission exam prep track is for primary grades 3, 4, and 5 and covers the three core subjects — Math, French, and English — working through the topics that come up, the question formats, and exam-day composure. It is our lead program. The general academic track is for grade 4 and below; it is not tied to any one exam and concentrates on solid math and language foundations, study habits, and focus.",
          },
          {
            zh: "除了课程本身，我们还整理了一系列关于魁北克中学入学考试的免费指南——考试什么时候考、考哪些科目、几年级该开始准备、如何选择目标学校。这些内容不需要报名就能读，也欢迎家长自行取用。",
            en: "Alongside the classes we publish a set of free guides to Quebec's secondary admission exam: when it happens, which subjects it tests, when preparation should begin, and how to choose target schools. They are free to read without enrolling, and parents are welcome to use them on their own.",
          },
        ],
      },
      {
        heading: { zh: "我们怎么上课", en: "How we teach" },
        body: [
          {
            zh: "所有课程通过 Zoom 线上进行，家长不必接送，孩子在熟悉的环境里更容易进入状态。每组 5–10 人，人数刻意压得很低：小班的意义不在于「氛围好」，而在于导师能记住每个孩子卡在哪一步。课后遇到不懂的题，随时可以联系我们，不必等到下一节课。",
            en: "Every class runs online over Zoom, so there is no commute for parents and children settle in faster from a familiar room. Groups are deliberately kept to 5–10 students: the point of a small group is not atmosphere, it is that a tutor can remember exactly where each child gets stuck. When a question comes up after class, families can reach us then and there rather than waiting for the next session.",
          },
          {
            zh: "第一节课是免费试听。孩子实际上过一节课之后，家长再决定要不要报名——我们认为这比任何介绍页都更能说明问题。",
            en: "The first class is a free trial. Parents decide whether to enrol after their child has actually sat in one — we think that tells you more than any page of description can.",
          },
        ],
      },
      {
        heading: { zh: "我们不说的话", en: "What we do not claim" },
        body: [
          {
            zh: "我们不承诺录取结果，不展示无法核实的「学员成绩」，也不与任何学校存在隶属关系——我们只是碰巧就读于其中几所。模拟测试仍在制作中（即将推出），在正式上线之前我们不会把它写成已有的服务。凡是这个网站上没写的，就是我们还做不到的。",
            en: "We do not promise admission outcomes, we do not display student results we cannot verify, and we are not affiliated with any school — we simply happen to attend a few of them. Our practice exams are still being built (coming soon) and we will not describe them as an existing service until they are live. If it is not written on this site, it is something we cannot yet do.",
          },
        ],
      },
    ] as { heading: Bi; body: Bi[] }[],
    napTitle: { zh: "机构信息", en: "Our details" },
    contactCta: { zh: "查看联系方式", en: "See how to reach us" },
    programCta: { zh: "查看完整课程", en: "See the full program" },
  },
  contactPage: {
    tag: { zh: "联系", en: "Contact" },
    title: { zh: "联系我们", en: "Contact us" },
    lede: {
      zh: "报名、试听、一对一辅导，或者只是想先问几个问题——都欢迎通过微信联系我。我是 Dennis，识途学辅由我负责对接家长。",
      en: "Enrolment, a trial class, one-on-one tutoring, or just a few questions before you decide — WeChat is the way to reach me. I'm Dennis, and I handle everything on the parents' side at Tutela.",
    },
    sections: [
      {
        heading: { zh: "怎么联系", en: "How to reach us" },
        body: [
          {
            zh: "扫描页面底部的二维码加我微信，或直接搜索微信号 wxid_qs6tqmt94en122。手机上无法扫自己屏幕上的码，可以长按二维码识别，或截图后用「扫一扫」从相册打开。微信是我们唯一的联系方式——我们没有客服电话，也不通过邮件收报名。",
            en: "Scan the QR code at the bottom of any page to add me on WeChat, or search for the ID wxid_qs6tqmt94en122 directly. If you are on a phone and cannot scan a code on your own screen, long-press the QR to recognise it, or screenshot it and open it from your album. WeChat is our only contact channel — there is no phone line, and we do not take enrolments by email.",
          },
        ],
      },
      {
        heading: { zh: "第一条消息里写什么", en: "What to put in your first message" },
        body: [
          {
            zh: "为了少来回几轮，第一条消息里可以直接写上：孩子现在读几年级、想报哪几门科目（数学 / 法语 / 英语）、是备考入学考试还是打基础，以及有没有心仪的目标学校。如果情况比较特殊（比如 Sec 1 想转学，或者想安排一对一），也一并说明，我们会单独给方案。",
            en: "To save a few rounds of back-and-forth, your first message can include: your child's current grade, which subjects you are interested in (Math, French, English), whether you are preparing for the admission exam or building foundations, and any target schools you have in mind. If your situation is unusual — a Sec 1 student transferring, say, or a request for one-on-one tutoring — mention that too and we will work out a plan separately.",
          },
        ],
      },
      {
        heading: { zh: "我们能帮到谁，帮不到谁", en: "Who we can help, and who we can't" },
        body: [
          {
            zh: "我们面向大蒙特利尔地区的家庭，但课程全部线上进行，所以魁北克省内其他城市的孩子同样可以上课。中文、English、français 都可以沟通，家长用哪种语言给我们留言都行。",
            en: "We work with families in Greater Montreal, but because every class is online, children elsewhere in Quebec can join just as easily. We correspond in Chinese, English, and French — write to us in whichever you prefer.",
          },
          {
            zh: "有些事我们做不了，也想先说清楚：我们不提供上门或线下辅导，不代办任何学校的报名手续，也不涉及 CEGEP、大学申请或 IB/AP 课程。如果你要找的是这些，我们会直接告诉你，而不是先把你留下来。",
            en: "Some things we don't do, and would rather say up front: no in-home or in-person tutoring, no handling a school's registration paperwork on your behalf, and nothing to do with CEGEP, university applications, or IB/AP coursework. If that's what you're looking for, we'll tell you straight away rather than keeping you talking.",
          },
        ],
      },
      {
        heading: { zh: "接下来会发生什么", en: "What happens next" },
        body: [
          {
            zh: "我们会回复你目前的班级安排和空位情况，并约一节免费试听课。孩子上过之后，你再决定是否报名。确认报名后，我们会邀请你加入家长群，上课时间、课件和临时调整都在群里同步。",
            en: "We will reply with the current class times and whether there is space, and arrange a free trial class. After your child has sat in one, you decide whether to enrol. Once you do, we add you to the parents' group, where class times, materials, and any schedule changes are shared.",
          },
          {
            zh: "你留下的联系方式只用于课程沟通，不会用于其他用途，也不会转给第三方。详见隐私政策。",
            en: "Your contact details are used only to reach you about classes. We do not use them for anything else and do not pass them to third parties. See our privacy policy for the full picture.",
          },
        ],
      },
    ] as { heading: Bi; body: Bi[] }[],
    napTitle: { zh: "联系信息", en: "Contact details" },
  },

};

export type Content = typeof content;
