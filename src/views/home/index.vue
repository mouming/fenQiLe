<template>
  <div class="fen-home">
    <router-view></router-view>
    <ul class="mini-nav">
      <router-link
        tag="li"
        to="/market"
      ><i class="iconfont icongouwudai"></i><span>首页</span> </router-link>
      <router-link
        tag="li"
        to="/category"
      ><i class="iconfont iconfenlei"></i><span>分类</span></router-link>
      <router-link
        tag="li"
        to="/lecard"
      ><i class="iconfont iconhuangguan"></i><span>乐卡</span></router-link>
      <router-link
        tag="li"
        to="/creditcard"
      ><i class="iconfont iconxinyongka"></i><span>信用卡</span></router-link>
      <router-link
        tag="li"
        to="/center"
      ><i class="iconfont iconwode"></i><span>我的</span></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="scss">
.fen-home {
  background-color: #f5f7f6;
  height: 100%;
  .mini-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 50px;
    background: #fff;
    display: flex;
    border-top: 1px solid #d9d9d9;
    box-sizing: border-box;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      color: #969696;
      i {
        margin-bottom: 3px;
        font-size: 24px;
      }
      &.router-link-active {
        color: #3b9bff;
      }
    }
  }
}
</style>
