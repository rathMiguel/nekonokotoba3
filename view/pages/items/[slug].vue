<script lang="ts" setup>
  const route = useRoute('data-slug')
  const { data } = await useFetch(`/api/wp/posts/items/${route.params.slug}`)
</script>

<template>
  <Head>
    <Title>{{ data[0].title.rendered }} - 猫のことば研究所</Title>
    <Meta name="description" :content="data[0].acf.description" />
    <Meta name="keywords" :content="data[0].acf.keywords" />
  </Head>
  <article>
    <header>
      <BlockH1>{{ data[0].title.rendered }}</BlockH1>
    </header>
    <WPContent :data="data[0]" />
  </article>
</template>
