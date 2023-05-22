<template>
  <div class="container-sm">
    <hr />
    <div class="my-5"></div>
    <!-- 공간 추가 -->

    <div class="form-group">
      <label for="title">리뷰 제목</label>
      <input type="text" id="title" v-model="title" class="form-control" />
    </div>

    <div class="my-3"></div>
    <!-- 공간 추가 -->

    <div class="form-group">
      <label for="content">리뷰 내용</label>
      <textarea id="content" v-model="content" class="form-control"></textarea>
    </div>

    <div class="row mt-3 justify-content-end">
      <div class="col-md-auto">
        <button @click="registReview" class="btn btn-primary">등록하기</button>
      </div>
      <div class="col-md-auto">
        <button @click="goVideoDetailView" class="btn btn-secondary">
          취소하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ReviewRegist",
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

      console.log(videoSeq);
      console.log(this.loginUser);

      const Review = {
        userSeq: this.loginUser.userSeq,
        videoSeq: videoSeq,
        title: this.title,
        content: this.content,
        writer: this.loginUser.name
      };

      this.$store.dispatch("registReview", Review);

      this.goVideoDetailView();

      this.beforeUpdateRole();
    },
    goVideoDetailView() {
      this.$router.push("/videoDetail/" + this.$route.params.videoId);
    },
    beforeUpdateRole() {
      this.$store.dispatch("beforeUpdateRole");
    }
  }
};
</script>

<style></style>
