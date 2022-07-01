<template>
  <div class="side-bg">
    <div class="sideContainer">
      <div class="searchContainer">
        <SearchInput />
        <SearchButtonVue />
      </div>
      <div class="weatherInfo">
        <WeatherInfo />
        <span class="separator"></span>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import SearchButtonVue from "./button/SearchButton.vue";
import SearchInput from "./input/SearchInput.vue";
import WeatherInfo from "./WeatherInfo.vue";
import Footer from "./footer/Footer.vue";
export default {
  components: {
    SearchButtonVue,
    SearchInput,
    WeatherInfo,
    Footer,
  },
};
</script>

<style scoped>
.sideContainer {
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(25px);

  /*padding-bottom: 180px;*/

  @apply flex flex-col w-full pt-32;
}

.side-bg {
  @apply bg-bgGreen;
}

.separator {
  content: "_";
  margin-top: 107px;

  @apply mr-10 ml-12 bg-white w-10/12 h-px block;
}

.searchContainer {
  @apply ml-14;
}

@media (min-width: 769px) and (max-width: 1280px) {
  .sideContainer {
    padding-bottom: 0px;
    @apply pt-20;
  }

  .separator {
    content: "_";
    @apply mt-14 mr-10 ml-10 bg-white w-10/12 h-px block;
  }
}

@media screen and (max-width: 768px) {
  .sideContainer {
    @apply flex flex-col items-center justify-center pt-0 pb-28 w-full;
  }

  .searchContainer {
    @apply pt-10 m-0;
  }

  .weatherInfo {
    @apply w-10/12 self-center;
  }

  .separator {
    content: "_";
    @apply mx-auto;
  }
}

@media screen and (max-width: 480px) {
  .sideContainer {
    @apply flex flex-col items-center justify-center pt-0 pb-10 w-full;
  }

  .separator {
    content: "_";
    @apply mt-12 mx-auto;
  }
}
</style>