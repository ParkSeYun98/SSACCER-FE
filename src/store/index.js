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
    // state - video
    videoList: [],
    video: null,
    DBvideoList: [],
    DBvideo: {},

    // state - user
    userList: [],
    loginUser: {},
    loginUserName: null,

    // state - review
    reviewList: [],
    review: {},

    // state - reviewlike
    reviewLikeList: [],
    reviewLike: null,
    reviewLikeOrNot: false
  },
  getters: {},
  mutations: {
    // mutation - user
    LOGIN(state, loginUser) {
      state.loginUserName = loginUser.loginUser.name;
      state.loginUser = loginUser.loginUser;
    },
    LOGOUT(state) {
      state.loginUserName = null;
    },
    SIGNUP(state, user) {
      state.userList.push(user);
    },
    MODIFY_USER(state, loginUser){
      for (let i = 0; i < state.userList.length; i++) {
        if (state.userList[i].userId === loginUser.userId) {
          state.userList[i] = loginUser;
          break;
        }
      }
      state.loginUser = loginUser;
    },
    DELETE_USER(state, userId) {
      state.loginUser = {};
      state.loginUserName = null;
      for (let i = 0; i < state.userList.length; i++) {
        if (state.userList[i].userId === userId) {
          state.userList.remove(i);
          break;
        }
      }
    },

    // mutation - video
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
    SET_DBVIDEO(state, DBvideo) {
      state.DBvideo = DBvideo;
    },

    // mutation - review
    GET_REVIEWLIST(state, reviewList) {
      state.reviewList = reviewList;
      state.reviewLike = null;
    },
    SET_REVIEW(state, review) {
      state.review = review;
    },
    REGIST_REVIEW(state, review) {
      state.reviewList.push(review);
    },
    DELETE_REVIEW(state, reviewSeq) {
      state.review = {};
      for (let i = 0; i < state.reviewList.length; i++) {
        if (state.reviewList[i].reviewSeq === reviewSeq) {
          state.reviewList.removeItem(i);
          break;
        }
      }
    },
    MODIFY_REVIEW(state, review) {
      for (let i = 0; i < state.reviewList.length; i++) {
        if (state.reviewList[i].reviewSeq === review.reviewSeq) {
          state.reviewList[i] = review;
          break;
        }
      }

      state.review = review;
    },

    // mutation - reviewlike
    GET_REVIEWLIKELIST(state, reviewLikeList) {
      state.reviewLikeList = reviewLikeList;
    },
    GET_REVIEW_LIKE(state, reviewLike) {
      if (reviewLike === null) {
        console.log("좋아요 테이블로부터 null이 왔음");
        state.reviewLikeOrNot = false;
        state.reviewLike = null;
        return;
      }

      state.reviewLikeOrNot = true;
      state.reviewLike = reviewLike;
    },
    LIKE_REVIEW(state) {
      dispatch("getReviewLikeList", state.loginUser.userSeq);
      dispatch("getReviewLike", state.loginUser.userSeq);
      state.reviewLikeOrNot = true;
    },
    UNLIKE_REVIEW(state) {
      dispatch("getReviewLikeList", state.loginUser.userSeq);
      dispatch("getReviewLike", state.loginUser.userSeq);
      state.reviewLikeOrNot = false;
    }
  },
  actions: {
    // action - User
    Login({ commit }, user) {
      const API_URL = `http://localhost:9999/user/login`;

      axios({
        url: API_URL,
        method: "POST",
        params: user
      })
        .then(response => {
          alert("로그인 성공!");
          commit("LOGIN", response.data);

          sessionStorage.setItem("access-token", response.data["access-token"]);
          router.push("/");
        })
        .catch(err => {
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
    modifyUser({ commit }, loginUser) {
      const API_URL = "http://localhost:9999/user/update";

      axios({
        url: API_URL,
        method: "PUT",
        date: loginUser,
      })
        .then(response => {
          alert("수정 완료");

          commit("MODIFY_USER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUser: function ({ commit }, userId) {
      const API_URL = `http://localhost:9999/user/quit/${userId}`;
      axios({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          alert("삭제 완료!");
          commit("DELETE_USER", userId);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    // action - Video
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
    getDBVideoByYoutubeId({ commit }, youtubeId) {
      const API_KEY = `http://localhost:9999/video/readbyyoutubeId/${youtubeId}`;

      axios({
        url: API_KEY,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("SET_DBVIDEO", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getVideoList({ commit }) {
      const API_URL = "http://localhost:9999/video/read/list";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_VIDEOLIST", response.data);
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
        data: video,
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getVideo", video.youtubeId);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getVideo({ commit }, youtubeId) {
      const API_URL = `http://localhost:9999/video/readbyyoutubeId/${youtubeId}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("SET_VIDEO", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // action - Review
    getReviewList({ commit }, youtubeId) {
      let videoSeq = 0;

      for (let i = 0; i < this.state.DBvideoList.length; i++) {
        if (youtubeId === this.state.DBvideoList[i].youtubeId) {
          videoSeq = this.state.DBvideoList[i].videoSeq;
        }
      }

      const API_URL = `http://localhost:9999/review/readbyvideoseq/list/${videoSeq}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      }).then(response => {
        commit("GET_REVIEWLIST", response.data);
      });
    },
    getReview({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/review/read/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("SET_REVIEW", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    setReview({ commit }, review) {
      commit("SET_REVIEW", review);
    },
    registReview({ commit }, review) {
      const API_URL = "http://localhost:9999/review/regist";

      axios({
        url: API_URL,
        method: "POST",
        data: review,
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          alert("등록 완료");

          commit("REGIST_REVIEW", review);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteReview({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/review/delete/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "DELETE",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          alert("삭제 완료");
          commit("DELETE_REVIEW", reviewSeq);
        })
        .catch(err => {
          console.log(err);
        });
    },
    modifyReview({ commit }, review) {
      const API_URL = "http://localhost:9999/review/update";

      axios({
        url: API_URL,
        method: "PUT",
        data: review,
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          alert("수정 완료");

          commit("MODIFY_REVIEW", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // action - ReviewLike
    getReviewLikeList({ commit }, userSeq) {
      const API_URL = `http://localhost:9999/rlike/reviewlist/${userSeq}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_REVIEWLIKELIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getReviewLike({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/rlike/reviewlike/${this.state
        .loginUser.userSeq}/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_REVIEW_LIKE", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    likeReview({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/rlike/like/${this.state.loginUser
        .userSeq}/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "POST",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          commit("LIKE_REVIEW");
        })
        .catch(err => {
          console.log(err);
        });
    },
    unlikeReview({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/rlike/like/${state.loginUser
        .userSeq}/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "DELETE",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          commit("UNLIKE_REVIEW");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});
