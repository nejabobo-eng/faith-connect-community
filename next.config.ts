import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export (no backend)
  output: 'export',
  images: {
	unoptimized: true,
  },
}

export default nextConfig
