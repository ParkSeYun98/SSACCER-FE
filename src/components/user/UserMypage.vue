<template>
  <div>
    <h2>마이 페이지</h2>

    <br />

    <h4>닉네임 : {{ loginUser.nickname }}</h4>
    <h4>등급 : {{ loginUser.role }}</h4>
    <h4>포지션 : {{ loginUser.position }}</h4>

    <br />

    <h4 @click="goMyReviewPage">내가 작성한 리뷰</h4>
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
    }
  }
};
</script>

<style scoped></style>
