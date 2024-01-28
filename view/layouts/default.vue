<script setup lang="ts">
  import { storeToRefs } from "pinia"
  const navStatus = useNavStatus()
  const { isNavToggle } = storeToRefs(navStatus)
</script>

<template>
  <TheHeader />
  <main role="main" :class="isNavToggle ? 'is-active' : ''">
    <slot />
  </main>
  <TheFooter class="mt-[60px]" />
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

main{
  padding: 15px;
  padding-top: 70px;
  font-family: $ja_go;
  @include media(sm){
    padding: 30px;
    padding-left: 250px + 30px;
  }
  &.is-active{
    padding-left: 15px;
  }
}
</style>
