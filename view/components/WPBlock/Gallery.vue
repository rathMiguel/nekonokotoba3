<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    imgId: number
  }

  const props = withDefaults(defineProps<Props>(), {
    imgId: 0,
  })
</script>

<template>
  
</template>
