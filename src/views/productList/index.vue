<template>
  <div
    class="shop-list-link"
    ref="box"
  >
    <!--搜索框-->
    <div>
      <div class="search-box">
        <i
          class="iconfont iconzuojiantou"
          @click="goBack"
        ></i>
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
        >
          <div slot="action">搜索</div>
        </van-search>
      </div>
      <van-tabs
        v-model="activeName"
        @click="chgFilmType"
        :class="{on:ison}"
        ref="list"
      >
        <div class="abc">
          <van-tab
            title="综合"
            name="default"
          >
            <ul>
              <router-link
                tag="li"
                :to="'/productDetail/'+list.sku_id"
                class="shop-link"
                v-for="list in ShopList"
                :key="list.sku_id"
              >
                <div class="shop-photo">
                  <img
                    :src="list.sku_pic"
                    alt
                  />
                </div>
                <div class="shop-text">
                  <div class="shop-title">{{list.product_name}}</div>
                  <div class="evaluate">
                    <div class="shop-money">￥{{list.real_amount}}</div>
                    <div class="shop-staging">{{list.mon_pay_str}}/月</div>
                    <div class="shop-evaluate">
                      <p>{{list.total_comment_num}}评价</p>|
                      <p>{{list.good_comment_rate}}%好评率</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </ul>
          </van-tab>
          <van-tab
            title="销量"
            name="sku_sell_num"
          >
            <ul>

              <router-link
                tag="li"
                :to="'/productDetail/'+list.sku_id"
                class="shop-link"
                v-for="list in ShopList"
                :key="list.sku_id"
              >
                <div class="shop-photo">
                  <img
                    :src="list.sku_pic"
                    alt
                  />
                </div>
                <div class="shop-text">
                  <div class="shop-title">{{list.product_name}}</div>
                  <div class="evaluate">
                    <div class="shop-money">￥{{list.real_amount}}</div>
                    <div class="shop-staging">{{list.mon_pay_str}}/月</div>
                    <div class="shop-evaluate">
                      <p>{{list.total_comment_num}}评价</p>|
                      <p>{{list.good_comment_rate}}%好评率</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </ul>
          </van-tab>
          <van-tab
            title="价格"
            name="amount"
          >
            <ul>
              <router-link
                tag="li"
                :to="'/productDetail/'+list.sku_id"
                class="shop-link"
                v-for="list in ShopList"
                :key="list.sku_id"
              >
                <div class="shop-photo">
                  <img
                    :src="list.sku_pic"
                    alt
                  />
                </div>
                <div class="shop-text">
                  <div class="shop-title">{{list.product_name}}</div>
                  <div class="evaluate">
                    <div class="shop-money">￥{{list.real_amount}}</div>
                    <div class="shop-staging">{{list.mon_pay_str}}/月</div>
                    <div class="shop-evaluate">
                      <p>{{list.total_comment_num}}评价</p>|
                      <p>{{list.good_comment_rate}}%好评率</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </ul>
          </van-tab>
        </div>

      </van-tabs>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'shopList',

  computed: {
    ...mapState('shopList', ['ShopList'])
  },
  methods: {
    ...mapActions('shopList', ['postShopList']),
    ...mapMutations('shopList', ['setShopList']),
    /* *切换当前的影片类型
     */
    chgFilmType (name, title) {
      console.log(name, title)
      this.setShopList([])
      this.curFilmType = name
      this.postShopList({
        boxname: name,
        kw: this.kw,
        iscreate: 1
      })
    },
    goBack () {
      this.$router.back()
    }
  },
  data () {
    return {
      curFilmType: 'sku_sell_num', // 当前的影片类型
      curPageNum: 1, // 当前的页码数
      value: '',
      activeName: 'default',
      ison: true,
      kw: this.$route.params.class
    }
  },

  mounted () {
    let bs = new BScroll(this.$refs.box, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    bs.on('scroll', data => {
      console.log(this.$refs.list)
    })
    bs.on('pullingUp', () => {
      this.curPageNum++
      this.postShopList({
        boxname: name,
        PageNum: this.curPageNum,
        iscreate: 0,
        kw: this.kw,

        callback: () => {
          bs.finishPullUp()
        }
      })
    })
  },
  created () {
    console.log(1234)
    this.kw = this.$route.params.class
    this.postShopList({
      kw: this.kw,
      boxname: 'default',
      PageNum: 1,
      iscreate: 1
    })
  }

}
</script>
<style lang="scss">
.shop-list-link {
  height: 100%;
  width: 375px;

  .van-tabs {
    &.on {
      .van-tabs__wrap {
        position: fixed;
        top: 60px;
        left: 0;
      }
    }
    .van-hairline--top-bottom {
      top: 0;
      width: 100%;
    }
    .van-tabs__content {
      margin-top: 50px;
      .shop-link {
        height: 120px;
        padding: 20px 16px 20px 16px;
        display: flex;
        border-bottom: 1px #abadb2 solid;
        .shop-photo {
          width: 120px;
          height: 120px;

          img {
            height: 100%;
          }
        }
        .shop-text {
          height: 34px;
          margin: 0 0 0 20px;

          .shop-title {
            font-size: 13px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .evaluate {
            margin: 20px 0 0 0;
            .shop-money {
              font-size: 11px;
              margin: 8px 0 0 0;
            }
            .shop-staging {
              font-size: 16px;
              color: red;
              margin: 8px 0 0 0;
            }
            .shop-evaluate {
              margin: 10px 0 0 0;
              font-size: 11px;
              display: flex;
            }
          }
        }
      }
    }
  }
  .search-box {
    display: flex;
    height: 54px;
    line-height: 54px;
    .van-search__content--round {
      height: 30px;
      margin: 0 10px 0 0;
      line-height: 30px;
    }
    .van-search__action {
      height: 30px;
      line-height: 30px;
    }
    i {
      width: 54px;
      font-size: 22px;
      text-align: center;
    }
    .van-search {
      width: 310px !important;
      .van-search__content {
        width: 260px;
      }
      .van-search__action {
        background: #3b9bff;
        color: white;
        border-radius: 5px;
      }
    }
  }
}
</style>
