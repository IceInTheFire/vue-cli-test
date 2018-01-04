// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import router from './router/index.js'
// import axios from 'axios'
import axios from './http/config.js'

import Vuex from 'vuex'
import storeInfo from './store/'
import wx from 'weixin-js-sdk'
window.wx = wx

// 引入mockjs

// require('./mock.js')
// import './mock.js'

Vue.prototype.$http = axios
// Vue.prototype.$echarts = echarts

FastClick.attach(document.body)

Vue.config.productionTip = false

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
