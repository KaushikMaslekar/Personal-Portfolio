export const interviewNotes = [
  {
    slug: "networking-interview-questions",
    title: "Networking — Most Asked Interview Questions",
    publishedOn: "2026-05-27",
    readTime: "8 min",
    summary:
      "Concise, high-impact networking questions and short answers for interviews (TCP/IP, routing, DNS, HTTP, load balancing).",
    details: [
      {
        heading: "Top Questions",
        bullets: [
          "Explain the TCP three-way handshake and how connection teardown works (FIN/ACK sequence).",
          "What is the difference between TCP and UDP and when to use each?",
          "Describe how DNS resolution works from stub resolver to authoritative nameserver.",
          "What is subnetting and how do you calculate subnets (CIDR notation basics)?",
          "Explain NAT (SNAT vs DNAT) and why it is used.",
          "How do HTTPS and TLS work (certificate chain, handshake basics)?",
          "What are common load balancing algorithms (round-robin, least-connections, IP-hash)?",
          "Explain concepts of latency, bandwidth, jitter, and packet loss and how they affect apps.",
        ],
      },
      {
        heading: "Short Answers / Key Points",
        bullets: [
          "TCP is connection-oriented, provides reliability via ACKs, retransmission, and ordering; UDP is connectionless and lower-overhead.",
          "Three-way handshake: SYN -> SYN+ACK -> ACK. Teardown via FIN/ACK or RST for abrupt close.",
          "DNS: recursive resolver -> root -> TLD -> authoritative. CNAME vs A records.",
          "CIDR: e.g., /24 = 255.255.255.0, available hosts = 2^(32-prefix)-2 (except special cases).",
          "TLS: client hello, server hello, certificate, key exchange, then encrypted application data.",
          "Load balancers terminate or forward connections; choose algorithm by traffic pattern and session affinity needs.",
        ],
      },
      {
        heading: "Practice Problems / Prompts",
        bullets: [
          "Design a highly available DNS and CDN strategy for a global web app.",
          "Explain how you would diagnose high latency between two services (list tools and steps).",
          "Sketch a network diagram that isolates public traffic from internal services (subnets, NAT, firewall rules).",
        ],
      },
    ],
    resources: [
      { label: "RFC 793 (TCP)", href: "https://tools.ietf.org/html/rfc793" },
      {
        label: "MDN HTTP overview",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
      },
      {
        label: "Cloudflare Learning Center — DNS",
        href: "https://www.cloudflare.com/learning/dns/what-is-dns/",
      },
    ],
    tags: ["networking", "tcp", "dns", "http", "ops"],
  },

  {
    slug: "aiml-interview-questions",
    title: "AI/ML — Most Asked Interview Questions",
    publishedOn: "2026-05-27",
    readTime: "10 min",
    summary:
      "Core AI/ML interview topics: supervised vs unsupervised learning, model evaluation, feature engineering, common algorithms and production concerns.",
    details: [
      {
        heading: "Top Questions",
        bullets: [
          "Explain bias vs variance and how to detect and fix each.",
          "What is cross-validation and why use it? (k-fold, stratified).",
          "How do you evaluate classification and regression models (precision, recall, F1, ROC-AUC, RMSE)?",
          "Describe common algorithms: linear/logistic regression, decision trees, SVMs, k-means, PCA.",
          "What is regularization (L1, L2) and why is it helpful?",
          "How do you handle imbalanced datasets?",
          "Explain feature selection vs feature extraction.",
        ],
      },
      {
        heading: "Short Answers / Key Points",
        bullets: [
          "Bias = underfitting, Variance = overfitting. Use more data, simpler model, regularization to reduce variance; increase complexity to reduce bias.",
          "Cross-validation gives robust estimate of generalization; helps for hyperparameter tuning.",
          "For imbalanced classes consider resampling, class weights, precision-recall curve, or specialized metrics.",
          "Feature engineering often gives larger gains than model choice; try scaling, encoding, interaction features.",
        ],
      },
      {
        heading: "Production & System Questions",
        bullets: [
          "How to deploy a model (batch vs online inference, model serving options like REST endpoints, gRPC, serverless).",
          "Model monitoring: data drift, concept drift, alerting, periodic retraining triggers.",
          "Explain inference latency/throughput tradeoffs and techniques (quantization, distillation, caching).",
        ],
      },
    ],
    resources: [
      {
        label: "Hands-On ML book (Aurélien Géron)",
        href: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
      },
      {
        label: "scikit-learn documentation",
        href: "https://scikit-learn.org/stable/documentation.html",
      },
      {
        label: "ML Interviews repo (curated questions)",
        href: "https://github.com/dair-ai/ml-interviews",
      },
    ],
    tags: ["ml", "supervised", "unsupervised", "modeling", "production"],
  },

  {
    slug: "deep-learning-interview-questions",
    title: "Deep Learning — Most Asked Interview Questions",
    publishedOn: "2026-05-27",
    readTime: "9 min",
    summary:
      "Key deep learning interview topics: neural network basics, CNNs/RNNs/Transformers, optimization, regularization, and practical tips for training large models.",
    details: [
      {
        heading: "Top Questions",
        bullets: [
          "Explain backpropagation and how gradients flow through layers.",
          "Compare CNNs, RNNs/LSTMs, and Transformers — when to use each.",
          "What are vanishing/exploding gradients and how to mitigate them?",
          "Explain batch normalization, dropout, and other regularization techniques.",
          "Describe how attention works and why Transformers replaced many RNNs.",
        ],
      },
      {
        heading: "Short Answers / Key Points",
        bullets: [
          "Backprop computes gradients via chain rule; use automatic differentiation libraries (PyTorch/TF).",
          "Use CNNs for spatial data (images), RNNs for sequences (legacy), Transformers for scalable sequence modeling and parallelism.",
          "Mitigate gradient issues with careful initialization (He/Xavier), gradient clipping, normalization layers, and residual connections.",
          "Use pretraining + fine-tuning; monitor validation loss, and use early stopping to avoid overfitting.",
        ],
      },
      {
        heading: "Practical Tips",
        bullets: [
          "Start with small models and synthetic data, then scale; profile training for I/O and compute bottlenecks.",
          "Use mixed precision to speed up training and reduce memory; leverage distributed data-parallel training for large datasets.",
        ],
      },
    ],
    resources: [
      {
        label: "Deep Learning Book (Goodfellow)",
        href: "https://www.deeplearningbook.org/",
      },
      {
        label: "The Illustrated Transformer",
        href: "https://jalammar.github.io/illustrated-transformer/",
      },
      { label: "PyTorch tutorials", href: "https://pytorch.org/tutorials/" },
    ],
    tags: ["deep-learning", "neural-networks", "transformers", "cnn", "rnn"],
  },

  {
    slug: "cloud-interview-questions",
    title: "Cloud — Most Asked Interview Questions (AWS/GCP/Azure)",
    publishedOn: "2026-05-27",
    readTime: "8 min",
    summary:
      "Cloud interview topics focusing on design, services, networking, storage, security, and cost optimisation across major cloud providers.",
    details: [
      {
        heading: "Top Questions",
        bullets: [
          "Design a scalable, highly available web application on cloud (show components and tradeoffs).",
          "Explain differences between object storage, block storage, and file storage and typical use-cases.",
          "What is IAM and the principle of least privilege?",
          "How to design for fault tolerance and disaster recovery (DR strategies, RTO/RPO).",
          "Explain autoscaling strategies and when to use stateless vs stateful services.",
        ],
      },
      {
        heading: "Short Answers / Key Points",
        bullets: [
          "Use CDNs and multi-region deployments for low latency; separate stateless compute from stateful data services.",
          "Object storage (S3) for blobs and static assets, block storage for VMs, shared file systems for legacy apps.",
          "IAM controls identities and permissions—grant minimal rights and use roles/service principals.",
          "DR: backups, multi-region replication, cross-region failover; automate recovery where possible.",
        ],
      },
      {
        heading: "Practice Prompts",
        bullets: [
          "Design a cost-effective data pipeline to ingest, process, and store streaming telemetry data.",
          "Describe how you would secure an API exposed to the internet (authentication, WAF, rate limiting, logging).",
        ],
      },
    ],
    resources: [
      {
        label: "AWS Well-Architected Framework",
        href: "https://aws.amazon.com/architecture/well-architected/",
      },
      {
        label: "Google Cloud Architecture Framework",
        href: "https://cloud.google.com/architecture/framework",
      },
      {
        label: "Azure Architecture Center",
        href: "https://learn.microsoft.com/en-us/azure/architecture/",
      },
    ],
    tags: ["cloud", "aws", "azure", "gcp", "architecture"],
  },
];

export default interviewNotes;
