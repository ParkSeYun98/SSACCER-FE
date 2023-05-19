<template>
  <div>
    <h3>검색 결과</h3>

    <ul class="youtube-list">
      <li
        v-for="video in videoList"
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
  created() {
    this.$store.dispatch("getVideoList");
  },
  computed: {
    ...mapState(["videoList", "video", "DBvideoList"])
  },
  methods: {
    clickVideo(YoutubeVideo) {
      // YoutubeVideo와 dbvideo는 서로 형식이 다름
      this.$store.dispatch("getVideoList");

      const DBvideo = {
        youtubeId: YoutubeVideo.id.videoId,
        title: YoutubeVideo.snippet.title,
        url: `https://youtube.com/embed/${YoutubeVideo.id.videoId}`,
        channelName: YoutubeVideo.snippet.channelTitle
      };

      this.$store.dispatch("clickVideo", YoutubeVideo);

      // 목록에서 비디오를 클릭하면 상세 페이지로 넘어가기 전에
      // 클릭한 비디오를 DB에 저장한다.
      // 다만 이미 DB에 저장된 비디오인지 체크해야 한다.
      // for (let i = 0; i < this.DBVideoList.length; i++) {
      //   if (this.DBVideoList[i].id === DBvideo.id) {
      //     this.$router.push("/videoDetail/" + YoutubeVideo.id.videoId);
      //     return;
      //   }
      // }

      this.$store.dispatch("saveVideo", DBvideo);
      this.$router.push("/videoDetail/" + YoutubeVideo.id.videoId);
    }
  }
};
</script>

<style scoped>
.youtube-list {
  text-align: left;
}
</style>
