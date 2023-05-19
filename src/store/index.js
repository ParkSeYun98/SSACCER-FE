import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import createVuexPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createVuexPersistedState({
      whiteList: ["DBvideoList"],
      storage: window.sessionStorage
    })
  ],
  state: {
    videoList: [],
    video: null,
    DBvideoList: [],
    userList: []
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
    SEARCH_YOUTUBE(state, videoList) {
      state.videoList = videoList;
    },
    CLICK_VIDEO(state, video) {
      state.video = video;
    },
    GET_VIDEOLIST(state, dbvideolist) {
      state.DBvideoList = dbvideolist;
    },
    SET_VIDEO(state, video) {
      state.DBvideoList.push(video);
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
        params: user,
      })
        .then((response) => {
          let resUser = response.data;
          alert("로그인 성공!");
          commit("LOGIN", resUser.name);

          sessionStorage.setItem("access-token", response.data["access-token"]);
          router.push("/");
        })
        .catch((err) => {
          alert("아이디 혹은 비밀번호를 확인해주세요.");
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
    getVideoList({ commit }) {
      const API_URL = "http://localhost:9999/video/read/list";

      axios({
        url: API_URL,
        method: "GET"
      })
        .then(response => {
          console.log(response.data);
          commit("GET_VIDEOLIST", response.data);
          console.log(this.state.DBvideoList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveVideo({ commit }, video) {
      const API_URL = "http://localhost:9999/video/regist";

      axios({
        url: API_URL,
        method: "POST",
        data: video
      })
        .then(() => {
          commit("SET_VIDEO", video);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getReviewList() {}
  },
  modules: {},
});
