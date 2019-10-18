import axios from 'axios'
export default {
  namespaced: true,
  state: {
    ShopList: []
  },

  getters: {},
  mutations: {
    setShopList(state, payload) {
      state.ShopList = payload
    }
  },
  actions: {
    postShopList({ commit, state }, payload) {
      axios
        .post('/api/route0002/productSearch/queryGoodsList.json', {
          data: {
            ab_flags: ['search_revision_v1'],
            action: 'queryGoodsList',
            is_app: 1,
            is_from_weex: 1,
            keyword: payload.kw,
            page: payload.PageNum,
            sort_direction: 'desc',
            sort_field: payload.boxname
          },
          system: {},
          is_weex: 1
        })
        .then(response => {
          if (response.data.result === 0) {
            console.log(response.data.data)
            let res =response.data.data.result_rows.sku_list
            if(!payload.iscreate){
              res=state.ShopList.concat(response.data.data.result_rows.sku_list)
            }
            // commit('setShopList',response.data.data.result_rows.sku_list)
            commit(
              'setShopList',
              res
            )
            if (payload.callback) {
              payload.callback()
            }
          }
        })
    }
  }
}
