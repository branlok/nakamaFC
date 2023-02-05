/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ["testing.bobhere.workers.dev"],
  },
  images: {
    loader: "custom",
    loaderFile: "./utils/imageLoader.ts",
  },
};

module.exports = nextConfig;
