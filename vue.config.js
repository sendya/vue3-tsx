
const path = require('path')
const { IgnorePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyz = process.env.IS_ANALYZ === 'true'

function resolve (dir) {
  return path.join(__dirname, dir)
}

const assetsCDN = {
  externals: {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter'
  },
  assets: {
    css: [],
    // https://unpkg.com/:package@:version/:file
    // https://cdn.jsdelivr.net/package:version/:file
    js: [
      '//cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@latest/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/vuex@latest/dist/vuex.min.js'
    ]
  }
}

// vue.config
const defaultConfig = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {
      alias: {
        '@ant-design/icons/lib/dist$': resolve('./src/icons.ts')
      }
    },
    externals: isProd ? assetsCDN.externals : {}
  },
  chainWebpack: config => {
    // set alias
    config.resolve.alias.set('@config', resolve('./config'))

    // if `production` env require on cdn assets
    isProd && config.plugin('html').tap(args => {
      args[0].cdn = assetsCDN.assets
      return args
    })

    // if `IS_ANALYZ` env is TRUE on report bundle info
    isAnalyz && config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
      {
        analyzerMode: 'static'
      }
    ])
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          'primary-color': '#225797',
          'link-color': '#225797',
          'border-radius-base': '2px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    // development server port 8000
    port: 8000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   '/api': {
    //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
    proxy: {
      '/api/resource': {
        target: 'https://anime.srsg.moe/', // http://localhost:8084/webapi/
        ws: false,
        changeOrigin: true
      },
      '/api/v1': {
        target: 'https://anime.srsg.moe/api', // http://localhost:8084/webapi/
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api/v1': ''
        }
      },
      '/api/gateway': {
        target: 'http://anime.srsg.moe/gateway', // http://localhost:8094/account/
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api/gateway': ''
        }
      }
    }
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

module.exports = defaultConfig
