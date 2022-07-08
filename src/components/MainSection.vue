<template>
  <!-- <main class="main_section -bgCloud">
  </main> -->
  <div class="main_section-container">
    <div class="main_section-wrapper" v-if="cityName !== ''">
      <h2 class="main_section-temp">{{ temp }}°&nbsp;</h2>
      <div class="main-section-content">
        <p class="main_section-content_location">
          {{ cityName }} <img :src="icon" alt="" />
        </p>
        <p class="main_section-content_date">
          <span class="main_section-content_date-hour"
            >{{ new Date().toLocaleTimeString() }}&nbsp;</span
          >
          -
          <span class="main_section-content_date-day"
            >&nbsp;{{
              new Date().toLocaleDateString("en-US", { weekday: "long" })
            }}, {{ new Date().toLocaleDateString() }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    temp: {
      type: Number,
      default: null,
    },
    cityName: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/*.main_section {
  @apply flex flex-col justify-end w-9/12 bg-no-repeat bg-cover bg-center;
}

.-bgDefault {
  background-image: url("../src/assets/summer_bg.png");
}
.-bgSun {
  background-image: url("../src/assets/summer_bg.png");
}
.-bgRain {
  background-image: url("../src/assets/rain_bg.png");
}
.-bgSnow {
  background-image: url("../src/assets/snow_bg.png");
}
.-bgCloud {
  background-image: url("../src/assets/cloud_bg.png");
}
*/

.main_section-container {
  @apply flex pl-20 pb-20;
}
.main_section-wrapper {
  @apply flex;
}
.main_section-temp {
  @apply text-7xl text-white;
}

.main_section-content_location {
  @apply text-4xl text-white font-medium;
}

.main_section-content_date {
  @apply text-lg text-white;
}

.main_section-content_location {
  @apply flex items-center;
}
.main_section-content_location img {
  @apply w-9;
}

@media (min-width: 769px) and (max-width: 1280px) {
  .main_section {
    @apply bg-bottom;
  }

  .main_section-container {
    @apply pl-5 pb-10;
  }
}
@media screen and (max-width: 768px) {
  .main_section {
    @apply w-full flex flex-col justify-end bg-bottom;
  }
  .main_section-container {
    @apply flex items-end pl-10 pb-4 h-80;
  }

  .main_section-temp {
    @apply text-6xl text-white;
  }

  .main_section-content_location {
    @apply text-2xl text-white font-medium;
  }

  .main_section-content_location img {
    @apply w-6;
  }

  .main_section-content_date {
    @apply text-base text-white;
  }
}

@media screen and (max-width: 480px) {
  .main_section-temp {
    @apply text-5xl text-white;
  }

  .main_section-content_location {
    @apply text-lg text-white font-medium;
  }

  .main_section-content_location img {
    @apply w-6;
  }

  .main_section-content_date {
    @apply text-sm text-white;
  }
}
</style>