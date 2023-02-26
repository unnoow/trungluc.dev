/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "media-exp1.licdn.com",
      "morethan-log.vercel.app",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = withContentlayer(nextConfig);
