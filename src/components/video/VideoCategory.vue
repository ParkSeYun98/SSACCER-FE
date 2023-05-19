<template>
  <div>
    <div class="first-buttons">
      <button @click="clickFirstTap" value="국가 대표" class="btn btn-dark">
        국가 대표
      </button>
      <button @click="clickFirstTap" value="해외 축구" class="btn btn-dark">
        해외 축구
      </button>
      <button @click="clickFirstTap" value="축구 강의" class="btn btn-dark">
        축구 강의
      </button>
    </div>

    <div class="second-buttons">
      <div v-if="firstTap === '국가 대표'">
        <button @click="clickSecondTap" value="대한민국" class="btn btn-danger">
          대한민국
        </button>
        <button @click="clickSecondTap" value="아르헨티나" class="btn btn-info">
          아르헨티나
        </button>
      </div>

      <div v-if="firstTap === '해외 축구'">
        <button @click="clickSecondTap" value="맨시티" class="btn btn-info">
          맨시티
        </button>
        <button @click="clickSecondTap" value="첼시" class="btn btn-primary">
          첼시
        </button>
        <button @click="clickSecondTap" value="토트넘" class="btn">
          토트넘
        </button>
      </div>

      <div v-if="firstTap === '축구 강의'">
        <button @click="clickSecondTap" value="개인기" class="btn btn-dark">
          개인기
        </button>
        <button @click="clickSecondTap" value="슈팅" class="btn btn-dark">
          슈팅
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCategory",
  data() {
    return {
      firstTap: 0,
      secondTap: 0
    };
  },
  created() {
    this.firstTap = 0;
    this.secondTap = 0;
  },
  methods: {
    clickFirstTap(event) {
      this.firstTap = event.target.value;
    },
    clickSecondTap(event) {
      this.secondTap = event.target.value;
      this.$store.dispatch("searchYoutube", this.secondTap + "축구");
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 1px;
}
</style>
