import './core/polyfills'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './locales'
import storage from 'store'
import VueCompositionApi from '@vue/composition-api'
import Base from 'ant-design-vue/es/base'
// NavigationGuard
import './router/router-guards'
import expirePlugin from 'store/plugins/expire'

import './App.less'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(Base)
storage.addPlugin(expirePlugin)

new Vue({
  router,
  store,
  i18n,
  mounted () {
    const language = storage.get('language')
    console.log('language', language)
    store.dispatch('app/SET_LANG', language)
  },
  render: h => h(App)
}).$mount('#root')
