/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '' : ''

const nextConfig = {
  reactStrictMode: true, // Helps catch hydration issues
  images: {
    domains: ['www.neoregie.ma', 'i.ytimg.com','img.youtube.com',],
    unoptimized: true, // keep optimization unless you use a custom image loader
  },
  compiler: {
    styledComponents: true, // If using styled-components
  },
  experimental: {
    externalDir: true,
    scrollRestoration: true, // Better scroll behavior
  },

  async headers() {
  return [
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      // Images from /public
      source: '/images/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400', // 1 day
        },
      ],
    },
  ];
},
  outputFileTracing: true,
  staticPageGenerationTimeout: 3600, // 1 hour timeout
  productionBrowserSourceMaps: false, // Disable in production
  optimizeFonts: true, // Font optimization
  swcMinify: true,     // SWC minifier
};

export default nextConfig;

