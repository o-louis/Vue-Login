const state = {
  isLoggedIn: false,
  name: "",
  email: "",
  users: [],
};

const getters = {};

const mutations = {
  AUTHENTICATION(state, payload) {
    state.name = payload.username;
    state.email = payload.email;
    state.isLoggedIn = true;
  },

  LOG_OUT(state) {
    state.name = "";
    state.email = "";
    state.isLoggedIn = false;
  },

  SET_USERS(state, payload) {
    state.users = payload;
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

  setUsers(context) {
    const users = localStorage.getItem("users");
    if (users) {
      context.commit("SET_USERS", JSON.parse(users));
    }
  },

  addUser({ commit, state }, user) {
    const users = [...state.users, user];
    localStorage.setItem("users", JSON.stringify(users));
    commit("SET_USERS", users);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
