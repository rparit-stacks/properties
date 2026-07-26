/** Backend API origin for server/client fetches (no trailing slash). */
export function getApiBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "https://minilands.elyvatelabs.in";
}

/** Play Store target for invest / download CTAs. */
export function getPlayStoreUrl(): string {
  return (
    process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.minilands.app"
  );
}
