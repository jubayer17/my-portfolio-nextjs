import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Jubayer Ahmed - Full Stack Developer Portfolio",
  description:
    "Professional portfolio of Jubayer Ahmed - Full Stack Developer specializing in modern web technologies including Next.js, React, Node.js, and MongoDB",
  keywords:
    "full stack developer, web developer, react, node.js, javascript, portfolio, next.js, mongodb",
  authors: [{ name: "Jubayer Ahmed" }],
  openGraph: {
    title: "Jubayer Ahmed - Full Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing modern web development projects and skills",
    type: "website",
    url: "https://jubayer-ahmed.vercel.app",
    images: [
      {
        url: "/assets/me.jpg",
        width: 1200,
        height: 630,
        alt: "Jubayer Ahmed - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jubayer Ahmed - Full Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing modern web development projects and skills",
    images: ["/assets/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
