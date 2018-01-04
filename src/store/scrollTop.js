// const getScrollTop = 'getScrollTop'
const setScrollTop = 'setScrollTop'
export default {
  state: {},
  mutations: {
    [setScrollTop] (state, {key, top}) {
      state[key] = top
    }
  },
  actions: {
    [setScrollTop] ({commit}, {key, top}) {
      commit([setScrollTop], {key, top})
    }
  },
  getters: {
    // [getScrollTop](state){
    //     return state;
    // },
  }
}
