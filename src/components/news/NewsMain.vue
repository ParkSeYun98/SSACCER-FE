<template>
  <div
    style="display: flex; align-items: center; justify-content: space-around"
  >
    <div
      style="
        background-image: url('https://mblogthumb-phinf.pstatic.net/20140626_197/imun_14_1403779388835OUkXh_JPEG/53612a23fcb63c21f7c48bfd48d688af222928.jpg?type=w2');
        background-size: cover;
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <button @click="goMatchInfo" class="btn btn-danger">
        이번 시즌 경기 결과 보기
      </button>
    </div>
    <div
      style="
        background-image: url('https://e1.pxfuel.com/desktop-wallpaper/996/103/desktop-wallpaper-football-players-players.jpg');
        background-size: cover;
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <button @click="goTopScorerInTeam" class="btn btn-info">
        리그별 최고 득점자
      </button>
    </div>
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
