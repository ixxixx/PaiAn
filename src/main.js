import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element ui框架
import ElementUI from 'element-ui'
// 导入element ui样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import '@/styles/index.less'
// 导入 echarts
import echarts from 'echarts'
// 在 src\main.js 中引入 lib-flexible
import 'lib-flexible'
Vue.prototype.echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
