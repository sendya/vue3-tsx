import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { app } from './modules/app'
import { user } from './modules/user'
import { RootState } from '@/store/root-state'
import { getters } from '@/store/getters'

Vue.use(Vuex)

const defaultStore: StoreOptions<RootState> = {
  state: {
  },
  modules: {
    app,
    user
  },
  mutations: {
  },
  actions: {
  }
}

const store = new Vuex.Store(defaultStore)

export function useStore () {
  return store
}

export default store
