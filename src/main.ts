import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './locales'
import storage from 'localforage'
import VueCompositionApi from '@vue/composition-api'
import Base from 'ant-design-vue/es/base'
// NavigationGuard
import './router/router-guards'

import './App.less'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(Base)

new Vue({
  router,
  store,
  i18n,
  mounted () {
    storage.getItem('language').then((val: any) => {
      console.log('lang', val)
      store.dispatch('app/SET_LANG', val)
    })
  },
  render: h => h(App)
}).$mount('#root')
