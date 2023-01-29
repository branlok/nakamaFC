/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ['testing.bobhere.workers.dev'],
  },
};

module.exports = nextConfig;
