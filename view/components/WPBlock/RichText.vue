<script lang="ts" setup>
  interface Props {
    options: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    options: Object,
  })
</script>

<template>
  <section class="mb-8 wp-content">
    <div v-html="options.content"></div>
  </section>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;
@use '~/assets/scss/richtext' as *;

.wp-content{
  color: $color-primary;
  @include richtext;
}
</style>