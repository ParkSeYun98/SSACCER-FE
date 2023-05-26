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
      <button @click="clickFirstTap" value="K리그" class="btn btn-dark">
        K리그
      </button>
      <button @click="clickFirstTap" value="풋살" class="btn btn-dark">
        풋살
      </button>
      <button @click="clickFirstTap" value="축구 게임" class="btn btn-dark">
        축구 게임
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
        <button @click="clickSecondTap" value="일본" class="btn btn-primary">
          일본
        </button>
        <button @click="clickSecondTap" value="스페인" class="btn btn-danger">
          스페인
        </button>
        <button @click="clickSecondTap" value="독일" class="btn btn-dark">
          독일
        </button>
        <button @click="clickSecondTap" value="잉글랜드" class="btn">
          잉글랜드
        </button>
        <button @click="clickSecondTap" value="브라질" class="btn btn-warning">
          브라질
        </button>
      </div>

      <div v-if="firstTap === '해외 축구'">
        <button @click="clickSecondTap" value="맨유" class="btn btn-danger">
          맨유
        </button>
        <button @click="clickSecondTap" value="맨시티" class="btn btn-info">
          맨시티
        </button>
        <button @click="clickSecondTap" value="레알" class="btn">레알</button>
        <button @click="clickSecondTap" value="첼시" class="btn btn-primary">
          첼시
        </button>
        <button @click="clickSecondTap" value="토트넘" class="btn">
          토트넘
        </button>
        <button @click="clickSecondTap" value="뮌헨" class="btn btn-danger">
          뮌헨
        </button>
        <button
          @click="clickSecondTap"
          value="챔피언스리그"
          class="btn btn-primary"
        >
          챔피언스리그
        </button>
        <button @click="clickSecondTap" value="프리미어리그" class="btn">
          프리미어리그
        </button>
        <button @click="clickSecondTap" value="프리메라리가" class="btn">
          프리메라리가
        </button>
        <button @click="clickSecondTap" value="분데스리가" class="btn">
          분데스리가
        </button>
        <button @click="clickSecondTap" value="세리에A" class="btn">
          세리에A
        </button>
        <button @click="clickSecondTap" value="리그앙" class="btn">
          리그앙
        </button>
      </div>

      <div v-if="firstTap === '축구 강의'">
        <button @click="clickSecondTap" value="개인기" class="btn btn-dark">
          개인기
        </button>
        <button @click="clickSecondTap" value="슈팅" class="btn btn-dark">
          슈팅
        </button>
        <button @click="clickSecondTap" value="패스" class="btn btn-dark">
          패스
        </button>
        <button @click="clickSecondTap" value="수비" class="btn btn-dark">
          수비
        </button>
      </div>
      <div v-if="firstTap === 'K리그'">
        <button @click="clickSecondTap" value="대전FC" class="btn btn-dark">
          대전FC
        </button>
        <button @click="clickSecondTap" value="서울FC" class="btn btn-dark">
          서울FC
        </button>
      </div>
      <div v-if="firstTap === '풋살'">
        <button @click="clickSecondTap" value="규칙" class="btn btn-dark">
          규칙
        </button>
        <button @click="clickSecondTap" value="잘하는법" class="btn btn-dark">
          꿀팁
        </button>
      </div>
      <div v-if="firstTap === '축구 게임'">
        <button
          @click="clickSecondTap"
          value="피파온라인4"
          class="btn btn-dark"
        >
          피파온라인4
        </button>
        <button @click="clickSecondTap" value="FIFA23" class="btn btn-dark">
          피파23
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
  margin: 50px;
}
</style>
