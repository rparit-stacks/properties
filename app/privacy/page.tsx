import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Privacy Policy</h1>
          <Link href="/" className="text-xs text-accent hover:text-accent/80">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-8 text-sm md:text-base">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Your privacy matters</h2>
          <p className="text-gray-400">
            This is a placeholder privacy policy page. You can replace this
            content with your legal team&apos;s final policy while keeping the
            same layout and styling.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Data we may collect</h3>
          <p className="text-gray-400">
            Information such as your name, email, phone number, KYC documents,
            and investment preferences may be collected to operate the
            MiniLands platform and fulfill regulatory requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-white">How we use data</h3>
          <p className="text-gray-400">
            Data is used to manage your account, process investments, comply
            with applicable laws, and improve the platform experience.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-gray-400">
            For any privacy-related questions, please contact us at{" "}
            <span className="text-accent">privacy@minilands.in</span>.
          </p>
        </section>
      </main>
    </div>
  );
}


