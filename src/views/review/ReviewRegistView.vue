<template>
  <div>
    <VideoDetail></VideoDetail>
    <ReviewRegist></ReviewRegist>
  </div>
</template>

<script>
import VideoDetail from "@/components/video/VideoDetail.vue";
import ReviewRegist from "@/components/review/ReviewRegist.vue";

export default {
  name: "ReviewRegistView",
  components: {
    ReviewRegist,
    VideoDetail
  }
};
</script>

<style></style>
