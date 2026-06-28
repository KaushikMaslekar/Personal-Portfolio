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
  "Microservices Architecture",
  "Event-Driven Systems",
  "Distributed Transaction Handling",
  "High-Performance APIs",
  "System Design & Scalability",
  "Cloud Infrastructure",
  "Observability & Monitoring",
  "Idempotent API Design",
  "Exactly-Once Processing",
  "Circuit Breakers & Resilience",
  "Infrastructure as Code",
  "Containerization",
  "RAG & Vector Search",
] as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Frameworks",
    items: [
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Microservices",
      "REST API Design",
      "API Gateways",
    ],
  },
  {
    title: "Distributed Systems",
    items: [
      "Apache Kafka",
      "Event Streaming",
      "Consumer Groups",
      "Exactly-Once Semantics",
      "Message Ordering",
      "Dead-Letter Queues",
    ],
  },
  {
    title: "Databases & Caching",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Data Modeling",
      "Connection Pooling",
      "Query Optimization",
      "Replication & Failover",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS (EC2, RDS, VPC, S3, Route 53)",
      "Terraform",
      "Infrastructure as Code",
      "Multi-AZ Architecture",
      "Auto Scaling",
      "Load Balancing",
      "Security Groups & IAM",
    ],
  },
  {
    title: "Observability & Monitoring",
    items: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "Distributed Tracing",
      "Structured Logging",
      "SLO/SLI Definition",
      "Alert Management",
    ],
  },
  {
    title: "Containerization & Orchestration",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Container Networking",
      "StatefulSets & DaemonSets",
      "Service Mesh Concepts",
    ],
  },
  {
    title: "AI & RAG (Secondary)",
    items: [
      "LangChain",
      "Vector Databases (FAISS, Pinecone)",
      "Hybrid Search (Semantic + BM25)",
      "Retrieval-Augmented Generation",
      "LLM Orchestration",
      "Prompt Engineering",
    ],
  },
  {
    title: "Development Tools",
    items: [
      "Maven",
      "Gradle",
      "Git",
      "JUnit",
      "Mockito",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
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
      "Worked on practical machine learning and LLM applications, focusing on data processing pipelines and Retrieval-Augmented Generation systems.",
    contributions: [
      "Built a Retrieval-Augmented Generation (RAG) application using Python and LangChain for document-grounded question answering.",
      "Developed document ingestion workflows including preprocessing, chunking, embedding generation, and semantic retrieval mechanisms.",
      "Automated feature engineering and statistical analysis pipelines using Python, Pandas, and NumPy.",
      "Improved retrieval quality through prompt engineering and evaluation of different retrieval strategies.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Pandas",
      "NumPy",
      "RAG",
      "LLM Applications",
    ],
    githubUrl:
      "https://github.com/kaushikkishormaslekar/rag-end-to-end-pipeline",
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Marathwada Mitra Mandal's College of Engineering, Pune",
  period: "Aug 2024 - Present",
};

export const educationEntries = [
  education,
  {
    degree: "Diploma in Computer Engineering",
    institution:
      "Krushnaji Purushottam Chousalkar Yogeshwari Polytechnic, Ambajogai",
    period: "June 2022 - April 2024",
  },
] as const;
