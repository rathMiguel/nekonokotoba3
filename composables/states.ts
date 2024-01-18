import { ref, onMounted } from "vue"
import { defineStore } from "pinia"

/**
 * ナビゲーションの状態を管理。
 * @return isNavToggle trueで開いている状態、開いていない状態がfalse
 * @return navToggle() isNavToggleの切り替え
 */

export const useNavStatus = defineStore(
  "navStatus",
  () => {
    const isNavToggle = ref<boolean>(false)
    
    const handleResize: () => number = () => {
      return window.innerWidth
    }

    const navToggle: () => boolean = () => {
      return isNavToggle.value = !isNavToggle.value
    }

    return { isNavToggle, navToggle }
  },
)
