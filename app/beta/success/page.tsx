import Link from "next/link";

export default function BetaSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Green checkmark */}
        <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-[#58B947]/15 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#58B947]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4">Application Received!</h1>

        <p className="text-[#EAEBF2]/60 mb-3 leading-relaxed">
          Thank you for your interest in WareVoyant. We&apos;ll review your
          application and send you access credentials once approved.
        </p>

        <p className="text-[#EAEBF2]/50 text-sm mb-10">
          You&apos;ll receive a confirmation email shortly.
        </p>

        <Link
          href="/"
          className="inline-block text-[#009DD2] hover:text-[#008bbe] font-medium transition-colors"
        >
          &larr; Back to WareVoyant
        </Link>
      </div>
    </div>
  );
}
