import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.deepai.org',
        port: '',
        pathname: '/art-image/**',
      },
    ],
  },
};

export default nextConfig;

