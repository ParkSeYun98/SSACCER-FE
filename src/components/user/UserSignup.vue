<template>
  <div>
    <div class="container-fluid vh-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black rounded-25">
            <div class="card-body p-md-4">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5" order-lg="1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div class="mx-1 mx-md-4">
                    <div class="form-group" id="idInput">
                      <label for="idInput">Your Id</label>
                      <input
                        placeholder="your id"
                        v-model="userId"
                        type="text"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group" id="passwordInput">
                      <label for="passwordInput">Password</label>
                      <input
                        placeholder="your password"
                        v-model="password"
                        type="password"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group" id="nameInput">
                      <label for="nameInput">Name</label>
                      <input
                        placeholder="your name"
                        v-model="name"
                        type="text"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group" id="nicknameInput">
                      <label for="nicknameInput">Nickname</label>
                      <input
                        placeholder="your 별명"
                        v-model="nickname"
                        type="text"
                        class="form-control"
                      />
                    </div>

                    <div
                      style="display: flex; margin-top: 20px"
                      class="form-group row"
                    >
                      <label class="col-lg-3 col-form-label form-control-label"
                        >포지션</label
                      >
                      <div class="col-lg-9">
                        <select
                          v-model="position"
                          id="position"
                          class="form-control"
                          size="0"
                        >
                          <option disabled value="">select one</option>
                          <option value="올라운더">올라운더</option>
                          <option value="공격수">공격수</option>
                          <option value="미드필더">미드필더</option>
                          <option value="수비수">수비수</option>
                          <option value="골키퍼">골키퍼</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group" id="phoneNumberInput">
                      <label for="phoneNumberInput">Phone No.</label>
                      <input
                        placeholder="Tel 000-0000-0000"
                        v-model="phoneNumber"
                        type="text"
                        class="form-control"
                      />
                    </div>

                    <br /><br />

                    <div class="row mx-4 mb-3 mb-lg-4">
                      <button @click="SignUp" class="btn btn-primary btn-lg">
                        등록
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
  </div>
</template>

<script>
export default {
  name: "UserSignup",
  data() {
    return {
      userId: "",
      password: "",
      name: "",
      nickname: "",
      role: "UNRANKED",
      position: "",
      phoneNumber: "",
      img: "",
      orgimg: ""
    };
  },
  methods: {
    SignUp() {
      if (
        this.userId === "" ||
        this.password === "" ||
        this.name === "" ||
        this.nickname === "" ||
        this.position === "" ||
        this.phoneNumber === ""
      ) {
        swal({
          title: "로그인 에러",
          text: "모든 내용을 입력해주세요!",
          icon: "error",
          button: false
        });
      }

      let user = {
        userId: this.userId,
        password: this.password,
        name: this.name,
        nickname: this.nickname,
        role: this.role,
        position: this.position,
        phoneNumber: this.phoneNumber,
        img: this.img
      };

      this.$store.dispatch("SignUp", user);
      this.$store.dispatch("getUserList");
    }
    // uploadImage() {
    //   this.img = this.$refs.img.files[0];
    //   console.log(this.img);
    // }
  }
};
</script>

<style scoped></style>
