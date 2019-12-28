import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsMessages: ['火警1', '设备1已连接', '信息3已连接', '信息3已断开', '信息5已断开', '信息6已断开', '信息7已连接'],
    optData: '' // 地图点请求回来的数据
  },
  mutations: {
    newsInfo (state, news) {
      state.newsMessages = news
    }
  },
  actions: {
  },
  modules: {}
})
