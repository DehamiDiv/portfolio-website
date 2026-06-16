/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use Webpack instead of Turbopack (required on this platform)
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
