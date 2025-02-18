import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  },
  images: {
    domains: ['shibui-uat.exchange-data.co.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shibui-uat.exchange-data.co.in',
        pathname: '/Images/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
  // output: "export",
  // ... other configurations
};

export default nextConfig;