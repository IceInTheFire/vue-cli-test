<template>
    <div>
        <h1>移动端边框大全</h1>
        <div class="test test1">all    => top right bottom left</div>
        <div class="test test2">all    => top right bottom left</div>
        <div class="test test3">top</div>
        <div class="test test4">top</div>
        <div class="test test5">bottom</div>
        <div class="test test6">bottom</div>
        <div class="test test7">left</div>
        <div class="test test8">left</div>
        <div class="test test9">right</div>
        <div class="test test10">right</div>
        <div>---我是一条华丽的分割线 下面是两个边框---</div>
        <div class="test double1">top right</div>
        <div class="test double2">top right</div>
        <div class="test double3">top bottom</div>
        <div class="test double4">top bottom</div>
        <div class="test double5">top left</div>
        <div class="test double6">top left</div>
        <div class="test double7">right bottom</div>
        <div class="test double8">right bottom</div>
        <div class="test double9">right left</div>
        <div class="test double10">right left</div>
        <div class="test double11">bottom left</div>
        <div class="test double12">bottom left</div>
        <div>---我是一条华丽的分割线 下面是三个边框---</div>
        <div class="test third7">top right bottom</div>
        <div class="test double8">top right bottom</div>
        <div class="test double9">top right left</div>
        <div class="test double10">top right left</div>
        <div class="test double11">right bottom left</div>
        <div class="test double12">right bottom left</div>

    </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
    @import '../less/border1px';
    .test{
        width: 100%;
        height: 1rem;
        margin-top: 0.5rem;
        &.test1{
            border:1px solid red;
        }
        &.test2{
            .border-1px(red);
        }
        &.test3{
            border-top:1px solid red;
        }
        &.test4{
            .border-1px-top(red);
        }
        &.test5{
            border-bottom:1px solid red;
        }
        &.test6{
            .border-1px-bottom(red);
        }
        &.test7{
            border-left:1px solid red;
        }
        &.test8{
            .border-1px-left(red);
        }
        &.test9{
            border-right:1px solid red;
        }
        &.test10{
            .border-1px-right(red);
        }
    }

</style>
<script type="text/ecmascript-6">
//  import core from "core";
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    created () {

    },
    mounted () {
    },
    components: {},
    beforeDestroy () {
    },
    destroyed () {
    },
    methods: {},
    activated () {

    },
    deactivated () {
    }
  }
</script>
