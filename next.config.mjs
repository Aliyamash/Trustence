/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "api.trustenceagency.com",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "trustenceagency.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

