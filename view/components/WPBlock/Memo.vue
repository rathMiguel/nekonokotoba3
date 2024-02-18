<script lang="ts" setup>
  interface Props {
    options: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    options: Object
  })
</script>

<template>
  <aside class="memo" :class="`label-${options.label_type}`">
    <div class="memo-main" v-html="useImages(options.body)"></div>
  </aside>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;
@use '~/assets/scss/richtext' as *;

.memo{
  padding: 1em 1.5em;
  border: 1px solid #cbd5e1;
  border-left: 10px solid $color-primary;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  overflow: hidden;
  @include media(md){
    padding: 1.5em 2em;
  }
}

.memo-main{
  @include richtext;
}

.label-{
  &info{
    border-left-color: #0369a1;
  }
  &success{
    border-left-color: #0d9488;
  }
  &caution{
    border-left-color: #eab308;
  }
  &danger{
    border-left-color: #E49078;
  }
}
</style>