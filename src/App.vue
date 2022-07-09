<template>
  <div>
    <Header />
    <div class="containerApp">
      <main :class="classBg">
        <MainSection
          :temp="temp"
          :cityName="city"
          :icon="icon"
          :cloudy="cloudy"
        />
      </main>
      <SideSection
        :cloudy="cloudy"
        :humidity="humidity"
        :wind="wind"
        :city="city"
        @search="getWeather"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainSection from "./components/MainSection.vue";
import SideSection from "./components/SideSection.vue";
import axios from "axios";

export default {
  computed: {
    classBg() {
      const sunInfo = "Clear";
      const snowInfo = "Snow";
      const rainInfo = ["Drizzle", "Rain", "Thunderstorm"];
      const cloudInfo = [
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
      ];
      if (this.cloudy === "") {
        return "main_section -bgDefault";
      }
      if (this.cloudy.includes(sunInfo)) {
        return "main_section -bgSun";
      }
      if (this.cloudy.includes(snowInfo)) {
        return "main_section -bgSnow";
      }
      if (rainInfo.includes(this.cloudy)) {
        return "main_section -bgRain";
      }
      if (cloudInfo.includes(this.cloudy)) {
        return "main_section -bgCloud";
      }
    },
  },

  data() {
    return {
      baseUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
      apiKey: "0bf722aadf8fd079f1b903b584477e06",
      temp: null,
      city: "",
      cityName: "",
      icon: "",
      cloudy: "",
      humidity: null,
      wind: null,
    };
  },

  components: {
    Header,
    MainSection,
    SideSection,
  },
  methods: {
    getWeather(input) {
      axios
        .get(`${this.baseUrl}${input}&appid=${this.apiKey}&units=metric`)
        .then((res) => {
          const response = res.data;
          this.temp = Math.round(response.main.temp);
          this.city = response.name;
          this.cityName = response.name;
          this.icon = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
          this.cloudy = response.weather[0].main;
          this.humidity = response.main.humidity;
          this.wind = response.wind.speed;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background: #658f88;
}

.containerApp {
  height: calc(100vh - 56px);
  @apply w-screen flex;
}

.main_section {
  @apply flex flex-col justify-end w-9/12 bg-no-repeat bg-cover bg-center;
}

.-bgDefault {
  background-image: url("./src/assets/summer_bg.png");
}
.-bgSun {
  background-image: url("./src/assets/summer_bg.png");
}
.-bgRain {
  background-image: url("./src/assets/rain_bg.png");
}
.-bgSnow {
  background-image: url("./src/assets/snow_bg.png");
}
.-bgCloud {
  background-image: url("./src/assets/cloud_bg.png");
}

@media screen and (max-width: 768px) {
  .containerApp {
    @apply flex flex-col;
  }
}
</style>
