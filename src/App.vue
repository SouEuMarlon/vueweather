<template>
  <div>
    <Header />
    <div class="containerApp">
      <MainSection />
      <SideSection />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainSection from "./components/MainSection.vue";
import SideSection from "./components/SideSection.vue";
export default {
  components: {
    Header,
    MainSection,
    SideSection,
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
  @apply w-full h-full flex;
}

@media screen and (max-width: 768px) {
  .containerApp {
    @apply flex flex-col;
  }
}
</style>
