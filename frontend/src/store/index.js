import { createStore } from "vuex";
import router from "../router/index";
import decode from "jwt-decode";
import sign from "jwt-encode";
const secret = "secret-api";

const store = createStore({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    saveToken({ commit }, token) {
      const jwt = sign(token, secret);
      commit("setToken", token);
      commit("setUser", jwt);
      localStorage.setItem("token", token);
    },
    autoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (token) {
        const decodeToken = decode(token);
        commit("setToken", token);
        commit("setUser", decodeToken);
      }
    },

    signOff({ commit }) {
      commit("setToken", null);
      commit("setUser", null);
      localStorage.removeItem("token");
      router.push({
        name: "Login",
      });
    },
  },
});

export default store;
