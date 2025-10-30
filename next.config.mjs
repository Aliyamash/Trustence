/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
     {
        protocol: 'http',
        hostname: '86.106.158.93',
        port: '8000',
        pathname: '/media/**', // همه مسیرهای media
      },
    ],
  },
};

export default nextConfig;

