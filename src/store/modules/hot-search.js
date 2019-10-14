import axios from 'axios'

export default {
  namespaced: true,
  state: {
    hotSearch: []
  },

  getters: {},
  mutations: {
    sethotSearch (state, paylood) {
      state.hotSearch = paylood
    }
  },
  actions: {
    posthotSearch (context, paylood) {
      axios
        .post(
          '/route0002/productSearch/querySearchBoxConfig.json',
          {
            data: {
              ab_flags: ['search_revision_v1'],
              action: 'querySearchBoxConfig'
            },
            system: {},
            is_weex: 1
          }
        )
        .then(response => {
          console.log(response)
        })
    }
  }
}
