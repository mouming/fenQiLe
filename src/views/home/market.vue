<template>
  <div class="fen-market">
    <!-- 顶部搜索框 -->
    <div class="search">

      <van-search
        placeholder="手机全场12期免息，抢50元可叠加券"
        show-action
        @focus="handleSearch"
      >
        <i
          class="iconfont icongouwuchekong"
          slot="action"
          @click="toCart"
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
          <van-swipe-item
            v-for="item in bannerLists"
            :key="item.id"
          >
            <img
              :src="item.pic_url"
              alt=""
            >
          </van-swipe-item>

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
            <span class="time">{{remainTime.h}}</span> :
            <span class="time">{{remainTime.m}}</span> :
            <span class="time">{{remainTime.s}}</span>
          </div>
        </div>
        <div class="spacing-content">
          <ul class="pro-lists">
            <router-link
              v-for="good in seckillLists"
              :key="good.sku"
              :to="'/productDetail/'+good.sku"
              tag="li"
            >
              <img
                :src="good.sku_pic[0]"
                alt=""
              >
              <div class="item-pay">￥{{good.real_amount}}</div>
              <div class="item-price">￥{{good.line_amount}}</div>
            </router-link>

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
            <li
              v-for="car in carLists"
              :key="car.id"
              :class="{on: isId === car.id}"
              @click="handleCar(car.id)"
            ><img
                :src='car.url'
                alt=""
              ></li>
          </ul>
          <ul class="pro-lists">
            <li
              v-for="item in carDataLists"
              :key="item.sku_id"
            >
              <img
                :src="item.sku_pic[0]"
                alt=""
              >
              <div class="item-pay">{{item.amount}}</div>
              <div class="item-price car-price">{{item.mon_pay_str}}</div>
              <div class="item-brand">{{item.product_name}}</div>
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
import Axios from 'axios'
export default {
  name: 'market',
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
      ],
      bannerLists: [],
      carLists: [
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png', id: 'PRPG201811050025001' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvrx-OANFPHAAAXlfycWT0347_144x88.png', id: 'PRPG201811070025505' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx-6AFRceAAAbWCOh2Mo858_144x88.png', id: 'PRPG201811050025002' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvrx_eAd2UPAAAYEfc4hPU464_144x88.png', id: 'PRPG201811050025503' },
        { url: 'https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryJaAI9alAAAYj74JlwQ602_144x88.png', id: 'PRPG201811050025501' }
      ],
      carData: {},
      carDataLists: [],
      isId: 'PRPG201811050025001',
      seckillLists: [],
      seckillTime: '',
      remainTime: {}
    }
  },
  computed: {
    carListsId () {
      return this.carLists.map(item => item.id)
    }

  },
  watch: {
    isId () {
      // 切换品牌获取对应品牌汽车的相关车辆数据
      this.carDataLists = this.carData[this.isId].floor_list[0].item_list[0].sku_list
    },
    seckillTime () {
      // 启动倒计时
      let nowTime = new Date()
      let endTime = new Date(this.seckillTime)
      let t = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
      this.getRemainTime(t)
      // 启动倒计时
      let timer = setInterval(() => {
        t--
        this.getRemainTime(t)
        if (t === 0) {
          clearInterval(timer)
          // 重新获取抢购数据
          this.getseckill()
        }
      }, 1000)
    }
  },
  methods: {
    handleSearch () {
      // 搜索框获取焦点跳转到搜索页面
      this.$router.push('search')
    },
    toCart () {
      // 点击跳转到购物车页
      this.$router.push('cart')
    },
    handleCar (target) {
      // 切换汽车分期栏内的车型栏样式
      this.isId = target
    },
    getRemainTime (t) {
      let h = parseInt(t / 3600).toString()
      if (h < 10) { h = '0' + h }
      let m = parseInt((t - h * 3600) / 60).toString()
      if (m < 10) { m = '0' + m }
      let s = parseInt(t - h * 3600 - m * 60).toString()
      if (s < 10) { s = '0' + s }
      this.remainTime = {
        h, m, s
      }
    },
    getseckill () {
      Axios.post('/hui/route0002/eventMall/quryLimitPlateByChannel.json', {
        'data': {
          'action': 'quryLimitPlateByChannel'
        },
        'system': {},
        'is_weex': 1
      }).then(res => {
        if (!res.data.data.result === 0) {
          return
        }
        let result = res.data.data.result_rows.event_detail.plate.now
        // 获取抢购结束时间
        this.seckillTime = result.end_time
        // 根据该时间段的事件id获取具体商品数据
        Axios.post('/hui/route0002/tencentRecommend/queryRecommendSkuList.json', {
          'data': {
            'event_id': result.event_id,
            'plate_id': result.plate_id,
            'channel_type': '3',
            'offset': 0,
            'limit': 12,
            'gateway_cookie': [{
              'maxAge': 10800,
              'name': 'ei',
              'value': result.event_id + '_' + result.plate_id + '_limit',
              'path': '/',
              'domain': '.fenqile.com'
            }],
            'action': 'queryRecommendSkuList'
          },
          'system': {},
          'is_weex': 1
        }).then(res => {
          if (!res.data.data.result === 0) {
            return
          }
          let secResult = res.data.data.result_rows.goods
          this.seckillLists = secResult
        })
      })
    }
  },
  created () {
    // 页面加载后立刻发送页面显示内容的axios请求
    // 获取轮播栏/抢购栏的数据
    Axios.post('/api/route0002/homepage/getRecommendInfo.json', {
      'data': {
        'recommend_floor': ['SECKILL', 'T_ADVERT_SLIDE', 'SALE'],
        'action': 'getRecommendInfo'
      },
      'system': {
        'controller': 'homepage',
        'time_stamp': new Date().getTime()
      }
    }).then(res => {
      if (!res.data.data.result === 0) {
        return
      }
      // 获取巨无霸轮播图数据
      let bannerRes = res.data.data.result_rows.T_ADVERT_SLIDE.item_list
      this.bannerLists = bannerRes
    })
    // 获取当前的抢购时间段数据
    this.getseckill()

    // 获取汽车分期数据
    Axios.post('/api/route0002/carService/shoppingContentMulti.json', {
      'data': {
        'page_id_list': this.carListsId,
        'action': 'shoppingContentMulti'
      },
      'system': {
        'controller': 'carService',
        'time_stamp': 1571111446354
      }
    }).then(res => {
      if (!res.data.data.result === 0) {
        return
      }
      let result = res.data.data.result_rows
      this.carData = result
      this.carDataLists = result[this.isId].floor_list[0].item_list[0].sku_list
    })
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
            min-height: 116px;
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
