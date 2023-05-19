import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    video: null,
    userList: [],
    loginUserName: null,
  },
  getters: {},
  mutations: {
    LOGIN(state, name) {
      state.loginUserName = name;
    },
    SIGNUP(state, user) {
      state.userList.push(user);
    },
    SEARCH_YOUTUBE(state, videos) {
      state.videos = videos;
    },
    CLICK_VIDEO(state, video) {
      state.video = video;
    },
    LOGOUT(state) {
      state.loginUserName = null;
    },
  },
  actions: {
    Login({ commit }, user) {
      const API_URL = `http://localhost:9999/user/login`;

      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
        .then((response) => {
          let resUser = response.data;
          alert("로그인 성공!");
          commit("LOGIN", resUser.name);
          sessionStorage.setItem("access-token", response.data["access-token"]);
          // router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout({ commit }) {
      commit("LOGOUT");
      sessionStorage.removeItem("access-token");
      alert("로그아웃 되었습니다!");
      router.push("/login");
    },
    SignUp({ commit }, user) {
      const API_URL = `http://localhost:9999/user/signup`;

      axios({
        url: API_URL,
        method: "POST",
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
    searchYoutube({ commit }, keyword) {
      const URL = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

      axios({
        url: URL,
        method: "GET",
        params: {
          key: API_KEY,
          part: "snippet",
          q: keyword,
          type: "video",
          maxResults: 10,
        },
      })
        .then((response) => {
          commit("SEARCH_YOUTUBE", response.data.items);
        })
        .catch((err) => console.log(err));
    },
    clickVideo({ commit }, video) {
      commit("CLICK_VIDEO", video);
    },
  },
  modules: {},
});
