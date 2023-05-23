<template>
  <div>
    <h2 style="margin: 50px">모집 글 작성</h2>

    <div class="container-fluid vh-100">
      <div class="row justify-content-center h-100 w-100">
        <div class="col-lg-12 col-xl-11">
          <div
            class="card text-black rounded-25"
            style="width: 1875px; height: 1000px"
          >
            <div class="card-body p-md-4 w-100">
              <div
                class="row justify-content-center d-flex justify-content-center"
              >
                <div class="col-md-10 col-lg-6 col-xl-10" order-lg="1">
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
                        placeholder="6"
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
                        placeholder="10000"
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
                        >음료</label
                      >
                      <select
                        v-model="beverage"
                        id="beverage"
                        class="form-control"
                        size="0"
                        style="margin: 10px; text-align: center"
                      >
                        <option disabled value="">select one</option>
                        <option value="false">가져올 필요 X</option>
                        <option value="true">각자 챙기기</option>
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
    ...mapState(["locationList", "loginUser"])
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
      content: ""
    };
  },
  methods: {
    goArticleListView() {
      this.$router.push("/articlelist");
    },
    setPlace(event) {
      console.log(event.target);
      this.place = event.target.value;
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
