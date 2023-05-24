<template>
  <div class="btns">
    <button @click="goMatchInfo" class="btn btn-success">
      이번 시즌 경기 결과 보기
    </button>
    <button @click="goTopScorerInTeam" class="btn btn-primary">
      리그별 최고 득점자
    </button>
  </div>
</template>

<script>
export default {
  name: "NewsMain",
  methods: {
    goMatchInfo() {
      this.$router.push("/news/matchInfo");
    },
    goTopScorerInTeam() {
      this.$router.push("/news/topscorerinteam");
    }
  }
};
</script>

<style scoped>
.btns {
  margin: 100px;
}

.btn {
  margin: 10px;
}
</style>
