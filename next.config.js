
const nextConfig = {
//   async headers() {
//     return [
//         {
//             // matching all API routes
//             source: "//:path*",
//             headers: [
//                 { key: "Access-Control-Allow-Credentials", value: "false" },
//                 { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
//                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//             ]
//         }
//     ]
// },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://localhost:8000/:path*',
  //     },
  //   ]
  // },
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
