const state = {
  isLoggedIn: false,
};

const getters = {};

const mutations = {
  AUTHENTICATION(state) {
    state.isLoggedIn = true;
  },
};

const actions = {
  authentication(context) {
    context.commit("AUTHENTICATION");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
