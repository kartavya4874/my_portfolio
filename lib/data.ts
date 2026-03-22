export const heroData = {
  name: "Kartavya Baluja",
  tagline: "AI/ML Engineer & Python Developer",
  subheading: "Building intelligent systems with LLMs, RAG, and Deep Learning",
  cta_primary: "View Projects",
  cta_secondary: "Download Resume",
};

export const aboutData = {
  bio: "I am an AI/ML Engineer and Python Developer passionate about building intelligent systems that solve real-world problems. Currently working as an AI Engineer at Geeta Technical Hub, I specialize in LLM-powered applications, RAG workflows, Agentic AI, and deep learning pipelines.",
  photo_url: "/kartavya1.jpg", // Profile image
};


export const statsData = [
  { id: 1, label: "Certifications", value: "6+" },
  { id: 2, label: "Projects", value: "13+" },
  { id: 3, label: "Publications", value: "1" },
  { id: 4, label: "Grad Year", value: "2026" },
];

export const skillsData = [
  { id: 1, category: "Core Python Skills", label: "Python" },
  { id: 2, category: "Core Python Skills", label: "Pandas" },
  { id: 3, category: "Core Python Skills", label: "NumPy" },
  { id: 4, category: "Core Python Skills", label: "scikit-learn" },
  { id: 5, category: "Core Python Skills", label: "TensorFlow" },
  { id: 6, category: "Core Python Skills", label: "Keras" },
  { id: 7, category: "Web Frameworks", label: "FastAPI" },
  { id: 8, category: "Web Frameworks", label: "Flask" },
  { id: 9, category: "Web Frameworks", label: "Django (knowledge)" },
  { id: 10, category: "AI/ML Technologies", label: "Large Language Models (LLMs)" },
  { id: 11, category: "AI/ML Technologies", label: "RAG" },
  { id: 12, category: "AI/ML Technologies", label: "Agentic AI" },
  { id: 13, category: "AI/ML Technologies", label: "NLP" },
  { id: 14, category: "AI/ML Technologies", label: "Deep Learning" },
  { id: 15, category: "Data & Visualization", label: "Data Cleaning" },
  { id: 16, category: "Data & Visualization", label: "Data Pipelines" },
  { id: 17, category: "Data & Visualization", label: "Matplotlib" },
  { id: 18, category: "Data & Visualization", label: "Seaborn" },
  { id: 19, category: "Data & Visualization", label: "Statistical Analysis" },
  { id: 20, category: "Databases & APIs", label: "Oracle AI Vector Search" },
  { id: 21, category: "Databases & APIs", label: "Neo4j" },
  { id: 22, category: "Databases & APIs", label: "REST APIs" },
  { id: 23, category: "Databases & APIs", label: "SQL" },
  { id: 24, category: "Development Tools", label: "Git" },
  { id: 25, category: "Development Tools", label: "GitHub" },
  { id: 26, category: "Development Tools", label: "Jupyter Notebooks" },
  { id: 27, category: "Development Tools", label: "Google Colab" },
  { id: 28, category: "Development Tools", label: "Linux" },
  { id: 29, category: "Cloud Platforms", label: "Azure AI" },
  { id: 30, category: "Cloud Platforms", label: "Oracle Cloud Infrastructure (OCI)" },
  { id: 31, category: "Cloud Platforms", label: "AWS (basic)" },
  { id: 32, category: "Cloud Platforms", label: "GCP (basic)" },
  { id: 33, category: "AI Platforms", label: "Hugging Face" },
  { id: 34, category: "AI Platforms", label: "IBM Watson" },
  { id: 35, category: "AI Platforms", label: "Streamlit" },
];

