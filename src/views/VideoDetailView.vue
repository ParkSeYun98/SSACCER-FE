<template>
  <div>
    <VideoDetail></VideoDetail>
    <ReviewList></ReviewList>
  </div>
</template>

<script>
import VideoDetail from "@/components/video/videodetail/VideoDetail.vue";
import ReviewList from "@/components/video/videodetail/reviewList.vue";

export default {
  name: "VideoDetailView",
  components: {
    VideoDetail,
    ReviewList
  },
  created() {
    this.$store.dispatch("getReviewList", `${this.$route.params.id}`);
  }
};
</script>

<style></style>
