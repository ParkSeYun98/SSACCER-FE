<template>
  <div class="container-sm">
    <br />

    <div>
      <div>
        <!-- 구글 맵 -->
        <gmap-map
          v-if="showMap"
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
        <button v-else @click="getXY" class="btn btn-primary">
          경기장 위치 보기
        </button>
      </div>

      <br />
      <hr />
      <br />

      <!-- 이 버튼 없애지 마셈 -->
      <button @click="tableCheck" class="btn btn-success">팀 테이블</button>
      <br />
      <div v-if="check">
        <h2 style="margin-top: 30px">매칭된 팀원 정보</h2>

        <br />

        <table
          id="example"
          class="table table-striped dt-responsive nowrap"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>랭크</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>포지션</th>
              <th>실력</th>
              <th>성별</th>
            </tr>
          </thead>
          <tbody v-if="listCheck">
            <tr v-for="(member, idx) in members" :key="idx">
              <td><br />{{ idx + 1 }}</td>
              <td>
                <img
                  class="img2"
                  v-if="adminCheck(member.role)"
                  src="@/assets/icons/admin.jpg"
                />
                <img
                  class="img2"
                  v-if="unrankedCheck(member.role)"
                  src="@/assets/icons/unranked.webp"
                />
                <img
                  class="img2"
                  v-if="bronzeCheck(member.role)"
                  src="@/assets/icons/bronze.webp"
                />
                <img
                  class="img2"
                  v-if="silverCheck(member.role)"
                  src="@/assets/icons/silver.webp"
                />
                <img
                  class="img2"
                  v-if="goldCheck(member.role)"
                  src="@/assets/icons/gold.webp"
                />
                <img
                  class="img2"
                  v-if="platinumCheck(member.role)"
                  src="@/assets/icons/platinum.webp"
                />
                <img
                  class="img2"
                  v-if="diamondCheck(member.role)"
                  src="@/assets/icons/diamond.webp"
                />
                <img
                  class="img2"
                  v-if="rubyCheck(member.role)"
                  src="@/assets/icons/ruby.webp"
                />
              </td>
              <td><br />{{ member.name }}</td>
              <td>
                <br /><span style="color: blue">{{ member.phoneNumber }}</span>
              </td>
              <td><br />{{ member.position }}</td>
              <td><br />{{ member.ability }}</td>
              <td><br />{{ member.gender }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <hr />
      <br />

      <div style="display: flex; justify-content: center; align-items: center">
        <img
          class="img1"
          src="@/assets/icons/대여가능.png"
          v-if="nowArticle.rental"
        />
        <img class="img1" src="@/assets/icons/대여불가.png" v-else />
        <img
          class="img1"
          src="@/assets/icons/샤워가능.png"
          v-if="nowArticle.shower"
        />
        <img class="img1" src="@/assets/icons/샤워불가.png" v-else />
        <img
          class="img1"
          src="@/assets/icons/주차가능.png"
          v-if="nowArticle.parking"
        />
        <img class="img1" src="@/assets/icons/주차불가.png" v-else />
        <img
          class="img1"
          src="@/assets/icons/음료가능.png"
          v-if="nowArticle.beverage"
        />
        <img class="img1" src="@/assets/icons/음료불가.png" v-else />
      </div>

      <div class="divBox">
        <div>
          <h4>
            {{ nowArticle.matchstartDate }} ~~ {{ nowArticle.matchendDate }}
          </h4>
        </div>
      </div>
      <div class="divBox">
        <h1>
          <strong style="color: green">{{ nowArticle.place }}</strong>
        </h1>
      </div>
      <div class="divBox">
        <div class="divsmallBox">
          <div><h5>비용</h5></div>
          <hr />
          <div>
            <h5>{{ nowArticle.cost }}</h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div><h5>상태</h5></div>
          <hr />
          <div>
            <h5 style="color: red">
              {{ nowArticle.status }}
            </h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div><h5>실력</h5></div>
          <hr />
          <div>
            <h5>{{ nowArticle.ability }}</h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div><h5>모집 인원</h5></div>
          <hr />
          <div style="display: flex; justify-content: center">
            <h5 style="color: blue">{{ nowArticle.recruiteCnt }}</h5>
            /
            <h5 style="color: violet">{{ nowArticle.recruiteMax }}</h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div>
            <h5>성별</h5>
          </div>
          <hr />
          <div>
            <h5>
              {{ nowArticle.gender }}
            </h5>
          </div>
        </div>
        <div class="divsmallBox">
          <div>
            <h5>조회수</h5>
          </div>
          <hr />
          <div>
            <h5>
              {{ nowArticle.viewCnt }}
            </h5>
          </div>
        </div>
      </div>

      <div class="btns">
        <button @click="goArticleListView" class="btn btn-secondary">
          이전으로
        </button>
        <div v-if="nowArticle.userSeq != loginUser.userSeq">
          <button v-if="teamCheck == 1" @click="cancel" class="btn btn-danger">
            신청 취소
          </button>
          <button v-else-if="teamCheck == 0" @click="join" class="btn btn-info">
            신청
          </button>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <h2>{{ nowArticle.title }}</h2>
      <br />
      <hr />
      <br />
      <h5>{{ nowArticle.content }}</h5>
      <br />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticleDetail",
  data() {
    return {
      teamCheck: -1,
      flag: false,

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
      listCheck: false,
      check: false
    };
  },
  created() {
    this.$store.dispatch("addArticleViewCnt", this.$route.params.articleSeq);
    this.$store.dispatch("getArticleList");
    this.$store.dispatch("getArticle", this.$route.params.articleSeq);
    this.checkTeamCheck();
    this.checkArticleStatus();
    this.$store.dispatch("getTeamMember", this.$route.params.articleSeq);

    //map
    this.$store.dispatch("getLocationList");
    // this.getXY();
    // console.log(this.nowArticle.place);
    this.memberInTeamCheck();
    this.joinCheck();

    console.log(this.nowArticle);
  },
  computed: {
    ...mapState([
      "nowArticle",
      "DBarticleList",
      "DBteamList",
      "loginUser",
      "locationList",
      "members"
    ])
  },
  methods: {
    join() {
      this.$store.dispatch("joinTeam", this.$route.params.articleSeq);
      this.$store.dispatch("getArticleList");
      this.addRecruiteCnt();
      this.$store.dispatch("getArticle", this.$route.params.articleSeq);
      this.checkTeamCheck();
    },
    goArticleListView() {
      this.$router.push("/articlelist");
    },
    cancel() {
      this.$store.dispatch("quitTeam", this.$route.params.articleSeq);
      this.$store.dispatch("getArticleList");
      this.minusRecruiteCnt();
      this.$store.dispatch("getArticle", this.$route.params.articleSeq);
      this.checkTeamCheck();
    },
    checkTeamCheck() {
      this.$store.dispatch("getTeamList");

      for (let i = 0; i < this.DBteamList.length; i++) {
        if (
          this.DBteamList[i].userSeq == this.loginUser.userSeq &&
          this.DBteamList[i].articleSeq == this.$route.params.articleSeq
        ) {
          this.teamCheck = 1;
          return;
        }
      }

      this.teamCheck = 0;
    },
    addRecruiteCnt() {
      for (let i = 0; i < this.DBarticleList.length; i++) {
        if (this.DBarticleList[i].articleSeq == this.$route.params.articleSeq) {
          if (
            this.DBarticleList[i].recruiteCnt ==
            this.DBarticleList[i].recruiteMax - 1
          )
            this.flag = true;

          this.$store.dispatch(
            "addArticleRecruiteCnt",
            this.$route.params.articleSeq
          );
        }
      }

      this.$store.dispatch("getArticleList");
      this.$store.dispatch("getArticle", this.$route.params.articleSeq);

      this.checkArticleStatus();
    },
    minusRecruiteCnt() {
      for (let i = 0; i < this.DBarticleList.length; i++) {
        if (this.DBarticleList[i].articleSeq == this.$route.params.articleSeq) {
          this.$store.dispatch(
            "minusArticleRecruiteCnt",
            this.$route.params.articleSeq
          );

          break;
        }
      }

      let updateInfo = {
        articleSeq: this.$route.params.articleSeq,
        status: "모집"
      };

      this.$store.dispatch("updateArticleStatus", updateInfo);
    },

    checkArticleStatus() {
      for (let i = 0; i < this.DBarticleList.length; i++) {
        if (this.DBarticleList[i].articleSeq == this.$route.params.articleSeq) {
          console.log(this.DBarticleList[i].recruiteCnt);
          if (this.flag) {
            let updateInfo = {
              articleSeq: this.$route.params.articleSeq,
              status: "마감"
            };

            console.log(updateInfo);

            this.$store.dispatch("updateArticleStatus", updateInfo);

            this.$store.dispatch("getArticleList");

            this.$store.dispatch("getArticle", this.$route.params.articleSeq);

            console.log(this.nowArticle.status);

            flag = false;
          }
        }
      }
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
      this.showMap = true;

      for (let i = 0; i < this.locationList.length; i++) {
        if (this.locationList[i].name === this.nowArticle.place) {
          const x = this.locationList[i].latitude;
          const y = this.locationList[i].longitude;
          // 여러 개의 마커를 추가하려면 아래의 주석을 해제하세요.
          this.locationMarkers.push({
            position: { lat: x, lng: y }
          });
          break;
        }
      }

      // 마커를 추가한 후에 중앙 위치를 설정하려면 아래의 주석을 해제하세요.
      if (this.locationMarkers.length > 0) {
        this.center = this.locationMarkers[0].position;
      }

      // 마커를 추가한 후에 중앙 위치를 설정하려면 모든 마커의 위치를 포함하는 영역으로 설정할 수도 있습니다.
      // if (this.locationMarkers.length > 0) {
      //   const bounds = new google.maps.LatLngBounds();
      //   for (const marker of this.locationMarkers) {
      //     bounds.extend(marker.position);
      //   }
      //   this.center = bounds.getCenter();
      // }
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
    },

    memberInTeamCheck() {
      this.$store.dispatch("getTeamList");

      for (let i = 0; i < this.DBteamList.length; i++) {
        if (
          this.DBteamList[i].articleSeq == this.$route.params.articleSeq &&
          this.DBteamList[i].userSeq == this.loginUser.userSeq
        ) {
          this.listCheck = true;
          return;
        }
      }

      this.listCheck = false;
    },
    tableCheck() {
      this.check = true;
      this.joinCheck();
    },
    joinCheck() {
      for (let i = 0; i < this.DBteamList.length; i++) {
        if (
          this.DBteamList[i].articleSeq == this.$route.params.articleSeq &&
          this.DBteamList[i].userSeq == this.loginUser.userSeq
        ) {
          return;
        }
      }

      if (this.nowArticle.userSeq != this.loginUser.userSeq) {
        return;
      }

      this.$store.dispatch("joinTeam", this.$route.params.articleSeq);
    }
  }
};
</script>

<style scoped>
.btns {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 200px;
}

.btn {
  margin: 3px;
}

.divBox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.divsmallBox {
  margin: 20px;
}
.container-sm {
  margin-top: 40px;
}

.img2 {
  width: 70px;
  height: 70px;
}
</style>
