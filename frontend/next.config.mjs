/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store', // Forces no caching
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;