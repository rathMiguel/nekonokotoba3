<script lang="ts" setup>
import { onMounted } from 'vue'

interface Props {
  imgId: number;
  height?: number | 'auto' | undefined;
  width?: number | 'auto' | undefined;
  fit?: 'contain' | 'cover';
  imgClass?: string;
  zoom?: boolean;
  preview?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imgId: 0,
  height: undefined,
  width: undefined,
  fit: 'cover',
  imgClass: '',
  zoom: false,
  preview: false
});

const { error, data: media } = await useFetch(`/api/wp/media/${props.imgId}`, {
  params: {
    preview: props.preview
  }
});

const isVisible = ref<boolean>(false);
const toggleModal = () => {
  if (!props.zoom) return;
  isVisible.value = !isVisible.value;
};

const isLoaded = ref<boolean>(false);

onMounted(() => {
  isLoaded.value = true
})
</script>

<template>
  <div v-if="media.status === 'inherit'">
    <figure v-on:click="toggleModal()">
      <NuxtImg
        :src="media.source_url"
        :alt="media.alt_text"
        :class="[imgClass, zoom ? 'is-zoom' : '', isLoaded || 'bg-slate-200']"
        :width="width || media.media_details.width || 'auto'"
        :height="height || media.media_details.height || 'auto'"
        :fit="fit"
        loading="lazy"
        quality="70"
        background="transparent"
      />
      <figcaption v-if="media.caption.rendered" v-html="media.caption.rendered" class="mt-2"></figcaption>
    </figure>
    <div class="modal" v-on:click="toggleModal()" v-show="isVisible">
      <div class="modal-wrap text-right">
        <span class="modal-close inline-block mb-2 font-kurenaido">× 閉じる</span>
        <NuxtImg :src="media.guid.rendered" :width="'auto'" :height="'auto'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.is-zoom {
  cursor: pointer;
}

figcaption {
  font-size: 0.86em;
  font-family: $ja_go;
}
.modal {
  position: fixed;
  z-index: 1100;
  color: #fff;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: rgba($color-primary, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrap {
  img {
    margin: auto;
  }
}
</style>
