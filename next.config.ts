import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps with debugging
  experimental: {
    // ppr: 'incremental',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
