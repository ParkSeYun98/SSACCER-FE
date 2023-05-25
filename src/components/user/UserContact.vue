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
                    Contact Us
                  </p>

                  <div class="mx-1 mx-md-4">
                    <div class="form-group" id="form_title">
                      <label for="form_title">title</label>
                      <input
                        placeholder="form_title"
                        v-model="form_title"
                        type="text"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group" id="form_content">
                      <label for="form_content">content</label>
                      <textarea
                        placeholder="form_content"
                        v-model="form_content"
                        class="form-control"
                      >
                      </textarea>
                    </div>

                    <br /><br />

                    <div class="row mx-4 mb-3 mb-lg-4">
                      <button
                        @click="sendRequestEmail"
                        class="btn btn-primary btn-lg"
                      >
                        전송
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center"
                  order-lg="2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
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
import emailjs from "emailjs-com";

export default {
  name: "UserContact",
  data() {
    return {
      message: "",
      form_title: "",
      form_content: ""
    };
  },
  computed: {
    ...mapState(["loginUser"])
  },
  methods: {
    sendRequestEmail() {
      const payload = {
        from_name: this.loginUser.name,
        to_name: "ParkSeYun",
        message: this.message,
        form_title: this.form_title,
        form_content: this.form_content,
        form_time: new Date()
      };
      emailjs
        .send(
          "service_11oukd9",
          "template_c70yc0l",
          payload,
          "V5rrFCyCQPNpeIfLU"
        )
        .then(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );

      swal({
        title: "전송 완료",
        text: "문의 내용이 관리자에게 전송되었습니다!",
        icon: "success",
        button: false
      }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style></style>
