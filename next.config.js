/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ],
  }
}

module.exports = nextConfig
