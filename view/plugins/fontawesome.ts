import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faFlag, faSun, faRectangleList, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlus, faCircleMinus, faCarrot } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {

  library.add(faHeart, faFlag, faSun, faRectangleList, faCirclePlus, faCircleMinus, faCopy, faCarrot)
  config.autoAddCss = false
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
