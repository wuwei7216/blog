<template>
  <div id="map" style="width: 100%"></div>
  <!-- <div ref="position" class="position"></div> -->
</template>

<script lang="ts" setup>
// import './style.css';
import 'ol/ol.css';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ.js';
import View from 'ol/View.js';

import { onMounted } from 'vue';

onMounted(() => {
  const baiduLayer = new TileLayer({
    source: new XYZ({
      url: 'https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
    }),
  });

  // 创建OpenLayers地图
  const map = new Map({
    target: 'map',  // 地图挂载的 DOM 元素 ID
    layers: [
      baiduLayer, // 添加百度地图瓦片层
    ],
    view: new View({
      center: [116.404, 39.915],  // 初始位置，这里是北京的经纬度
      projection: 'EPSG:4326',
      zoom: 10,  // 初始缩放级别
    }),
  });
})

</script>

<style lang="scss" scoped>
.btns {
  padding: 10px 0;
}

#map {
  // position: absolute;
  // top: 0;
  // bottom: 0;
  width: 100%;
  height: 600px;
}

// .map-example {
//   width: 100%;
//   height: 80vh;
// }

// .position {
//   position: absolute;
//   top: -50px;
//   right: 0;
//   white-space: nowrap;
// }</style>
