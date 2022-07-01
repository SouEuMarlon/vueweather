<template>
  <main class="main_section">
    <div class="main_section-container">
      <h2 class="main_section-celsius">16°&nbsp;</h2>
      <div class="main-section-content">
        <p class="main_section-content_location">
          Belo Horizonte <img src="../../src/assets/Sun.svg" alt="" />
        </p>
        <p class="main_section-content_date">
          <span class="main_section-content_date-hour">11:11&nbsp;</span> -
          <span class="main_section-content_date-day"
            >&nbsp;Monday, 27/06/22
          </span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.main_section {
  background-image: url("../src/assets/Summer_bg.png");
  @apply flex flex-col justify-end w-9/12 bg-no-repeat bg-cover bg-center;
}
.main_section-container {
  @apply flex pl-20 pb-20;
}
.main_section-celsius {
  @apply text-7xl text-white;
}

.main_section-content_location {
  @apply text-4xl text-white font-medium;
}

.main_section-content_date {
  @apply text-2xl text-white;
}

.main_section-content_location {
  @apply flex items-center;
}
.main_section-content_location img {
  @apply w-9;
}
/*
@media (min-width: 769px) and (max-width: 1280px) {
  .main_section {
  }

  .main_section-container {
    @apply pl-5 pb-40;
  }
}
*/
@media screen and (max-width: 768px) {
  .main_section {
    @apply w-full flex flex-col justify-end bg-bottom;
  }
  .main_section-container {
    @apply flex items-end pl-10 pb-4 h-80;
  }

  .main_section-celsius {
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
</style>