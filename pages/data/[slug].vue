<script lang="ts" setup>
  const route = useRoute()

  const { data } = await useFetch(`/api/notion/posts?slug=${route.params.slug}`)
  const dataResults: {
    properties: {
      Name: {
        title: {
          plain_text: string
        }[]
      }
    }
  } = await data.results[0]
</script>

<template>
  <Head>
    <Title>{{ dataResults.properties.Name.title[0].plain_text }} - 猫のことば研究所</Title>
    <Meta name="description" content="" />
  </Head>
  <article>
    <header>
      <BlockH1>{{ dataResults.properties.Name.title[0].plain_text }}</BlockH1>
    </header>
    <Contents :post-id="data?.results[0].id" />
  </article>

</template>

<style land="scss" scoped>
  
</style>
