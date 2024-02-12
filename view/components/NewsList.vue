<script setup lang="ts">
  const config = useRuntimeConfig()
  const { data: posts } = await useFetch(`/api/wp/posts/posts/`)
</script>

<template>
  <section class="news" id="news" v-if="posts.length">
    <div class="news-header">
      <h3 class="news-maintitle">お知らせ</h3>
    </div>
    <div class="news-main">
      <dl class="news-dl" v-for="{ date, acf, title } in posts">
        <dt>{{ formattedDate(date) }}</dt>
        <dd>
          <NuxtLink :to="acf.news_link" v-if="acf.news_link">{{ title.rendered }}</NuxtLink>
          <span v-else>{{ title.rendered }}</span>
        </dd>
      </dl>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.news-maintitle{
  font-size: 1.4em;
  margin-bottom: 10px;
  padding-left: 15px;
  @include media(sm){
    padding-left: 30px;
  }
}

.news-dl{
  border-top: 1px solid lighten($color-primary, 65);
  border-bottom: 1px solid lighten($color-primary, 65);
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: -1px;
  padding-left: 15px;
  padding-right: 15px;
  @include media(sm){
    padding-left: 30px;
    padding-right: 30px;
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