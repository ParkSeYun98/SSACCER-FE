<template>
  <div>
    <button @click="goRegistReview" class="btn btn-primary">리뷰 등록</button>

    <table class="table" style="width: 90%; margin: 0 auto">
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">조회수</th>
          <th scope="col">작성시간</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(review, idx) in reviewList"
          :key="idx"
          @click="[clickReview(review), goDetailReview(review)]"
        >
          <td>
            {{ review.reviewSeq }}
          </td>

          <td>
            {{ review.title }}
          </td>
          <td>{{ review.writer }}</td>
          <td>{{ review.viewCnt }}</td>
          <td>{{ review.createdDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "reviewList",
  created() {
    this.$store.dispatch("getReviewList", this.$route.params.videoId);
  },
  computed: {
    ...mapState(["reviewList", "review", "video"])
  },
  methods: {
    clickReview(review) {
      this.$store.dispatch("setReview", review);
    },
    goRegistReview() {
      this.$router.push("/reviewRegist/" + this.$route.params.videoId);
    },
    goDetailReview(review) {
      // this.$store.dispatch("getReview", review.reviewSeq);

      this.$router.push(
        "/reviewDetail/" + this.$route.params.videoId + "/" + review.reviewSeq
      );
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
