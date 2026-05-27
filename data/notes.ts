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
    slug: "networking-interview-playbook",
    title: "Networking Interview Playbook",
    publishedOn: "2026-05-27",
    readTime: "6 min read",
    summary:
      "A compact interview guide covering latency, routing, DNS, TCP vs UDP, load balancing, and common failure patterns.",
    details: [
      "Know the OSI and TCP/IP models well enough to explain where routing, transport, and application concerns actually live.",
      "Be ready to compare TCP and UDP using trade-offs, not definitions. Interviewers care about ordering, retransmission, congestion control, and latency.",
      "When asked about distributed networking, mention DNS, load balancers, NAT, firewalls, and observability as part of the full request path.",
    ],
    resources: [
      {
        label: "Beej's Guide to Network Programming",
        url: "https://beej.us/guide/bgnet/",
      },
      {
        label: "Cloudflare Learning Center: DNS",
        url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
      },
      {
        label: "AWS Networking Basics",
        url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
      },
    ],
    tags: ["Networking", "Interview", "Systems"],
  },
  {
    slug: "aiml-interview-playbook",
    title: "AI/ML Interview Playbook",
    publishedOn: "2026-05-26",
    readTime: "7 min read",
    summary:
      "Practical interview notes on data prep, model selection, overfitting, evaluation, and deployment trade-offs.",
    details: [
      "Explain the difference between training, validation, and test sets clearly. Many interview mistakes start with data leakage or weak evaluation discipline.",
      "Know how to talk about precision, recall, F1, ROC-AUC, and when each metric matters for imbalanced problems.",
      "For real-world AI/ML systems, mention feature quality, drift monitoring, explainability, and operational constraints alongside the model itself.",
    ],
    resources: [
      {
        label: "Google ML Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
      },
      {
        label: "scikit-learn User Guide",
        url: "https://scikit-learn.org/stable/user_guide.html",
      },
      {
        label: "Made With ML: ML System Design",
        url: "https://madewithml.com/",
      },
    ],
    tags: ["AI/ML", "Interview", "Modeling"],
  },
  {
    slug: "deep-learning-interview-playbook",
    title: "Deep Learning Interview Playbook",
    publishedOn: "2026-05-25",
    readTime: "6 min read",
    summary:
      "Core DL concepts explained for interviews: backpropagation, optimization, regularization, activations, and transformer basics.",
    details: [
      "Be able to explain forward pass, loss calculation, and backpropagation without mixing up gradient descent with gradient computation.",
      "Regularization topics like dropout, weight decay, and early stopping matter because they show you understand generalization beyond just model size.",
      "For modern DL interviews, connect CNNs, RNNs, and transformers to the problem type rather than listing them as isolated architectures.",
    ],
    resources: [
      {
        label: "Dive into Deep Learning",
        url: "https://d2l.ai/",
      },
      {
        label: "Deep Learning Book",
        url: "https://www.deeplearningbook.org/",
      },
      {
        label: "PyTorch Tutorials",
        url: "https://pytorch.org/tutorials/",
      },
    ],
    tags: ["Deep Learning", "Interview", "Neural Networks"],
  },
  {
    slug: "cloud-interview-playbook",
    title: "Cloud Interview Playbook",
    publishedOn: "2026-05-24",
    readTime: "7 min read",
    summary:
      "Interview-ready notes on cloud design, scaling, resiliency, security, and production trade-offs across AWS-style systems.",
    details: [
      "In cloud interviews, show how you think about availability, durability, scalability, and cost together instead of optimizing one dimension only.",
      "Be able to explain VPCs, subnets, security groups, IAM, load balancers, autoscaling, and managed databases in plain language.",
      "Good answers include trade-offs: multi-AZ vs multi-region, vertical vs horizontal scaling, and managed service vs self-managed operational cost.",
    ],
    resources: [
      {
        label: "AWS Well-Architected Framework",
        url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
      },
      {
        label: "AWS Architecture Center",
        url: "https://aws.amazon.com/architecture/",
      },
      {
        label: "Microsoft Azure Architecture Center",
        url: "https://learn.microsoft.com/azure/architecture/",
      },
    ],
    tags: ["Cloud", "Interview", "Architecture"],
  },
  {
    slug: "system-design-interview-basics",
    title: "System Design Basics for Interview Answers",
    publishedOn: "2026-05-23",
    readTime: "5 min read",
    summary:
      "A short checklist for discussing scaling, caching, queues, database design, and bottlenecks in technical interviews.",
    details: [
      "Start with requirements, traffic shape, and bottleneck analysis before jumping to technologies. Interviewers want the reasoning path.",
      "Mention caching, asynchronous queues, sharding, and read replicas when the design needs to scale under real load.",
      "Strong answers explain failure modes, monitoring, and rollout strategy, not just the happy path architecture.",
    ],
    resources: [
      {
        label: "System Design Primer",
        url: "https://github.com/donnemartin/system-design-primer",
      },
      {
        label: "Designing Data-Intensive Applications",
        url: "https://dataintensive.net/",
      },
      {
        label: "Google SRE Book",
        url: "https://sre.google/sre-book/table-of-contents/",
      },
    ],
    tags: ["System Design", "Interview", "Scalability"],
  },
];
