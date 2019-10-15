<template>
<div class="shop-list-link">
  <!--搜索框-->
 <div class="search-box">
      <i class="iconfont iconzuojiantou"></i>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action">搜索</div>
      </van-search>
    </div>
  <van-tabs v-model="activeName">
    <van-tab title="综合" name="a">
      <div  class="shop-link">
        <div class="shop-photo"> <img src="https://cimg1.fenqile.com/product3/M00/9E/CB/RbQHAFxuVwqAdQnYAAZ1iF7cBw4746.jpg" alt /> </div>
        <div class="shop-text">
          <div class="shop-title">Adidas阿迪达斯三叶草男鞋女鞋 SUPERSTAR 明星款经典鞋金标贝壳头运动休闲鞋情侣小白鞋板鞋C77124
          </div>
          <div class="evaluate">
            <div class="shop-money">￥123</div>
            <div class="shop-staging">￥12/月</div>
            <div class="shop-evaluate"><p>评价</p>|<p>好评率</p></div>
          </div>
        </div>
      </div>
      
    </van-tab>
    <van-tab title="销量" name="b"></van-tab>
    <van-tab title="价格" name="c"></van-tab>
  </van-tabs>
 </div>
</template>
<script>
export default {
  data() {
    return {
      value:'',
      activeName: 'a'
    };
  }
}

</script>
<style lang="scss">
.shop-list-link{
  height:100%;
  

.shop-link{
  height: 120px;
  width: 100%;
  padding: 20px 16px 20px 16px;
  display: flex;
 .shop-photo{ 
   width: 120px;
  height:120px;

   img{
    height: 100%;
  }}
 .shop-text{
   height: 34px;
   margin: 0 0 0 20px;
  
   .shop-title{
     font-size: 13px;
     overflow: hidden;
        text-overflow: ellipsis;
        
   }.evaluate{
     margin: 20px 0 0 0;
   .shop-money{
     font-size: 11px;
     margin: 8px 0 0 0;
   }
   .shop-staging{
     font-size: 16px;
     color: red;
     margin: 8px 0 0 0;

   }
   .shop-evaluate{ 
     margin: 10px 0 0 0;
     font-size: 11px;
     display:flex;
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