export const projectsData = [
  {
    id: 1, title: "AI Agent Platform – Multi-Modal LLM Application",
    description: "Production-ready AI platform integrating multiple Large Language Models for writing, coding, and content generation. Built FastAPI backend with REST API endpoints for seamless frontend-backend communication. Implemented data preprocessing and model orchestration workflows using Pandas and NumPy.",
    year: 2025, tech_stack: ["Python", "FastAPI", "Streamlit", "LLMs", "Pandas", "NumPy"],
    github_url: "https://github.com/kartavya4874", live_url: "", thumbnail_url: "", is_featured: true,
  },
  {
    id: 2, title: "Deep Learning Food Recognition System",
    description: "Preprocessed and cleaned Food-101 dataset using NumPy and Pandas for deep learning training. Built CNN architecture and fine-tuned InceptionV3 model using TensorFlow and Keras. Achieved high accuracy through hyperparameter optimization and performance analysis.",
    year: 2024, tech_stack: ["Python", "TensorFlow", "Keras", "CNN", "NumPy", "Pandas"],
    github_url: "https://github.com/kartavya4874", live_url: "", thumbnail_url: "", is_featured: false,
  },
  {
    id: 3, title: "Aashiyana – AI Chatroom with NLP Moderation",
    description: "Real-time chat application using Python and FastAPI with integrated NLP-based content filtering. Built data processing pipelines for message analysis and intelligent moderation using ML algorithms.",
    year: 2025, tech_stack: ["Python", "NLP", "FastAPI", "Git", "GitHub"],
    github_url: "https://github.com/kartavya4874", live_url: "", thumbnail_url: "", is_featured: false,
  },
];

export const experienceData = [
  {
    id: 1, role: "AI Engineer", company: "Geeta Technical Hub",
    location: "India", start_date: "2025-12-01", end_date: null, is_current: true,
    bullets: [
      "Working as an AI Engineer developing innovative solutions and technical models."
    ],
  },
  {
    id: 2, role: "ML & AI Intern", company: "White And Box – Tech Products & Services",
    location: "Bengaluru, Karnataka, India", start_date: "2025-06-01", end_date: "2025-12-01", is_current: false,
    bullets: [
      "Build and deploy LLM-powered AI solutions using Python frameworks, focusing on practical business applications",
      "Develop data pipelines for ML model training and inference using Pandas, NumPy, and TensorFlow",
      "Collaborate with cross-functional teams to integrate AI features into production environments via REST APIs",
      "Research and evaluate emerging AI trends including RAG workflows and Agentic AI implementations",
      "Clean and prepare large datasets for machine learning tasks, ensuring data quality and model performance",
    ],
  },
];

export const certificationsData = [
  { id: 1, title: "Microsoft Certified: Azure AI Engineer Associate", issuer: "Microsoft", year: 2025, credential_url: "", is_featured: true },
  { id: 2, title: "Oracle AI Vector Search Certified Professional", issuer: "Oracle", year: 2025, credential_url: "", is_featured: false },
  { id: 3, title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate", issuer: "Oracle", year: 2024, credential_url: "", is_featured: false },
  { id: 4, title: "Salesforce Certified AI Associate", issuer: "Salesforce", year: 2024, credential_url: "", is_featured: false },
  { id: 5, title: "Neo4j Certified Professional", issuer: "Neo4j", year: 2024, credential_url: "", is_featured: false },
  { id: 6, title: "Artificial Intelligence Primer Certification", issuer: "Infosys Springboard", year: 2024, credential_url: "", is_featured: false },
  { id: 7, title: "Google AI Professional", issuer: "Google", year: 2024, credential_url: "", is_featured: false },
];

export const educationData = [
  { id: 1, degree: "Bachelor of Technology in Computer Science", university: "Geeta University", location: "India", expected_date: "2026-08-01", status: "In Progress" },
  { id: 2, degree: "Intermediate, Science", university: "LCRT public school", location: "India", expected_date: "March 2021 - March 2022", status: "Completed" },
];

export const publicationData = {
  id: 1, title: "Bridging the Accuracy-Explainability Gap: A Survey of Interpretable ML Techniques",
  journal: "Anveshan: Multidisciplinary Journal of Geeta University",
  volume: "2", issue: "1", pages: "13–26", year: 2024, url: "",
  tags: ["Interpretable ML", "Survey", "Explainability", "Deep Learning"],
};

export const contactData = {
  email: "kartavyabaluja453@gmail.com", phone: "07988467579",
  linkedin_url: "https://linkedin.com/in/kartavya-baluja-214ba1256",
  github_url: "https://github.com/kartavya4874",
  footer_tagline: "Kartavya Baluja © 2025 · Built with Python, passion & caffeine",
};

export const liveLinksData = [
  {
    id: 1,
    title: "Assessment Platform",
    description: "A comprehensive online assessment and examination platform for students and educators at Geeta University. Features automated grading, real-time results, and detailed performance analytics.",
    url: "https://assessments.kartavyabaluja.in/",
    tech_stack: ["Python", "FastAPI", "React", "AI/ML"],
  },
];
