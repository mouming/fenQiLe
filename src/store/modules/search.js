import axios from 'axios'
export default {
  namespaced: true,
  state: {
    Search: []
  },

  getters: {},
  mutations: {
    setSearch(state, payload) {
      state.Search = payload
    }
  },
  actions: {
    postSearch({ commit }, payload) {
      axios
        .post('/api/route0002/productSearch/queryRelatedwords.json', {
          data: { keyword: payload.value, action: 'queryRelatedwords' },
          system: {},
          is_weex: 1
        })
        .then(response => {
          if (response.data.result === 0) {
            commit('setSearch', response.data.data.result_rows)
          }
        })
    }
  }
}
