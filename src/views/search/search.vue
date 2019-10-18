<template>
  <div class="fen-search">
    <!--搜索框-->
    <div class="search-box">
      <i
        class="iconfont iconzuojiantou"
        @click="goBack"
      ></i>

      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        show-action
        blur
        shape="round"
      >
        <div
          slot="action"
          @click="toSearch"
        >搜索</div>
      </van-search>
    </div>

    <div
      class="history-hot-box"
      v-if="!showSearchList"
    >
      <div class="history">
        <div class="his-search">
          <p>历史搜索</p>
          <span class="iconfont iconlajitong"></span>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="hot-search-box">
        <div class="hot-search">
          <p>热门搜索</p>
          <span
            class="iconfont iconshuaxin"
            @click="reSearch"
          ></span>
        </div>
        <ul>
          <router-link
            tag="li"
            :to="'/productList/'+hot"
            v-for="(hot,index) in hotSearch"
            :key="index"
          >{{hot}}</router-link>
        </ul>
      </div>
    </div>
    <div
      class="box"
      v-else
    >
      <ul>
        <router-link
          tag="li"
          :to="'/productList/'+commodity.word "
          v-for="commodity in Search"
          :key="commodity.rank"
        >{{ commodity.word }}</router-link>
      </ul>
    </div>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'hot',
  computed: {
    ...mapState('search', ['Search'])

  },
  watch: {
    searchVal (val) {
      this.showSearchList = true
      this.postSearch({
        value: val
      })
    }
  },
  methods: {
    ...mapActions('search', ['postSearch']),
    goBack () {
      this.$router.back()
    },
    reSearch () {
      this.posthotSearch()
    },
    posthotSearch () {
      axios.post('/api/route0002/productSearch/querySearchBoxConfig.json', {
        data: {
          ab_flags: ['search_revision_v1'],
          action: 'querySearchBoxConfig'
        },
        system: {},
        is_weex: 1
      }).then(response => {
        // console.log(response.data)
        if (response.data.result === 0) {
          this.hotSearch = response.data.data.result_rows.hot_search.map(item => item.title)
        }
      })
    },
    toSearch () {
      this.$router.push('/productList/' + this.searchVal)
    }
  },

  data () {
    return {
      searchVal: '',
      showSearchList: false,
      value: '',
      hotSearch: []
    }
  },

  created () {
    this.postSearch({})
    this.showSearchList = false
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
      width: 40px;
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

  .box {
    display: flex;
    flex: 1;
    overflow: hidden;
    ul {
      width: 100%;
      padding: 0 20px 0 20px;
      li {
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        border-bottom: #e8eaea 1px solid;
        font-size: 14px;
        color: #394050;
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
        p {
          color: #394050;
          font-size: 14px;
        }
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
      p {
        color: #394050;
        font-size: 14px;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      overflow: hidden;
      li {
        font-size: 12px;
        background: #f7f7f7;
        margin: 12px 12px 0 0;
        padding: 12px;
        max-width: 200px;
        color: #394050;
      }
    }
  }
}
</style>
