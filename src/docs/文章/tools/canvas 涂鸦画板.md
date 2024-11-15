<script setup lang="ts">
import canvasGraffiti from "./components/canvasGraffiti.vue"
</script>

# canvas 涂鸦画板，支持笔写、手写、鼠标绘图

## 介绍

用于笔写、手写、鼠标绘图，基于canvas实现，支持`mouse`、`pen`、`touch`三种工具

## 使用

```ts
import { CanvasGraffiti } from "@/components/canvas-graffiti"
new CanvasGraffiti({
  el: "#canvas",
})
```

## Vue Demo

<canvasGraffiti />

:::details 查看代码

<<< @/docs/文章/tools/components/canvasGraffiti.vue

:::
:::details 查看代码

<<< @/components/canvas-graffiti/index.ts

:::


:::tip 注意
笔写需要移动端的触屏笔才能触发，基于[pointerType](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType)判断，可能存在笔或系统被改过部分浏览器无法识别为笔，从而笔触发`pointerType`还是`touch`类型。
:::
