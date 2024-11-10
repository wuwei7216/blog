import { DefaultTheme, defineConfig } from 'vitepress'
import { resolve } from "path"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

import vueJsx from "@vitejs/plugin-vue-jsx"
import svgLoader from "vite-svg-loader"
import { Article } from './catalog/Article'


const  generateNav = (arr: DefaultTheme.SidebarItem[]) => 
  arr.map(i => ({
    ...i,
    items: i.items?.map(i => ({
      ...i,
      link: Array.isArray(i.items) ? i.items[0].link : i.link
    }))
  })) as (DefaultTheme.NavItemChildren | DefaultTheme.NavItemWithLink)[]


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "光穿过森林",
  description: "光穿过森林的博客",
  themeConfig: {
    search: {
      // provider: "algolia",
      provider: "local",
      options: {
        // appId: "1AS9BEA8JY",
        // apiKey: "6564a713013f5f79664a8be62e7f3235",
        // indexName: "kuangyx",
        // placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            // searchBox: {
            //   resetButtonTitle: "清除查询条件",
            //   resetButtonAriaLabel: "清除查询条件",
            //   cancelButtonText: "取消",
            //   cancelButtonAriaLabel: "取消",
            // },
            // startScreen: {
            //   recentSearchesTitle: "搜索历史",
            //   noRecentSearchesText: "没有搜索历史",
            //   saveRecentSearchButtonTitle: "保存至搜索历史",
            //   removeRecentSearchButtonTitle: "从搜索历史中移除",
            //   favoriteSearchesTitle: "收藏",
            //   removeFavoriteSearchButtonTitle: "从收藏中移除",
            // },
            // errorScreen: {
            //   titleText: "无法获取结果",
            //   helpText: "你可能需要检查你的网络连接",
            // },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              // searchByText: "搜索提供者",
            },
            // noResultsScreen: {
            //   noResultsText: "无法找到相关结果",
            //   suggestedQueryText: "你可以尝试查询",
            //   reportMissingResultsText: "你认为该查询应该有结果？",
            //   reportMissingResultsLinkText: "点击反馈",
            // },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "文章",
        items: generateNav(Article),
      },
    ],

    sidebar: {
      "/docs/文章/": Article,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    optimizeDeps: {
      include: [
        "element-plus"
      ],
    },
    ssr: {
      noExternal: [
        "element-plus"
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        },
      },
    },
    plugins: [
      svgLoader(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vueJsx(),
    ],
    resolve: {
      alias: {
        // 别名
        "@": resolve(__dirname, "../"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
    },
  }
})
