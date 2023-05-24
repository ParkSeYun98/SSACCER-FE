<template>
  <div>
    <div class="box">
      <div>
        <label for="league" style="margin: 10px">리그</label>
        <select v-model="league" id="league" class="form-control" size="0">
          <option disabled value="">select one</option>
          <option value="PL">잉글랜드 프리미어리그</option>
          <option value="PD">스페인 프리메라리가</option>
          <option value="BL1">독일 분데스리가</option>
          <option value="SA">이탈리아 세리에 A</option>
          <option value="FL1">프랑스 리그앙 1</option>
        </select>
      </div>
      <div v-if="league != ''">
        <label for="round" style="margin: 10px">매치 라운드</label>
        <input
          class="form-control"
          type="number"
          v-model="round"
          min="1"
          max="37"
          placeholder="1~37"
        />
      </div>
      <button @click="getInfo" class="btn btn-primary" style="margin: 10px">
        검색
      </button>
      <button
        @click="goNewsMainView"
        class="btn btn-secondary"
        style="margin: 10px"
      >
        이전으로
      </button>
    </div>

    <br />
    <hr />
    <br />

    <div v-if="round != 0" class="bigbox">
      <div>
        <img :src="matchInfo.competition.emblem" />
        <div>
          <h2>{{ matchInfo.competition.name }}</h2>
        </div>
        <div>
          <h4>MatchDay : {{ matchInfo.filters.matchday }}</h4>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div v-for="(match, idx) in matchInfo.matches" :key="idx">
        <div class="HomeAway">
          <h6 class="Home">Home</h6>
          <h6 class="Away">Away</h6>
        </div>
        <span class="HomeAwayBox">
          <img :src="match.homeTeam.crest" class="teamLogo" />
          <h4 class="homeTeam">
            {{ match.homeTeam.name }}
          </h4>

          <h4 class="awayTeam">
            {{ match.awayTeam.name }}
          </h4>
          <img :src="match.awayTeam.crest" class="teamLogo" />
        </span>
        <br />
        <div>
          <h2>
            {{ match.score.fullTime.home }} : {{ match.score.fullTime.away }}
          </h2>
        </div>

        <div>
          <h6>심판 : {{ match.referees[0].name }}</h6>
        </div>

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
  name: "",
  created() {},
  computed: {
    ...mapState(["matchInfo"])
  },
  data() {
    return {
      league: "",
      round: 0
    };
  },
  methods: {
    getInfo() {
      console.log(this.league);
      console.log(this.round);

      let info = {
        league: this.league,
        round: this.round
      };

      this.$store.dispatch("getMatchInfo", info);
      // this.$router.go(0);
      console.log(this.matchInfo);
    },
    goNewsMainView() {
      this.$router.push("/news/main");
    }
  }
};
</script>

<style scoped>
.box {
  margin: 10px;
}

.label {
  width: 100px;
}

.HomeAway {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.Home {
  margin-right: 300px;
}

.Away {
  margin-left: 300px;
}

.HomeAwayBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.teamLogo {
  width: 70px;
  height: 70px;
}

.homeTeam {
  margin-right: 200px;
  margin-left: 50px;
}
.awayTeam {
  margin-left: 200px;
  margin-right: 50px;
}
</style>
