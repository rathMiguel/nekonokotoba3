<script></script>

<template>
  <Head>
    <Title>猫のことば研究所</Title>
    <Meta name="description" content="ラグナロクオンライン内で集めたデータやちょっと便利かもしれないツール等を公開しています。" />
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

.home-main{
  margin-left: -15px;
  margin-right: -15px;
  @include media(sm){
    margin-left: -30px;
    margin-top: -30px;
    margin-right: -30px;
  }
}
</style>
