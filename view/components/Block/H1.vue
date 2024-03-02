<script setup lang="ts"></script>

<template>
  <h1 class="bg-primary mb-8 md:mb-12 rounded-xl">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

h1 {
  color: #fff;
  font-size: 1.5em;
  padding: 1em;
  @include media(sm) {
    padding: 1.6em 1.5em;
  }
}
</style>
