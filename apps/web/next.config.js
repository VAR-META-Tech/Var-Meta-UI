/* eslint-disable turbo/no-undeclared-env-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@hashgraph/icon', '@hashgraph/ui'],
  },
};

module.exports = nextConfig;
