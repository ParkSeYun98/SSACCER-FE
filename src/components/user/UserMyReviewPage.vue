<template>
  <div>
    <h2>내가 작성한 리뷰</h2>

    <table class="table" style="width: 90%; margin: 0 auto">
      <thead>
        <tr>
          <th scope="col">영상 제목</th>
          <th scope="col">채널 이름</th>
          <th scope="col">리뷰 제목</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr
          v-for="(reviewLike, idx) in reviewLikeList"
          :key="idx"
          @click="[clickReview(review), goDetailReview(review)]"
        >
          <td>
            {{ reviewLike.reviewSeq }}
          </td>

          <td>
            {{ reviewLike.title }}
          </td>
          <td>{{ reviewLike.writer }}</td>
          <td>{{ reviewLike.viewCnt }}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserMyReview",
  created() {
    this.$store.dispatch("getReviewLikeList", this.$route.params.userSeq);
  },
  computed: {
    ...mapState(["reviewLikeList"])
  }
};
</script>

<style></style>
