"use client";

const callouts = [
  {
    id: "callout-audit",
    title: "Audit & Reporting",
    description: "Automated compliance documentation and equipment validation",
    color: "#58B947",
    style: { top: "21.2%", left: "43.6%" },
  },
  {
    id: "callout-lifecycle",
    title: "Lifecycle Management",
    description: "End-to-end project tracking from design through decommission",
    color: "#58B947",
    style: { top: "21.2%", left: "26.4%" },
  },
  {
    id: "callout-monitoring",
    title: "Device Monitoring",
    description: "Real-time monitoring with industry-leading platform integrations",
    color: "#009DD2",
    style: { top: "21.2%", left: "60.9%" },
  },
  {
    id: "callout-commissioning",
    title: "Commission & Validate",
    description: "Standards-based measurement and validation tools",
    color: "#009DD2",
    style: { bottom: "18.7%", left: "34%" },
  },
  {
    id: "callout-servicedesk",
    title: "Service Desk",
    description: "Incident management purpose-built for AV operations",
    color: "#F07B20",
    style: { bottom: "18.7%", left: "51.2%" },
  },
];

const standards = [
  "IEC 61672",
  "AVIXA DISCAS",
  "ANSI/ASA S12.2",
  "ASHRAE 55",
];

export function HeroCallouts() {
  return (
    <>
      {callouts.map((c, i) => (
        <div
          key={c.id}
          className="absolute z-20 hidden md:block bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 max-w-[220px]"
          style={{
            ...c.style,
            animationName: "fadeInUp",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "both",
            animationDelay: `${0.3 + i * 0.15}s`,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: c.color }}
            />
            <span className="text-sm font-semibold text-white">
              {c.title}
            </span>
          </div>
          <p className="text-xs text-white/70 leading-snug">
            {c.description}
          </p>
        </div>
      ))}

      {/* Standards callout — portrait orientation, lower-right of hero */}
      <div
        className="absolute z-20 hidden md:block bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 w-[180px]"
        style={{
          bottom: "18.7%",
          right: "4%",
          animationName: "fadeInUp",
          animationDuration: "0.5s",
          animationTimingFunction: "ease-out",
          animationFillMode: "both",
          animationDelay: "1.2s",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: "#F07B20" }}
          />
          <span className="text-sm font-semibold text-white">Standards</span>
        </div>
        <p className="text-xs text-white/70 leading-snug mb-2">
          Built to the standards you&apos;re held to.
        </p>
        <div className="flex flex-col gap-1 border-t border-white/10 pt-2">
          {standards.map((s) => (
            <p key={s} className="text-xs text-white/70 text-center leading-tight">
              {s}
            </p>
          ))}
          <p className="text-[10px] text-white/40 text-center leading-tight italic mt-0.5">
            and others
          </p>
        </div>
      </div>
    </>
  );
}
