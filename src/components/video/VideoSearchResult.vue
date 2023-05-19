<template>
  <div>
    <h3>검색 결과</h3>

    <ul class="youtube-list">
      <li
        v-for="video in videos"
        :key="video.id.videoId"
        @click="clickVideo(video)"
      >
        <img :src="video.snippet.thumbnails.default.url" />
        {{ video.snippet.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VideoSearchResult",
  computed: {
    ...mapState(["videos", "video"])
  },
  methods: {
    clickVideo(video) {
      this.$store.dispatch("clickVideo", video);
      this.$router.push("/videoDetail");
    }
  }
};
</script>

<style scoped>
.youtube-list {
  text-align: left;
}
</style>
