"use client";

import { useState } from "react";
import Image from "next/image";

/*
 * LinkedIn Carousel — 1080×1080 (square) format
 * 10-slide max on LinkedIn
 * Arc: Hook → Problem → Insight → Solution → Features → Proof → CTA
 */

const slides = [
  // ── Slide 1: HOOK — Stop the scroll ──────────────────────────────────
  {
    id: 1,
    label: "Cover",
    content: (
      <div className="relative flex flex-col h-full bg-[#231F20]">
        {/* Conference room background, very subtle */}
        <Image src="/hero-room.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#231F20] via-[#231F20]/80 to-[#231F20]" />
        <div className="relative z-10 flex flex-col h-full px-16 py-16">
          <Image src="/warevoyant-logo.png" alt="WareVoyant" width={160} height={32} />
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[15px] font-semibold tracking-[0.2em] uppercase text-[#58B947] mb-6">
              The AV industry has a problem
            </p>
            <p className="text-[42px] font-bold text-white leading-[1.1]">
              Your tools<br />weren&apos;t built<br />for you.
            </p>
          </div>
          <p className="text-[13px] text-white/30">Swipe →</p>
        </div>
      </div>
    ),
  },

  // ── Slide 2: PROBLEM — Empathize ─────────────────────────────────────
  {
    id: 2,
    label: "Problem",
    content: (
      <div className="flex flex-col h-full bg-[#231F20] px-16 py-16">
        <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-auto">
          The reality
        </p>
        <div className="space-y-8 mb-auto">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-3 shrink-0" />
            <p className="text-[24px] text-white/90 leading-[1.4]" style={{ fontWeight: 300 }}>
              Spreadsheets for commissioning checklists
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-3 shrink-0" />
            <p className="text-[24px] text-white/70 leading-[1.4]" style={{ fontWeight: 300 }}>
              Email chains for punch lists
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-3 shrink-0" />
            <p className="text-[24px] text-white/50 leading-[1.4]" style={{ fontWeight: 300 }}>
              Separate portals for monitoring, service, and reporting
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-3 shrink-0" />
            <p className="text-[24px] text-white/40 leading-[1.4]" style={{ fontWeight: 300 }}>
              No single view of your project lifecycle
            </p>
          </div>
        </div>
        <p className="text-[16px] text-white/50 mt-auto" style={{ fontWeight: 400 }}>
          Sound familiar?
        </p>
      </div>
    ),
  },

  // ── Slide 3: INSIGHT — Reframe ───────────────────────────────────────
  {
    id: 3,
    label: "Insight",
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-[#231F20] px-16 text-center">
        <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#009DD2] mb-10">
          Here&apos;s the thing
        </p>
        <p className="text-[32px] text-white leading-[1.3]" style={{ fontWeight: 300 }}>
          AV professionals don&apos;t need<br />
          <span className="font-bold">more tools.</span>
        </p>
        <div className="w-12 h-[1px] bg-white/15 my-10" />
        <p className="text-[32px] text-white leading-[1.3]" style={{ fontWeight: 300 }}>
          They need<br />
          <span className="font-bold text-[#58B947]">one </span>
          <span className="font-bold text-[#009DD2]">platform</span>
          <br />that speaks their language.
        </p>
      </div>
    ),
  },

  // ── Slide 4: SOLUTION INTRO ──────────────────────────────────────────
  {
    id: 4,
    label: "Solution",
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-[#231F20] px-14 text-center">
        <Image src="/warevoyant-logo.png" alt="WareVoyant" width={240} height={48} className="mb-14" />
        <p className="text-[40px] font-bold text-white leading-[1.15] mb-8">
          Your Project.
        </p>
        <div className="w-10 h-[1px] bg-white/15 mb-8" />
        <p className="text-[40px] font-bold text-white leading-[1.15] mb-8">
          Your Process.
        </p>
        <div className="w-10 h-[1px] bg-white/15 mb-8" />
        <p className="text-[40px] font-bold leading-[1.15]">
          <span className="text-[#58B947]">One </span>
          <span className="text-[#009DD2]">Platform.</span>
        </p>
        <div className="w-10 h-[1px] bg-white/15 mt-14 mb-6" />
        <p className="text-[16px] text-white/40 leading-[1.5] max-w-[320px]">
          The lifecycle management platform built for AV professionals.
        </p>
      </div>
    ),
  },

  // ── Slide 5: FEATURE — Lifecycle ─────────────────────────────────────
  {
    id: 5,
    label: "Lifecycle",
    content: (
      <div className="flex h-full bg-[#231F20]">
        <div className="w-[6px] bg-[#58B947]" />
        <div className="flex-1 flex flex-col px-14 py-16">
          <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#58B947] mb-3">
            01
          </p>
          <p className="text-[32px] font-bold text-white leading-[1.1] mb-6">
            Lifecycle<br />Management
          </p>
          <div className="w-10 h-[1px] bg-white/10 mb-8" />
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#58B947]" />
              <p className="text-[18px] text-white/70">Phase gates &amp; milestones</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#58B947]" />
              <p className="text-[18px] text-white/70">Task management</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#58B947]" />
              <p className="text-[18px] text-white/70">Daily logs</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#58B947]" />
              <p className="text-[18px] text-white/70">Deficiency tracking</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#58B947]" />
              <p className="text-[18px] text-white/70">Design through decommission</p>
            </div>
          </div>
          <p className="text-[14px] text-white/25 mt-auto">warevoyant.com</p>
        </div>
      </div>
    ),
  },

  // ── Slide 6: FEATURE — Monitoring ────────────────────────────────────
  {
    id: 6,
    label: "Monitoring",
    content: (
      <div className="flex h-full bg-[#231F20]">
        <div className="w-[6px] bg-[#009DD2]" />
        <div className="flex-1 flex flex-col px-14 py-16">
          <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#009DD2] mb-3">
            02
          </p>
          <p className="text-[32px] font-bold text-white leading-[1.1] mb-6">
            Device<br />Monitoring
          </p>
          <div className="w-10 h-[1px] bg-white/10 mb-8" />
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#009DD2]" />
              <p className="text-[18px] text-white/70">Industry-leading integrations</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#009DD2]" />
              <p className="text-[18px] text-white/70">Automated alerts</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#009DD2]" />
              <p className="text-[18px] text-white/70">Environmental compliance</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#009DD2]" />
              <p className="text-[18px] text-white/70">System health at a glance</p>
            </div>
          </div>
          <p className="text-[14px] text-white/25 mt-auto">warevoyant.com</p>
        </div>
      </div>
    ),
  },

  // ── Slide 7: FEATURE — Service Desk ──────────────────────────────────
  {
    id: 7,
    label: "Service",
    content: (
      <div className="flex h-full bg-[#231F20]">
        <div className="w-[6px] bg-[#F07B20]" />
        <div className="flex-1 flex flex-col px-14 py-16">
          <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#F07B20] mb-3">
            03
          </p>
          <p className="text-[32px] font-bold text-white leading-[1.1] mb-6">
            Service<br />Desk
          </p>
          <div className="w-10 h-[1px] bg-white/10 mb-8" />
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F07B20]" />
              <p className="text-[18px] text-white/70">SLA tracking</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F07B20]" />
              <p className="text-[18px] text-white/70">Priority routing</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F07B20]" />
              <p className="text-[18px] text-white/70">Resolution workflows</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F07B20]" />
              <p className="text-[18px] text-white/70">Built for AV operations</p>
            </div>
          </div>
          <p className="text-[14px] text-white/25 mt-auto">warevoyant.com</p>
        </div>
      </div>
    ),
  },

  // ── Slide 8: WHO IT'S FOR ────────────────────────────────────────────
  {
    id: 8,
    label: "Audience",
    content: (
      <div className="flex flex-col h-full bg-[#231F20] px-14 py-16">
        <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-12">
          Built for how you work
        </p>
        <div className="space-y-10 flex-1">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#58B947]/15 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#58B947" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
              </div>
              <p className="text-[20px] font-bold text-white">Enterprise</p>
            </div>
            <p className="text-[16px] text-white/50 pl-11 leading-[1.5]">
              Single-tenant for in-house AV and IT teams.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#009DD2]/15 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009DD2" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <p className="text-[20px] font-bold text-white">Pro Services</p>
            </div>
            <p className="text-[16px] text-white/50 pl-11 leading-[1.5]">
              Design through sign-off with clean client handoff.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#F07B20]/15 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F07B20" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <p className="text-[20px] font-bold text-white">Managed Services</p>
            </div>
            <p className="text-[16px] text-white/50 pl-11 leading-[1.5]">
              Multi-tenant for integrators and MSPs across client sites.
            </p>
          </div>
        </div>
        <p className="text-[14px] text-white/25 mt-auto">warevoyant.com</p>
      </div>
    ),
  },

  // ── Slide 9: STANDARDS ───────────────────────────────────────────────
  {
    id: 9,
    label: "Standards",
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-[#231F20] px-16 text-center">
        <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#F07B20] mb-10">
          Built on what matters
        </p>
        <p className="text-[28px] text-white/80 leading-[1.3] mb-12" style={{ fontWeight: 300 }}>
          Built to the standards<br />you&apos;re held to.
        </p>
        <div className="space-y-4">
          {["IEC 61672", "AVIXA DISCAS", "ANSI/ASA S12.2", "ASHRAE 55"].map((s) => (
            <p key={s} className="text-[20px] text-white/60 font-medium">{s}</p>
          ))}
          <p className="text-[16px] text-white/30 italic mt-2">and others</p>
        </div>
      </div>
    ),
  },

  // ── Slide 10: CTA ────────────────────────────────────────────────────
  {
    id: 10,
    label: "CTA",
    content: (
      <div className="relative flex flex-col items-center justify-center h-full bg-black">
        <Image src="/hero-room.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 flex flex-col items-center text-center px-14">
          <Image src="/warevoyant-logo.png" alt="WareVoyant" width={200} height={40} className="mb-16" />
          <p className="text-[28px] font-bold text-white leading-[1.2] mb-10">
            Pre-release access<br />is open.
          </p>
          <div className="bg-[#58B947] rounded-xl px-8 py-3.5 mb-10">
            <p className="text-[18px] font-bold text-white">
              warevoyant.com/beta
            </p>
          </div>
          <div className="w-10 h-[1px] bg-white/15 mb-8" />
          <p className="text-[24px] font-bold leading-none">
            <span className="text-[#58B947]">One </span>
            <span className="text-[#009DD2]">Platform.</span>
          </p>
        </div>
      </div>
    ),
  },
];

