<template>
  <ul class="pro-shop">
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
</template>
<script>
export default {
  name: 'Listcontent',
  props: {
    ShopList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
.pro-shop {
  padding: 0 16px;
  .shop-link {
    height: 120px;
    padding: 20px 0;
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
        line-height: 17px;
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
</style>
