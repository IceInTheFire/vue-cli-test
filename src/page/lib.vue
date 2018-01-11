<template>
    <div>
        <div class="btn btn-default">默认按钮</div>
        <br>
        <span class="color">  第三方插件</span>

        <div id="time">
            <span class="select-box-title">选择发送时间：</span>
            <input class="form-control select-box-input"  v-model="time" type="text"
                   id="messageSendTime">
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
    @import "../less/config";
    .color{
        color:@color-active;
    }
</style>
<script type="text/ecmascript-6">
//  import core from "core";
  import $ from 'jquery'  // webpack.base.conf.js   不然下面bootstrap.js报错  因为bootstrap.js依赖jquery
  import '../../node_modules/bootstrap/dist/js/bootstrap.min'
  import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import '../lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js'
  import '../lib/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.fr.js'
  import '../lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'
  export default{
    data () {
      return {
        msg: 'hello vue',
        time: ''
      }
    },
    created () {

    },
    mounted () {
      this.dateDefind();
    },
    components: {},
    beforeDestroy () {
    },
    destroyed () {
    },
    methods: {
      dateDefind () {
        var d, s;
        var self = this;
        d = new Date();
        s = d.getFullYear() + "-";             //取年份
        s = s + (d.getMonth() + 1) + "-";//取月份
        s += d.getDate() + " ";         //取日期
        s += d.getHours() + ":";       //取小时
        s += d.getMinutes() + ":";    //取分
        s += d.getSeconds();         //取秒
        self.time = s;
        //初始化
        $('#messageSendTime').datetimepicker({
          startDate: s,
          minView: "hour", //选择日期后，不会再跳转去选择时分秒
//          language: 'zh-CN',
          language: 'fr',
          format: 'yyyy-mm-dd hh:ii:ss',
          todayBtn: 1,
          autoclose: 1
        })
        //当选择器隐藏时，讲选择框只赋值给data里面的time
        $('#messageSendTime').datetimepicker()
          .on('hide', function (ev) {
            var value = $("#messageSendTime").val();
            self.time = value;
          })
      }
    },
    activated () {

    },
    deactivated () {
    }
  }
</script>
