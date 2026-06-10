import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Legacy unprefixed URLs that are still indexed by Google
      {
        source: "/diensten/:slug",
        destination: "/nl/diensten/:slug",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/nl/blog/:slug*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        // Google review profile photos (minimal-testimonial.tsx)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
