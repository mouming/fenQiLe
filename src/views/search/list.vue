<template>
  <div class="shop-list-link" ref="box">
    <!--搜索框-->
    <div class="search-box">
      <i class="iconfont iconzuojiantou" @click="goBack"></i>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action">搜索</div>
      </van-search>
    </div>
    <van-tabs v-model="activeName" @click="chgFilmType">
      <van-tab title="综合" name="default">
        <ul>
          <li class="shop-link" v-for="list in ShopList" :key="list.sku_id">
            <div class="shop-photo">
              <img :src="list.sku_pic" alt />
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
          </li>
        </ul>
      </van-tab>
      <van-tab title="销量" name="sku_sell_num"> <ul>
          
          <li class="shop-link" v-for="list in ShopList" :key="list.sku_id">
            <div class="shop-photo">
              <img :src="list.sku_pic" alt />
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
          </li>
        </ul></van-tab>
      <van-tab title="价格" name="amount"> <ul>
          <li class="shop-link" v-for="list in ShopList" :key="list.sku_id">
            <div class="shop-photo">
              <img :src="list.sku_pic" alt />
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
          </li>
        </ul></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'shopList',
  

  computed: {
    ...mapState('shopList', ['ShopList'])
  },
  methods: {
    ...mapActions('shopList', ['postShopList']),
    /* *切换当前的影片类型
     */
    chgFilmType(name,title){
      console.log(name,title)
      this.curFilmType = name;
      this.postShopList({
      boxname:name
    })
    },
    goBack() {
      this.$router.back()
    }
  },
mounted(){
 let bs = new BScroll(this.$refs.box,{
   click:true,
   probeType:3,
   pullUpLoad:true
 })
 // 监听 scroll 事件
    bs.on('scroll', data => {
      // 判断 data.y 有没有 小于 0
      if (data.y < -200) {
        // 让 tabs 固定在顶部
        this.isFixed = true
        this.fixedTop = Math.abs(data.y)
      } else {
        // 让 tabs 不再固定
        this.isFixed = false
      }
    })

 // 监听 pullingUp 事件，实现上拉加载更多数据
    bs.on('pullingUp', () => {
      // PS: 请注意，当数据加载完成之后，需要调用 better-scroll 实例对象的 finishPullUp() 。 告诉 better-scroll 我这次的上拉加载操作完成了， 不然，下一次将触发不了这个 pullingUp 事件

      // 判断是否还有下一页
      let totalPage = Math.ceil(this.filmTotal / 10) // 总的页数
      if (this.curPageNum >= totalPage) {
        bs.finishPullUp()
        return
      }
// 1. 对 curPageNum 做 ++
      this.curPageNum++

      // 2. 从新发送请求
      this.getFilmList({
        type: this.curFilmType === 'nowPlaying' ? 1 : 2,
        pageNum: this.curPageNum,

        callback: () => {
          // 在 getFilmList 这个方法中的 ajax 的代码执行完成之后，才触发这个函数
          console.log('我是回调函数')

          // 调用 finishPullUp() 方法
          bs.finishPullUp()
        }
      })
    })
  },

  data() {
    return {
      curFilmType: 'sku_sell_num', // 当前的影片类型
      curPageNum: 1, // 当前的页码数
      value: '',
      activeName: 'default'
    }
  },
    created() {
      this.postShopList({
       boxname:'default'
      })
    }
  
}
</script>
<style lang="scss">
.shop-list-link {
  height: 100%;
  width: 375px;

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

  .search-box {
    display: flex;
    height: 54px;
    line-height: 54px;
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