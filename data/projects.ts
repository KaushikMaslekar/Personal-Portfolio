export type Project = {
  slug: string;
  title: string;
  summary: string;
  problemSolved: string;
  architecture: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
  engineeringChallenges?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "payment-processing-system",
    title: "Payment Processing System",
    summary:
      "Production-grade payment backend handling high-volume transactions with idempotency guarantees, distributed retry logic, and real-time audit trails.",
    problemSolved:
      "Implements exactly-once payment processing semantics using idempotency keys and distributed transactions. Ensures no duplicate charges under retry storms and maintains consistency across service failures.",
    architecture:
      "REST API → Spring Boot Gateway → Kafka event stream → Payment Service (idempotency layer) → PostgreSQL (transactional state) + Redis (cache + duplicate detection). Ledger Service subscribes to events for accounting. Dead-letter queue handles failed transactions.",
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "Idempotency under retry storms",
      "Exactly-once processing semantics",
      "Distributed transaction coordination",
      "Dead-letter queue handling",
      "Audit trail immutability",
    ],
  },
  {
    slug: "kafka-event-processing-platform",
    title: "Kafka Event Processing Platform",
    summary:
      "Distributed event streaming platform processing millions of events daily with strict ordering guarantees, exactly-once delivery semantics, and multi-consumer scalability.",
    problemSolved:
      "Decouples services while maintaining ordering guarantees per partition. Handles backpressure, consumer lag monitoring, and replay scenarios for event reprocessing.",
    architecture:
      "Event Producers → Kafka Topic (partitioned by key) → Consumer Groups (horizontal scaling) → PostgreSQL + MongoDB (dual writes) → Kafka Streams (stateful processing) → Prometheus (metrics collection). Topics replicated across 3 brokers for durability.",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Prometheus",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "Exactly-once delivery semantics",
      "Event ordering per partition",
      "Consumer lag monitoring",
      "Backpressure handling",
      "Rebalancing without data loss",
    ],
  },
  {
    slug: "aws-multi-tier-infrastructure-project",
    title: "AWS Multi-Tier Infrastructure as Code",
    summary:
      "Production-grade cloud infrastructure using Terraform for VPC segmentation, load balancing, database high availability, and multi-region failover.",
    problemSolved:
      "Replaces manual infrastructure with version-controlled IaC. Enables repeatable deployments, disaster recovery planning, and cost optimization through resource automation.",
    architecture:
      "Internet → ALB (public) → Auto Scaling Group (public subnets) → Spring Boot Services → Private RDS PostgreSQL (multi-AZ) + Redis Cluster (ElastiCache). Route 53 for health checks and failover. CloudWatch + VPC Flow Logs for observability.",
    technologies: [
      "AWS",
      "Terraform",
      "EC2",
      "RDS",
      "VPC",
      "IAM",
      "CloudWatch",
      "Route 53",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "Multi-AZ high availability",
      "Security group management at scale",
      "VPC peering and routing",
      "Database failover automation",
      "Cost optimization and right-sizing",
    ],
  },
  {
    slug: "enterprise-rag-platform",
    title: "Enterprise RAG Platform",
    summary:
      "Scalable Retrieval-Augmented Generation system processing enterprise documents with hybrid search (semantic + keyword), reranking, and citation tracking.",
    problemSolved:
      "Reduces LLM hallucinations by grounding responses in indexed documents. Hybrid search improves recall while reranking improves precision. Citation tracking enables audit trails for enterprise compliance.",
    architecture:
      "Document Upload → Chunking Pipeline (sentence-window strategy) → Dual Embedding (OpenAI + local model) → Vector DB (Pinecone) + BM25 index (Elasticsearch) → Hybrid Retrieval → Reranker (cross-encoder) → LLM Orchestration (LangChain) → Response with Citations.",
    technologies: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "Elasticsearch",
      "FastAPI",
      "Redis",
      "Docker",
    ],
    githubUrl:
      "https://github.com/kaushikkishormaslekar/rag-end-to-end-pipeline",
    featured: true,
    engineeringChallenges: [
      "Chunk size and overlap optimization",
      "Hybrid search trade-offs",
      "Semantic vs keyword recall balancing",
      "Citation accuracy and tracking",
      "Scaling retrieval latency",
    ],
  },
  {
    slug: "cloud-native-iot-telemetry-monitoring",
    title: "Cloud-Native IoT Telemetry & Monitoring Platform",
    summary:
      "Scalable IoT monitoring platform ingesting telemetry from thousands of devices with real-time alerting, SLA tracking, and time-series analytics.",
    problemSolved:
      "Handles high-cardinality metrics from distributed IoT devices. Real-time alerting based on anomaly detection prevents service degradation. SLA reporting enables accountability.",
    architecture:
      "MQTT Broker ← Devices | REST API ← Devices → Time-Series DB (InfluxDB/TimescaleDB) + Event Stream (Kafka) → Prometheus scraper → Grafana dashboards. Alert Manager triggers incident workflows. Historical data archived to S3.",
    technologies: [
      "Spring Boot",
      "Python",
      "MQTT",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Prometheus",
      "Grafana",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "High-cardinality metric handling",
      "Real-time anomaly detection",
      "Metric cardinality explosion prevention",
      "MQTT connection pooling",
      "Time-series data retention and archival",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
