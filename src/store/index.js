import Vue from 'vue'
import Vuex from 'vuex'

import hotmodule from './modules/hotsearch'
import searchmodule from './modules/search'
import shopListmodule from './modules/shopList'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hotsearch: hotmodule,
    search: searchmodule,
    shopList: shopListmodule
  }
})

export default store
