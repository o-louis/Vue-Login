const state = {
  isLoggedIn: false,
};

const getters = {};

const mutations = {
  SIGN_IN(state) {
    state.isLoggedIn = !state.isLoggedIn;
  },
};

const actions = {
  signIn(context) {
    context.commit("SIGN_IN");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
