<template>
  <div>
    <h2 style="margin: 50px">모집 글 작성</h2>

    <div class="container-sm vh-100">
      <gmap-map
        @click="handleMapClick"
        :zoom="15"
        :center="center"
        style="width: 100%; height: 400px"
      >
        <!-- 이건 시작 마커 -->
        <gmap-marker
          :key="index"
          :animation="ani"
          v-for="(m, index) in locationMarkers"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
      </gmap-map>
      <br />
      <div class="row justify-content-center h-100 w-100">
        <div class="col-lg-12 col-xl-11">
          <div
            class="card text-black rounded-25"
            style="width: auto; height: 1000px"
          >
            <div class="card-body p-md-4 w-100">
              <div
                class="row justify-content-center d-flex justify-content-center"
              >
                <div class="col-md-10 col-xl-10" order-lg="1">
                  <!-- <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p> -->

                  <div class="mx-1 mx-md-4">
                    <!-- title -->
                    <div
                      class="form-group d-flex justify-content-center align-items-center"
                      id="title"
                    >
                      <label for="title" style="margin: 10px; width: 500px"
                        >제목</label
                      >
                      <input
                        placeholder="제목을 입력하세요."
                        v-model="title"
                        type="text"
                        class="form-control"
                        style="margin: 10px; text-align: center"
                      />
                    </div>

                    <!-- content -->
                    <div
                      class="form-group d-flex justify-content-center align-items-center"
                      id="content"
                    >
                      <label for="content" style="margin: 10px; width: 500px"
                        >내용</label
                      >
                      <textarea
                        placeholder="내용을 입력하세요."
                        v-model="content"
                        class="form-control"
                        style="margin: 10px; text-align: center"
                      ></textarea>
                    </div>

                    <!-- place -->
                    <div class="box">
                      <label
                        for="place"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >장소</label
                      >
                      <select
                        @change="setPlace($event)"
                        :value="place"
                        id="place"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option
                          v-for="(location, idx) in locationList"
                          :key="idx"
                          :value="`${location.name}`"
                        >
                          {{ location.name }}
                        </option>
                      </select>
                      <button @click="getXY" class="btn btn-primary">
                        위치보기
                      </button>
                    </div>

                    <!-- matchstartDate -->
                    <div
                      class="form-group d-flex justify-content-center align-items-center"
                      id="matchstartDate"
                    >
                      <label
                        for="matchstartDate"
                        style="margin: 10px; width: 500px"
                        >게임 시작 시간</label
                      >
                      <input
                        v-model="matchstartDate"
                        type="datetime-local"
                        class="form-control"
                        style="margin: 10px; text-align: center"
                      />
                    </div>

                    <!-- matchendDate -->
                    <div
                      class="form-group d-flex justify-content-center align-items-center"
                      id="matchstartDate"
                    >
                      <label
                        for="matchstartDate"
                        style="margin: 10px; width: 500px"
                        >게임 종료 시간</label
                      >
                      <input
                        v-model="matchendDate"
                        type="datetime-local"
                        class="form-control"
                        style="margin: 10px; text-align: center"
                      />
                    </div>

                    <!-- recruiteMax -->
                    <div
                      class="form-group d-flex justify-content-center align-items-center"
                      id="idInput"
                    >
                      <label
                        for="recruiteMax"
                        style="margin: 10px; width: 500px"
                        >모집 인원 수 (본인 포함)</label
                      >
                      <input
                        v-model="recruiteMax"
                        type="number"
                        class="form-control"
                        style="margin: 10px; text-align: center"
                      />명
                    </div>

                    <!-- cost -->
                    <div
                      class="form-group d-flex justify-content-center align-items-center"
                      id="idInput"
                    >
                      <label for="cost" style="margin: 10px; width: 500px"
                        >개인별 지불 금액</label
                      >
                      <input
                        v-model="cost"
                        type="number"
                        class="form-control"
                        style="margin: 10px; text-align: center"
                      />원
                    </div>

                    <!-- ability -->
                    <div class="box">
                      <label
                        for="ability"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >수준</label
                      >
                      <select
                        v-model="ability"
                        id="ability"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="최하">최하</option>
                        <option value="하">하</option>
                        <option value="중하">중하</option>
                        <option value="중">중</option>
                        <option value="중상">중상</option>
                        <option value="상">상</option>
                        <option value="최상">최상</option>
                      </select>
                    </div>

                    <!-- status -->
                    <div class="box">
                      <label
                        for="gender"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >모집 성별</label
                      >
                      <select
                        v-model="gender"
                        id="gender"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="혼성">혼성</option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                      </select>
                    </div>

                    <!-- shower -->
                    <div class="box">
                      <label
                        for="shower"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >샤워 가능 여부</label
                      >
                      <select
                        v-model="shower"
                        id="shower"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="false">불가능</option>
                        <option value="true">가능</option>
                      </select>
                    </div>

                    <!-- parking -->
                    <div class="box">
                      <label
                        for="parking"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >주차 가능 여부</label
                      >
                      <select
                        v-model="parking"
                        id="parking"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="false">불가능</option>
                        <option value="true">가능</option>
                      </select>
                    </div>

                    <!-- beverage -->
                    <div class="box">
                      <label
                        for="beverage"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >음료 취식 여부</label
                      >
                      <select
                        v-model="beverage"
                        id="beverage"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="false">불가능</option>
                        <option value="true">가능</option>
                      </select>
                    </div>

                    <!-- rental -->
                    <div class="box">
                      <label
                        for="rental"
                        class="label"
                        style="margin: 10px; width: 500px"
                        >장비 대여 가능 여부</label
                      >
                      <select
                        v-model="rental"
                        id="rental"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="false">불가능</option>
                        <option value="true">가능</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="btns">
                <button @click="goArticleListView" class="btn btn-secondary">
                  이전으로
                </button>
                <button @click="registArticle" class="btn btn-primary">
                  등록
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticleRegist",
  created() {
    this.$store.dispatch("getLocationList");
  },
  computed: {
    ...mapState(["locationList", "loginUser", "DBarticleList", "articleIdx"])
  },
  data() {
    return {
      recruiteMax: 2,
      cost: 1,
      place: "",
      ability: "",
      status: "모집",
      gender: "",
      shower: "",
      parking: "",
      beverage: "",
      rental: "",
      createdDate: "",
      matchstartDate: "",
      matchendDate: "",
      title: "",
      content: "",

      //map
      address: "",
      ani: 1,
      // 얘가 시작 중앙 위치
      center: { lat: 36.36531910794662, lng: 127.32484817504883 },
      locationMarkers: [],
      // {
      //   position: {
      //     lat: 36.36531910794662,
      //     lng: 127.32484817504883,
      //   },
      // },
      // ],
      locPlaces: [],
      existingPlace: null,
      showMap: false,
      temp: ""
    };
  },

  methods: {
    goArticleListView() {
      this.$router.push("/articlelist");
    },
    setPlace(event) {
      this.place = event.target.value;
      this.temp = event.target.value;
    },
    registArticle() {
      let now = new Date();

      let year = now.getFullYear();
      let month = ("0" + (now.getMonth() + 1)).slice(-2);
      let day = ("0" + now.getDate()).slice(-2);
      let hours = ("0" + now.getHours()).slice(-2);
      let minutes = ("0" + now.getMinutes()).slice(-2);
      let seconds = ("0" + now.getSeconds()).slice(-2);

      let newcreatedDate =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;

      let newmatchstartDate = this.matchstartDate.replace("T", " ");
      let newmatchendDate = this.matchendDate.replace("T", " ");

      let article = {
        userSeq: this.loginUser.userSeq,
        recruiteMax: this.recruiteMax,
        recruiteCnt: 1,
        cost: this.cost,
        place: this.place,
        ability: this.ability,
        status: "모집",
        gender: this.gender,
        shower: this.shower,
        parking: this.parking,
        beverage: this.beverage,
        rental: this.rental,
        createdDate: newcreatedDate,
        matchstartDate: newmatchstartDate,
        matchendDate: newmatchendDate,
        title: this.title,
        content: this.content
      };

      this.$store.dispatch("registArticle", article);
      this.$store.dispatch("joinTeam", this.articleIdx);
    },
    //map
    handleMapClick(event) {
      const clickedPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      // 클릭한 위치의 상세 정보를 가져와서 처리하는 로직을 추가하세요
      // 예를 들어, 상세 정보를 어딘가에 표시하거나 다른 동작을 수행할 수 있습니다.
      // 이 예제에서는 콘솔에 클릭한 위치의 위도와 경도를 출력합니다.
      console.log("Clicked Position:", clickedPosition);
    },
    getXY() {
      for (let i = 0; i < this.locationList.length; i++) {
        if (this.locationList[i].name === this.temp) {
          const x = this.locationList[i].latitude;
          const y = this.locationList[i].longitude;
          // 여러 개의 마커를 추가하려면 아래의 주석을 해제하세요.

          let position = {
            lat: x,
            lng: y
          };

          if (this.locationMarkers.length > 0) {
            this.locationMarkers.splice(0, 1);
            this.locationMarkers.push({
              position: { lat: x, lng: y }
            });
          } else {
            this.locationMarkers.push({
              position: { lat: x, lng: y }
            });
          }

          this.center = this.locationMarkers[0].position;
          break;
        }
      }
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

.btn {
  margin: 3px;
}

.btns {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 200px;
}
</style>
