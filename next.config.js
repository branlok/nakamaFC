/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  target: 'serverless', 
};

module.exports = nextConfig;
