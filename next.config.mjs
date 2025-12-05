// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

// Change this line:
export default nextConfig; // Use export default instead of module.exports
