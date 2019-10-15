<template>
  <div class="fen-cart">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container">asa</div>
    <div class="foot">
      <label class="box">
        <input type="checkbox" />
        <span></span>
      </label>
      <div class="foot-left">合计:￥2008</div>
      <div class="foot-right">结算</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      history.back()
    },
    onClickRight() {}
  }
}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixins.scss';
.fen-cart {
  .container {
    background: #fff;
  }
  .container {
    display: flex;
    flex: 1;
  }
  .foot {
    @include border-top;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .box {
      position: relative;
      display: block;
      width: 15px;
      height: 15px;
      input:checked ~ span {
        // background: #407aff;
        background: url('./gou.jpg');
        background-size: 100% 100%;
      }
      input {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
      // check-box {
      //   width: 0.48rem;
      //   height: 0.48rem;
      //   border-style: solid;
      //   border-color: #e3e4e8;
      //   border-width: 1px;
      //   background-color: #fff;
      //   border-radius: 0.48rem;
      //   margin-left: 10px;
      // }
      span {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: block;
        background: #e3e4e8;
        line-height: 50px;
        // background: url('./gou.jpg');
      }
    }

    .foot-left {
      flex: 1;
      line-height: 50px;
      font-size: 12px;
      margin-left: 0px;
    }
    .foot-right {
      background: #407aff;
      color: #fff;
      width: 110px;
      height: 50px;
      font-size: 14px;
      text-align: center;
      line-height: 50px;
      right: 0;
    }
  }
}
</style>
