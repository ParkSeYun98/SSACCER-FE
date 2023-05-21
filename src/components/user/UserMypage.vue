<template>
  <div>
    <div class="container-fluid vh-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-8 col-xl-7">
          <div class="card text-black rounded-25">
            <div class="card-body p-md-4">
              <div class="row justify-content-center">
                <div class="col-md-5 col-lg-6 col-xl-5" order-lg="1">
                  <h1 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    마이 페이지
                  </h1>

                  <div class="mx-1 mx-md-4">
                    <div>
                      <h4>ID: {{ loginUser.userId }}</h4>
                      <h4>이름: {{ loginUser.name }}</h4>
                      <h4>닉네임: {{ loginUser.nickname }}</h4>
                      <h4>등급: {{ loginUser.role }}</h4>
                      <h4>포지션: {{ loginUser.position }}</h4>
                    </div>

                    <br />

                    <div class="row mx-4 mb-3 mb-lg-4">
                      <button
                        @click="goUserModify"
                        class="btn btn-primary btn-lg"
                      >
                        정보 수정
                      </button>
                      <button @click="deleteUser" class="btn btn-danger btn-lg">
                        회원 탈퇴
                      </button>
                    </div>

                    <h4 @click="goMyReviewPage">내가 작성한 리뷰</h4>
                  </div>
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
import { mapState } from "vuex";

export default {
  name: "UserMyPage",
  computed: {
    ...mapState(["loginUser"])
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
    }
  }
};
</script>

<style scoped></style>
