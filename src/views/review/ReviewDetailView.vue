<template>
  <div>
    <VideoDetail></VideoDetail>
    <br>
    <ReviewDetail></ReviewDetail>
  </div>
</template>

<script>
import VideoDetail from "@/components/video/VideoDetail.vue";
import ReviewDetail from "@/components/review/ReviewDetail.vue";

export default {
  name: "ReviewDetailView",
  components: {
    ReviewDetail,
    VideoDetail
  }
};
</script>

<style></style>
