import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { site } from "@/config/site";
import { env } from "@/env";
import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production" ? site.url : "http://localhost:3000"
  ),
  title: `${site.title} | %s`,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
  },
  keywords: site.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={cn("bg-grid-black/5", inter.className)}>
        <SiteHeader />
        <main className="mt-4">{children}</main>
      </body>
    </html>
  );
}
