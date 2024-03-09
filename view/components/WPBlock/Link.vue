<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

interface Props {
  options:
    | {
        title: string;
        link_type: boolean; // true: 内部リンク false: 外部リンク
        link_internal?: number;
        link_external?: string;
        is_button: boolean;
        button_type: string;
      }
    | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  options: undefined,
});

const { data: internalLinkData } = await useFetch(`/api/wp/posts/events/${props.options.link_internal}`);
const getLinkSlug = (data: any): string | undefined => {
  if (data === undefined || data.link === undefined) return undefined;

  const linkText = data.link.replace(runtimeConfig.public.WP_BASE_URL, '/');
  return linkText;
};
</script>

<template>
  <p class="mb-8">
    <NuxtLink
      :to="getLinkSlug(internalLinkData) || options?.link_external"
      :target="options?.link_type ? '_self' : '_blank'"
      :class="[options?.is_button && 'button', `button-${options?.button_type}`]"
      >{{ options?.title }}</NuxtLink
    >
  </p>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

a {
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}

.button {
  @include button-basic;

  &.button-primary {
    background-color: $color-primary;
    height: 45px;
    border-radius: 8px;
    border: 2px solid $color-primary;
    color: #fff;
    &:hover {
      color: $color-primary;
      background-color: #fff;
    }
  }

  &.button-primary_inverse {
    height: 45px;
    border-radius: 8px;
    border: 2px solid $color-primary;
    color: #fff;
    color: $color-primary;
    background-color: #fff;
    &:hover {
      background-color: $color-primary;
      color: #fff;
    }
  }
}
</style>
