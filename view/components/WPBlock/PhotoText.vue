<script lang="ts" setup>
  interface Props {
    options: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    options: Object
  })
</script>

<template>
  <div class="photo-image sm:flex flex-col sm:flex-row gap-4 mb-8">
    <div class="photo-image-photo text-center mx-auto flex-1 w-[80%] sm:w-[100%]">
      <WPBlockImage :img-id="options.photo" />
    </div>
    <div v-html="useImages(options.body)" class="wp-content photo-image-body w-[60%] md:w-[50%] lg:w-[66.666%]"></div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;
@use '~/assets/scss/richtext' as *;
</style>