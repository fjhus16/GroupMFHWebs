module.exports = {
    images: {
        unoptimized: false,
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