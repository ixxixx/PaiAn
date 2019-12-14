<template>
  <div class="eq-main">
    <div id="china-map"></div>
    <div class="total-title">
      <p>设备类型分布</p>
      <ul>
        <li>全部</li>
        <li>设备类型</li>
        <li>电器安全</li>
        <li>燃气探测警报</li>
        <li>火灾烟雾警报</li>
        <li>物联网关</li>
      </ul>
    </div>
    <div class="nav">
      <ul>
        <li>
          <i></i>
          <p>电器安全</p>
        </li>
        <li>
          <i></i>
          <p>烟感</p>
        </li>
        <li>
          <i></i>
          <p>燃气</p>
        </li>
        <li>
          <i></i>
          <p>物联网网关</p>
        </li>
        <li>
          <i></i>
          <p>LoRa</p>
        </li>
        <li>
          <i></i>
          <p>NB</p>
        </li>
      </ul>
    </div>
    <div class="sidebar"></div>
    <div class="footer-quan">
      <div id="fire-quan"></div>
      <div class="fire-notes">
          <ul>
              <li>这是数据的展示这是数据的展示这是数据的展示</li>
              <li>这是数据的展示这是数据的展示这是数据的展示</li>
              <li>这是数据的展示这是数据的展示这是数据的展示</li>
              <li>这是数据的展示这是数据的展示这是数据的展示</li>
          </ul>
      </div>
      <!-- 事件柱状图 -->
      <div id="event-zzt"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myChart: null
    }
  },
  methods: {
    initFireEcharts () {
      // 初始化
      this.myChart = this.echarts.init(document.querySelector('#fire-quan'))
      let option = { tooltip: {
        show: false
      },
      series: [{
        type: 'pie',
        radius: ['50%', '80%'],
        label: {
          normal: {
            position: 'center'
          }
        },
        hoverAnimation: false,
        data: [{
          value: 50,
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0.05,
                colorStops: [{
                  offset: 0,
                  color: '#f87d29' // 0% 处的颜色
                }, {
                  offset: 0.4,
                  color: '#f6f511' // 100% 处的颜色
                }, {
                  offset: 0.1,
                  color: '#f6f511' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#f87d29' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },

        {
          value: 50,
          name: '占位',
          label: {
            normal: {
              formatter: '火警',
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            }
          },
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'red' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'red' // 100% 处的颜色
                }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          }
        }]
      }]
      }
      this.myChart.setOption(option)
    },
    // 事件比例
    initEventEcharts () {
      this.myChart = this.echarts.init(document.querySelector('#event-zzt'))
      let colorArray = [
        {
          top: '#4826ac', // 红
          bottom: '#e60aee'
        }, {
          top: '#033899', // 橙
          bottom: '#6f22c8'
        },
        {
          top: '#e4f54d', // 黄
          bottom: '#02fdf6'
        }, {
          top: '#1ff5fc', // 蓝
          bottom: '#0094ff'
        }
      ]
      let option = {
        title: {
          text: '事件比例',
          x: '38%',
          y: '12%',
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 20
          },
          subtextStyle: {
            color: '#fff',
            fontSize: 11
          }
        },
        // backgroundColor: '#0E2A43',
        tooltip: {
          show: true,
          formatter: '{b}:{c}'
        },
        grid: {
          left: '5%',
          top: '20%',
          right: '15%',
          bottom: '1%',
          containLabel: true
        },

        xAxis: {
          type: 'value',
          show: false,
          position: 'top',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [{
          type: 'category',
          axisTick: {
            show: false,
            alignWithLabel: false,
            length: 5

          },
          'splitLine': { // 网格线
            'show': false
          },
          inverse: 'true', // 排序
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          data: ['第一事件', '第二事件', '第三事件', '第四事件']
        }

        ],
        series: [{
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: function (params) {
                let num = colorArray.length
                return {
                  type: 'linear',
                  colorStops: [{
                    offset: 0,
                    color: colorArray[params.dataIndex % num].bottom
                  }, {
                    offset: 1,
                    color: colorArray[params.dataIndex % num].top
                  }, {
                    offset: 0,
                    color: colorArray[params.dataIndex % num].bottom
                  }, {
                    offset: 1,
                    color: colorArray[params.dataIndex % num].top
                  }, {
                    offset: 0,
                    color: colorArray[params.dataIndex % num].bottom
                  }, {
                    offset: 1,
                    color: colorArray[params.dataIndex % num].top
                  }, {
                    offset: 0,
                    color: colorArray[params.dataIndex % num].bottom
                  }, {
                    offset: 1,
                    color: colorArray[params.dataIndex % num].top
                  }]
                  // globalCoord: false
                }
              },
              borderWidth: 0,
              borderColor: '#333'
            }
          },
          barGap: '0%',
          barCategoryGap: '65%',
          data: [9900, 7723, 7900, 9821]
        }

        ]
      }
      this.myChart.setOption(option)
    }
  },
  // 页面打开时初始化 echart
  mounted () {
    this.initFireEcharts()
    this.initEventEcharts()
  }
}
</script>
<style lang="less" scoped>
.eq-main {
  width: 100%;
  height: 100%;
  position: relative;
  #china-map {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  .total-title {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #fff;
    p {
      font-size: 24px;
    }
    li {
      float: left;
      margin-top: 10px;
      margin-right: 20px;
    }
  }
  .nav {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 35%;
    height: 27%;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 33.33%;
        height: 50%;
        text-align: center;
        color: #fff;
        font-size: 16px;
        i {
          display: block;
          margin: 10% auto;
          width: 60%;
          height: 60%;
          background-color: red;
          border-radius: 50%;
        }
      }
    }
  }
  .footer-quan {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    background-color: transparent;
    #fire-quan {
      position: absolute;
      top: 5%;
      left: 8%;
      width: 15%;
      height: 40%;
      background-color: transparent;
    }
    .fire-notes {
        position: absolute;
        bottom: 0;
        width: 30%;
        height: 55%;
        background-color: transparent;
        li {
            font-size: 15px;
            color: #fff;
            line-height: 2;
        }
    }
    #event-zzt {
        position: absolute;
        width: 30%;
        height: 100%;
        right: 0;
        bottom: 0;
        background-color: transparent;
    }
  }
}
</style>
