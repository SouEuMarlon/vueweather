<template>
  <div class="info-content">
    <h3 class="info-title">Weather Details</h3>
    <div class="info-cloudy">
      <p class="cloudy-title">Cloudy</p>
      <p class="cloudy-value">86%</p>
    </div>
    <div class="info-humidity">
      <p class="humidity-title">Humidity</p>
      <p class="humidity-value">62%</p>
    </div>
    <div class="info-wind">
      <p class="wind-title">Wind</p>
      <p class="wind-value">62%</p>
    </div>
  </div>
</template>

<script>
export default {};
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

@media (min-width: 769px) and (max-width: 1280px) {
  .info-content {
    @apply mt-12 mx-auto px-5 w-5/6;
  }
}

@media screen and (max-width: 768px) {
  .info-content {
    @apply mt-20 mx-auto px-5 w-full;
  }
}

@media screen and (max-width: 480px) {
  .info-content {
    @apply mt-12 mx-auto px-5 w-full;
  }
}
</style>