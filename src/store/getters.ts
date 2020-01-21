import { GetterTree } from 'vuex'
import { getters as appGetters } from './modules/app'
import { getters as userGetters } from './modules/user'
import { States } from './states'

export const getters: GetterTree<States, any> = {
  ...appGetters,
  ...userGetters
}
