<script lang="ts" setup>
  const { data: posts } = useFetch('/api/wp/posts/events/')

  const eyeCatchClass: string[] = ['block', 'mx-auto', 'rounded-md', 'border-white', 'border-[0.4em]', 'shadow-md', 'xs:h-auto', 'w-180']
</script>

<template>
  <div class="maintitle bg-primary text-white text-center rounded-b-2xl p-4 md:p-6 md:mt-[-30px] mb-4">
    <h1 class="font-bold text-xl md:text-2xl">イベントデータ</h1>
  </div>
  <div class="breadcrumb mb-4">
    <ul>
      <li><NuxtLink to="/">HOME</NuxtLink></li>
      <li><span>イベントデータ</span></li>
    </ul>
  </div>
  <div class="postlist max-w-[800px] mx-auto flex flex-wrap mt-8">
    <div class="post-block border-b-[1px] border-dotted border-secondary sm:border-none pb-6 mb-4 sm:mb-4 w-full sm:w-[50%] lg:w-[33.333%]" v-for="{ id, title, slug, date, featured_media } in posts" :key="id">
      <NuxtLink :to="`/events/${slug}`" class="postblock flex sm:block mx-auto sm:max-w-[212px] xs:px-4">
        <div class="photo w-[100px] sm:w-[auto]">
          <EyeCatch :imgId="featured_media" :class="eyeCatchClass" :width="180" :height="240" v-if="featured_media" />
          <NuxtImg src="/images/pending.png" :class="eyeCatchClass" width="180" height="240" fit="cover" v-else />
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
  <!-- <pre>
    {{ posts }}
  </pre> -->
</template>

<style lang="scss" scoped>
.breadcrumb{
  background-color: #DFE7F0;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.86em;
  ul{
    display: flex;
    align-items: center;
    li{
      display: inline-flex;
      align-items: center;
      &:not(:last-child){
        &::after{
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

  a{
    text-decoration: underline;
    &:hover{
      text-decoration: none;
    }
  }
}
</style>