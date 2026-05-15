import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // This allows all images from Unsplash
      },
    ],
  },
  // ... your other config options (like experimental: { turbopack: {} })
};

export default nextConfig;