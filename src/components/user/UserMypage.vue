<template>
  <div class="content py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <span class="anchor" id="formUserEdit"></span>
          <!-- form user info -->
          <div class="card card-outline-secondary">
            <div class="card-header">
              <h3 class="mb-0 fw-bold">회원 정보</h3>
            </div>
            <div class="card-body">
              <div class="form" role="form" autocomplete="off">
                <div>
                  <label for="img">이미지</label>
                  <input
                    @change="uploadImage()"
                    type="file"
                    id="img"
                    name="img"
                    class="form-control"
                    ref="img"
                    accept="image/*"
                  />
                </div>

                <img :src="imgUrl" width="100px" />
                <!-- <button @click="deleteImg" class="btn btn-secondary sm">
                  X
                </button> -->
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >ID</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.userId"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >이름</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.name"
                      placeholder="new name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >닉네임</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.nickname"
                      placeholder="new nickname"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >등급</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.role"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >포지션</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.position"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >Phone No.</label
                  >
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      type="text"
                      v-model="loginUser.phoneNumber"
                      placeholder="Tel 000-0000-0000"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    class="col-lg-3 col-form-label form-control-label"
                  ></label>
                  <hr />
                  <input
                    @click="goUserModify"
                    type="button"
                    class="btn btn-primary btn-lg"
                    value="정보 수정"
                  />
                  <hr />
                  <input
                    @click="goMyReviewPage"
                    type="reset"
                    class="btn btn-secondary btn-lg"
                    value="내가 좋아한 영상 리뷰"
                  />
                  <hr />
                  <input
                    @click="deleteUser"
                    type="reset"
                    class="btn btn-danger btn-lg"
                    value="회원 탈퇴"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /form user info -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserMyPage",
  computed: {
    ...mapState(["loginUser", "DBuserList"]),
  },
  data() {
    return {
      source: "",
      img: null, // 이미지 파일을 저장할 변수 추가
      imgUrl: "", // 이미지 파일 URL을 저장할 변수 추가
    };
  },

  created() {
    this.$store.dispatch("getUserList");

    this.$store.dispatch("setLoginInfo", this.$route.params.userSeq);

    this.source = this.loginUser.img;
    this.imgUrl = `http://localhost:9999/user/display?userSeq=${this.loginUser.userSeq}`; // 이미지 파일 URL 설정
  },
  methods: {
    goMyReviewPage() {
      this.$router.push("/myReviewPage/" + this.$route.params.userSeq);
    },
    goUserModify() {
      if (this.$route.path !== "/myPage/modify/" + this.loginUser.userSeq) {
        this.$router.push("/myPage/modify/" + this.loginUser.userSeq);
      }
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", this.loginUser.userId);
      this.$store.dispatch("logout");
    },

    uploadImage() {
      this.img = this.$refs.img.files[0];

      let box = {
        img: this.img,
        userSeq: this.loginUser.userSeq,
      };

      this.$store.dispatch("uploadImage", box);
    },
    // deleteImg() {
    //   this.$store.dispatch("deleteImg");
    // },
  },
};
</script>

<style scoped>
img {
  width: 250px;
  height: 250px;
  margin: 30px;
}
</style>
