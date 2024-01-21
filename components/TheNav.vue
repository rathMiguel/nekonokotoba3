<script setup lang="ts">
  
</script>

<template>
  <nav id="nav" role="navigation">
    <ul class="nav-list">
      <li>
        <NuxtLink class="link-wrap" to="/">
          <font-awesome-icon class="icon" :icon="['far', 'heart']" />
          <span class="link-text">HOME</span>
        </NuxtLink>
      </li>
      <li>
        <div class="link-wrap">
          <font-awesome-icon class="icon" :icon="['far', 'flag']" />
          <span class="link-text">EVENT DATA</span>
        </div>
      </li>
      <li>
        <div class="link-wrap">
          <font-awesome-icon class="icon" :icon="['far', 'rectangle-list']" />
          <span class="link-text">DATA BASE</span>
        </div>
        <ul>
          <li>
            <NuxtLink class="link-wrap" to="/data/mimimi/">ミミミのミッションマスター</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-wrap" to="/data/transport/">イベントホール　特殊転送先リスト</NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <div class="link-wrap">
          <font-awesome-icon class="icon" :icon="['far', 'sun']" />
          <span class="link-text">TOOLS</span>
        </div>
        <ul>
          <li>
            <NuxtLink class="link-wrap" to="/tools/seisan/">清算計算機</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.nav-list{
  padding: 0;
  margin: 0;
  font-family: $en;
  line-height: 1.4;
  li{
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }
  & > li{
    border-bottom: 1px solid rgba(#FFF, 30%);
    &:hover{
      & > ul{
        display: block;
        padding-left: 1.5em;
        @include media(md){
          padding-left: 0;
        }
        li{
          border-bottom: none;
          @include media(md){
            border-bottom: 1px solid rgba(#FFF, 30%);
          }
        }
      }
    }
    .icon{
      margin-right: 10px;
    }
    &:first-child{
      border-top: 1px solid rgba(#FFF, 30%);
    }
    
    & > ul{
      background-color: $color-primary;
      width: $nav-width;
      padding: 0;
      margin: 0;
      display: none;
      @include media(md){
        position: absolute;
        left: $nav-width;
        top: 0;
        padding-left: 0;
      }

      li{
        border-bottom: 1px solid rgba(#FFF, 30%);
        & > ul{
          width: $nav-width;
          padding: 0;
          margin: 0;
          background-color: $color-primary;
          padding-left: 1.5em;
          width: calc($nav-width - 1.5em);
          @include media(md){
            display: none;
            position: absolute;
            left: $nav-width;
            top: 0;
          }
        }

        &:hover{
          & > ul{
            display: block;
            li{
              border-bottom: none;
            }
          }
        }
      }
    }
  }
  a{
    color: #FFF;
    text-decoration: none;
    width: 100%;
  }
  .link-wrap{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 10px;
  }
}
</style>
