export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async fetchCounter(state) {
    // 发送请求
    const res = {
      data: 10
    };
    state.counter = res.data;
    return res.data;
  }
}
