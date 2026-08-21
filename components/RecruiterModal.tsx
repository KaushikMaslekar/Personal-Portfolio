"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  X,
  FileText,
  Copy,
  Check,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950/95 p-6 sm:p-8 text-zinc-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="size-4" />
              </button>

              {/* Header Badge & Title */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-mono font-medium text-emerald-400">
                  <Zap className="size-3.5" />
                  <span>1-Minute Recruiter Fast-Track</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  Kaushik Maslekar
                </h2>
                <p className="text-sm text-zinc-300 font-mono">
                  Backend Engineer · Distributed Systems · Applied AI
                </p>
              </div>

              {/* Quick Summary Snapshot */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-2">
                <p>
                  Final-year <strong className="text-white">B.E. in Artificial Intelligence &amp; Data Science</strong> at MMCOE Pune.
                  Specialized in building high-throughput <strong className="text-emerald-400">Java/Spring Boot</strong> microservices,
                  distributed event streams with <strong className="text-cyan-400">Apache Kafka</strong>, resilient caching, and production-grade
                  <strong className="text-purple-400"> RAG pipelines</strong>.
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                  <p className="text-base sm:text-xl font-bold font-mono text-emerald-400">76ms</p>
                  <p className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">Avg RAG Latency</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                  <p className="text-base sm:text-xl font-bold font-mono text-cyan-400">83.3%</p>
                  <p className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">Recall@5 (MRR 0.83)</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                  <p className="text-base sm:text-xl font-bold font-mono text-amber-400">Zero-Decrypt</p>
                  <p className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">TLS Packet Analysis</p>
                </div>
              </div>

              {/* Key Highlights Section */}
              <div className="mt-6 space-y-3 text-xs sm:text-sm">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">Core Highlights</h3>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Flagship RAG Chat Application:</strong>
                      <span className="text-zinc-300"> Architected with Next.js, Spring Boot API gateway (JWT auth, rate limiting), and FastAPI retrieval over SSE streaming.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Encrypted Traffic Classification:</strong>
                      <span className="text-zinc-300"> Full flow-analysis pipeline covering packet capture, JA3 fingerprinting, and ML classification without TLS decryption.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">AI/ML Internship @ YBI Foundation:</strong>
                      <span className="text-zinc-300"> Built document chunking, embedding workflows, and statistical validation pipelines.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="mt-6 space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">Primary Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Java",
                    "Spring Boot",
                    "Python",
                    "Apache Kafka",
                    "Redis",
                    "PostgreSQL",
                    "ChromaDB",
                    "FastAPI",
                    "Docker",
                    "AWS",
                    "Next.js",
                    "JUnit",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <Link
                  href="/Kaushik_Maslekar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  <Download className="size-4" />
                  <span>Download Resume PDF</span>
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-xs font-mono text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="size-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Email Copied!</span>
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
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-xs font-mono text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="size-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Phone Copied!</span>
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