export default function CarouselFrames() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center py-10 gap-8">
      <div className="text-center">
        <h1 className="text-white text-xl font-semibold tracking-wide">WareVoyant — LinkedIn Carousel</h1>
        <p className="text-white/40 text-sm mt-1">10 slides · 1080×1080 · PDF export for LinkedIn</p>
      </div>

      {/* Slide selector */}
      <div className="flex gap-1 flex-wrap justify-center max-w-[600px]">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(i)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              i === currentSlide
                ? "bg-white text-black"
                : "bg-white/5 text-white/50 hover:bg-white/10"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Preview */}
      <div className="flex gap-8 items-start">
        <div>
          <div
            className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            style={{ width: 400, height: 400 }}
          >
            <div className="absolute inset-0" style={{ width: 400, height: 400 }}>
              <div style={{ transform: "scale(0.741)", transformOrigin: "top left", width: 540, height: 540 }}>
                {slides[currentSlide].content}
              </div>
            </div>
          </div>
          <p className="text-center text-white/30 text-xs mt-3">
            Slide {slides[currentSlide].id} of {slides.length}
          </p>
        </div>

        <div className="pt-4 max-w-[200px]">
          <p className="text-white/80 text-sm font-semibold">{slides[currentSlide].label}</p>
          <p className="text-white/30 text-xs mt-1">Slide {slides[currentSlide].id}</p>
        </div>
      </div>

      {/* Full-size export */}
      <div className="mt-8">
        <p className="text-white/30 text-xs text-center mb-4">Full resolution (1080×1080) — screenshot to export</p>
        <div
          id="export-slide"
          className="relative overflow-hidden border border-white/5"
          style={{ width: 1080, height: 1080 }}
        >
          <div style={{ transform: "scale(2)", transformOrigin: "top left", width: 540, height: 540 }}>
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
    </div>
  );
}
