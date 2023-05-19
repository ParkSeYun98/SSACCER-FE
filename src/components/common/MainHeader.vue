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
          <li><a href="#" class="nav-link px-2 text-white">Board</a></li>
          <li><a href="#" class="nav-link px-2 text-white">News</a></li>
          <li>
            <a @click="goVideoView" class="nav-link px-2 text-white">Youtube</a>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div class="text-end">
          <button
            v-if="loginUserName"
            class="btn btn-outline-light me-2"
            @click="logout"
          >
            Logout
          </button>

          <button
            v-else
            @click="GoUserLogin"
            class="btn btn-outline-light me-2"
          >
            Login
          </button>
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
    ...mapState(["loginUserName"]),
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
        location.reload();
      }
    },
    goVideoView() {
      this.$router.push("/video");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped></style>
