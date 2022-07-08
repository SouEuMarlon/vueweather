<template>
  <header class="header glass-bg">
    <h1 class="logo">
      <span class="logo-green">Vue</span>Weather
    </h1>
  </header>
</template>

<script>

</script>

<style scoped>
.glass-bg{
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(42px);
}
.header{
  @apply flex items-center pl-5 h-14
}

.logo{  
  @apply text-xl font-bold text-white
}

.logo-green{
  color: #289A1E;
}

</style>
