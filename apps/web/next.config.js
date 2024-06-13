/* eslint-disable turbo/no-undeclared-env-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@var-meta/icon', '@var-meta/ui'],
  },
};

module.exports = nextConfig;
