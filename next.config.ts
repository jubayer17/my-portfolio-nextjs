import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip all responses
  compress: true,

  // Don't leak server info
  poweredByHeader: false,

  // Strip console.* in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Tree-shake large packages so only used exports are bundled.
  // Without this, lucide-react ships every icon (~1 000 SVGs).
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-icons",
      "@headlessui/react",
    ],
  },

  // Serve modern image formats; long-lived cache for static assets
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
};

export default nextConfig;
