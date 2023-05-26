<template>
  <div class="container-sm">
    <div class="box" style="justify-content: center">
      <div>
        <label for="league" style="margin: 30px">리그</label>
        <select
          v-model="league"
          @click="loadingOn"
          id="league"
          class="form-control"
          size="0"
        >
          <option disabled value="">select one</option>
          <option value="PL">잉글랜드 프리미어리그</option>
          <option value="PD">스페인 프리메라리가</option>
          <option value="BL1">독일 분데스리가</option>
          <option value="SA">이탈리아 세리에 A</option>
          <option value="FL1">프랑스 리그앙 1</option>
        </select>
      </div>

      <div style="margin-top: 50px; margin-bottom: 50px">
        <button
          @click="goNewsMainView"
          class="btn btn-secondary"
          style="margin: 10px"
        >
          이전으로
        </button>
        <button
          @click="getTopScorer"
          class="btn btn-primary"
          style="margin: 10px"
        >
          검색
        </button>
      </div>
    </div>

    <div
      v-if="loading"
      class="spinner-border text-danger"
      role="status"
      style="margin-bottom: 50px"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <br />
    <hr />
    <br />

    <div v-if="league != ''" class="bigbox">
      <div>
        <img :src="topScorer.competition.emblem" style="margin-bottom: 20px" />
        <div>
          <h2>{{ topScorer.competition.name }} 최고 득점자</h2>
          <br />
        </div>
        <div>
          <h4>
            Season : {{ topScorer.filters.season }} ~
            {{ Number(topScorer.filters.season) + 1 }}
          </h4>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div v-for="(scorer, idx) in topScorer.scorers" :key="idx">
        <h1>{{ idx + 1 }}위</h1>

        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <img :src="scorer.team.crest" class="teamLogo" />
          <h2 style="color: blueviolet; margin-top: 5px; margin-left: 10px">
            {{ scorer.team.name }}
          </h2>
        </div>

        <br />
        <br />

        <h1 style="color: red">{{ scorer.player.name }}</h1>
        <h5 style="margin-top: 10px">
          성적 :
          <span style="color: blue"
            >{{ scorer.playedMatches }}경기 {{ scorer.goals }}골
            {{ scorer.assists }}어시스트</span
          >
        </h5>

        <br />

        <h5>국적 : {{ scorer.player.nationality }}</h5>

        <br />
        <hr />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TopScorerInTeam",
  computed: {
    ...mapState(["topScorer"])
  },
  data() {
    return {
      league: "",
      loading: false
    };
  },
  methods: {
    getTopScorer() {
      setTimeout(() => {
        this.$store.dispatch("getTopScorer", this.league);
        this.loading = false;
      }, 5000);
    },
    goNewsMainView() {
      this.$router.push("/news/main");
    },
    loadingOn() {
      this.loading = true;
    }
  }
};
</script>

<style scoped>
.teamLogo {
  width: 65px;
  height: 65px;
}
</style>
