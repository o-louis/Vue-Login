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

  LOG_OUT(state) {
    state.name = "";
    state.password = "";
    state.isLoggedIn = false;
  },
};

const actions = {
  authentication(context, user) {
    context.commit("AUTHENTICATION", user);
  },

  logout(context) {
    context.commit("LOG_OUT");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
