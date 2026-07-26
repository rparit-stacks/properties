"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/5 border border-white/15 rounded-2xl p-8 text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
          <p className="text-sm text-muted-foreground">
            An unexpected error occurred while loading this page. You can try
            again, or go back and continue browsing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black hover:bg-accent/90 transition-colors"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-accent/60 hover:text-accent transition-colors"
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}


