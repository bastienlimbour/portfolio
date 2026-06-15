/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  redirects() {
    return [{ source: '/', destination: '/profile', permanent: true }]
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // typedRoutes: true,
    // optimizeCss: true,
    // typedRoutes: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
