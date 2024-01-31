<script lang="ts" setup>
  const config = useRuntimeConfig()
  const route = useRoute('data-slug')

  const { data } = await useFetch(`${config.public.WP_BASE_URL}pages/?slug=${route.params.slug}`)
</script>

<template>
  <Head>
    <Title>{{ data[0].title.rendered }} - 猫のことば研究所</Title>
    <Meta name="description" :content="data[0].excerpt.rendered" />
  </Head>
  <article>
    <header>
      <BlockH1>{{ data[0].title.rendered }}</BlockH1>
    </header>
    <WPContent :data="data[0]" />
  </article>
</template>
