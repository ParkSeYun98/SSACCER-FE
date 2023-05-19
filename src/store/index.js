import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    video: null
  },
  getters: {},
  mutations: {
    SEARCH_YOUTUBE(state, videos) {
      state.videos = videos;
    },
    CLICK_VIDEO(state, video) {
      state.video = video;
    }
  },
  actions: {
    searchYoutube({ commit }, keyword) {
      const URL = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      console.log(process.env.VUE_APP_YOUTUBE_API_KEY);

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
    }
  },
  modules: {}
});
