module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.fenqile.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
