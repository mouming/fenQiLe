import axios from 'axios'

export default {
  namespaced: true,
  state: {
    Search: []
  },

  getters: {},
  mutations: {
    setSearch(state, paylood) {
      state.hotSearch = paylood
    }
  },
  actions: {
    postSearch({ commit }, paylood) {
      axios
        .post('/api/route0002/productSearch/queryRelatedwords.json', {
          data: { keyword: 'q', action: 'queryRelatedwords' },
          system: {},
          is_weex: 1
        })
        .then(response => {
          console.log(response.data)
          if (response.data.result === 0) {
            commit('setSearch', response.data.data.result_rows)
          }
        })
    }
  }
}
