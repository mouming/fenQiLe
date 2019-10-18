import Vue from 'vue'
import Vuex from 'vuex'

import searchmodule from './modules/search'
import usermodule from './modules/user'
import shopListmodule from './modules/shopList'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search: searchmodule,
    user: usermodule,
    shopList: shopListmodule
  }
})

export default store
