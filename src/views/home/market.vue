<template>
  <div class="fen-market">
    <!-- 顶部搜索框 -->
    <div class="search">

      <van-search
        placeholder="手机全场12期免息，抢50元可叠加券"
        show-action
      >
        <i
          class="iconfont icongouwuchekong"
          slot="action"
        ></i>
      </van-search>
    </div>
    <!-- 主要内容 -->
    <div class="market-main">
      <!-- 特色栏目入口 -->
      <ul class="index-nav">
        <li>
          <img
            src="https://cimgs1.fenqile.com/ibanner2/M00/32/17/jagHAFsOFoOAZdjzAAAdZ-7ssB0860_96x96.png"
            alt=""
          >
          <p>小赚一笔</p>
        </li>
        <li>
          <img
            src="https://cimgs1.fenqile.com/ibanner2/M00/32/C7/jqgHAFw3TnyANyPpAAAoPZS4S2g089_96x96.png"
            alt=""
          >
          <p>旅游出行</p>
        </li>
        <li>
          <img
            src="https://cimgs1.fenqile.com/ibanner2/M00/33/9E/jagHAFw3Cc6ASo1-AAAhq_2zi-A615_96x96.png"
            alt=""
          >
          <p>乐花借钱</p>
        </li>
        <li>
          <img
            src="https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvA56AO2a6AAAaz3hmlmI567_96x96.png"
            alt=""
          >
          <p>乐还款</p>
        </li>
        <li>
          <img
            src="https://cimgs1.fenqile.com/ibanner/M00/02/DA/wScJAFnvA72AagXXAAAiogTEaHo376_96x96.png"
            alt=""
          >
          <p>娱乐充值</p>
        </li>
      </ul>
      <!-- 巨无霸轮播 -->
      <div class="banner">
        <van-swipe
          indicator-color="white"
          :autoplay="3000"
        >
          <van-swipe-item>
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/78/jqgHAFytq9CAZswgAADYBmc79Ks793_750x320.jpg"
              alt=""
            >
          </van-swipe-item>
          <van-swipe-item><img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/78/jqgHAFytq9CAZswgAADYBmc79Ks793_750x320.jpg"
              alt=""
            ></van-swipe-item>
          <van-swipe-item><img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/78/jqgHAFytq9CAZswgAADYBmc79Ks793_750x320.jpg"
              alt=""
            ></van-swipe-item>
          <van-swipe-item><img
              src="https://cimgs1.fenqile.com/ibanner2/M00/37/78/jqgHAFytq9CAZswgAADYBmc79Ks793_750x320.jpg"
              alt=""
            ></van-swipe-item>
        </van-swipe>
      </div>
      <!-- 品牌导航 -->
      <div class="make-nav">
        <ul>
          <li>
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/38/08/jqgHAF0TP9aAJMQ5AAA-QSSug5g024_344x144.png"
              alt=""
            >
          </li>
          <li>
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/00/09/j6gHAF1fojqAO9_SAABlFdLIeVw072_344x144.png"
              alt=""
            >
          </li>
          <li>
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/00/0D/kKgHAF0kWymAFAKCAABgx1BU7p0185_344x144.png"
              alt=""
            >
          </li>
          <li>
            <img
              src="https://cimgs1.fenqile.com/ibanner2/M00/00/18/j6gHAF1nRZCAA6rOAABTmS3-PsA719_344x144.png"
              alt=""
            >
          </li>
        </ul>
      </div>
      <!-- 限时抢购 -->
      <div class="spacing">
        <div class="spacing-title">
          <div class="left">乐疯抢</div>
          <div class="right">
            <span>距离本场结束</span>
            <span class="time">00</span> :
            <span class="time">00</span> :
            <span class="time">00</span>
          </div>
        </div>
        <div class="spacing-content">
          <ul class="pro-lists">
            <li>
              <img
                src="https://cimg1.fenqile.com/product5/M00/A5/30/LdEHAF1BilKACYQBAAQBZ0-aFLo286.jpg"
                alt=""
              >
              <div class="item-pay">￥699</div>
              <div class="item-price">￥899</div>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/product5/M00/A5/30/LdEHAF1BilKACYQBAAQBZ0-aFLo286.jpg"
                alt=""
              >
              <div class="item-pay">￥699</div>
              <div class="item-price">￥899</div>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/product5/M00/A5/30/LdEHAF1BilKACYQBAAQBZ0-aFLo286.jpg"
                alt=""
              >
              <div class="item-pay">￥699</div>
              <div class="item-price">￥899</div>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/product5/M00/A5/30/LdEHAF1BilKACYQBAAQBZ0-aFLo286.jpg"
                alt=""
              >
              <div class="item-pay">￥699</div>
              <div class="item-price">￥899</div>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/product5/M00/A5/30/LdEHAF1BilKACYQBAAQBZ0-aFLo286.jpg"
                alt=""
              >
              <div class="item-pay">￥699</div>
              <div class="item-price">￥899</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 汽车分期 -->
      <div class="spacing">
        <div class="spacing-title">
          <div class="left">汽车分期 </div>
          <div class="right">
            <p>更多车型 <i class="iconfont iconyoujiantou"></i></p>
          </div>
        </div>
        <div class="spacing-content">
          <ul class="car">
            <li class="on"><img
                src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png"
                alt=""
              ></li>
            <li><img
                src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png"
                alt=""
              ></li>
            <li><img
                src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png"
                alt=""
              ></li>
            <li><img
                src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png"
                alt=""
              ></li>
            <li><img
                src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png"
                alt=""
              ></li>
            <li><img
                src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png"
                alt=""
              ></li>
          </ul>
          <ul class="pro-lists">
            <li>
              <img
                src="https://cimg1.fenqile.com/detail/M00/02/B2/IqEHAF2aNqSATpaSAADk9MXtgq0607.png"
                alt=""
              >
              <div class="item-pay">首付0.87万</div>
              <div class="item-price car-price">月供2226元</div>
              <div class="item-brand">POLO</div>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/detail/M00/02/B2/IqEHAF2aNqSATpaSAADk9MXtgq0607.png"
                alt=""
              >
              <div class="item-pay">首付0.87万</div>
              <div class="item-price car-price">月供2226元</div>
              <div class="item-brand">POLO</div>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/detail/M00/02/B2/IqEHAF2aNqSATpaSAADk9MXtgq0607.png"
                alt=""
              >
              <div class="item-pay">首付0.87万</div>
              <div class="item-price car-price">月供2226元</div>
              <div class="item-brand">POLO</div>
            </li>

          </ul>
        </div>
      </div>
      <!-- 逛一逛 -->
      <div class="spacing">
        <div class="spacing-title">
          <div class="left">逛一逛</div>
        </div>
        <div class="spacing-content">
          <ul class="product-lists">
            <router-link
              :to="'/productList/'+list.name"
              tag="li"
              v-for="list in productLists"
              :key="list.name"
            >
              <img
                :src="list.url"
                alt=""
              >
            </router-link>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Axios from 'axios'
