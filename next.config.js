/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e-commerce-luxify.vercel.app",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
