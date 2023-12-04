
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://localhost:3000/:path*',
      },
    ]
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'icons8.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'avatars3.githubusercontent.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
