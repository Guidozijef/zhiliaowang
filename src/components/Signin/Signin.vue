<template>
  <div class="signin-container" v-show="visible_Signin">
    <div class="signin-box">
      <div class="title">
        <h1>注册</h1>
        <span class="exit" @click="hideSignin()">×</span>
      </div>
      <p class="control has-icon">
        <input
          class="input is-medium"
          type="user"
          v-model="username"
          v-m
          placeholder="请输入用户名"
          style="fontSize:14px"
        >
        <i
          class="fas fa-user"
          style="font-size: 14px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          width: 24px;
          color: #dbdbdb;
          position: absolute;
          top: 8px;
          z-index: 4;
          left: 8px;"
        ></i>
      </p>
      <p class="control has-icon">
        <input
          class="input is-medium"
          type="phone"
          v-model="phone_email"
          placeholder="请输入手机号或者邮箱"
          style="fontSize:14px"
        >
        <i
          class="fas fa-mobile-phone"
          style="font-size: 14px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          width: 24px;
          color: #dbdbdb;
          position: absolute;
          top: 8px;
          z-index: 4;
          left: 8px;"
        ></i>
      </p>
      <p class="control has-icon">
        <input
          class="input is-medium"
          type="passworld"
          v-model="password"
          @keyup.enter="signin()"
          placeholder="请输入密码（不少于6位数）"
          style="fontSize:14px"
        >
        <i
          class="fas fa-lock"
          style="font-size: 14px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          width: 24px;
          color: #dbdbdb;
          position: absolute;
          top: 8px;
          z-index: 4;
          left: 8px;"
        ></i>
      </p>
      <a class="button is-primary is-medium" @click="signin()">注册</a>
      <div class="prompt-box">
        <span class="clickable" @click="goLogin()">已有账号登录</span>
      </div>
      <div class="oauth-box">
        <div class="hint">第三方账号登录：</div>
        <div class="oauth">
          <div class="oauth-bg">
            <img title="微博" alt="微博" src="../../assets/images/weibo.fa758eb.svg" class="oauth-btn">
          </div>
          <div class="oauth-bg">
            <img title="微信" alt="微信" src="../../assets/images/wechat.e0ff124.svg" class="oauth-btn">
          </div>
          <div class="oauth-bg">
            <img
              title="GitHub"
              alt="GitHub"
              src="../../assets/images/github.547dd8a.svg"
              class="oauth-btn"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      phone_email: ""
    };
  },
  props: {
    visible_Signin: {
      type: Boolean
    }
  },
  methods: {
    // 点击×关闭注册页面
    hideSignin() {
      // 下面的语句配合开头写的 .sync 就会更新父组件中的 visible_Signin 变量
      this.$emit("update:visible_Signin", false);
    },
    // 点击切换到登录页面
    goLogin() {
      // 在注册里面点击登录后：
      // 1.调用 hideSignin() 方法关闭注册页，
      // 2.然后修改 headers父组件 中控制登录页的值，使其显示登录页
      this.hideSignin();
      this.$emit("update:visible_Login", true);
    },
    // 发送注册请求
    signin() {
      // 初始化leancloud
      // var AV = require("leancloud-storage");
      // var { Query, User } = AV;
      // console.log(AV);
      // 判断如果包含 @ 符号，字段就为邮箱，否则就为手机号
      if (this.phone_email.includes("@")) {
        let data = {
          username: this.username,
          password: this.password,
          email: this.phone_email
        };
      } else {
        let data = {
          username: this.username,
          password: this.password,
          phone: this.phone_email
        };
      }
      this.$axios
        .http({ type: "post", url: "/users", data: data })
        .then(res => {
          console.log(res);
        });
      // 点注册按钮后关闭注册组件
      this.hideSignin();
    }
  }
};
</script>
<style lang="scss" scoped>
.signin-container {
  // overflow: hidden;
  // width: 100%;
  // height: 625px;
  // background: url("../../assets/images/home_top_bg.jpg") no-repeat center center;
  // background-color: #420c5c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 500;
  .signin-box {
    position: relative;
    padding: 24px;
    width: 320px;
    height: 420px;
    max-width: 100%;
    font-size: 1.167rem;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    margin: 100px auto;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      height: 30px;
      h1 {
        font-size: 18px;
        color: #000;
        font-weight: 900;
        line-height: 30px;
      }
      .exit {
        line-height: 30px;
        cursor: pointer;
        color: #adadad;
        &:hover {
          color: #000;
        }
      }
    }
    a {
      width: 100%;
      font-size: 14px;
    }
    .prompt-box {
      margin: 1rem 0 0;
      color: #8b9196;
      font-size: 14px;
      text-align: center;
      span {
        color: #007fff;
        cursor: pointer;
      }
    }
    .oauth-box {
      margin-top: 14px;
      .hint {
        line-height: 1.9rem;
        color: #8b9196;
        font-size: 14px;
      }
      .oauth {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 15px;
        .oauth-bg {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #f4f8fb;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 1.9rem;
            vertical-align: bottom;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>




