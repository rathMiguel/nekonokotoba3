<script lang="ts" setup>
  interface Props {
    options: {
      content: string
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: undefined,
  })
</script>

<template>
  <div class="mb-8 wp-content" v-if="options">
    <div v-html="options.content"></div>
  </div>
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