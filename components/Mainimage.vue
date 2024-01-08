<script setup lang="ts">
  const gallery: string[] = [
    'screenBreidablik030.jpg',
    'screenBreidablik008.jpg',
    'screenBreidablik007.jpg',
    'screenBreidablik005.jpg',
    'screenBreidablik041.jpg',
    'screenBreidablik017.jpg',
    'screenMimir003.jpg',
    'screenBreidablik046.jpg'
  ]
</script>

<template>
  <section class="mainimage">
    <div class="mainimage__gallery">
      <div class="gallery-block" v-for="name in gallery">
        <NuxtImg :src="`/images/top/${name}`" format="webp" fit="cover" height="300" width="300" preload decoding="async" alt="" />
      </div>
    </div>
    <div class="mainimage__logo">
      <h1>
        <NuxtImg src="/images/logo_top.svg" alt="猫のことば　研究所" width="400" height="135" />
      </h1>
      <div class="mainimage-subtitle">
        <p>ラグナロクオンラインをゆるっと研究。</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

//
// mainimage
//

.mainimage{
  position: relative;
  margin: -$content-gap;
  margin-bottom: $content-gap;
  display: flex;
  align-items: center;
  overflow: hidden;
  max-height: 187px;
  @include media(sm){
    margin: -$content-gap-sm;
    margin-top: 0;
    margin-bottom: $content-gap-sm;
    max-height: 450px;
    margin-top: -30px;
    margin-right: -30px;
    margin-left: 0px;
  }

  &__gallery{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 0;
    &::before{
      content: "";
      display: block;
      position: absolute;
      z-index: -5;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color-primary, 1);
      mix-blend-mode: multiply;
    }
    & > * {
      width: 25%;
    }

    img{
      width: 100%;
      opacity: 0.2;
      filter: saturate(10%);
      transition: opacity ease-in 0.5s;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      width: 100%;
    }
  }

  &__logo{
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    h1{
      margin-left: -60px;
      @include media(md){
        margin-left: -20px;
      }
    }
    img{
      width: 200px;
      @include media(sm){
        width: 400px;
      }
    }
  }
}

.mainimage-subtitle{
  position: relative;
  margin-top: 10px;
  @include media(md){
    font-size: 1.2em;
  }
  &::before{
    display: block;
    content: "";
    height: 4px;
    width: 40px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    margin-top: 0em;
  }
  
  p{
    margin-bottom: 0;
  }
}
</style>
