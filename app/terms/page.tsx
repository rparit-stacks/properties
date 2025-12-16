import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Terms of Service</h1>
          <Link href="/" className="text-xs text-accent hover:text-accent/80">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-8 text-sm md:text-base">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Welcome to MiniLands</h2>
          <p className="text-gray-400">
            This is a placeholder Terms of Service page. Replace this content
            with your final legal text while keeping the layout consistent with
            the rest of the site.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Use of the platform</h3>
          <p className="text-gray-400">
            By using MiniLands, you agree to comply with all applicable laws and
            regulations and to provide accurate information when creating and
            maintaining your account.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-white">No investment advice</h3>
          <p className="text-gray-400">
            Information on this platform is for educational and informational
            purposes only and does not constitute financial or investment
            advice.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-gray-400">
            For questions about these terms, contact{" "}
            <span className="text-accent">legal@minilands.in</span>.
          </p>
        </section>
      </main>
    </div>
  );
}


