import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src="/logo.png"
          alt="MiniLands Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
        />
        <span className="text-accent font-semibold text-xl">MiniLands</span>
      </div>

      <div className="relative">
        <div className="h-12 w-12 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
      </div>

      <p className="mt-4 text-xs text-muted-foreground tracking-[0.2em] uppercase">
        Loading experience
      </p>
    </div>
  );
}


