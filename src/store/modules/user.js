export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {},
  mutations: {
    getUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {}
}
