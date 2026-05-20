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
    slug: "payment-processing-system",
    title: "Payment Processing System",
    summary:
      "A resilient payment pipeline handling high-throughput transactions with strong consistency and auditable events.",
    problemSolved:
      "Reduced payment failure rates by introducing idempotent APIs, retry queues, and circuit breakers for third-party gateways.",
    architecture:
      "Spring Boot microservices process payments asynchronously through Kafka topics. PostgreSQL stores ledger entries while Redis handles short-lived idempotency keys. Observability is powered by OpenTelemetry traces and cloud metrics.",
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
      "An event-driven platform for processing device telemetry and operational events with near real-time stream analytics.",
    problemSolved:
      "Unified fragmented service communication and improved event delivery reliability for distributed backend services.",
    architecture:
      "Producers publish domain events to Kafka. Stream processors enrich and route payloads into operational stores. Dead-letter topics and schema validation ensure fault tolerance and forward compatibility.",
    technologies: [
      "Java",
      "Kafka",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "Prometheus",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "iot-device-monitoring-system",
    title: "IoT Device Monitoring System",
    summary:
      "Cloud-native monitoring stack for IoT sensors with automated alerting and historical trend analysis.",
    problemSolved:
      "Enabled reliable ingestion and anomaly alerting for distributed sensor fleets where connectivity is intermittent.",
    architecture:
      "ESP32 devices publish telemetry to an API gateway. Backend services store and aggregate data for dashboards and alerts. A rule engine triggers notifications when fire-risk thresholds are detected.",
    technologies: [
      "Next.js",
      "Python",
      "Firebase",
      "IoT",
      "ESP32",
      "Cloud Functions",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "ai-rag-knowledge-assistant",
    title: "AI Retrieval Augmented Generation System",
    summary:
      "A domain-focused knowledge assistant using retrieval augmented generation to reduce hallucinations.",
    problemSolved:
      "Improved answer factuality over baseline LLM prompting by grounding responses in indexed private documents.",
    architecture:
      "Documents are embedded into a vector index. A retriever fetches relevant chunks and injects context into LLM prompts. Response post-processing adds citations and confidence hints.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Transformers",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "agentic-rag-orchestration-platform",
    title: "Agentic RAG Orchestration Platform",
    summary:
      "A multi-agent retrieval system where planner, retriever, verifier, and response agents collaborate to answer complex enterprise queries with higher reliability.",
    problemSolved:
      "Addressed weak single-shot RAG behavior on multi-step questions by introducing agent-level planning, tool routing, and verification before final response generation.",
    architecture:
      "An orchestrator agent decomposes user intent into subtasks, dispatches retrieval workers across vector stores and APIs, and passes gathered evidence to a critique agent. A final synthesis agent generates grounded output with source traces, confidence scoring, and retry logic for low-confidence paths.",
    technologies: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "OpenAI API",
      "FastAPI",
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
      "A Graph RAG system that combines knowledge graphs with semantic retrieval to answer relationship-heavy questions across entities, events, and documents.",
    problemSolved:
      "Solved context fragmentation in standard vector-only retrieval by adding graph traversal for entity relations, enabling more accurate answers for dependency and causality queries.",
    architecture:
      "Ingestion builds entity and relation triples from documents and stores them in Neo4j, while embeddings are indexed for semantic recall. Query flow uses hybrid retrieval: vector search for candidate context and graph traversal for connected evidence paths. A reasoning layer merges both contexts before LLM generation and includes cited graph edges in output.",
    technologies: [
      "Python",
      "Neo4j",
      "Cypher",
      "LangChain",
      "Transformers",
      "FAISS",
      "FastAPI",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "enterprise-network-monitoring-system",
    title: "Enterprise Network Monitoring System",
    summary:
      "A centralized observability platform for enterprise networks with real-time health checks, anomaly alerts, and SLA-focused dashboards.",
    problemSolved:
      "Reduced mean-time-to-detect by consolidating fragmented network telemetry into a single monitoring plane with actionable incident insights.",
    architecture:
      "Distributed collectors ingest SNMP/flow/log data from routers, switches, and firewalls. A stream processing layer aggregates metrics and triggers threshold- and pattern-based alerts. A dashboard service surfaces topology-aware status, outage blast radius, and historical trends for operations teams.",
    technologies: [
      "Python",
      "Prometheus",
      "Grafana",
      "Kafka",
      "Redis",
      "Docker",
      "Linux",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "aws-multi-tier-vpc-architecture",
    title: "AWS Multi-Tier VPC Architecture",
    summary:
      "Production-ready AWS reference architecture with isolated public/private tiers, secure connectivity boundaries, and scalable service deployment patterns.",
    problemSolved:
      "Eliminated insecure flat-network deployments by implementing segmented network tiers, controlled ingress/egress, and policy-driven infrastructure provisioning.",
    architecture:
      "Infrastructure-as-Code provisions a multi-AZ VPC with public subnets for load balancers, private app subnets for compute, and isolated data subnets for persistence. Security groups, NACLs, NAT gateways, and IAM boundaries enforce least privilege. Monitoring and logging pipelines provide auditability and operational visibility.",
    technologies: [
      "AWS",
      "Terraform",
      "VPC",
      "EC2",
      "RDS",
      "CloudWatch",
      "IAM",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "multi-region-traffic-routing-system",
    title: "Multi-Region Traffic Routing System",
    summary:
      "A high-availability traffic routing layer that directs users to healthy nearest regions with failover automation and latency-aware policies.",
    problemSolved:
      "Minimized downtime during regional incidents and improved global response times by introducing health-based routing and automated failover.",
    architecture:
      "Global DNS and edge routing policies evaluate health checks, latency metrics, and region priority rules. Traffic is routed to active regions backed by replicated application stacks and data synchronization pipelines. Circuit-breaker and canary controls support safe region shifts during incidents and releases.",
    technologies: [
      "AWS",
      "Route 53",
      "CloudFront",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Terraform",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "ai-research-agent",
    title: "AI Research Agent",
    summary:
      "An autonomous research assistant that plans literature exploration, gathers evidence from trusted sources, and synthesizes structured findings with citations.",
    problemSolved:
      "Reduced manual research time by automating source discovery, extraction, and summarization while preserving verifiability through citation-backed outputs.",
    architecture:
      "A planner agent decomposes a research question into subtopics, tool agents fetch relevant papers/articles, and a verifier agent scores source quality. A synthesis layer combines evidence into concise briefs with citation links, confidence indicators, and follow-up questions.",
    technologies: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "multi-model-rag-platform",
    title: "Multi-Model RAG Platform",
    summary:
      "A retrieval platform that dynamically routes queries across multiple LLMs and embedding models to optimize answer quality, latency, and cost.",
    problemSolved:
      "Solved single-model bottlenecks by introducing adaptive model selection and fallback chains for domain-specific queries and variable workloads.",
    architecture:
      "A routing gateway classifies query intent and complexity, then selects best-fit model stacks for retrieval and generation. Hybrid retrieval combines vector, keyword, and reranking stages, while observability tracks per-model accuracy, response time, and token economics.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Transformers",
      "Redis",
      "FastAPI",
      "Docker",
      "Prometheus",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
  {
    slug: "legal-ai-assistant",
    title: "Legal AI Assistant",
    summary:
      "A domain-tuned legal assistant for clause analysis, case-law retrieval, and compliance-oriented question answering over legal documents.",
    problemSolved:
      "Improved legal document review speed and consistency by combining grounded retrieval with policy-aware response generation.",
    architecture:
      "Legal documents are chunked and indexed with metadata (jurisdiction, section, effective date). Query processing applies legal-intent templates, retrieves relevant statutes/cases, and generates answers with explicit references and risk flags for ambiguous interpretations.",
    technologies: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "PostgreSQL",
      "FastAPI",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/KaushikMaslekar",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
