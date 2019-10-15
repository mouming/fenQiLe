import Vue from 'vue'
import Vuex from 'vuex'

import hotmodule from './modules/hotsearch'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hotsearch: hotmodule
  }
})

export default store
