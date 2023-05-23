<template>
  <div>
    <h2>모집 페이지</h2>

    <button @click="gotoRegistArticleView" class="btn btn-primary">
      모집 글 작성
    </button>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  methods: {
    gotoRegistArticleView() {
      this.$router.push("/articleregist");
    }
  }
};
</script>

<style></style>
