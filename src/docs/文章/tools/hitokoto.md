<script setup lang="ts">
import hitokoto from "./components/hitokoto.vue"
</script>

# hitokoto 一言

## 介绍

一言是创建于 2016 年的项目，起初是用于个人目的。目前已经转为公益项目，由萌创团队运营，为大家提供服务。 所谓一言（ヒトコト），即一句话。这句话可以是传达了感动，可以是博人一笑，可以是发人深思。总之，一言，代表着言语的触动，灵魂的交流。

## 使用

具体使用可以查看[官方文档](https://developer.hitokoto.cn/), 原理为调用一言对外接口，会返回一句话，以及点赞，作者等信息，以下demo为站内使用demo，添加了部分样式，以跟美观展现

## Vue Demo

<hitokoto />

:::details 查看代码

<<< @/docs/文章/tools/components/hitokoto.vue

:::

:::details 查看代码

<<< @/components/hitokoto/index.ts

:::

## 参数

| 属性              | 说明                                                               | 类型               | 默认值   |
| ----------------- | ------------------------------------------------------------------ | ------------------ | -------- |
| el                | 容器 querySelector 选择器或 dom                                    | string \| DOM 元素 |          |
| movingBorderColor | 流动边框颜色，默认会在`el`元素设置`css`变量`--moving-border-color` | string             | \#42b883 |
| interval          | 刷新间隔毫秒 0 不自动刷新                                          | number             | 10000    |

## 成员属性

| 属性    | 说明         | 类型            |
| ------- | ------------ | --------------- |
| data    | 一言接口数据 | any             |
| options | 构造器参数   | HitokotoOptions |
| el      | 根元素       | any             |
| word    | 内容         | HTMLDivElement  |
| author  | 出处         | HTMLDivElement  |
| elLike  | 喜欢         | HTMLDivElement  |
| timer   | 定时器       | number          |

## 成员方法

| 方法名     | 说明         |
| ---------- | ------------ |
| init       | 初始化       |
| autoGet    | 开启定时器   |
| getData    | 获取数据     |
| getLikeNum | 获取喜欢数量 |
| like       | 喜欢         |
