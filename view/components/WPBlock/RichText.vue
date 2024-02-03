<script lang="ts" setup>
  const config = useRuntimeConfig()

  interface Props {
    options: Object
  }

  const props = withDefaults(defineProps<Props>(), {
    options: Object,
  })
</script>

<template>
  <section class="mb-8 wp-content">
    <div v-html="options.content"></div>
  </section>
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.wp-content{
  color: $color-primary;

  p{
    margin-bottom: 1.5em;
  }

  h1{
    font-size: 1.5rem;
    color: #FFF;
    padding: 1em;
    margin-top: 2em;
    background-color: $color-primary;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  h2{
    font-size: 1.5rem;
    border-bottom: 2px solid #A0C5B4;
    padding-bottom: 10px;
    margin-bottom: 1em;
    margin-top: 1.5em;
  }

  h3{
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  ul,
  ol{
    margin-bottom: 1.5em;
    list-style-type: disc;
    margin-left: 1em;
    li{
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      &::marker{
        color: #A0C5B4;
      }
    }
  }

  ol{
    list-style-type: decimal;
  }

  table{
  table-layout: fixed;
  font-size: 0.86em;
  width: 100%;
  th, td{
    padding: 1em;
    border: 1px solid #DDD;
    a{
      text-decoration: underline;
      &:hover{
        text-decoration: none;
      }
    }
  }

  thead{
    color: #FFF;
    background-color: #25374B;
    th{
      &:not(:last-child){
        border-right: 1px solid #FFF;
      }
    }
  }

  tbody{
    tr{
      &:nth-child(2n + 1){
        background-color: #EDEDED;
      }
    }
  }
  }
}
</style>