<template>
  <div>
    <div class="container">
      <hr />
      <div class="row">
        <div class="col-md-12">
          <table
            id="example"
            class="table table-striped dt-responsive nowrap"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th>상태</th>
                <th>장소</th>
                <th>제목</th>
                <th>모집인원</th>
                <th>능력</th>
                <th>성별</th>
                <th>시작시간</th>
                <th>종료시간</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(article, idx) in DBarticleList"
                :key="idx"
                @click="goDetailArticle(article)"
              >
                <!-- <td>
                  <i
                    v-if="LikeStatusList[idx] === true"
                    class="bi bi-heart-fill"
                  ></i>
                  <i v-else class="bi bi-heart"></i>
                </td> -->
                <td v-if="article.status === '모집'" style="width: 150px">
                  <img src="@/assets/icons/모집중.png" />
                </td>
                <td v-else-if="article.status === '마감'" style="width: 150px">
                  <img src="@/assets/icons/마감.png" />
                </td>

                <td>
                  <br />
                  {{ article.place }}
                </td>
                <td><br />{{ article.title }}</td>
                <td>
                  <br />{{ article.recruiteCnt }} / {{ article.recruiteMax }}
                </td>
                <td><br />{{ article.ability }}</td>
                <td><br />{{ article.gender }}</td>
                <td><br />{{ article.matchstartDate }}</td>
                <td><br />{{ article.name }}</td>
                <td><br />{{ article.viewCnt }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="my-5"></div>
      <!-- 공간 추가 -->

      <div class="row mt-3 justify-content-end">
        <div class="col-md-auto">
          <button @click="goRegistArticleView" class="btn btn-primary">
            모집 글 등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticleList",
  created() {
    this.$store.dispatch("getArticleList");
  },
  computed: {
    ...mapState(["DBarticleList", "nowArticle"])
  },
  methods: {
    goRegistArticleView() {
      this.$router.push("/articleregist");
    },
    goDetailArticle(article) {
      console.log(article.articleSeq);
      this.$router.push("/articledetail/" + article.articleSeq);
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.bi {
  color: red;
}

img {
  width: 50%;
  height: 50%;
}
</style>
