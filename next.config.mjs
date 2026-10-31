/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["revosso.local", "manage.revosso.local"],
  // Metadata is static, so render it in <head> for every client instead of streaming it into <body>.
  htmlLimitedBots: /.*/,
  devIndicators: false,
}

export default nextConfig
