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
      },
      '/hui': {
        target: 'https://hui.m.fenqile.com',
        changeOrigin: true,
        pathRewrite: {
          '^/hui': ''
        }
      },
      '/vip': {
        target: 'https://vip.m.fenqile.com',
        changeOrigin: true,
        pathRewrite: {
          '^/vip': ''
        }
      },
      '/cw': {
        target: 'https://cw.m.fenqile.com',
        changeOrigin: true,
        pathRewrite: {
          '^/vip': ''
        }
      }
    }
  }
}
