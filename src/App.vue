<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="6">
          <div class="left-top">
            <el-menu default-active="2" class="el-menu-vertical-demo tabDiv">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
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
            <p class="time">{{ nowTime | datefilter }}</p>
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
import PAMain from './views/home/PA_Main'
import moment from 'moment'
export default {
  data () {
    return {
      nowTime: new Date() // 初始化时间
    }
  },
  components: {
    PAMain
  },
  filters: {
    datefilter: function (value) {
      return moment(value).format('YYYY年 MM月 Do h:mm:ss dddd')
    }
  },
  mounted () {
    // 定时器实时更新时间数据
    setInterval(() => {
      this.nowTime = new Date()
    }, 1000)
  }

}
</script>
<style lang="less" scoped >
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
        /deep/ .left-top {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 5;
          .el-menu-item-group__title {
            background-color: #1b1919;
            color: #fff;
          }
          .el-submenu{
            // background-color: #148bce;
            .el-submenu__title:hover{
              background-color: transparent
            }
            .el-menu-item {
            width: 100%;
            min-width: 0;
            background-color: #2b2b2b;
            color: #fff;
            &.is-active {
              color:#0094ff;
            }
          }
          .el-submenu__icon-arrow{
            visibility: hidden;
          }
          }
          .el-menu {
            background-color: #3f4142;
            border: none;
          }
          .tabDiv {
            background-color: transparent;
            width: 50%;
            .el-submenu__title {
              color: #fff;
              width: 30%;
            }
          }
          .el-icon-menu {
            width: 22/96rem;
            height: 19/96rem;
            background: rgba(105, 102, 99, 0.5);
            border-radius: 30/96rem;
            color: #fff;
            font-size: 16/96rem;
            text-align: center;
            padding-top: 3/96rem;
          }
        }
      }
      .title {
        font-size: 26/96rem;
        text-align: center;
        line-height: 2;
      }
      .box {
        position: relative;
        width: 100%;
        height: 100%;
        .time {
          margin-top: 20/96rem;
          text-align: center;
          font-size: 12/96rem;
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
