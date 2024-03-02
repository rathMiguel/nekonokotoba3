<script lang="ts" setup>
const { data } = await useFetch('/api/wp/posts/pages/home');
</script>

<template>
  <Head>
    <Title>猫のことば研究所</Title>
    <Meta name="description" :content="data[0].acf.description" />
    <Meta name="keywords" :content="data[0].acf.keywords" />
  </Head>
  <div class="home-main">
    <Mainimage />
    <NewsList />
  </div>
  <SocialDisplay />
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.home-main {
  margin-left: -15px;
  margin-right: -15px;
  @include media(sm) {
    margin-left: -30px;
    margin-top: -30px;
    margin-right: -30px;
  }
}
</style>
