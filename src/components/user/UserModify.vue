<template>
  <div class="content py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <span class="anchor" id="formUserEdit"></span>
          <!-- form user info -->
          <div class="card card-outline-secondary">
            <div class="card-header">
              <h3 class="mb-0 fw-bold">회원 정보 수정</h3>
            </div>
            <div class="card-body">
              <div class="form" role="form" autocomplete="off">
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >ID</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.userId"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >이름</label
                  >
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      type="text"
                      v-model="loginUser.name"
                      placeholder="new name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >닉네임</label
                  >
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      type="text"
                      v-model="loginUser.nickname"
                      placeholder="new nickname"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >등급</label
                  >
                  <div class="col-lg-9">
                    <input
                      readonly
                      class="form-control"
                      type="text"
                      v-model="loginUser.role"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >포지션</label
                  >
                  <div class="col-lg-9">
                    <select
                      v-model="loginUser.position"
                      id="position"
                      class="form-control"
                      size="0"
                    >
                      <option disabled value="">
                        현재 : {{ loginUser.position }}
                      </option>
                      <option value="올라운더">올라운더</option>
                      <option value="공격수">공격수</option>
                      <option value="미드필더">미드필더</option>
                      <option value="수비수">수비수</option>
                      <option value="골키퍼">골키퍼</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >Phone No.</label
                  >
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      type="text"
                      v-model="loginUser.phoneNumber"
                      placeholder="Tel 000-0000-0000"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"
                    >Password</label
                  >
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      type="password"
                      v-model="loginUser.password"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    class="col-lg-3 col-form-label form-control-label"
                  ></label>
                  <div class="col-lg-6">
                    <input
                      @click="modifyUser"
                      type="button"
                      class="btn btn-primary"
                      value="수정 완료"
                    />
                    <input
                      @click="cancel"
                      type="reset"
                      class="btn btn-secondary"
                      value="취소"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /form user info -->
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
    ...mapState(["loginUser"]),
  },
  methods: {
    modifyUser() {
      this.$store.dispatch("modifyUser", this.loginUser);
      // this.$store.dispatch("getUserList");
      this.$router.push("/myPage/" + this.loginUser.userSeq);
    },
    cancel() {
      this.$router.push("/myPage/" + this.loginUser.userSeq);
    },
  },
};
</script>

<style lang="scss" scoped></style>
