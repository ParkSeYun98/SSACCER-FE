<template>
  <div>
    <h2>모집 글 상세</h2>

    <br />
    <hr />
    <br />

    <div>
      <div>가능하면 지도</div>

      <br />
      <hr />
      <br />

      <div class="btns">
        <button @click="goArticleListView" class="btn btn-secondary">
          이전으로
        </button>
        <button v-if="teamCheck == 1" @click="cancel" class="btn btn-danger">
          신청 취소
        </button>
        <button v-else-if="teamCheck == 0" @click="join" class="btn btn-info">
          신청
        </button>
      </div>

      <div class="divBox">
        <div>
          <h4>
            {{ nowArticle.matchstartDate }} ~~ {{ nowArticle.matchendDate }}
          </h4>
        </div>
      </div>
      <div class="divBox">
        <h1>
          <strong style="color: green">{{ nowArticle.place }}</strong>
        </h1>
      </div>
      <div class="divBox">
        <div class="divsmallBox">
          <div><h5>비용</h5></div>
          <hr />
          <div>
            <h5>{{ nowArticle.cost }}</h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div><h5>상태</h5></div>
          <hr />
          <div>
            <h5 style="color: red">
              {{ nowArticle.status }}
            </h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div><h5>실력</h5></div>
          <hr />
          <div>
            <h5>{{ nowArticle.ability }}</h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div><h5>모집 인원</h5></div>
          <hr />
          <div>
            <h5>{{ nowArticle.recruiteMax }}</h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div>
            <h5>성별</h5>
          </div>
          <hr />
          <div>
            <h5>
              {{ nowArticle.gender }}
            </h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div>
            <h5>조회수</h5>
          </div>
          <hr />
          <div>
            <h5>
              {{ nowArticle.viewCnt }}
            </h5>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <h2>{{ nowArticle.title }}</h2>
      <br />
      <hr />
      <br />
      <h5>{{ nowArticle.content }}</h5>
      <br />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticleDetail",
  data() {
    return {
      teamCheck: -1
    };
  },
  created() {
    this.$store.dispatch("addArticleViewCnt", this.$route.params.articleSeq);
    this.$store.dispatch("getArticleList");
    this.$store.dispatch("getArticle", this.$route.params.articleSeq);
    this.teamCheck = -1;
    this.checkTeamCheck();
  },
  computed: {
    ...mapState(["nowArticle", "DBarticleList", "DBteamList", "loginUser"])
  },
  methods: {
    join() {
      this.$store.dispatch("joinTeam", this.$route.params.articleSeq);
    },
    goArticleListView() {
      this.$router.push("/articlelist");
    },
    cancel() {
      console.log("Cancel");
    },
    checkTeamCheck() {
      this.$store.dispatch("getTeamList");

      for (let i = 0; i < this.DBteamList.length; i++) {
        if (
          this.DBteamList[i].userSeq == this.loginUser.userSeq &&
          this.DBteamList[i].articleSeq == this.$route.params.articleSeq
        ) {
          this.teamCheck = 1;
          return;
        }
      }

      this.teamCheck = 0;
    }
  }
};
</script>

<style scoped>
.btns {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 20px;
}

.btn {
  margin: 3px;
}

.divBox {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 5px;
}

.divsmallBox {
  margin: 20px;
}
</style>
