<template>
  <main>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <image
              style="width: 100% height: 100%"
              href="http://fieldgreen.kr/assets/img/page-title-area/about2.png"
              alt="..."
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>우리동네 풋살팀 찾기</h1>
              <p>
                TEAM MATCHING 게시판을 통해 풋살팀을 구하고 경기 일정을
                잡으세요.
              </p>
              <p>
                <router-link to="/articlelist" class="btn btn-lg btn-primary"
                  >바로가기</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <image
              style="width: 100%; height: 100%"
              href="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt335e339331c27ef6/60dac2c5454f930f33f1c363/61f64ec07a9ad571a76fe097e7d9a73ba4975821.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="..."
            />

            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <div class="container">
            <div class="carousel-caption">
              <h1>축구 소식</h1>
              <p>해외의 주요 축구 뉴스와 결과들을 확인하세요.</p>
              <p>
                <router-link to="/news/main" class="btn btn-lg btn-primary"
                  >바로가기</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <image
              style="width: 100%; height: 100%"
              href="https://cdn.imweb.me/upload/S202002108cdceef7fc868/c064f36de94ff.jpg"
              alt="..."
            />

            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Youtube 시청</h1>
              <p>키워드별 축구 영상을 시청하세요</p>
              <p>
                <router-link to="/video" class="btn btn-lg btn-primary"
                  >바로가기</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Marketing messaging and featurettes
================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div
      class="bottom"
      style="
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: black;
        font-size: large;
        font-weight: bold;
      "
    >
      <div
        class="col-lg-4"
        style="
          background-image: url('https://cdn.pixabay.com/photo/2016/09/24/08/41/hands-1691221_1280.png');
          background-size: cover;
        "
      >
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        ></svg>
        <h2 style="opacity: 0" class="fw-normal">Match</h2>
        <p style="opacity: 0">우리 동네 주변 팀 매칭 게시판</p>
        <p>
          <a class="btn btn-warning" @click="goArticleView"
            >매칭 하러가기 &raquo;</a
          >
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div
        class="col-lg-4"
        style="
          background-image: url('https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_1280.png');
          background-size: cover;
        "
      >
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        ></svg>
        <h2 class="fw-normal" style="opacity: 0">News</h2>
        <p style="opacity: 0">국내, 해외 축구 소식 보기</p>
        <p>
          <a class="btn btn-warning" @click="goNewsView"
            >해축 소식 보러가기 &raquo;</a
          >
        </p>
      </div>
      <div
        class="col-lg-4"
        style="
          background-image: url('https://cdn.pixabay.com/photo/2017/06/23/02/35/youtube-2433301_1280.png');
          background-size: cover;
        "
      >
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        ></svg>
        <h2 class="fw-normal" style="opacity: 0">Youtube</h2>
        <p style="opacity: 0">축구 영상 시청</p>
        <p>
          <a class="btn btn-warning" @click="goVideoView"
            >축구 영상 보러가기 &raquo;</a
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainNav",
  methods: {
    goVideoView() {
      this.$router.push("/video");
    },
    goArticleView() {
      this.$router.push("/articlelist");
    },
    goNewsView() {
      this.$router.push("/news/main");
    }
  }
};
</script>

<style scoped>
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: rgb(var(--bs-tertiary-color-rgb));
}

.carousel {
  margin-bottom: 4rem;
}

.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

.carousel-item {
  height: 32rem;
}
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

.featurette-divider {
  margin: 5rem 0;
}
.featurette-heading {
  letter-spacing: -0.05rem;
}

@media (min-width: 40em) {
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
