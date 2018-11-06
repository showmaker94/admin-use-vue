import store from './store'
import router from './router';
import { asyncRouterMap, constantRouterMap } from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
/**
 * 设置白名单
 */
const whiteList = ['/login']
let roles = []
 
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (roles.length === 0) {
    roles = ["user"]
    store.dispatch('GenerateRoutes', {
      roles
    }).then((res) => {
      router.addRoutes(store.getters.addRouters)
      // 动态添加可访问路由表
      next({ ...to,
        replace: true
      }) 

    }).catch((err) => {
      console.log(err)
    })


  } else {
    next()
    NProgress.done() 
  }
})
