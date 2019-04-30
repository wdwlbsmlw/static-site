const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export default {
  mode: 'universal', // universal

  /*
  ** Headers of the page
  */
  head: {
    title: '黑龙',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/sass/common.scss',
    '~assets/sass/custom.bootstrap.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],

  /**
   * 给每个页面注入变量scss文件
   */
  styleResources: {
    scss: [
      './assets/sass/variables.scss'
    ]
  },

  /**
   * bootstrap vue 配置
   */
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    // Doc: https://bootstrap-vue.js.org/docs/components
    componentPlugins: ['Layout', 'Navbar'],
    // Doc: https://bootstrap-vue.js.org/docs/directives
    // directivePlugins: ['Popover']
  },

  // generate: {
  //   routes: ['/', '/service']
  // },

  /*
  ** Build configuration
  */
  build: {
    /**
     * 将css提取到link文件
     */
    extractCSS: true,

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      /**
       * 生产环境时查看打包资源大小
       */
      if (process.env.NODE_ENV === 'production' && ctx.isClient) {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    }
  }
}
