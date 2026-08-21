"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Volume2, VolumeX, Eye, EyeOff } from "lucide-react";

interface WebSplat {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: "red" | "pink";
}

interface ThwipText {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}

const SPIDEY_QUIPS = [
  "Everything is awesome with 100% uptime! 🧱",
  "With great bricks comes great responsibility! 🕷️",
  "Kafka partitions are just LEGO snap-connectors! 🕸️",
  "Zero runtime bugs detected in this build! 🚀",
  "Team Spider-Verse on duty with Gwen! ✨",
];

const GWEN_QUIPS = [
  "In my dimension, this architecture has 5-nines reliability! 🥁",
  "Ghost-Spider dropping in with zero merge conflicts! ✨",
  "Teamwork makes the dream work, Peter! 🕸️",
  "Multiversal RAG pipelines are running smooth! 🌸",
  "GWEN-THWIP! Ready for production! ⚡",
];

function playThwipSound(pitch = 980) {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(pitch, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.15);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(3400, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch {
    // AudioContext fallback
  }
}

export function SpiderMan() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Spidey state
  const [spideyHovered, setSpideyHovered] = useState(false);
  const [spideyAction, setSpideyAction] = useState<"idle" | "spinning">("idle");
  const [spideyQuip, setSpideyQuip] = useState<string | null>(null);

  // Gwen state
  const [gwenHovered, setGwenHovered] = useState(false);
  const [gwenAction, setGwenAction] = useState<"idle" | "spinning">("idle");
  const [gwenQuip, setGwenQuip] = useState<string | null>(null);

  // Effects
  const [splats, setSplats] = useState<WebSplat[]>([]);
  const [thwips, setThwips] = useState<ThwipText[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initial duo greeting
  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => {
      setSpideyQuip("Spider-Verse duo on duty! 🕷️🌸");
      setTimeout(() => setSpideyQuip(null), 3500);
    }, 1400);

    return () => clearTimeout(timer);
  }, [mounted]);

  // Click Spidey
  const handleSpideyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (soundEnabled) playThwipSound(980);

    setSpideyAction("spinning");
    setTimeout(() => setSpideyAction("idle"), 650);

    const quip = SPIDEY_QUIPS[Math.floor(Math.random() * SPIDEY_QUIPS.length)];
    setSpideyQuip(quip);
    setTimeout(() => setSpideyQuip(null), 3500);

    const clientX = e.clientX || window.innerWidth - 120;
    const clientY = e.clientY || 180;
    spawnSplat(clientX, clientY, "red", ["THWIP!", "SNAP!", "CLICK!"]);
  };

  // Click Gwen
  const handleGwenClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (soundEnabled) playThwipSound(1260);

    setGwenAction("spinning");
    setTimeout(() => setGwenAction("idle"), 650);

    const quip = GWEN_QUIPS[Math.floor(Math.random() * GWEN_QUIPS.length)];
    setGwenQuip(quip);
    setTimeout(() => setGwenQuip(null), 3500);

    const clientX = e.clientX || window.innerWidth - 60;
    const clientY = e.clientY || 180;
    spawnSplat(clientX, clientY, "pink", ["GWEN-THWIP!", "FWIP!", "ZIP!"]);
  };

  const spawnSplat = (x: number, y: number, color: "red" | "pink", words: string[]) => {
    const newSplat: WebSplat = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.floor(Math.random() * 30) + 40,
      rotation: Math.floor(Math.random() * 360),
      color,
    };

    const newThwip: ThwipText = {
      id: Date.now() + Math.random(),
      x,
      y: y - 20,
      text: words[Math.floor(Math.random() * words.length)],
      color: color === "pink" ? "text-pink-400" : "text-red-400",
    };

    setSplats((prev) => [...prev.slice(-5), newSplat]);
    setThwips((prev) => [...prev.slice(-3), newThwip]);

    setTimeout(() => setSplats((prev) => prev.filter((s) => s.id !== newSplat.id)), 3000);
    setTimeout(() => setThwips((prev) => prev.filter((t) => t.id !== newThwip.id)), 1000);
  };

  if (!mounted) return null;

  return (
    <>
      {/* ========================================================= */}
      {/* 🕸️ PROMINENT ATMOSPHERIC BACKGROUND SPIDER-WEBS */}
      {/* ========================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-60 dark:opacity-50 transition-opacity duration-700">
        {/* Top-Left Corner Geometric Spiderweb */}
        <div className="absolute -top-4 -left-4 w-80 h-80 sm:w-[420px] sm:h-[420px]">
          <svg viewBox="0 0 300 300" className="w-full h-full stroke-white/50 fill-none" strokeWidth="1.2">
            <defs>
              <linearGradient id="webGradTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Radial Web Struts */}
            <path d="M0 0 L300 0" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L290 80" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L260 150" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L210 210" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L150 260" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L80 290" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L0 300" stroke="url(#webGradTopLeft)" />

            {/* Concentric Web Spirals */}
            <path d="M50 0 Q45 20 40 40 Q20 45 0 50" stroke="url(#webGradTopLeft)" strokeWidth="1.4" />
            <path d="M100 0 Q90 40 75 75 Q40 90 0 100" stroke="url(#webGradTopLeft)" strokeWidth="1.4" />
            <path d="M150 0 Q135 60 110 110 Q60 135 0 150" stroke="url(#webGradTopLeft)" strokeWidth="1.3" />
            <path d="M200 0 Q180 80 145 145 Q80 180 0 200" stroke="url(#webGradTopLeft)" strokeWidth="1.2" />
            <path d="M250 0 Q225 100 180 180 Q100 225 0 250" stroke="url(#webGradTopLeft)" strokeWidth="1.1" />
            <path d="M300 0 Q270 120 215 215 Q120 270 0 300" stroke="url(#webGradTopLeft)" strokeWidth="1.0" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Top-Right Corner Spidey Web Canopy (Framing Spidey & Gwen) */}
        <div className="absolute -top-6 -right-6 w-88 h-88 sm:w-[460px] sm:h-[460px]">
          <svg viewBox="0 0 300 300" className="w-full h-full stroke-white/50 fill-none" strokeWidth="1.2">
            <defs>
              <linearGradient id="webGradTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Radial Struts */}
            <path d="M300 0 L0 0" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L10 80" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L40 150" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L90 210" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L150 260" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L220 290" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L300 300" stroke="url(#webGradTopRight)" />

            {/* Spiral Connectors */}
            <path d="M250 0 Q255 20 260 40 Q280 45 300 50" stroke="url(#webGradTopRight)" strokeWidth="1.4" />
            <path d="M200 0 Q210 40 225 75 Q260 90 300 100" stroke="url(#webGradTopRight)" strokeWidth="1.4" />
            <path d="M150 0 Q165 60 190 110 Q240 135 300 150" stroke="url(#webGradTopRight)" strokeWidth="1.3" />
            <path d="M100 0 Q120 80 155 145 Q220 180 300 200" stroke="url(#webGradTopRight)" strokeWidth="1.2" />
            <path d="M50 0 Q75 100 120 180 Q200 225 300 250" stroke="url(#webGradTopRight)" strokeWidth="1.1" />
          </svg>
        </div>

        {/* Ambient Silk Strands */}
        <div className="absolute top-1/3 left-8 w-64 h-32 opacity-40">
          <svg viewBox="0 0 200 100" className="w-full h-full stroke-white/40 fill-none" strokeWidth="0.9">
            <path d="M0 20 Q100 80 200 10" />
            <path d="M20 0 Q110 60 190 90" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      {/* Background Web Splats & Popups */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        <AnimatePresence>
          {splats.map((splat) => (
            <motion.div
              key={splat.id}
              initial={{ scale: 0, opacity: 0.95 }}
              animate={{ scale: 1, opacity: 0.85 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute",
                left: splat.x - splat.size / 2,
                top: splat.y - splat.size / 2,
                width: splat.size,
                height: splat.size,
                transform: `rotate(${splat.rotation}deg)`,
              }}
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            >
              <svg viewBox="0 0 100 100" className={`h-full w-full fill-none ${splat.color === "pink" ? "stroke-pink-400" : "stroke-red-400"}`} strokeWidth="1.6">
                <path d="M50 50 L50 5 M50 50 L85 15 M50 50 L95 50 M50 50 L85 85 M50 50 L50 95 M50 50 L15 85 M50 50 L5 50 M50 50 L15 15" strokeLinecap="round" />
                <path d="M50 18 Q65 18 72 28 Q72 45 82 50 Q72 60 72 72 Q55 72 50 82 Q40 72 28 72 Q28 55 18 50 Q28 40 28 28 Q45 18 50 18 Z" />
                <circle cx="50" cy="50" r="3" className="fill-white" />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* THWIP Text Badges */}
        <AnimatePresence>
          {thwips.map((thwip) => (
            <motion.div
              key={thwip.id}
              initial={{ scale: 0.3, opacity: 0, y: 10, rotate: -10 }}
              animate={{ scale: 1.2, opacity: 1, y: -20, rotate: 4 }}
              exit={{ scale: 0.8, opacity: 0, y: -35 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: thwip.x - 30,
                top: thwip.y,
              }}
              className={`select-none font-black tracking-wider ${thwip.color} drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] [text-shadow:_1.5px_1.5px_0_#ffffff,_-1px_-1px_0_#000] text-base italic font-mono`}
            >
              {thwip.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 🕷️🌸 SIDE-BY-SIDE SPIDER-MAN & GWEN STACY DUO */}
      {/* ========================================================= */}
      <div className="fixed right-3 sm:right-10 top-0 z-50 flex flex-col items-end pointer-events-auto">
        {/* Sleek Mini Top Toggle */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-zinc-950/90 px-2 py-0.5 text-[10px] font-mono text-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-md mt-1">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center gap-1 hover:text-red-400 cursor-pointer transition-colors"
            title={isVisible ? "Tuck Spider-Verse Duo" : "Call Duo"}
          >
            {isVisible ? (
              <>
                <EyeOff className="size-3 text-red-400" />
                <span className="hidden sm:inline">Tuck</span>
              </>
            ) : (
              <>
                <Eye className="size-3 text-pink-400" />
                <span>Spidey &amp; Gwen</span>
              </>
            )}
          </button>

          {isVisible && (
            <>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title={soundEnabled ? "Mute Web Audio" : "Enable Web Audio"}
              >
                {soundEnabled ? <Volume2 className="size-3 text-cyan-400" /> : <VolumeX className="size-3 text-zinc-600" />}
              </button>
            </>
          )}
        </div>

        {/* Duo Hanging Side by Side */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ y: -260, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 85, damping: 13 }}
              className="flex items-start gap-2.5 pt-1"
            >
              {/* =================================================== */}
              {/* 1. LEGO SPIDER-MAN (MINI SIZE ~52px)                */}
              {/* =================================================== */}
              <div
                className="relative flex flex-col items-center origin-top cursor-pointer select-none"
                onMouseEnter={() => setSpideyHovered(true)}
                onMouseLeave={() => setSpideyHovered(false)}
              >
                {/* Spidey Quip Bubble */}
                <AnimatePresence>
                  {spideyQuip && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 15 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 15 }}
                      className="absolute right-full mr-2 top-14 z-50 w-48 rounded-xl border border-red-500/70 bg-zinc-950/95 p-2.5 text-[11px] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] backdrop-blur-lg"
                    >
                      <p className="font-medium font-sans leading-tight">{spideyQuip}</p>
                      <div className="absolute -right-1.5 top-3.5 h-2.5 w-2.5 rotate-45 border-t border-r border-red-500/70 bg-zinc-950" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Spidey Swing Physics */}
                <motion.div
                  animate={{
                    rotate: spideyHovered ? [0, -14, 14, -6, 6, 0] : [0, -5, 5, -2, 2, 0],
                    y: spideyHovered ? [0, -3, 0] : [0, -1.5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: spideyHovered ? 2.0 : 4.4,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center origin-top"
                >
                  {/* Glowing Silk Web Line */}
                  <div className="w-[1.8px] h-14 sm:h-18 bg-gradient-to-b from-white via-white/80 to-white relative shadow-[0_0_8px_rgba(255,255,255,0.9)]" />

                  {/* Mini LEGO Spidey SVG (~52px) */}
                  <motion.div
                    onClick={handleSpideyClick}
                    animate={
                      spideyAction === "spinning"
                        ? { rotate: [0, 360], scale: [1, 1.25, 1] }
                        : spideyHovered
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.45 }}
                    className="relative -mt-1 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]"
                    title="Click LEGO Spidey!"
                  >
                    <svg
                      width="52"
                      height="76"
                      viewBox="0 0 140 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-10"
                    >
                      <defs>
                        <linearGradient id="duoSpideyRed" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="60%" stopColor="#dc2626" />
                          <stop offset="100%" stopColor="#991b1b" />
                        </linearGradient>
                        <linearGradient id="duoSpideyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>
                      </defs>

                      <line x1="70" y1="0" x2="70" y2="28" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />

                      {/* LEGO C-Hand Top */}
                      <path d="M62 26 C60 18, 78 18, 78 26 L80 32 C78 35, 62 35, 60 32 Z" fill="url(#duoSpideyRed)" stroke="#7f1d1d" strokeWidth="1.2" />
                      <circle cx="70" cy="28" r="2.5" fill="#ffffff" />

                      {/* Legs & Hips */}
                      <path d="M48 76 L92 76 L90 84 L50 84 Z" fill="url(#duoSpideyBlue)" stroke="#0f172a" strokeWidth="1.2" />
                      <rect x="49" y="56" width="18" height="20" rx="1.5" fill="url(#duoSpideyBlue)" />
                      <rect x="49" y="38" width="18" height="18" rx="1.5" fill="url(#duoSpideyRed)" />
                      <rect x="73" y="56" width="18" height="20" rx="1.5" fill="url(#duoSpideyBlue)" />
                      <rect x="73" y="38" width="18" height="18" rx="1.5" fill="url(#duoSpideyRed)" />

                      {/* Torso */}
                      <path d="M52 84 L88 84 L96 130 L44 130 Z" fill="url(#duoSpideyRed)" stroke="#7f1d1d" strokeWidth="1.5" />
                      <path d="M52 84 L60 84 L53 130 L44 130 Z" fill="url(#duoSpideyBlue)" />
                      <path d="M80 84 L88 84 L96 130 L87 130 Z" fill="url(#duoSpideyBlue)" />
                      {/* Spider Logo */}
                      <ellipse cx="70" cy="112" rx="3.5" ry="4.5" fill="#09090b" />
                      <circle cx="70" cy="106" r="2" fill="#09090b" />

                      {/* Arms */}
                      <path d="M44 128 C34 116, 42 70, 65 36" stroke="url(#duoSpideyRed)" strokeWidth="11" strokeLinecap="round" />
                      <path d="M97 126 C112 135, 118 148, 114 162" stroke="url(#duoSpideyRed)" strokeWidth="11" strokeLinecap="round" />
                      <path d="M110 166 C105 168, 106 182, 116 182 C124 182, 126 172, 120 166" stroke="url(#duoSpideyRed)" strokeWidth="4" strokeLinecap="round" fill="none" />

                      {/* Head */}
                      <rect x="46" y="136" width="48" height="44" rx="10" fill="url(#duoSpideyRed)" stroke="#7f1d1d" strokeWidth="1.5" />
                      <rect x="58" y="180" width="24" height="6" rx="2.5" fill="url(#duoSpideyRed)" stroke="#7f1d1d" strokeWidth="1" />
                      {/* Eyes */}
                      <path d="M52 148 Q64 150 66 166 Q58 169 50 160 Q48 152 52 148 Z" fill="#09090b" />
                      <path d="M54 150 Q62 152 64 163 Q57 166 52 158 Q50 153 54 150 Z" fill="#ffffff" />
                      <path d="M88 148 Q76 150 74 166 Q82 169 90 160 Q92 152 88 148 Z" fill="#09090b" />
                      <path d="M86 150 Q78 152 76 163 Q83 166 88 158 Q90 153 86 150 Z" fill="#ffffff" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* =================================================== */}
              {/* 2. SPIDER-GWEN (GWEN STACY) (MINI SIZE ~50px)       */}
              {/* =================================================== */}
              <div
                className="relative flex flex-col items-center origin-top cursor-pointer select-none"
                onMouseEnter={() => setGwenHovered(true)}
                onMouseLeave={() => setGwenHovered(false)}
              >
                {/* Gwen Quip Bubble */}
                <AnimatePresence>
                  {gwenQuip && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 15 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 15 }}
                      className="absolute right-full mr-2 top-14 z-50 w-48 rounded-xl border border-pink-500/70 bg-zinc-950/95 p-2.5 text-[11px] text-white shadow-[0_0_15px_rgba(236,72,153,0.4)] backdrop-blur-lg"
                    >
                      <p className="font-medium font-sans leading-tight">{gwenQuip}</p>
                      <div className="absolute -right-1.5 top-3.5 h-2.5 w-2.5 rotate-45 border-t border-r border-pink-500/70 bg-zinc-950" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Gwen Swing Physics (Offset phase for natural motion) */}
                <motion.div
                  animate={{
                    rotate: gwenHovered ? [0, 14, -14, 6, -6, 0] : [0, 5, -5, 2, -2, 0],
                    y: gwenHovered ? [0, -3, 0] : [0, -1.5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: gwenHovered ? 2.1 : 4.2,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="flex flex-col items-center origin-top"
                >
                  {/* Glowing Pink/Silk Web Line */}
                  <div className="w-[1.8px] h-18 sm:h-22 bg-gradient-to-b from-pink-300 via-white to-pink-400 relative shadow-[0_0_8px_rgba(236,72,153,0.9)]" />

                  {/* Mini Spider-Gwen SVG (~50px) */}
                  <motion.div
                    onClick={handleGwenClick}
                    animate={
                      gwenAction === "spinning"
                        ? { rotate: [0, 360], scale: [1, 1.25, 1] }
                        : gwenHovered
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.45 }}
                    className="relative -mt-1 filter drop-shadow-[0_8px_16px_rgba(236,72,153,0.4)]"
                    title="Click Spider-Gwen!"
                  >
                    <svg
                      width="50"
                      height="76"
                      viewBox="0 0 140 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-10"
                    >
                      <defs>
                        <linearGradient id="duoGwenWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="75%" stopColor="#f1f5f9" />
                          <stop offset="100%" stopColor="#cbd5e1" />
                        </linearGradient>
                        <linearGradient id="duoGwenBlack" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e293b" />
                          <stop offset="100%" stopColor="#09090b" />
                        </linearGradient>
                        <linearGradient id="duoGwenPink" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#db2777" />
                        </linearGradient>
                      </defs>

                      {/* Web Grip Attachment */}
                      <line x1="70" y1="0" x2="70" y2="28" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M62 26 C60 18, 78 18, 78 26 L80 32 C78 35, 62 35, 60 32 Z" fill="url(#duoGwenWhite)" stroke="#cbd5e1" strokeWidth="1.2" />

                      {/* Legs (Black with Turquoise soles) */}
                      <rect x="49" y="56" width="18" height="28" rx="1.5" fill="url(#duoGwenBlack)" />
                      <rect x="73" y="56" width="18" height="28" rx="1.5" fill="url(#duoGwenBlack)" />
                      <rect x="49" y="38" width="18" height="18" rx="1.5" fill="#06b6d4" />
                      <rect x="73" y="38" width="18" height="18" rx="1.5" fill="#06b6d4" />

                      {/* Torso */}
                      <path d="M52 84 L88 84 L96 130 L44 130 Z" fill="url(#duoGwenWhite)" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M44 95 L56 95 L52 130 L44 130 Z" fill="url(#duoGwenBlack)" />
                      <path d="M96 95 L84 95 L88 130 L96 130 Z" fill="url(#duoGwenBlack)" />
                      <path d="M58 95 Q70 102 82 95 M56 110 Q70 117 84 110" stroke="url(#duoGwenPink)" strokeWidth="1.6" fill="none" />

                      {/* Arms */}
                      <path d="M44 128 C34 116, 42 70, 65 36" stroke="url(#duoGwenWhite)" strokeWidth="10" strokeLinecap="round" />
                      <path d="M97 126 C108 135, 114 148, 110 162" stroke="url(#duoGwenWhite)" strokeWidth="10" strokeLinecap="round" />
                      <path d="M106 166 C102 168, 103 178, 112 178" stroke="url(#duoGwenWhite)" strokeWidth="3.5" strokeLinecap="round" fill="none" />

                      {/* Iconic Ghost-Spider Hood & Head */}
                      <path
                        d="M70 136 C46 136, 40 152, 40 170 C40 188, 52 194, 70 194 C88 194, 100 188, 100 170 C100 152, 94 136, 70 136 Z"
                        fill="url(#duoGwenWhite)"
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M70 142 C52 142, 46 156, 46 170 C46 182, 56 186, 70 186 C84 186, 94 182, 94 170 C94 156, 88 142, 70 142 Z"
                        fill="url(#duoGwenPink)"
                      />
                      <ellipse cx="70" cy="166" rx="19" ry="16" fill="url(#duoGwenWhite)" />

                      {/* Eyes */}
                      <path d="M56 158 Q64 160 66 172 Q59 174 54 167 Z" fill="#06b6d4" stroke="#db2777" strokeWidth="1.2" />
                      <path d="M57 160 Q63 162 64 170 Q59 172 55 167 Z" fill="#ffffff" />
                      <path d="M84 158 Q76 160 74 172 Q81 174 86 167 Z" fill="#06b6d4" stroke="#db2777" strokeWidth="1.2" />
                      <path d="M83 160 Q77 162 76 170 Q81 172 85 167 Z" fill="#ffffff" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
