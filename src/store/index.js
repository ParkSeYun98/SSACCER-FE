import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
  },
  getters: {},
  mutations: {
    SIGNUP(state, user) {
      state.userList.push(user);
    },
  },
  actions: {
    SignUp({ commit }, user) {
      const API_URL = `http://localhost:9999/user/signup`;

      axios({
        url: API_URL,
        methods: "POST",
        data: user,
      })
        .then(() => {
          alert("회원가입이 완료되었습니다!");
          commit("SIGNUP", user);
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
