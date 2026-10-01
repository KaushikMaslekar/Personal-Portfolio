export const techStack = [
  "Java",
  "Python",
  "Spring Boot",
  "Apache Kafka",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Prometheus",
  "Grafana",
  "LangChain",
  "Elasticsearch",
  "Git",
  "Linux",
] as const;

export const backendSkills = [
  "Java",
  "Python",
  "C++",
  "Spring Boot",
  "REST APIs",
  "Microservices",
  "Kafka",
  "Redis",
  "Event-Driven Architecture",
  "Multithreading",
  "Load Balancing",
  "RAG",
  "LangChain",
] as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "C++",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    items: [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Kafka",
      "Redis",
      "Event-Driven Architecture",
      "Multithreading",
      "Load Balancing",
    ],
  },
  {
    title: "AI/ML",
    items: [
      "Machine Learning",
      "LLM",
      "Neural Networks",
      "RAG",
      "LangChain",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Testing & Observability",
    items: [
      "JUnit",
      "Mockito",
      "Postman",
      "Prometheus",
      "Grafana",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string;
};

export type FeaturedExperience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  githubUrl: string;
};

export const featuredExperiences: FeaturedExperience[] = [
  {
    role: "AI/ML Intern",
    company: "YBI Foundation",
    period: "Feb 2026 - May 2026",
    summary:
      "Built a document-grounded question-answering application using Python and LangChain, with a focus on retrieval quality across large document collections.",
    contributions: [
      "Developed a Retrieval-Augmented Generation (RAG) application for document-grounded question answering over large document collections.",
      "Implemented document chunking, embedding generation, and semantic retrieval to improve retrieval relevance and answer quality.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "RAG",
    ],
    githubUrl:
      "https://github.com/kaushikkishormaslekar/rag-end-to-end-pipeline",
  },
];

export const education = {
  degree: "B.E. in Artificial Intelligence and Data Science (Pursuing)",
  institution: "Marathawada Mitra Mandal's College of Engineering, Pune",
  period: "Aug 2024 - Present · Expected Graduation: 2027 · CGPA: 8.6/10",
};

export const educationEntries = [education] as const;
