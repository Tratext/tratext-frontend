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
        hostname: "exciting-prize-f671089f83.media.strapiapp.com",
        pathname: "/**",
      },
    ],
    domains: ["tratext.de"],
  },
};

export default nextConfig;
