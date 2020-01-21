import { loadLanguageAsync } from '@/locales'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '@/store/root-state'

export const SET_LANG = 'SET_LANG'

export interface AppState {
  lang: string
}

const state: AppState = {
  lang: 'en-US'
}

const mutations: MutationTree<AppState> = {
  [SET_LANG]: (state, lang: string) => {
    state.lang = lang
  }
}

const actions: ActionTree<AppState, RootState> = {
  [SET_LANG] ({ commit }, lang: string) {
    return new Promise((resolve, reject) => {
      commit(SET_LANG, lang)
      loadLanguageAsync(lang).then(resolve).catch(e => {
        reject(e)
      })
    })
  }
}

export const getters: GetterTree<AppState, any> = {
  lang: state => state.lang
}

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
