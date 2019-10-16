<template>
  <div class="category-list-inner">
    <van-loading
      size="24px"
      vertical
      v-if="show"
    >加载中...</van-loading>
    <div
      class="floor"
      v-for="item in list"
      :key="item.id"
      v-else
    >
      <p>{{item.name}}</p>
      <ul class="list-items">
        <router-link
          :to="'/productList/'+good.name"
          tag="li"
          v-for="good in item.item_list"
          :key="good.id"
        >
          <img
            :src="good.pic_url"
            alt=""
          >
          <span>{{good.name}}</span>
        </router-link>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      show: true
    }
  },
  watch: {
    list (newValue) {
      this.show = newValue.length === 0
    }
  }
}
</script>

<style lang="scss">
.category-list-inner {
  padding: 0 20px;
  height: 100%;
  .van-loading {
    top: 50%;
  }
  .floor {
    padding-bottom: 8px;

    > p {
      line-height: 52px;
      color: #363c48;
      font-size: 14px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-top: 8px;
      border-bottom: 1px solid #ededee;
      li {
        margin-right: 27px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        line-height: 15px;
        width: 64px;
        height: 95px;
        align-items: center;
        img {
          width: 52px;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
        span {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
