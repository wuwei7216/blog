// src/.vitepress/config.mts
import { defineConfig } from "file:///D:/code/blog/node_modules/.pnpm/vitepress@1.3.4_@algolia+client-search@5.3.0_@types+node@22.9.0_sass@1.80.6_search-insights@2.17.1/node_modules/vitepress/dist/node/index.js";
import { resolve } from "path";
import AutoImport from "file:///D:/code/blog/node_modules/.pnpm/unplugin-auto-import@0.18.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/code/blog/node_modules/.pnpm/unplugin-vue-components@0.27.4_vue@3.5.3/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/code/blog/node_modules/.pnpm/unplugin-vue-components@0.27.4_vue@3.5.3/node_modules/unplugin-vue-components/dist/resolvers.js";
import vueJsx from "file:///D:/code/blog/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.10_vue@3.5.3/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///D:/code/blog/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.3/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "D:\\code\\blog\\src\\.vitepress";
var config_default = defineConfig({
  title: "\u5149\u7A7F\u8FC7\u68EE\u6797",
  description: "\u5149\u7A7F\u8FC7\u68EE\u6797\u7684\u535A\u5BA2",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  },
  vite: {
    optimizeDeps: {
      include: [
        "element-plus"
      ]
    },
    ssr: {
      noExternal: [
        "element-plus"
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    },
    plugins: [
      svgLoader(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      vueJsx()
    ],
    resolve: {
      alias: {
        // 别名
        "@": resolve(__vite_injected_original_dirname, "../"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      }
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52aXRlcHJlc3MvY29uZmlnLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcYmxvZ1xcXFxzcmNcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxibG9nXFxcXHNyY1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvYmxvZy9zcmMvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcblxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIlxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIlxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIlxuXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCJcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSBcInZpdGUtc3ZnLWxvYWRlclwiXG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIlx1NTE0OVx1N0E3Rlx1OEZDN1x1NjhFRVx1Njc5N1wiLFxuICBkZXNjcmlwdGlvbjogXCJcdTUxNDlcdTdBN0ZcdThGQzdcdTY4RUVcdTY3OTdcdTc2ODRcdTUzNUFcdTVCQTJcIixcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH1cbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ01hcmtkb3duIEV4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzJyB9XG4gICAgXVxuICB9LFxuICB2aXRlOiB7XG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIFwiZWxlbWVudC1wbHVzXCJcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzc3I6IHtcbiAgICAgIG5vRXh0ZXJuYWw6IFtcbiAgICAgICAgXCJlbGVtZW50LXBsdXNcIlxuICAgICAgXSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYXBpOiAnbW9kZXJuLWNvbXBpbGVyJ1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHN2Z0xvYWRlcigpLFxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICB9KSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgfSksXG4gICAgICB2dWVKc3goKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIC8vIFx1NTIyQlx1NTQwRFxuICAgICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vXCIpLFxuICAgICAgICBcInZ1ZS1pMThuXCI6IFwidnVlLWkxOG4vZGlzdC92dWUtaTE4bi5janMuanNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVEsU0FBUyxvQkFBb0I7QUFDbFMsU0FBUyxlQUFlO0FBRXhCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBRXBDLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFSdEIsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBO0FBQUEsSUFFWCxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxNQUMxQixFQUFFLE1BQU0sWUFBWSxNQUFNLHFCQUFxQjtBQUFBLElBQ2pEO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLHFCQUFxQixNQUFNLHFCQUFxQjtBQUFBLFVBQ3hELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxnQkFBZ0I7QUFBQSxRQUN4RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLElBQy9EO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osY0FBYztBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQTtBQUFBLFFBRUwsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxRQUM3QixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
