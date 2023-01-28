/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  target: 'serverless', // add this line
};

module.exports = nextConfig;
