"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal as TerminalIcon,
  X,
  Minus,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { useTheme } from "next-themes";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

const AVAILABLE_COMMANDS = [
  "help",
  "recruiter",
  "whoami",
  "cat about.txt",
  "projects",
  "skills",
  "benchmarks",
  "ssh prod-cluster",
  "spidey",
  "theme",
  "contact",
  "clear",
  "exit",
  "sudo rm -rf /",
];

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [terminalTheme, setTerminalTheme] = useState<"matrix" | "monokai" | "cyberpunk">("monokai");
  const [copied, setCopied] = useState(false);

  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Global event listener for shortcuts (~ or Ctrl+` or custom event)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on Ctrl+` or Backquote when not in an input
      if (
        (e.ctrlKey && e.key === "`") ||
        (e.key === "~" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA")
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-terminal", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-terminal", handleCustomOpen);
    };
  }, []);

  // Auto focus input when opened & scroll to bottom
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Initial welcome message
  useEffect(() => {
    setLogs([
      {
        id: "init",
        command: "welcome",
        time: new Date().toLocaleTimeString(),
        output: (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">
              Kaushik Maslekar — Backend & Distributed Systems CLI [v2.4.0-prod]
            </p>
            <p className="text-zinc-400">
              Type <span className="text-amber-300 font-bold">help</span> to see available commands or <span className="text-amber-300 font-bold">projects</span> to inspect backend systems.
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to history
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const timeStr = new Date().toLocaleTimeString();
    const cmdLower = cmd.toLowerCase();
    const parts = cmd.split(" ");
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let resultNode: React.ReactNode = null;

    if (cmdLower === "help" || cmdLower === "man") {
      resultNode = (
        <div className="space-y-3 text-xs leading-relaxed">
          <p className="text-zinc-300 font-semibold border-b border-white/10 pb-1">AVAILABLE COMMANDS:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-mono">
            <div>
              <span className="text-cyan-400 font-bold">whoami</span> / <span className="text-cyan-400">cat about.txt</span>
              <p className="text-zinc-400 text-[11px]">Developer background & summary</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">projects</span> / <span className="text-cyan-400">curl /api/projects</span>
              <p className="text-zinc-400 text-[11px]">List flagship backend projects</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">skills</span>
              <p className="text-zinc-400 text-[11px]">Technical skill matrix & tech stack</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">benchmarks</span>
              <p className="text-zinc-400 text-[11px]">RAG latency, recall & privacy metrics</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">ssh prod-cluster</span>
              <p className="text-zinc-400 text-[11px]">Simulated live K8s / Spring cluster check</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">spidey</span> <span className="text-amber-300">[--spin | --shoot | --joke]</span>
              <p className="text-zinc-400 text-[11px]">Control LEGO Spider-Man widget</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">theme</span> <span className="text-amber-300">[matrix | cyberpunk | monokai]</span>
              <p className="text-zinc-400 text-[11px]">Switch terminal styling palette</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">contact</span>
              <p className="text-zinc-400 text-[11px]">View contact info & social links</p>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">clear</span> / <span className="text-cyan-400 font-bold">exit</span>
              <p className="text-zinc-400 text-[11px]">Clear buffer / Close terminal window</p>
            </div>
          </div>
        </div>
      );
    } else if (cmdLower === "recruiter" || cmdLower === "fasttrack" || cmdLower === "summary") {
      window.dispatchEvent(new CustomEvent("open-recruiter-modal"));
      resultNode = (
        <div className="space-y-1 text-xs text-emerald-400 font-mono">
          <p>⚡ Opening 1-Minute Recruiter Fast-Track modal...</p>
          <p className="text-zinc-400">Snapshot loaded with key metrics, tech stack, and 1-click actions.</p>
        </div>
      );
    } else if (cmdLower === "whoami" || cmdLower === "cat about.txt" || cmdLower === "bio") {
      resultNode = (
        <div className="space-y-2 text-xs text-zinc-300">
          <p className="font-bold text-white text-sm">Kaushik Maslekar</p>
          <p className="text-cyan-300 font-mono">Backend Engineer · Distributed Systems · Applied AI</p>
          <p className="leading-relaxed">
            Final-year B.E. (Artificial Intelligence & Data Science) student at MMCOE Pune.
            Specializes in high-throughput Java/Spring Boot microservices, Kafka event streaming,
            resilient caching architectures (Redis/Postgres), and production RAG pipelines.
          </p>
          <div className="pt-1 text-zinc-400 flex flex-wrap gap-4 text-[11px]">
            <span>📍 Pune, India</span>
            <span>🎓 MMCOE (2024 - Present)</span>
            <span>💼 AI/ML Intern @ YBI Foundation</span>
          </div>
        </div>
      );
    } else if (cmdLower === "projects" || cmdLower.startsWith("curl") || cmdLower === "ls projects") {
      resultNode = (
        <div className="space-y-4 text-xs">
          <p className="text-zinc-300 font-semibold">HTTP/1.1 200 OK — Flagship Projects Payload:</p>
          <div className="space-y-3">
            {projects.slice(0, 3).map((p, idx) => (
              <div key={p.slug} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-300">
                    [{idx + 1}] {p.title}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">STATUS: PRODUCTION</span>
                </div>
                <p className="text-zinc-300 mt-1 text-[11px] leading-relaxed">{p.summary}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {p.technologies.map((t) => (
                    <span key={t} className="rounded bg-black/40 px-1.5 py-0.5 text-[10px] text-emerald-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cmdLower === "skills") {
      resultNode = (
        <div className="space-y-3 text-xs">
          <p className="text-zinc-300 font-semibold">TECHNICAL SKILL MATRIX:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillGroups.slice(0, 4).map((group) => (
              <div key={group.title} className="rounded border border-white/10 bg-black/30 p-2">
                <p className="text-amber-400 font-bold text-[11px] font-mono mb-1">{group.title}</p>
                <p className="text-zinc-300 text-[11px] leading-snug">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cmdLower === "benchmarks") {
      resultNode = (
        <div className="space-y-2 text-xs">
          <p className="text-zinc-300 font-semibold">PRODUCTION BENCHMARKS & EVALUATION METRICS:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-[11px] border-collapse border border-white/10">
              <thead>
                <tr className="bg-white/10 text-cyan-300">
                  <th className="p-1.5 border border-white/10">Platform</th>
                  <th className="p-1.5 border border-white/10">Metric</th>
                  <th className="p-1.5 border border-white/10">Result</th>
                  <th className="p-1.5 border border-white/10">Status</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr>
                  <td className="p-1.5 border border-white/10">Full-Stack RAG Chat</td>
                  <td className="p-1.5 border border-white/10">Recall@5 / MRR</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400 font-bold">83.3% / 0.83 MRR</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400">PASSED</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-white/10">Full-Stack RAG Chat</td>
                  <td className="p-1.5 border border-white/10">End-to-End Latency</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400 font-bold">76ms avg</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400">OPTIMAL</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-white/10">Encrypted Traffic Classifier</td>
                  <td className="p-1.5 border border-white/10">TLS Decryption</td>
                  <td className="p-1.5 border border-white/10 text-cyan-400 font-bold">0% (Zero-Decrypt)</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400">SECURE</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-white/10">MachinoCare IoT</td>
                  <td className="p-1.5 border border-white/10">ESP32 Telemetry</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400 font-bold">Real-Time WS</td>
                  <td className="p-1.5 border border-white/10 text-emerald-400">STREAMING</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (cmdLower.startsWith("ssh") || cmdLower.startsWith("k8s")) {
      resultNode = (
        <div className="space-y-1.5 text-xs font-mono text-zinc-300">
          <p className="text-yellow-400">Connecting to cluster: prod-eu-central-1.k8s.local...</p>
          <p className="text-zinc-400">[200 OK] Handshake established (mTLS encrypted)</p>
          <div className="mt-2 space-y-1 text-[11px]">
            <p className="text-emerald-400">● spring-boot-gateway-7b9f848-x4z9    1/1 Running (0 restarts, 42d)</p>
            <p className="text-emerald-400">● fastapi-rag-retriever-6c2a11-b8k1    1/1 Running (0 restarts, 42d)</p>
            <p className="text-emerald-400">● chromadb-vector-cluster-5f98-k91q    3/3 Running (0 restarts, 42d)</p>
            <p className="text-emerald-400">● kafka-broker-cluster-0..2            3/3 Running (0 restarts, 42d)</p>
            <p className="text-emerald-400">● postgresql-ha-primary-0             1/1 Running (0 restarts, 42d)</p>
          </div>
          <p className="text-cyan-400 pt-2">Cluster Health: 100% HEALTHY · Zero unhandled exceptions</p>
        </div>
      );
    } else if (mainCmd === "spidey") {
      const subArg = args[0]?.toLowerCase();
      if (subArg === "--spin") {
        resultNode = (
          <p className="text-red-400 font-mono text-xs">
            🕷️ LEGO Spidey just performed a 360° spin flip! THWIP!
          </p>
        );
      } else if (subArg === "--shoot") {
        resultNode = (
          <p className="text-red-400 font-mono text-xs">
            🕸️ THWIPP! Web splat deployed to coordinates [X: 420, Y: 180]!
          </p>
        );
      } else {
        const jokes = [
          "With great throughput comes great responsibility! 🧱",
          "Everything is awesome... especially 100% uptime! 🕷️",
          "Kafka partitions are just LEGO snap-connectors for data! 🕸️",
          "Careful! Don't step on LEGO Spidey without shoes! 🧱",
        ];
        resultNode = (
          <p className="text-amber-300 font-mono text-xs">
            LEGO Spidey says: &quot;{jokes[Math.floor(Math.random() * jokes.length)]}&quot;
          </p>
        );
      }
    } else if (mainCmd === "theme") {
      const selected = args[0]?.toLowerCase();
      if (selected === "matrix" || selected === "cyberpunk" || selected === "monokai") {
        setTerminalTheme(selected);
        resultNode = <p className="text-emerald-400 text-xs">Terminal theme switched to: {selected}</p>;
      } else {
        resultNode = <p className="text-zinc-400 text-xs">Usage: theme [matrix | cyberpunk | monokai]</p>;
      }
    } else if (cmdLower === "contact") {
      resultNode = (
        <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
          <p className="text-white font-bold">LET&apos;S CONNECT:</p>
          <p>📧 Email: <a href="mailto:maslekarkaushik@gmail.com" className="text-cyan-400 underline">maslekarkaushik@gmail.com</a></p>
          <p>🐙 GitHub: <a href="https://github.com/KaushikMaslekar" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/KaushikMaslekar</a></p>
          <p>🌐 Web: <a href="https://kaushikmaslekar.vercel.app" target="_blank" rel="noreferrer" className="text-cyan-400 underline">kaushikmaslekar.vercel.app</a></p>
          <p>📱 Phone: <span className="text-emerald-400">+91 9325790846</span></p>
        </div>
      );
    } else if (cmdLower === "clear") {
      setLogs([]);
      return;
    } else if (cmdLower === "exit" || cmdLower === "quit") {
      setIsOpen(false);
      return;
    } else if (cmdLower.includes("sudo rm -rf")) {
      resultNode = (
        <div className="space-y-1 text-xs font-mono text-red-500 font-bold">
          <p>⚠️ PERMISSION DENIED: Spider-Sense detected a catastrophic command!</p>
          <p className="text-amber-300">LEGO Spidey shot a web line and stopped your keystroke! 🕸️🧱</p>
        </div>
      );
    } else {
      resultNode = (
        <p className="text-red-400 text-xs font-mono">
          command not found: {cmd}. Type <span className="text-amber-300 underline cursor-pointer" onClick={() => handleCommand("help")}>help</span> to view available commands.
        </p>
      );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        command: rawCmd,
        output: resultNode,
        time: timeStr,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(history[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex] || "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const copyBuffer = () => {
    const text = logs.map((l) => `kaushik@portfolio:~$ ${l.command}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Launcher Trigger (bottom-left) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/90 px-3.5 py-2 text-xs font-mono font-medium text-white shadow-[0_8px_30px_rgb(0_0_0/0.4)] backdrop-blur-md transition-all hover:border-emerald-500 hover:text-emerald-400 group cursor-pointer"
        title="Open Developer Terminal (Shortcut: ` or ~)"
      >
        <TerminalIcon className="size-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">CLI Mode</span>
        <kbd className="rounded border border-white/20 bg-white/5 px-1 py-0.5 text-[10px] text-zinc-400">
          ~
        </kbd>
      </motion.button>

      {/* Terminal Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className={`flex flex-col rounded-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-200 overflow-hidden ${
                isMaximized
                  ? "w-full h-full"
                  : "w-full max-w-3xl h-[520px] max-h-[85vh]"
              } ${
                terminalTheme === "matrix"
                  ? "bg-black/95 text-emerald-400 font-mono border-emerald-500/30"
                  : terminalTheme === "cyberpunk"
                  ? "bg-zinc-950/95 text-pink-400 font-mono border-pink-500/30"
                  : "bg-zinc-950/95 text-zinc-100 font-mono"
              }`}
            >
              {/* Terminal Title Bar */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 bg-zinc-900/90 px-4 select-none">
                {/* Traffic Light Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="size-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer"
                    title="Close"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="size-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer"
                    title="Minimize"
                  />
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="size-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors cursor-pointer"
                    title={isMaximized ? "Restore" : "Maximize"}
                  />
                </div>

                {/* Window Title */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <TerminalIcon className="size-3.5 text-emerald-400" />
                  <span>kaushik@portfolio: ~ (bash)</span>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyBuffer}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-1"
                    title="Copy Terminal Output"
                  >
                    {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                  </button>
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-1 hidden sm:inline-block"
                  >
                    {isMaximized ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-1"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Logs & Output Scroll Container */}
              <div
                ref={scrollRef}
                onClick={() => inputRef.current?.focus()}
                className="flex-1 overflow-y-auto p-4 space-y-3 cursor-text text-xs leading-relaxed"
              >
                {logs.map((log) => (
                  <div key={log.id} className="space-y-1">
                    {log.command !== "welcome" && (
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-emerald-400 font-bold">kaushik@portfolio</span>
                        <span className="text-zinc-500">:</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-zinc-400">$</span>
                        <span className="text-white font-semibold">{log.command}</span>
                        <span className="text-[10px] text-zinc-600 ml-auto font-mono">{log.time}</span>
                      </div>
                    )}
                    <div className="pl-0 sm:pl-2">{log.output}</div>
                  </div>
                ))}

                {/* Active Prompt Line */}
                <div className="flex items-center gap-2 pt-1 font-mono">
                  <span className="text-emerald-400 font-bold">kaushik@portfolio</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-zinc-400">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white outline-none border-none font-mono text-xs caret-emerald-400"
                    placeholder="type 'help' for commands..."
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="flex items-center justify-between border-t border-white/10 bg-zinc-900/60 px-4 py-1.5 text-[11px] text-zinc-500 font-mono select-none">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    bash 5.2
                  </span>
                  <span>Tab Autocomplete</span>
                  <span>↑↓ History</span>
                </div>
                <div>Theme: {terminalTheme}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
