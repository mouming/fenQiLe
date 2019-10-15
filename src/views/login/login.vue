<template>
  <div class="fen-login">
    <section class="main-wrap">
      <div class="head-main">
        <p>登录分期乐</p>
      </div>
      <div class="login-banner"></div>
      <!-- 手机号 -->
      <!-- <inputGroutp
        type="number"
        v-model="phone"
        placeholder="输入手机号"
        :btnTitle="btnTitle"
        :disabled="disabled"
        :error="error.phone"
      ></inputGroutp>-->
      <!-- 6位数验证码 -->
      <!-- <inputGroutp type="number" v-model="verifyCode" placeholder="6位数验证码" :error="error.code"></inputGroutp> -->
      <ul class="input-wrap">
        <li class="input-item">
          <i class="iconfont iconshouji"></i>
          <input
            class="input-set"
            id="test"
            type="text"
            placeholder="输入手机号"
            maxlength="13"
            v-model="phone"
          />
        </li>
        <li class="input-item">
          <i class="iconfont iconverify"></i>
          <input
            class="input-set"
            type="password"
            placeholder="6位数字验证码"
            maxlength="6"
            v-model="password"
          />
          <span @click="validateBtn">获取验证码</span>
        </li>
      </ul>
      <div class="btn-wrap">
        <button :disabled="isValid" value="登录">
          <!-- <span>登录</span> -->
        </button>
      </div>
      <p class="read-wrap">
        <span>点击以上按钮即代表你已阅读并同意</span>
        <router-link to="./registerprotocol">用户注册协议、</router-link>
        <router-link to="./privacyprotocol">隐私保护政策</router-link>
      </p>
      <div class="link-box">没有账号？立即注册</div>
      <div class="link-box">已有账号？立即登录</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    getYzm() {
      if (this.validatePhone()) {
        // 发送验证码
        this.validateBtn()
      }
    },
    validateBtn() {
      let time = 60
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.btnTitle = '获取验证码'
          this.disabled = false
        } else {
          // 倒计时
          this.btnTitle = time + '秒后重试'
          this.disabled = true
          time--
        }
      }, 1000)
    },
    validatePhone() {
      // 验证手机号码
      if (!this.phone) {
        return false
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixins.scss';
@import url(//at.alicdn.com/t/font_1449548_uvtshexrsy.css);
.fen-login {
  font-family: microsoft yahei, pingfang sc;
  .main-wrap {
    background-color: #fff;
    .head-main {
      height: 44px;
      background-color: rgb(59, 155, 255);
      p {
        font-size: 17px;
        color: #fff;
        text-align: center;
        line-height: 44px;
      }
    }
    .login-banner {
      height: 170px;
      background: url('https://cres1.fenqile.cn/passport/online/img/68e05730d3e8de226f3fcf3da648dcc6.png')
        50% / auto 70px no-repeat #3b9bff;
      margin-top: -1px;
      text-shadow: 0 0 black;
    }
    .input-wrap {
      height: 96px;
      margin: 10px 0 20px;
      .input-item {
        height: 48px;
        align-items: center;
        display: flex;
        padding: 0 14px 0 18px;
        @include border-bottom;
        .input-set {
          border: none;
          flex-grow: 1;
          font-size: 14px;
          line-height: 20px;
          outline: none;
          @include pl-set;
        }
        i {
          margin: 0 16px 0 0;
          font-size: 22px;
          color: #cbcccf;
        }
        span {
          font-size: 14px;
          color: #aaa;
        }
      }
    }
    .btn-wrap {
      height: 44px;
      padding: 0 18px;
      button {
        font-size: 14px;
        background-color: #78baff;
        color: #abd4ff;
        padding: 0 15px;
        border: 0;
        border-radius: 4px;
        display: inline-block;
        width: 100%;
        text-align: center;
        line-height: 44px;
        user-select: none;
        span {
          color: #abd4ff;
          font-size: 14px;
        }
      }
    }
    .read-wrap {
      height: 30px;
      margin: 16px 18px;
      span {
        color: #757c8e;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 15px;
      }
      a {
        color: #3b9bff;
        font-size: 12px;
      }
    }
    .link-box {
      @include border-top;
      height: 56px;
      line-height: 56px;
      text-align: center;
      background-color: #fff;
      color: #3b9bff;
      bottom: 0;
      font-weight: 700;
      font-size: 14px;
      position: absolute;
      width: 100%;
    }
  }
}
</style>
