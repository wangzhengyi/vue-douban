<template>
  <div>
    <header class="m-header is-bg is-fixed" >
          <div class="m-header-button is-left">
              <a href="javascript:;">
                <!--<img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/>-->
              返回</a>
          </div>
          <h1 class="m-header-title">豆瓣app</h1>
          <div class="m-header-button is-right">
              <a href="javascript:;">分享</a>
          </div>
      </header>
  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="less" scoped>
    .m-header {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 10px;
        background: #fff;
        color: rgb(73, 73, 73);
        border-bottom: 1px solid #eee;
        a {
            color: rgb(73, 73, 73);
        }
        .m-header-button {
            width: 70px;
            align-items: stretch;
            &.is-left {
                text-align: left;
            }
            &.is-right {
                text-align: right;
            }
            .m-icon-img {
                width: 20px;
                height: 20px;
            }
            .margin-right-10 {
                margin-right: 10px;
            }
        }
        .m-header-title {
            flex: 1;
            text-align: center;
            font-size: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        &.is-bg {
            background: #42bd56;
            color: #fff;
            a {
                color: #fff;
            }
            .m-header-title {
                color: #fff;
            }
        }
        &.is-fixed {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 9;
        }
    }
</style>