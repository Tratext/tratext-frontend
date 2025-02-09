/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "ostorage.tratext.com",
        pathname: "/**",
      },
    ],
    domains: ["tratext.com"],
  },
};

export default nextConfig;
