module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.fenqile.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/channel': {
        target: 'https://channel.m.fenqile.com',
        changeOrigin: true,
        pathRewrite: {
          '^/channel': ''
        }
      }
    }
  }
}
