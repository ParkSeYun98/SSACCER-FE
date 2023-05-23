<template>
  <div class="container">
    <div class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 text-body-secondary"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 text-body-secondary"
            >Features</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 text-body-secondary"
            >FAQs</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 text-body-secondary"
            >About</router-link
          >
        </li>
      </ul>
      <p class="text-center text-body-secondary">&copy; SSAFY 박세윤, 김현중</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style></style>
