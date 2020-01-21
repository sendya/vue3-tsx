import router from './index'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  console.info('Router:', to)
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
