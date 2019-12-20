<template>
  <el-row>
    <el-col :span="4">
      <div class="box">
        <TotalDevice class="fix-ge"></TotalDevice>
        <DeviceReported class="fix-ge"></DeviceReported>
        <News class="fix-ge"></News>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="box">
        <DeviceDistribution></DeviceDistribution>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="box">
        <HiddenDanger class="fix-ge"></HiddenDanger>
        <HiddenDangerLevel class="fix-ge"></HiddenDangerLevel>
        <Patrol class="fix-ge"></Patrol>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import TotalDevice from './components/TotalDevice'
import DeviceReported from './components/DeviceReported'
import HiddenDanger from './components/Hidden_Danger'
import HiddenDangerLevel from './components/HiddenDangerLevel'
import News from './components/News'
import Patrol from './components/Patrol'
import DeviceDistribution from './components/DeviceDistribution'
export default {
  components: {
    TotalDevice, // 设备总数
    DeviceReported, // 设备报告
    HiddenDanger, // 隐患
    HiddenDangerLevel, // 隐患级别
    News, // 事件
    Patrol, // 异常
    DeviceDistribution // 设备分布
  },
  mounted () {
    // window.onresize = () => {
    //   this.myChart1.resize()
    //   this.myChart2.resize()
    //   this.myChart3.resize()
    // }
  }
}
</script>
<style lang="less" scoped>
.el-row {
  width: 100%;
  height: 100%;
  .el-col {
    height: 100%;
    .box {
      height: 96%;
      .fix-ge {
        width: 90%;
        height: 30.33%;
        margin: 9% auto 0;
        box-sizing: border-box;
        border: 1.5/96rem solid #289fe3;
        box-shadow: 0px 0px 5/96rem #1176a7 inset, 0px 0px 5/96rem #27a9eb;
      }
    }
  }
}
</style>
