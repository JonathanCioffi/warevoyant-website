import Link from "next/link";
import Image from "next/image";
import { HeroCallouts } from "./components/hero-callouts";

const pillars = [
  {
    title: "Lifecycle Management",
    description:
      "End-to-end project tracking from design through decommission. Phase gates, task management, daily logs, and deficiency tracking — built for how AV projects actually move.",
    color: "#58B947",
  },
  {
    title: "Device Monitoring",
    description:
      "Real-time device monitoring with native integrations to industry-leading platforms — automated alerts, environmental compliance, and system health at a glance.",
    color: "#009DD2",
  },
  {
    title: "Service Desk",
    description:
      "Incident management purpose-built for AV operations. SLA tracking, priority routing, and resolution workflows that speak your language.",
    color: "#F07B20",
  },
  {
    title: "Commissioning & Validation",
    description:
      "Standards-based measurement and validation tools. SPL metering, speech intelligibility, reverberation analysis, and display calibration — all tied to your audit trail.",
    color: "#009DD2",
  },
  {
    title: "Audit & Reporting",
    description:
      "Automated compliance documentation and equipment validation. Generate professional reports that meet the standards your clients expect.",
    color: "#58B947",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-[#231F20]/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/warevoyant-logo.png"
              alt="WareVoyant"
              width={160}
              height={40}
              priority
            />
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <a
              href="#features"
              className="hover:text-[#009DD2] transition-colors"
            >
              Features
            </a>
            <Link
              href="/beta"
              className="hover:text-[#009DD2] transition-colors"
            >
              Early Access
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — Interactive Callout Design */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-room.jpg"
          alt="Modern conference room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#231F20]/70 via-[#231F20]/40 to-[#231F20]" />

        {/* Left text overlay — headline and subtext */}
        <div className="absolute top-[4%] md:top-[12%] left-0 z-10 px-6 md:px-12 lg:px-20 max-w-[500px]">
          <h1 className="text-4xl md:text-[2.5rem] lg:text-[2.8rem] font-bold tracking-tight mb-10 text-white leading-[1.1]">
            <span className="block">Your Project.</span>
            <span className="block">Your Process.</span>
            <span className="block"><span style={{ color: "#58B947" }}>One</span>{" "}<span style={{ color: "#009DD2" }}>Platform.</span></span>
          </h1>
          <p className="text-base md:text-lg text-[#EAEBF2]/80 max-w-sm">
            WareVoyant is the lifecycle management platform built for AV
            professionals — from scoping through service, designed around how
            you actually work.
          </p>
        </div>

        {/* CTA button — bottom-aligned with lower callouts */}
        <div className="absolute z-10 px-6 md:px-12 lg:px-20" style={{ bottom: "18.7%" }}>
          <Link
            href="/beta"
            className="inline-block bg-[#58B947] hover:bg-[#4aa33c] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Apply for Early Access &rarr;
          </Link>
        </div>

        {/* Callout boxes + anchor dots + connector lines (client component) */}
        <HeroCallouts />
      </section>

      {/* Built for how you work */}
      <section id="features" className="py-6 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built for how you work.
          </h2>
          <p className="text-center text-[#EAEBF2]/60 max-w-2xl mx-auto mb-6">
            Whether you&apos;re an enterprise AV team, an integrator delivering
            projects, or an MSP managing multiple clients — WareVoyant adapts
            to your workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Enterprise */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-[#58B947]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <p className="text-sm text-[#EAEBF2]/60">
                Single-tenant environment for in-house AV and IT teams managing
                their own facilities.
              </p>
            </div>
            {/* Pro Services */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-[#009DD2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pro Services</h3>
              <p className="text-sm text-[#EAEBF2]/60">
                For integrators and consultants delivering AV projects. Design
                through sign-off, with a clean handoff to the client&apos;s
                day-one operations.
              </p>
            </div>
            {/* Managed Services */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-[#F07B20]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Managed Services</h3>
              <p className="text-sm text-[#EAEBF2]/60">
                Multi-tenant platform for integrators and MSPs managing AV
                across multiple client sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars — mobile only (desktop shows callouts on hero) */}
      <section className="py-24 px-6 md:hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything you need, nothing you don&apos;t.
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#F07B20]/50 transition-colors"
              >
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#EAEBF2]/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards bar moved into hero callout — see hero-callouts.tsx */}

      {/* iOS Teaser — person floating over blurred conference room */}
      <section className="relative overflow-hidden">
        {/* Blurred conference room background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-room.jpg"
            alt=""
            fill
            className="object-cover blur-md scale-105"
            sizes="100vw"
            aria-hidden="true"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-[#231F20]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center py-16 md:py-20 px-6">
          {/* Person image — centered, floating */}
          <div className="relative h-[320px] md:h-[420px] w-[260px] md:w-[340px] mb-8">
            <Image
              src="/ipad-professional.png"
              alt="Professional using WareVoyant on iPad"
              fill
              className="object-contain"
              sizes="340px"
            />
          </div>

          {/* Text — centered below */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-white">
            Your entire toolkit, in your hands.
          </h2>
          <p className="text-lg text-[#EAEBF2]/60 text-center">Coming soon.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Image
            src="/warevoyant-logo.png"
            alt="WareVoyant"
            width={120}
            height={30}
          />
          <p className="text-sm text-[#EAEBF2]/40">
            &copy; 2026 Bay Tech Design Group LLC
          </p>
          <div className="flex items-center gap-6 text-sm text-[#EAEBF2]/40">
            <a href="#" className="hover:text-[#EAEBF2]/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#EAEBF2]/70 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
