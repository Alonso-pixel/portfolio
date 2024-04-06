/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgur.com", "i.imgur.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
