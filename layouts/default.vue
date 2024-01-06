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
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

main{
  padding: 15px;
  padding-top: 70px;
  @include media(md){
    padding: 30px;
  }
  
  &.is-active{
    padding-left: 250px;
    @include media(md){
      
    }
  }
}
</style>
