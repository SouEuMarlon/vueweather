<template>
  <div class="info-content">
    <h3 class="info-title">Weather Details</h3>
    <div class="info-cloudy">
      <p class="cloudy-title">Cloudy</p>
      <p class="cloudy-value">Clear</p>
      <!-- <p class="cloudy-value">{{ cloudy }}</p> -->
    </div>
    <div class="info-humidity">
      <p class="humidity-title">Humidity</p>
      <p class="humidity-value">62%</p>
    </div>
    <div class="info-wind">
      <p class="wind-title">Wind</p>
      <p class="wind-value">2.57m/s</p>
    </div>
    <span class="separator"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        cloudy: {
          type: String,
          default: "",
        },
        humidity: {
          type: String,
          default: "",
        },
        wind: {
          type: String,
          default: "",
        },
      },
    };
  },
};
</script>

<style scoped>
.info-content {
  margin-top: 104px;

  @apply ml-10 px-5 w-5/6;
}
.info-title {
  @apply font-bold text-white text-xl mb-11 underline;
}
.info-cloudy,
.info-humidity,
.info-wind {
  @apply flex justify-between items-center text-white text-lg;
}
.cloudy-value,
.humidity-value,
.wind-value {
  @apply font-medium;
}

.info-humidity {
  @apply my-9;
}

.separator {
  content: "_";
  margin-top: 107px;

  @apply mr-10 ml-12 bg-white w-10/12 h-px block;
}

@media (min-width: 769px) and (max-width: 1280px) {
  .info-content {
    @apply mt-12 mx-auto px-5 w-5/6;
  }

  .separator {
    content: "_";
    @apply mt-14 mx-auto bg-white w-10/12 h-px block;
  }
}

@media screen and (max-width: 768px) {
  .info-content {
    @apply mt-20 mx-auto w-11/12;
  }
  .separator {
    content: "_";
    @apply mx-auto w-full;
  }
}

@media screen and (max-width: 480px) {
  .info-content {
    @apply mt-10 mx-auto px-5 w-full;
  }

  .info-title {
    @apply mb-8;
  }

  .separator {
    content: "_";
    @apply mt-10 mx-auto w-full;
  }
}
</style>