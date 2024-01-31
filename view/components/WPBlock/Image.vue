<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    imgId: number
  }

  const props = withDefaults(defineProps<Props>(), {
    imgId: 0,
  })

  const { data: media } = await useFetch(`${config.public.WP_BASE_URL}media/${props.imgId}`)
</script>

<template>
  <figure class="mb-8">
    <NuxtImg :src="media.media_details.sizes.full.source_url" :alt="media.alt_text" class="w-full" format="webp" :width="media.media_details.width" :height="media.media_details.height" fit="cover" />
    <figcaption v-if="media.caption.rendered">
      {{ media.caption.rendered }}
    </figcaption>
  </figure>
</template>
