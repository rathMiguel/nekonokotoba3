<script lang="ts" setup>
interface Props {
  posts: {
    id: number;
    title: {
      rendered: string;
    };
    slug: string;
    date: string;
    featured_media: number;
  }[];
  postType: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  posts: Object,
  postType: null,
});

const eyeCatchClass: string[] = [
  'block',
  'mx-auto',
  'rounded-md',
  'border-white',
  'border-[0.4em]',
  'shadow-md',
  'xs:h-auto',
  'w-180',
];
</script>

<template>
  <div class="postlist max-w-[800px] mx-auto flex flex-wrap mt-8" v-if="postType">
    <div
      class="post-block border-b-[1px] border-dotted border-secondary sm:border-none pb-6 mb-4 sm:mb-4 w-full sm:w-[50%] lg:w-[33.333%]"
      v-for="{ id, title, slug, date, featured_media } in posts"
      :key="id"
    >
      <NuxtLink :to="`/${postType}/${slug}`" class="postblock flex sm:block mx-auto sm:max-w-[212px] xs:px-4">
        <div class="photo w-[100px] sm:w-[auto]">
          <EyeCatch
            :imgId="featured_media"
            :className="eyeCatchClass"
            :width="180"
            :height="240"
            :alt="title.rendered"
            v-if="featured_media"
          />
          <NuxtImg
            src="/images/pending.png"
            :class="eyeCatchClass"
            width="180"
            height="240"
            :alt="title.rendered"
            fit="cover"
            v-else
          />
        </div>
        <div class="flex-1 pl-6 sm:pl-0 sm:text-center">
          <h3 class="font-bold mt-3 text-lg line-brea">{{ title.rendered }}</h3>
          <span class="text-slate-300 font-karla text-sm block mt-2">
            <time :datetime="formattedDate(date, 'YYYY-MM-DD')">{{ formattedDate(date) }}</time>
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
