/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fit-shoes-server.vercel.app',
          port: '',
          pathname: '/layout/**',
        },
      ],
    },
  }