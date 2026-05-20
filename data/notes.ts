export type EngineeringNote = {
  slug: string;
  title: string;
  publishedOn: string;
  readTime: string;
  summary: string;
  details: string[];
  resources: Array<{
    label: string;
    url: string;
  }>;
  tags: string[];
};

export const engineeringNotes: EngineeringNote[] = [
  {
    slug: "rag-retrieval-failures",
    title: "RAG: Why Retrieval Fails Before Generation",
    publishedOn: "2026-03-02",
    readTime: "5 min read",
    summary:
      "A practical checklist for diagnosing weak RAG answers: chunking strategy, embedding mismatch, metadata filtering, and reranking gaps.",
    details: [
      "Most retrieval failures start at ingestion time, not generation time. If chunk boundaries break semantic units, embeddings lose context and downstream rerankers cannot recover precision.",
      "Validate embedding-model and query-distribution alignment before changing prompts. A legal or finance corpus often needs domain-tuned embedding choices and metadata-aware filtering.",
      "Track retrieval quality as a first-class metric: top-k recall on golden questions, citation hit rate, and failure slices for time-sensitive or entity-heavy queries.",
    ],
    resources: [
      {
        label: "Pinecone: Retrieval Augmented Generation Guide",
        url: "https://www.pinecone.io/learn/retrieval-augmented-generation/",
      },
      {
        label: "LangChain Docs: Retrieval",
        url: "https://python.langchain.com/docs/concepts/retrieval/",
      },
      {
        label: "Stanford IR Book",
        url: "https://nlp.stanford.edu/IR-book/",
      },
    ],
    tags: ["RAG", "LLM", "Search"],
  },
  {
    slug: "event-driven-cloud-architecture",
    title: "Cloud Architecture: Event-Driven Service Boundaries",
    publishedOn: "2026-02-17",
    readTime: "6 min read",
    summary:
      "How to split synchronous APIs from asynchronous workflows using queues, idempotency keys, and replay-safe consumers.",
    details: [
      "Synchronous APIs should own user-facing validation and immediate contract guarantees, while asynchronous workflows handle long-running and failure-prone operations.",
      "Idempotency keys must be persisted at the boundary where side effects happen. This design prevents duplicate writes during retries and broker redelivery.",
      "Replay-safe consumers need deterministic handlers, explicit deduplication strategy, and dead-letter policy that supports forensic analysis.",
    ],
    resources: [
      {
        label: "AWS Prescriptive Guidance: Event-Driven Architecture",
        url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-integrating-microservices/event-driven-architecture.html",
      },
      {
        label: "Martin Fowler: Event-Driven Architecture",
        url: "https://martinfowler.com/articles/201701-event-driven.html",
      },
      {
        label: "CloudEvents Spec",
        url: "https://cloudevents.io/",
      },
    ],
    tags: ["Cloud", "Architecture", "Reliability"],
  },
  {
    slug: "distributed-systems-backpressure",
    title: "Distributed Systems: Backpressure Is a Product Feature",
    publishedOn: "2026-01-26",
    readTime: "4 min read",
    summary:
      "Patterns for protecting downstream services under load with bounded queues, adaptive concurrency, and graceful degradation.",
    details: [
      "Backpressure is how systems stay alive during traffic spikes. Unbounded queues hide overload briefly and then fail catastrophically with latency collapse.",
      "Use bounded queues plus admission control to keep tail latency predictable. Reject early with clear client semantics rather than timing out deep in the stack.",
      "Combine adaptive concurrency and priority classes so critical paths survive overload while non-critical work degrades gracefully.",
    ],
    resources: [
      {
        label: "Google SRE Book",
        url: "https://sre.google/sre-book/table-of-contents/",
      },
      {
        label: "Designing Data-Intensive Applications",
        url: "https://dataintensive.net/",
      },
      {
        label: "NATS: Flow Control and Backpressure",
        url: "https://docs.nats.io/nats-concepts/jetstream/consumers",
      },
    ],
    tags: ["Distributed Systems", "Performance", "SRE"],
  },
  {
    slug: "observability-trace-first",
    title: "Observability: Start With Trace Narratives",
    publishedOn: "2025-12-19",
    readTime: "4 min read",
    summary:
      "A trace-first approach to debugging production failures across services, retries, and message brokers.",
    details: [
      "Logs explain local events, but traces explain cross-service causality. Start investigations by following one failing request end-to-end.",
      "Define span-level naming and attributes early. Without consistent service, endpoint, and tenant labels, production debugging becomes guesswork.",
      "Use exemplars that tie metrics to traces so on-call engineers can jump from a latency spike directly into concrete request paths.",
    ],
    resources: [
      {
        label: "OpenTelemetry Documentation",
        url: "https://opentelemetry.io/docs/",
      },
      {
        label: "Grafana Tempo Docs",
        url: "https://grafana.com/docs/tempo/latest/",
      },
      {
        label: "Honeycomb: Distributed Tracing Concepts",
        url: "https://www.honeycomb.io/blog/distributed-tracing-2023",
      },
    ],
    tags: ["Observability", "OpenTelemetry", "Debugging"],
  },
  {
    slug: "cost-aware-llm-routing",
    title: "LLM Platforms: Cost-Aware Multi-Model Routing",
    publishedOn: "2025-11-09",
    readTime: "7 min read",
    summary:
      "Designing routing policies that balance latency, quality, and token spend by classifying query complexity upfront.",
    details: [
      "Multi-model routing works when policy decisions are observable. Record why each request was routed and compare route quality over time.",
      "Use cheap classifiers for intent and complexity, then route to model tiers. Preserve safe fallbacks when confidence is low.",
      "Cost controls should include token budgets per tenant and per workflow stage, not only per request.",
    ],
    resources: [
      {
        label: "OpenAI Cookbook",
        url: "https://cookbook.openai.com/",
      },
      {
        label: "Anthropic Docs",
        url: "https://docs.anthropic.com/",
      },
      {
        label: "Azure AI Foundry Docs",
        url: "https://learn.microsoft.com/azure/ai-foundry/",
      },
    ],
    tags: ["LLM", "Platform", "FinOps"],
  },
  {
    slug: "transformers-attention-bottlenecks",
    title: "Transformers: Where Attention Actually Becomes the Bottleneck",
    publishedOn: "2026-03-12",
    readTime: "6 min read",
    summary:
      "A field guide to spotting context-window and memory-pressure limits, and when to use sliding-window or sparse attention variants.",
    details: [
      "Attention cost scales quadratically with sequence length in vanilla transformers, so long-context requests quickly become expensive and slow.",
      "Practical mitigation includes chunked prefill, sliding-window attention, KV-cache reuse, and request-level context trimming.",
      "Latency budgets should be measured at p95 and p99 with realistic prompts, because synthetic short prompts hide bottlenecks.",
    ],
    resources: [
      {
        label: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
      },
      {
        label: "Hugging Face Transformers Docs",
        url: "https://huggingface.co/docs/transformers/index",
      },
      {
        label: "vLLM Documentation",
        url: "https://docs.vllm.ai/",
      },
    ],
    tags: ["Transformers", "Inference", "Performance"],
  },
  {
    slug: "llm-evals-that-catch-regressions",
    title: "LLM Evals: The Small Set That Catches Real Regressions",
    publishedOn: "2026-03-10",
    readTime: "5 min read",
    summary:
      "Designing evaluation slices for hallucination rate, retrieval faithfulness, and refusal behavior without overfitting to benchmark prompts.",
    details: [
      "Evaluation suites should mirror production usage patterns: short factual queries, long reasoning tasks, and high-risk safety scenarios.",
      "Track leading indicators such as citation correctness and unsupported-claim rate, not only pass/fail rubric scores.",
      "Use regression gates on changed prompts, retrieval config, and model versions so improvements in one area do not silently break another.",
    ],
    resources: [
      {
        label: "OpenAI Evals",
        url: "https://github.com/openai/evals",
      },
      {
        label: "DeepLearning.AI: Evaluation for LLM Apps",
        url: "https://www.deeplearning.ai/short-courses/evaluating-and-debugging-generative-ai/",
      },
      {
        label: "TruLens Documentation",
        url: "https://www.trulens.org/",
      },
    ],
    tags: ["LLM", "Evaluation", "Quality"],
  },
  {
    slug: "prompt-versioning-in-production",
    title: "Prompt Engineering: Version Prompts Like APIs",
    publishedOn: "2026-03-08",
    readTime: "4 min read",
    summary:
      "How prompt contracts, semantic diffing, and rollback strategies reduce incident risk in production AI features.",
    details: [
      "Treat prompts as versioned artifacts with owners, changelogs, and rollback procedures. This avoids invisible behavior drift after tiny edits.",
      "Add test fixtures for critical prompts to validate schema adherence, tone constraints, and safety boundaries.",
      "A release workflow with canary traffic for new prompt versions catches quality drops before full rollout.",
    ],
    resources: [
      {
        label: "Prompting Guide",
        url: "https://www.promptingguide.ai/",
      },
      {
        label: "LangSmith Prompt Management",
        url: "https://docs.smith.langchain.com/",
      },
      {
        label: "GitHub: Prompt Engineering Guide",
        url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
      },
    ],
    tags: ["Prompts", "Production", "MLOps"],
  },
  {
    slug: "vector-db-index-selection",
    title: "Vector Databases: Choosing HNSW vs IVF-PQ Under Load",
    publishedOn: "2026-03-06",
    readTime: "6 min read",
    summary:
      "Trade-offs between recall, memory, and latency when selecting ANN index types for RAG systems with changing corpus sizes.",
    details: [
      "HNSW usually offers strong recall and low-latency reads but can consume more memory and slower rebuild times at large scale.",
      "IVF-PQ reduces memory footprint and can speed cold starts, but requires careful tuning to avoid recall collapse on tail queries.",
      "Benchmark with your own distribution and update frequency. Index choice should be tied to ingestion velocity and SLA targets.",
    ],
    resources: [
      {
        label: "FAISS Wiki",
        url: "https://github.com/facebookresearch/faiss/wiki",
      },
      {
        label: "Pinecone Learn: Vector Indexes",
        url: "https://www.pinecone.io/learn/series/faiss/",
      },
      {
        label: "Milvus Documentation",
        url: "https://milvus.io/docs",
      },
    ],
    tags: ["Vector DB", "RAG", "Latency"],
  },
  {
    slug: "rag-grounding-with-citations",
    title: "Grounded Generation: Citations That Users Can Trust",
    publishedOn: "2026-03-04",
    readTime: "5 min read",
    summary:
      "Practical citation strategies, answer-span linking, and confidence signals that improve trust in enterprise assistants.",
    details: [
      "Reliable citations need deterministic source mapping from generated claims to retrieved chunks. Store retrieval ids through the full chain.",
      "Show users evidence snippets and document provenance, not only links. This increases trust and reduces support escalations.",
      "When evidence is weak, degrade gracefully with uncertainty language and suggested follow-up actions.",
    ],
    resources: [
      {
        label: "Microsoft Learn: Build RAG Solutions",
        url: "https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview",
      },
      {
        label: "LlamaIndex RAG Guides",
        url: "https://docs.llamaindex.ai/",
      },
      {
        label: "NIST AI RMF",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
    ],
    tags: ["RAG", "Trust", "UX"],
  },
  {
    slug: "transformer-inference-quantization-playbook",
    title: "Transformer Inference: A Practical Quantization Playbook",
    publishedOn: "2026-02-28",
    readTime: "7 min read",
    summary:
      "When to use FP16, INT8, and 4-bit quantization, plus accuracy guardrails for preserving response quality in production.",
    details: [
      "Quantization decisions should be evaluated per task family. Summarization can tolerate aggressive compression more than tool-calling or code generation.",
      "Measure both throughput and semantic drift. A faster model with degraded factuality increases hidden operational costs.",
      "Adopt staged rollout: benchmark, shadow traffic, then controlled production release with automatic rollback triggers.",
    ],
    resources: [
      {
        label: "bitsandbytes Documentation",
        url: "https://github.com/bitsandbytes-foundation/bitsandbytes",
      },
      {
        label: "NVIDIA TensorRT-LLM",
        url: "https://nvidia.github.io/TensorRT-LLM/",
      },
      {
        label: "Hugging Face: Quantization Overview",
        url: "https://huggingface.co/docs/transformers/main_classes/quantization",
      },
    ],
    tags: ["Transformers", "Quantization", "Serving"],
  },
  {
    slug: "agent-memory-design-patterns",
    title: "LLM Agents: Memory Design Patterns That Scale",
    publishedOn: "2026-02-24",
    readTime: "6 min read",
    summary:
      "Short-term, episodic, and long-term memory patterns for multi-step agents without exploding token budgets.",
    details: [
      "Agent memory should separate volatile conversation state from durable task knowledge. Mixing both increases cost and retrieval noise.",
      "Use summarization checkpoints to compress long threads while preserving key decisions and tool outputs.",
      "Design explicit memory write policies. Letting every message persist creates unbounded context growth and quality decay.",
    ],
    resources: [
      {
        label: "LangGraph Documentation",
        url: "https://langchain-ai.github.io/langgraph/",
      },
      {
        label: "AutoGen Documentation",
        url: "https://microsoft.github.io/autogen/",
      },
      {
        label: "Anthropic: Building Effective Agents",
        url: "https://www.anthropic.com/engineering",
      },
    ],
    tags: ["Agents", "LLM", "Architecture"],
  },
  {
    slug: "function-calling-reliability",
    title: "Function Calling Reliability in Tool-Augmented LLMs",
    publishedOn: "2026-02-20",
    readTime: "5 min read",
    summary:
      "Schema hardening, argument validation, and retry choreography to reduce malformed tool invocations.",
    details: [
      "Function calling becomes reliable when tool schemas are narrow, explicit, and validated before execution.",
      "Guardrails should reject partial or ambiguous arguments and ask the model for correction rather than guessing defaults.",
      "Use retry choreography with context-preserving error messages so the model can self-correct without loops.",
    ],
    resources: [
      {
        label: "OpenAI Function Calling Guide",
        url: "https://platform.openai.com/docs/guides/function-calling",
      },
      {
        label: "JSON Schema",
        url: "https://json-schema.org/",
      },
      {
        label: "Model Context Protocol",
        url: "https://modelcontextprotocol.io/introduction",
      },
    ],
    tags: ["LLM", "Tools", "Reliability"],
  },
  {
    slug: "transformer-finetune-vs-rag",
    title: "Fine-Tuning vs RAG: A Decision Framework",
    publishedOn: "2026-02-15",
    readTime: "5 min read",
    summary:
      "A decision matrix based on update frequency, privacy constraints, and required task specialization.",
    details: [
      "Choose RAG when knowledge changes frequently and evidence traceability matters. It minimizes retraining cycles.",
      "Choose fine-tuning when behavior style and domain language must be deeply adapted across many repeated tasks.",
      "Hybrid approaches often win: small adapters for behavior plus retrieval for fresh facts.",
    ],
    resources: [
      {
        label: "Hugging Face PEFT",
        url: "https://huggingface.co/docs/peft/index",
      },
      {
        label: "LoRA Paper",
        url: "https://arxiv.org/abs/2106.09685",
      },
      {
        label: "Azure OpenAI RAG Guidance",
        url: "https://learn.microsoft.com/azure/architecture/ai-ml/guide/rag/rag-overview",
      },
    ],
    tags: ["Transformers", "RAG", "Fine-Tuning"],
  },
  {
    slug: "llm-observability-signals",
    title: "LLM Observability: Signals That Matter in Production",
    publishedOn: "2026-02-11",
    readTime: "6 min read",
    summary:
      "Core telemetry for AI systems: token economics, retrieval hit quality, latency percentiles, and safety intervention rates.",
    details: [
      "Production LLM observability must connect business outcomes with technical metrics. Token counts alone do not explain user experience.",
      "Build dashboards for end-to-end path: retrieval stage latency, model latency, tool-call success, and safety override frequency.",
      "Alert on drift indicators such as sharp citation failure increase or sudden refusal-rate changes by model version.",
    ],
    resources: [
      {
        label: "OpenTelemetry Semantic Conventions",
        url: "https://opentelemetry.io/docs/specs/semconv/",
      },
      {
        label: "LangSmith Observability",
        url: "https://docs.smith.langchain.com/observability",
      },
      {
        label: "Arize AI Observability Resources",
        url: "https://arize.com/",
      },
    ],
    tags: ["LLM", "Observability", "SRE"],
  },
];
