<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="6">
          <div class="left-top">
            <p class="time">2019-12-06 15:00:00 星期二</p>
            <p class="runking">设备总数排行</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="title">
            智慧消防 "米若" 云服务平台
          </div>
        </el-col>
        <el-col :span="6">
          <div class="box">
            <p class="lately-left">最近30天隐患数量</p>
            <p class="lately-right">最近30天隐患数量趋势</p>
          </div>
        </el-col>
      </el-row>
    </header>
    <main>
      <PAMain></PAMain>
    </main>
  </div>
</template>
<script>
import PAMain from './views/PA_Main'
export default {
  components: {
    PAMain
  }
}
</script>
<style lang="less" scoped>
#app {
  background: url("./assets/demo.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  header {
    background-color: transparent;
    width: 100%;
    height: 10%;
    .el-row {
      width: 100%;
      height: 100%;
      .el-col {
        height: 100%;
        color: #fff;
        .left-top {
          width: 100%;
          height: 100%;
          position: relative;
          .time {
            margin-top: 30px;
            text-align: center;
            font-size: 24px;
          }
          .runking {
            position: absolute;
            left: 10%;
            bottom: 15%;
            font-size: 18px;
          }
        }

        .title {
          font-size: 45px;
          text-align: center;
          line-height: 150%;
        }
        .box {
          position: relative;
          width: 100%;
          height: 100%;
          .lately-left {
            position: absolute;
            font-size: 20px;
            left: 25%;
            bottom: 0;
          }
          .lately-right {
            position: absolute;
            right: 10%;
            bottom: 5%;
            font-size: 12px;
          }
        }
      }
    }
  }
  main {
    background-color: transparent;
    width: 100%;
    height: 90%;
  }
}
</style>
