export type SystemDesignCaseStudy = {
  slug: string;
  title: string;
  description: string;
  coreComponents: string[];
  scalingChallenges: string[];
  databaseDecisions: string[];
  engineeringTradeoffs: string[];
  estimatedNumbers?: {
    label: string;
    value: string;
  }[];
};

export const systemDesignCaseStudies: SystemDesignCaseStudy[] = [
  {
    slug: "designing-payment-gateway",
    title: "Designing a Payment Gateway",
    description:
      "A system that accepts payments from customers and transfers funds to merchants with strong consistency, audit trails, and failure recovery.",
    coreComponents: [
      "Payment API (REST with idempotency keys)",
      "Payment Service (business logic, state machine)",
      "Ledger Service (immutable transaction log)",
      "Settlement Service (batch processing, reconciliation)",
      "Webhook Service (merchant notifications)",
    ],
    scalingChallenges: [
      "Handle peak traffic (Black Friday, Prime Day) with burst capacity",
      "Avoid duplicate charges under retry storms",
      "Scale ledger writes without locking the database",
      "Reconcile millions of transactions daily",
    ],
    databaseDecisions: [
      "PostgreSQL with strong ACID guarantees for transactions",
      "Redis for idempotency key storage (fast lookup, TTL expiry)",
      "Kafka for event streaming (settlement, notifications)",
      "Separate read replicas for reporting queries",
    ],
    engineeringTradeoffs: [
      "Consistency over Availability: payments require strong ACID guarantees",
      "Synchronous payment authorization (risk vs user experience)",
      "Batch settlement vs real-time clearing (cost vs speed)",
      "Storing full transaction history vs archival strategy",
    ],
    estimatedNumbers: [
      { label: "Target Throughput", value: "5,000 TPS" },
      { label: "P95 Latency", value: "150ms" },
      { label: "Availability SLA", value: "99.99%" },
      { label: "Transaction Retention", value: "7 years (compliance)" },
    ],
  },
  {
    slug: "designing-distributed-cache",
    title: "Designing a Distributed Cache Layer",
    description:
      "A high-performance caching system that serves frequently accessed data with sub-millisecond latency, handles cache invalidation, and recovers from failures.",
    coreComponents: [
      "Cache Client (local library with circuit breaker)",
      "Cache Cluster (Redis/Memcached nodes)",
      "Cache Manager (replication, failover, eviction)",
      "Invalidation Service (publish cache invalidation)",
    ],
    scalingChallenges: [
      "Consistent hashing for load distribution without full rehash",
      "Handle cache misses without overwhelming the database (thundering herd)",
      "Eviction policies under memory pressure (LRU, LFU)",
      "Replication and consistency across cache nodes",
    ],
    databaseDecisions: [
      "Redis for in-memory speed with persistence options",
      "Replication Factor: 2-3 for fault tolerance",
      "Persistent storage (RDB snapshots) for recovery",
      "Separate cache for hot data vs warm data",
    ],
    engineeringTradeoffs: [
      "Availability over consistency: eventual consistency acceptable",
      "TTL-based invalidation vs event-driven invalidation",
      "Write-through vs write-behind caching patterns",
      "Cache all vs cache selectively (memory vs operational complexity)",
    ],
    estimatedNumbers: [
      { label: "Cache Hit Rate Target", value: "95%+" },
      { label: "Read Latency", value: "<1ms" },
      { label: "Memory Usage", value: "100GB+ per node" },
      { label: "Replication Lag", value: "<10ms" },
    ],
  },
  {
    slug: "designing-message-queue",
    title: "Designing a High-Throughput Message Queue",
    description:
      "A distributed message broker that reliably delivers millions of messages daily, supports consumer groups, and handles failure scenarios.",
    coreComponents: [
      "Producer API (batching, compression)",
      "Brokers (topic partitioning, replication)",
      "Consumer Groups (load balancing, offset tracking)",
      "Metadata Server (broker discovery, topic registry)",
    ],
    scalingChallenges: [
      "Achieve exactly-once delivery semantics across failures",
      "Maintain message ordering per partition while scaling consumers",
      "Handle consumer lag spikes without losing messages",
      "Rebalance consumers without stopping the world",
    ],
    databaseDecisions: [
      "Local storage on broker nodes for durability (fsync strategy)",
      "Replication across 3+ brokers for fault tolerance",
      "ZooKeeper (or Kraft) for metadata and leader election",
      "Separate log segments for retention and cleanup",
    ],
    engineeringTradeoffs: [
      "Latency vs throughput: batching improves throughput but adds latency",
      "Durability vs performance: fsync guarantees vs async writes",
      "Message ordering vs throughput (ordering per partition = lower throughput)",
      "Consumer group rebalancing: time to recover vs interruption",
    ],
    estimatedNumbers: [
      { label: "Target Throughput", value: "1M+ messages/sec" },
      { label: "End-to-End Latency", value: "<100ms (p99)" },
      { label: "Retention Policy", value: "7-30 days (configurable)" },
      { label: "Replication Factor", value: "3" },
    ],
  },
  {
    slug: "designing-url-shortener",
    title: "Designing a URL Shortener",
    description:
      "A service that converts long URLs into short, memorable codes and redirects to the original URL at scale.",
    coreComponents: [
      "Encoding Service (generate unique short codes)",
      "Redirect Service (lookup and redirect)",
      "Analytics Service (track clicks and referrers)",
      "Cache Layer (hot URL caching)",
    ],
    scalingChallenges: [
      "Generate unique codes without collisions at scale",
      "Handle billions of redirects with single-digit millisecond latency",
      "Distribute traffic across regions without centralized bottleneck",
      "Track analytics at scale without impacting redirect latency",
    ],
    databaseDecisions: [
      "Primary: PostgreSQL for write-heavy URL storage",
      "Cache: Redis for hot URLs (90/10 rule)",
      "Analytics: Time-series DB (InfluxDB/TimescaleDB) for metrics",
      "Read replicas in multiple regions for geo-local reads",
    ],
    engineeringTradeoffs: [
      "Short code length vs collision probability (6 chars = 2.1T combinations)",
      "Pre-generated codes vs on-demand generation",
      "Regional redirection: latency vs consistency",
      "Analytics accuracy vs performance impact",
    ],
    estimatedNumbers: [
      { label: "Redirect Throughput", value: "100,000 RPS" },
      { label: "P99 Redirect Latency", value: "<10ms" },
      { label: "Cache Hit Rate", value: "80-90%" },
      { label: "Code Space", value: "62^6 ≈ 56 billion" },
    ],
  },
  {
    slug: "designing-real-time-chat",
    title: "Designing a Real-Time Chat System",
    description:
      "A messaging platform supporting real-time delivery, presence detection, message search, and media attachments.",
    coreComponents: [
      "Connection Manager (WebSocket/gRPC persistent connections)",
      "Message Service (storage, deduplication)",
      "Presence Service (online status tracking)",
      "Search Service (full-text search over messages)",
      "Media Service (image/video storage and delivery)",
    ],
    scalingChallenges: [
      "Maintain millions of persistent connections",
      "Deliver messages in order across multiple devices",
      "Handle presence updates without network storms",
      "Search across billions of messages efficiently",
    ],
    databaseDecisions: [
      "PostgreSQL for message storage with archival",
      "Redis for active connections and presence state",
      "Elasticsearch for full-text message search",
      "S3/CDN for media attachments",
    ],
    engineeringTradeoffs: [
      "Consistency vs latency: eventual consistency acceptable for chat",
      "Persistent storage vs stream processing (keep only recent messages?)",
      "Presence accuracy vs bandwidth (polling vs events)",
      "Media processing: synchronous vs asynchronous thumbnail generation",
    ],
    estimatedNumbers: [
      { label: "Concurrent Connections", value: "10M+" },
      { label: "Message Delivery Latency", value: "<100ms (p99)" },
      { label: "Search Query Latency", value: "<500ms" },
      { label: "Messages Per Day", value: "Trillions" },
    ],
  },
  {
    slug: "designing-distributed-transaction",
    title: "Designing Distributed Transactions",
    description:
      "A system ensuring data consistency across multiple services without a central coordinator. Using sagas, two-phase commit, or compensation patterns.",
    coreComponents: [
      "Saga Orchestrator (coordinates multi-step transactions)",
      "Saga Participants (service-specific transaction logic)",
      "Compensation Manager (rollback logic)",
      "Event Log (transaction audit trail)",
    ],
    scalingChallenges: [
      "Coordinate transactions across multiple autonomous services",
      "Recover from partial failures without inconsistency",
      "Handle timeouts and retries in distributed systems",
      "Ensure idempotency at each step",
    ],
    databaseDecisions: [
      "Event Store (Kafka/database log) for durability and replay",
      "Service-local storage (database per service pattern)",
      "Distributed transaction log for coordination",
      "Outbox pattern for reliable publishing",
    ],
    engineeringTradeoffs: [
      "Synchronous vs asynchronous sagas (coupling vs complexity)",
      "Pessimistic vs optimistic locking",
      "Immediate vs eventual consistency (user experience vs guarantees)",
      "Compensation complexity vs implementation simplicity",
    ],
    estimatedNumbers: [
      { label: "Transaction Completion Time", value: "1-10 seconds" },
      { label: "Failure Rate", value: "0.1-1% (depends on services)" },
      { label: "Recovery Time", value: "<5 minutes" },
      { label: "Rollback Accuracy", value: "99.99%" },
    ],
  },
];
