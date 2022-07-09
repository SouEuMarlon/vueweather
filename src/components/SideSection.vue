<template>
  <div class="side-bg">
    <div class="sideContainer">
      <div class="searchContainer">
        <input
          v-model="cityInput"
          class="search_input"
          type="text"
          placeholder="Enter your city..."
        />
        <button class="search_button" @click="search()">Search</button>
      </div>
      <div class="weatherInfo">
        <div class="info-content">
          <h3 class="info-title">Weather Details</h3>
          <div class="info-cloudy">
            <p class="cloudy-title">Cloudy:</p>
            <p class="cloudy-value" v-if="hasCloudy">{{ cloudy }}</p>
          </div>
          <div class="info-humidity">
            <p class="humidity-title">Humidity:</p>
            <p class="humidity-value" v-if="hasHumidity">{{ humidity }}%</p>
          </div>
          <div class="info-wind">
            <p class="wind-title">Wind:</p>
            <p class="wind-value" v-if="hasWind">{{ wind }}m/s</p>
          </div>
          <span class="separator"></span>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./footer/Footer.vue";
export default {
  props: {
    city: {
      type: String,
      default: "",
    },
    cloudy: {
      type: String,
      default: "",
    },
    humidity: {
      type: Number,
      default: null,
    },
    wind: {
      type: Number,
      default: null,
    },
  },
  components: {
    Footer,
  },
  emits: ["search"],
  data() {
    return {
      cityInput: "",
    };
  },

  computed: {
    hasCloudy() {
      return this.cloudy !== "";
    },
    hasHumidity() {
      return this.humidity !== null;
    },
    hasWind() {
      return this.wind !== null;
    },
  },
  methods: {
    search() {
      this.$emit("search", this.cityInput);
      this.cityInput = "";
    },
  },
};
</script>

<style scoped>
.sideContainer {
  @apply flex flex-col pt-14 w-full pb-0 px-3;
}

.side-bg {
  @apply bg-bgGreen;
}

.searchContainer {
  @apply mx-auto;
}

.search_input {
  @apply w-4/6 py-3 rounded-lg px-4 outline-none;
}

.search_button {
  @apply bg-white bg-no-repeat text-greyText text-base text-center rounded-lg ml-3 py-3 pl-5 pr-5 hover:text-bgGreen transition-all;
}

/* Weather Info*/

.info-content {
  @apply mt-12 mx-auto px-5 w-5/6;
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

  @apply bg-white w-10/12 h-px mt-14 mx-auto w-full block;
}

@media screen and (max-width: 768px) {
  .sideContainer {
    @apply flex flex-col items-center justify-around pt-0 w-full;
  }

  .searchContainer {
    @apply pt-10 m-0;
  }

  .search_input {
    @apply w-96 h-inputDeskHeight rounded-lg px-2 outline-none;
  }

  .search_button {
    @apply bg-white bg-no-repeat text-greyText text-base text-center rounded-lg ml-3 py-3 pl-5 pr-5 hover:text-bgGreen transition-all;
  }

  /* Weather Info*/

  .weatherInfo {
    @apply w-10/12 self-center;
  }

  .info-content {
    @apply mt-20 mx-auto w-11/12;
  }
  .separator {
    content: "_";
    @apply mx-auto w-full;
  }
}

@media screen and (max-width: 480px) {
  .sideContainer {
    @apply flex flex-col items-center justify-center pt-0 pb-0 w-full;
  }

  .search_input {
    @apply w-56 h-inputDeskHeight rounded-lg px-2 outline-none;
  }

  .search_button {
    @apply bg-white bg-no-repeat text-greyText text-base text-center rounded-lg ml-3 py-3 pl-5 pr-5 hover:text-bgGreen transition-all;
  }

  /* Weather Info*/

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