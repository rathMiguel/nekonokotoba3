<script setup lang="ts">
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
})

const imageOptions = {
  path: '/images/notion/',
  ext: ['.jpg', '.jpeg', '.gif', '.png', '.webp']
}
let ext = ''
const dataUrl = props.data.image.file.url

for (const value of imageOptions.ext) {
  if(dataUrl.indexOf(ext) !== -1) {
    ext = value
    break
  }
}

</script>

<template>
  <figure class="mb-4 sm:mb-8">
    <NuxtImg v-if="data" :src="imageOptions.path + data.id + ext" width="1920" />
    <figcaption v-if="data.image.caption[0].text.content !== ''" class="mt-2 text-slate-500 text-sm">
      {{ data.image.caption[0].text.content }}
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

</style>
