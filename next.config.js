/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.atlasacademy.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "apps.atlasacademy.io",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
