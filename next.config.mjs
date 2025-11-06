/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
    {
        protocol: 'https',                    
        hostname: 'api.trustenceagency.com',  
        port: '',                            
        pathname: '/media/**',               
      },
      {
        protocol: 'https',
        hostname: 'api.trustenceagency.com',
        port: '',
        pathname: '/storage/**',              
      },
    ],
  },
};

export default nextConfig;

