import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pratham Agrawal — Backend & Data Infrastructure Engineer",
  description:
    "Backend and data infrastructure engineer building high-throughput pipelines, distributed systems, and LLM-powered automation.",
  openGraph: {
    title: "Pratham Agrawal — Backend & Data Infrastructure Engineer",
    description:
      "Building high-throughput pipelines, distributed systems, and LLM-powered automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
