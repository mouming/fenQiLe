<template>
  <div class="fen-lecard">
    <!-- 导航栏 -->
    <van-nav-bar
      title="乐卡"
      :fixed="true"
      :z-index="999"
    />
    <div class="lecard-main">
      <!-- 未登录状态显示 -->
      <div
        class="lecard-banner"
        v-if="show"
      >
        <div class="lecard-limit">
          <ul class="container">
            <li>
              <span>购物可用额度</span>
              <span>￥<i>1,500.00</i></span>
            </li>
            <li>
              <span>借款可用额度</span>
              <span>￥<i>900.00</i></span>
            </li>
          </ul>
          <p>额度中心</p>
          <h3>升级乐黑卡 每年预计可省1653元 限时活动中</h3>
        </div>
        <div class="lecard-bill">
          <div class="left">
            <p>10月还款</p>
          </div>
          <div class="right">每月11日前还款 ></div>
        </div>
      </div>

      <!-- 登录后显示 -->
      <div
        class="lecard-banner"
        v-else
      >
        <van-swipe
          indicator-color="rgb(161,166,176)"
          :autoplay="3000"
        >
          <van-swipe-item
            v-for="item in bannerLists"
            :key="item.title"
          ><img
              :src="item.bg_img"
              alt=""
            >
            <div class="login-large-title">
              <h3>{{item.title}}</h3>
              <p>{{item.sub_title[0]}}</p>
            </div>
          </van-swipe-item>

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
<script>
import Axios from 'axios'
export default {
  name: 'lecard',
  data () {
    return {
      show: false,
      bannerLists: []
    }
  },
  created () {
    // 获取轮播栏的数据
    Axios.post('/vip/route0003/lekcard/register_guide.json', {
      'system': {
        'os': 'H5',
        'sign': '3567ae9623c168d307cb16cb950dfc24',
        'controller': 'vip'
      },
      'data': {
        'macCode': ''
      }
    }).then(res => {
      if (!(res.data.data.result === 0)) {
        return
      }
      let result = res.data.data.result_rows.wrapper
      this.bannerLists = result
    })
  }

}
</script>
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
      background-color: #fff;
      overflow: hidden;
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
      .lecard-limit {
        width: 350px;
        height: 172px;
        background-image: url('https://cres1.fenqile.cn/web_vip_m/img/lecard/lc_bg_v2--f9e2947091.png');
        background-size: 100% 100%;
        margin: 0 auto;
        color: #fff;
        margin-top: 20px;
        padding: 20px 20px 0;
        box-sizing: border-box;
        .container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          li {
            display: flex;
            flex-direction: column;
            span {
              font-size: 13px;
              line-height: 20px;
              margin-bottom: 5px;
              i {
                font-size: 28px;
              }
            }
          }
        }
        p {
          font-size: 13px;
          line-height: 15px;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 13px;
          text-align: center;
          height: 36px;
          line-height: 36px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 3px;
        }
      }
      .lecard-bill {
        height: 88px;
        color: rgb(151, 157, 171);
        font-size: 13px;
        display: flex;
        margin: 0 22px;
        align-items: center;
        justify-content: space-between;
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
