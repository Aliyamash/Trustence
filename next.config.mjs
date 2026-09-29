/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep development and production output isolated when both run on the VPS/workstation.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Keep SEO/AEO metadata in <head> for HTML-only and lesser-known AI crawlers.
  htmlLimitedBots: /.*/,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.trust-ence.com' }],
        destination: 'https://trust-ence.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
    {
        protocol: 'https',                    
        hostname: 'api.trust-ence.com',  
        port: '',                            
        pathname: '/media/**',               
      },
      {
        protocol: 'https',
        hostname: 'api.trust-ence.com',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'api.trust-ence.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
