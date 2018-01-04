export default {
  state: {
    isLoading: true
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  actions: {
  }
}
