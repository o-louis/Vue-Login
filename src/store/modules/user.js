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
    localStorage.setItem("user", JSON.stringify(user));
  },

  logout(context) {
    context.commit("LOG_OUT");
    localStorage.removeItem("user");
  },

  checkSession(context) {
    const user = localStorage.getItem("user");
    if (user) {
      context.commit("AUTHENTICATION", JSON.parse(user));
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
