<script setup lang="ts">
interface NewsPost {
  date: string
  link: string
  body: string
}

const posts: NewsPost[] = [
  // {
  //   date: '2022-07-19',
  //   link: '/event/july2022/',
  //   body: 'ゲフェンメロンフェスタ概要をまとめました'
  // },
  {
    date: '2022-06-29',
    link: '/',
    body: 'イベントホールの特殊転送先リストを公開しました'
  },
  // {
  //   date: '2022-06-29',
  //   link: '/event/june2022/',
  //   body: 'LoveLoveWedding大作戦2022 討伐リストを公開しました'
  // }
]
</script>

<template>
  <section class="news" id="news">
    <div class="news-header">
      <h3 class="news-maintitle">更新情報</h3>
    </div>
    <div class="news-main">
      <div class="news-dl" v-for="value in posts">
        <dt>{{ value.date }}</dt>
        <dd>
          <NuxtLink :to="value.link">{{ value.body }}</NuxtLink>
        </dd>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.news-maintitle{
  font-size: 1.4em;
  margin-bottom: 10px;
  @include media(md){
    padding-left: 20px;
  }
}

.news-dl{
  border-top: 1px solid lighten($color-primary, 65);
  border-bottom: 1px solid lighten($color-primary, 65);
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: -1px;
  @include media(sm){
    padding-left: 15px;
  }
  dt{
    color: #AAA;
    @include media(sm){
      float: left;
      padding-left: 0.5em;
    }
  }
  dd{
    @include media(sm){
      padding-left: 7.5em;
    }
  }
}

</style>