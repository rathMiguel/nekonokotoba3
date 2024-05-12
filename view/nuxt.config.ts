// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: false,
    timeline: {
      enabled: true
    }
  },
  nitro: {
    prerender: {
      failOnError: false
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
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        },
        { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/iphone5_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/iphone6_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', href: '/splashscreens/iphoneplus_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: '/splashscreens/iphonex_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/iphonexr_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: '/splashscreens/iphonexsmax_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipad_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipadpro1_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipadpro3_splash.png' },
        { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipadpro2_splash.png' },
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
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: '猫のことば研究所' }
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
    '@nuxt/image',
    '@zadigetvoltaire/nuxt-gtm'
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
    dir: 'public/images',
    domains: [process.env.WP_BASE_URL]
  },
  experimental: {
    typedPages: true
  },
  gtm: {
    id: process.env.GTM_KEY
  },
  runtimeConfig: {
    public: {
      WP_BASE_URL: process.env.WP_BASE_URL,
      WP_API_URL: process.env.WP_API_URL,
      gtm: {
        id: process.env.GTM_KEY
      }
    }
  }
})