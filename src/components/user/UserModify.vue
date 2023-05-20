<template>
  <div>
    <div class="container-fluid vh-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black rounded-25">
            <div class="card-body p-md-4">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5" order-lg="1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    정보 수정하기
                  </p>
                  <h4>{{ loginUser.userId }} 님의 정보를 수정합니다 </h4>
                  <div class="mx-1 mx-md-4">
                    <div class="form-group" id="passwordInput">
                      <label for="passwordInput">변경할 Password</label>
                      <input placeholder="new password" v-model="loginUser.password" type="password" class="form-control" />
                    </div>

                    <div class="form-group" id="nameInput">
                      <label for="nameInput">변경할 Name</label>
                      <input placeholder="new name" v-model="loginUser.name" type="text" class="form-control" />
                    </div>

                    <div class="form-group" id="nicknameInput">
                      <label for="nicknameInput">변경할 Nickname</label>
                      <input placeholder="new 별명" v-model="loginUser.nickname" type="text" class="form-control" />
                    </div>

                    <br /><br />
                    <div class="form-group" id="positionInput">
                      <label for="positionInput">변경할 Position </label>
                      <select v-model="loginUser.position">
                        <option disabled value="">Please select one</option>
                        <option>올라운더</option>
                        <option>공격수</option>
                        <option>미드필더</option>
                        <option>수비수</option>
                        <option>골키퍼</option>
                      </select>
                    </div>

                    <br />
                    <div class="form-group" id="phoneNumberInput">
                      <label for="phoneNumberInput">변경할 Phone No.</label>
                      <input placeholder="Tel 000-0000-0000" v-model="loginUser.phoneNumber" type="text" class="form-control" />
                    </div>
                    <br /><br />

                    <div class="row mx-4 mb-3 mb-lg-4">
                      <button @click="modifyUser" class="btn btn-primary btn-lg">
                        수정 완료
                      </button>
                    </div>
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
  name: "UserModify",
  computed: {
    ...mapState(["loginUser"])
  },
  methods: {
    modifyUser() {
      this.$store.dispatch("modifyUser", this.loginUser);
    },
  },
};
</script>

<style lang="scss" scoped></style>