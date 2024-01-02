/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com" },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
