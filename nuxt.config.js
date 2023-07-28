import {
  resolve
} from "path"

export default {
  // 关闭服务端渲染
  // ssr: false,

  alias: {
    'images': resolve(__dirname, "./assets/images")
  },

  dev: process.env.NODE_ENV !== 'production',

  env: {
    baseUrl: process.env.BASE_URL // 代替process.env.npm_package_config_nuxt_baseUrl
  },

  generate: {
    dir: 'website', // 代替dist文件夹名称
    subFolders: false // 生成的路由是否有子文件夹
  },

  // 设置页面顶部loading加载条
  loading: {
    color: 'red',
    height: '10px',
    continuous: true, // 是否在页面切换的过程中保持加载条的显示，默认为false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-start',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    `~/plugins/myPlugin.js`,
    { src: '@/plugins/vant', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  // 配置axios
  axios: {
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true, // 表示跨域请求时是否需要使用凭证
    proxy: true // 表示开启代理
  },

  // dir: {
  //   // 自定义页面目录文件夹名为views
  //   pages: "views",
  //   // ...
  // },

  // 配置全局中间件
  router: {
    middleware: "auth"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extends(config, ctx) {}
  }
}
