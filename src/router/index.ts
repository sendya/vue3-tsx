import Vue, { AsyncComponent } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// hack router push/replace callback
['push', 'replace'].map(key => {
  // @ts-ignore
  return { k: key, prop: VueRouter.prototype[key] }
}).forEach(item => {
  // @ts-ignore
  VueRouter.prototype[item.k] = function newCall (location, onResolve, onReject) {
    if (onResolve || onReject) return item.prop.call(this, location, onResolve, onReject)
    return item.prop.call(this, location).catch((err: Error) => { throw err })
  }
})

Vue.use(VueRouter)

const BasicLayout: AsyncComponent = () => import(/* webpackChunkName: "base-layout" */'../layouts/BasicLayout')

export const memberRouters: RouteConfig[] = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: 'my',
    name: 'my',
    meta: {
      title: 'member.menu.my',
      icon: 'user'
    },
    component: () => import(/* webpackChunkName: "member" */ '../views/Test')
  }
]

export const homeRouters: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'main.nav.home',
      icon: 'home'
    },
    component: () => import(/* webpackChunkName: "aaka" */'../views/Test')
  }
]

const routes: RouteConfig[] = [
  {
    path: '',
    name: 'index',
    component: BasicLayout,
    redirect: '/',
    children: homeRouters
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export function useRouter () {
  return router
}

export default router
