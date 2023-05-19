<template>
  <div class="container-fluid vh-100">
    <div class="row align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black rounded-25">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5">
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Log in
                </p>

                <div class="mx-1 mx-md-4">
                  <div class="form-group" id="idInput">
                    <label for="idInput">Your Id</label>
                    <input
                      v-model.trim="user.userId"
                      type="text"
                      class="form-control"
                      id="idInput"
                      placeholder="id 입력"
                    />
                  </div>

                  <div class="form-group" id="passwordInput">
                    <label for="passwordInput">Password</label>
                    <input
                      v-model.trim="user.password"
                      type="password"
                      class="form-control"
                      id="passwordInput"
                      placeholder="password 입력"
                    />
                  </div>

                  <br />

                  <div class="buttons">
                    <button @click="UserLogin" class="btn btn-primary btn-lg">
                      로그인
                    </button>

                    <button
                      @click="GoUserSignup"
                      class="btn btn-warning btn-lg"
                    >
                      회원가입
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center"
                order-lg="2"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      user: {
        userId: "",
        password: "",
      },
    };
  },
  methods: {
    GoUserSignup() {
      if (this.$route.path !== "/signup") {
        this.$router.push("/signup");
      }
    },
    UserLogin() {
      console.log(this.user);
      if (this.user.userId === "" || this.user.password === "") {
        alert("내용을 입력해주세요");
      } else {
        this.$store.dispatch("Login", this.user);
      }
    }
  }
};
</script>

<style scoped></style>
