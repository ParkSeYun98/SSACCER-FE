<template>
  <div>
    <h2>날씨</h2>

    <div class="box">
      <label for="pf" class="label">시/군</label>
      <select
        @change="getPS"
        v-model="pf"
        id="pf"
        class="form-control"
        size="0"
      >
        <option disabled value="">select one</option>
        <option v-for="(item, idx) in pfList" :key="idx" :value="`${item}`">
          {{ item }}
        </option>
      </select>
    </div>

    <br />

    <div v-if="pf != ''" class="box">
      <label for="ps" class="label">구</label>
      <select
        @change="getXY"
        v-model="ps"
        id="ps"
        class="form-control"
        size="0"
      >
        <option disabled value="">select one</option>
        <option v-for="(item, idx) in psList" :key="idx" :value="`${item}`">
          {{ item }}
        </option>
      </select>
    </div>

    <div v-if="stadium != ''">{{ stadium }}의 날씨!</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Weather",
  created() {
    this.getBaseDateAndTime();
    this.$store.dispatch("getLocationList");
    this.getPF();
  },
  computed: {
    ...mapState(["locationList", "baseDateAndTime", "weatherInfo"])
  },
  data() {
    return {
      pfList: [],
      pf: "",
      psList: [],
      ps: "",
      nx: 0,
      ny: 0,
      stadium: ""
    };
  },
  methods: {
    getPF() {
      outer: for (let i = 0; i < this.locationList.length; i++) {
        for (let j = 0; j < this.pfList.length; j++) {
          if (this.locationList[i].pf === this.pfList[j]) {
            continue outer;
          }
        }

        this.pfList.push(this.locationList[i].pf);
      }
    },

    getPS() {
      for (let i = 0; i < this.locationList.length; i++) {
        if (this.locationList[i].pf === this.pf) {
          this.psList.push(this.locationList[i].ps);
        }
      }
    },
    getXY() {
      console.log(this.pfList);
      console.log(this.psList);
      console.log(this.ps);

      for (let i = 0; i < this.locationList.length; i++) {
        if (
          this.locationList[i].pf === this.pf &&
          this.locationList[i].ps === this.ps
        ) {
          this.nx = this.locationList[i].x;
          this.ny = this.locationList[i].y;
          this.stadium = this.locationList[i].name;

          break;
        }
      }

      console.log(this.nx);
      console.log(this.ny);

      this.getWeather();
    },
    getWeather() {
      let weatherDTO = {
        baseDate: this.baseDateAndTime[0],
        baseTime: this.baseDateAndTime[1] + "00",
        nx: this.nx,
        ny: this.ny
      };

      this.$store.dispatch("getWeather", weatherDTO);

      console.log(this.weatherInfo);
    },
    getBaseDateAndTime() {
      this.$store.dispatch("getBaseDateAndTime");
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  margin: 10px;
  align-items: center;
}

.label {
  width: 100px;
}
</style>
