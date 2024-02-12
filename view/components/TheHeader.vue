<script lang="ts" setup>
  import { storeToRefs } from "pinia"
  const navStatus = useNavStatus()
  const { navToggle } = navStatus
  const { isNavToggle } = storeToRefs(navStatus)

  const router = useRoute()

  watch(
    () => router.query,
    () => {
      navStatus.$patch((state) => {
        state.isNavToggle = false
      })
  })
</script>

<template>
  <header id="header">
    <i class="navbar" v-on:click="navToggle">
      <NuxtImg src="/images/cat.svg" width="20" height="23" fit="contain" alt="メニュー" />
    </i>
    <i class="nav-layer" v-on:click="navToggle" :class="isNavToggle ? 'is-active' : ''"></i>
    <div class="header-fixed" :class="isNavToggle ? 'is-active' : ''">
      <div class="header-logo">
        <NuxtLink to="/">
          <NuxtImg src="/images/logo.svg" alt="猫のことば研究所" width="150" height="62" fit="contain" />
        </NuxtLink>
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
  @include media(sm){
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
    @include media(sm){
      display: none;
    }
  }
}

.header-fixed{
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 100vh;
  width: $nav-width;
  background-color: $color-primary;
  color: #FFF;
  left: -100%;
  padding-top: 75px;
  transition: left ease-in-out 0.3s;
  @include media(sm){
    left: 0;
    padding-top: 0;
  }
  &.is-active{
    left: 0;
  }
}

.header-logo{
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  height: 200px;
  @include media(sm){
    display: flex;
  }
}
</style>
