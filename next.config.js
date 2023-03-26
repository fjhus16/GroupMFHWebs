module.exports = {
    images: {
        domains: ['picsum.photos'],
        unoptimized: true,
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/en',
            permanent: true,
          },
        ]
      },
}