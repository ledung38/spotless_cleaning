import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    domains: [
      "images.unsplash.com",
      "spotless-cleaning-psi.vercel.app",
      "via.placeholder.com",
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
  },

  // Headers for SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), usb=()",
          },
        ],
      },
      // Cache static assets
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache images
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect old domain
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.spotless-cleaning-psi.vercel.app",
          },
        ],
        destination: "https://spotless-cleaning-psi.vercel.app/:path*",
        permanent: true,
      },
      // Redirect trailing slashes
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // Production source maps (disable for smaller builds)
  productionBrowserSourceMaps: false,

  // Swc minify
  swcMinify: true,

  // Incremental static regeneration
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://spotless-cleaning-psi.vercel.app",
  },

  // Turbopack for faster builds
  experimental: {
    // Enable turbopack for faster builds in dev
    turbo: {
      resolveAlias: {},
    },
  },
};

export default nextConfig;
