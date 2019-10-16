<template>
  <div class="fen-proDetail">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      title="商品详情"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <i
        class="iconfont iconshouye"
        slot="right"
      ></i>
    </van-nav-bar>
    <div class="detail-main">
      <!-- 轮播图 -->
      <div class="detail-main-banner">
        <van-swipe
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <!-- 商品抢购时间 -->
      <div class="detail-main-sale">
        <p>乐疯抢进行中</p>
        <p>10月23日 00:00结束</p>
      </div>
      <!-- 商品价格 -->
      <div class="detail-main-price">
        <div class="left">
          <h3><span>￥</span>888</h3>
          <p>￥2299</p>
        </div>
        <div class="right">
          <h3><span>￥</span>36.55</h3>
          <p>x36期</p>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="detail-main-info">
        <h3>【12期免息 正品】Beats Solo3 Wireless蓝牙无线头戴式运动魔音 华为 小米 苹果 通用 耳机 手机 耳麦 游</h3>
        <p>【10.18六周年庆，数码家电全场12期免息！数码领券立减150元，相机满8000减400元，家电满3999减300】</p>
      </div>
      <!-- 商品已选择 -->
      <div class="detail-main-list">
        <div class="selected">
          <span>已选</span>
          <p> 米老鼠90周年纪念款限量版 </p>
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="list-other">
          <span>送至</span>
          <p> 广东省 广州市 番禺区 </p>
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="list-other">
          <span>服务</span>
          <p> 正品保证 | 如实描述 | 7天退货 | 15天换货 </p>
          <span class="iconfont iconyoujiantou"></span>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="detail-main-intro">
        <van-tabs
          @click="handleIntro"
          sticky
        >
          <van-tab
            v-for="index in 3"
            :title="'选项 ' + index"
            :key="index"
          >
            内容 {{ index }}
          </van-tab>
        </van-tabs>
      </div>
      <!-- 商品导航栏 -->
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
        />
        <van-goods-action-button
          color="#be99ff"
          type="warning"
          text="加入购物车"
        />
        <van-goods-action-button
          color="#7232dd"
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload)
export default {
  data () {
    return {
      images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
      active: 1
    }
  },
  methods: {
    onClickLeft () {

    },
    onClickRight () {

    },
    handleIntro (name, title) {
      console.log(name, title)
    }

  }
}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixins.scss';
.fen-proDetail {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f7f6;
  .detail-main {
    @include clear-bar;
    flex: 1;
    margin-bottom: 50px;
    overflow-y: auto;
    &-banner {
      height: 375px;
      background-color: #fff;
    }
    &-sale {
      display: flex;
      background-image: url('https://cimg1.fenqile.com/product4/M00/B8/BB/gsMHAF0S4UaAGcdoAAIDizMWHHo701.png');
      justify-content: space-between;
      align-items: center;
      height: 44px;
      padding: 0 16px;
      background-color: #fff;

      p {
        font-size: 14px;
        color: #fff;
      }
    }
    &-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px 20px;
      background-color: #fff;

      > div {
        display: flex;
        padding: 13px 0;
        align-items: flex-end;
        h3 {
          color: #ff498d;
          font-size: 18px;
          span {
            font-size: 12px;
          }
        }
        p {
          color: #b9bdc6;
          font-size: 14px;
          line-height: 14px;
        }
        &.left {
          h3 {
            font-size: 28px;
            display: flex;
            span {
              font-size: 16px;
              align-self: flex-start;
            }
          }
        }
      }
    }
    &-info {
      padding: 0 16px;
      background-color: #fff;
      margin-bottom: 10px;
      overflow: hidden;
      h3 {
        font-size: 15px;
        color: #050c1c;
        line-height: 20px;
        font-weight: 600;
      }
      p {
        font-size: 12px;
        color: #abadb2;
        line-height: 20px;
        margin: 10px 0;
      }
    }
    &-list {
      padding: 0 16px;
      background-color: #fff;
      margin-bottom: 10px;
      div {
        height: 56px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ededee;
        color: #abadb2;
        font-size: 14px;
        p {
          flex: 1;
          color: #363c48;
          margin-left: 16px;
        }
      }
    }
    &-intro {
      .van-tab--active {
        color: #407aff;
      }
      .van-tabs__line {
        background-color: #407aff;
      }
      .van-tabs__content {
        padding: 0 16px;
        background-color: #fff;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
