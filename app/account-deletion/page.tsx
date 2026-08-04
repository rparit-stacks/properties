import Link from "next/link";
import { CheckCircle2, Clock3, Mail, Smartphone, ShieldCheck } from "lucide-react";

export default function AccountDeletionPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Account & data
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Delete your MiniLands account
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          You can request permanent account deletion at any time. We verify the request to protect
          your account and explain which records must be retained for legal or financial reasons.
        </p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
              <Smartphone className="h-6 w-6 text-accent" />
              How to request deletion
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-slate-300">
              <li>Open the MiniLands Android app.</li>
              <li>
                Go to <strong className="text-white">More → Settings → Account deletion</strong>.
                That opens this page inside your browser.
              </li>
              <li>
                Email us from your registered address at{" "}
                <a href="mailto:help.minilands@gmail.com" className="text-accent hover:underline">
                  help.minilands@gmail.com
                </a>{" "}
                with subject line &quot;Account deletion request&quot;, and include the email or
                phone linked to your MiniLands account.
              </li>
            </ol>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              You can also email us directly without using the app. We only process requests that we
              can verify against a registered account.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
              <Mail className="h-6 w-6 text-accent" />
              Contact for deletion
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              <a href="mailto:help.minilands@gmail.com?subject=Account%20deletion%20request" className="text-accent hover:underline">
                help.minilands@gmail.com
              </a>
              {" "}· Subject: Account deletion request
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
              <ShieldCheck className="h-6 w-6 text-accent" />
              What we delete
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Profile details, KYC documents we are not required to retain, marketing preferences,
              and app access credentials are removed after verification.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              What we may retain
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Transaction records, tax/compliance archives, and dispute-related logs may be kept
              only as long as Indian law or financial regulations require. They are not used for
              marketing. Active investments and pending withdrawals may need settlement before
              closure completes.
            </p>
          </section>

          <section className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
              <Clock3 className="h-6 w-6 text-accent" />
              Processing time
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              We aim to acknowledge requests within 3 business days and complete eligible deletion
              within 30 days, unless an active settlement, investigation, or legal retention
              requirement applies.
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm text-slate-400">
          Last updated: 4 August 2026 · Read our{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
