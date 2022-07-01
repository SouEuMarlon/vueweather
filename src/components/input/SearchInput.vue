<template>
  <input type="text" placeholder="Enter your city..." />
</template>

<script>
export default {};
</script>

<style scoped>
input {
  @apply w-4/6 h-inputDeskHeight rounded-lg px-2 outline-none;
}

@media screen and (max-width: 768px) {
  input {
    @apply w-96 h-inputDeskHeight rounded-lg px-2 outline-none;
  }
}
@media screen and (max-width: 480px) {
  input {
    @apply w-56 h-inputDeskHeight rounded-lg px-2 outline-none;
  }
}
</style>