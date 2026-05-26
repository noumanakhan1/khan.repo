import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nouman Khan - Full Stack Developer",
  description: "Full Stack Developer specializing in MERN stack, Next.js, and scalable web applications. Available for freelance and full-time opportunities.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Web Development"],
  authors: [{ name: "Nouman Khan" }],
  openGraph: {
    title: "Nouman Khan - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, Next.js, and scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-slate-950 text-slate-50 min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
