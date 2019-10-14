<template>
  <div class="fen-category">
    <!-- 顶部搜索框 -->
    <van-nav-bar left-arrow>
      <van-cell-group slot="title">
        <router-link to="/search">
          <van-field placeholder="搜索你感兴趣的东西" />
        </router-link>
      </van-cell-group>
    </van-nav-bar>
    <!-- 类别列表 -->
    <div class="category-list">
      <div class="category-nav">
        <ul>
          <li
            :class="{active:active === categoryList.name}"
            v-for="categoryList in categoryNavLists"
            :key="categoryList.active_page_id"
            @click='handleNav(categoryList.name, categoryList)'
          ><span>{{categoryList.name}}</span> </li>

        </ul>
      </div>
      <div class="category-cont">
        <category-list-inner :list='categoryContentLists'></category-list-inner>
      </div>
    </div>
  </div>
</template>
<script>
import categoryListInner from '../../components/categoryListInner'
import Axios from 'axios'
export default {
  name: 'category',
  data () {
    return {
      categoryNavLists: [],
      categoryContentLists: [],
      active: ''
    }
  },
  methods: {
    handleNav (target, targetList) {
      // 判断导航栏是否发生切换, 未切换直接退出
      if (this.active === target) {
        return
      }
      // 点击切换分类导航栏
      this.active = target
      // 切换导航栏后，获取新导航栏对应的列表数据
      this.getCategoryContent(targetList)
    },
    getCategoryContent (page) {
      // 先清除原分类列表内容数据
      this.categoryContentLists = []
      // 发送axios请求
      Axios.post('/channel/route0002/productCategoryDetail/shoppingContentV2.json', {
        'data': {
          'channel_type': 2,
          'offset_id': 0,
          'limit': 12,
          'page_id': page.active_page_id,
          'action': 'shoppingContentV2'
        },
        'system': {},
        'is_weex': 1
      }).then(res => {
        if (!res.data.data.result === 0) {
          return
        }
        let result = res.data.data.result_rows.floor_list
        if (result[0].name === '优选平台') {
          result.shift()
        }
        this.categoryContentLists = result
      })
    }
  },
  components: {
    categoryListInner
  },
  created () {
    Axios.post('/api/route0002/productDetail/shoppingContentNew.json', {
      'data': { 'limit': 1, 'offset_id': 0, 'page_id': 'PRPG201907230034501', 'action': 'shoppingContentNew' }, 'system': {}, 'is_weex': 1
    }, {
      headers: {

      }
    }).then(res => {
      if (!res.data.data.result === 0) {
        return
      }
      let result = res.data.data.result_rows.floor_list[0].item_list
      this.categoryNavLists = result
      // 获取分类导航栏数据后，立刻获取导航栏第一个的列表数据内容，同时改变第一个分类列表的样式
      this.active = result[0].name
      this.getCategoryContent(result[0])
    })
  }
}
</script>
<style lang="scss">
.fen-category {
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .van-icon {
    color: #969696;
  }
  .van-nav-bar {
    overflow: hidden;
    .van-cell__value {
      background: rgba(5, 12, 28, 0.04);
      height: 30px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      > div {
        margin-left: 10px;
      }
    }
  }
  .category-list {
    flex: 1;
    background-color: #f2f3f5;
    overflow: hidden;
    display: flex;
    .category-nav {
      width: 88px;
      overflow-y: auto;
      ul {
        li {
          height: 52px;
          &.active {
            background-color: #fcfcfc;
            span {
              color: #407aff;
              border-left: 2px solid #407aff;
            }
          }
          display: flex;
          align-items: center;
          span {
            width: 100%;
            display: block;
            text-align: center;
            box-sizing: border-box;
            font-size: 15px;
          }
        }
      }
    }
    .category-cont {
      background-color: #fcfcfc;
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
