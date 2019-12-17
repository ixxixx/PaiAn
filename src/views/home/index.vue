
<template>
    <div class="mapbox">
        <el-button v-popover:popover4>广东省</el-button>
        <el-popover
  ref="popover4"
  placement="right"
  width="1000"
  trigger="click">
      <baidu-map
        :center="center"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
        style="height:800px"
        @ready="handler"
        @click="getClickInfo"
      >
        <!-- 必须给容器指高度，不然地图将显示在一个高度为0的容器中，看不到 -->
        <!-- 右上角比例尺切换 -->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!-- 定位 -->
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
        ></bm-geolocation>
        <!-- 左上角城市切换 -->
        <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      </baidu-map>
      <!-- 因为我采用的是全局注册，所以不用再在该页面上注册components -->
      </el-popover>
    </div>
</template>
<script>
export default {
  name: 'mapbox',
  data () {
    return {
      center: { lng: 0, lat: 0 }, // 经纬度
      zoom: 8 // 地图展示级别
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 108.934564
      this.center.lat = 26.16456
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
}
</script>
