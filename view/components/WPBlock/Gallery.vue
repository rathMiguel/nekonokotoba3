<script lang="ts" setup>
interface Props {
  options:
    | {
        column_number: number;
        gallery: number[];
      }
    | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  options: undefined,
});
</script>

<template>
  <div class="gallery mb-8" v-if="options">
    <div class="gallery-block" :class="`column-${options.column_number}`" v-for="imgId in options.gallery">
      <WPBlockImage :img-id="imgId" img-class="w-full" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;

  & > * {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 1.3em;
  }

  .column-2 {
    @include media(md) {
      width: 50%;
    }
  }

  .column-3 {
    @include media(md) {
      width: 33.333%;
    }
  }

  .column-4 {
    @include media(md) {
      width: 25%;
    }
  }

  .column-5 {
    @include media(md) {
      width: 33.333%;
    }
    @include media(lg) {
      width: 20%;
    }
  }
}
</style>
