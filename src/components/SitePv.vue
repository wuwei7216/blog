<template>
  <div
    v-loading
    class="site_pv"
  >
    本站总访问量
    <span id="busuanzi_value_site_pv">
      <el-icon-loading class="loading-icon" />
    </span>
    次，访客数
    <span id="busuanzi_value_site_uv">
      <el-icon-loading class="loading-icon" />
    </span>
    人次
  </div>
</template>

<script >
/* 不蒜子访问量统计 */
let script;

export default {
  async mounted() {
    script = await import("busuanzi.pure.js");
    script?.fetch();
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
  .home .VPHero.has-image .main {
    max-width: 640px;
  }
}

.VPFeatures + .VPFeatures,
.site_pv ~ .site_pv {
  display: none;
}

.site_pv {
  text-align: center;
  padding: 2em;
  .loading-icon {
    font-size: 16px;
    display: inline;
    vertical-align: middle;
    animation: loading-rotate 2s linear infinite;
  }
}
</style>
