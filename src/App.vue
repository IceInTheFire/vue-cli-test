<template>
  <div id="app">
    <!--<transition :name="transitionName">-->
    <!--<transition name="slide-right">-->
      <!--<keep-alive>-->
        <!--<router-view class="router"></router-view>-->
      <!--</keep-alive>-->

      <!--<keep-alive v-if="$route.meta && $route.meta.keepAlive">   -->
      <!--不能像上面这样设置v-if 因为会清除之前keep-alive过的数据-->
    <keep-alive>
      <router-view class="router" v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition :name="transitionName"><!--不能包含两个router-view-->
      <router-view class="router" v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
    </transition>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import Loading from 'vux/src/components/loading'
import { mapState } from 'vuex'
export default {
  components: {
    Loading
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionName: 'slide-right',
      first: true,
      scrollTop: 0
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading.isLoading
    })
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      console.log('aaa')
      console.log(to.path)
      console.log(from.path)
//      const toDepth = to.path.split('/').length
//      const fromDepth = from.path.split('/').length
//      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      this.transitionName = this.transitionName === 'slide-left' ? 'slide-right' : 'slide-left'
//      if (to.path === '/echarts' || (to.path === '/http' && this.$store.state.scrollTop[to.path.split('/')[1]])) {
      if (to.path === '/echarts' || to.path === '/http' || from.path === '/http') {
        this.transitionName = 'none'
      }
      if (this.first) {   // 第一次加载不需要动画
        console.log('true')
        this.transitionName = 'none'
        this.first = false
      }
      console.log(this.transitionName)
    }
  }
}
</script>

<style lang="less">
/*@import '~vux/src/styles/reset.less';*/

/*body {*/
  /*background-color: #fbf9fe;*/
/*}*/
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: all 1s;
}

.slide-left-enter, .slide-left-leave-to, .slide-right-enter, .slide-right-leave-to {
  opacity: 0;
}

.slide-right-enter {
  transform: translateX(+100%);
}

.slide-right-leave-active {
  transform: translateX(-100%);
}
.slide-left-enter-to, .slide-right-enter-to{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}

.slide-left-enter {
  transform: translateX(-100%);
}

.slide-left-leave-active {
  transform: translateX(+100%);
}
</style>
