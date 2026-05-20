export const techStack = [
  "Java",
  "Python",
  "Spring Boot",
  "AWS",
  "Docker",
  "Kubernetes",
  "Kafka",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Linux",
  "Git",
  "Terraform",
  "Next.js",
  "Firebase",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "LangChain",
  "MLflow",
  "Apache Spark",
  "Pandas",
  "NumPy",
  "Prometheus",
] as const;

export const backendSkills = [
  "REST API Design",
  "Microservices",
  "Event-Driven Architecture",
  "Distributed Systems",
  "Cloud Infrastructure",
  "CI/CD Pipelines",
  "Performance Optimization",
  "System Observability",
  "RAG Pipelines",
  "Vector Search Integration",
  "Model Deployment",
  "MLOps Workflows",
  "Real-time Data Processing",
  "IoT Data Ingestion",
  "Prompt Engineering",
  "ETL and Data Pipelines",
] as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Cloud",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    title: "Data & Persistence",
    items: ["JPA", "Hibernate", "JDBC", "Solr"],
  },
  {
    title: "Databases",
    items: ["OracleDB", "MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Distributed Systems",
    items: [
      "Kafka",
      "Redis",
      "Hazelcast",
      "Reactive Streams (Mono/Flux)",
      "Resilience4j",
      "Multithreading",
    ],
  },
  {
    title: "DevOps & Monitoring",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Jenkins CI/CD",
      "Git",
      "Prometheus",
      "Grafana",
      "Datadog",
    ],
  },
  {
    title: "Testing & Tools",
    items: [
      "JUnit",
      "Mockito",
      "Maven",
      "Gradle",
      "Postman",
      "Swagger",
      "IntelliJ IDEA",
      "VS Code",
    ],
  },
  {
    title: "AI & Deep Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "CNNs",
      "RNN/LSTM",
      "Attention Mechanisms",
      "Transformer Architecture",
    ],
  },
  {
    title: "LLM Engineering",
    items: [
      "RAG",
      "LangChain",
      "LlamaIndex",
      "Vector Databases (FAISS, Pinecone, Chroma)",
      "Prompt Engineering",
    ],
  },
  {
    title: "MLOps",
    items: [
      "MLflow",
      "Experiment Tracking",
      "Model Versioning",
      "Kubeflow",
      "Docker",
      "Kubernetes",
      "CI/CD for ML Pipelines",
    ],
  },
  {
    title: "Data Processing",
    items: ["Pandas", "NumPy", "Apache Spark", "Kafka"],
  },
  {
    title: "Programming",
    items: ["Python", "SQL", "Java"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: "Network Engineer Intern",
    company: "Shri Software Technologies",
    period: "Nov 2023 - Feb 2024",
    details:
      "Configured and monitored enterprise network infrastructure, collaborated on design tasks, and analyzed traffic patterns to maintain reliable system performance.",
  },
  {
    role: "Java Development Intern",
    company: "Shri Software Technologies",
    period: "Jul 2023 - Oct 2023",
    details:
      "Worked on REST APIs and microservices while contributing to backend feature delivery and research-driven architecture improvements.",
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Marathwada Mitra Mandal's College of Engineering, Pune",
  period: "Aug 2024 - Present",
};
