<script lang="ts" setup>
  interface Props {
    options: {
      maps: {
        photo: number
        map: number
        caption: string
      }[]
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: undefined
  })
</script>

<template>
  <div class="gallery flex flex-wrap">
    <div class="gallery-block" v-if="options" v-for="{ photo, map, caption } in options.maps">
      <div class="gallery-block-wrap">
        <div class="gallery-block-main" v-if="photo">
          <WPBlockImage :img-id="photo" :width="400" :height="300" img-class="w-full" />
          <div class="caption">{{ caption }}</div>
        </div>
        <div class="gallery-block-side" v-if="map">
          <WPBlockImage :img-id="map" :width="80" :height="80" zoom />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.gallery{
  margin-left: -5px;
  margin-right: -5px;
}

.gallery-block{
  margin-bottom: 0.5em;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  @include media(md){
    width: 50%;
  }
  @include media(xl){
    width: 33.333%;
  }
}

.gallery-block-wrap{
  position: relative;
}

.gallery-block-side{
  width: 80px;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid #FFF;
  @include media(md){
    width: 60px;
  }
  @include media(lg){
    width: 80px;
  }
}

.caption{
  font-size: 0.86em;
  margin-top: 0.3em;
}
</style>