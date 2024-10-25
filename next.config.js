/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '',
}

module.exports = nextConfig
