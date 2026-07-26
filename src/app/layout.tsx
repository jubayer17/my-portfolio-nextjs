import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import MotionLayout from "@/components/ui/MotionLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resume } from "@/data/resume";
import ClientEffects from "@/components/ClientEffects";
import IntroManager from "@/components/IntroManager";

// Space Grotesk — geometric display / heading font.
// The CSS variable names here are the *sources* that globals.css maps into
// Tailwind theme keys (--font-display / --font-body / --font-code). Keeping
// them distinct avoids a self-referential var() in the @theme block.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Plus Jakarta Sans — modern humanist body font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0e1d" },
  ],
};

// Runs before first paint so dark-mode visitors never see a white flash.
// ThemeProvider re-reads the same key on mount, so the two stay in sync.
const THEME_INIT = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var e=document.documentElement;e.classList.toggle("dark",d);e.dataset.theme=d?"dark":"light";}catch(_){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The next/font variable classes must sit on <html>, not <body>.
    // Tailwind's @theme declares --font-outfit: var(--font-space-grotesk) on
    // :root; if the source variable is only defined on <body>, that var() is
    // unresolvable at :root, the whole declaration is invalid at
    // computed-value time, and every font falls back to system sans.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body className="font-inter antialiased min-h-screen flex flex-col">
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
