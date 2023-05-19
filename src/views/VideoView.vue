<template>
  <div>
    <h2>유튜브 비디오 페이지</h2>

    <VideoCategory></VideoCategory>

    <VideoSearchResult></VideoSearchResult>
  </div>
</template>

<script>
import VideoCategory from "@/components/video/VideoCategory.vue";
import VideoSearchResult from "@/components/video/VideoSearchResult.vue";

// import {mapState} from "vuex"

export default {
  name: "VideoView",
  components: {
    VideoCategory,
    VideoSearchResult
  }
  // created() {
  //   this.$store.dispatch("getVideoList");
  // }
};
</script>

<style lang="scss" scoped></style>
