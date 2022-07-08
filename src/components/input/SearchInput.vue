<template>
  <input class="search_input" type="text" placeholder="Enter your city..." />
</template>

<script>
export default {};
</script>

<style scoped>
.search_input {
  @apply w-4/6 rounded-lg px-2 outline-none;
}

@media screen and (max-width: 1280px) {
  .search_input {
    @apply w-4/6 py-3 rounded-lg px-4 outline-none;
  }
}

@media screen and (max-width: 768px) {
  .search_input {
    @apply w-96 h-inputDeskHeight rounded-lg px-2 outline-none;
  }
}
@media screen and (max-width: 480px) {
  .search_input {
    @apply w-56 h-inputDeskHeight rounded-lg px-2 outline-none;
  }
}
</style>