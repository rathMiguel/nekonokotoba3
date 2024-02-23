<script lang="ts" setup>
  import { computed } from 'vue'

  interface Props {
    options: {
      title: string
      level: number
    } | undefined
  }

  const props = withDefaults(defineProps<Props>(), {
    options: {
      title: '',
      level: 1
    }
  })

  const tagName = computed(() => {
    return `h${props.options.level}`
  })
</script>

<template>
  <component :is="tagName" v-if="options">
    {{ options.title }}
  </component>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

h1{
  font-size: 1.5rem;
  color: #FFF;
  padding: 1em;
  margin-top: 2em;
  background-color: $color-primary;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
}

h2{
  font-size: 1.5rem;
  border-bottom: 2px solid #A0C5B4;
  padding-bottom: 10px;
  margin-bottom: 1em;
  margin-top: 1.5em;
  font-weight: 700;
}

h3{
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

h4{
  margin-bottom: 1em;
  font-weight: 700;
  font-size: 1.2em;
}

h5{
  font-weight: 700;
  font-size: 1.1em;
}
</style>
