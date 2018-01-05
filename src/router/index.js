import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/page/HelloWorld'
// import HelloWorld from '@/page/HelloWorld'
const HelloWorld = r => require.ensure([], () => r(require('@/page/HelloWorld.vue')), 'chunkname2')
const HelloFromVux = r => require.ensure([], () => r(require('@/page/HelloFromVux.vue')), 'chunkname3')
const echarts = r => require.ensure([], () => r(require('@/page/echarts.vue')), 'chunknam4')
const http = r => require.ensure([], () => r(require('@/page/http.vue')), 'chunkname5')
const transition = r => require.ensure([], () => r(require('@/page/transition.vue')), 'chunkname6')
// import HelloFromVux from '@/page/HelloFromVux'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/http',
      name: 'http',
      meta: {
        keepAlive: true
      },
      component: http
    },
    {
      path: '/transition',
      name: 'transition',
      component: transition
    },
    {
      path: '*',
      redirect: '/HelloWorld'
    }
    // ,
    // {
    //   path: '*', // 其他页面
    //   redirect: '/HelloWorld'
    // },
    // {
    //   path: '',
    //   redirect: '/HelloWorld'
    // }
  ]
})
