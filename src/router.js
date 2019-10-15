import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'
import Market from './views/home/market.vue'
import Category from './views/home/category.vue'
import Lecard from './views/home/lecard.vue'
import Creditcard from './views/home/creditcard.vue'
import Center from './views/home/center.vue'

import Login from './views/login/login.vue'
import Register from './views/login/register.vue'

import Search from './views/search/search.vue'
import SearchList from './views/search/list.vue'

import ProductList from './views/productList/index.vue'
import ProductDetail from './views/productDetail/index.vue'
import Collect from './views/collect/index.vue'
import Cart from './views/cart/index.vue'
import Setting from './views/setting/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'market',
          component: Market
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: 'lecard',
          component: Lecard
        },
        {
          path: 'creditcard',
          component: Creditcard
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/market'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/productList/:class',
      component: ProductList
    },
    {
      path: '/productDetail/:id',
      component: ProductDetail
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/list/',
      component: SearchList
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/privacyprotocol',
      component: () => import('./views/login/privacyprotocol.vue')
    },
    {
      path: '/registerprotocol',
      component: () => import('./views/login/registerprotocol.vue')
    }
  ]
})
// 路由守卫

export default router
