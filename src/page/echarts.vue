<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <br>
    <router-link to="/">回退</router-link>
  </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
</style>
<script type="text/ecmascript-6">
  //    import core from "core";
  import echarts from 'echarts'
  export default{
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {

    },
    mounted () {
      this.drawLine()
//      import echarts from 'echarts'
//      console.log(echarts)
    },
    components: {},
    beforeDestroy () {
    },
    destroyed () {
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      }
    }
  }
</script>
