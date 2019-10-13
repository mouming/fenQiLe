<template>
  <div class="fen-creditcard">
    <!-- 导航栏 -->
    <van-nav-bar
      title="信用卡"
      :fixed="true"
      :z-index="999"
    >
      <template #right>
        <i class="iconfont iconfukuanfangshi"></i>
      </template>
    </van-nav-bar>
    <!-- 信用卡主要内容 -->
    <div class="creditcard-main">
      <div class="credit-banner">
        <div class="banner-cont">
          <h3>用乐卡还信用卡</h3>
          <p>信用卡额度立即恢复 轻松不逾期</p>
          <div class="login">
            <van-button
              type="primary"
              size="small"
              color="rgb(68, 160, 255)"
              to="/login"
            >登录/注册</van-button>
          </div>
        </div>

      </div>
      <div class="payway">
        <ul>
          <li>
            <img
              src="//cimg1.fenqile.com/product3/M00/08/B9/RrQHAFr5MpSAElClAAAnvR1yHO4766.png"
              alt=""
            >
            <div class="content">
              <h3>乐卡还信用卡</h3>
              <p>最高可分36期</p>
            </div>
          </li>
          <li>
            <img
              src="//cimg1.fenqile.com/product3/M00/08/B9/RrQHAFr5MqCARSonAAAsMXbYCeE496.png"
              alt=""
            >
            <div class="content">
              <h3>微信还信用卡</h3>
              <p>零手续费</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="credit-container">
        <div class="title">权益卡</div>
        <div class="apply">
          <van-swipe indicator-color="rgb(161,166,176)">
            <van-swipe-item>
              <ul class="card-lists">
                <li>
                  <img
                    src="//cimgs1.fenqile.com/product3/M00/01/DD/RbQHAFrMqJ-AIkoBAAOkiBp0XAQ799_384x240.png"
                    alt=""
                  >
                  <h3>送Dickies双肩包</h3>
                  <p>招行分期乐联名卡</p>
                </li>
                <li>
                  <img
                    src="//cimgs1.fenqile.com/product3/M00/01/DD/RbQHAFrMqJ-AIkoBAAOkiBp0XAQ799_384x240.png"
                    alt=""
                  >
                  <h3>送Dickies双肩包</h3>
                  <p>招行分期乐联名卡</p>
                </li>
                <li>
                  <img
                    src="//cimgs1.fenqile.com/product3/M00/01/DD/RbQHAFrMqJ-AIkoBAAOkiBp0XAQ799_384x240.png"
                    alt=""
                  >
                  <h3>送Dickies双肩包</h3>
                  <p>招行分期乐联名卡</p>
                </li>
              </ul>
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="credit-container">
        <div class="title">主题精选</div>
        <div class="hot-subject">
          <div class="left">
            <h3>高额度信用卡</h3>
            <p>平均超两万</p>
            <img
              src="https://cimg1.fenqile.com/product3/M00/82/14/R7QHAFvlAFuAVxPaAAB5sZrsLHI554.png"
              alt=""
            >
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="content">
                  <h3>较易下的信用卡</h3>
                  <p>通过率高</p>
                </div>
                <img
                  src="https://cimg1.fenqile.com/product3/M00/94/8E/RrQHAFvrycOAAMSBAAChGJJHAMc512.png"
                  alt=""
                >
              </li>
              <li>
                <div class="content">
                  <h3>较易下的信用卡</h3>
                  <p>通过率高</p>
                </div>
                <img
                  src="https://cimg1.fenqile.com/product3/M00/94/8E/RrQHAFvrycOAAMSBAAChGJJHAMc512.png"
                  alt=""
                >
              </li>
              <li>
                <div class="content">
                  <h3>较易下的信用卡</h3>
                  <p>通过率高</p>
                </div>
                <img
                  src="https://cimg1.fenqile.com/product3/M00/94/8E/RrQHAFvrycOAAMSBAAChGJJHAMc512.png"
                  alt=""
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.fen-creditcard {
  background-color: #f5f7f6;
  margin-bottom: 50px;
  .van-nav-bar {
    .van-nav-bar__title {
      font-size: 18px;
    }
    .van-nav-bar__right {
      bottom: -5px;
      i {
        font-size: 24px;
        color: #737c8e;
      }
    }
  }
  .creditcard-main {
    margin-top: 46px;
    .credit-banner {
      background-color: #fff;
      .banner-cont {
        height: 175px;
        background-image: url('https://cimg1.fenqile.com/product3/M00/12/DF/RrQHAFtMV2iAKgo2AAAPxFt4naA818.png');
        background-size: contain;
        margin: 0 8px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3 {
          font-size: 16px;
          color: #25324e;
          line-height: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        p {
          margin-bottom: 16px;
          color: #757c8e;
        }
        .login {
          .van-button--small {
            width: 110px;
            height: 30px;
            font-size: 14px;
          }
        }
      }
    }
    .payway {
      background-color: #fff;
      margin-bottom: 8px;
      ul {
        display: flex;
        padding: 20px 0;
        li {
          border-right: 1px solid rgb(246, 245, 247);
          flex: 1;
          display: flex;
          padding-left: 20px;
          padding-right: 16px;
          img {
            width: 32px;
            height: 32px;
            margin-right: 10px;
          }
          .content {
            h3 {
              font-weight: bold;
              font-size: 14px;
              color: #25324e;
              line-height: 20px;
            }
            p {
              color: #979dab;
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
      }
    }
    .credit-container {
      background-color: #fff;
      margin-bottom: 8px;
      .title {
        line-height: 40px;
        font-size: 13px;
        color: rgb(117, 124, 142);
        border-bottom: 1px solid rgb(245, 247, 246);
        margin-left: 16px;
      }
      .apply {
        .card-lists {
          padding: 9px 8px 25px;
          display: flex;
          li {
            flex: 1;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 97px;
              margin: 10px 0;
            }
            h3 {
              margin-bottom: 5px;
              color: #25324e;
              font-size: 14px;
            }
            p {
              color: #979dab;
            }
          }
        }
        .van-swipe__indicators {
          bottom: 5px;
        }
      }
      .hot-subject {
        display: flex;
        .left {
          padding: 16px 9px 20px;
          text-align: center;
          border-right: 1px solid #eef0f4;
          h3 {
            font-size: 14px;
            color: #25324e;
          }
          p {
            color: #979dab;
            font-size: 12px;
            margin-top: 5px;
          }
          img {
            width: 142px;
          }
        }
        .right {
          flex: 1;
          ul {
            display: flex;
            flex-direction: column;
            li {
              padding: 0 22px;
              flex: 1;
              display: flex;
              align-items: center;
              box-sizing: border-box;
              border-bottom: 1px solid #eef0f4;
              img {
                width: 72px;
              }
              .content {
                h3 {
                  font-size: 14px;
                  color: #25324e;
                }
                p {
                  color: #979dab;
                  font-size: 12px;
                  margin-top: 5px;
                }
              }
              &:last-child {
                border-bottom: 1px solid #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
