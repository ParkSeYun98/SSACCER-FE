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
  },
  getters: {},
  mutations: {
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
    }
  },
  actions: {
    SignUp({ commit }, user) {
      const API_URL = `http://localhost:9999/user/signup`;

      axios({
        url: API_URL,
        methods: "POST",
        data: user
      })
        .then(() => {
          alert("회원가입이 완료되었습니다!");
          commit("SIGNUP", user);
          router.push("/login");
        })
        .catch(err => {
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
          maxResults: 10
        }
      })
        .then(response => {
          commit("SEARCH_YOUTUBE", response.data.items);
        })
        .catch(err => console.log(err));
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
  modules: {}
});
