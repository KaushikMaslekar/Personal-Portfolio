export type Project = {
  slug: string;
  title: string;
  summary: string;
  problemSolved: string;
  architecture: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-retrieval-augmented-generation-system",
    title: "AI Retrieval-Augmented Generation System",
    summary:
      "A document-grounded AI system that retrieves relevant information from uploaded knowledge sources and generates accurate answers using a RAG pipeline.",
    problemSolved:
      "Improves answer accuracy and reduces hallucinations by grounding responses in indexed documents instead of relying on prompt-only generation.",
    architecture:
      "Documents are ingested, chunked, embedded, and stored in FAISS. A retriever fetches relevant context for a FastAPI layer that orchestrates prompt engineering, response generation, and citation-backed outputs.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "FastAPI",
      "Docker",
      "OpenAI",
      "Hugging Face",
    ],
    githubUrl:
      "https://github.com/kaushikkishormaslekar/rag-end-to-end-pipeline",
    featured: true,
  },
  {
    slug: "agentic-rag-orchestration-platform",
    title: "Agentic RAG Orchestration Platform",
    summary:
      "An advanced RAG system where multiple agents handle planning, retrieval, verification, and answer generation.",
    problemSolved:
      "Handles multi-step questions more reliably by separating planning, evidence gathering, verification, and final response synthesis into distinct agent roles.",
    architecture:
      "A planner agent decomposes the query, retriever agents gather evidence, a verifier agent checks confidence and source quality, and a response agent synthesizes the final answer. Memory, caching, and orchestration keep the workflow efficient and traceable.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "FAISS",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "graph-rag-knowledge-intelligence-engine",
    title: "Graph RAG Knowledge Intelligence Engine",
    summary:
      "A Graph RAG system that combines vector search with graph-based relationship traversal for better answers over connected data.",
    problemSolved:
      "Solves weak relationship reasoning in vector-only RAG by adding graph traversal for entity and connection-aware retrieval.",
    architecture:
      "Entity extraction builds a knowledge graph in Neo4j while embeddings are indexed for semantic recall. Query flow combines vector search, Cypher traversal, and multi-hop reasoning before the LLM generates a grounded answer.",
    technologies: [
      "Python",
      "Neo4j",
      "LangChain",
      "FAISS",
      "FastAPI",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "payment-processing-system",
    title: "Payment Processing System",
    summary:
      "A resilient payment backend that handles transaction creation, payment tracking, refunds, retries, and audit logs.",
    problemSolved:
      "Keeps transactions reliable under load using idempotency, retry handling, and strong auditability for distributed payment flows.",
    architecture:
      "Spring Boot services process payments through Kafka events. PostgreSQL stores transaction state, Redis supports idempotency and caching, and observability tracks audit logs and retry behavior.",
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
  },
  {
    slug: "kafka-event-processing-platform",
    title: "Kafka Event Processing Platform",
    summary:
      "An event-driven platform for processing high-volume events using Kafka producers, consumers, and topic-based workflows.",
    problemSolved:
      "Improves async event delivery, loose coupling, and retry handling for distributed service communication.",
    architecture:
      "Producers publish to Kafka topics, consumers process events asynchronously, and storage layers persist event state. Monitoring and retry paths keep the system resilient and easy to operate.",
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
  },
  {
    slug: "cloud-native-iot-telemetry-monitoring-platform",
    title: "Cloud-Native IoT Telemetry Monitoring Platform",
    summary:
      "An IoT monitoring system that tracks device health, telemetry data, alerts, and historical sensor trends.",
    problemSolved:
      "Enables reliable telemetry ingestion and actionable alerting for devices operating in distributed or intermittently connected environments.",
    architecture:
      "Devices register with the platform, send telemetry through MQTT and event pipelines, and data lands in PostgreSQL and Kafka-backed workflows. Dashboards and alert rules expose device health, thresholds, and historical metrics.",
    technologies: [
      "Spring Boot",
      "Python",
      "MQTT",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Grafana",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "production-ready-aws-cloud-infrastructure-architecture",
    title: "Production-Ready AWS Cloud Infrastructure Architecture",
    summary:
      "A production-style AWS architecture with VPC isolation, secure routing, monitoring, and optional multi-region failover.",
    problemSolved:
      "Replaces insecure flat-network deployments with segmented infrastructure, routing controls, and infrastructure-as-code driven governance.",
    architecture:
      "Terraform provisions a VPC with public and private subnets, NAT and internet gateways, isolated database layers, and routing controls. Monitoring, logging, and Route 53 health checks support resilience and failover.",
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
  },
  {
    slug: "microservices-based-e-commerce-platform",
    title: "Microservices-Based E-commerce Platform",
    summary:
      "A distributed e-commerce backend built with user, product, cart, order, payment, inventory, and notification services.",
    problemSolved:
      "Demonstrates service decomposition, inter-service communication, and scalable backend design for real-world commerce systems.",
    architecture:
      "Spring Boot microservices communicate through an API gateway and Kafka events. Each service owns its data, while Redis supports caching and service discovery keeps the system easy to scale.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Eureka",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: false,
  },
  {
    slug: "saas-subscription-billing-system",
    title: "SaaS Subscription Billing System",
    summary:
      "A backend system for subscription plans, billing cycles, invoices, renewals, usage limits, and account suspension.",
    problemSolved:
      "Models a realistic SaaS billing workflow with lifecycle events, renewals, and usage-aware account management.",
    architecture:
      "Spring Boot services manage plans, subscriptions, invoices, and payment events. PostgreSQL stores billing state, Redis supports fast lookups, and Kafka handles renewal and notification workflows.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: false,
  },
  {
    slug: "api-gateway-and-authentication-platform",
    title: "API Gateway and Authentication Platform",
    summary:
      "A centralized authentication and API routing platform with JWT, role-based access control, rate limiting, and request logging.",
    problemSolved:
      "Shows how to secure and govern backend traffic with centralized auth, token validation, and request control.",
    architecture:
      "Spring Security handles login and refresh tokens, while Spring Cloud Gateway routes traffic, enforces RBAC, applies Redis-backed rate limits, and records request logs.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud Gateway",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: false,
  },
  {
    slug: "lan-based-peer-to-peer-file-sharing-system",
    title: "LAN-Based Peer-to-Peer File Sharing System",
    summary:
      "A local-network file sharing system where nearby devices discover each other and transfer files without internet.",
    problemSolved:
      "Highlights networking, discovery, and chunked transfer mechanics for real-time local device communication.",
    architecture:
      "Devices discover peers over LAN, negotiate transfers through TCP and UDP multicast, and stream files in chunks with retry and integrity checks. A lightweight UI tracks progress and device availability.",
    technologies: [
      "Java",
      "Spring Boot",
      "TCP Sockets",
      "UDP Multicast",
      "WebSocket",
      "React",
      "JavaFX",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "cloud-native-network-device-monitoring-platform",
    title: "Cloud-Native Network Device Monitoring Platform",
    summary:
      "A monitoring platform for servers, routers, and network devices using health checks, latency tracking, uptime checks, and alerting.",
    problemSolved:
      "Provides a cloud-native way to monitor network infrastructure with SLA-aware reporting and actionable downtime alerts.",
    architecture:
      "Health probes, ping checks, and latency collectors feed metrics into PostgreSQL and Prometheus. Grafana dashboards visualize uptime, packet loss, and alert state across the monitored fleet.",
    technologies: [
      "Spring Boot",
      "Python",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
