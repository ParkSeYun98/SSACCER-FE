<template>
  <div>
    <h2>리뷰 등록</h2>

    <div>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="content">내용</label>
      <textarea type="text" id="content" v-model="content" /><br />
    </div>

    <button @click="registReview" class="btn btn-primary">등록</button>
    <button @click="goVideoDetailView" class="btn btn-danger">취소</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RegistReview",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  computed: {
    ...mapState(["loginUserName", "loginUser", "DBvideoList"])
  },
  methods: {
    registReview() {
      let videoSeq = 0;

      for (let i = 0; i < this.DBvideoList.length; i++) {
        if (this.DBvideoList[i].youtubeId === this.$route.params.videoId) {
          videoSeq = this.DBvideoList[i].videoSeq;
          break;
        }
      }

      const Review = {
        userSeq: this.loginUser.userSeq,
        videoSeq: videoSeq,
        title: this.title,
        content: this.content,
        writer: this.loginUserName
      };

      this.$store.dispatch("registReview", Review);

      this.goVideoDetailView();
    },
    goVideoDetailView() {
      console.log(this.$route.params.videoId);
      this.$router.push("/videoDetail/" + this.$route.params.videoId);
    }
  }
};
</script>

<style></style>
