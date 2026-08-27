export const portfolioData = {
  personal: {
    name: "Aashutosh",
    avatar: "/avatar.png",
    tagline: "AI/ML + Full Stack — building production-ready systems and shipping real products.",
    bio: "I'm an AI/ML and Full Stack Developer currently pursuing B.Tech in Computer Science (AI) at ABES Institute of Technology. I've built and shipped RAG pipelines, agentic AI systems, and full-stack apps across startups and open source —  a finance app with 500+ Play Store downloads. I've won 4 hackathons, contributed 27+ merged PRs in GSSoC, and love taking ideas from architecture to production.",
    resumeUrl: "https://www.aashutoshkumarbhardwaj.xyz/",
  },
  socials: {
    github: "https://github.com/aashutoshkumarbhardwaj",
    linkedin: "https://www.linkedin.com/in/aashutoshkumarbhardwaj/",
    x: "https://x.com/ashutoshpande_y",
    email: "mailto:ashutoshkumarbahrdwaj7@gmail.com?subject=Let's Collaborate",
    leetcode: "https://leetcode.com/u/aashutoshkumarbhardwaj/",
    blogurl: "https://medium.com/@aashutoshkumarbhardwaj"
  },
  work: [
    {
      company: "Upwork",
      logoLetter: "U",
      image: "/upwork.png",
      logoColor: "bg-green-600",
      role: "Freelance Web Developer",
      badge: "Freelance",
      period: "2024 - 2025",
      link: "https://www.upwork.com/",
      description: "Delivered web development projects for international clients over 1 year — including landing pages, UI implementations, and full-stack features. Managed end-to-end client communication, requirements gathering, and independent delivery."
    },
    // {
    //   company: "StudX",
    //   logoLetter: "S",
    //   image:"/startup.jpeg",
    //   logoColor: "bg-violet-600",
    //   role: "Full Stack AI Engineer",
    //   badge: "Contract",
    //   period: "2025",
    //   link: "#",
    //   description: "Solely designed and developed an Adaptive Learning System for an early-stage startup. Built the full ML pipeline using RandomForest for performance prediction and a DQN agent for personalized content sequencing, backed by FastAPI and PostgreSQL."
    // },

    {
      company: "Gullak",
      logoLetter: "G",
      logoColor: "bg-amber-500",
      image: "/gullakai.webp",
      role: "Mobile App Developer",
      badge: "Internship · Equity",
      period: "Jan 2026 - April 2026",
      link: "https://play.google.com/store/apps/details?id=com.praveenbhardwaj.gullakai",
      description: "Built the Gullak AI finance management app as an equity-based intern — developed the full Flutter APK with LangChain-powered conversational budgeting, expense tracking, and financial insights. Shipped to Play Store with 500+ downloads."
    },
    {
      company: "Decimal Life",
      logoLetter: "D",
      logoColor: "bg-sky-600",
      image: "/decimallife.png",
      role: "AI Engineer — MCP & Automation",
      badge: "Contract",
      period: "April 2026 - July 2026",
      link: "#",
      description: "Built the complete MCP (Model Context Protocol) server from scratch — developing connectors, tools, and workflow automation to integrate AI agents with external services. Sole engineer responsible for architecture, implementation, and delivery."
    },
    {
      company: "Tattvera technology LLT",
      logoLetter: "T",
      logoColor: "bg-sky-600",
      image: "/tattvio_logo.jpeg",
      role: "AI/ML Engineer",
      badge: "Internship",
      period: "August 2026 - Present",
      link: "https://www.linkedin.com/company/tattvera/posts/?feedView=all",
      description: "Currently Working on Ai Agents and Backend System of a product (NDA)"
    },
  ],

  education: [
    {
      school: "ABES institute of technology",
      logoLetter: "A",
      logoColor: "bg-amber-600",
      images: "/abes.jpeg",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2023 - 2027",
      link: "https://abesit.edu/"
    }
  ],
  skills: [
    "Python", "FastAPI", "LangChain", "LangGraph", "RAG Pipelines",
    "React", "Next.js", "TypeScript", "Node.js", "Docker", "AWS",
    "PostgreSQL", "MongoDB", "ChromaDB", "FAISS", "Pinecone",
    "PyTorch", "scikit-learn", "HuggingFace", "Groq", "LLaMA",
    "C++", "REST APIs", "CI/CD", "Git"
  ],
  projects: [
    {
      title: "DeepSeaDNA AI",
      year: "2025",
      description: "Built a high-throughput AI pipeline processing 1M+ environmental DNA records/day for India's Ministry of Earth Sciences. Integrates LangChain, RAG, and ChromaDB for intelligent querying of marine biodiversity data with automated ingestion and real-time analytics.",
      image: "/deepseadnaai.png",
      tech: ["Python", "LangChain", "RAG", "ChromaDB", "FastAPI", "Docker", "AWS"],
      links: {
        source: "https://github.com/aashutoshkumarbhardwaj/deepseaednaai"
      }
    },
    {
      title: "Gullak AI",
      year: "2025",
      description: "AI-powered personal finance assistant with 500+ downloads on the Play Store. Features conversational budgeting, expense tracking, and financial insights using LLM-based reasoning. Helps users make smarter money decisions through natural language interaction.",
      image: "/gullakai.webp",
      tech: ["Python", "LangChain", "FastAPI", "Flutter", "PostgreSQL", "LLM"],
      links: {
        website: "https://play.google.com/store/apps/details?id=com.praveenbhardwaj.gullakai"
      }
    },
    {
      title: "AI Database Performance Advisor",
      year: "2025",
      description: "RAG-powered database optimization assistant that analyzes query patterns, identifies bottlenecks, and recommends performance improvements. Built with LangChain, FAISS, and an LLM backend — deployed as an interactive demo on HuggingFace Spaces.",
      image: "/databaseperformance.png",
      tech: ["Python", "LangChain", "FAISS", "FastAPI", "RAG", "PostgreSQL"],
      links: {
        website: "https://huggingface.co/spaces/aashutoshkumarbhardwaj/chatbot/tree/main"
      }
    },
    {
      title: "RAG Learning Assistant",
      year: "2025",
      description: "Retrieval-Augmented Generation-based study assistant that ingests course material and answers student queries with grounded, context-aware responses. Reduces hallucinations through document-level retrieval with semantic search and re-ranking.",
      image: "/rag.png",
      tech: ["Python", "LangChain", "HuggingFace", "ChromaDB", "FastAPI", "RAG"],
      links: {
        source: "https://github.com/aashutoshkumarbhardwaj"
      }
    },
    {
      title: "AI Powered Mandi",
      year: "2026",
      description: "Built an AI-driven agricultural marketplace connecting farmers directly with buyers through real-time mandi price intelligence, crop recommendations, and multilingual AI assistance. Features predictive price analytics, market trend forecasting, smart crop advisory, and automated buyer-seller matching. Designed to reduce middlemen dependency and enable data-driven selling decisions for farmers through an accessible digital platform.", // Inspired by modern AI-enabled mandi and agri-marketplace systems. :contentReference[oaicite:0]{index=0}
      image: "/ai-powered-mandi.png",
      tech: [
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Google Gemini API",
        "Machine Learning",
        "RAG",
        "Tailwind CSS"
      ],
      links: {
        website: "https://your-mandi-url.com",
        source: "https://github.com/aashutoshkumarbhardwaj/ai-powered-mandi"
      }
    },
    {
      title: "CreatorOs",
      year: "2026",
      description: "Built a collaborative creator operating system used by 40+ contributors. Streamlined content workflows, project management, analytics, and creator collaboration through a unified platform.",
      image: "/images.png",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
        "Tailwind CSS"
      ],
      links: {
        source: "https://github.com/aashutoshkumarbhardwaj/creatoros"
      }
    }
  ],
  collaboration: {
    badge: "Freelance & Collaboration",
    title: "Ready to Build Something Great?",
    description: "I'm available for freelance projects, consulting, and collaborations. Whether you need a Ai Native work, a full-stack application, or smart contract development, let's discuss how I can help bring your vision to life.",
    calUrl: "https://cal.com/aashutoshkumarbhardwaj/30min",
    emailMailto: "mailto:ashutoshkumarbhardwaj7@gmail.com?subject=Freelance Project Inquiry"
  }
};
