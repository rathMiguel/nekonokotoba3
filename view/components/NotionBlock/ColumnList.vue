<script lang="ts" setup>
interface Props {
  data: Object
}

const props = withDefaults(defineProps<Props>(), {
  data: Object,
})

const { data: block } = await useFetch(`/api/notion/post/${props.data.id}`)
</script>

<template>
  <div class="column">
    <div v-for="value in block.results">
      <NotionBlockColumn :id="value.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.column{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  @include media(sm){
    display: flex;
    gap: 1.5em;
  }
}
</style>