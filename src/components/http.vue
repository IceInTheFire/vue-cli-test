<template>
  <div>
    <div v-for="(data,index) in list" class="list">
      <span class="title">{{index}}</span>
      <span class="title">姓名：</span>
      <span>{{data.uname}}</span>
      <span class="title right">UID：</span>
      <span>{{data.uid}}</span>
    </div>
    <router-link to="/">首页</router-link>
  </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
  .list{
    font-size:14px;
    height: 4rem;
    line-height: 2rem;
    .title{
      color:#4B4B4B;
      &.right{
        float: right;
      }
    }
  }
</style>
<script type="text/ecmascript-6">
//  import core from 'core'
  import scroll from '../core/scroll.js'
  import api from '../http/api.js'
  export default{
    data () {
      return {
        list: [],
        scrollConfig: {
          title: 'http',
          backTop: false
        },
        page: 1,
        loading: false,
        end: false
      }
    },
    created () {

    },
    mounted () {
      this.scrollConfig.title = this.$route.path.split('/')[1]
      this.postshow()
    },
    components: {},
    beforeDestroy () {
      scroll.closeScroll()
    },
    destroyed () {
    },
    methods: {
      getshow () {
        this.$http.get(api.conn, {
          params: {}
        }).then((res) => {
          console.log('test', res)
        }, (error) => {
          console.log('error', error)
        }).catch((catch2) => {
          console.log('catch', catch2)
        })
      },
      postshow () {
        if (this.loading || this.end) {
          return
        }
        this.loading = true
        this.$http.post(api.conn, {
          page: this.page,
          limit: 10
        }).then((res) => {
          if (res.page >= res.totalPage) {
            this.end = true
          }
          res.dataList.forEach((value) => {
            this.list.push(value)
          })
          if (this.page === 1) {
            scroll.setScroll(this, this.scrollConfig, this.postshow)
          }
          this.page ++
          this.loading = false
        }, (error) => {
          console.log('error2', error)
        }).catch((catch2) => {
          console.log('catch2', catch2)
        })
      }
    }
  }
</script>
