import Vue from 'vue'
import Vuex from 'vuex'

import hotmodule from './modules/hotsearch'
import searchmodule from './modules/search'
import shopListmodule from './modules/shop-list'
import usermodule from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hotsearch: hotmodule,
    search: searchmodule,
    shopList: shopListmodule,
    user: usermodule
  }
})

export default store
