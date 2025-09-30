/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Optional: Adjust if needed
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
