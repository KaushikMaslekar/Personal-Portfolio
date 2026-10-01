"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Copy,
  Check,
  Download,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function RecruiterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-recruiter-modal", handleOpen);
    return () => window.removeEventListener("open-recruiter-modal", handleOpen);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("maslekarkaushik@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+919325790846");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-950 p-6 sm:p-8 text-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 rounded-md border border-zinc-800 bg-zinc-900 p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="size-4" />
              </button>

              {/* Header */}
              <div className="space-y-1.5 border-b border-zinc-800 pb-4">
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Recruiter Fast-Track (1-Minute Overview)
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Kaushik Maslekar
                </h2>
                <p className="text-sm text-zinc-300 font-mono">
                  Final-year B.E. (AI &amp; DS) · Backend &amp; Distributed
                  Systems Engineer
                </p>
              </div>

              {/* Summary */}
              <div className="mt-3.5 text-xs text-zinc-300 leading-relaxed">
                <p>
                  Final-year B.E. (Artificial Intelligence &amp; Data Science)
                  student at MMCOE Pune specializing in backend engineering and
                  distributed systems. Builds REST APIs, event-driven services,
                  and caching layers with Java/Spring Boot and Python, and has
                  hands-on experience with Kafka, Redis, Docker, and AWS.
                  Additional depth in computer networks (TCP/IP, TLS, traffic
                  analysis) and applied AI (RAG pipelines, semantic search,
                  vector databases).
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="mt-4 grid grid-cols-3 gap-3 border-y border-zinc-800 py-3">
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold font-mono text-white">
                    76ms
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                    Avg RAG Latency
                  </p>
                </div>
                <div className="text-center border-x border-zinc-800">
                  <p className="text-base sm:text-lg font-bold font-mono text-white">
                    83.3%
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                    Recall@5 (0.83 MRR)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold font-mono text-white">
                    Zero-Decrypt
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                    TLS Traffic Classifier
                  </p>
                </div>
              </div>

              {/* Key Projects Section */}
              <div className="mt-4 space-y-3 text-xs">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  Key Projects (Direct from Resume)
                </h3>

                <div className="space-y-3">
                  {/* Project 1 */}
                  <div className="space-y-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="font-bold text-white text-xs">
                        Full-Stack RAG Chat Platform
                      </h4>
                      <span className="font-mono text-[10.5px] text-zinc-400">
                        Next.js, Spring Boot, FastAPI
                      </span>
                    </div>
                    <ul className="space-y-0.5 text-zinc-300 text-[11.5px] list-disc list-inside">
                      <li>
                        Architected a full-stack RAG chat application with a
                        Next.js UI, a Spring Boot API gateway (JWT auth, rate
                        limiting), and a FastAPI retrieval service communicating
                        over SSE streaming.
                      </li>
                      <li>
                        Built a ChromaDB-backed retrieval pipeline with
                        page-aware chunking and cross-encoder reranking,
                        achieving 83.3% recall@5 and a 0.83 mean reciprocal rank
                        on a golden evaluation set.
                      </li>
                      <li>
                        Implemented citation-grounded answer generation with
                        automatic abstention on ungrounded queries (100% correct
                        abstention rate), averaging 76ms end-to-end query
                        latency and 4.2 citations per answer.
                      </li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="font-bold text-white text-xs">
                        Encrypted Traffic Classifier
                      </h4>
                      <span className="font-mono text-[10.5px] text-zinc-400">
                        Java, Spring Boot, ML, Packet Analysis
                      </span>
                    </div>
                    <ul className="space-y-0.5 text-zinc-300 text-[11.5px] list-disc list-inside">
                      <li>
                        Designed an enterprise-grade encrypted traffic
                        classification platform for network visibility and
                        threat detection without decrypting TLS traffic.
                      </li>
                      <li>
                        Built a full flow-analysis pipeline covering packet
                        capture, flow reconstruction, and metadata/JA3
                        fingerprint extraction.
                      </li>
                      <li>
                        Trained an ML-based traffic classifier and served it
                        through a scalable Spring Boot backend.
                      </li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div className="space-y-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="font-bold text-white text-xs">
                        MachinoCare — AI-Powered Predictive Maintenance Platform
                      </h4>
                      <span className="font-mono text-[10.5px] text-zinc-400">
                        FastAPI, IoT (ESP32), Streamlit, PostgreSQL
                      </span>
                    </div>
                    <ul className="space-y-0.5 text-zinc-300 text-[11.5px] list-disc list-inside">
                      <li>
                        Built an end-to-end predictive maintenance system for
                        industrial machinery combining IoT sensors, ML anomaly
                        detection, and real-time monitoring.
                      </li>
                      <li>
                        Designed a FastAPI backend ingesting ESP32 vibration
                        data over REST/WebSockets, paired with a Streamlit
                        dashboard for live visualization and diagnostics.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-4 space-y-1.5 text-xs">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  Experience
                </h3>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 space-y-1">
                  <div className="flex flex-wrap items-center justify-between">
                    <strong className="text-white text-xs">
                      AI/ML Intern — YBI Foundation
                    </strong>
                    <span className="font-mono text-[10.5px] text-zinc-400">
                      Feb 2026 – May 2026
                    </span>
                  </div>
                  <ul className="space-y-0.5 text-zinc-300 text-[11.5px] list-disc list-inside pt-0.5">
                    <li>
                      Built a Retrieval-Augmented Generation (RAG) application
                      in Python and LangChain to enable document-grounded
                      question answering over large document sets.
                    </li>
                    <li>
                      Implemented document chunking, embedding generation, and
                      semantic retrieval to improve response accuracy and
                      retrieval relevance.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mt-4 space-y-1.5">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  Technical Skills
                </h3>
                <div className="text-[11px] leading-relaxed text-zinc-300 space-y-0.5 font-mono">
                  <p>
                    <strong className="text-white font-sans">
                      Backend &amp; Distributed:
                    </strong>{" "}
                    Java, Spring Boot, Microservices, REST APIs, Kafka, Redis,
                    Event-Driven Architecture, Multithreading, Load Balancing
                  </p>
                  <p>
                    <strong className="text-white font-sans">AI/ML:</strong>{" "}
                    Python, RAG, Semantic Retrieval, Embeddings, Pinecone,
                    ChromaDB, Vector Search, Pandas, NumPy
                  </p>
                  <p>
                    <strong className="text-white font-sans">
                      Databases &amp; Cloud:
                    </strong>{" "}
                    MySQL, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, CI/CD
                  </p>
                  <p>
                    <strong className="text-white font-sans">
                      Testing &amp; Monitoring:
                    </strong>{" "}
                    JUnit, Mockito, Prometheus, Grafana, Postman
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
                <Link
                  href="/kaushik_maslekar_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
                >
                  <Download className="size-4" />
                  <span>Download Resume PDF</span>
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-xs font-mono text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="size-3.5 text-white" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Mail className="size-3.5 text-zinc-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={copyPhone}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-xs font-mono text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="size-3.5 text-white" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Phone className="size-3.5 text-zinc-400" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
