import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import router from './router'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

/**
 * to 即将进入的目标路由
 * from 当前导航正要离开的路由
 * next resolve
 *  next() 进行下一个钩子
 * next(false) // 中断当前的导航
 * next('/') 跳转到一个不同的地址
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to.matched)
  // 需要权限的
  if (to.matched.some((re) => re.meta.auth)) {
    let isLogin = false
    if (!isLogin) {
      next({
        path: '/login',
        query: {},
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  console.log(`router.afterEach`)
  NProgress.done()
})
