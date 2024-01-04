/* eslint-disable turbo/no-undeclared-env-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@swiss-digital-assets-institute/icon', '@swiss-digital-assets-institute/ui'],
  },
};

module.exports = nextConfig;
