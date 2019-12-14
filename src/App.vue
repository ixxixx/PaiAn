<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="6">
          <div class="left-top">
            <p class="time">{{ nowTime | datefilter }}</p>
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
import moment from 'moment'
export default {
  components: {
    PAMain
  },
  filters: {
    datefilter: function (value) {
      return moment(value).format('YYYY年 MM月 Do h:mm:ss dddd')
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  background: url("./assets/dome3.jpg");
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
            margin-top: 20/96rem;
            text-align: center;
            font-size: 12/96rem;
          }
          .runking {
            position: absolute;
            left: 10%;
            bottom: 15%;
            font-size: 10/96rem;
          }
        }

        .title {
          font-size: 30/96rem;
          text-align: center;
          line-height: 2;
        }
        .box {
          position: relative;
          width: 100%;
          height: 100%;
          .lately-left {
            position: absolute;
            font-size: 10/96rem;
            left: 25%;
            bottom: 10/96rem;
          }
          .lately-right {
            position: absolute;
            right: 10%;
            bottom: -5/96rem;
            font-size: 8/96rem;
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
