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
          <li class="active"><span>优选专区</span> </li>
          <li><span>优选专区</span> </li>
          <li><span>优选专区</span> </li>
          <li><span>优选专区</span> </li>
          <li><span>优选专区</span> </li>

        </ul>
      </div>
      <div class="category-cont">
        <category-list-inner></category-list-inner>
      </div>
    </div>
  </div>
</template>
<script>
import categoryListInner from '../../components/categoryListInner'
export default {
  components: {
    categoryListInner
  }
}
</script>
<style lang="scss">
.fen-category {
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
