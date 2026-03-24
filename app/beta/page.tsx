"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const lifecycleOptions = [
  { id: "pre_sales_scoping", label: "Pre-Sales & Scoping" },
  { id: "project_management", label: "Project Management" },
  { id: "installation_commissioning", label: "Installation & Commissioning" },
  { id: "configuration_programming", label: "Configuration & Programming" },
  { id: "testing_qa", label: "Testing & QA" },
  { id: "service_desk_support", label: "Service Desk & Support" },
  { id: "auditing_reporting", label: "Auditing & Reporting" },
  { id: "lifecycle_asset_management", label: "Lifecycle & Asset Management" },
];

export default function BetaPage() {
  const router = useRouter();

  // Tester Identity
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  // Lifecycle Focus
  const [lifecycleFocus, setLifecycleFocus] = useState<string[]>([]);

  // Agreement checkboxes
  const [agreedConfidentiality, setAgreedConfidentiality] = useState(false);
  const [agreedDataReset, setAgreedDataReset] = useState(false);
  const [agreedFeedback, setAgreedFeedback] = useState(false);

  // Media release (optional)
  const [agreedMediaRelease, setAgreedMediaRelease] = useState(false);

  // Signature
  const [signatureName, setSignatureName] = useState("");
  const [signatureTitle, setSignatureTitle] = useState("");
  const [signatureCompany, setSignatureCompany] = useState("");

  // Optional
  const [firstImpressions, setFirstImpressions] = useState("");

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function toggleLifecycle(id: string) {
    setLifecycleFocus((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function isValid() {
    return (
      fullName.trim() &&
      email.trim() &&
      company.trim() &&
      jobTitle.trim() &&
      agreedConfidentiality &&
      agreedDataReset &&
      agreedFeedback &&
      signatureName.trim() &&
      signatureTitle.trim() &&
      signatureCompany.trim()
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch(
        "https://api-production-566c.up.railway.app/api/prerelease/submissions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: fullName.trim(),
            email: email.trim(),
            company: company.trim(),
            job_title: jobTitle.trim(),
            lifecycle_focus: lifecycleFocus,
            agreed_confidentiality: true,
            agreed_data_reset: true,
            agreed_feedback_process: true,
            agreed_media_release: agreedMediaRelease,
            signature_name: signatureName.trim(),
            signature_title: signatureTitle.trim(),
            signature_company: signatureCompany.trim(),
            first_impressions: firstImpressions.trim() || undefined,
          }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error?.message || data?.error || `Submission failed (${res.status})`
        );
      }

      router.push("/beta/success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-[#EAEBF2] placeholder-[#EAEBF2]/40 focus:outline-none focus:border-[#009DD2] focus:ring-1 focus:ring-[#009DD2] transition-colors";
  const labelClass = "block text-sm font-medium text-[#EAEBF2]/80 mb-1.5";
  const sectionClass = "bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8";

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-[#231F20]/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/warevoyant-logo.png"
              alt="WareVoyant"
              width={140}
              height={35}
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#EAEBF2]/60 hover:text-[#009DD2] transition-colors"
          >
            &larr; Back
          </Link>
        </div>
      </nav>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/warevoyant-logo.png"
            alt="WareVoyant"
            width={200}
            height={50}
          />
        </div>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            WareVoyant Pre-Release / Web Portal Beta Acceptance
          </h1>
          <p className="text-[#EAEBF2]/50">
            Complete the form below to apply for beta access.
          </p>
        </div>

        {/* 1. Tester Identity */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-6">Tester Identity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Company <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme AV Solutions"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Job Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="AV Project Manager"
                className={inputClass}
              />
            </div>
          </div>
        </section>

        {/* 2. Test Environment Info */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-4">Test Environment</h2>
          <p className="text-sm text-[#EAEBF2]/60 leading-relaxed">
            The beta portal is accessible at{" "}
            <span className="text-[#009DD2] font-medium">portal.warevoyant.com</span>.
            Upon approval, you will receive login credentials via email. Your test
            tenant is provisioned as a blank environment that you can build up with
            sample data.
          </p>
        </section>

        {/* 3. Scope */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-4">Features in This Release</h2>
          <ul className="space-y-2 text-sm text-[#EAEBF2]/70">
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Site and space management with building hierarchy
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Equipment tracking and lifecycle management
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Checklist templates and audit workflows
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Device monitoring (Webex and Q-SYS Reflect)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Service desk and incident management
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Document management with cloud storage connectors
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#009DD2] mt-0.5">&#8226;</span>
              Role-based access control and team management
            </li>
          </ul>
        </section>

        {/* 4. Bug Reporting */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-4">Bug Reporting</h2>
          <p className="text-sm text-[#EAEBF2]/60 leading-relaxed">
            Use the built-in feedback button within the portal to report bugs,
            request features, or share general feedback. Each submission is tracked
            and triaged by the development team. Please include screenshots when
            possible and describe the steps to reproduce any issues.
          </p>
        </section>

        {/* 5. Feedback Focus Areas */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-4">Feedback Focus Areas</h2>
          <p className="text-sm text-[#EAEBF2]/60 leading-relaxed">
            We are particularly interested in hearing about navigation and
            usability, workflow completeness for your use case, missing features
            or data fields, performance issues, and how well the platform fits
            into your existing processes.
          </p>
        </section>

        {/* 6. Lifecycle Focus */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-2">Lifecycle Focus</h2>
          <p className="text-sm text-[#EAEBF2]/50 mb-5">
            Select the lifecycle phases most relevant to your work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lifecycleOptions.map((opt) => (
              <label
                key={opt.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={lifecycleFocus.includes(opt.id)}
                  onChange={() => toggleLifecycle(opt.id)}
                  className="w-4 h-4 rounded accent-[#009DD2] bg-white/10 border-white/20"
                />
                <span className="text-sm text-[#EAEBF2]/80 group-hover:text-[#EAEBF2] transition-colors">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* 7. NDA / Confidentiality Agreement */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-4">
            Confidentiality &amp; Data Terms
          </h2>
          <div className="border border-[#F07B20]/30 bg-[#F07B20]/5 rounded-lg p-5 sm:p-6 text-sm text-[#EAEBF2]/70 leading-relaxed space-y-4 max-h-96 overflow-y-auto">
            <p>
              This Pre-Release Beta Acceptance Agreement (&ldquo;Agreement&rdquo;) is entered
              into between Bay Tech Design Group LLC (&ldquo;Company&rdquo;), the owner and
              developer of the WareVoyant platform, and the individual accepting this
              Agreement (&ldquo;Participant&rdquo;).
            </p>
            <p>
              By accepting this Agreement, Participant acknowledges that WareVoyant and
              all related pre-release software, features, user interfaces, documentation,
              and associated materials (collectively, &ldquo;Pre-Release Materials&rdquo;)
              constitute confidential and proprietary information of Bay Tech Design
              Group LLC.
            </p>
            <p>Participant agrees to:</p>
            <p className="pl-4">
              (a) hold all Pre-Release Materials in strict confidence;
            </p>
            <p className="pl-4">
              (b) not disclose, share, reproduce, or distribute any Pre-Release
              Materials to any third party without prior written consent from Bay Tech
              Design Group LLC;
            </p>
            <p className="pl-4">
              (c) use the Pre-Release Materials solely for the purpose of evaluation and
              feedback as described in this Agreement; and
            </p>
            <p className="pl-4">
              (d) not use any Pre-Release Materials for commercial purposes or
              competitive analysis.
            </p>
            <p>
              Participant&apos;s test tenant is provisioned as a blank environment.
              Participant is free to build it up with sample data. Participant is
              strongly advised not to enter real client information, warehouse data,
              personally identifiable information (PII), or any sensitive operational
              data. Bay Tech Design Group LLC assumes no liability for data voluntarily
              entered into the pre-release environment.
            </p>
            <p>
              Staging data may be reset or wiped between releases without notice. This
              environment does not represent the security posture or reliability of the
              production platform.
            </p>
            <p>
              This confidentiality obligation survives the termination of
              Participant&apos;s access to the pre-release environment and shall remain
              in effect until the Pre-Release Materials are made publicly available by
              Bay Tech Design Group LLC or until written release is provided.
            </p>
          </div>
        </section>

        {/* 8. Agreement Checkboxes */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-5">Agreement</h2>
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreedConfidentiality}
                onChange={(e) => setAgreedConfidentiality(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded accent-[#009DD2] bg-white/10 border-white/20 shrink-0"
              />
              <span className="text-sm text-[#EAEBF2]/80">
                I have read the confidentiality and data terms and agree to hold all
                Pre-Release Materials in strict confidence.{" "}
                <span className="text-red-400">*</span>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreedDataReset}
                onChange={(e) => setAgreedDataReset(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded accent-[#009DD2] bg-white/10 border-white/20 shrink-0"
              />
              <span className="text-sm text-[#EAEBF2]/80">
                I understand this is pre-release software and that my test environment
                data may be reset without notice.{" "}
                <span className="text-red-400">*</span>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreedFeedback}
                onChange={(e) => setAgreedFeedback(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded accent-[#009DD2] bg-white/10 border-white/20 shrink-0"
              />
              <span className="text-sm text-[#EAEBF2]/80">
                I agree to submit feedback using the in-portal tool and not to share
                test credentials externally.{" "}
                <span className="text-red-400">*</span>
              </span>
            </label>
          </div>
        </section>

        {/* 9. Media Release (Optional) */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-2">Media Release <span className="text-sm font-normal text-[#EAEBF2]/40">(Optional)</span></h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 mb-5 text-sm text-[#EAEBF2]/70 leading-relaxed">
            <p>
              Bay Tech Design Group LLC may, following the conclusion of the Pre-Release
              Beta program, create marketing materials that reference your participation,
              including your name, company name, job title, likeness, and any quotes or
              testimonials voluntarily provided. Such materials may include case studies,
              video testimonials, website content, social media posts, press releases, and
              trade publication features. All costs associated with the production of such
              materials shall be borne entirely by Bay Tech Design Group LLC. You may
              withdraw this consent at any time by providing written notice.
            </p>
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedMediaRelease}
              onChange={(e) => setAgreedMediaRelease(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded accent-[#009DD2] bg-white/10 border-white/20 shrink-0"
            />
            <span className="text-sm text-[#EAEBF2]/80">
              I agree to the media release terms above and consent to the use of my name,
              company, and feedback for marketing purposes following the Pre-Release Beta program.
            </span>
          </label>
        </section>

        {/* 10. Electronic Signature */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-2">Electronic Signature</h2>
          <p className="text-sm text-[#EAEBF2]/50 mb-6">
            By signing below, you confirm that you have read and understood this
            Agreement and agree to be bound by its terms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                Full Legal Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={signatureTitle}
                onChange={(e) => setSignatureTitle(e.target.value)}
                placeholder="AV Project Manager"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Company <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={signatureCompany}
                onChange={(e) => setSignatureCompany(e.target.value)}
                placeholder="Acme AV Solutions"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input
                type="text"
                readOnly
                value={today}
                className={`${inputClass} opacity-60 cursor-not-allowed`}
              />
            </div>
          </div>
        </section>

        {/* 10. First Impressions (Optional) */}
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold mb-2">
            First Impressions{" "}
            <span className="text-sm font-normal text-[#EAEBF2]/40">
              (Optional)
            </span>
          </h2>
          <p className="text-sm text-[#EAEBF2]/50 mb-4">
            Share any initial thoughts, expectations, or specific things you hope
            to evaluate during the beta.
          </p>
          <textarea
            value={firstImpressions}
            onChange={(e) => setFirstImpressions(e.target.value)}
            rows={4}
            placeholder="What are you most interested in testing?"
            className={inputClass}
          />
        </section>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-5 py-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Submit */}
        <div className="text-center pt-2">
          <button
            type="submit"
            disabled={!isValid() || isSubmitting}
            className="bg-[#58B947] hover:bg-[#4aa33c] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-10 py-3.5 rounded-lg transition-colors text-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}
