/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
    },
    i18n: {
      locales: ['en', 'es', 'fr'],
      defaultLocale: 'en',
    },
    async rewrites() {
      return [
        {
          source: '/:lang/blog/:slug',
          destination: '/:lang/blog/[slug]',
        },
      ]
    },
  }
  
  module.exports = nextConfig