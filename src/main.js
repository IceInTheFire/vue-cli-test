// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/rem/rem.js'
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import router from './router/index.js'
// import axios from 'axios'
import axios from './http/config.js'
import components from './components/'  // 加载公共组件
import Vuex from 'vuex'
import storeInfo from './store/'

import wx from 'weixin-js-sdk'



//  想看引入第三方插件效果，在路由里去掉lib注释  个人极度不建议，最好在html里引入最好。
// import $ from 'jquery'  // webpack.base.conf.js
// import 'jquery'
// window.$ = window.jQuery = $
// import 'imports?jQuery=jquery!bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.min'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js'
// import './lib/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.fr.js'
// import './lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'
// console.log('$')
// console.log($)

// 引入mockjs

// require('./mock.js')
// import './mock.js'

window.wx = wx

Vue.prototype.$http = axios
// Vue.prototype.$echarts = echarts

FastClick.attach(document.body)

Vue.config.productionTip = false

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())  // 首字母大写
  Vue.component(`h${name}`, components[key])
})

Vue.use(Vuex)

var store = new Vuex.Store(storeInfo)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})   // 添加loading
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})    // 取消loading
})
