const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: "2mb",
  },
};

module.exports = withContentlayer(nextConfig);
