---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "web技术学习"
  text: "光穿过森林的博客"
  tagline: 包含web基础技术css、js、html、node.js和前端框架vue、react
  actions:
    - theme: brand
      text: 个人简历
      link: http://8.148.5.174:8001/
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - icon: ❤
    title: 循序渐进
    details: 纸上得来终觉浅，绝知此事要躬行。
  - icon: ✨
    title: 导航与软件
    details: 游戏的尽头是怀旧，优化的尽头是默认。
  - icon: 🚶‍♂️
    title: 关于我
    details: 是个路人。
---

<script setup>
import GithubChart from './components/GithubChart.vue'
// import SitePv from './components/SitePv.vue'
</script>

<GithubChart />

<!-- <SitePv /> -->
