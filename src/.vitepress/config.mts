import { defineConfig } from 'vitepress'
import { resolve } from "path"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

import vueJsx from "@vitejs/plugin-vue-jsx"
import svgLoader from "vite-svg-loader"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "光穿过森林",
  description: "光穿过森林的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

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
