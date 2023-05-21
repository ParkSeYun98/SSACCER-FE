<template>
  <div>
    <label for="img">이미지</label>
    <input
      @change="uploadImage()"
      type="file"
      id="img"
      name="img"
      class="form-control"
      ref="img"
      accept="image/*"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserUploaodImage",
  computed: {
    ...mapState(["loginUser"])
  },
  data() {
    return {
      img: ""
    };
  },
  methods: {
    uploadImage() {
      this.img = this.$refs.img.files[0];
      console.log(this.img);
      console.log(this.loginUser.userSeq);

      let box = {
        img: this.img,
        userSeq: this.loginUser.userSeq
      };

      this.$store.dispatch("uploadImage", box);

      this.$router.push("/myPage/" + this.loginUser.userSeq);
    }
  }
};
</script>

<style></style>
