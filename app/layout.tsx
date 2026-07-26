import type React from "react";
import "@/app/globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "MiniLands — Invest in India Real Estate",
  description:
    "Fractional real-estate investing with transparent returns and professional management.",
  generator: "v0.dev",
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="site-shell flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
