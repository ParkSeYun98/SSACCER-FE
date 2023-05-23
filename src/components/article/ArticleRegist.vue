<template>
  <div>
    <h2 @click="test">모집 글 작성</h2>

    <div class="container-fluid vh-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div
            class="card text-black rounded-25"
            style="width: 1875px; height: 1000px"
          >
            <div class="card-body p-md-4">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-10" order-lg="1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div class="mx-1 mx-md-4">
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

                    <!-- place -->
                    <div class="box">
                      <label for="place" class="label">장소</label>
                      <select
                        v-model="place"
                        id="place"
                        class="form-control"
                        size="0"
                      >
                        <option disabled value="">select one</option>
                        <option
                          v-for="(location, idx) in locationList"
                          :key="idx"
                          :value="`${location}`"
                        >
                          {{ location.name }}
                        </option>
                      </select>
                    </div>

                    <!-- ㅇ머리ㅏㄴㅇ러니ㅏㅇ라ㅣㅁㄴㅇㄹ미낭 -->

                    <!-- <div
                      style="display: flex; margin-top: 20px"
                      class="form-group row"
                    >
                      <label class="col-lg-3 col-form-label form-control-label"
                        >포지션</label
                      >
                      <div class="col-lg-9">
                        <select
                          v-model="position"
                          id="position"
                          class="form-control"
                          size="0"
                        >
                          <option disabled value="">select one</option>
                          <option value="올라운더">올라운더</option>
                          <option value="공격수">공격수</option>
                          <option value="미드필더">미드필더</option>
                          <option value="수비수">수비수</option>
                          <option value="골키퍼">골키퍼</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group" id="phoneNumberInput">
                      <label for="phoneNumberInput">Phone No.</label>
                      <input
                        placeholder="Tel 000-0000-0000"
                        v-model="phoneNumber"
                        type="text"
                        class="form-control"
                      />
                    </div>

                    <br /><br />

                    <div class="row mx-4 mb-3 mb-lg-4">
                      <button @click="SignUp" class="btn btn-primary btn-lg">
                        등록
                      </button>
                    </div> -->
                  </div>
                </div>
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
    ...mapState(["locationList"])
  },
  data() {
    return {
      recruiteMax: 0,
      cost: 0,
      place: ""
    };
  },
  methods: {
    test() {
      console.log(this.locationList);
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
