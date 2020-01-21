import { ACCESS_TOKEN } from '../mutation-types'
import { ActionTree, Getter, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '@/store/root-state'
import { AppState } from '@/store/modules/app'

export const SET_TOKEN = 'SET_TOKEN'
export const SET_INFO = 'SET_INFO'
export const DESTROY_USER_STATE = 'D_USER_STATE'
export const TOKEN_TIMEOUT = 1000 * 60 * 60 * 11

export interface UserState {
  token: string,
  nickname: string,
  avatar: string,
  role: number,
  fetched: boolean,
  extra: any
}

const state: UserState = {
  token: '',
  nickname: '',
  avatar: '',
  role: 3,
  fetched: false,
  extra: {}
}

const mutations: MutationTree<UserState> = {
  [SET_TOKEN]: (state, token: string) => {
    state.token = token
  },
  [SET_INFO]: (state, info: any) => {
    const { nickname, avatar, role_id: roleId } = info
    state.nickname = nickname
    state.avatar = avatar
    state.role = roleId
    state.extra = info
    state.fetched = true
  },
  [DESTROY_USER_STATE]: (state) => {
    state.nickname = ''
    state.avatar = ''
    state.extra = {}
    state.fetched = false
    state.token = ''
    state.role = 3
    // Vue.storage.remove(ACCESS_TOKEN)
  }
}

const actions: ActionTree<UserState, RootState> = {
  Login ({ commit }, formData) {
    console.log('dispatch:: data: ', formData)
    return new Promise((resolve, reject) => {
      // axios post
      resolve()
    })
  },

  GetInfo ({ commit }) {
    return new Promise(resolve => {
      // axios get
      resolve({
        token: '1'
      })
    })
  },

  Logout ({ commit }) {
    return new Promise(resolve => {
      /* logout().then((res: any) => {
        console.log('logout:', res)
      }).finally(() => {
        commit(DESTROY_USER_STATE)
        resolve(true)
      }) */
      resolve(true)
    })
  }
}

export const getters: GetterTree<UserState, any> = {
  userFetched: state => state.fetched,
  nickname: state => state.nickname,
  avatar: state => state.avatar,
  role: state => state.role,
  extra: state => state.extra
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
