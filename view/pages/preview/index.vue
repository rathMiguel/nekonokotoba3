<script lang="ts" setup>
const config = useRuntimeConfig()
const route = useRoute()
const query = route.query

const { error, data } = await useFetch(`/api/wp/posts/${query.posttype}/preview/`, {
  params: query
});

</script>

<template>
  <Head>
    <Title>{{ data.title.rendered }} - 猫のことば研究所</Title>
    <Meta name="description" :content="data.acf.description" />
    <Meta name="keywords" :content="data.acf.keywords" />
    <Meta name="robots" content="noindex" />
  </Head>
  <article>
    <header>
      <BlockH1>{{ data.title.rendered }}</BlockH1>
    </header>
    <WPContent :data="data" />
    <PreviewBack :back-link="`${config.public.WP_BASE_URL}wp-admin/post.php?post=${query.id}&action=edit`" />
  </article>
</template>