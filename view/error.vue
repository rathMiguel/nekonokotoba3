<script setup lang="ts">
const error = useError();
</script>

<template>
  <article class="flex justify-center items-center w-full h-[100vh] bg-primary text-white">
    <div class="text-white font-kurenaido">
      <!-- <pre>{{ error }}</pre> -->
      <div class="text-9xl text-center mb-3">404</div>
      <p>ページが見つかりませんでした</p>
      <!-- <p class="error-message">{{ error.message }}</p> -->
    </div>
  </article>
</template>
