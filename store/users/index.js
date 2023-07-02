export const state = () => ({
  '1': {
    id: 1,
    name: "Leo Li"
  }
})

export const getters = {
  getUser(state) {
    return state['1']
  }
}

export const mutations = {
  updateUser(state, payload) {
    state[payload.id] = payload
  }
}

export const actions = {
  async fetchUser(state, payload) {
    // 发送请求
    const res = {
      data: {
        id: 1,
        name: "Leo Li"
      }
    };
    state.commit('updateUser', res.data);
    return res.data;
  }
}