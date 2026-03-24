"use client";

import { useState } from "react";
import Image from "next/image";

const frames = [
  {
    id: 1,
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-12 text-center">
        <Image src="/warevoyant-logo.png" alt="WareVoyant" width={400} height={80} className="mb-16" />
        <p className="text-[52px] font-bold text-white leading-[1.15]">
          Your AV workflow<br />is broken.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    bg: "bg-black",
    content: (
      <div className="relative flex items-center justify-center h-full">
        <Image src="/hero-room.jpg" alt="Conference room" fill className="object-cover opacity-40" />
        <div className="relative z-10 px-12 text-center">
          <p className="text-[44px] font-bold text-white leading-[1.2] mb-8">
            Disconnected tools.
          </p>
          <p className="text-[44px] font-bold text-white leading-[1.2] mb-8">
            Manual reports.
          </p>
          <p className="text-[44px] font-bold text-white leading-[1.2]">
            No visibility.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-12 text-center">
        <Image src="/warevoyant-logo.png" alt="WareVoyant" width={360} height={72} className="mb-20" />
        <p className="text-[56px] font-bold text-white leading-[1.1]">
          Your Project.
        </p>
        <p className="text-[56px] font-bold text-white leading-[1.1]">
          Your Process.
        </p>
        <p className="text-[56px] font-bold leading-[1.1]">
          <span className="text-[#58B947]">One </span>
          <span className="text-[#009DD2]">Platform.</span>
        </p>
      </div>
    ),
  },
  {
    id: 4,
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-12 text-center">
        <div className="w-24 h-24 rounded-full bg-[#58B947]/20 flex items-center justify-center mb-10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#58B947" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </div>
        <p className="text-[20px] font-semibold tracking-[0.2em] uppercase text-[#58B947] mb-6">
          Lifecycle Management
        </p>
        <div className="w-16 h-[2px] bg-[#58B947] mb-8" />
        <p className="text-[36px] font-bold text-white leading-[1.2] mb-6">
          Design through<br />decommission.
        </p>
        <p className="text-[22px] text-[#EAEBF2]/60 leading-[1.5] max-w-[380px]">
          Phase gates, task management, daily logs, and deficiency tracking.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-12 text-center">
        <div className="w-24 h-24 rounded-full bg-[#009DD2]/20 flex items-center justify-center mb-10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#009DD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>
        <p className="text-[20px] font-semibold tracking-[0.2em] uppercase text-[#009DD2] mb-6">
          Device Monitoring
        </p>
        <div className="w-16 h-[2px] bg-[#009DD2] mb-8" />
        <p className="text-[36px] font-bold text-white leading-[1.2] mb-6">
          Industry-leading<br />integrations.
        </p>
        <p className="text-[22px] text-[#EAEBF2]/60 leading-[1.5] max-w-[380px]">
          Real-time alerts, environmental compliance, and system health at a glance.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    bg: "bg-[#231F20]",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-12 text-center">
        <div className="w-24 h-24 rounded-full bg-[#F07B20]/20 flex items-center justify-center mb-10">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F07B20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <p className="text-[20px] font-semibold tracking-[0.2em] uppercase text-[#F07B20] mb-6">
          Service Desk
        </p>
        <div className="w-16 h-[2px] bg-[#F07B20] mb-8" />
        <p className="text-[36px] font-bold text-white leading-[1.2] mb-6">
          Built for<br />AV operations.
        </p>
        <p className="text-[22px] text-[#EAEBF2]/60 leading-[1.5] max-w-[380px]">
          SLA tracking, priority routing, and resolution workflows that speak your language.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    bg: "bg-black",
    content: (
      <div className="relative flex flex-col items-center justify-center h-full">
        <Image src="/hero-room.jpg" alt="Conference room" fill className="object-cover opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <Image src="/warevoyant-logo.png" alt="WareVoyant" width={320} height={64} className="mb-16" />
          <p className="text-[40px] font-bold text-white leading-[1.2] mb-12">
            Apply for<br />Early Access
          </p>
          <div className="bg-[#58B947] rounded-2xl px-12 py-5 mb-10">
            <p className="text-[24px] font-bold text-white">
              warevoyant.com/beta
            </p>
          </div>
          <p className="text-[18px] text-[#EAEBF2]/50">
            Your Project. Your Process. One Platform.
          </p>
        </div>
      </div>
    ),
  },
];

export default function ReelFrames() {
  const [currentFrame, setCurrentFrame] = useState(0);

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center py-8 gap-8">
      <h1 className="text-white text-2xl font-bold">Instagram Reel Frames — Screenshot Each</h1>

      {/* Frame selector */}
      <div className="flex gap-2">
        {frames.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setCurrentFrame(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              i === currentFrame
                ? "bg-[#58B947] text-white"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            Frame {f.id}
          </button>
        ))}
      </div>

      {/* Current frame at 1080x1920 (scaled to fit screen) */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10"
        style={{ width: 360, height: 640 }}
      >
        <div
          className={`absolute inset-0 ${frames[currentFrame].bg}`}
          style={{ width: 360, height: 640 }}
        >
          {frames[currentFrame].content}
        </div>
      </div>

      {/* Full-size hidden frame for screenshot */}
      <p className="text-white/40 text-sm">
        For full-res export: right-click the frame below → Save Image, or screenshot at 1080x1920
      </p>
      <div
        id="export-frame"
        className={`${frames[currentFrame].bg} relative overflow-hidden`}
        style={{ width: 1080, height: 1920 }}
      >
        <div style={{ transform: "scale(3)", transformOrigin: "top left", width: 360, height: 640 }}>
          {frames[currentFrame].content}
        </div>
      </div>
    </div>
  );
}
