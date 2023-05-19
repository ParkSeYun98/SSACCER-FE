<template>
  <div>
    <h2>유튜브 비디오 페이지</h2>

    <VideoCategory></VideoCategory>

    <VideoSearchResult></VideoSearchResult>
  </div>
</template>

<script>
import VideoCategory from "@/components/video/VideoCategory.vue";
import VideoDetail from "@/components/video/VideoDetail.vue";
import VideoSearchResult from "@/components/video/VideoSearchResult.vue";

export default {
  name: "VideoView",
  components: {
    VideoCategory,
    VideoDetail,
    VideoSearchResult
  }
};
</script>

<style lang="scss" scoped></style>
