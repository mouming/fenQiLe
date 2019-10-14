export default {
  devServe: {
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
