const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/juancarlosllh.github.io/'
  }
} : {}


module.exports = {
  build: {
    extend (config, { dev, isClient }) {
      return config
    }
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    'normalize.css',
    '~assets/style/main.scss'
  ],
  plugins: [
    { src: '~/plugins/typography.js', ssr: false }
  ],
  ...routerBase
}
