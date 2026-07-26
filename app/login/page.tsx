import Link from "next/link";
import { getPlayStoreUrl } from "@/lib/site-config";

export default function LoginPage() {
  const playStoreUrl = getPlayStoreUrl();

  return (
    <div className="flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Login in the MiniLands App
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Investor login is available in the MiniLands mobile app. Download it
          from the Play Store to access your portfolio and investments.
        </p>
        <Link
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black hover:bg-accent/90 transition-colors"
        >
          Download on Google Play
        </Link>
      </div>
    </div>
  );
}
