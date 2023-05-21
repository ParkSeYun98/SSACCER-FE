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
import UploadImageView from "@/views/user/UserUploadImageView.vue";

// video
import VideoView from "@/views/video/VideoView.vue";
import VideoDetailView from "@/views/video/VideoDetailView.vue";

// review
import ReviewRegistView from "@/views/review/ReviewRegistView.vue";
import ReviewDetailView from "@/views/review/ReviewDetailView.vue";
import ReviewModifyView from "@/views/review/ReviewModifyView.vue";

Vue.use(VueRouter);

const routes = [
  // user
  {
    path: "/",
    name: "HomeView",
    component: HomeView
  },
  {
    path: "/login",
    name: "UserLoginView",
    component: UserLoginView
  },
  {
    path: "/signup",
    name: "UserSignupView",
    component: UserSignupView
  },
  {
    path: "/myPage/:userSeq",
    name: "UserMyPageView",
    component: UserMyPageView
  },
  {
    path: "/myPage/modify/:userSeq",
    name: "UserModifyView",
    component: UserModifyView
  },
  {
    path: "/myReviewPage/:userSeq",
    name: "UserMyReviewPageView",
    component: UserMyReviewPageView
  },
  {
    path: "/uploadimage/:userSeq",
    name: "UploadImageView",
    component: UploadImageView
  },

  // video
  {
    path: "/video",
    name: "video",
    component: VideoView
  },
  {
    path: "/videoDetail/:videoId",
    name: "videoDetailView",
    component: VideoDetailView
  },

  // review
  {
    path: "/reviewRegist/:videoId",
    name: "reviewRegistView",
    component: ReviewRegistView
  },
  {
    path: "/reviewDetail/:videoId/:reviewSeq",
    name: "ReviewDetailView",
    component: ReviewDetailView
  },
  {
    path: "/reviewModify/:videoId/:reviewSeq",
    name: "ReviewModifyView",
    component: ReviewModifyView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
