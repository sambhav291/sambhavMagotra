export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  link?: string;
  github?: string;
  image?: string;
  impact?: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    id: "investimate",
    title: "Investimate.ai",
    description:
      "Built an AI-powered equity research report generator that aggregates 3 data sources and outputs investor-ready PDFs, reducing research time by 85–90%.",
    stack: [
      "React",
      "Vite",
      "FastAPI",
      "PostgreSQL",
      "Google OAuth2",
      "Azure",
      "Docker",
      "Supabase",
      "Tailwind CSS",
    ],
    features: [
      "Designed a secure FastAPI (Python, AsyncIO) backend with JWT + Google OAuth2 and 6+ REST endpoints, using Supabase (PostgreSQL + Storage)",
      "Implemented a resilient data pipeline with web scraping (BeautifulSoup, Selenium), NLP preprocessing, and token-aware LLM summarization",
      "Developed a responsive React + Vite + Tailwind UI with auth flows, job polling, and report library",
      "Improved task completion by 40% and deployed via Docker, Azure App Service (Bicep IaC), and Vercel",
    ],
    link: "https://investimate-ai-eight.vercel.app/",
    github: "https://github.com/sambhav291/Investimate.ai",
    color: "#10b981",
    impact: "85-90% time reduction",
    image: "/projects/investimate.png",
  },
  {
    id: "quickvid",
    title: "QuickVid",
    description:
      "Developed a scalable AI-powered YouTube summarizer as a web app and Chrome extension, handling transcripts >20k characters using chunking + Gemini AI.",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "JWT",
      "Supabase",
      "PostgreSQL",
      "Python",
      "yt-dlp",
    ],
    features: [
      "Built a NestJS + Supabase backend with secure JWT authentication and optimized PostgreSQL queries",
      "Automated transcript extraction via yt-dlp and Python, cutting manual effort by 90%",
      "Delivered low-latency summaries with a modern React/Next.js UI",
      "Available as both web application and Chrome extension",
    ],
    link: "https://quick-vid-two.vercel.app/",
    github: "https://github.com/sambhav291/QuickVid",
    color: "#0ea5e9",
    impact: "90% effort reduction",
    image: "/projects/quickvid.png",
  },
  {
    id: "bookery",
    title: "Bookery",
    description:
      "Engineered the full-stack infrastructure for a collaborative AI project, developing a Flask RESTful API to deploy a k-NN machine learning model trained on over 1.1 million book ratings.",
    stack: ["React", "Python", "Flask", "Machine Learning", "k-NN"],
    features: [
      "Built a dynamic and responsive frontend with React, creating an intuitive interface for users",
      "Real-time recommendations from a library of over 270,000 books",
      "Deployed Flask RESTful API with k-NN ML model",
      "Collaborative filtering system for personalized book suggestions",
    ],
    link: "https://bookster-53qm.onrender.com",
    github: "https://github.com/sambhav291/Book-Recommendation-System",
    color: "#a855f7",
    impact: "1.1M+ ratings analyzed",
    image: "/projects/bookery.png",
  },
  {
    id: "phonepe-integration",
    title: "PhonePe Payment Integration",
    description:
      "Developed and deployed a production-ready PhonePe payment gateway integration for Candle Yogi, enabling secure UPI transactions and real-time payment status tracking.",
    stack: [
      "NestJS",
      "TypeScript",
      "PhonePe API",
      "PostgreSQL",
      "Azure",
      "REST APIs",
    ],
    features: [
      "Integrated PhonePe payment gateway with secure API authentication and webhook handling",
      "Built transaction management system with real-time status updates and payment verification",
      "Implemented error handling and retry mechanisms for failed transactions",
      "Successfully deployed to production handling live UPI payments",
    ],
    color: "#f59e0b",
    impact: "Production deployment",
    image: "/projects/phonepe.png",
  },
];

export default PROJECTS;