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
          indicator-color="black"
        >
          <van-swipe-item
            v-for="(image, index) in bannerLists"
            :key="index"
          >
            <img v-lazy="image" />
          </van-swipe-item>
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
          <h3><span>￥</span>{{priceData.real_amount}}</h3>
          <p>￥{{priceData.amount}}</p>
        </div>
        <div class="right">
          <h3><span>￥</span>{{priceData.mon_pay}}</h3>
          <p>x{{priceData.fq_num}}期</p>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="detail-main-info">
        <h3>{{mainTitle}}</h3>
        <p>{{subtitle}}</p>
      </div>
      <!-- 商品已选择 -->
      <div class="detail-main-list">
        <div class="selected">
          <span>已选</span>
          <p> {{goodType}} </p>
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="list-other">
          <span>送至</span>
          <p> {{addr}} </p>
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="list-other">
          <span>服务</span>
          <p> 正品保证 | 如实描述 | 7天退货 | 15天换货 </p>
          <span class="iconfont iconyoujiantou"></span>
        </div>
      </div>
      <!-- 商品详情 -->
      <div
        class="detail-main-intro"
        v-show="getInstro.length"
      >
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
import Axios from 'axios'
Vue.use(Lazyload)
export default {
  name: 'productDetail',
  data () {
    return {
      active: 1,
      sku_id: '',
      relation_sku_id: [],
      detailData: {},
      priceData: {},
      detailAllData: {},
      mainPic: '',
      subtitle: '',
      detailIntro: {}
    }
  },
  computed: {
    bannerLists () {
      if (this.detailData.pic_list) {
        let arr = this.detailData.pic_list.map(item => {
          return item.pic_url
        })
        arr.unshift(this.mainPic)
        return arr
      } else {
        return []
      }
    },
    mainTitle () {
      return this.detailData.product_name
    },
    addr () {
      if (!this.detailAllData.delivery_addr) {
        return ''
      }
      let address = this.detailAllData.delivery_addr
      return `${address.province_name} ${address.city_name} ${address.area_name}`
    },
    goodType () {
      if (!this.detailAllData.sku_info) {
        return ''
      }
      return this.detailAllData.sku_info.sku_key_2
    },
    getInstro () {
      // 得到详情提示渲染信息
      var arr = this.detailIntro.detail_list
      if (!arr) {
        return []
      } else if (arr.length === 2) {
        arr.splice(1, 0, {
          detail: '暂无参数',
          name: '规格参数'
        })
        return arr
      } else {
        return []
      }
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

  },
  created () {
    // 得到商品的id
    this.sku_id = this.$route.params.id
    // 根据商品id获取商品的提示数据
    Axios.post('/item/route0002/productDetailV2/getProductInfo.json', {
      'data': {
        'channel_mobile_flag': 1,
        'channel_type': '3',
        'sku_id': this.sku_id,
        'module_req': [
          'channel_params_json',
          'hide_download_guide_json',
          'agent_code_json',
          'item_m_grey_config_json',
          'item_m_feature_color_config_json'
        ],
        'namespace': 'hippo.ec_frd_common_params',
        'action': 'getProductInfo'
      },
      'system': {},
      'is_weex': 1
    }).then(res => {
      if (!(res.data.data.result === 0)) {
        return
      }
      let result = res.data.data.result_rows
      console.log(result)
      // 商品种类id数据
      this.relation_sku_id = result.relation_sku_id
      // 商品提示相关数据
      this.detailData = result.spu_info
      // 主图片
      this.mainPic = result.sku_info.sku_pic[0]
    })
    // 根据id获取商品的价格和详细信息数据
    Axios.post('/item/route0002/productDetailV2/getPriceAndStockInfo.json', {
      'data': {
        'channel_mobile_flag': 1,
        'channel_type': '3',
        'sku_id': this.sku_id,
        'action': 'getPriceAndStockInfo'
      },
      'system': {},
      'is_weex': 1
    }).then(res => {
      if (!(res.data.data.result === 0)) {
        return
      }
      let result = res.data.data.result_rows
      // 得到所有数据
      this.detailAllData = result
      console.log(result)
      // 获取价格
      this.priceData = result.active_amount_info
      // 获取副标题
      this.subtitle = result.active_subtitle_info.product_desc
    })
    // 获取商品介绍栏数据
    Axios.post('/item/route0002/productDetailV2/productDetailInfo.json', {
      'data': {
        'sku_id': this.sku_id
      },
      'system': {
        'controller': '',
        'time_stamp': 1571233938694
      }
    }).then(res => {
      if (!(res.data.data.result === 0)) {
        return
      }
      let result = res.data.data.result_rows
      // 得到源数据
      this.detailIntro = result
    })
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
      img {
        width: 375px;
      }
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
