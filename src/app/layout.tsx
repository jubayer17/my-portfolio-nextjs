import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import MotionLayout from "@/components/ui/MotionLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resume } from "@/data/resume";
import ClientEffects from "@/components/ClientEffects";
import IntroManager from "@/components/IntroManager";

// Space Grotesk — geometric display / heading font
const spaceGrotesk = Space_Grotesk({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Plus Jakarta Sans — modern humanist body font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
  keywords: [
    "Software Engineer", "Full-Stack", "Next.js", "React",
    "Node.js", "NestJS", "PostgreSQL", "TypeScript",
  ],
  openGraph: {
    title: `${resume.person.name} — ${resume.person.role}`,
    description: resume.summary.join(" "),
    type: "website",
    url: "https://jubayer-ahmed.vercel.app",
    images: [{ url: "/assets/me.jpg", width: 1200, height: 630, alt: resume.person.name }],
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
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-inter antialiased min-h-screen`}
      >
        <ThemeProvider>
          <IntroManager />
          <ClientEffects />
          <Navbar />
          <MotionLayout>{children}</MotionLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
