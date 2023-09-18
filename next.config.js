/** @type {import('next').NextConfig} */
const nextConfig = {
  outputDir: 'dist', // Changed from `output` to `outputDir`
  images: {
    domains: ['res.cloudinary.com'],
   remotePatterns: [  {
        protocol: 'https',
        hostname: "platform-lookaside.fbsbx.com",
        port: '',
        // pathname: '/account123/**',
      }]
  },
  async rewrites() {
    return [
      {
        source: "/public/index.html",
        destination: "/app/api/auth/connect/route.js",
      },
    ];
  },
};

module.exports = nextConfig;
