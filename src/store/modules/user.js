const state = {
  isLoggedIn: false,
  name: "",
  password: "",
};

const getters = {};

const mutations = {
  AUTHENTICATION(state, payload) {
    state.name = payload.username;
    state.password = payload.password;
    state.isLoggedIn = true;
  },
};

const actions = {
  authentication(context, user) {
    context.commit("AUTHENTICATION", user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
