<template>
  <body>
    <main class="form-signin w-100 m-auto">
      <form>
        <img class="mb-4" width="72" height="57" />
        <h1 class="h3 mb-3 fw-normal">Please Login</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-50 btn btn-lg btn-primary">Login</button>
        <button @click="GoUserSignup" class="w-50 btn btn-lg btn btn-warning">
          Signup
        </button>
        <p class="mt-5 mb-3 text-body-secondary">&copy; SSAFY</p>
      </form>
    </main>
  </body>
</template>

<script>
export default {
  name: "UserLogin",
  methods: {
    GoUserSignup() {
      if (this.$route.path !== "/signup") {
        this.$router.push("/signup");
      }
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
