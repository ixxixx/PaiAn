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
    <div class="sidebar">
      <div class="sidebar-title">事件状态</div>
      <div class="sidebar-one notes">
        <div class="yuan"><p>火警</p></div>
      </div>
      <div class="sidebar-two notes">
        <div class="yuan"><p>故障</p></div>
      </div>
      <div class="sidebar-three notes">
        <div class="yuan">
          <p class="mt3">事件<br />比例</p>
        </div>
      </div>
    </div>
    <div class="footer-quan">
      <div id="fire-quan"></div>
      <div class="fire-notes">
        <ul>
          <li>这是数据的展示</li>
          <li>这是数据的展示</li>
          <li>这是数据的展示</li>
          <li>这是数据的展示</li>
        </ul>
      </div>
      <!-- 事件柱状图 -->
      <div id="event-zzt"></div>
    </div>
  </div>
</template>

<script>
import './china.js'
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
    },
    initChinaMap () {
      this.myChart = this.echarts.init(document.querySelector('#china-map'))
      let option = {
        // backgroundColor: '#333',
        geo: {
          map: 'china',
          roam: true,
          zoom: 1,
          aspectScale: 0.75, // 长宽比
          itemStyle: {
            normal: {
              areaColor: {
                colorStops: [{
                  offset: 0,
                  color: '#039ee1'
                }, {
                  offset: 1,
                  color: '#2e6fb1'
                }],
                borderColor: '#6ed6f7'
              }
            },
            emphasis: {
              areaColor: '#38a2d9'
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
            // emphasis: {
            //     color: '#fff',
            // }
          }
        },
        series: [{
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [{
            'name': '昆明',
            'value': [102.73333, 25.05000, 199]
          }

          ],
          symbolSize: 10,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            color: '#fff',
            period: 8,
            scale: 3
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              padding: [0, 0, 0, 8],
              show: true,
              fontSize: 14
            }
          },
          itemStyle: {
            normal: {
              color: 'red',
              shadowBlur: 10
            }
          },
          zlevel: 1
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
    this.initChinaMap()
  }
}
</script>
<style lang="less" scoped>
.eq-main {
  div {
    box-sizing: border-box;
  }
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
    top: 10/96rem;
    left: 10/96rem;
    color: #fff;
    p {
      font-size: 14/96rem;
    }
    li {
      float: left;
      margin-top: 10/96rem;
      margin-right: 14/96rem;
      font-size: 8/96rem;
    }
  }
  .nav {
    position: absolute;
    top: 10/96rem;
    right: 10/96rem;
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
        font-size: 8/96rem;
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
  .sidebar {
    background-color: transparent;
    position: absolute;
    top: 35%;
    right: 4%;
    width: 170/96rem;
    height: 152/96rem;
    .sidebar-title {
      width: 100%;
      height: 20/96rem;
      font-size: 14/96rem;
      color: #fff;
      padding-left: 18/96rem;
      background-color: #ff00f7;
    }
    .notes {
      width: 100%;
      height: 44/96rem;
      padding-top: 2/96rem;
      background: rgba(209, 161, 106, 0.5)
    }
    .yuan {
      margin-left: 6/96rem;
      margin-right: 13/96rem;
      width: 40/96rem;
      height: 40/96rem;
      border: 1/96rem dashed #fff;
      border-radius: 50%;
      p {
        margin: 0 auto;
        color: #fff;
        font-size: 10/96rem;
        text-align: center;
        margin-top: 12/96rem;
      }
    }
    .sidebar-two {
      background: rgba(241, 99, 103, 0.5);
    }
    .sidebar-three {
      background: rgba(66, 32, 145, 0.3);
      .mt3 {
        margin-top: 6/96rem;
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
      ul {
        width: 100%;
        height: 100%;
        li {
          font-size: 8/96rem;
          color: #fff;
          line-height: 2;
          overflow: hidden;
        }
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
