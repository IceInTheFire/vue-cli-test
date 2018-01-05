<template>
    <div class="pull-down-loading">
        <div class="loader-inner ball-pulse" v-show="load.loading">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="no-more" v-show="load.noMore">没有更多啦</div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
    .pull-down-loading {
        min-height: 1.8rem;
        width: 100%;
        /*background: #fff;*/

    }

    @-webkit-keyframes scale {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }

        45% {
            -webkit-transform: scale(0.1);
            transform: scale(0.1);
            opacity: 0.7;
        }

        80% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes scale {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }

        45% {
            -webkit-transform: scale(0.1);
            transform: scale(0.1);
            opacity: 0.7;
        }

        80% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    .ball-pulse > div:nth-child(0) {
        -webkit-animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08);
        animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    .ball-pulse > div:nth-child(1) {
        -webkit-animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
        animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    .ball-pulse > div:nth-child(2) {
        -webkit-animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
        animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    .ball-pulse > div:nth-child(3) {
        -webkit-animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
        animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
    }

    .ball-pulse {
        text-align: center;
        /*padding: .5rem 0 1rem;*/
        padding: 1.5rem 0 1.5rem;
        height: 4rem;
        /*height: 1rem;*/
        /*background: #fff;*/
    }

    .ball-pulse > div {
        background-color: #ccc;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
    }

    .no-more {
        width: 100%;
        /*text-align: center;*/
        text-align: left;
        line-height: .8rem;
        font-size: .8rem;
        padding: 1.6rem;
        height:4rem;
        color: #878787;
    }
</style>
<script>
  export default{
    props: ['load'],
    data () {
      return {}
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
    methods: {}
  }
</script>
