/* eslint-disable turbo/no-undeclared-env-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@var-ui/icon', '@var-ui/core'],
  },
};

module.exports = nextConfig;
