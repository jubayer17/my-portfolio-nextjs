import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import MotionLayout from "@/components/ui/MotionLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resume } from "@/data/resume";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jubayer-ahmed.vercel.app"),
  title: {
    default: `${resume.person.name} — ${resume.person.role}`,
    template: `%s — ${resume.person.name}`,
  },
  description: resume.summary.join(" "),
  authors: [{ name: resume.person.name }],
  keywords: ["Software Engineer", "Full-Stack", "Next.js", "React", "Node.js", "NestJS", "PostgreSQL", "TypeScript"],
  openGraph: {
    title: `${resume.person.name} — ${resume.person.role}`,
    description: resume.summary.join(" "),
    type: "website",
    url: "https://jubayer-ahmed.vercel.app",
    images: [{ url: "/assets/me.jpg", width: 1200, height: 630, alt: `${resume.person.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${resume.person.name} — ${resume.person.role}`,
    description: resume.summary.join(" "),
    images: ["/assets/me.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-inter antialiased min-h-screen bg-white text-slate-900 dark:bg-ink-800 dark:text-slate-100`}
      >
        <ThemeProvider>
          <Navbar />
          <MotionLayout>{children}</MotionLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
