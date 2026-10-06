const cvData = {
  "name": "Amanuel Tito",
  "role": "Senior Full-Stack Engineer",

  "contact": [
    { "label": "Phone", "text": "+251 939 977 886", "link": "tel:+251939977886" },
    { "label": "Email", "text": "emantweb@gmail.com", "link": "mailto:emantweb@gmail.com" },
    { "label": "LinkedIn", "text": "linkedin.com/in/emantggw", "link": "https://linkedin.com/in/emantggw" },
    { "label": "GitHub", "text": "github.com/emantggw", "link": "https://github.com/emantggw" },
    { "label": "Location", "text": "Kazanchis, Addis Ababa, Ethiopia", "link": null }
  ],

  "skills": [
    { "group": "Backend Architecture", "items": ["NestJS", "Node.js", "TypeScript", "Clean Architecture", "REST API Design", "JWT / OAuth", "WebSockets"] },
    { "group": "Data Platforms", "items": ["Firebase / Firestore", "Supabase", "PostgreSQL", "Redis", "Data Modeling", "Caching"] },
    { "group": "Infrastructure & Delivery", "items": ["Bull / BullMQ", "Docker", "Ubuntu VPS", "CI/CD", "Automated Testing", "Code Review"] },
    { "group": "Python & Automation", "items": ["Python", "Flask", "Telegraf", "Telegram Bot API", "MTProto", "SVM / BERT"] },
    { "group": "Web & Mobile", "items": ["Flutter", "Dart", "Flutter Web", "Next.js (Intermediate)"] }
  ],

  "packages": [
    { "name": "WoHttp", "link": "https://pub.dev/packages/wo_http" },
    { "name": "AnimatedMilestone", "link": "https://pub.dev/packages/animated_milestone" },
    { "name": "ConfirmationSuccess", "link": "https://pub.dev/packages/confirmation_success" }
  ],

  "education": {
    "degree": "Bachelor of Computer Science",
    "school": "Arba Minch University Institute of Technology",
    "meta": "Graduated Oct 2021 · <b>CGPA 3.86 / 4.00</b>"
  },

  "certifications": [
    { "name": "Software Architecture & System Design Course", "date": "Sep 2026" },
    { "name": "Understanding Agentic AI", "date": "Jun 2026" },
    { "name": "Huawei Innovation Competition Award", "date": "Aug 2021" },
    { "name": "CISCO Intro to Cybersecurity", "date": "Jan 2020" }
  ],

  "languages": [
    { "name": "Amharic", "level": "Native" },
    { "name": "English", "level": "Proficient" }
  ],
  "summary": "Senior full-stack engineer focused on architecting backend systems with NestJS, Firebase, Supabase and Redis. Designs modular APIs, data models, background job pipelines and real-time services for financial and commerce applications. Built Asayew's advertising platform and Josad's job aggregation backend, serving 15k+ Telegram members.",

  "experience": [
    {
      "title": "Senior Mobile App Developer",
      "company": "Kacha DFS",
      "companyLink": "https://kacha.et/",
      "dates": "Jan 2026 - Present",
      "location": "Addis Ababa",
      "bullets": [
        "Develop IFB financing and partner-bank wallet applications, integrating mobile clients with financial-provider APIs.",
        "Maintain Kacha's digital wallet and payment platform serving thousands of users."
      ]
    },
    {
      "title": "Mobile App Section Head",
      "company": "Red-Cloud ICT Solutions",
      "companyLink": null,
      "dates": "Mar 2022 - Jan 2026",
      "location": null,
      "bullets": [
        "Designed NestJS APIs for HuluBeje, covering order processing, real-time seat management and delivery dispatch.",
        "Led the mobile division, setting architecture standards, reviewing code and mentoring developers.",
        "Built CNDroid Mobile POS with ERP integration and receipt printing for merchants."
      ]
    }
  ],

  "projects": [
    {
      "name": "Asayew | Telegram Advertising Marketplace",
      "desc": "Architected a modular NestJS platform connecting advertisers and Telegram channel owners, with transactional wallet purchases, Redis caching and Bull jobs for automated publishing, pin scheduling and expiry. Built role-based Next.js dashboards in English and Amharic.",
      "stack": "NestJS · Firebase / Firestore · Redis · Bull · Telegraf · Next.js",
      "links": [
        { "label": "asayew.com", "url": "https://asayew.com" },
        { "label": "Telegram Bot", "url": "https://t.me/asayew_bot" }
      ]
    },
    {
      "name": "Josad | AI-Powered Job Discovery & Recruitment",
      "desc": "Architected a modular NestJS platform serving a 15k+ Telegram community, with independent job ingestion and Python classification services. Supports employer posting, application tracking and candidate shortlisting through Next.js portals and Telegram bots.",
      "stack": "NestJS · Python · Firestore · Redis · Bull · Next.js",
      "links": [
        { "label": "josad.net", "url": "https://josad.net" },
        { "label": "Telegram Community", "url": "https://t.me/josad_software" }
      ]
    },
    {
      "name": "Dispatcher API",
      "desc": "Order lifecycle and dispatch engine matching HuluBeje orders to eligible drivers, from placement through delivery and review.",
      "stack": "NestJS · Supabase · Redis",
      "links": []
    },
    {
      "name": "Red Cache",
      "desc": "Real-time seat management, movie notifications and weekly chart reports connecting HuluBeje with Cinema ERP POS.",
      "stack": "NestJS · Redis",
      "links": []
    },
    {
      "name": "HuluBeje Super App",
      "desc": "Commerce super app with 10k+ downloads, backed by NestJS and Redis for ordering and real-time data.",
      "stack": "Flutter · Firebase · NestJS · Redis · .NET Core",
      "links": [
        { "label": "Google Play", "url": "https://play.google.com/store/apps/details?id=com.cnetsoftwares.cnetpay_client&hl=en&gl=US" }
      ]
    }
  ],

  "moreWork": { "text": "More work on", "linkText": "github.com/emantggw", "link": "https://github.com/emantggw" }
};
