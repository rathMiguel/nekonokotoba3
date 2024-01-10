<script lang="ts" setup>
  const route = useRoute()

  const { data } = await useFetch(`/api/notion/posts?slug=${route.params.slug}`)
</script>

<template>
  <Head>
    <Title>{{ data?.results[0].properties.Name.title[0].plain_text }} - 猫のことば研究所</Title>
    <Meta name="description" content="" />
  </Head>
  <article class="p-4 md:p-8">
    <header>
      <h1>{{ data?.results[0].properties.Name.title[0].plain_text }}</h1>
    </header>
  </article>

  <Contents :post-id="data?.results[0].id" />
</template>

<style land="scss">
  
</style>
