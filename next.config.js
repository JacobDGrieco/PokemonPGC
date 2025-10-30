// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  images: { remotePatterns: [] },
  webpack: (config) => {
    // Map "@/..." to "<repo>/src"
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

module.exports = nextConfig;
