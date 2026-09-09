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
    { "group": "Backend", "items": ["NestJS", "Node.js", "Express", "TypeScript", "REST API Design", "JWT / OAuth", "BullMQ Queues", "WebSockets"] },
    { "group": "Python & Bots", "items": ["Python", "Flask", "Telegram Bot API", "Telegraf", "MTProto Scraping", "SVM / BERT Job Classification"] },
    { "group": "Data & Infrastructure", "items": ["PostgreSQL", "Supabase", "Firestore", "Redis", "Docker", "PM2", "Ubuntu VPS", "CI / CD"] },
    { "group": "Frontend & Mobile", "items": ["Flutter", "Dart", "Flutter Web", "Riverpod", "Clean Architecture"] },
    { "group": "AI-Accelerated Delivery", "items": ["AI Agents", "AI-Assisted Scaffolding", "Agentic Code Review", "Automated Testing"] }
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
  "summary": "Senior full-stack engineer who designs and ships production systems across the stack: NestJS and Python backends, Telegram bots, job pipelines, and Flutter clients. Founded Josad, an AI-powered job aggregator serving 15k+ Telegram members through four bots, a machine-learning classifier, and a modular NestJS API. Experienced with FinTech wallets at Kacha and large e-commerce backends at Red-Cloud, always applying AI-accelerated delivery and clean architecture to go from idea to production fast.",

  "experience": [
    {
      "title": "Senior Mobile App Developer",
      "company": "Kacha DFS",
      "companyLink": "https://kacha.et/",
      "dates": "Jan 2026 - Present",
      "location": "Addis Ababa",
      "bullets": [
        "Building the IFB financing app and partner bank wallet apps, integrating with backend services for multiple financial providers",
        "Maintaining the Kacha digital wallet and payment platform with thousands of daily users in an agile delivery model"
      ]
    },
    {
      "title": "Mobile App Section Head",
      "company": "Red-Cloud ICT Solutions",
      "companyLink": null,
      "dates": "Mar 2022 - Jan 2026",
      "location": null,
      "bullets": [
        "Designed backend APIs in NestJS for the HuluBeje super app: order processing, real-time seat management, and dispatch for delivery",
        "Led the mobile division, setting architecture standards and mentoring developers across the product line",
        "Built CNDroid Mobile POS with embedded ERP integration serving merchants"
      ]
    }
  ],

  "projects": [
    {
      "name": "Josad: Job Aggregator Platform",
      "desc": "AI-powered job aggregation for Ethiopia's tech market, serving 15k+ Telegram members. Scrapes jobs from channels and job boards, classifies them with ML, and dispatches to topic channels. Includes 4 Telegram bots for employers, applicants, KYC and admin workflows, and an employer portal built as a Flutter Web Telegram Mini App.",
      "stack": "NestJS · Telegram Bot API · MTProto · Python (SVM + BERT) · Firestore · Redis · BullMQ",
      "links": [
        { "label": "Telegram Channel (15k+) ", "url": "https://t.me/josad_software" },
        { "label": "Platform", "url": "https://josad.io" }
      ]
    },
    {
      "name": "Dispatcher API",
      "desc": "Order management engine for HuluBeje: processes, evaluates and dispatches orders to eligible drivers, and handles the full order lifecycle from initiation through delivery and review.",
      "stack": "NestJS · Supabase · Redis",
      "links": []
    },
    {
      "name": "Red Cache",
      "desc": "Real-time seat management engine and trending movie notifier, plus weekly movie chart report generator, integrated with the HuluBeje mobile app and Cinema ERP POS system.",
      "stack": "NestJS · Redis",
      "links": []
    },
    {
      "name": "HuluBeje Super App",
      "desc": "Full-featured e-commerce super app with 10k+ downloads, and the NestJS + Redis backend powering orders and real-time data.",
      "stack": "Flutter · Firebase · NestJS · Redis · .NET Core",
      "links": [
        { "label": "Google Play", "url": "https://play.google.com/store/apps/details?id=com.cnetsoftwares.cnetpay_client&hl=en&gl=US" }
      ]
    }
  ],

  "moreWork": { "text": "More work on", "linkText": "github.com/emantggw", "link": "https://github.com/emantggw" }
};
