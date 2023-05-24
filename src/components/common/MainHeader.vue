<template>
  <div class="p-3 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img
            src="@/assets/logo5.png"
            alt="Logo"
            width="220px"
            height="80px"
          />
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
          <li>
            <a @click="goArticleView" class="nav-link px-2 text-white">모집</a>
          </li>
          <li><a class="nav-link px-2 text-white">뉴스</a></li>
          <li>
            <a @click="goVideoView" class="nav-link px-2 text-white">영상</a>
          </li>
          <li>
            <a @click="goWeatherView" class="nav-link px-2 text-white">날씨</a>
          </li>
        </ul>

        <div v-if="loginUserName" class="navbar-login">
          <span>{{ loginUserName }}님 환영합니다</span>

          <div class="text-end">
            <a class="btn btn-outline-light me-2" @click="logout">
              <span>Logout</span>
            </a>
          </div>
          <div class="text-end">
            <a class="btn btn-outline-light me-2" @click="goMyPage">
              <span>MyPage</span>
            </a>
          </div>
          <div class="text-end">
            <a class="btn btn-outline-light me-2" @click="goContactView">
              <span>문의</span>
            </a>
          </div>
        </div>
        <div v-else>
          <a @click="GoUserLogin" class="btn btn-outline-light me-2"> Login </a>
          <button @click="GoUserSignup" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapState(["loginUserName", "loginUser"])
  },
  methods: {
    GoUserLogin() {
      if (this.$route.path !== "/login") {
        this.$router.push("/login");
      }
    },
    GoUserSignup() {
      if (this.$route.path !== "/signup") {
        this.$router.push("/signup");
      }
    },
    goVideoView() {
      if (this.$route.path !== "/video") {
        this.$router.push("/video");
      }
    },
    goArticleView() {
      if (this.$route.path !== "/articlelist") {
        this.$router.push("/articlelist");
      }
    },

    logout() {
      this.$store.dispatch("logout");
    },
    goMyPage() {
      if (this.$route.path !== "/myPage/" + this.loginUser.userSeq) {
        this.$router.push("/myPage/" + this.loginUser.userSeq);
      }
    },
    goWeatherView() {
      if (this.$route.path !== "/weather") {
        this.$router.push("/weather");
      }
    },
    goContactView() {
      if (this.$route.path !== "/contact") {
        this.$router.push("/contact");
      }
    }
  }
};
</script>

<style scoped>
.navbar-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
