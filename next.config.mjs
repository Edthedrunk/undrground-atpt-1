/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "playwright-core",
      "playwright-aws-lambda",
    ],
  },
};

export default nextConfig;
