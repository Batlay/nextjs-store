/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'ibbdetibjuzwrprbiayt.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'lsshkfwntfenrpmbzvqp.supabase.co'
      },
    ],
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
