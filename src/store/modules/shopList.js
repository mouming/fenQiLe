import axios from 'axios'
export default {
  namespaced: true,
  state: {
    ShopList: []
  },

  getters: {},
  mutations: {
    setShopList(state, paylood) {
      state.ShopList = paylood
    }
  },
  actions: {
    postShopList({ commit }, paylood) {
      axios
        .post('/api/route0002/productSearch/queryGoodsList.json', {
          data: {
            ab_flags: ['search_revision_v1'],
            action: 'queryGoodsList',
            is_app: 1,
            is_from_weex: 1,
            keyword: '阿迪达斯男鞋',
            page: 1,
            sort_direction: 'desc',
            sort_field: paylood.boxname,
            use_orig_word: 0
          },
          system: {},
          is_weex: 1
        })
        .then(response => {
          console.log(response.data)
          if (response.data.result === 0) {
            commit('setShopList', response.data.data.result_rows.sku_list)
          }
        })
    }
  }
}
