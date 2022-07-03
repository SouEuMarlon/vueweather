<template>
  <div class="footer">
    <p>
      Design and developed by
      <a
        href="https://github.com/marlonmnz"
        target="_blank"
        rel="noopener noreferrer"
        >Marlon Menezes</a
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  @apply flex items-center justify-center w-full h-auto text-center pb-14 pt-44 pr-5 pl-5 self-end;
}

p {
  @apply text-white text-sm font-normal;
}
a {
  @apply text-white text-sm font-medium underline;
}

@media screen and (max-width: 1280px) {
  .footer {
    @apply pb-6 pt-10 pr-5 pl-5;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    @apply pt-16;
  }
  p {
    @apply text-lg;
  }
  a {
    @apply text-lg;
  }
}
@media screen and (max-width: 480px) {
  .footer {
    @apply pt-10;
  }
  p {
    @apply text-lg;
  }
  a {
    @apply text-lg;
  }
}
</style>