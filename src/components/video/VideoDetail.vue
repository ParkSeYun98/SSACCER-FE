<template>
  <div>
    <div v-if="video">
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

      <h2>{{ video.snippet.title }}</h2>
      <h4>{{ video.snippet.channelTitle }}</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VideoDetail",
  created() {
    this.$store.dispatch("getDBVideoByYoutubeId", this.$route.params.videoId);
  },
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
