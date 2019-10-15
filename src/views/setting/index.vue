<template>
  <div class="fen-setting">
    <!-- 导航栏 -->
    <van-nav-bar
      title="设置"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
      <li>
        <p>个人资料</p>
        <i class="iconfont iconyoujiantou"></i>
      </li>
      <li>
        <p>关于分期乐</p>
        <i class="iconfont iconyoujiantou"></i>
      </li>
      <li
        class="quit"
        @click="quitLogin"
      >退出当前账号</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'setting',
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    quitLogin () {
      // 将user状态库的数据清空
    }
  }
}
</script>
<style lang="scss">
.fen-setting {
  background-color: #f5f7f6;
  height: 100%;
  ul {
    li {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      height: 56px;
      line-height: 56px;
      padding: 0 12px;
      margin-top: 10px;
      &.quit {
        justify-content: center;
        font-weight: bold;
      }
    }
  }
}
</style>
