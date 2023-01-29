/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ['testing.bobhere.workers.dev'],
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
