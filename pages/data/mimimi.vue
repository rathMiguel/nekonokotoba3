<script lang="ts" setup>
  const { data } = await useFetch('/api/notion/posts')
</script>

<template>
  <Head>
    <Title>{{ data.results[0].properties.Name.title[0].plain_text }} - 猫のことば研究所</Title>
    <Meta name="description" content="" />
  </Head>
</template>

<style land="scss">
  
</style>
