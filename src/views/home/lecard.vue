<template>
  <div class="fen-lecard">
    <!-- 导航栏 -->
    <van-nav-bar
      title="乐卡"
      :fixed="true"
      :z-index="999"
    />
    <div class="lecard-main">
      <div class="lecard-banner">
        <van-swipe
          indicator-color="rgb(161,166,176)"
          :autoplay="3000"
        >
          <van-swipe-item><img
              src="https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9fCAdijtAANftDA-XGg878.png"
              alt=""
            >
            <div class="login-large-title">
              <h3>- 分期还信用卡 -</h3>
              <p>支持提前还免手续费</p>
            </div>
          </van-swipe-item>
          <van-swipe-item><img
              src="https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9fCAdijtAANftDA-XGg878.png"
              alt=""
            ></van-swipe-item>
          <van-swipe-item><img
              src="https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9fCAdijtAANftDA-XGg878.png"
              alt=""
            ></van-swipe-item>
          <van-swipe-item><img
              src="https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9fCAdijtAANftDA-XGg878.png"
              alt=""
            ></van-swipe-item>
        </van-swipe>
        <div class="login">
          <van-button
            type="primary"
            size="large"
            color="rgb(68, 160, 255)"
            to="/login"
          >登录/注册</van-button>
        </div>
      </div>
      <div class="lecard-broadcast">
        <!-- 乐卡广告位 -->
      </div>
      <div class="lecard-container">
        <div class="title">乐卡应用</div>
        <div class="content">
          <ul class="service">
            <li>
              <img
                src="https://cimg1.fenqile.com/ibanner2/M00/32/C1/jqgHAFw0WP-AWPq0AAAMrL94UTU551.png"
                alt=""
              >
              <h3>乐花借钱</h3>
              <p>超长账期</p>
              <p>还款灵活</p>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/ibanner2/M00/32/98/jagHAFtpQjWAB65dAABAgKqfJnw289.png"
                alt=""
              >
              <h3>乐花借钱</h3>
              <p>超长账期</p>
              <p>还款灵活</p>
            </li>
            <li>
              <img
                src="https://cimg1.fenqile.com/ibanner2/M00/05/FB/j6gHAFy3B2uAbqGjAAAHtoELCqg014.png"
                alt=""
              >
              <h3>乐花借钱</h3>
              <p>超长账期</p>
              <p>还款灵活</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="lecard-container">
        <div class="title">权益卡</div>
        <div class="content">
          <ul class="profit">
            <li>
              <div class="left"><img
                  src="https://cimg1.fenqile.com/ibanner2/M00/06/06/j6gHAFzANryAYEBLAAFp_7oaG3g371.png"
                  alt=""
                ></div>
              <div class="center">
                <h3>观影乐卡</h3>
                <p>每月三折充</p>
                <p>每月免费领20元猫眼电影券</p>
              </div>
              <div class="right">
                <van-button
                  type="primary"
                  size="small"
                  color="rgb(64, 122, 255)"
                >去开通</van-button>
              </div>
            </li>
            <li>
              <div class="left"><img
                  src="https://cimg1.fenqile.com/ibanner2/M00/06/06/j6gHAFzANsuAC6_gAADRePdmcL8945.png"
                  alt=""
                ></div>
              <div class="center">
                <h3>乐影黑卡</h3>
                <p>每月三折充</p>
                <p>每月免费领20元猫眼电影券</p>
              </div>
              <div class="right">
                <van-button
                  type="primary"
                  size="small"
                  color="rgb(64, 122, 255)"
                >去开通</van-button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="lecard-container">
        <div class="broadcast"></div>
      </div>
      <p>乐卡 你的分期消费卡</p>
    </div>
  </div>
</template>
<style lang="scss">
.fen-lecard {
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-y: auto;
  .lecard-main {
    margin-top: 46px;
    .lecard-banner {
      position: relative;
      margin-bottom: 8px;
      .van-swipe {
        img {
          height: 388px;
        }
        .login-large-title {
          position: absolute;
          top: 63px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          h3 {
            line-height: 26px;
            font-size: 20px;
            color: rgb(57, 64, 80);
            margin-bottom: 7px;
          }
          p {
            color: rgb(117, 124, 142);
            font-size: 14px;
          }
        }
        .van-swipe__indicators {
          bottom: 83px;
        }
      }
      .login {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        width: 327px;
      }
    }
    .lecard-broadcast {
      height: 84px;
      background-image: url('https://cimg1.fenqile.com/ibanner2/M00/2A/66/jagHAFrDMV6AAmIaAABkeSsAsuU291.jpg');
      background-size: 100% 100%;
      margin-bottom: 8px;
    }
    .lecard-container {
      background-color: #fff;
      margin-bottom: 8px;
      .title {
        line-height: 40px;
        font-size: 13px;
        color: rgb(117, 124, 142);
        border-bottom: 1px solid rgb(245, 247, 246);
        margin-left: 16px;
      }
      .service {
        display: flex;
        li {
          flex: 1;
          box-sizing: border-box;
          border-right: 0.5px solid rgb(245, 247, 246);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 146px;
          img {
            width: 30px;
            margin-bottom: 8px;
          }
          h3 {
            padding-bottom: 16px;
            font-size: 15px;
            color: rgb(57, 64, 80);
          }
          p {
            font-size: 12px;
            line-height: 14px;
            color: rgb(117, 124, 142);
          }
        }
      }
      .profit {
        li {
          height: 114px;
          display: flex;
          align-items: center;
          .left {
            margin-left: 10px;
            img {
              width: 100px;
            }
          }
          .center {
            flex: 1;
            margin-left: 5px;
            h3 {
              color: rgb(60, 63, 86);
              font-size: 16px;
              line-height: 20px;
              height: 27px;
            }
            p {
              font-size: 12px;
              line-height: 22.5px;
              color: rgb(127, 133, 148);
            }
          }
          .right {
            width: 80px;
            .van-button {
              width: 60px;
              height: 32px;
            }
          }
        }
      }
      .broadcast {
        background-image: url('//cimg1.fenqile.com/ibanner2/M00/06/90/j6gHAF0itnqAaeN8AAMGdLMz-MQ158.png');
        height: 180px;
        background-size: 100% 100%;
      }
    }
    > p {
      color: rgb(185, 189, 198);
      font-size: 12px;
      margin-top: 24px;
      margin-bottom: 12px;
      text-align: center;
    }
  }
}
</style>
