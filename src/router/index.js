import Vue from "vue";
import VueRouter from "vue-router";

// home
import HomeView from "@/views/home/HomeView.vue";

// user
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserSignupView from "@/views/user/UserSignupView.vue";
import UserMyPageView from "@/views/user/UserMyPageView.vue";
import UserModifyView from "@/views/user/UserModifyView.vue";
import UserMyReviewPageView from "@/views/user/UserMyReviewPageView.vue";

// video
import VideoView from "@/views/video/VideoView.vue";
import VideoDetailView from "@/views/video/VideoDetailView.vue";

// review
import ReviewRegistView from "@/views/review/ReviewRegistView.vue";
import ReviewDetailView from "@/views/review/ReviewDetailView.vue";
import ReviewModifyView from "@/views/review/ReviewModifyView.vue";

// weather
import WeatherView from "@/views/weather/WeatherView.vue";

// board
import BoardView from "@/views/board/BoardView.vue";

Vue.use(VueRouter);

const routes = [
  // user
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/login",
    name: "UserLoginView",
    component: UserLoginView,
  },
  {
    path: "/signup",
    name: "UserSignupView",
    component: UserSignupView,
  },
  {
    path: "/myPage/:userSeq",
    name: "UserMyPageView",
    component: UserMyPageView,
  },
  {
    path: "/myPage/modify/:userSeq",
    name: "UserModifyView",
    component: UserModifyView,
  },
  {
    path: "/myReviewPage/:userSeq",
    name: "UserMyReviewPageView",
    component: UserMyReviewPageView,
  },

  // video
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
  {
    path: "/videoDetail/:videoId",
    name: "videoDetailView",
    component: VideoDetailView,
  },

  // review
  {
    path: "/reviewRegist/:videoId",
    name: "reviewRegistView",
    component: ReviewRegistView,
  },
  {
    path: "/reviewDetail/:videoId/:reviewSeq",
    name: "ReviewDetailView",
    component: ReviewDetailView,
  },
  {
    path: "/reviewModify/:videoId/:reviewSeq",
    name: "ReviewModifyView",
    component: ReviewModifyView,
  },

  // weather
  {
    path: "/weather",
    name: "WeatherView",
    component: WeatherView,
  },
  //board
  {
    path: "/board",
    name: "BoardView",
    component: BoardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
