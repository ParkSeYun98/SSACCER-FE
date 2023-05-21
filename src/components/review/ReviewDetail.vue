<template>
  <div>
    <div>
      <i
        v-if="reviewLikeOrNot"
        @click="unlikeReview"
        class="bi bi-heart-fill"
      ></i>
      <i v-else @click="likeReview" class="bi bi-heart"></i>

      <h4>리뷰 제목 : {{ review.title }}</h4>
      <h5>글쓴이 : {{ review.writer }}</h5>
      <h6>내용 : {{ review.content }}</h6>
      <h6>조회수 : 👁 {{ review.viewCnt }}</h6>
      <h6>작성 일자 : {{ review.createdDate }}</h6>
    </div>

    <div class="buttons">
      <button @click="goReviewList" class="btn btn-secondary">이전으로</button>
      <button @click="goReviewModify" class="btn btn-warning">리뷰 수정</button>
      <button @click="deleteReview" class="btn btn-danger">리뷰 삭제</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ReviewDetail",
  created() {
    this.$store.dispatch("getReview", this.$route.params.reviewSeq);
    this.$store.dispatch("getReviewLikeList");
    this.$store.dispatch("getReviewLikeStatus", this.$route.params.reviewSeq);
  },
  computed: {
    ...mapState([
      "review",
      "reviewLikeInfo",
      "reviewLikeOrNot",
      "reviewLikeList",
      "loginUser"
    ])
  },
  methods: {
    goReviewList() {
      this.$router.push("/videoDetail/" + this.$route.params.videoId);
    },
    deleteReview() {
      this.$store.dispatch("deleteReview", this.$route.params.reviewSeq);

      this.$store.dispatch("unlikeReview", this.$route.params.reviewSeq);

      location.href = `/videoDetail/${this.$route.params.videoId}`;
    },
    goReviewModify() {
      this.$router.push(
        "/reviewModify/" +
          this.$route.params.videoId +
          "/" +
          this.$route.params.reviewSeq
      );
    },
    likeReview() {
      this.$store.dispatch("likeReview", this.$route.params.reviewSeq);
    },
    unlikeReview() {
      this.$store.dispatch("unlikeReview", this.$route.params.reviewSeq);
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 1px;
}

.bi {
  font-size: 45px;
  color: red;
}
</style>
