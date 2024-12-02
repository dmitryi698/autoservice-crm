/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["alexservice.lol", "localhost:3000"],
    },
  },
};

module.exports = nextConfig;
