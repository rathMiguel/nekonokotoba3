<script lang="ts" setup>
  import { ref } from 'vue'

  const isActive = ref<boolean>(false)

  const navToggle = () => {
    isActive.value = !isActive.value
  }
  
</script>

<template>
  <header id="header">
    <i class="navbar" v-on:click="navToggle">
      <nuxtImg src="/images/cat.svg" width="20" height="23" fit="contain" />
    </i>
    <i class="nav-layer" v-on:click="navToggle" :class="(isActive === true) ? 'is-active' : ''"></i>
    <div class="header-fixed" :class="(isActive === true) ? 'is-active' : ''">
      <div class="header-logo">
        <nuxtLink to="/">
          <nuxtImg src="/images/logo.svg" alt="" width="150" height="62" fit="contain" />
        </nuxtLink>
      </div>
      <TheNav />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.navbar{
  position: fixed;
  z-index: 1010;
  top: 15px;
  left: 15px;
  background-color: $color-primary;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid #FFF;
  @include media(md-lg){
    display: none;
  }
}

.nav-layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 10%);
  display: none;
  z-index: 990;
  &.is-active{
    display: block;
  }
}

.header-fixed{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  height: 100vh;
  width: $nav-width;
  background-color: $color-primary;
  color: #FFF;
  @include media(sm){
    left: -100%;
    padding-top: 75px;
  }
  &.is-active{
    left: 0;
  }
}

.header-logo{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  @include media(sm){
    display: none;
  }
}
</style>
