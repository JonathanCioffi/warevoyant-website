"use client";

import { useState } from "react";
import Image from "next/image";

/*
 * Instagram Reel Frames — Agency Creative Direction
 * Arc: Tension → Recognition → Resolution → Aspiration → Action
 * 7 frames, ~13s total
 */

const frames = [
  // ── Frame 1: HOOK — Provoke ──────────────────────────────────────────
  {
    id: 1,
    label: "Hook",
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-16">
        {/* Lots of negative space — let the emptiness sell the message */}
        <div className="flex-1" />
        <p className="text-[28px] font-light text-[#EAEBF2]/40 tracking-wide text-center mb-6">
          Your AV workflow
        </p>
        <p className="text-[52px] font-bold text-white text-center leading-none">
          is broken.
        </p>
        <div className="flex-1" />
        {/* Subtle blinking cursor effect (static frame — Canva adds animation) */}
        <div className="w-[2px] h-6 bg-white/60 mb-24" />
      </div>
    ),
  },

  // ── Frame 2: PAIN — The empty room ───────────────────────────────────
  {
    id: 2,
    label: "Pain",
    bg: "bg-black",
    content: (
      <div className="relative flex items-center justify-center h-full">
        {/* Dark, cold room — the problem visualized */}
        <Image src="/hero-room.jpg" alt="" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="relative z-10 px-14 text-center">
          <p className="text-[38px] text-white/90 leading-[1.3] mb-3" style={{ fontWeight: 300 }}>
            Disconnected tools.
          </p>
          <p className="text-[38px] text-white/70 leading-[1.3] mb-3" style={{ fontWeight: 300 }}>
            Manual reports.
          </p>
          <p className="text-[38px] text-white/50 leading-[1.3]" style={{ fontWeight: 300 }}>
            No visibility.
          </p>
        </div>
      </div>
    ),
  },

  // ── Frame 3: THE TURN — Three lines, each its own beat ───────────────
  {
    id: 3,
    label: "Turn",
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-10 text-center gap-10">
        <p className="text-[48px] font-bold text-white leading-none tracking-tight">
          Your Project.
        </p>
        <div className="w-12 h-[1px] bg-white/20" />
        <p className="text-[48px] font-bold text-white leading-none tracking-tight">
          Your Process.
        </p>
        <div className="w-12 h-[1px] bg-white/20" />
        <p className="text-[48px] font-bold leading-none tracking-tight">
          <span className="text-[#58B947]">One </span>
          <span className="text-[#009DD2]">Platform.</span>
        </p>
      </div>
    ),
  },

  // ── Frame 4: FEATURE — Lifecycle Management (Green) ──────────────────
  {
    id: 4,
    label: "Lifecycle",
    bg: "bg-[#231F20]",
    content: (
      <div className="flex h-full">
        {/* Left accent strip */}
        <div className="w-[6px] bg-[#58B947]" />
        <div className="flex-1 flex flex-col justify-center px-12">
          <p className="text-[14px] font-semibold tracking-[0.25em] uppercase text-[#58B947] mb-4">
            Lifecycle Management
          </p>
          <p className="text-[40px] font-bold text-white leading-[1.15] mb-6">
            Design through<br />decommission.
          </p>
          <div className="w-10 h-[1px] bg-white/15 mb-6" />
          <p className="text-[18px] text-[#EAEBF2]/50 leading-[1.6]">
            Phase gates. Task management.<br />Daily logs. Deficiency tracking.
          </p>
        </div>
      </div>
    ),
  },

  // ── Frame 5: FEATURE — Device Monitoring (Blue) ──────────────────────
  {
    id: 5,
    label: "Monitoring",
    bg: "bg-[#231F20]",
    content: (
      <div className="flex h-full">
        <div className="w-[6px] bg-[#009DD2]" />
        <div className="flex-1 flex flex-col justify-center px-12">
          <p className="text-[14px] font-semibold tracking-[0.25em] uppercase text-[#009DD2] mb-4">
            Device Monitoring
          </p>
          <p className="text-[40px] font-bold text-white leading-[1.15] mb-6">
            Industry-leading<br />integrations.
          </p>
          <div className="w-10 h-[1px] bg-white/15 mb-6" />
          <p className="text-[18px] text-[#EAEBF2]/50 leading-[1.6]">
            Real-time alerts. Environmental<br />compliance. System health.
          </p>
        </div>
      </div>
    ),
  },

  // ── Frame 6: FEATURE — Service Desk (Orange) ─────────────────────────
  {
    id: 6,
    label: "Service Desk",
    bg: "bg-[#231F20]",
    content: (
      <div className="flex h-full">
        <div className="w-[6px] bg-[#F07B20]" />
        <div className="flex-1 flex flex-col justify-center px-12">
          <p className="text-[14px] font-semibold tracking-[0.25em] uppercase text-[#F07B20] mb-4">
            Service Desk
          </p>
          <p className="text-[40px] font-bold text-white leading-[1.15] mb-6">
            Built for<br />AV operations.
          </p>
          <div className="w-10 h-[1px] bg-white/15 mb-6" />
          <p className="text-[18px] text-[#EAEBF2]/50 leading-[1.6]">
            SLA tracking. Priority routing.<br />Resolution workflows.
          </p>
        </div>
      </div>
    ),
  },

  // ── Frame 7: CTA — Close strong ──────────────────────────────────────
  {
    id: 7,
    label: "CTA",
    bg: "bg-black",
    content: (
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Room is alive now — warm, bright */}
        <Image src="/hero-room.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <Image src="/warevoyant-logo.png" alt="WareVoyant" width={280} height={56} className="mb-20" />

          <p className="text-[36px] font-bold text-white leading-[1.2] mb-14">
            Apply for<br />Early Access
          </p>

          <div className="bg-[#58B947] rounded-xl px-10 py-4 mb-14">
            <p className="text-[20px] font-bold text-white tracking-wide">
              warevoyant.com/beta
            </p>
          </div>

          <p className="text-[28px] font-bold leading-none tracking-tight">
            <span className="text-[#58B947]">One </span>
            <span className="text-[#009DD2]">Platform.</span>
          </p>
        </div>
      </div>
    ),
  },
];

