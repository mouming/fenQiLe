<template>
  <div class="fen-login">
    <section class="main-wrap">
      <div class="head-main">
        <p>{{logarr[logindex].logTitle}}</p>
      </div>
      <div class="login-banner"></div>
      <ul class="input-wrap">
        <li class="input-item">
          <i class="iconfont iconshouji"></i>
          <input
            class="input-set"
            id="test"
            type="text"
            :placeholder="logarr[logindex].impTel"
            maxlength="13"
            v-model="mobile"
            ref="mobile"
            @keyup="inputMobile"
            @paste="inputMobile"
          />
        </li>
        <li class="input-item">
          <i class="iconfont iconverify"></i>
          <input
            class="input-set"
            type="text"
            placeholder="6位数字验证码"
            maxlength="6"
            ref="card"
            v-model="card"
          />
          <span @click="getYzm()">获取验证码</span>
        </li>
      </ul>
      <div class="btn-wrap">
        <button>
          <span>{{logarr[logindex].logNext}}</span>
        </button>
      </div>
      <p class="read-wrap">
        <span>点击以上按钮即代表你已阅读并同意</span>
        <router-link to="./registerprotocol">用户注册协议、</router-link>
        <router-link to="./privacyprotocol">隐私保护政策</router-link>
      </p>
      <div class="link-box" @click="islog(logindex)">{{logarr[logindex].noAcc}}</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      mobile: '',
      card: '',
      logarr: [
        {
          logTitle: '登录分期乐',
          impTel: '输入手机号',
          logNext: '登录',
          noAcc: '没有账号？立即注册'
        },
        {
          logTitle: '注册分期乐账号',
          impTel: '输入本人手机号以注册',
          logNext: '下一步',
          noAcc: '已有账号？立即登录'
        }
      ],
      logindex: 0
    }
  },
  methods: {
    inputMobile(e) {
      this.formatMobile(e)
      this.mobile = this.$refs.mobile.value
    },
    formatMobile(e) {
      let val = this.$refs.mobile.value // 不可直接用this.mobile，第一方便提取该方法降低代码耦合度，第二直接用this.mobile,在输入汉字时按下shift按键会导致无法再输入和删除内容
      let selStart = this.$refs.mobile.selectionStart // 选中区域左边界位置
      let mobileLen = val.length
      let value = this.getValue(e, val).substr(0, 11) // 获取输入/粘贴内容,并截取前11位
      let len = value.length
      if (len > 3 && len < 8) {
        value = value.replace(/^(\d{3})/g, '$1 ')
      } else if (len >= 8) {
        value = value.replace(/^(\d{3})(\d{4})/g, '$1 $2 ')
      }
      this.$refs.mobile.value = value
      if (selStart !== mobileLen) {
        if (selStart === 3) {
          selStart++
        }
        // 设置光标位置
        this.$refs.mobile.selectionStart = this.$refs.mobile.selectionEnd = selStart
      }
    },
    getValue(e, val) {
      let value = ''
      if (e.type === 'keyup') {
        value = val.replace(/\D/g, '')
      } else if (e.type === 'paste') {
        // window.clipboardData：IE浏览器获取剪贴板数据对象
        // event.clipboardData：Chrome, Firefox, Safari获取剪贴板数据对象
        let clipboardData = event.clipboardData || window.clipboardData
        if (e.type.replace(/^1[345678]\d{9}$/)) {
          value = clipboardData.getData('Text') // 获取剪贴板text格式的数据
          value = value.replace(/\D/g, '')
        } else {
          value = ''
        }
      }
      return value
    },
    getYzm() {
      if ((this.mobile.length = 13)) {
      }
    },
    islog() {
      this.logindex = this.logindex ? 0 : 1
    }
  }
  // methods: {
  //   getYzm() {
  //     if (this.phone()) {
  //       // 发送验证码
  //       this.validateBtn()
  //     }
  //   },
  // validateBtn() {
  //   let time = 60
  //   let timer = setInterval(() => {
  //     if (time === 0) {
  //       clearInterval(timer)
  //       this.btnTitle = '获取验证码'
  //       this.disabled = false
  //     } else {
  //       // 倒计时
  //       this.btnTitle = time + '秒后重试'
  //       this.disabled = true
  //       time--
  //     }
  //   }, 1000)
  // },
  // validatePhone() {
  //   // 验证手机号码
  //   if (!this.phone) {
  //     return false
  //   } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
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
