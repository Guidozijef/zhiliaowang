<template>
  <div class="login-container" v-show="visible_Login">
    <div class="login-box">
      <div class="title">
        <h1>登录</h1>
        <span class="exit" @click="hideLogin()">×</span>
      </div>
      <p class="control has-icon">
        <input
          class="input is-medium"
          type="phone/email"
          v-model="username"
          placeholder="请输入手机号或邮箱"
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
          type="passworld"
          v-model="password"
          placeholder="请输入密码"
          @keyup.enter="login()"
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
      <a class="button is-primary is-medium" @click="login()">登录</a>
      <div class="prompt-box">
        没有账号？
        <span class="clickable" @click="goSignin()">注册</span>
        <a href="javascript:;" class="right clickable">忘记密码</a>
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
      password: ""
    };
  },
  props: {
    visible_Login: {
      type: Boolean
    },
    visible_Signin: {
      type: Boolean
    }
  },
  methods: {
    hideLogin() {
      // 下面的语句配合开头写的 .sync 就会更新父组件中的 visible_Login 变量
      this.$emit("update:visible_Login", false);
    },
    goSignin() {
      // 在登录里面点击注册后：
      // 1.调用 hideLogin() 方法关闭登录页，
      // 2.然后修改 headers父组件 中控制注册页的值，使其显示注册页
      this.hideLogin();
      this.$emit("update:visible_Signin", true);
    },
    // 点击登录
    login() {
      var data = {
        username: this.username,
        password: this.password
      };
      this.$axios
        .http({ type: "post", url: "/login", data: data })
        .then(res => {
          if (res.status == 200) {
            console.log(res.status);
            this.$emit("receive-user", res.data.username, false);
            this.$message({
              message: "恭喜你，已经成功登录",
              type: "success"
            });
            console.log("登录成功");
            console.log(res.data.username);
          }
        })
        .catch(function(error) {
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

      this.username = "";
      this.password = "";
      this.hideLogin();
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
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
  .login-box {
    position: relative;
    padding: 24px;
    width: 320px;
    height: 370px;
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
      span {
        color: #007fff;
        cursor: pointer;
      }
      a {
        color: #007fff;
        cursor: pointer;
        float: right;
        width: 56px;
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


