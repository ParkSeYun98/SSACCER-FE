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
              style="width: 100% height:100%"
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
              style="width: 100% height:100%"
              href="https://img.sbs.co.kr/newimg/news/20221207/201728389_1280.jpg"
              alt="..."
            />

            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <div class="container">
            <div class="carousel-caption">
              <h1>축구 소식</h1>
              <p>실시간 주요 뉴스를 확인하세요.</p>
              <p>
                <router-link to="/news" class="btn btn-lg btn-primary"
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
              style="width: 100% height:100%"
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

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <image
              href="https://static.thenounproject.com/png/5734458-200.png"
              width="100%"
              height="100%"
              alt="..."
            />
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <h2 class="fw-normal">Match</h2>
          <p>우리 동네 주변 팀 매칭 게시판</p>
          <p>
            <a class="btn btn-secondary" @click="goArticleView"
              >View details &raquo;</a
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <image
              href="https://cdn0.iconfinder.com/data/icons/interface-line-4/48/news_text_article-256.png"
              width="100%"
              height="100%"
              alt="..."
            />
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <h2 class="fw-normal">News</h2>
          <p>국내, 해외 축구 소식 보기</p>
          <p><a class="btn btn-secondary" href="/">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <image
              href="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Youtube-Outline-256.png"
              width="100%"
              height="100%"
              alt="..."
            />
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <h2 class="fw-normal">Youtube</h2>
          <p>축구 영상 시청</p>
          <p>
            <a class="btn btn-secondary" @click="goVideoView"
              >View details &raquo;</a
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
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

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}

/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* rtl:end:ignore */

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0;
  /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
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
