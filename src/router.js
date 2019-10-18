import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'market',
          component: () => import('./views/home/market.vue'),
          meta: {
            title: '分期乐'
          }
        },
        {
          path: 'category',
          component: () => import('./views/home/category.vue'),
          meta: {
            title: '商品分类'
          }
        },
        {
          path: 'lecard',
          component: () => import('./views/home/lecard.vue'),
          meta: {
            title: '乐卡'
          }
        },
        {
          path: 'creditcard',
          component: () => import('./views/home/creditcard.vue'),
          meta: {
            title: '信用卡'
          }
        },
        {
          path: 'center',
          component: () => import('./views/home/center.vue'),
          meta: {
            title: '我的'
          }
        },
        {
          path: '',
          redirect: '/market'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('./views/login/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/cart',
      component: () => import('./views/cart/index.vue'),
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/collect',
      component: () => import('./views/collect/index.vue'),
      meta: {
        title: '收藏'
      }
    },
    {
      path: '/productList/:class',
      component: () => import('./views/productList/index.vue'),
      meta: {
        title: '分期乐'
      }
    },
    {
      path: '/productDetail/:id',
      component: () => import('./views/productDetail/index.vue'),
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/search',
      component: () => import('./views/search/search.vue'),
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/setting',
      component: () => import('./views/setting/index.vue'),
      meta: {
        needLogin: true,
        title: '设置'
      }
    },
    {
      path: '/privacyprotocol',
      component: () => import('./views/login/privacyprotocol.vue'),
      meta: {
        title: '隐私保护政策'
      }
    },
    {
      path: '/registerprotocol',
      component: () => import('./views/login/registerprotocol.vue'),
      meta: {
        title: '注册协议'
      }
    }
  ]
})
// 路由守卫
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 路由发生变化改变页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 登录状态拦截
  let userInfo = window.localStorage.getItem('userInfo')
  if (to.meta.needLogin && !userInfo) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
