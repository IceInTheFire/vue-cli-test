<template>
  <div>
    <div v-for="(data,index) in list" class="list">
      <span class="title">{{index}}</span>
      <span class="title">姓名：</span>
      <span>{{data.uname}}</span>
      <span class="title right">UID：</span>
      <span>{{data.uid}}</span>
    </div>
    <h-pull-down-load :load="load"></h-pull-down-load>
    <router-link to="/">首页</router-link>
  </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
  .list{
    font-size:14px;
    height: 4rem;
    line-height: 4rem;
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
        page: 1,
        load: {
          loading: false,
          noMore: false
        },
        scrollConfig: {
          title: 'http',
          backTop: false
        }
      }
    },
    created () {

    },
    mounted () {
      this.postshow()
    },
    components: {},
    beforeDestroy () {

    },
    destroyed () {
    },
    activated () {
      scroll.setScroll(this, this.scrollConfig, this.postshow)
    },
    deactivated () {
      scroll.closeScroll()
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
        if (this.load.loading || this.load.noMore) {
          return
        }
        this.load.loading = true
        this.$http.post(api.conn, {
          page: this.page,
          limit: 10
        }).then((res) => {
          if (res.page >= res.totalPage) {
            this.load.noMore = true
          }
          res.dataList.forEach((value) => {
            this.list.push(value)
          })
          if (this.page === 1) {
            scroll.setScroll(this, this.scrollConfig, this.postshow)
          }
          this.page ++
          this.load.loading = false
        }, (error) => {
          console.log('error2', error)
          this.load.loading = false
        }).catch((catch2) => {
          console.log('catch2', catch2)
          this.load.loading = false
        })
      }
    }
  }
</script>
