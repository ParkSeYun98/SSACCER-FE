<template>
  <div class="container-sm">
    <!-- 구글 맵 -->
    <gmap-map
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
    <button @click="getXY"></button>
  </div>
</template>

<script>
import { mapState } from "vuex";

// 얘가 마커로 들어가고
// var marks = { lat: 36.36531910794662, lng: 127.32484817504883 };
export default {
  name: "AddGoogleMap",
  computed: {
    ...mapState(["locationList"]),
  },
  //locationList 받아오고
  created() {
    this.$store.dispatch("getLocationList");
  },
  data() {
    return {
      address: "",
      ani: 1,
      // 얘가 시작 중앙 위치
      center: { lat: 36.36531910794662, lng: 127.32484817504883 },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
    };
  },
  methods: {
    handleMapClick(event) {
      const clickedPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      // 클릭한 위치의 상세 정보를 가져와서 처리하는 로직을 추가하세요
      // 예를 들어, 상세 정보를 어딘가에 표시하거나 다른 동작을 수행할 수 있습니다.
      // 이 예제에서는 콘솔에 클릭한 위치의 위도와 경도를 출력합니다.
      console.log("Clicked Position:", clickedPosition);
    },
    getXY() {
      for (let i = 0; i < this.locationList.length; i++) {
        const x = this.locationList[i].x;
        const y = this.locationList[i].y;
        const stadium = this.locationList[i].name;

        // 여러 개의 마커를 추가하려면 아래의 주석을 해제하세요.
        this.locationMarkers.push({
          position: { lat: x, lng: y, stadium: stadium },
        });
      }

      // 마커를 추가한 후에 중앙 위치를 설정하려면 아래의 주석을 해제하세요.
      // if (this.locationMarkers.length > 0) {
      //   this.center = this.locationMarkers[0].position;
      // }

      // 마커를 추가한 후에 중앙 위치를 설정하려면 모든 마커의 위치를 포함하는 영역으로 설정할 수도 있습니다.
      // if (this.locationMarkers.length > 0) {
      //   const bounds = new google.maps.LatLngBounds();
      //   for (const marker of this.locationMarkers) {
      //     bounds.extend(marker.position);
      //   }
      //   this.center = bounds.getCenter();
      // }
    },
  },
};
</script>

<style scoped>
.container-sm {
  margin-top: 40px;
}
</style>
