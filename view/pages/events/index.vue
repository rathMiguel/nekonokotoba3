<script lang="ts" setup>
const route = useRoute();
const { data: posts } = await useFetch('/api/wp/posts/events/');
const title: string = 'イベントデータ';
</script>

<template>
  <Head>
    <Title>{{ title }} - 猫のことば研究所</Title>
    <Meta name="description" content="" />
    <Meta name="keywords" content="" />
  </Head>
  <MainTitle :title="title" />
  <BreadCrumb :texts="['HOME', 'イベントデータ']" :links="['/']" />
  <PostList :posts="posts" :post-type="route.name" />
</template>

<style lang="scss" scoped></style>
