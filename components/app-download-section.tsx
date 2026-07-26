import Image from "next/image";
import Link from "next/link";
import { BellRing, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import { getPlayStoreUrl } from "@/lib/site-config";

const features = [
  { icon: Building2, label: "Explore verified opportunities" },
  { icon: ShieldCheck, label: "Secure KYC and account access" },
  { icon: BellRing, label: "Investment and payment updates" },
  { icon: CheckCircle2, label: "Portfolio tracking in one place" },
];

export default function AppDownloadSection() {
  const playStoreUrl = getPlayStoreUrl();

  return (
    <section id="download-app" className="section-shine">
      <div className="container relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div className="max-w-xl">
          <span className="eyebrow">MiniLands for Android</span>
          <h2 className="section-heading mt-6">
            Your property investments,
            <span className="mt-1 block text-accent">always within reach.</span>
          </h2>
          <p className="section-subheading mt-5">
            Discover curated fractional real-estate opportunities, complete KYC,
            track your portfolio, and manage distributions securely from one app.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-panel flex items-center gap-3 px-3.5 py-3 text-sm text-slate-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15">
                  <Icon className="h-4 w-4 text-accent" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download MiniLands on Google Play"
              className="inline-flex overflow-hidden rounded-xl border border-accent/30 bg-slate-900/80 shadow-glow transition hover:-translate-y-0.5"
            >
              <Image
                src="/google-play.svg"
                alt="Get MiniLands on Google Play"
                width={180}
                height={54}
                className="h-[54px] w-[180px]"
                unoptimized
              />
            </Link>
            <p className="max-w-[220px] text-xs leading-5 text-slate-500">
              For users aged 18+. Investments involve risk and returns are not
              guaranteed.
            </p>
          </div>
        </div>

        {/* Placeholder until real app homepage screenshot is provided */}
        <div className="relative mx-auto flex w-full max-w-sm justify-center animate-floaty">
          <div className="absolute inset-x-8 bottom-2 h-24 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative w-full overflow-hidden rounded-[2.8rem] border border-white/20 bg-gradient-to-b from-slate-800 to-slate-950 p-3 shadow-panel">
            <div className="mb-3 flex items-center justify-center">
              <div className="h-1.5 w-20 rounded-full bg-white/20" />
            </div>
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2.15rem] border border-white/10 bg-slate-900">
              <Image
                src="/image.png"
                alt="MiniLands app home screen"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 80vw, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
