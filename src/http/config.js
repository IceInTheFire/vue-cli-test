import axios from 'axios'
import Qs from 'qs'

// 超时时间
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://www.yueqingfang.cn/markdown/php'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求时的拦截
axios.interceptors.request.use(function (config) {
  // 发送请求之前做一些处理
  // console.log('请求时')
  // console.log(config)
  // config.params.token = 'test'
  // console.log(config)
  if (config.method === 'post') {
    config.data.token = 'post test'
    config.data = Qs.stringify(config.data)
  } else if (config.method === 'get') {
    config.params.token = 'get test'
  }
  return config
}, function (error) {
  // 当请求异常时做一些处理
  console.log('请求异常')
  return Promise.reject(error)
})

// 响应时拦截
axios.interceptors.response.use(function (response) {
  // 返回响应时做一些处理
  // console.log('响应时')
  if (response.data.code === 'success') {
    return response.data.model  // 只有code 200进入
  } else {
    return Promise.reject(response.data.msg)
  }
}, function (error) {
  // console.log('响应异常')
  // 当响应异常时做一些处理
  console.log('相应异常')
  console.log(error)
  return Promise.reject(error)
})

export default axios
