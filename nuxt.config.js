require('dotenv').config()
module.exports = {
  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_IP
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'forum-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  plugins: [
    /* сообщаем nuxt чтобы на сервере этот плагин не инициализировался */
    {src: '@/plugins/socket.js', ssr: false},
    {src: '@/plugins/icons.js', ssr: false}
  ],

  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-nested')(),
      require('postcss-hexrgba')()
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

