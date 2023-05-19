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
          <li><a class="nav-link px-2 text-white">Board</a></li>
          <li><a class="nav-link px-2 text-white">News</a></li>
          <li>
            <a @click="goVideoView" class="nav-link px-2 text-white">Youtube</a>
          </li>
        </ul>

        <div class="navbar-login" v-if="loginUserName">
          <span>{{ loginUserName }}님 환영합니다</span>

          <div class="text-end">
            <a class="btn btn-outline-light me-2" @click="logout">
              <span>Logout</span>
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
  name: "Header",
  computed: {
    ...mapState(["loginUserName"])
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
    logout() {
      this.$store.dispatch("logout");
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
