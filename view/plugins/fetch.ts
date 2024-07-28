export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  nuxtApp.provide('fetch', (request, opts?) => {
    return $fetch(request, {
      retry: 3,
      retryDelay: 500,
      ...opts
    })
  })
})
