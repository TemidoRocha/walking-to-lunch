module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '/api': '/api' },
        logLevel: 'debug',
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