export default function ReelFrames() {
  const [currentFrame, setCurrentFrame] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center py-10 gap-10">
      <div className="text-center">
        <h1 className="text-white text-xl font-semibold tracking-wide">WareVoyant — Instagram Reel</h1>
        <p className="text-white/40 text-sm mt-1">7 frames · ~13 seconds · 1080×1920</p>
      </div>

      {/* Frame selector */}
      <div className="flex gap-1.5">
        {frames.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setCurrentFrame(i)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              i === currentFrame
                ? "bg-white text-black"
                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Preview frame (scaled to ~phone size) */}
      <div className="flex gap-8 items-start">
        {/* Phone preview */}
        <div>
          <div
            className="relative overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-2xl"
            style={{ width: 320, height: 568 }}
          >
            <div
              className={`absolute inset-0 ${frames[currentFrame].bg}`}
              style={{ width: 320, height: 568 }}
            >
              <div style={{ transform: "scale(0.889)", transformOrigin: "top left", width: 360, height: 640 }}>
                {frames[currentFrame].content}
              </div>
            </div>
          </div>
          <p className="text-center text-white/30 text-xs mt-3">Preview (320×568)</p>
        </div>

        {/* Frame info */}
        <div className="pt-8 max-w-[200px]">
          <p className="text-white/80 text-sm font-semibold">Frame {frames[currentFrame].id}</p>
          <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{frames[currentFrame].label}</p>
          <div className="w-8 h-[1px] bg-white/10 my-4" />
          <p className="text-white/30 text-xs leading-relaxed">
            {currentFrame === 0 && "Hook — provoke with negative space. Cursor blink in Canva."}
            {currentFrame === 1 && "Pain — each line fades in. Room is dark, abandoned."}
            {currentFrame === 2 && "The turn — three lines, each on its own beat with separators."}
            {currentFrame === 3 && "Feature — green accent strip. Left-aligned, editorial."}
            {currentFrame === 4 && "Feature — blue accent strip. Same rhythm as lifecycle."}
            {currentFrame === 5 && "Feature — orange accent strip. Three features, three colors."}
            {currentFrame === 6 && "Close — room is warm now. Logo, CTA, One Platform in brand colors."}
          </p>
        </div>
      </div>

      {/* Full-size export frame */}
      <div className="mt-8">
        <p className="text-white/30 text-xs text-center mb-4">Full resolution (1080×1920) — scroll down to screenshot</p>
        <div
          id="export-frame"
          className={`${frames[currentFrame].bg} relative overflow-hidden border border-white/5`}
          style={{ width: 1080, height: 1920 }}
        >
          <div style={{ transform: "scale(3)", transformOrigin: "top left", width: 360, height: 640 }}>
            {frames[currentFrame].content}
          </div>
        </div>
      </div>
    </div>
  );
}
