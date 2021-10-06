module.exports = {
  reactStrictMode: true
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/bayesarew',
        destination: '/bayesarew/home',
        permanent: true,
      },
    ]
  }
}