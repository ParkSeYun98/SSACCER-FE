<template>
  <div>
    <VideoDetail></VideoDetail>
    <ReviewModify></ReviewModify>
  </div>
</template>

<script>
import VideoDetail from "@/components/video/VideoDetail.vue";
import ReviewModify from "@/components/review/ReviewModify.vue";

export default {
  name: "ReviewModifyView",
  components: {
    VideoDetail,
    ReviewModify
  }
};
</script>

<style></style>
