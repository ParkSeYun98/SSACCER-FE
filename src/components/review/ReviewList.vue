<template>
  <div>
    <button @click="goRegistReview" class="btn btn-primary">리뷰 등록</button>

    <table class="table" style="width: 90%; margin: 0 auto">
      <thead>
        <tr>
          <th scope="col"></th>
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
            <i v-if="LikeStatusList[idx] === true" class="bi bi-heart-fill"></i>
            <i v-else class="bi bi-heart"></i>
          </td>
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
    this.LikeStatusList = [];
    this.$store.dispatch("getReviewList", this.$route.params.videoId);
    this.$store.dispatch("getReviewLikeList", this.loginUser.userSeq);
    this.getLikeStatusList();
    console.log(this.LikeStatusList);
  },
  computed: {
    ...mapState([
      "reviewList",
      "review",
      "video",
      "reviewLikeList",
      "loginUser"
    ])
  },
  data() {
    return {
      LikeStatusList: [],
      idx: 0
    };
  },
  methods: {
    clickReview(review) {
      this.$store.dispatch("setReview", review);
    },
    goRegistReview() {
      this.$router.push("/reviewRegist/" + this.$route.params.videoId);
    },
    goDetailReview(review) {
      this.$router.push(
        "/reviewDetail/" + this.$route.params.videoId + "/" + review.reviewSeq
      );
    },
    getLikeStatusList() {
      for (let i = 0; i < this.reviewList.length; i++) {
        let flag = false;

        for (let j = 0; j < this.reviewLikeList.length; j++) {
          if (
            this.reviewList[i].reviewSeq === this.reviewLikeList[j].reviewSeq
          ) {
            flag = true;
            break;
          }
        }
        if (flag) {
          this.LikeStatusList.push(true);
        } else {
          this.LikeStatusList.push(false);
        }
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.bi {
  color: red;
}
</style>
