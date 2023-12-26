/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@hashgraph/icon', '@hashgraph/ui'],
  },
};

module.exports = nextConfig;
