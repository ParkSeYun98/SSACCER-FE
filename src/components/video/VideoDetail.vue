<template>
  <div>
    <div v-if="video">
      <h2>영상 보기</h2>

      <iframe
        width="560"
        height="315"
        :src="videoURL"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VideoDetail",
  computed: {
    ...mapState(["video"]),

    videoURL() {
      const videoId = this.video.id.videoId;
      return `https://youtube.com/embed/${videoId}`;
    }
  }
};
</script>

<style></style>
