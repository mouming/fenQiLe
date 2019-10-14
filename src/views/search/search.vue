<template>
  <div class="fen-search">
    <!--搜索框-->
    <div class="search-box">
      <i class="iconfont iconzuojiantou"></i>

      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
      
      >
        <div slot="action" >搜索</div>
      </van-search>
    </div>
    <div class="history-hot-box">
      <div class="history">
        <div class="his-search">
          <p>历史搜索</p>
          <span class="iconfont iconlajitong"></span>
        </div>
        <ul>
          <li>123</li>
        </ul>
      </div>
      <div class="hot-search-box">
        <div class="hot-search">
          <p>热门搜索</p>
          <span class="iconfont iconshuaxin"></span>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from'axios';
import {mapActions} from 'vuex';
export default {
methods:{
  ...mapActions('hotsearch',['posthotSearch'])
},

data()
{
  return{
    value:'',
  }
},
  created() {
    this.posthotSearch()
  }
}
</script>

<style lang="scss">
.fen-search {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  .history-hot-box {
    padding: 31px 20px 0 20px;
    .history {
      height: 78px;
      width: 335px;
      .his-search {
        height: 14px;
        width: 335px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .hot-search-box {
    height: 194px;
    width: 335px;
    padding-top: 20px;
    .hot-search {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>