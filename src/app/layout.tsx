import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aderine Perez Victor Joans | Product Engineer & AI Systems Builder",
  description: "Architecting high-performance product systems. Full Stack Developer specializing in Next.js, Generative AI, and impactful problem-solving.",
  keywords: ["Product Engineer", "Full Stack Developer", "Next.js", "AI Systems", "Aderine Perez Victor Joans", "Tamil Nadu", "Software Engineer"],
  authors: [{ name: "Aderine Perez Victor Joans" }],
  openGraph: {
    title: "Aderine Perez Victor Joans | Product Engineer",
    description: "Architecting high-performance product systems.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { FirebaseInit } from "@/components/firebase-init";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased selection:bg-primary/30`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FirebaseInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
