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
                <th></th>
                <th>번호</th>
                <th>제목</th>
                <th>랭크</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>작성시간</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(review, idx) in reviewList"
                :key="idx"
                @click="[clickReview(review), goDetailReview(review)]"
              >
                <td>
                  <br />
                  <i
                    v-if="LikeStatusList[idx] === true"
                    class="bi bi-heart-fill"
                  ></i>
                  <i v-else class="bi bi-heart"></i>
                </td>
                <td>
                  <br />
                  {{ review.reviewSeq }}
                </td>

                <td>
                  <br />
                  {{ review.title }}
                </td>
                <td>
                  <img
                    v-if="adminCheck(roleList[idx])"
                    src="@/assets/icons/admin.jpg"
                  />
                  <img
                    v-if="unrankedCheck(roleList[idx])"
                    src="@/assets/icons/unranked.webp"
                  />
                  <img
                    v-if="bronzeCheck(roleList[idx])"
                    src="@/assets/icons/bronze.webp"
                  />
                  <img
                    v-if="silverCheck(roleList[idx])"
                    src="@/assets/icons/silver.webp"
                  />
                  <img
                    v-if="goldCheck(roleList[idx])"
                    src="@/assets/icons/gold.webp"
                  />
                  <img
                    v-if="platinumCheck(roleList[idx])"
                    src="@/assets/icons/platinum.webp"
                  />
                  <img
                    v-if="diamondCheck(roleList[idx])"
                    src="@/assets/icons/diamond.webp"
                  />
                  <img
                    v-if="rubyCheck(roleList[idx])"
                    src="@/assets/icons/ruby.webp"
                  />
                </td>
                <td><br />{{ review.writer }}</td>
                <td><br />{{ review.viewCnt }}</td>
                <td><br />{{ review.createdDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="my-5"></div>
      <!-- 공간 추가 -->

      <div class="row mt-3 justify-content-end">
        <div class="col-md-auto">
          <button @click="goRegistReview" class="btn btn-primary">
            리뷰등록
          </button>
        </div>
        <div class="col-md-auto">
          <router-link to="/video" class="btn btn-secondary"
            >목록으로</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "reviewList",
  async created() {
    this.LikeStatusList = [];

    this.$store.dispatch("getReviewList", this.$route.params.videoId);

    setTimeout(() => {
      this.getRank();

      this.$store.dispatch("getReviewLikeList", this.loginUser.userSeq);

      this.getLikeStatusList();
    }, 200);
  },
  computed: {
    ...mapState([
      "reviewList",
      "review",
      "video",
      "reviewLikeList",
      "loginUser",
      "DBuserList"
    ])
  },
  data() {
    return {
      LikeStatusList: [],
      idx: 0,
      roleList: [],
      liststatus: false
    };
  },
  methods: {
    clickReview(review) {
      this.$store.dispatch("setReview", review);
    },
    goRegistReview() {
      this.$router.push("/reviewRegist/" + this.$route.params.videoId);
    },
    goDetailReview(review) {
      this.$router.push(
        "/reviewDetail/" + this.$route.params.videoId + "/" + review.reviewSeq
      );
    },
    getLikeStatusList() {
      for (let i = 0; i < this.reviewList.length; i++) {
        let flag = false;

        for (let j = 0; j < this.reviewLikeList.length; j++) {
          if (
            this.reviewList[i].reviewSeq === this.reviewLikeList[j].reviewSeq
          ) {
            flag = true;
            break;
          }
        }
        if (flag) {
          this.LikeStatusList.push(true);
        } else {
          this.LikeStatusList.push(false);
        }
      }
    },
    getRank() {
      this.roleList = [];
      console.log(this.reviewList);
      console.log(this.DBuserList);
      for (let i = 0; i < this.reviewList.length; i++) {
        for (let j = 0; j < this.DBuserList.length; j++) {
          if (this.reviewList[i].userSeq == this.DBuserList[j].userSeq) {
            console.log("!");
            this.roleList.push(this.DBuserList[j].role);
          }
        }
      }
      console.log(this.roleList);
    },
    adminCheck(role) {
      if (role === "ADMIN") return true;
      else return false;
    },
    unrankedCheck(role) {
      if (role === "UNRANKED") return true;
      else return false;
    },
    bronzeCheck(role) {
      if (role === "BRONZE") return true;
      else return false;
    },
    silverCheck(role) {
      if (role === "SILVER") return true;
      else return false;
    },
    goldCheck(role) {
      if (role === "GOLD") return true;
      else return false;
    },
    platinumCheck(role) {
      if (role === "PLATINUM") return true;
      else return false;
    },
    diamondCheck(role) {
      if (role === "DIAMOND") return true;
      else return false;
    },
    rubyCheck(role) {
      if (role === "RUBY") return true;
      else return false;
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
  width: 65px;
  height: 65px;
}
</style>
