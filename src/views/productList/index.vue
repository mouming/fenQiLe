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
          @focus="onFocus"
        >
          <div slot="action">搜索</div>
        </van-search>
      </div>
      <div :class="['shop-main',{'shop-fixed':isFixed}]">
        <ul
          class="shop-tabs"
          :style="scrollFixed"
        >
          <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="{on:curFilmType === tab.id}"
            @click="chgFilmType(tab.id)"
          >{{tab.name}}</li>
        </ul>
        <shop-content :ShopList="ShopList"></shop-content>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import shopContent from '../../components/porductListCont'
export default {
  name: 'shopList',

  computed: {
    ...mapState('shopList', ['ShopList']),
    scrollFixed () {
      return {
        position: this.isFixed ? 'fixed' : '',
        top: this.scTop + 'px'
      }
    }
  },
  methods: {
    ...mapActions('shopList', ['postShopList']),
    ...mapMutations('shopList', ['setShopList']),
    /* *切换当前的影片类型
     */
    chgFilmType (id) {
      this.setShopList([])
      this.curFilmType = id
      this.postShopList({
        boxname: id,
        kw: this.kw,
        iscreate: 1
      })
    },
    goBack () {
      this.$router.back()
    },
    onFocus () {
      this.$router.push('/search')
    }
  },
  data () {
    return {
      curFilmType: 'default', // 当前的影片类型
      curPageNum: 1, // 当前的页码数
      value: '',
      ison: true,
      kw: this.$route.params.class,
      tabs: [
        { name: '综合', id: 'default' },
        { name: '销量', id: 'sku_sell_num' },
        { name: '价格', id: 'amount' }
      ],
      isFixed: false,
      scTop: 0
    }
  },
  components: {
    shopContent
  },
  mounted () {
    let bs = new BScroll(this.$refs.box, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    bs.on('scroll', data => {
      // 监听滚动事件
      if (data.y < -54) {
        this.isFixed = true
        this.scTop = Math.abs(data.y)
      } else {
        this.isFixed = false
      }
    })
    bs.on('pullingUp', () => {
      this.curPageNum++
      this.postShopList({
        boxname: this.curFilmType,
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
  .shop-main {
    &.shop-fixed {
      .pro-shop {
        margin-top: 45px;
      }
    }
    .shop-tabs {
      display: flex;
      height: 45px;
      width: 100%;
      background-color: #fff;
      li {
        flex: 1;
        text-align: center;
        line-height: 45px;
        &.on {
          color: #407aff;
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
