<script lang="ts" setup>
  interface Props {
    options: {
      photo: number
      body: string
      photo_position: 'left' | 'right'
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: undefined
  })
</script>

<template>
  <div class="photo-image sm:flex flex-col sm:flex-row gap-4 mb-8" :class="options?.photo_position === 'right' && 'photo-right'">
    <div class="photo-image-photo text-center mx-auto flex-1 w-[80%] sm:w-[100%]" v-if="options">
      <WPBlockImage :img-id="options.photo" />
    </div>
    <div v-if="options" v-html="useImages(options.body)" class="wp-content photo-image-body w-[60%] md:w-[50%] lg:w-[60%]"></div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;
@use '~/assets/scss/richtext' as *;

.photo-right{
  @include media(sm){
    flex-direction: row-reverse;
  }
}
</style>