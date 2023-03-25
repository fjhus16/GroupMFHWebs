module.exports = {
    images: {
        domains: ['picsum.photos'],
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