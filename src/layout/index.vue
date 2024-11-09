<template>
  <ClientOnly>
    <FirstLoading />
  </ClientOnly>
  <defaultLayout :class="getCurClass">
  </defaultLayout>
  <Live2D v-if="!isMobile" />
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import defaultLayout from "vitepress/dist/client/theme-default/Layout.vue"
import { computed} from "vue"
// import Comment from "./Comment.vue"
import Live2D from "./Live2d.vue"
// import SideTool from "./SideTool.vue"
import { isMobile } from "@/utils"
import FirstLoading from "./FirstLoading.vue"

const data = useData()

const getCurClass = computed(() => data.frontmatter.value.class)

</script>
<style lang="scss" scoped>
.home-comment {
  padding: 2em;
}

.el-backtop {
  z-index: 2001;
}

:deep(.VPNavBar) {
  .content {
    white-space: nowrap;
  }
}

:deep(.VPDoc.has-aside) {
  .content-container {
    max-width: 850px;
  }
}

:deep(.VPMenuGroup) {
  .title {
    white-space: nowrap;
  }
}

.page_pv {
  line-height: var(--page-pv-height);
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
}
</style>

<style lang="scss">
.loading-icon {
  display: inline;
  vertical-align: middle;
  animation: loading-rotate 2s linear infinite;
}
</style>
