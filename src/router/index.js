import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserLoginView from "@/views/UserLoginView.vue";
import UserSignupView from "@/views/UserSignupView.vue";
import BoardView from "@/views/BoardView.vue";
import VideoView from "@/views/VideoView.vue";
import VideoDetailView from "@/views/VideoDetailView.vue";
import ReviewRegistView from "@/views/ReviewRegistView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/login",
    name: "UserLogin",
    component: UserLoginView
  },
  {
    path: "/signup",
    name: "UserSignup",
    component: UserSignupView
  },
  {
    path: "/board",
    name: "board",
    component: BoardView
  },
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
  {
    path: "/reviewRegist/:videoId",
    name: "reviewRegistView",
    component: ReviewRegistView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
