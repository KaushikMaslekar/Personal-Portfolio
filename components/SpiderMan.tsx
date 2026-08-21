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
}

interface ThwipText {
  id: number;
  x: number;
  y: number;
  text: string;
}

const SPIDEY_QUIPS = [
  "Everything is awesome... especially 100% uptime! 🧱",
  "With great bricks comes great responsibility! 🕷️",
  "Careful! Don't step on me without shoes! 🧱",
  "Kafka partitions are just LEGO snap-connectors for data! 🕸️",
  "Thwip! Master builder of resilient backend architectures.",
  "Just hanging out like a certified Master Builder!",
  "Zero runtime bugs detected in this build!",
  "Friendly Neighborhood LEGO Spidey at your service!",
];

// Synthesize a retro comic "THWIP!" sound using Web Audio API
function playThwipSound() {
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
    osc.frequency.setValueAtTime(980, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.15);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(3200, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.24, ctx.currentTime);
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
  const [isHanging, setIsHanging] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentQuip, setCurrentQuip] = useState<string | null>(null);
  const [splats, setSplats] = useState<WebSplat[]>([]);
  const [thwips, setThwips] = useState<ThwipText[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [spideyAction, setSpideyAction] = useState<"idle" | "shooting" | "spinning">("idle");
  const quipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Welcome quip
  useEffect(() => {
    if (!mounted) return;
    const initialTimer = setTimeout(() => {
      setCurrentQuip("Hey! It's LEGO Spidey, the Master Builder! 🧱🕷️");
      quipTimeoutRef.current = setTimeout(() => {
        setCurrentQuip(null);
      }, 4500);
    }, 1500);

    return () => clearTimeout(initialTimer);
  }, [mounted]);

  const handleShootWeb = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (soundEnabled) {
      playThwipSound();
    }

    setSpideyAction("shooting");
    setTimeout(() => setSpideyAction("idle"), 500);

    const nextQuip = SPIDEY_QUIPS[Math.floor(Math.random() * SPIDEY_QUIPS.length)];
    if (quipTimeoutRef.current) clearTimeout(quipTimeoutRef.current);
    setCurrentQuip(nextQuip);
    quipTimeoutRef.current = setTimeout(() => setCurrentQuip(null), 4000);

    const clientX = e.clientX || window.innerWidth - 200;
    const clientY = e.clientY || 260;

    const newSplat: WebSplat = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      size: Math.floor(Math.random() * 45) + 65,
      rotation: Math.floor(Math.random() * 360),
    };

    const newThwip: ThwipText = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY - 30,
      text: ["THWIP!", "CLICK!", "THWIPP!", "SNAP!"][Math.floor(Math.random() * 4)],
    };

    setSplats((prev) => [...prev.slice(-7), newSplat]);
    setThwips((prev) => [...prev.slice(-5), newThwip]);

    setTimeout(() => {
      setSplats((prev) => prev.filter((s) => s.id !== newSplat.id));
    }, 4000);

    setTimeout(() => {
      setThwips((prev) => prev.filter((t) => t.id !== newThwip.id));
    }, 1200);
  };

  const handleSpideyClick = (e: React.MouseEvent) => {
    setSpideyAction("spinning");
    setTimeout(() => setSpideyAction("idle"), 800);
    handleShootWeb(e);
  };

  if (!mounted) return null;

  return (
    <>
      {/* ========================================================= */}
      {/* 🕸️ ATMOSPHERIC BACKGROUND SPIDER-WEBS */}
      {/* ========================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-40 dark:opacity-30 transition-opacity duration-700">
        {/* Top-Left Corner Geometric Spiderweb */}
        <div className="absolute -top-6 -left-6 w-72 h-72 sm:w-96 sm:h-96">
          <svg viewBox="0 0 300 300" className="w-full h-full stroke-red-500/30 dark:stroke-red-400/25 fill-none" strokeWidth="1.2">
            <defs>
              <linearGradient id="webGradTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0 0 L300 0" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L290 80" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L260 150" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L210 210" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L150 260" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L80 290" stroke="url(#webGradTopLeft)" />
            <path d="M0 0 L0 300" stroke="url(#webGradTopLeft)" />
            <path d="M50 0 Q45 20 40 40 Q20 45 0 50" stroke="url(#webGradTopLeft)" />
            <path d="M100 0 Q90 40 75 75 Q40 90 0 100" stroke="url(#webGradTopLeft)" />
            <path d="M150 0 Q135 60 110 110 Q60 135 0 150" stroke="url(#webGradTopLeft)" />
            <path d="M200 0 Q180 80 145 145 Q80 180 0 200" stroke="url(#webGradTopLeft)" />
            <path d="M250 0 Q225 100 180 180 Q100 225 0 250" stroke="url(#webGradTopLeft)" />
          </svg>
        </div>

        {/* Top-Right Corner Spidey Web Canopy */}
        <div className="absolute -top-8 -right-8 w-80 h-80 sm:w-[420px] sm:h-[420px]">
          <svg viewBox="0 0 300 300" className="w-full h-full stroke-blue-500/25 dark:stroke-blue-400/20 fill-none" strokeWidth="1.2">
            <defs>
              <linearGradient id="webGradTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M300 0 L0 0" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L10 80" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L40 150" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L90 210" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L150 260" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L220 290" stroke="url(#webGradTopRight)" />
            <path d="M300 0 L300 300" stroke="url(#webGradTopRight)" />
            <path d="M250 0 Q255 20 260 40 Q280 45 300 50" stroke="url(#webGradTopRight)" />
            <path d="M200 0 Q210 40 225 75 Q260 90 300 100" stroke="url(#webGradTopRight)" />
            <path d="M150 0 Q165 60 190 110 Q240 135 300 150" stroke="url(#webGradTopRight)" />
            <path d="M100 0 Q120 80 155 145 Q220 180 300 200" stroke="url(#webGradTopRight)" />
            <path d="M50 0 Q75 100 120 180 Q200 225 300 250" stroke="url(#webGradTopRight)" />
          </svg>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 💥 WEB SPLATS & THWIP POPUPS LAYER */}
      {/* ========================================================= */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        <AnimatePresence>
          {splats.map((splat) => (
            <motion.div
              key={splat.id}
              initial={{ scale: 0, opacity: 0.95 }}
              animate={{ scale: 1, opacity: 0.85 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                left: splat.x - splat.size / 2,
                top: splat.y - splat.size / 2,
                width: splat.size,
                height: splat.size,
                transform: `rotate(${splat.rotation}deg)`,
              }}
              className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full stroke-white/90 fill-none" strokeWidth="1.6">
                <path d="M50 50 L50 5 M50 50 L85 15 M50 50 L95 50 M50 50 L85 85 M50 50 L50 95 M50 50 L15 85 M50 50 L5 50 M50 50 L15 15" strokeLinecap="round" />
                <path d="M50 18 Q65 18 72 28 Q72 45 82 50 Q72 60 72 72 Q55 72 50 82 Q40 72 28 72 Q28 55 18 50 Q28 40 28 28 Q45 18 50 18 Z" />
                <path d="M50 32 Q60 32 64 38 Q64 48 70 50 Q64 55 64 64 Q52 64 50 70 Q42 64 36 64 Q36 52 30 50 Q36 42 36 38 Q45 32 50 32 Z" />
                <circle cx="50" cy="50" r="3.5" className="fill-white" />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Comic THWIP! Popups */}
        <AnimatePresence>
          {thwips.map((thwip) => (
            <motion.div
              key={thwip.id}
              initial={{ scale: 0.3, opacity: 0, y: 15, rotate: -15 }}
              animate={{ scale: 1.3, opacity: 1, y: -25, rotate: 6 }}
              exit={{ scale: 0.8, opacity: 0, y: -45 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: thwip.x - 45,
                top: thwip.y,
              }}
              className="select-none font-black tracking-widest text-red-500 drop-shadow-[0_4px_16px_rgba(239,68,68,0.9)] [text-shadow:_2px_2px_0_#ffffff,_-2px_-2px_0_#000000,_2px_-2px_0_#000000,_-2px_2px_0_#000000] text-2xl italic font-mono"
            >
              {thwip.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 🧱 MAIN INTERACTIVE LEGO SPIDER-MAN MINIFIGURE */}
      {/* ========================================================= */}
      <div className="fixed right-3 sm:right-10 top-0 z-50 flex flex-col items-center">
        {/* Sleek HUD Control Bar */}
        <div className="flex items-center gap-2 rounded-full border border-red-500/40 bg-zinc-950/90 px-3 py-1 text-[11px] font-medium text-white shadow-[0_4px_20px_rgba(239,68,68,0.3)] backdrop-blur-md transition-all hover:border-red-400 mt-1.5">
          <button
            onClick={() => setIsHanging(!isHanging)}
            className="flex items-center gap-1.5 hover:text-red-400 cursor-pointer transition-colors"
            title={isHanging ? "Tuck Spidey" : "Call Spidey!"}
          >
            {isHanging ? (
              <>
                <EyeOff className="size-3.5 text-red-400" />
                <span className="hidden sm:inline font-mono">Tuck Spidey</span>
              </>
            ) : (
              <>
                <Eye className="size-3.5 text-red-400" />
                <span className="font-mono">Call Spidey! 🧱</span>
              </>
            )}
          </button>

          {isHanging && (
            <>
              <span className="text-white/25">|</span>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="hover:text-white cursor-pointer transition-colors"
                title={soundEnabled ? "Mute Web Sound" : "Enable Web Sound"}
              >
                {soundEnabled ? (
                  <Volume2 className="size-3.5 text-red-400 hover:scale-110 transition-transform" />
                ) : (
                  <VolumeX className="size-3.5 text-zinc-500" />
                )}
              </button>
            </>
          )}
        </div>

        {/* LEGO Spidey Hanging & Silk Web */}
        <AnimatePresence>
          {isHanging && (
            <motion.div
              initial={{ y: -380, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -420, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 13,
                mass: 1.1,
              }}
              className="relative flex flex-col items-center origin-top"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Developer Quip Speech Bubble */}
              <AnimatePresence>
                {currentQuip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    className="absolute right-full mr-4 top-36 z-50 w-64 rounded-2xl border-2 border-red-500/70 bg-zinc-950/95 p-3.5 text-xs text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] backdrop-blur-lg"
                  >
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="size-4 text-yellow-400 shrink-0 mt-0.5 animate-spin" style={{ animationDuration: "6s" }} />
                      <p className="font-medium leading-relaxed font-sans">{currentQuip}</p>
                    </div>
                    <div className="absolute -right-2 top-5 h-3.5 w-3.5 rotate-45 border-t-2 border-r-2 border-red-500/70 bg-zinc-950" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Swinging Pendulum Group */}
              <motion.div
                animate={{
                  rotate: isHovered ? [0, -18, 18, -10, 10, 0] : [0, -7, 7, -4, 4, 0],
                  y: isHovered ? [0, -6, 0] : [0, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: isHovered ? 2.2 : 4.8,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center origin-top cursor-pointer select-none"
              >
                {/* Glowing Silk Web Strand */}
                <div className="w-[3px] h-24 sm:h-28 bg-gradient-to-b from-white via-white/80 to-white relative shadow-[0_0_14px_rgba(255,255,255,1)]">
                  <div className="absolute inset-0 bg-cyan-200/70 blur-[1.5px]" />
                </div>

                {/* ========================================================= */}
                {/* 🧱 HIGH-GLOSS AUTHENTIC LEGO SPIDER-MAN MINIFIGURE SVG */}
                {/* ========================================================= */}
                <motion.div
                  onClick={handleSpideyClick}
                  animate={
                    spideyAction === "spinning"
                      ? { rotate: [0, 360], scale: [1, 1.2, 1] }
                      : spideyAction === "shooting"
                      ? { scale: [1, 1.2, 0.95, 1], y: [0, 8, 0] }
                      : isHovered
                      ? { scale: 1.08 }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.55 }}
                  className="relative -mt-1 group cursor-pointer filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.9)]"
                  title="Click LEGO Spider-Man to shoot webs & spin!"
                >
                  {/* Subtle Red/Blue Minifig Aura */}
                  <div className="absolute inset-0 rounded-full bg-red-600/30 blur-2xl group-hover:bg-red-500/55 transition-all duration-300 pointer-events-none" />

                  <svg
                    width="120"
                    height="175"
                    viewBox="0 0 140 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 transition-transform duration-200"
                  >
                    <defs>
                      {/* Red ABS Plastic Shading */}
                      <linearGradient id="legoRedPlastic" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="60%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#991b1b" />
                      </linearGradient>

                      {/* Blue ABS Plastic Shading */}
                      <linearGradient id="legoBluePlastic" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="60%" stopColor="#1d4ed8" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>

                      {/* High-Gloss Specular Reflection */}
                      <linearGradient id="plasticGloss" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                        <stop offset="25%" stopColor="#ffffff" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>

                      {/* LEGO Eye Lens Gradient */}
                      <linearGradient id="legoLens" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="75%" stopColor="#f1f5f9" />
                        <stop offset="100%" stopColor="#cbd5e1" />
                      </linearGradient>
                    </defs>

                    {/* Web line going down into hand */}
                    <line x1="70" y1="0" x2="70" y2="28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

                    {/* ======================================================= */}
                    {/* 1. LEGO C-HAND GRIPPING THE WEB (Top at y=22..36)       */}
                    {/* ======================================================= */}
                    <g id="lego-grip-hand">
                      {/* Red C-Hand Clasp */}
                      <path
                        d="M62 26 C60 18, 78 18, 78 26 L80 32 C78 35, 62 35, 60 32 Z"
                        fill="url(#legoRedPlastic)"
                        stroke="#7f1d1d"
                        strokeWidth="1.2"
                      />
                      {/* C-Hand Inner Grip Cutout */}
                      <ellipse cx="70" cy="28" rx="4.5" ry="4" fill="#18181b" opacity="0.4" />
                      <circle cx="70" cy="28" r="2.2" fill="#ffffff" />
                      {/* Wrist Joint Cylinder */}
                      <rect x="65" y="32" width="10" height="4" rx="2" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="0.8" />
                    </g>

                    {/* ======================================================= */}
                    {/* 2. LEGO LEGS & HIPS (Inverted at top, y=36..80)         */}
                    {/* ======================================================= */}
                    <g id="lego-legs">
                      {/* Blue Minifig Hip Piece */}
                      <path
                        d="M48 76 L92 76 L90 84 L50 84 Z"
                        fill="url(#legoBluePlastic)"
                        stroke="#0f172a"
                        strokeWidth="1.2"
                      />
                      {/* Center Crotch Curve */}
                      <ellipse cx="70" cy="80" rx="3.5" ry="3.5" fill="#0f172a" />

                      {/* LEFT LEG (Dual molded Blue Thigh / Red Boot) */}
                      <g id="left-leg">
                        {/* Upper Blue Thigh */}
                        <rect x="49" y="56" width="18" height="20" rx="1.5" fill="url(#legoBluePlastic)" stroke="#0f172a" strokeWidth="1" />
                        {/* Lower Red Boot */}
                        <rect x="49" y="38" width="18" height="18" rx="1.5" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />
                        {/* Boot Web Pattern Print */}
                        <path d="M49 46 L67 46 M58 38 L58 56" stroke="#18181b" strokeWidth="0.9" opacity="0.7" />
                        {/* Foot Toe Block with anti-stud peg hole */}
                        <path d="M49 38 L67 38 L67 33 L49 33 Z" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />
                        <ellipse cx="58" cy="35" rx="3.5" ry="1.5" fill="#450a0a" />
                        {/* Gloss shine streak */}
                        <rect x="50" y="39" width="4" height="35" fill="url(#plasticGloss)" />
                      </g>

                      {/* RIGHT LEG (Dual molded Blue Thigh / Red Boot) */}
                      <g id="right-leg">
                        {/* Upper Blue Thigh */}
                        <rect x="73" y="56" width="18" height="20" rx="1.5" fill="url(#legoBluePlastic)" stroke="#0f172a" strokeWidth="1" />
                        {/* Lower Red Boot */}
                        <rect x="73" y="38" width="18" height="18" rx="1.5" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />
                        {/* Boot Web Pattern Print */}
                        <path d="M73 46 L91 46 M82 38 L82 56" stroke="#18181b" strokeWidth="0.9" opacity="0.7" />
                        {/* Foot Toe Block with anti-stud peg hole */}
                        <path d="M73 38 L91 38 L91 33 L73 33 Z" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />
                        <ellipse cx="82" cy="35" rx="3.5" ry="1.5" fill="#450a0a" />
                        {/* Gloss shine streak */}
                        <rect x="74" y="39" width="4" height="35" fill="url(#plasticGloss)" />
                      </g>
                    </g>

                    {/* ======================================================= */}
                    {/* 3. LEGO MINIFIGURE TRAPEZOID TORSO (y=84..132)          */}
                    {/* ======================================================= */}
                    <g id="lego-torso">
                      {/* Main Inverted Trapezoid Torso Shape */}
                      <path
                        d="M52 84 L88 84 L96 130 L44 130 Z"
                        fill="url(#legoRedPlastic)"
                        stroke="#7f1d1d"
                        strokeWidth="1.5"
                      />

                      {/* Midnight Blue Printed Side Panels */}
                      <path d="M52 84 L60 84 L53 130 L44 130 Z" fill="url(#legoBluePlastic)" stroke="#0f172a" strokeWidth="0.8" />
                      <path d="M80 84 L88 84 L96 130 L87 130 Z" fill="url(#legoBluePlastic)" stroke="#0f172a" strokeWidth="0.8" />

                      {/* Crisp LEGO Spider-Man Torso Web Grid Print */}
                      <path
                        d="M70 84 L70 130 M57 96 L83 96 M55 110 L85 110 M52 122 L88 122"
                        stroke="#18181b"
                        strokeWidth="1.1"
                        opacity="0.8"
                      />
                      <path
                        d="M60 96 Q70 102 80 96 M57 110 Q70 117 83 110 M54 122 Q70 129 86 122"
                        stroke="#18181b"
                        strokeWidth="1.1"
                        fill="none"
                        opacity="0.8"
                      />

                      {/* Iconic LEGO Spider-Man Chest Emblem */}
                      <g id="lego-spider-logo">
                        <ellipse cx="70" cy="112" rx="3.5" ry="4.5" fill="#09090b" />
                        <circle cx="70" cy="106" r="2" fill="#09090b" />
                        {/* Spider legs */}
                        <path
                          d="M68 108 C59 101, 58 109, 62 115 M68 111 C60 112, 59 120, 64 123 M68 106 C60 96, 58 104, 63 108"
                          stroke="#09090b"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M72 108 C81 101, 82 109, 78 115 M72 111 C80 112, 81 120, 76 123 M72 106 C80 96, 82 104, 77 108"
                          stroke="#09090b"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </g>

                      {/* Gloss Reflection Highlight Across Torso */}
                      <path d="M46 128 L53 86 L59 86 L52 128 Z" fill="url(#plasticGloss)" />
                    </g>

                    {/* ======================================================= */}
                    {/* 4. LEGO ARMS & HANDS (y=84..145)                        */}
                    {/* ======================================================= */}
                    {/* LEFT ARM (Reaching up to connect to gripping hand) */}
                    <g id="lego-left-arm">
                      <path
                        d="M44 128 C34 116, 42 70, 65 36"
                        stroke="url(#legoRedPlastic)"
                        strokeWidth="11"
                        strokeLinecap="round"
                      />
                      {/* Shoulder socket circle */}
                      <circle cx="43" cy="126" r="5.5" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />
                    </g>

                    {/* RIGHT ARM & ACTION C-HAND (Pointing/Shooting pose) */}
                    <g id="lego-right-arm">
                      {/* Shoulder socket circle */}
                      <circle cx="97" cy="126" r="5.5" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />
                      {/* Angled LEGO Arm */}
                      <path
                        d="M97 126 C112 135, 118 148, 114 162"
                        stroke="url(#legoRedPlastic)"
                        strokeWidth="11"
                        strokeLinecap="round"
                      />
                      {/* Wrist Connector */}
                      <circle cx="114" cy="164" r="3.5" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="0.8" />

                      {/* Signature LEGO C-Hand */}
                      <path
                        d="M110 166 C105 168, 106 182, 116 182 C124 182, 126 172, 120 166"
                        stroke="url(#legoRedPlastic)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>

                    {/* ======================================================= */}
                    {/* 5. LEGO MINIFIGURE CYLINDRICAL HEAD (Inverted y=132..186) */}
                    {/* ======================================================= */}
                    <g id="lego-head">
                      {/* Neck Connector Stud */}
                      <rect x="61" y="130" width="18" height="6" rx="2" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />

                      {/* Iconic Cylindrical LEGO Head Shape */}
                      <rect
                        x="46"
                        y="136"
                        width="48"
                        height="44"
                        rx="10"
                        fill="url(#legoRedPlastic)"
                        stroke="#7f1d1d"
                        strokeWidth="1.5"
                      />

                      {/* Top Stud (At bottom because inverted!) */}
                      <rect x="58" y="180" width="24" height="6" rx="2.5" fill="url(#legoRedPlastic)" stroke="#7f1d1d" strokeWidth="1" />

                      {/* Head Spider Webbing Pattern Print */}
                      <path
                        d="M70 136 L70 180 M46 158 L94 158 M52 144 L88 172 M52 172 L88 144"
                        stroke="#18181b"
                        strokeWidth="1.1"
                        opacity="0.85"
                      />
                      <ellipse cx="70" cy="158" rx="14" ry="14" stroke="#18181b" strokeWidth="1.1" fill="none" opacity="0.85" />
                      <ellipse cx="70" cy="158" rx="7" ry="7" stroke="#18181b" strokeWidth="1.1" fill="none" opacity="0.85" />

                      {/* --- ICONIC LEGO SPIDER-MAN PRINTED EYES --- */}
                      {/* Left Eye Lens (Bold black frame & large glossy white lens) */}
                      <path
                        d="M52 148 Q64 150 66 166 Q58 169 50 160 Q48 152 52 148 Z"
                        fill="#09090b"
                      />
                      <path
                        d="M54 150 Q62 152 64 163 Q57 166 52 158 Q50 153 54 150 Z"
                        fill="url(#legoLens)"
                      />
                      {/* Left Specular Highlight */}
                      <circle cx="56" cy="154" r="1.8" fill="#ffffff" />

                      {/* Right Eye Lens */}
                      <path
                        d="M88 148 Q76 150 74 166 Q82 169 90 160 Q92 152 88 148 Z"
                        fill="#09090b"
                      />
                      <path
                        d="M86 150 Q78 152 76 163 Q83 166 88 158 Q90 153 86 150 Z"
                        fill="url(#legoLens)"
                      />
                      {/* Right Specular Highlight */}
                      <circle cx="84" cy="154" r="1.8" fill="#ffffff" />

                      {/* Glossy Plastic Specular Curvature on Head */}
                      <path
                        d="M49 142 C54 138, 86 138, 91 142"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                    </g>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
