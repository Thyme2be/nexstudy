import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'], // ✅ allow external image host
  },
};

export default nextConfig;
