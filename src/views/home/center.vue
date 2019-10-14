<template>
  <div class="fen-center">
    <!-- 登录注册栏 -->
    <div class="login">
      <div class="login-title">
        <img
          src="https://cimg1.fenqile.com/ibanner2/M00/37/4C/jqgHAFyHVrKAQEADAAAOydx6Ufo449.png"
          alt=""
        >
        <!-- 登录前显示内容 -->
        <!-- <div class="login-content">
          <h3>登录分期乐免费开通乐卡</h3>
          <p>最高可得5万额度 <i class="iconfont iconxiajiantoushixinxiao"></i></p>
        </div> -->
        <!-- 登录后显示内容 -->
        <div
          class="login-name"
          style=""
        >
          <span>xxx</span>
          <i class="iconfont iconxiajiantoushixinxiao"></i>
        </div>
      </div>
      <!-- 登录前显示内容 -->
      <div class="login-btn">
        <van-button
          round
          type="info"
          size="small"
        >登录/注册</van-button>
      </div>
      <!-- 登录后显示内容 -->
      <!-- <div class="login-mes">
        <i class="iconfont icondaipingjia"></i>
      </div> -->
    </div>
    <div class="center-main">
      <div class="repay">
        <div class="left">
          <p>10</p>
          <p>月</p>
          <span>账单</span>
        </div>
        <div class="right">
          <p>查看账单</p>
          <i class="iconfont iconyoujiantou"></i>
        </div>
      </div>
      <div class="order">
        <ul>
          <li><i class="iconfont icondaifukuan1"></i><span>代付款</span></li>
          <li><i class="iconfont icondaishouhuo1"></i><span>待收货</span></li>
          <li><i class="iconfont icondaipingjia"></i><span>待评价</span></li>
          <li><i class="iconfont iconshouhoutuikuan"></i><span>售后/退款</span></li>
          <li><i class="iconfont iconquanbudingdan"></i><span>全部订单</span></li>
        </ul>
      </div>
      <div class="lestar op-item">
        <div class="left">
          <img
            src="http://cimg1.fenqile.com/ibanner2/M00/06/DD/j6gHAF1Td2aALN3IAAAG57gh0ls465.png"
            alt=""
          >
          <p>乐星</p>
        </div>
        <div class="right">
          <p>可领100乐星</p>
          <i class="iconfont iconyoujiantou"></i>
        </div>
      </div>
      <div class="invite op-item">
        <div class="left">
          <img
            src="http://cimg1.fenqile.com/ibanner2/M00/37/66/jqgHAFycpAKADBGKAAASDiVFuxI598.png"
            alt=""
          >
          <p>邀请好友</p>
        </div>
        <div class="right">
          <p>送华为nova5手机</p>
          <i class="iconfont iconyoujiantou"></i>
        </div>
      </div>
      <div class="op-list">
        <ul>
          <li>
            <div class="left">
              <i class="iconfont icon43"></i>
              <p>卡券</p>
            </div>
            <div class="right">
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="iconfont iconshoucang"></i>
              <p>收藏</p>
            </div>
            <div class="right">
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="iconfont iconyuyue"></i>
              <p>预约</p>
            </div>
            <div class="right">
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="iconfont iconfukuanfangshi"></i>
              <p>银行卡</p>
            </div>
            <div class="right">
              <p>微信支付备用金</p>
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="iconfont iconbangzhuzhongxin"></i>
              <p>帮助中心</p>
            </div>
            <div class="right">
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="iconfont iconsuo"></i>
              <p>安全中心</p>
            </div>
            <div class="right">
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <i class="iconfont iconshezhi"></i>
              <p>设置</p>
            </div>
            <div class="right">
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.fen-center {
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-y: auto;
  .login {
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    background-color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 100%;
    box-sizing: border-box;
    .login-title {
      display: flex;
      img {
        width: 30px;
        margin-right: 8px;
      }
      .login-content {
        h3 {
          font-size: 11px;
          margin-bottom: 3px;
        }
        p {
          font-size: 15px;
          font-weight: bold;
          i {
            font-size: 14px;
          }
        }
      }
      .login-name {
        display: flex;
        align-items: center;
      }
    }
    .login-mes {
      i {
        position: relative;
        top: 6px;
      }
    }
  }
  .center-main {
    margin: 0 16px;
    margin-top: 50px;
    overflow: hidden;
    .iconfont {
      position: relative;
      top: 1px;
    }
    .repay {
      display: flex;
      justify-content: space-between;
      margin: 16px 0 10px;
      background-color: #fff;
      height: 60px;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #ededed;
      .left {
        display: flex;
        font-size: 25px;
        margin-left: 25px;
        span {
          font-size: 12px;
        }
      }
      .right {
        display: flex;
        font-size: 15px;
        i {
          margin-right: 8px;
          margin-left: 4px;
        }
      }
    }
    .order {
      background-color: #fff;
      margin-bottom: 8px;
      height: 108px;
      border: 1px solid #ededed;
      border-radius: 8px;
      ul {
        display: flex;
        align-items: center;
        height: 100%;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #84888f;
          font-size: 12px;
          i {
            font-size: 24px;
            margin-bottom: 12px;
            color: #000;
          }
        }
      }
    }
    .op-item {
      background-color: #fff;
      margin-bottom: 8px;
      height: 68px;
      border: 1px solid #ededed;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        font-weight: bold;
        font-size: 15px;
        color: #050c1c;
        align-items: center;
        img {
          width: 24px;
          margin-left: 20px;
          margin-right: 12px;
        }
      }
      .right {
        display: flex;
        font-size: 15px;
        color: #84888f;
        i {
          margin-right: 16px;
          margin-left: 8px;
        }
      }
    }
    .op-list {
      margin-bottom: 28px;
      ul {
        li {
          height: 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            align-items: center;
            i {
              margin-left: 8px;
              margin-right: 12px;
            }
            p {
              font-size: 15px;
              color: #050c1c;
              font-weight: bold;
            }
          }
          .right {
            display: flex;
            align-items: center;
            color: #84888f;
            font-size: 15px;
            i {
              margin: 0 8px;
            }
          }
        }
      }
    }
  }
}
</style>
