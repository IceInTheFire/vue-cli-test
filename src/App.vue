<template>
  <div id="app">
    <transition :name="transitionName">
    <!--<transition name="slide-right">-->
      <router-view class="router"></router-view>
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
//      scroll.setScroll(this, this.scrollConfig, this.postshow)
      this.transitionName = this.transitionName === 'slide-left' ? 'slide-right' : 'slide-left'
      this.scrollTop = this.$store.state.scrollTop[to.path.split('/')[1]]
      console.log(this.$store)
      console.log(this.scrollTop)
      console.log('看看是多少')
      if (this.scrollTop) {
        console.log(this.scrollTop)
      } else {
        console.log('有延迟啊')
      }
      if (document.documentElement && document.documentElement.scrollTop) {
        document.documentElement.scrollTop = this.scrollTop || 0
      } else if (document.body) {
        document.body.scrollTop = this.scrollTop || 0
      }
      if (to.path === '/echarts') {
        this.transitionName = 'none'
      }
      if (this.first) {
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
