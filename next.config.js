/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // For static exports if needed
  },
  // Enable static export if you want to deploy to static hosting
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'build',
}

module.exports = nextConfig
