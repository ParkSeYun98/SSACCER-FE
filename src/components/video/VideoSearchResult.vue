<template>
  <div class="container-sm">
    <ul class="list-group youtube-list">
      <li
        v-for="video in videoList"
        :key="video.id.videoId"
        @click="clickVideo(video)"
        class="list-group-item d-flex align-items-center"
      >
        <img :src="video.snippet.thumbnails.default.url" class="mr-3" />
        <div class="video-info d-flex flex-column">
          <h5 class="mb-1">{{ video.snippet.title }}</h5>
          <p class="mb-0 align-self-start">{{ video.snippet.channelTitle }}</p>
        </div>
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

      console.log(YoutubeVideo);

      const dbvideo = {
        youtubeId: YoutubeVideo.id.videoId,
        title: YoutubeVideo.snippet.title,
        url: `https://youtube.com/embed/${YoutubeVideo.id.videoId}`,
        channelName: YoutubeVideo.snippet.channelTitle,
        thumbnail: YoutubeVideo.snippet.thumbnails.default.url
      };

      this.$store.dispatch("clickVideo", YoutubeVideo);

      // 목록에서 비디오를 클릭하면 상세 페이지로 넘어가기 전에
      // 클릭한 비디오를 DB에 저장한다.
      // 다만 이미 DB에 저장된 비디오인지 체크해야 한다
      for (let i = 0; i < this.DBvideoList.length; i++) {
        if (this.DBvideoList[i].youtubeId === dbvideo.youtubeId) {
          this.$router.push("/videoDetail/" + YoutubeVideo.id.videoId);
          return;
        }
      }

      this.$store.dispatch("saveVideo", dbvideo);
      console.log("새로고침전");
      this.$router.push("/videoDetail/" + YoutubeVideo.id.videoId);
      // this.$router.go(0);
      // location.reload;
    }
  }
};
</script>

<style scoped>
.youtube-list {
  margin-top: 20px;
}

.youtube-list li {
  cursor: pointer;
}

.video-info h5 {
  margin-bottom: 5px;
  /* 원하는 간격 설정 */
  padding-left: 20px;
}
.video-info p {
  margin-left: 20px; /* channertitle의 margin-bottom을 0으로 설정 */
}
</style>
