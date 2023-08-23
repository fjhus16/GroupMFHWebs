module.exports = {
    images: {
        unoptimized: false,
        domains: ['api.groupmfh.com'],
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