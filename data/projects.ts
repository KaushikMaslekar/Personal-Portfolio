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
    slug: "full-stack-rag-chat-platform",
    title: "Full-Stack RAG Chat Platform",
    summary:
      "Full-stack RAG chat application with a Next.js UI, Spring Boot API gateway (JWT auth, rate limiting), and FastAPI retrieval service communicating over SSE streaming.",
    problemSolved:
      "Eliminates hallucination in document question-answering through ChromaDB vector retrieval, page-aware chunking, cross-encoder reranking, and citation-grounded answer generation with automatic abstention on ungrounded queries.",
    architecture:
      "Next.js Frontend (SSE streaming) → Spring Boot Gateway (JWT Auth, Bucket4j Rate Limiting) → FastAPI Retrieval Service → ChromaDB Vector Store + Cross-Encoder Reranker → Citations & Grounded Generation.",
    technologies: [
      "Next.js",
      "Spring Boot",
      "FastAPI",
      "ChromaDB",
      "Python",
      "Docker",
      "SSE Streaming",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "ChromaDB retrieval pipeline with page-aware chunking and cross-encoder reranking",
      "Citation-grounded generation with 100% correct abstention on ungrounded queries",
      "Low-latency SSE streaming through a Spring Boot reactive gateway",
    ],
    metrics: [
      {
        label: "Recall@5",
        value: "83.3%",
      },
      {
        label: "MRR Score",
        value: "0.83",
      },
      {
        label: "End-to-End Latency",
        value: "76ms avg",
      },
    ],
  },
  {
    slug: "encrypted-traffic-classifier",
    title: "Encrypted Traffic Classifier",
    summary:
      "Enterprise-grade encrypted traffic classification platform providing network visibility and threat detection without decrypting TLS traffic.",
    problemSolved:
      "Classifies encrypted network traffic and identifies threats passively without breaking end-to-end TLS encryption or violating user data privacy.",
    architecture:
      "Packet Capture Interface (PCAP) → Flow Reconstruction Pipeline → Metadata & JA3 Fingerprint Extraction Engine → ML Traffic Classification Model → Spring Boot Scalable Backend API.",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "Machine Learning",
      "Packet Analysis",
      "TLS/JA3",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "High-throughput packet capture and full bidirectional flow reconstruction",
      "Real-time JA3 fingerprinting and packet statistical feature extraction without payload decryption",
      "Serving low-latency ML classification through a production Spring Boot service",
    ],
    metrics: [
      {
        label: "Privacy",
        value: "Zero-Decrypt",
      },
      {
        label: "Flow Analysis",
        value: "Full Pipeline",
      },
      {
        label: "Fingerprinting",
        value: "JA3 + Meta",
      },
    ],
  },
  {
    slug: "machinocare-predictive-maintenance",
    title: "MachinoCare — AI Predictive Maintenance",
    summary:
      "End-to-end predictive maintenance system for industrial machinery combining IoT sensors, ML anomaly detection, and real-time telemetry diagnostics.",
    problemSolved:
      "Prevents catastrophic machinery breakdown through continuous ESP32 vibration telemetry ingestion, anomaly detection algorithms, and real-time failure prediction.",
    architecture:
      "ESP32 IoT Vibration Sensors → REST / WebSockets → FastAPI Backend → PostgreSQL Time-Series Storage → ML Anomaly Detection Engine → Streamlit Real-Time Diagnostic Dashboard.",
    technologies: [
      "FastAPI",
      "Python",
      "IoT (ESP32)",
      "Streamlit",
      "PostgreSQL",
      "Machine Learning",
      "WebSockets",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
    engineeringChallenges: [
      "Real-time high-frequency vibration data ingestion over WebSockets and REST",
      "ML-based time-series anomaly detection on sensor streams",
      "Live diagnostic dashboard synchronization with alert management",
    ],
    metrics: [
      {
        label: "Ingestion",
        value: "Real-Time WS",
      },
      {
        label: "IoT Hardware",
        value: "ESP32 Sensors",
      },
      {
        label: "Diagnostics",
        value: "Streamlit UI",
      },
    ],
  },
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
    featured: false,
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
    featured: false,
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
    featured: false,
    engineeringChallenges: [
      "Multi-AZ high availability",
      "Security group management at scale",
      "VPC peering and routing",
      "Database failover automation",
      "Cost optimization and right-sizing",
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
    featured: false,
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
