<template>
  <div class="category-list-inner">
    <div class="floor">
      <p>优选平台</p>
      <ul class="list-items">
        <router-link
          to="/productList/1"
          tag="li"
        >
          <img
            src="http://img1.fenqile.com/oa4/M00/02/3F/IMMHAF04XnKADK9MAAAU8Jc12_I991.png"
            alt=""
          >
          <span>女士手表</span>
        </router-link>
        <router-link
          to="/productList"
          tag="li"
        >
          <img
            src="http://img1.fenqile.com/oa4/M00/02/3F/IMMHAF04XnKADK9MAAAU8Jc12_I991.png"
            alt=""
          >
          <span>女士手表</span>
        </router-link>
        <router-link
          to="/productList"
          tag="li"
        >
          <img
            src="http://img1.fenqile.com/oa4/M00/02/3F/IMMHAF04XnKADK9MAAAU8Jc12_I991.png"
            alt=""
          >
          <span>女士手表</span>
        </router-link>
        <router-link
          to="/productList"
          tag="li"
        >
          <img
            src="http://img1.fenqile.com/oa4/M00/02/3F/IMMHAF04XnKADK9MAAAU8Jc12_I991.png"
            alt=""
          >
          <span>女士手表</span>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.category-list-inner {
  padding: 0 20px;

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
