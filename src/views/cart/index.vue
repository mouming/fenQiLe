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
      <van-submit-bar :price="3050" button-text="结算" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <!-- <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>-->
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false
    }
  },
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
  }
}
</style>
