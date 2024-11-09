import { ref } from "vue"
import { inBrowser } from "vitepress"

export const isMobile = ref(false)

const onResize = () =>
  (isMobile.value = document.documentElement.clientWidth < 768)

if (inBrowser) {
  window.addEventListener("resize", onResize)
  onResize()
}



export const getPropertyValue = (
  key: string,
  root = document.documentElement
) => window.getComputedStyle(root).getPropertyValue(key)
