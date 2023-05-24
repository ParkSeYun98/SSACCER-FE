<template>
  <div>
    <br /><br />

    <div>
      <div>가능하면 지도</div>

      <br />
      <hr />
      <br />

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
          <div style="display: flex; justify-content: center">
            <h5 style="color: blue">{{ nowArticle.recruiteCnt }}</h5>
            /
            <h5 style="color: green">{{ nowArticle.recruiteMax }}</h5>
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

      <div class="btns">
        <button @click="goArticleListView" class="btn btn-secondary">
          이전으로
        </button>
        <div v-if="nowArticle.userSeq != loginUser.userSeq">
          <button v-if="teamCheck == 1" @click="cancel" class="btn btn-danger">
            신청 취소
          </button>
          <button v-else-if="teamCheck == 0" @click="join" class="btn btn-info">
            신청
          </button>
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
      teamCheck: -1,
      flag: false
    };
  },
  created() {
    this.$store.dispatch("addArticleViewCnt", this.$route.params.articleSeq);
    this.$store.dispatch("getArticleList");
    this.$store.dispatch("getArticle", this.$route.params.articleSeq);
    this.checkTeamCheck();
    this.checkArticleStatus();
  },
  computed: {
    ...mapState(["nowArticle", "DBarticleList", "DBteamList", "loginUser"])
  },
  methods: {
    join() {
      this.$store.dispatch("joinTeam", this.$route.params.articleSeq);
      this.$store.dispatch("getArticleList");
      this.addRecruiteCnt();
      this.$store.dispatch("getArticle", this.$route.params.articleSeq);
      this.checkTeamCheck();
    },
    goArticleListView() {
      this.$router.push("/articlelist");
    },
    cancel() {
      this.$store.dispatch("quitTeam", this.$route.params.articleSeq);
      this.$store.dispatch("getArticleList");
      this.minusRecruiteCnt();
      this.$store.dispatch("getArticle", this.$route.params.articleSeq);
      this.checkTeamCheck();
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
    },
    addRecruiteCnt() {
      for (let i = 0; i < this.DBarticleList.length; i++) {
        if (this.DBarticleList[i].articleSeq == this.$route.params.articleSeq) {
          if (
            this.DBarticleList[i].recruiteCnt ==
            this.DBarticleList[i].recruiteMax - 1
          )
            this.flag = true;

          this.$store.dispatch(
            "addArticleRecruiteCnt",
            this.$route.params.articleSeq
          );
        }
      }

      this.$store.dispatch("getArticleList");
      this.$store.dispatch("getArticle", this.$route.params.articleSeq);

      this.checkArticleStatus();
    },
    minusRecruiteCnt() {
      for (let i = 0; i < this.DBarticleList.length; i++) {
        if (this.DBarticleList[i].articleSeq == this.$route.params.articleSeq) {
          this.$store.dispatch(
            "minusArticleRecruiteCnt",
            this.$route.params.articleSeq
          );

          break;
        }
      }

      let updateInfo = {
        articleSeq: this.$route.params.articleSeq,
        status: "모집"
      };

      this.$store.dispatch("updateArticleStatus", updateInfo);
    },

    checkArticleStatus() {
      for (let i = 0; i < this.DBarticleList.length; i++) {
        if (this.DBarticleList[i].articleSeq == this.$route.params.articleSeq) {
          console.log(this.DBarticleList[i].recruiteCnt);
          if (this.flag) {
            let updateInfo = {
              articleSeq: this.$route.params.articleSeq,
              status: "마감"
            };

            console.log(updateInfo);

            this.$store.dispatch("updateArticleStatus", updateInfo);

            this.$store.dispatch("getArticleList");

            this.$store.dispatch("getArticle", this.$route.params.articleSeq);

            console.log(this.nowArticle.status);

            flag = false;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.btns {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 200px;
}

.btn {
  margin: 3px;
}

.divBox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.divsmallBox {
  margin: 20px;
}
</style>
