import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Portfolio</h1>
          <Link href="/" className="text-xs text-accent hover:text-accent/80">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Your MiniLands Portfolio
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            This page will soon show your active projects, returns, and
            allocation across different assets. For now, it serves as a
            placeholder with a consistent UI.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Current Value</h3>
            <p className="text-3xl font-bold text-accent">₹ 0</p>
            <p className="text-xs text-gray-400 mt-1">
              Portfolio valuation will appear here once tracking is enabled.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Projects</h3>
            <p className="text-3xl font-bold text-accent">0</p>
            <p className="text-xs text-gray-400 mt-1">
              Number of active fractional projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


