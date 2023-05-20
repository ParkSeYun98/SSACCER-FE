<template>
  <div>
    <VideoDetail></VideoDetail>
    <ReviewList></ReviewList>
  </div>
</template>

<script>
import VideoDetail from "@/components/video/VideoDetail.vue";
import ReviewList from "@/components/review/ReviewList.vue";

export default {
  name: "VideoDetailView",
  components: {
    VideoDetail,
    ReviewList
  }
};
</script>

<style></style>
