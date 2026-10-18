/* ==========================================================================
   DATA.JS — all bilingual copy lives here.
   To edit site text: find the key below and change the "en" / "ar" value.
   To add a project: copy a project object in PROJECTS and edit its fields.
   ========================================================================== */

export const META = {
  name: { en: "Toqa Ahmed Kamal", ar: "تقى أحمد كمال" },
  role: { en: "Web GIS Developer", ar: "مطوّرة نظم معلومات جغرافية (Web GIS)" },
  location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
  coords: "30.0444° N, 31.2357° E",
  email: "toqaahmedkamal@gmail.com",
  phones: ["01223155437", "01022590557"],
  linkedin: "https://linkedin.com/in/toqa-kamal/",
  github: "https://github.com/Toqa-Ahmed-Kamal",
};

export const UI = {
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    experience: { en: "Experience", ar: "الخبرات" },
    projects: { en: "Projects", ar: "المشاريع" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  langToggle: { en: "AR", ar: "EN" }, // label shows the language you'd switch TO
  hero: {
    eyebrow: { en: "CAIRO, EGYPT — READY TO TRAVEL", ar: "القاهرة، مصر — جاهزة للسفر" },
    headline: {
      en: "I build the maps behind the decisions.",
      ar: "أبني الخرائط التي تُبنى عليها القرارات.",
    },
    sub: {
      en: "Web GIS Developer — four years turning spatial data into enterprise systems, dashboards, and decisions across Egypt, Iraq, and the Gulf.",
      ar: "مطوّرة Web GIS — أربع سنوات أُحوّل فيها البيانات المكانية إلى أنظمة مؤسسية ولوحات بيانات وقرارات، في مصر والعراق ودول الخليج.",
    },
    ctaPrimary: { en: "View Projects", ar: "استعرضي المشاريع" },
    ctaSecondary: { en: "Get in Touch", ar: "تواصلي معي" },
    statLabels: {
      years: { en: "YEARS EXPERIENCE", ar: "سنوات خبرة" },
      projects: { en: "PROJECTS DELIVERED", ar: "مشروع منجز" },
      freelance: { en: "FREELANCE PROJECTS", ar: "مشروع فري لانس" },
      countries: { en: "COUNTRIES", ar: "دول" },
      users: { en: "USERS SERVED", ar: "مستخدم" },
    },
  },
  stack: {
    label: { en: "// WHAT I WORK WITH", ar: "// أدوات العمل" },
    title: { en: "Esri, and the open-source stack beside it.", ar: "Esri، وحزمة المصادر المفتوحة جنبًا إلى جنب." },
    esri: { en: "Esri", ar: "Esri" },
    openSource: { en: "Open Source", ar: "مصادر مفتوحة" },
  },
  map: {
    label: { en: "// COVERAGE", ar: "// نطاق العمل" },
    title: { en: "Where the work has taken me.", ar: "أماكن نفّذت فيها مشاريعي." },
    sub: {
      en: "Projects delivered across six countries — click a marker to see what was built there.",
      ar: "مشاريع نُفّذت في ست دول — اضغطي على أي علامة لمعرفة ما تم بناؤه هناك.",
    },
    sites: { en: "SITES", ar: "موقع" },
    attribution: { en: "Basemap © Esri, HERE, Garmin, © OpenStreetMap contributors", ar: "الخريطة الأساسية © Esri وHERE وGarmin، © OpenStreetMap" },
  },
  boot: {
    acquiring: { en: "ACQUIRING SIGNAL", ar: "جارٍ تحديد الموقع" },
    locked: { en: "LOCATION LOCKED", ar: "تم تحديد الموقع" },
    skip: { en: "Click anywhere to skip", ar: "اضغطي في أي مكان للتخطي" },
  },
  featured: {
    label: { en: "// SELECTED WORK", ar: "// أعمال مختارة" },
    title: { en: "A few things worth a closer look.", ar: "بعض الأعمال التي تستحق نظرة أقرب." },
    viewAll: { en: "View all projects", ar: "عرض كل المشاريع" },
  },
  intro: {
    label: { en: "INTRO · 0:41", ar: "تعريف · 0:41" },
    sound: { en: "Tap for sound", ar: "اضغطي للصوت" },
    mute: { en: "Mute", ar: "كتم الصوت" },
    play: { en: "Play intro", ar: "شغّلي الفيديو" },
    replay: { en: "Replay", ar: "إعادة التشغيل" },
  },
  mobileApps: {
    label: { en: "// MOBILE APPLICATIONS", ar: "// تطبيقات الموبايل" },
    title: { en: "Built for the screen in your pocket.", ar: "مصمّمة للشاشة اللي في جيبك." },
    sub: {
      en: "Mobile and tablet apps — from location-aware field tools to everyday consumer experiences.",
      ar: "تطبيقات موبايل وتابلت — من أدوات ميدانية تعتمد على الموقع إلى تجارب يومية للمستخدمين.",
    },
    comingSoon: { en: "Coming soon", ar: "قريبًا" },
    empty: { en: "Mobile app showcases are on their way.", ar: "عرض تطبيقات الموبايل في الطريق." },
    filter: { en: "Mobile Apps", ar: "تطبيقات موبايل" },
  },
  reviews: {
    label: { en: "// CLIENT REVIEWS", ar: "// آراء العملاء" },
    title: { en: "What freelance clients say.", ar: "ماذا يقول عملاء الفري لانس." },
    sub: {
      en: "Real messages from freelance clients — shared as they were sent, with personal details hidden.",
      ar: "رسائل حقيقية من عملاء الفري لانس — كما وصلت، مع إخفاء البيانات الشخصية.",
    },
    messages: { en: "client messages", ar: "رسالة من العملاء" },
    freelance: { en: "freelance projects", ar: "مشروع فري لانس" },
    showAll: { en: "Show all messages", ar: "عرض كل الرسائل" },
    showLess: { en: "Show less", ar: "عرض أقل" },
    shotAlt: { en: "Client message", ar: "رسالة من عميل" },
    close: { en: "Close", ar: "إغلاق" },
    prev: { en: "Previous", ar: "السابق" },
    next: { en: "Next", ar: "التالي" },
    average: { en: "average rating", ar: "متوسط التقييم" },
    count: { en: "reviews", ar: "تقييم" },
    comingSoon: { en: "Coming soon", ar: "قريبًا" },
    empty: { en: "Client reviews are being collected.", ar: "جاري تجميع تقييمات العملاء." },
    verified: { en: "View on", ar: "عرض على" },
  },
  experiencePage: {
    eyebrow: { en: "// TIMELINE", ar: "// المسار الزمني" },
    title: { en: "Experience", ar: "الخبرة العملية" },
    intro: {
      en: "Five roles, one thread: turning spatial data into tools people actually use.",
      ar: "خمس محطات، وخيط واحد يربطها: تحويل البيانات المكانية إلى أدوات يستخدمها الناس فعلًا.",
    },
    educationLabel: { en: "// EDUCATION", ar: "// التعليم" },
    educationTitle: { en: "Education & Training", ar: "التعليم والتدريب" },
    skillsLabel: { en: "// LEGEND", ar: "// دليل المهارات" },
    skillsTitle: { en: "Skills", ar: "المهارات" },
    certsLabel: { en: "// CREDENTIALS", ar: "// الشهادات" },
    certsTitle: { en: "Certifications & Courses", ar: "الشهادات والدورات التدريبية" },
  },
  projectsPage: {
    eyebrow: { en: "// ARCHIVE", ar: "// الأرشيف" },
    title: { en: "Projects", ar: "المشاريع" },
    intro: {
      en: "Twenty-plus projects spanning enterprise systems, public-facing web maps, and spatial analysis — filter by type below.",
      ar: "أكثر من عشرين مشروعًا بين أنظمة مؤسسية وخرائط ويب عامة وتحليل مكاني — يمكنك الفلترة حسب النوع.",
    },
    filterAll: { en: "All", ar: "الكل" },
    viewLive: { en: "View live", ar: "عرض المشروع" },
    mediaPending: { en: "Visual coming soon", ar: "الصورة قريبًا" },
  },
  contactPage: {
    eyebrow: { en: "// GET IN TOUCH", ar: "// تواصل معي" },
    title: { en: "Let's build something.", ar: "يلا نبني حاجة." },
    intro: {
      en: "Open to Web GIS roles, contract work, and collaborations — based in Cairo, ready to travel.",
      ar: "متاحة لفرص عمل ومشاريع تعاون في مجال Web GIS — مقرّي القاهرة، وجاهزة للسفر.",
    },
    emailLabel: { en: "EMAIL", ar: "البريد الإلكتروني" },
    phoneLabel: { en: "PHONE", ar: "الهاتف" },
    locationLabel: { en: "LOCATION", ar: "الموقع" },
    socialLabel: { en: "ELSEWHERE", ar: "روابط أخرى" },
    helpTitle: { en: "// WHAT I CAN HELP WITH", ar: "// كيف يمكنني المساعدة" },
  },
  footer: {
    tagline: { en: "Web GIS Developer, based in Cairo.", ar: "مطوّرة Web GIS، مقرّها القاهرة." },
    rights: { en: "Built with Leaflet & OpenStreetMap.", ar: "صُمم باستخدام Leaflet وOpenStreetMap." },
  },
};

export const ABOUT = {
  en: "Web GIS Developer with four years building and customizing GIS web solutions and enterprise applications. I design interactive geospatial systems and full-stack tools with both Esri and open-source technologies — extending Esri Experience Builder and Dashboards with JavaScript, and building mapping solutions with Leaflet, OpenLayers, and Mapbox. Trained at the Information Technology Institute (ITI) in both GIS and Front-End Cross-Platform Development.",
  ar: "مطوّرة Web GIS بخبرة أربع سنوات في بناء وتخصيص حلول GIS المؤسسية. أُصمم أنظمة مكانية تفاعلية وأدوات full-stack باستخدام تقنيات Esri والمصادر المفتوحة معًا — من تخصيص Esri Experience Builder وDashboards بلغة JavaScript، إلى بناء حلول خرائط بـ Leaflet وOpenLayers وMapbox. تدربت في معهد تكنولوجيا المعلومات (ITI) في مسارين: GIS، وتطوير الواجهات الأمامية متعددة المنصات.",
};

export const STACK = {
  esri: ["ArcGIS Pro", "ArcGIS Enterprise", "ArcGIS Online", "Experience Builder", "Arcade", "Utility Network"],
  openSource: ["Leaflet", "OpenLayers", "Mapbox", "QGIS", "GeoServer", "PostGIS"],
};

export const STATS = { years: 4, projects: 42, freelance: 37, countries: 6, users: 60000 };

export const HELP_ITEMS = [
  { en: "Enterprise GIS systems & KPI dashboards", ar: "أنظمة GIS مؤسسية ولوحات مؤشرات أداء" },
  { en: "Esri Experience Builder & ArcGIS Enterprise customization", ar: "تخصيص Esri Experience Builder وArcGIS Enterprise" },
  { en: "Interactive web maps with Leaflet, OpenLayers & Mapbox", ar: "خرائط ويب تفاعلية بـ Leaflet وOpenLayers وMapbox" },
  { en: "Spatial analysis & geospatial data QC", ar: "التحليل المكاني وضبط جودة البيانات المكانية" },
];

/* ---------------------------------- EXPERIENCE ---------------------------------- */
export const EXPERIENCE = [
  {
    role: { en: "Web Developer", ar: "مطوّرة ويب" },
    org: { en: "DST — a subsidiary of the Future of Egypt Authority", ar: "DST — إحدى شركات هيئة مستقبل مصر" },
    period: { en: "Jul 2025 — Present", ar: "يوليو 2025 — حتى الآن" },
    points: [
      { en: "Designed and built an internal enterprise GIS platform serving 60+ users, with tiered access for Admins, Super Users, and Standard Users.", ar: "صمّمت وبنيت منصة GIS مؤسسية داخلية تخدم أكثر من 60 مستخدمًا، بنظام صلاحيات متعدد المستويات." },
      { en: "Automated GIS workflows with Python/ArcPy and administer the ArcGIS Enterprise environment, including spatial databases in SQL Server and PostGIS.", ar: "أتمتة سير عمل GIS باستخدام Python/ArcPy، وإدارة بيئة ArcGIS Enterprise وقواعد بيانات مكانية على SQL Server وPostGIS." },
      { en: "Deliver real-time KPI dashboards and automated reporting, cutting manual processing time significantly.", ar: "تطوير لوحات مؤشرات أداء (KPI) لحظية وأتمتة التقارير، ما قلّل وقت المعالجة اليدوية بشكل كبير." },
      { en: "Built a fertilizer distribution platform linking the Ministry of Agriculture with citizens, plus systems for the Agricultural Bank of Egypt and an internal HR platform.", ar: "بناء منصة لتوزيع الأسمدة تربط وزارة الزراعة بالمواطنين، وأنظمة للبنك الزراعي المصري، ونظام موارد بشرية داخلي." },
    ],
  },
  {
    role: { en: "Technical Solutions Engineer", ar: "مهندسة حلول تقنية" },
    org: { en: "Etqan for Geoinformatics Systems", ar: "شركة إتقان لنظم المعلومات الجغرافية" },
    period: { en: "May 2024 — Jun 2025", ar: "مايو 2024 — يونيو 2025" },
    points: [
      { en: "Analyzed client GIS requirements and designed tailored technical solutions, including RFP/RFI proposals.", ar: "تحليل متطلبات العملاء من GIS وتصميم حلول تقنية مخصصة، وإعداد عروض RFP/RFI." },
      { en: "Built GIS web applications, dashboards, and demos for Proof-of-Concept presentations, acting as technical liaison between sales and engineering.", ar: "بناء تطبيقات ويب ولوحات بيانات وعروض تجريبية (PoC)، والعمل كحلقة وصل تقنية بين المبيعات والهندسة." },
      { en: "Led market outreach in Iraq, securing the company's first strategic partnership there.", ar: "قيادة التوسع في السوق العراقي، وتأمين أول شراكة استراتيجية للشركة هناك." },
      { en: "Represented the company at 3+ international conferences and built relationships across Iraq, Tunisia, and Sudan.", ar: "تمثيل الشركة في أكثر من 3 مؤتمرات دولية، وبناء علاقات عمل في العراق وتونس والسودان." },
    ],
  },
  {
    role: { en: "GIS Front-End Developer", ar: "مطوّرة واجهات GIS" },
    org: { en: "Military Survey Authority", ar: "هيئة المساحة العسكرية" },
    period: { en: "Mar 2024 — Jul 2024", ar: "مارس 2024 — يوليو 2024" },
    points: [
      { en: "Built interactive Web GIS mapping applications using Esri and open-source technologies, including Leaflet and OpenLayers.", ar: "بناء تطبيقات خرائط Web GIS تفاعلية باستخدام تقنيات Esri والمصادر المفتوحة، منها Leaflet وOpenLayers." },
      { en: "Handled GeoJSON and Shapefile data, and managed coordinate systems and projections for accurate mapping.", ar: "التعامل مع بيانات GeoJSON وShapefile، وإدارة أنظمة الإحداثيات والإسقاطات لضمان دقة الخرائط." },
      { en: "Prepared spatial data with FME and integrated GIS services through GeoServer and MapServer.", ar: "تجهيز البيانات المكانية باستخدام FME، ودمج خدمات GIS عبر GeoServer وMapServer." },
    ],
  },
  {
    role: { en: "Route to Market (RTM) Specialist", ar: "أخصائية Route to Market (RTM)" },
    org: { en: "Saudi FMCG company", ar: "شركة سعودية لسلع الاستهلاك السريع" },
    period: { en: "Jun 2023 — Dec 2023", ar: "يونيو 2023 — ديسمبر 2023" },
    points: [
      { en: "Used GIS and spatial analysis to improve route planning and territory management across 100+ branches.", ar: "استخدام GIS والتحليل المكاني لتحسين تخطيط المسارات وإدارة المناطق عبر أكثر من 100 فرع." },
      { en: "Developed RTM strategies and dashboards to track distributor and retailer performance and market coverage.", ar: "تطوير استراتيجيات RTM ولوحات بيانات لمتابعة أداء الموزعين وتجار التجزئة وتغطية السوق." },
    ],
  },
];

export const CREDENTIAL_NOTE = {
  en: "Certificate of experience as a GIS expert assistant, accredited by the Urban Planning Authority — Nov 2024 to present.",
  ar: "شهادة خبرة كمساعد خبير GIS، معتمدة من هيئة التخطيط العمراني — من نوفمبر 2024 حتى الآن.",
};

export const EDUCATION = {
  degree: { en: "B.A. Geography & Geographic Information Systems", ar: "بكالوريوس جغرافيا ونظم معلومات جغرافية" },
  school: { en: "Helwan University", ar: "جامعة حلوان" },
  period: { en: "2019 — 2023", ar: "2019 — 2023" },
  extra: {
    en: "Plus two professional programs at the Information Technology Institute (ITI): GIS, and Front-End Cross-Platform Development.",
    ar: "بالإضافة إلى برنامجين تدريبيين في معهد تكنولوجيا المعلومات (ITI): GIS، وتطوير الواجهات الأمامية متعددة المنصات.",
  },
};

/* ---------------------------------- SKILLS ---------------------------------- */
export const SKILLS = [
  {
    group: { en: "GIS Platforms", ar: "منصات GIS" },
    color: "var(--water)",
    items: ["ArcGIS Pro", "ArcGIS Enterprise", "ArcGIS Online", "ArcGIS Hub", "Experience Builder", "Arcade", "Model Builder", "GeoServer", "QGIS"],
  },
  {
    group: { en: "Spatial Analysis", ar: "التحليل المكاني" },
    color: "var(--terrain)",
    items: ["Utility Network", "Network Analysis", "Hydrology Analysis", "Topology", "Remote Sensing", "Business Analysis", "BIM"],
  },
  {
    group: { en: "Web Development", ar: "تطوير الويب" },
    color: "var(--amber)",
    items: ["JavaScript", "React", "Next.js", "Vue", "HTML5 / CSS3", "Esri ArcGIS API for JS", "RESTful APIs"],
  },
  {
    group: { en: "Backend & Data", ar: "الخلفية والبيانات" },
    color: "var(--water)",
    items: [".NET", "Java", "Python", "SQL Server", "PostgreSQL / PostGIS", "Oracle DB"],
  },
  {
    group: { en: "Mapping Libraries", ar: "مكتبات الخرائط" },
    color: "var(--terrain)",
    items: ["Leaflet", "OpenLayers", "Mapbox", "GDAL"],
  },
  {
    group: { en: "Soft Skills", ar: "المهارات الشخصية" },
    color: "var(--amber)",
    items: ["Problem Solving", "Communication", "Leadership", "Presentation", "Flexibility", "Teamwork"],
  },
];

/* ---------------------------------- CERTIFICATIONS ---------------------------------- */
export const CERTIFICATIONS = [
  { title: { en: "GIS, Mapping & Spatial Analysis Specialization", ar: "تخصص GIS ورسم الخرائط والتحليل المكاني" }, issuer: "University of Toronto", date: { en: "2023", ar: "2023" } },
  { title: { en: "Geographic Information Systems Specialization", ar: "تخصص نظم المعلومات الجغرافية" }, issuer: "UC Davis", date: { en: "2023", ar: "2023" } },
  { title: { en: "Spatial Data Science MOOC", ar: "مقرر علم البيانات المكانية" }, issuer: "Esri", date: { en: "2023", ar: "2023" } },
  { title: { en: "ArcGIS Online Basics", ar: "أساسيات ArcGIS Online" }, issuer: "Esri", date: { en: "2023", ar: "2023" } },
  { title: { en: "3D Buildings with the ArcGIS Solution", ar: "المباني ثلاثية الأبعاد بحلول ArcGIS" }, issuer: "Esri", date: { en: "2023", ar: "2023" } },
  { title: { en: "McKinsey Forward", ar: "برنامج McKinsey Forward" }, issuer: "McKinsey & Company", date: { en: "2024", ar: "2024" } },
  { title: { en: "AI Career Essentials (AiCE)", ar: "أساسيات المسار الوظيفي في الذكاء الاصطناعي" }, issuer: "ALX", date: { en: "2024", ar: "2024" } },
  { title: { en: "Python — Fundamentals & OOP", ar: "بايثون — الأساسيات والبرمجة الكائنية" }, issuer: "Geosteps Academy", date: { en: "2024", ar: "2024" } },
  { title: { en: "Backend Development, .NET", ar: "تطوير الخلفية بلغة .NET" }, issuer: "Route Academy", date: { en: "2025 — Present", ar: "2025 — حتى الآن" } },
];

/* ---------------------------------- PROJECTS ---------------------------------- */
/* categories: gov | mapping | analysis | market */
export const PROJECTS = [
  {
    id: "agri-bank-loans",
    category: "gov",
    title: { en: "Loan Management Platform — Agricultural Bank of Egypt", ar: "منصة إدارة القروض — البنك الزراعي المصري" },
    desc: { en: "A mobile and web platform supporting the bank's loan operations end to end.", ar: "منصة ويب وموبايل تدعم عمليات إقراض البنك من البداية للنهاية." },
    tags: ["Full-Stack", "Mobile + Web"],
    image: "img/ABE.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
  },
  {
    id: "hr-system",
    category: "gov",
    title: { en: "HR Management System", ar: "نظام إدارة الموارد البشرية" },
    desc: { en: "An internal enterprise application streamlining employee operations at DST.", ar: "تطبيق مؤسسي داخلي لتبسيط عمليات الموظفين في DST." },
    tags: ["Enterprise", "Full-Stack"],
    image: "img/HR.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
  },
  {
    id: "fertilizer-distribution",
    category: "gov",
    title: { en: "Fertilizer Distribution Platform", ar: "منصة توزيع الأسمدة" },
    desc: { en: "Connects the Ministry of Agriculture directly with citizens for fertilizer distribution.", ar: "تربط وزارة الزراعة بالمواطنين مباشرة لتوزيع الأسمدة." },
    tags: ["GovTech", "GIS"],
    image: "img/Fertilizer.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
  },
  {
    id: "mosul-dashboard",
    category: "mapping",
    title: { en: "Mosul Municipality Demo — Dashboard & Sweep App", ar: "عرض تجريبي لبلدية الموصل — Dashboard وتطبيق Sweep" },
    desc: { en: "A municipal GIS demo built for Shuaa Al-Iraq, opening a new collaboration.", ar: "عرض GIS بلدي لصالح شعاع العراق، أدى إلى شراكة جديدة." },
    tags: ["ArcGIS Dashboards", "Iraq"],
    image: "img/MosulMunicipality.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://2h.ae/WIuM",
    location: "mosul",
  },
  {
    id: "albaha-site",
    category: "mapping",
    title: { en: "Al Baha Region Development Site", ar: "موقع تطوير منطقة الباحة" },
    desc: { en: "A web GIS site supporting the Al Baha region development project in Saudi Arabia.", ar: "موقع Web GIS داعم لمشروع تطوير منطقة الباحة في السعودية." },
    tags: ["Web GIS", "Saudi Arabia"],
    image: "img/albaha.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "http://45.94.209.137:7009/",
    location: "albaha",
  },
  
  {
    id: "mashaer-landslide-risk",
    category: "mapping",
    title: {
      en: "Slope & Rockfall Risk Assessment — Al-Mashaer Al-Muqaddasah",
      ar: "تقييم مخاطر المنحدرات والانهيارات الصخرية — المشاعر المقدسة",
    },
    desc: {
      en: "A GIS risk-mapping platform assessing slope and rockfall hazards across the Holy Sites (Al-Mashaer Al-Muqaddasah), supporting engineering protection design and protective measures.",
      ar: "منصة GIS لتقييم مخاطر المنحدرات والانهيارات الصخرية بالمشاعر المقدسة، لدعم تصميم الحماية الهندسية وتدابير الحماية اللازمة.",
    },
    tags: ["Risk Assessment", "Saudi Arabia"],
    image: "img/landslide-risk-mashaer.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://map-stations-toqa.surge.sh/",
    location: "makkah",
  },
  {
    id: "medina-disability-services",
    category: "mapping",
    title: {
      en: "Quality of Life for People with Disabilities — Saudi Arabia",
      ar: "تعزيز جودة الحياة للأشخاص ذوي الإعاقة — المملكة العربية السعودية",
    },
    desc: {
      en: "An in-depth case study assessing disability services and their adequacy across Saudi Arabia, with a focused deep dive on the Medina region.",
      ar: "دراسة حالة معمقة لتقييم الخدمات المقدمة للأشخاص ذوي الإعاقة ومدى كفايتها بالمملكة العربية السعودية، مع تركيز خاص على منطقة المدينة المنورة.",
    },
    tags: ["Web GIS", "Social Mapping"],
    image: "img/disabilities-qol-madinah.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://disabilities-xi.vercel.app/",
    location: "medina",
  },
  {
    id: "riyadh-gis-agencies",
    category: "mapping",
    title: { en: "GIS Recruitment Agencies Map — Riyadh", ar: "خريطة شركات توظيف GIS — الرياض" },
    desc: { en: "An ArcGIS Online Web AppBuilder map of GIS recruitment agencies across Riyadh.", ar: "خريطة ArcGIS Online Web AppBuilder لشركات توظيف GIS في الرياض." },
    tags: ["ArcGIS Online", "Web AppBuilder"],
    image: "img/Recruitment.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://2h.ae/Zouy",
    location: "riyadh",
  },
    {
    id: "aula-tourism",
    category: "mapping",
    title: { en: "Al-Ula Tourism Application", ar: "تطبيق سياحة العُلا" },
    desc: { en: "An application encouraging tourism in the city of Al-Ula, Saudi Arabia.", ar: "تطبيق لتشجيع السياحة في مدينة العُلا بالسعودية." },
    tags: ["Web GIS", "Tourism"],
    image: "img/Al-UlaTourismApplication.png",    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://aulaa.surge.sh/",
    location: "aula",
  },
  {
    id: "medina-hospital-heatmap",
    category: "analysis",
    title: { en: "Patient Heatmap & Health Facilities Dashboard — Medina", ar: "خريطة حرارية للمرضى ولوحة المنشآت الصحية — المدينة المنورة" },
    desc: { en: "A web map and analytics dashboard showing the spatial density of patients (diabetes, hypertension, heart, asthma) alongside hospitals and health centers in Medina, with visit counts per facility.", ar: "خريطة ويب ولوحة تحليلية تعرض الكثافة المكانية للمرضى (السكري، الضغط، القلب، الربو) مع المستشفيات والمراكز الصحية في المدينة المنورة، وأعداد المراجعين لكل منشأة." },
    tags: ["Web GIS", "Dashboard", "Health"],
    image: "img/Heatmaphospital.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "medina",
  },
  {
    id: "egypt-tourism-dashboard",
    category: "mapping",
    title: { en: "Tourism Dashboard — Egypt", ar: "لوحة بيانات السياحة — مصر" },
    desc: { en: "A responsive tourism dashboard mapping 20 tourist destinations across Egypt, with filters by type, ratings, and linked cards, table, and map — in light and dark modes.", ar: "لوحة بيانات سياحية متجاوبة تعرض 20 وجهة سياحية في مصر على الخريطة، مع فلترة حسب النوع والتقييم وربط البطاقات والجدول والخريطة — بوضعين فاتح وداكن." },
    tags: ["Web GIS", "Dashboard", "Tourism"],
    image: "img/dashboard tourism.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "cairo",
  },
  {
    id: "asir-education",
    category: "gov",
    title: { en: "Student Welfare Mapping — Ministry of Education, Asir", ar: "خريطة رعاية الطلاب — وزارة التعليم، عسير" },
    desc: { en: "Submitted to the Ministry of Education, mapping the distribution of students with social and family challenges in the Asir region.", ar: "مشروع مقدَّم لوزارة التعليم يعرض توزيع الطلاب ذوي المشكلات الاجتماعية والأسرية في منطقة عسير." },
    tags: ["GIS", "Social Mapping"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "asir",
  },
  {
    id: "medina-health",
    category: "mapping",
    title: { en: "Health Sector Services — Medina Crisis Center", ar: "خدمات القطاع الصحي — مركز أزمات المدينة المنورة" },
    desc: { en: "A health-sector service application for the Crisis and Disaster Management Center in Medina.", ar: "تطبيق خدمات صحية لمركز إدارة الأزمات والكوارث في المدينة المنورة." },
    tags: ["Web GIS", "Health"],
    image: "img/Health Sector Services — Medina Crisis Center.png",    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://2h.ae/UfRh",
    location: "medina",
  },
  {
    id: "texas-rainfall",
    category: "analysis",
    title: { en: "Effective Rainfall Analysis — Texas", ar: "تحليل الأمطار الفعالة — تكساس" },
    desc: { en: "Analysis of effective rainfall in Texas and its impact on irrigation planning.", ar: "تحليل الأمطار الفعالة في تكساس وأثرها على تخطيط الري." },
    tags: ["Spatial Analysis", "Hydrology"],
    image: "img/Texas Effective Rainfall Dashboard.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "texas",
  },
  {
    id: "iraq-encroachment",
    category: "analysis",
    title: { en: "Encroachment Monitoring — Iraqi Regions", ar: "رصد التعديات — مناطق عراقية" },
    desc: {
      en: "A web dashboard monitoring encroachments and structural changes across Iraqi regions.",
      ar: "لوحة بيانات ويب لرصد التعديات والتغيرات الإنشائية في مناطق عراقية.",
    },
    tags: ["Web Dashboard", "Remote Sensing", "Change Detection"],
    image: "img/Modern Iraq Encroachment Monitoring Dashboard.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "iraq-regions",
  },
  {
    id: "oil-spill",
    category: "analysis",
    title: { en: "Oil Spill Monitoring — Arabian Gulf", ar: "رصد التسربات النفطية — الخليج العربي" },
    desc: { en: "Remote sensing analysis tracking oil spills from ships and the factors driving their movement.", ar: "تحليل بالاستشعار عن بعد لتتبع التسربات النفطية من السفن والعوامل المؤثرة على حركتها." },
    tags: ["Remote Sensing", "Marine"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "gulf",
  },
  {
    id: "housing-achievements",
    category: "gov",
    title: { en: "Government Achievements Dashboard — Ministry of Housing", ar: "لوحة إنجازات — وزارة الإسكان" },
    desc: { en: "A dashboard displaying government achievements for the Minister of Housing.", ar: "لوحة بيانات لعرض إنجازات الوزارة لوزير الإسكان." },
    tags: ["Dashboard", "GovTech"],
    image: "img/Egyptian Ministry Housing Dashboard UI.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
  },
  {
    id: "interior-security",
    category: "gov",
    title: { en: "Security Planning — Ministry of Interior", ar: "التخطيط الأمني — وزارة الداخلية" },
    desc: { en: "A GIS project submitted to Egypt's Ministry of Interior to enhance security planning.", ar: "مشروع GIS مقدَّم لوزارة الداخلية المصرية لتعزيز التخطيط الأمني." },
    tags: ["GIS", "GovTech"],
    image: "img/Arabic GIS Security Planning Dashboard.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
  },
  {
    id: "wind-turbines",
    category: "analysis",
    title: { en: "Wind Turbine Site Suitability — East Twente", ar: "ملاءمة مواقع توربينات الرياح — إيست تفينته" },
    desc: { en: "Spatial suitability analysis for wind turbine placement on farms near residents.", ar: "تحليل الملاءمة المكانية لمواقع توربينات الرياح في المزارع القريبة من السكان." },
    tags: ["Site Suitability", "Netherlands"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "twente",
  },
  {
    id: "khalid-airport",
    category: "gov",
    title: { en: "Crisis & Disaster Management — King Khalid Intl Airport", ar: "إدارة الأزمات والكوارث — مطار الملك خالد الدولي" },
    desc: { en: "A crisis and disaster management GIS project for King Khalid International Airport, Riyadh.", ar: "مشروع GIS لإدارة الأزمات والكوارث في مطار الملك خالد الدولي، الرياض." },
    tags: ["Crisis Management", "Saudi Arabia"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "riyadh",
  },
  {
    id: "abdulaziz-airport",
    category: "gov",
    title: { en: "Crisis & Disaster Management — King Abdulaziz Intl Airport", ar: "إدارة الأزمات والكوارث — مطار الملك عبدالعزيز الدولي" },
    desc: { en: "A crisis and disaster management GIS project for King Abdulaziz International Airport, Jeddah.", ar: "مشروع GIS لإدارة الأزمات والكوارث في مطار الملك عبدالعزيز الدولي، جدة." },
    tags: ["Crisis Management", "Saudi Arabia"],
    image: "img/abdulaziz-airport.jpg",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "jeddah",
  },
  {
    id: "bagcilar-green",
    category: "analysis",
    title: { en: "Green Area Distribution — Bağcılar, Turkey", ar: "توزيع المساحات الخضراء — باغجيلار، تركيا" },
    desc: { en: "Analysis of green areas and their distribution across the municipality of Bağcılar.", ar: "تحليل المساحات الخضراء وتوزيعها في بلدية باغجيلار." },
    tags: ["Urban Analysis", "Turkey"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "bagcilar",
  },
  {
    id: "tigris-hydrology",
    category: "analysis",
    title: { en: "Hydrological Analysis — Tigris River", ar: "التحليل الهيدرولوجي — نهر دجلة" },
    desc: { en: "A hydrological analysis of the Tigris River area in Iraq.", ar: "تحليل هيدرولوجي لمنطقة نهر دجلة في العراق." },
    tags: ["Hydrology", "Iraq"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "tigris",
  },

  {
    id: "rtm-branches",
    category: "market",
    title: { en: "Route to Market — 100+ Branches", ar: "Route to Market — أكثر من 100 فرع" },
    desc: { en: "An RTM project for a Saudi company with more than 100 branches nationwide.", ar: "مشروع Route to Market لشركة سعودية لديها أكثر من 100 فرع." },
    tags: ["RTM", "Dashboards"],
    image: "img/Route to Market.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://2h.ae/cXRE",
    location: "riyadh",
  },

 

    {
    id: "alexandria-qol",
    category: "analysis",
    title: { en: "Quality of Life — Alexandria Governorate", ar: "جودة الحياة — محافظة الإسكندرية" },
    desc: { en: "Graduation project analyzing quality of life across Alexandria Governorate — very good grade, 2023.", ar: "مشروع التخرج لتحليل جودة الحياة في محافظة الإسكندرية — بتقدير جيد جدًا، 2023." },
    tags: ["Graduation Project", "Spatial Analysis"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    location: "alexandria",
    featured: true,
  },
   {
    id: "transport-capital",
    category: "mapping",
    title: { en: "Transport Company Project — Administrative Capital", ar: "مشروع شركة نقل — العاصمة الإدارية" },
    desc: {
      en: "ITI GIS Track graduation project (2023) — a web mapping project for a transport company in Egypt's New Administrative Capital.",
      ar: "مشروع تخرج مسار GIS في ITI (2023) — مشروع خرائط ويب لشركة نقل في العاصمة الإدارية الجديدة.",
    },
    tags: ["Web GIS", "Transport", "ITI 2023"],
    image: "img/Transport Network Dashboard Showcase.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://2h.ae/weBz",
    location: "capital",
  },
    {
    id: "livestock",
    category: "gov",
    title: { en: "Livestock — Smart Herd Management", ar: "إدارة المواشي — منصة ذكية للقطيع" },
    desc: {
      en: "A bilingual tablet app for recognizing livestock by face scan and managing herds in one place — animal profiles, health and vaccination records, inspection logs, and GPS location editing on a map.",
      ar: "تطبيق تابلت ثنائي اللغة للتعرّف على المواشي ببصمة الوجه وإدارة القطيع في مكان واحد — ملف لكل حيوان، وسجل الصحة والتطعيمات، وسجل الفحوصات، وتعديل الموقع بالـ GPS على الخريطة.",
    },
    tags: ["Tablet App", "Face Recognition", "GPS", "AR / EN"],
    image: "img/Livestock App Tablet Showcase.png",
    video: null,
  },
  {
    id: "linkedwhere",
    category: "mapping",
    title: { en: "LinkedWhere — Proximity Connect", ar: "LinkedWhere — التواصل المهني بالقرب منك" },
    desc: {
      en: "A location-based networking app that shows professionals near you on a live map, with skill filters, location-privacy controls, and real-time chat.",
      ar: "تطبيق تواصل مهني قائم على الموقع، يعرض المحترفين القريبين منك على خريطة مباشرة، مع فلترة بالمهارات وإعدادات خصوصية للموقع ومحادثة فورية.",
    },
    tags: ["Mobile App", "Location-Based", "Real-time Chat"],
    image: "img/linkedwhere.png",
    video: null,
  },
  {
    id: "recipes-app",
    category: "mobile",
    title: { en: "Delicious Recipes App", ar: "تطبيق الوصفات" },
    desc: {
      en: "A recipe-sharing app — discover recipes by category, follow step-by-step ingredients, and publish your own with photos, cooking time, and servings.",
      ar: "تطبيق لمشاركة الوصفات — اكتشاف الوصفات حسب التصنيف، ومتابعة المكونات والخطوات، ونشر وصفاتك بالصور ووقت الطهي وعدد الحصص.",
    },
    tags: ["Mobile App", "UI/UX", "Social"],
    image: "img/Delicious Recipes App Showcase.png",
    video: null,
  },
  {
    id: "shopping-app",
    category: "mobile",
    title: { en: "Shopping App", ar: "تطبيق تسوّق" },
    desc: {
      en: "A shopping app with live product search, ratings, and list/grid views across beauty, groceries, and home categories.",
      ar: "تطبيق تسوّق ببحث فوري عن المنتجات، وتقييمات، وعرض قائمة أو شبكة عبر أقسام التجميل والبقالة والمنزل.",
    },
    tags: ["Mobile App", "E-commerce", "Search"],
    image: "img/Modern Smartphone Shopping App Showcase.png",
    video: null,
  },
  {
    id: "masar",
    category: "market",
    title: { en: "Masar — Sales & Distribution Management", ar: "مسار — إدارة المبيعات والتوزيع" },
    desc: {
      en: "A smart web and mobile system for packaged food and dairy companies — managing sales reps, customers, orders, and distribution routes, with tracking and reporting that connects field teams to management.",
      ar: "نظام ويب وموبايل ذكي لشركات الأغذية المعبأة والألبان — لإدارة المناديب والعملاء والطلبات وخطوط التوزيع، مع متابعة وتقارير تربط الفرق الميدانية بالإدارة.",
    },
    tags: ["Web + Mobile", "Sales & Distribution", "Route Planning"],
    image: "img/Masar Enterprise Tracking Dashboard.png",
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
  },
  {
    id: "gmarketing-research",
    category: "market",
    title: { en: "Geomarketing Research", ar: "أبحاث التسويق الجغرافي" },
    desc: { en: "Geomarketing research for a Saudi company using G-Marketing analysis.", ar: "أبحاث تسويق جغرافي لشركة سعودية باستخدام تحليل G-Marketing." },
    tags: ["Geomarketing", "Analysis"],
    image: null, // e.g. "img/PROJECT-ID.jpg" — see README
    video: null, // e.g. "dQw4w9WgXcQ" (YouTube video ID) — see README
    link: "https://2h.ae/FkZU",
  },
];

// Freelance client reviews — shown in the "Client Reviews" section on Home.
// Paste real reviews only, as written by the client. Fields:
//   name:     client name (or initials, if they prefer)              — required
//   role:     { en, ar } e.g. "Operations Manager, Riyadh"           — optional
//   project:  { en, ar } what you built for them                     — optional
//   platform: "Upwork" | "Mostaql" | "Khamsat" | "Freelancer" | …    — optional
//   rating:   1–5                                                    — required
//   text:     { en, ar } the review; one language is fine            — required
//   date:     "2025-03"                                              — optional
//   link:     URL of the review on the platform                      — optional
export const REVIEWS = [];

// Screenshots of real client messages (WhatsApp), shown as a wall in the reviews section.
// Files live in public/reviews/ — re-encoded from public/img/rev/ with any phone numbers covered.
// Order = display order (strongest first). w/h keep the layout stable while images load.
export const REVIEW_SHOTS = [
  { src: "reviews/r03.webp", w: 900, h: 184 },
  { src: "reviews/r04.webp", w: 900, h: 294 },
  { src: "reviews/r22.webp", w: 900, h: 376 },
  { src: "reviews/r13.webp", w: 900, h: 436 },
  { src: "reviews/r26.webp", w: 900, h: 352 },
  { src: "reviews/r27.webp", w: 900, h: 190 },
  { src: "reviews/r34.webp", w: 900, h: 394 },
  { src: "reviews/r16.webp", w: 900, h: 552 },
  { src: "reviews/r19.webp", w: 900, h: 174 },
  { src: "reviews/r05.webp", w: 900, h: 328 },
  { src: "reviews/r08.webp", w: 900, h: 192 },
  { src: "reviews/r15.webp", w: 900, h: 184 },
  { src: "reviews/r20.webp", w: 900, h: 418 },
  { src: "reviews/r21.webp", w: 900, h: 214 },
  { src: "reviews/r25.webp", w: 900, h: 544 },
  { src: "reviews/r31.webp", w: 900, h: 504 },
  { src: "reviews/r38.webp", w: 576, h: 322 },
  { src: "reviews/r40.webp", w: 569, h: 548 },
  { src: "reviews/r10.webp", w: 900, h: 408 },
  { src: "reviews/r24.webp", w: 900, h: 634 },
  { src: "reviews/r14.webp", w: 900, h: 224 },
  { src: "reviews/r37.webp", w: 900, h: 150 },
  { src: "reviews/r30.webp", w: 900, h: 336 },
  { src: "reviews/r33.webp", w: 900, h: 168 },
  { src: "reviews/r11.webp", w: 900, h: 128 },
  { src: "reviews/r12.webp", w: 900, h: 174 },
  { src: "reviews/r01.webp", w: 900, h: 166 },
  { src: "reviews/r02.webp", w: 900, h: 112 },
  { src: "reviews/r06.webp", w: 900, h: 278 },
  { src: "reviews/r07.webp", w: 900, h: 174 },
  { src: "reviews/r09.webp", w: 900, h: 172 },
  { src: "reviews/r18.webp", w: 900, h: 212 },
  { src: "reviews/r23.webp", w: 900, h: 396 },
  { src: "reviews/r28.webp", w: 900, h: 490 },
  { src: "reviews/r29.webp", w: 900, h: 314 },
  { src: "reviews/r32.webp", w: 900, h: 302 },
  { src: "reviews/r35.webp", w: 900, h: 276 },
  { src: "reviews/r36.webp", w: 900, h: 184 },
  { src: "reviews/r39.webp", w: 575, h: 314 },
  { src: "reviews/r17.webp", w: 900, h: 92 },
];

// Projects shown in the "Mobile Applications" section on Home and under the "Mobile Apps" filter.
// Add a project's id here, e.g. ["aula-tourism", "abe-loans"]. Optional per-project field:
// `mobileImage: "img/x.png"` — a phone-sized screenshot (portrait) used inside the phone frame.
export const MOBILE_APP_IDS = ["masar", "livestock", "linkedwhere", "recipes-app", "shopping-app"];

// Hand-picked featured set for the home page (in addition to any tagged `featured` above)
export const FEATURED_IDS = ["mosul-dashboard", "aula-tourism", "fertilizer-distribution", "alexandria-qol"];

/* ---------------------------------- MAP LOCATIONS ---------------------------------- */
export const LOCATIONS = [
  { id: "cairo", name: { en: "Cairo, Egypt", ar: "القاهرة، مصر" }, lat: 30.0444, lng: 31.2357, note: { en: "Home base — DST, Etqan, Military Survey Authority", ar: "المقر الأساسي — DST، إتقان، هيئة المساحة العسكرية" } },
  { id: "mosul", name: { en: "Mosul, Iraq", ar: "الموصل، العراق" }, lat: 36.3489, lng: 43.1189, note: { en: "Municipal dashboard demo for Shuaa Al-Iraq", ar: "عرض لوحة بيانات بلدية لشعاع العراق" } },
  { id: "iraq-regions", name: { en: "Iraq", ar: "العراق" }, lat: 33.2232, lng: 43.6793, note: { en: "Encroachment monitoring & Tigris hydrology", ar: "رصد التعديات وتحليل نهر دجلة" } },
  { id: "tigris", name: { en: "Tigris River, Iraq", ar: "نهر دجلة، العراق" }, lat: 34.85, lng: 43.5, note: { en: "Hydrological analysis", ar: "تحليل هيدرولوجي" } },
  { id: "riyadh", name: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" }, lat: 24.7136, lng: 46.6753, note: { en: "RTM project, GIS agency map, airport crisis planning", ar: "مشروع RTM، خريطة شركات GIS، تخطيط أزمات المطار" } },
  { id: "jeddah", name: { en: "Jeddah, Saudi Arabia", ar: "جدة، السعودية" }, lat: 21.4858, lng: 39.1925, note: { en: "Crisis management, King Abdulaziz Airport", ar: "إدارة الأزمات، مطار الملك عبدالعزيز" } },
  { id: "medina", name: { en: "Medina, Saudi Arabia", ar: "المدينة المنورة، السعودية" }, lat: 24.5247, lng: 39.5692, note: { en: "Health-sector crisis app; disability services quality-of-life study", ar: "تطبيق صحي لمركز إدارة الأزمات؛ ودراسة جودة حياة لذوي الإعاقة" } },
  { id: "makkah", name: { en: "Makkah, Saudi Arabia", ar: "مكة المكرمة، السعودية" }, lat: 21.3891, lng: 39.8579, note: { en: "Slope & rockfall risk assessment — Al-Mashaer Al-Muqaddasah", ar: "تقييم مخاطر المنحدرات والانهيارات الصخرية بالمشاعر المقدسة" } },
  { id: "aula", name: { en: "Al-Ula, Saudi Arabia", ar: "العُلا، السعودية" }, lat: 26.6084, lng: 37.9184, note: { en: "Tourism application", ar: "تطبيق سياحي" } },
  { id: "asir", name: { en: "Asir, Saudi Arabia", ar: "عسير، السعودية" }, lat: 18.2164, lng: 42.5053, note: { en: "Student welfare mapping for the Ministry of Education", ar: "خريطة رعاية طلابية لوزارة التعليم" } },
  { id: "albaha", name: { en: "Al Baha, Saudi Arabia", ar: "الباحة، السعودية" }, lat: 20.0129, lng: 41.4677, note: { en: "Regional development site", ar: "موقع تطوير إقليمي" } },
  { id: "gulf", name: { en: "Arabian Gulf", ar: "الخليج العربي" }, lat: 26.5, lng: 51.5, note: { en: "Oil spill monitoring via remote sensing", ar: "رصد التسربات النفطية بالاستشعار عن بعد" } },
  { id: "tunis", name: { en: "Tunis, Tunisia", ar: "تونس، تونس" }, lat: 36.8065, lng: 10.1815, note: { en: "Business relationships & market outreach", ar: "علاقات عمل وتوسع في السوق" } },
  { id: "khartoum", name: { en: "Khartoum, Sudan", ar: "الخرطوم، السودان" }, lat: 15.5007, lng: 32.5599, note: { en: "Business relationships & market outreach", ar: "علاقات عمل وتوسع في السوق" } },
  { id: "bagcilar", name: { en: "Bağcılar, Turkey", ar: "باغجيلار، تركيا" }, lat: 41.0351, lng: 28.8575, note: { en: "Green area distribution analysis", ar: "تحليل توزيع المساحات الخضراء" } },
  { id: "texas", name: { en: "Texas, USA", ar: "تكساس، الولايات المتحدة" }, lat: 31.9686, lng: -99.9018, note: { en: "Effective rainfall & irrigation analysis", ar: "تحليل الأمطار الفعالة والري" } },
  { id: "twente", name: { en: "East Twente, Netherlands", ar: "إيست تفينته، هولندا" }, lat: 52.25, lng: 6.9167, note: { en: "Wind turbine site suitability", ar: "ملاءمة مواقع توربينات الرياح" } },
  { id: "capital", name: { en: "New Administrative Capital, Egypt", ar: "العاصمة الإدارية الجديدة، مصر" }, lat: 30.0074, lng: 31.7043, note: { en: "Transport company web mapping — ITI GIS graduation project (2023)", ar: "خرائط ويب لشركة نقل — مشروع تخرج GIS في ITI (2023)" } },
  { id: "alexandria", name: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" }, lat: 31.2001, lng: 29.9187, note: { en: "Quality of life graduation project", ar: "مشروع تخرج عن جودة الحياة" } },
];
