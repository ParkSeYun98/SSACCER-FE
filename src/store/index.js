import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import createVuexPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createVuexPersistedState({
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
    DBuserList: [],
    loginUser: {},
    loginUserName: null,

    // state - review
    reviewList: [],
    review: {},

    // state - reviewlike
    reviewLikeOrNot: false,
    reviewLikeList: [],
    reviewLikeInfo: null,

    // state - weather
    locationList: [],
    baseDateAndTime: [],
    weatherInfo: [],
    allRegionCodeList: [],
    partRegionCodeList: [],
    longTemperature: [],
    allBigRegionCodeList: [],
    partBigRegionCodeList: [],
    longWeather: [],

    // state - article
    DBarticleList: [],
    nowArticle: {},
    DBteamList: [],
    recruiteCnt: 0,
    articleWriterList: [],
    members: [],
    articleIdx: 0,

    // state - news
    matchInfo: [],
    topScorer: []
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
    MODIFY_USER(state, loginUser) {
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
    UPLOAD_IMAGE(state, img) {
      state.loginUser.img = img;

      for (let i = 0; i < state.userList.length; i++) {
        if (state.userList[i].userSeq === state.loginUser.userSeq) {
          state.userList[i].img = img;
          return;
        }
      }
    },
    GET_USERLIST(state, userlist) {
      state.DBuserList = userlist;
    },
    UPDATE_ROLE(state, role) {
      state.loginUser.role = role;

      for (let i = 0; i < state.userList.length; i++) {
        if (state.userList[i].userSeq === state.loginUser.userSeq) {
          state.userList[i].role = role;
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
    ADD_REVIEW_VIEW_CNT(state, reviewSeq) {
      for (let i = 0; i < state.reviewList.length; i++) {
        if (reviewSeq == state.reviewList[i].reviewSeq) {
          state.reviewList[i].viewCnt += 1;
          break;
        }
      }

      state.review.viewCnt += 1;
    },

    // mutation - reviewlike
    GET_REVIEW_LIKE_LIST_BY_LOGINUSER(state, list) {
      state.reviewLikeList = list;
    },
    CHANGE_REVIEW_LIKE_STATUS(state, likeInfo) {
      if (likeInfo === "") {
        state.reviewLikeOrNot = false;
      } else {
        state.reviewLikeOrNot = true;
      }
    },
    SET_REVIEW_LIKE_INFO(state, reviewSeq) {
      for (let i = 0; i < state.reviewLikeList.length; i++) {
        if (state.reviewLikeList[i].reviewSeq == reviewSeq) {
          state.reviewLikeInfo = state.reviewLikeList[i];
          return;
        }
      }

      state.reviewLikeInfo = {};
    },

    // mutation - weather
    GET_LOCATIONLIST(state, list) {
      state.locationList = list;
    },
    BASE_DATE_AND_TIME(state, base) {
      state.baseDateAndTime = base;
    },
    GET_WEATHER(state, weatherInfo) {
      state.weatherInfo = weatherInfo;
    },
    GET_REGION_CODE_LIST(state, regionCodeList) {
      state.allRegionCodeList = regionCodeList;
    },
    SEARCH_PART_REGION_CODE_LIST(state, regionCodeList) {
      state.partRegionCodeList = regionCodeList;

      console.log("partRegionCodeList : ");
      console.log(state.partRegionCodeList);
    },
    GET_LONG_TEMPERATURE(state, longtemperatureInfo) {
      state.longTemperature = longtemperatureInfo;
      console.log("longTemperature : ");
      console.log(state.longTemperature);
    },
    GET_BIG_REGION_CODE_LIST(state, bigRegionCodeList) {
      state.allBigRegionCodeList = bigRegionCodeList;
    },
    SEARCH_PART_BIG_REGION_CODE_LIST(state, bigRegionCodeList) {
      state.partBigRegionCodeList = bigRegionCodeList;
      console.log("partBigRegionCodeList : ");
      console.log(state.partBigRegionCodeList);
    },
    GET_LONG_WEATHER(state, longtemperatureInfo) {
      state.longWeather = longtemperatureInfo;
      console.log("longWeather : ");
      console.log(state.longWeather);
    },

    // mutation - article
    GET_ARTICLE_LIST(state, articleList) {
      state.DBarticleList = articleList;
      state.recruiteCnt = articleList.recruiteCnt;
    },
    GET_ARTICLE(state, article) {
      state.nowArticle = article;
    },
    ADD_ARTICLE_VIEW_CNT(state, articleSeq) {
      for (let i = 0; i < state.DBarticleList.length; i++) {
        if (articleSeq == state.DBarticleList[i].articleSeq) {
          state.DBarticleList[i].viewCnt += 1;
          break;
        }
      }
    },
    ADD_ARTICLE_IDX(state) {
      state.articleIdx += 1;
    },
    GET_TEAM_LIST(state, teamList) {
      state.DBteamList = teamList;
    },
    GET_ARTICLE_WRITER_LIST(state, articleWriterList) {
      state.articleWriterList = articleWriterList;
    },
    GET_TEAM_MEMBER(state, members) {
      state.members = members;
    },

    // mutation - news
    GET_MATCH_INFO(state, matches) {
      state.matchInfo = matches;
    },
    GET_TOP_SCOERER(state, scorers) {
      state.topScorer = scorers;
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
    setLoginInfo({ commit }, userSeq) {
      for (let i = 0; i < this.state.DBuserList.length; i++) {
        if (this.state.DBuserList[i].userSeq === userSeq) {
          this.state.loginUser.img = this.state.DBuserList[i].img;

          return;
        }
      }
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
      console.log(loginUser);
      axios({
        url: API_URL,
        method: "PUT",
        data: loginUser
      })
        .then(response => {
          alert("수정 완료");
          commit("MODIFY_USER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUser: function({ commit }, userId) {
      const API_URL = `http://localhost:9999/user/quit/${userId}`;
      axios({
        url: API_URL,
        method: "DELETE"
      })
        .then(() => {
          alert("삭제 완료!");
          commit("DELETE_USER", userId);
          router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploadImage({ commit }, box) {
      const API_URL = `http://localhost:9999/user/uploadimage/${box.userSeq}`;

      let formData = new FormData();
      formData.append("img", box.img);

      axios
        .put(API_URL, formData, {
          headers: { "Content-Type": "multlipart/form-data" }
        })
        .then(() => {
          commit("UPLOAD_IMAGE", box.img);
          router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserList({ commit }) {
      const API_URL = "http://localhost:9999/user/read/list";

      axios({
        url: API_URL,
        method: "GET"
      })
        .then(response => {
          commit("GET_USERLIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeUpdateRole({ commit }) {
      let reviewCnt = 0;

      const API_URL1 = `http://localhost:9999/review/readbyuserseq/list/${this
        .state.loginUser.userSeq}`;

      axios({
        url: API_URL1,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          reviewCnt = response.data.length;

          if (reviewCnt >= 1 && reviewCnt < 3) {
            this.dispatch("updateRole", "BRONZE");
          } else if (reviewCnt >= 3 && reviewCnt < 10) {
            this.dispatch("updateRole", "SILVER");
          } else if (reviewCnt >= 10 && reviewCnt < 30) {
            this.dispatch("updateRole", "GOLD");
          } else if (reviewCnt >= 30 && reviewCnt < 60) {
            this.dispatch("updateRole", "PLATINUM");
          } else if (reviewCnt >= 60 && reviewCnt < 100) {
            this.dispatch("updateRole", "DIAMOND");
          } else if (reviewCnt >= 100) {
            this.dispatch("updateRole", "RUBY");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateRole({ commit }, role) {
      let user = this.state.loginUser;

      user.role = role;

      const API_URL = `http://localhost:9999/review/update`;

      axios({
        url: API_URL,
        method: "PUT",
        data: user,
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getUserList");
          commit("UPDATE_ROLE", role);
        })
        .catch(err => {
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

          this.dispatch("getReviewList", this.state.DBvideo.youtubeId);

          this.dispatch("beforeUpdateRole");
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
    addReviewViewCnt({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/review/update/viewcnt/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "PUT",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("ADD_REVIEW_VIEW_CNT");
        })
        .catch(err => {
          console.log(err);
        });
    },

    // action - ReviewLike
    getReviewLikeList({ commit }) {
      const API_URL = `http://localhost:9999/rlike/reviewlist/${this.state
        .loginUser.userSeq}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_REVIEW_LIKE_LIST_BY_LOGINUSER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getReviewLikeStatus({ commit }, reviewSeq) {
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
          commit("CHANGE_REVIEW_LIKE_STATUS", response.data);
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
        .then(response => {
          this.dispatch("getReviewLikeList");
          this.dispatch("getReviewLikeStatus", reviewSeq);

          commit("SET_REVIEW_LIKE_INFO", reviewSeq);
        })
        .catch(err => {
          console.log(err);
        });
    },
    unlikeReview({ commit }, reviewSeq) {
      const API_URL = `http://localhost:9999/rlike/unlike/${this.state.loginUser
        .userSeq}/${reviewSeq}`;

      axios({
        url: API_URL,
        method: "DELETE",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          this.dispatch("getReviewLikeList");
          this.dispatch("getReviewLikeStatus", reviewSeq);

          commit("SET_REVIEW_LIKE_INFO", reviewSeq);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // action - weather
    getLocationList({ commit }) {
      const API_URL = "http://localhost:9999/soccerxy/list";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      }).then(response => {
        commit("GET_LOCATIONLIST", response.data);
      });
    },
    getBaseDateAndTime({ commit }) {
      const API_URL = "http://localhost:9999/weather/now";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("BASE_DATE_AND_TIME", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getWeather({ commit }, weatherDTO) {
      const API_URL = "http://localhost:9999/weather/data";

      axios({
        url: API_URL,
        method: "GET",
        params: {
          baseDate: weatherDTO.baseDate,
          baseTime: weatherDTO.baseTime,
          nx: weatherDTO.nx,
          ny: weatherDTO.ny
        },
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_WEATHER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRegionCodeList({ commit }) {
      const API_URL = "http://localhost:9999/regioncode/list";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_REGION_CODE_LIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchPartRegionCodeList({ commit }, region) {
      const API_URL = `http://localhost:9999/regioncode/list/${region}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("SEARCH_PART_REGION_CODE_LIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLongTemperature({ commit }, info) {
      const API_URL = `http://localhost:9999/weather/longdata/temperature`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        },
        params: {
          regId: info.regId,
          tmFc: info.tmFc
        }
      })
        .then(response => {
          commit("GET_LONG_TEMPERATURE", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getBigRegionCodeList({ commit }) {
      const API_URL = "http://localhost:9999/bigregioncode/list";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_BIG_REGION_CODE_LIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchPartBigRegionCodeList({ commit }, bigregion) {
      const API_URL = `http://localhost:9999/bigregioncode/list/${bigregion}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("SEARCH_PART_BIG_REGION_CODE_LIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLongWeather({ commit }, info) {
      const API_URL = `http://localhost:9999/weather/longdata/weather`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        },
        params: {
          regId: info.regId,
          tmFc: info.tmFc
        }
      })
        .then(response => {
          commit("GET_LONG_WEATHER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // action - article
    getArticleList({ commit }) {
      const API_URL = "http://localhost:9999/article/read/list";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_ARTICLE_LIST", response.data);

          this.dispatch("getArticleWriter");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getArticleWriter({ commit }) {
      const API_URL = `http://localhost:9999/user/read/list`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          let userList = response.data;
          let articleWriterList = [];

          for (let i = 0; i < this.state.DBarticleList.length; i++) {
            for (let j = 0; j < userList.length; j++) {
              if (this.state.DBarticleList[i].userSeq == userList[j].userSeq) {
                articleWriterList.push(userList[j].name);
                break;
              }
            }
          }

          commit("GET_ARTICLE_WRITER_LIST", articleWriterList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    registArticle({ commit }, article) {
      const API_URL = "http://localhost:9999/article/regist";

      console.log(article);

      axios({
        url: API_URL,
        method: "POST",
        data: article,
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getArticleList");
          commit("ADD_ARTICLE_IDX");
        })
        .then(() => {
          router.push("/articlelist");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getArticle({ commit }, articleSeq) {
      const API_URL = `http://localhost:9999/article/readbyarticleseq/${articleSeq}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_ARTICLE", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addArticleViewCnt({ commit }, articleSeq) {
      const API_URL = `http://localhost:9999/article/updateviewcnt/${articleSeq}`;

      axios({
        url: API_URL,
        method: "PUT",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          commit("ADD_ARTICLE_VIEW_CNT", articleSeq);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTeamList({ commit }) {
      const API_URL = "http://localhost:9999/team/read/list";

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_TEAM_LIST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    joinTeam({ commit }, articleSeq) {
      // this.dispatch("getTeamList")

      for (let i = 0; i < this.state.DBteamList.length; i++) {
        if (
          this.state.DBteamList[i].userSeq == this.state.loginUser.userSeq &&
          this.state.DBteamList[i].articleSeq == articleSeq
        ) {
          return;
        }
      }

      const API_URL = `http://localhost:9999/team/regist/${this.state.loginUser
        .userSeq}/${articleSeq}`;

      axios({
        url: API_URL,
        method: "POST",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getTeamList");

          router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    quitTeam({ commit }, articleSeq) {
      const API_URL = `http://localhost:9999/team/delete/${this.state.loginUser
        .userSeq}/${articleSeq}`;

      axios({
        url: API_URL,
        method: "DELETE",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getTeamList");
          router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addArticleRecruiteCnt({ commit }, articleSeq) {
      const API_URL = `http://localhost:9999/article/addrecruitecnt/${articleSeq}`;
      axios({
        url: API_URL,
        method: "PUT",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getArticleList");
        })
        .catch(err => {
          console.log(err);
        });
    },
    minusArticleRecruiteCnt({ commit }, articleSeq) {
      const API_URL = `http://localhost:9999/article/minusrecruitecnt/${articleSeq}`;

      axios({
        url: API_URL,
        method: "PUT",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getArticleList");
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateArticleStatus({ commit }, updateInfo) {
      const API_URL = `http://localhost:9999/article/update`;
      let article = {};

      console.log("===================");
      console.log(updateInfo);

      for (let i = 0; i < this.state.DBarticleList.length; i++) {
        if (this.state.DBarticleList[i].articleSeq == updateInfo.articleSeq) {
          article = this.state.DBarticleList[i];
        }
      }

      article.status = updateInfo.status;

      console.log(article);

      axios({
        url: API_URL,
        method: "PUT",
        data: article,
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(() => {
          this.dispatch("getArticleList");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTeamMember({ commit }, articleSeq) {
      const API_URL = `http://localhost:9999/team/readbyarticleseq/list/${articleSeq}`;
      console.log(articleSeq);

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          console.log(response.data);
          commit("GET_TEAM_MEMBER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // action - news
    getMatchInfo({ commit }, info) {
      const API_URL = `http://localhost:9999/news/matchday/list/${info.league}/${info.round}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_MATCH_INFO", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTopScorer({ commit }, league) {
      const API_URL = `http://localhost:9999/news/topscorer/${league}`;

      axios({
        url: API_URL,
        method: "GET",
        headers: {
          "access-token": sessionStorage.getItem("access-token")
        }
      })
        .then(response => {
          commit("GET_TOP_SCOERER", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});
