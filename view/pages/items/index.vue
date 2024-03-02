<script lang="ts" setup>
const route = useRoute()
const { data: posts } = useFetch('/api/wp/posts/items/')
const title: string = 'アイテムデータ'

</script>

<template>
  <Head>
    <Title>{{ title }} - 猫のことば研究所</Title>
    <Meta name="description" content="" />
    <Meta name="keywords" content="" />
  </Head>
  <MainTitle :title="title" />
  <BreadCrumb :texts="['HOME', 'アイテムデータ']" :links="['/']" />
  <PostList :posts="posts" :post-type="route.name" />
</template>

<style lang="scss" scoped>
</style>