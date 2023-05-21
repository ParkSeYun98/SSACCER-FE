<template>
  <div>
    <h2>내가 좋아하는 리뷰</h2>

    <table class="table" style="width: 90%; margin: 0 auto">
      <thead>
        <tr>
          <th scope="col">썸네일</th>
          <th scope="col">영상 제목</th>
          <th scope="col">채널 이름</th>
          <th scope="col">리뷰 제목</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reviewLike, idx) in reviewLikeList" :key="idx">
          <td><img :src="thumbnails[idx]" /></td>

          <td>
            {{ reviewLike.videoTitle }}
          </td>
          <td>{{ reviewLike.channelName }}</td>
          <td>{{ reviewLike.reviewTitle }}</td>
          <td>{{ reviewLike.viewCnt }}</td>
        </tr>
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
    this.$store.dispatch("getVideoList");
    this.getThumbnails();
  },
  computed: {
    ...mapState(["reviewLikeList", "DBvideoList"])
  },
  data() {
    return {
      thumbnails: []
    };
  },
  methods: {
    getThumbnails() {
      console.log(this.reviewLikeList);
      console.log(this.DBvideoList);
      for (let i = 0; i < this.reviewLikeList.length; i++) {
        for (let j = 0; j < this.DBvideoList.length; j++) {
          if (
            this.DBvideoList[j].videoSeq === this.reviewLikeList[i].videoSeq
          ) {
            this.thumbnails.push(this.DBvideoList[j].thumbnail);
            console.log(j);
            console.log(this.DBvideoList[j].thumbnail);
          }
        }
      }
    }
  }
};
</script>

<style></style>
