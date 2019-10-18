import Vue from 'vue'
import Vuex from 'vuex'

import searchmodule from './modules/search'
import usermodule from './modules/user'
import hotmodule from './modules/hotsearch'
import shopListmodule from './modules/shopList'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search: searchmodule,
    user: usermodule,
    hotsearch: hotmodule,
    shopList: shopListmodule
  }
})

export default store
