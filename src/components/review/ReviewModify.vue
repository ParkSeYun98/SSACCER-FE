<template>
  <div>
    <h2>리뷰 수정</h2>

    <div>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="review.title" /><br />
      <label for="content">내용</label>
      <textarea type="text" id="content" v-model="review.content" /><br />
    </div>

    <div class="buttons">
      <button @click="modifyReview" class="btn btn-primary">확인</button>
      <button @click="goReviewDetailView" class="btn btn-danger">취소</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ReviewModify",
  computed: {
    ...mapState(["review"])
  },
  methods: {
    modifyReview() {
      this.$store.dispatch("modifyReview", this.review);

      this.goReviewDetailView();
      //   this.$router.replace(
      //     "reviewDetail/" +
      //       this.$route.params.videoId +
      //       "/" +
      //       this.$route.params.reviewSeq
      //   );
    },
    goReviewDetailView() {
      //   this.$router.push(
      //     "reviewDetail/" +
      //       this.$route.params.videoId +
      //       "/" +
      //       this.$route.params.reviewSeq
      //   );
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
