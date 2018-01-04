import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld.vue')), 'chunkname2')
const HelloFromVux = r => require.ensure([], () => r(require('@/components/HelloFromVux.vue')), 'chunkname3')
const echarts = r => require.ensure([], () => r(require('@/components/echarts.vue')), 'chunknam4')
const http = r => require.ensure([], () => r(require('@/components/http.vue')), 'chunkname5')
const transition = r => require.ensure([], () => r(require('@/components/transition.vue')), 'chunkname6')
// import HelloFromVux from '@/components/HelloFromVux'

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
