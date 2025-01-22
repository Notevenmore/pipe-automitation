/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/gasnet',
  assetPrefix: '/gasnet',
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  }
};

export default nextConfig;
