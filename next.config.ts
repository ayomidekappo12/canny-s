/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enables the faster SWC-based minifier
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
};

export default nextConfig;
