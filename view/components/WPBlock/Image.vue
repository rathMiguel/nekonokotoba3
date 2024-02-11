<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    imgId: number,
    height?: number | 'auto' | null
    width?: number | 'auto' | null
  }

  const props = withDefaults(defineProps<Props>(), {
    imgId: 0,
    height: null,
    width: null
  })

  const { data: media } = await useFetch(`/api/wp/media/${props.imgId}`)
</script>

<template>
  <figure class="mb-8">
    <NuxtImg :src="media.media_details.sizes.full.source_url" :alt="media.alt_text" class="w-full" :width="width ? width : media.media_details.width" :height="height ? height : media.media_details.height" fit="cover" loading="lazy" quality="70" />
    <figcaption v-if="media.caption.rendered" v-html="media.caption.rendered " class="mt-2"></figcaption>
  </figure>
</template>

<style lang="scss" scoped>
  figcaption{
    font-size: 0.86em;
  }
</style>