export default {
  data () {
    return {
      productLists: [
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/06/1F/j6gHAFzVO5OAYpPqAAA58LXMPLs543_344x144.jpg', name: '手机' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/06/1F/j6gHAFzVO6OAcsRYAAAmMDZ0vUE118_344x144.jpg', name: '充值' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/00/11/j6gHAF1kkR2ACiSfAABYyE4hPQQ089_344x144.jpg', name: '平板' },
        { url: 'https://cimgs1.fenqile.com/ibanner/M00/02/DE/wScJAFnwQ4CAY-QOAAAgHVLg4f4564_344x144.png', name: '电脑' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/37/A2/jqgHAFzSgM-AFuxHAAA80CZoOuM402_344x144.jpg', name: '数码' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/32/53/jqgHAFvlSfiAIyh-AABUITZuoC4387_344x144.png', name: '运动户外' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/19/ED/jagHAFqcyVSACUy0AAAh5JrGCYA356_344x144.jpg', name: '名表' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/38/2B/jagHAFyPunuAfGW2AABFYCv6wr8954_344x144.png', name: '美妆' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/38/97/jagHAFzmV5WARCC7AABRE06itUM487_344x144.png', name: '鞋服' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/00/18/j6gHAF1nRbGAVZmQAAA3jXZHi2M546_344x144.png', name: '电器' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/06/84/j6gHAF0bAsuAA0CyAAAsHxwNkfM779_344x144.png', name: '洗面奶' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/00/35/kagHAF1c3vuANOINAABpu1MstmQ937_344x144.png', name: '食品' }
      ]
    }
  },
  created () {
    // 页面加载后立刻发送页面显示内容的axios请求

  }
}
</script>
<style lang="scss">
.fen-market {
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-y: auto;
  .search {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    .iconfont {
      font-size: 20px;
    }
  }
  .market-main {
    margin-top: 56px;
    .index-nav {
      display: flex;
      background: #fff;
      border-bottom: 1px solid #ededed;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #757c8e;
        height: 92px;
        img {
          width: 48px;
          margin-bottom: 5px;
        }
      }
    }
    .banner {
      background: #fff;
      padding-top: 8px;
      img {
        width: 100%;
      }
    }
    .make-nav {
      background: #fff;
      padding: 12px 12px 4px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          img {
            width: 100%;
            box-sizing: border-box;
            padding: 0 4px 8px;
          }
        }
      }
    }
    .spacing {
      background-color: #fff;
      margin-top: 8px;
      .spacing-title {
        height: 64px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          font-size: 16px;
          color: #25324e;
        }
        .right {
          color: #979dab;
          display: flex;
          span {
            font-size: 13px;
            margin: 0 3px;
            line-height: 20px;
            &.time {
              color: #e3e4e8;
              width: 22px;
              height: 20px;
              background-color: #3c3f56;
              text-align: center;
              font-weight: bolder;
              border-radius: 3px;
            }
          }
        }
      }
      .spacing-content {
        .pro-lists {
          display: flex;
          overflow: auto;
          width: 100%;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 12px;
            margin-bottom: 20px;
            font-size: 12px;
            img {
              width: 78px;
              margin: 0 12px;
              margin-bottom: 12px;
            }
            .item-pay {
              color: #fe4979;
              line-height: 16px;
              margin-bottom: 4px;
            }
            .item-price {
              color: #979dab;
              text-decoration: line-through;
            }
            .car-price {
              text-decoration: none;
            }
            .item-brand {
              margin-top: 8px;
              color: #969daa;
            }
          }
        }
        .car {
          margin-left: 16px;
          overflow-x: auto;
          display: flex;
          li {
            margin-bottom: 8px;
            border-radius: 2px;
            img {
              width: 70px;
            }
            &.on {
              background-color: #f7f9fa;
            }
          }
        }
        .product-lists {
          padding: 0 12px;
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 10px;
          li {
            width: 50%;
            box-sizing: border-box;
            padding: 0 4px;
            margin-bottom: 8px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
