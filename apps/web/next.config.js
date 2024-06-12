/* eslint-disable turbo/no-undeclared-env-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@var-meta-tech/icon', '@var-meta-tech/ui'],
  },
};

module.exports = nextConfig;
