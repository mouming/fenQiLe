<template>
  <div class="fen-cart">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul class="container">
      <div class="goodstitle">
        <van-checkbox></van-checkbox>
        <span>分期乐</span>
        <p>领券</p>
      </div>
      <li class="shopItemall">
        <div class="shopItemleft">
          <van-checkbox v-model="checkedd"></van-checkbox>
        </div>
        <div class="shopItemcont">
          <img
            src="http://cimgs1.fenqile.com/detail/M00/02/10/IqEHAF0r7PyASinBAAGyR7iHpK0548_160x160.png"
          />
        </div>
        <div class="shopItemright">
          <div class="comdiyname">
            <p>富士INSTAX 立拍立得 mini7C 相机 奶咖色</p>
          </div>
          <div class="buyname">
            <p>奶咖色，单机标配</p>
            <div class="buynamepic">
              <i class="iconfont iconxialasanjiao"></i>
            </div>
          </div>
          <div class="moneyfoot">
            <div class="price">
              <p class="shop-price-sign">￥</p>
              <p class="price-m">279</p>
            </div>
            <div class="addprice">
              <p class="p1">-</p>
              <p class="p2">1</p>
              <p class="p1">+</p>
            </div>
          </div>
        </div>
      </li>
      <div class="cainixihuan">
        <p>猜你喜欢</p>
      </div>
      <ul class="goodslike">
        <li class="goodlike-all">
          <!-- 第一个 -->
          <div class="goodslike-mainone">
            <div class="goodslike-top">
              <img
                src="https://cimg1.fenqile.com/product/M00/E1/EE/hRoGAFpXSTyAR3ryAAELOo0TlO0476.jpg"
              />
            </div>
            <div class="goodslike-conten">
              <p>旺旺 旺仔 牛奶 原味 礼盒装 125ml*24</p>
            </div>
            <div class="goodslike-bott">
              <p class="po shop-price-sign">￥</p>
              <p class="pt">2.05</p>
              <p class="ph">/月</p>
            </div>
          </div>
          <!-- 第二个 -->
          <div class="goodslike-maintwo"></div>
        </li>
      </ul>
      <ul class="goodslike">
        <li class="goodlike-all">
          <!-- 第一个 -->
          <div class="goodslike-mainone">
            <div class="goodslike-top">
              <img
                src="https://cimg1.fenqile.com/product/M00/E1/EE/hRoGAFpXSTyAR3ryAAELOo0TlO0476.jpg"
              />
            </div>
            <div class="goodslike-conten">
              <p>旺旺 旺仔 牛奶 原味 礼盒装 125ml*24</p>
            </div>
            <div class="goodslike-bott">
              <p class="po shop-price-sign">￥</p>
              <p class="pt">2.05</p>
              <p class="ph">/月</p>
            </div>
          </div>
          <!-- 第二个 -->
          <div class="goodslike-maintwo"></div>
        </li>
      </ul>
    </ul>
    <div class="foot">
      <van-submit-bar :price="3050" button-text="结算" @submit="onSubmit">
        <van-checkbox v-model="checked " class="van-et">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      checkedd: false
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
@import url(//at.alicdn.com/t/font_1449548_jpit7losnf9.css);
.fen-cart {
  background: #f5f7f6;
  .cainixihuan {
    background: #ff4a8d;
    height: 45px;
    line-height: 45px;
    padding: 0 14px;
    p {
      font-size: 16px;
    }
  }
  .goodslike {
    height: 221px;
    width: 100%;
    .goodlike-all {
      height: 220px;
      width: 100%;
      border: 1px solid #abadb2;
      border-left: none;
      border-top: none;
      display: flex;
      .goodslike-mainone {
        margin-left: 10px;
        height: 220px;
        border: 1px solid #abadb2;
        border-top: none;
        border-left: none;
        border-right: none;
        flex: 1;
        .goodslike-top {
          margin-top: 5px;
          margin-left: 8px;
          height: 130px;
          width: 130px;
          text-align: center;
          line-height: 130px;
          img {
            width: 127px;
            height: 127px;
            text-align: center;
            line-height: 130px;
          }
        }
        .goodslike-conten {
          margin-left: 8px;
          margin-top: 10px;
          p {
            font-size: 11px;
            line-height: 16px;
          }
        }
        .goodslike-bott {
          margin-left: 8px;
          margin-top: 10px;
          text-align: center;
          display: flex;
          .pt {
            color: #ff4a8d;
          }
        }
      }
      .goodslike-maintwo {
        height: 220px;
        border: 1px solid #abadb2;
        border-top: none;
        border-right: none;
        flex: 1;
      }
    }
  }
  .container {
    margin-top: 5px;
    background: #fff;

    .goodstitle {
      display: flex;
      padding: 14px;
      font-size: 15px;
      span {
        margin-left: 10px;
        flex: 1;
        color: #363c48;
      }
      p {
        color: #84888f;
      }
    }
  }
  .container {
    width: 100%;
    height: 130px;

    .shopItemall {
      display: flex;
      height: 130px;
      margin-bottom: 5px;

      @include border-top;
      background: red;
      // background: #fff;
      padding: 10px;
      .shopItemleft {
        width: 20px;
        display: flex;
        height: 130px;
        margin-right: 10px;
        margin-left: 10px;
      }
      .shopItemcont {
        width: 100px;
        height: 130px;
        img {
          width: 81px;
          height: 81px;
          padding: 20px 10px 20px 5px;
        }
      }
      .shopItemright {
        padding-top: 20px;
        font-size: 11px;
        .comdiyname {
          p {
            padding-bottom: 5px;
            color: #363c48;
            // overflow: hidden;
          }
        }
        .buyname {
          display: flex;
          p {
            color: #abadb2;
            padding: 5px;
            border: 1px solid #abadb2;
            border-right: none;
            line-height: 11px;
            padding-left: 5px;
            flex: 1;
          }
          .buynamepic {
            width: 20px;
            border: 1px solid #abadb2;
            border-left: none;
            text-align: center;
            justify-items: center;
            i {
              line-height: 20px;
            }
            .iconxialasanjiao {
              color: #abadb2;
            }
          }
        }
      }
      .moneyfoot {
        height: 40px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        .price {
          display: flex;
          width: 40px;
          line-height: 20px;
        }
        .addprice {
          display: flex;
          height: 20px;
          text-align: center;
          line-height: 20px;
          .p2 {
            width: 30px;
            border: 1px solid #abadb2;
            border-right: none;
            border-left: none;
          }
          .p1 {
            width: 20px;
            text-align: center;
            border: 1px solid #abadb2;
          }
        }
      }
      .goodslike {
        background: red;
        height: 200px;
      }
    }
  }
  .foot {
    .van-submit-bar__bar {
      @include border-top;
    }
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .van-checkbox {
      margin-left: 10px;
      margin-top: 3px;
      font-size: 13px;
    }
  }
  .price-m {
    font-family: fqlFontDinpro;
    font-size: 16px;
    color: #ff4a8d;
    font-weight: 500;
    margin-left: 0.02667rem;
  }
  .shop-price-sign {
    font-family: fqlFontDinpro;
    color: #ff4a8d;
    font-size: 0.26667rem;
  }
}
</style>
