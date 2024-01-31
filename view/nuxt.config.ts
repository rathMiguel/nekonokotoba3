// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  runtimeConfig: {
    public: {
      WP_BASE_URL: process.env.WP_BASE_URL
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Zen+Kurenaido&display=swap',
          crossorigin: '',
        },
      ],
      htmlAttrs: {
        lang: 'ja'
      },
      title: '猫のことば研究所',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'ラグナロクオンライン内で集めたデータやちょっと便利かもしれないツール等を公開しています。',
        }
      ],
    },
  },
  css: [
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/free-regular-svg-icons'
    ]
  },
  plugins: [
    '@/plugins/fontawesome.ts'
  ],
  image: {
    domains: ['localhost'],
  },
  experimental: {
    typedPages: true
  }
})