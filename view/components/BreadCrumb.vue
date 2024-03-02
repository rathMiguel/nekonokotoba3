<script lang="ts" setup>
interface Props {
  texts: string[];
  links: string[];
}

const props = withDefaults(defineProps<Props>(), {
  texts: () => ['HOME'],
  links: () => ['/'],
});

const linksCount = props.links.length;
</script>

<template>
  <div class="breadcrumb mb-4">
    <ul>
      <li v-for="(value, index) in texts">
        <NuxtLink :to="links[index]" v-if="index < linksCount">{{ value }}</NuxtLink>
        <span v-else>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb {
  background-color: #dfe7f0;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.86em;
  ul {
    display: flex;
    align-items: center;
    li {
      display: inline-flex;
      align-items: center;
      &:not(:last-child) {
        &::after {
          content: '';
          display: inline-flex;
          height: 1em;
          width: 1em;
          background-image: url('/images/icon_arrow_right.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          margin-left: 0.5em;
          margin-right: 0.5em;
        }
      }
    }
  }

  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
