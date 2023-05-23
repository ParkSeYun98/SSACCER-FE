<template>
  <div class="container-sm">
    <br />
    <br />

    <h1><strong>날씨</strong></h1>

    <br />

    <h1>기온 예보</h1>

    <br />
    <br />

    <div class="box">
      <label for="" class="label">지역 검색</label>
      <input
        type="text"
        v-model.trim="region"
        placeholder="검색"
        class="form-control"
      />
    </div>

    <br />

    <fieldset>
      <label
        style="
          width: 150px;
          min-height: 1.5rem;
          padding-left: 1.5em;
          margin-bottom: 0.125rem;
        "
        v-for="(RegionCode, idx) in partRegionCodeList"
        :key="idx"
        @click="checkRadioBox1($event)"
      >
        <input
          class="form-check-input"
          type="radio"
          name="RegionCode"
          id="RegionCode"
          :value="RegionCode.code"
        />
        <span class="form-check-label" for="RegionCode">
          {{ RegionCode.region }}
        </span>
      </label>
    </fieldset>

    <br />
    <br />

    <div v-if="longTemperature.model.hasOwnProperty('result')">
      <!-- <div v-if="longTemperature.model.result.length > 0"> -->
      <h2>
        <span style="color: red">{{ place }}</span> 지역 기온 예보
      </h2>

      <div class="wrapper">
        <div class="table">
          <div class="row header" style="background-color: #2980b9">
            <div
              class="cell"
              style="width: 20%; font-weight: bolder; font-size: x-large"
            >
              *
            </div>
            <div
              class="cell"
              style="width: 20%; font-weight: bolder; font-size: x-large"
            >
              예상 최저 기온
            </div>
            <div
              class="cell"
              style="width: 20%; font-weight: bolder; font-size: x-large"
            >
              예상 최고 기온
            </div>
          </div>

          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              3일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin3 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax3 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              4일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin4 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax4 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              5일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin5 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax5 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              6일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin6 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax6 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              7일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin7 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax7 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              8일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin8 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax8 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              9일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin9 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax9 }}도
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 20%" data-title="몇일 후">
              10일 후
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최저 기온">
              {{ longTemperature.model.result[0].taMin10 }}도
            </div>
            <div class="cell" style="width: 20%" data-title="예상 최고 기온">
              {{ longTemperature.model.result[0].taMax10 }}도
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h1>날씨 예보</h1>

    <div class="box">
      <label for="" class="label">지역 검색</label>
      <input
        type="text"
        v-model.trim="bigRegion"
        placeholder="검색"
        class="form-control"
      />
    </div>

    <br />

    <fieldset>
      <label
        style="
          width: 150px;
          min-height: 1.5rem;
          padding-left: 1.5em;
          margin-bottom: 0.125rem;
        "
        v-for="(bigRegionCode, idx) in partBigRegionCodeList"
        :key="idx"
        @click="checkRadioBox2($event)"
      >
        <input
          class="form-check-input"
          type="radio"
          name="bigRegionCode"
          id="bigRegionCode"
          :value="bigRegionCode.bigregioncodeSeq"
        />
        <span class="form-check-label" for="bigRegionCode">
          {{ bigRegionCode.bigRegion }}
        </span>
      </label>
    </fieldset>

    <br />
    <br />

    <div v-if="longWeather.model.hasOwnProperty('result')">
      <!-- <div v-if="longWeather.model.result != null"> -->
      <h2>
        <span style="color: red">{{ place2 }}</span> 지역 날씨 예보
      </h2>

      <div class="wrapper" style="max-width: 1500px">
        <div style="" class="table">
          <div class="row header" style="background-color: #27ae60">
            <div
              class="cell"
              style="width: 10%; font-weight: bolder; font-size: x-large"
            >
              *
            </div>
            <div
              class="cell"
              style="width: 15%; font-weight: bolder; font-size: x-large"
            >
              오전 강수 확률
            </div>
            <div
              class="cell"
              style="width: 15%; font-weight: bolder; font-size: x-large"
            >
              오후 강수 확률
            </div>
            <div
              class="cell"
              style="width: 15%; font-weight: bolder; font-size: x-large"
            >
              강수 확률
            </div>
            <div
              class="cell"
              style="width: 15%; font-weight: bolder; font-size: x-large"
            >
              오전 날씨 예보
            </div>
            <div
              class="cell"
              style="width: 15%; font-weight: bolder; font-size: x-large"
            >
              오후 날씨 예보
            </div>
            <div
              class="cell"
              style="width: 15%; font-weight: bolder; font-size: x-large"
            >
              날씨 예보
            </div>
          </div>

          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              3일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              {{ longWeather.model.result[0].rnSt3Am }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              {{ longWeather.model.result[0].rnSt3Pm }}%
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">-</div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              {{ longWeather.model.result[0].wf3Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              {{ longWeather.model.result[0].wf3Pm }}
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">-</div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              4일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              {{ longWeather.model.result[0].rnSt4Am }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              {{ longWeather.model.result[0].rnSt4Pm }}%
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">-</div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              {{ longWeather.model.result[0].wf4Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              {{ longWeather.model.result[0].wf4Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">-</div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              5일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              {{ longWeather.model.result[0].rnSt5Am }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              {{ longWeather.model.result[0].rnSt5Pm }}%
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">-</div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              {{ longWeather.model.result[0].wf5Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              {{ longWeather.model.result[0].wf5Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">-</div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              6일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              {{ longWeather.model.result[0].rnSt6Am }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              {{ longWeather.model.result[0].rnSt6Pm }}%
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">-</div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              {{ longWeather.model.result[0].wf6Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              {{ longWeather.model.result[0].wf6Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">-</div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              7일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              {{ longWeather.model.result[0].rnSt7Am }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              {{ longWeather.model.result[0].rnSt7Pm }}%
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">-</div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              {{ longWeather.model.result[0].wf7Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              {{ longWeather.model.result[0].wf7Am }}
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">-</div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              8일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">
              {{ longWeather.model.result[0].rnSt8 }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">
              {{ longWeather.model.result[0].wf8 }}
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              9일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">
              {{ longWeather.model.result[0].rnSt9 }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">
              {{ longWeather.model.result[0].wf9 }}
            </div>
          </div>
          <div class="row">
            <div class="cell" style="width: 10%" data-title="몇일 후">
              10일 후
            </div>
            <div class="cell" style="width: 15%" data-title="오전 강수 확률">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="오후 강수 확률">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="강수 확률">
              {{ longWeather.model.result[0].rnSt10 }}%
            </div>
            <div class="cell" style="width: 15%" data-title="오전 날씨 예보">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="오후 날씨 예보">
              -
            </div>
            <div class="cell" style="width: 15%" data-title="날씨 예보">
              {{ longWeather.model.result[0].wf10 }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />

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

    <br />
    <br />

    <div v-if="stadium != ''">
      <h2>
        <span style="color: green">{{ pf }} </span>
        <span style="color: blue">{{ ps }} </span>
        <span style="color: red">{{ stadium }}</span
        >의 현재 상세 날씨
      </h2>

      <div class="wrapper">
        <div class="table">
          <div class="row header">
            <div
              class="cell"
              style="width: 50%; font-weight: bolder; font-size: x-large"
            >
              날씨 정보
            </div>
            <div
              class="cell"
              style="width: 50%; font-weight: bolder; font-size: x-large"
            >
              실황 값
            </div>
          </div>

          <div class="row" v-for="(result, idx) in shortResult" :key="idx">
            <div class="cell" style="width: 50%" data-title="날씨 정보">
              {{ result.category }}
            </div>
            <div class="cell" style="width: 50%" data-title="실황 값">
              {{ result.obsrValue }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <div class="box">
      <label for="" class="label">지역 검색</label>
      <input
        type="text"
        v-model.trim="region"
        placeholder="검색"
        class="form-control"
      />
    </div>
    <br />

    <div class="box" style="justify-content: center">
      <select
        @change="getCode"
        v-model="selectedRegion"
        id="selectedRegion"
        class="form-control"
        size="0"
      >
        <option disabled value="">select one</option>
        <option
          v-for="(RegionCode, idx) in partRegionCodeList"
          :key="idx"
          :value="`${RegionCode}`"
        >
          {{ RegionCode.region }}
        </option>
      </select>
    </div>

    <fieldset>
      <label
        style="
          width: 150px;
          min-height: 1.5rem;
          padding-left: 1.5em;
          margin-bottom: 0.125rem;
        "
        v-for="(RegionCode, idx) in partRegionCodeList"
        :key="idx"
        @click="checkRadioBox($event)"
      >
        <input
          class="form-check-input"
          type="radio"
          name="RegionCode"
          id="RegionCode"
          :value="RegionCode.code"
        />
        <span class="form-check-label" for="RegionCode">
          {{ RegionCode.region }}
        </span>
      </label>
    </fieldset>
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

    this.$store.dispatch("getRegionCodeList");
    this.$store.dispatch("getBigRegionCodeList");

    this.getBaseDateAndTime();

    this.getDefault2();
    this.getDefault3();
  },
  computed: {
    ...mapState([
      "locationList",
      "baseDateAndTime",
      "weatherInfo",
      "allRegionCodeList",
      "partRegionCodeList",
      "allBigRegionCodeList",
      "partBigRegionCodeList",
      "longTemperature",
      "longWeather",
    ]),
  },
  data() {
    return {
      pfList: [],
      pf: "",
      psList: [],
      ps: "",
      nx: 0,
      ny: 0,
      stadium: "",
      region: "",
      bigRegion: "",
      selectedRegion: "",
      selectedCode: "",
      shortResult: [],
      selectedBigRegion: "",
      selectedBigCode: "",
      shortResult: [],
      place: "",
      place2: "",
    };
  },
  watch: {
    region(newRegion) {
      console.log(newRegion);

      this.$store.dispatch("searchPartRegionCodeList", newRegion);
    },
    bigRegion(newRegion) {
      console.log(newRegion);

      this.$store.dispatch("searchPartBigRegionCodeList", newRegion);
    },
  },
  methods: {
    // 코드 얻기
    getCode() {
      for (let i = 0; i < this.partRegionCodeList; i++) {
        if (this.selectedRegion === this.partRegionCodeList[i].region) {
          this.selectedCode = this.partRegionCodeList[i].code;
        }
      }
    },

    getBigCode() {
      for (let i = 0; i < this.partRegionCodeList; i++) {
        if (this.selectedBigRegion === this.partBigRegionCodeList[i].region) {
          this.selectedBigCode = this.partBigRegionCodeList[i].code;
        }
      }
    },

    // 라디오박스 클릭 이벤트
    checkRadioBox1(event) {
      // this.longTemperature = [];
      // this.longWeather = [];

      this.place = "";

      for (let i = 0; i < this.partRegionCodeList.length; i++) {
        if (this.partRegionCodeList[i].code === event.target.value) {
          this.place = this.partRegionCodeList[i].region;

          break;
        }
      }

      let today = new Date();

      let formattedDate =
        today.getFullYear() +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate()) +
        "0600";

      let info = {
        regId: event.target.value,
        tmFc: formattedDate,
      };

      if (info.regId != null) {
        this.$store.dispatch("getLongTemperature", info);
      }
    },
    getDefault2() {
      this.place = "서울";

      let today = new Date();

      let formattedDate =
        today.getFullYear() +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate()) +
        "0600";

      let info = {
        regId: "11B10101",
        tmFc: formattedDate,
      };

      if (info.regId != null) {
        this.$store.dispatch("getLongTemperature", info);
      }
    },

    // 라디오박스 클릭 이벤트 2
    checkRadioBox2(event) {
      // this.longTemperature = [];
      // this.longWeather = [];
      this.place2 = "";

      let infoRegId = "";

      for (let i = 0; i < this.partBigRegionCodeList.length; i++) {
        if (
          this.partBigRegionCodeList[i].bigregioncodeSeq == event.target.value
        ) {
          this.place2 = this.partBigRegionCodeList[i].bigRegion;
          infoRegId = this.partBigRegionCodeList[i].bigCode;

          break;
        }
      }

      let today = new Date();

      let formattedDate =
        today.getFullYear() +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate()) +
        "0600";

      let info = {
        regId: infoRegId,
        tmFc: formattedDate,
      };

      console.log(info);

      if (info.regId != null) {
        this.$store.dispatch("getLongWeather", info);
      }

      console.log(this.longTemperature);
      console.log(this.longWeather);
      console.log(this.partRegionCodeList);
      console.log(this.partBigRegionCodeList);
    },

    getDefault3() {
      this.place2 = "서울";

      let today = new Date();

      let formattedDate =
        today.getFullYear() +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate()) +
        "0600";

      let info = {
        regId: "11B00000",
        tmFc: formattedDate,
      };

      if (info.regId != null) {
        this.$store.dispatch("getLongWeather", info);
      }
    },

    // 단기 예보
    // PF값 얻기
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
    // PS값 얻기
    getPS() {
      this.psList = [];

      for (let i = 0; i < this.locationList.length; i++) {
        if (this.locationList[i].pf === this.pf) {
          this.psList.push(this.locationList[i].ps);
        }
      }
    },
    // 좌표값 얻기
    getXY() {
      this.nx = 0;
      this.ny = 0;

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

      this.getWeather();
    },

    // 단기 예보 날씨 얻기
    getWeather() {
      let weatherDTO = {
        baseDate: this.baseDateAndTime[0],
        baseTime: this.baseDateAndTime[1] + "00",
        nx: this.nx,
        ny: this.ny,
      };

      this.$store.dispatch("getWeather", weatherDTO);

      this.shortResult = [];

      for (let i = 0; i < this.weatherInfo.model.result.length; i++) {
        if (this.weatherInfo.model.result[i].category === "T1H") {
          this.shortResult.push({
            category: "기온",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "RN1") {
          this.shortResult.push({
            category: "1시간 강수량",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "UUU") {
          this.shortResult.push({
            category: "동서바람성분",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "VVV") {
          this.shortResult.push({
            category: "남북바람성분",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "REH") {
          this.shortResult.push({
            category: "습도",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "PTY") {
          this.shortResult.push({
            category: "강수형태",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "VEC") {
          this.shortResult.push({
            category: "풍향",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "WSD") {
          this.shortResult.push({
            category: "풍속",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        }
      }
    },

    getDefault1() {
      let weatherDTO = {
        baseDate: this.baseDateAndTime[0],
        baseTime: this.baseDateAndTime[1] + "00",
        nx: 60,
        ny: 127,
      };

      this.$store.dispatch("getWeather", weatherDTO);

      this.shortResult = [];

      for (let i = 0; i < this.weatherInfo.model.result.length; i++) {
        if (this.weatherInfo.model.result[i].category === "T1H") {
          this.shortResult.push({
            category: "기온",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "RN1") {
          this.shortResult.push({
            category: "1시간 강수량",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "UUU") {
          this.shortResult.push({
            category: "동서바람성분",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "VVV") {
          this.shortResult.push({
            category: "남북바람성분",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "REH") {
          this.shortResult.push({
            category: "습도",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "PTY") {
          this.shortResult.push({
            category: "강수형태",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "VEC") {
          this.shortResult.push({
            category: "풍향",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        } else if (this.weatherInfo.model.result[i].category === "WSD") {
          this.shortResult.push({
            category: "풍속",
            obsrValue: this.weatherInfo.model.result[i].obsrValue,
          });
        }
      }
    },

    // 중기 예보 날씨 정보 얻기
    getLongWeather() {
      console.log("!");
    },

    // 라디오박스 클릭 이벤트
    checkRadioBox(event) {
      let today = new Date();

      let formattedDate =
        today.getFullYear() +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate()) +
        "0600";

      let info = {
        regId: event.target.value,
        tmFc: formattedDate,
      };

      // this.$store.dispatch("getLongTemperatureWeather", info);
    },
    // 기본 날짜 및 기본 시간 얻기
    getBaseDateAndTime() {
      this.$store.dispatch("getBaseDateAndTime");
    },
  },
};
</script>

<style scoped>
.container-sm {
  margin-top: 20px;
}

.box {
  display: flex;
  margin: 10px;
  align-items: center;
}

.label {
  width: 100px;
}

label {
  vertical-align: middle;
}

[type="radio"] {
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  transition: border 0.5s ease-in-out;
}

[type="radio"]:checked {
  border: 0.4em solid tomato;
}

[type="radio"]:focus-visible {
  outline-offset: max(2px, 0.1em);
  outline: max(2px, 0.1em) dotted tomato;
}

[type="radio"]:hover {
  box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
  cursor: pointer;
}

[type="radio"]:disabled {
  background-color: lightgray;
  box-shadow: none;
  opacity: 0.7;
  cursor: not-allowed;
}

[type="radio"]:disabled + span {
  opacity: 0.7;
  cursor: not-allowed;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #3b3b3b;
  -webkit-font-smoothing: antialiased;
  font-smooth: antialiased;
  background: #2b2b2b;
}
@media screen and (max-width: 580px) {
  body {
    font-size: 16px;
    line-height: 22px;
  }
}

.wrapper {
  margin: 0 auto;
  padding: 40px;
  max-width: 800px;
}

.table {
  margin: 0 0 40px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}
@media screen and (max-width: 580px) {
  .table {
    display: block;
  }
}

.row {
  display: table-row;
  background: #f6f6f6;
}
.row:nth-of-type(odd) {
  background: #e9e9e9;
}
.row.header {
  font-weight: 900;
  color: #ffffff;
  background: #ea6153;
}
.row.green {
  background: #27ae60;
}
.row.blue {
  background: #2980b9;
}
@media screen and (max-width: 580px) {
  .row {
    padding: 14px 0 7px;
    display: block;
  }
  .row.header {
    padding: 0;
    height: 6px;
  }
  .row.header .cell {
    display: none;
  }
  .row .cell {
    margin-bottom: 10px;
  }
  .row .cell:before {
    margin-bottom: 3px;
    content: attr(data-title);
    min-width: 98px;
    font-size: 10px;
    line-height: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #969696;
    display: block;
  }
}

.cell {
  padding: 6px 12px;
  display: table-cell;
}
@media screen and (max-width: 580px) {
  .cell {
    padding: 2px 16px;
    display: block;
  }
}
</style>
