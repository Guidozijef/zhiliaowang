<template>
  <!-- 如果在登录页要想不显示heder和footer就用路由直接控制，这里没单独写登录页面不需要 -->
  <!-- <div class="headers" v-if="$route.path != '/login/'"> -->
  <div class="headers">
    <!-- 头部header信息区域 -->
    <div class="top-header">
      <span class="hello">您好！欢迎来到知了网</span>
      <ul class="menu-box">
        <li class="menu-item">
          <!-- <router-link :to="'/login/'">登录</router-link> -->
          <a @click="showLogin()" v-show="loginText">登录</a>
          <a v-show="!loginText">{{user}}</a>
          <a v-show="!loginText" @click="loginText = !loginText">，退出登录</a>
          <span>|</span>
          <a @click="showSignin()">注册</a>
          <span>|</span>
          <a href="#">关注商城</a>
          <b></b>
          <span>|</span>
          <a href="#">手机端</a>
          <span>|</span>
          <a href="#">帮助中心</a>
        </li>
      </ul>
    </div>
    <!-- 头部header搜索框区域 -->
    <div class="header">
      <div class="logo">
        <a href="#/home">
          <img src="../assets/images/zhiliao.png" alt="logo">
        </a>
      </div>
      <!-- 搜索框组件 -->
      <p class="control has-addons has-addons-right">
        <span class="select is-large">
          <select>
            <option>视频</option>
            <option>源码</option>
            <option>文档</option>
          </select>
        </span>
        <input
          class="input is-large"
          type="text"
          placeholder="Search"
          v-model="label"
          style="width:500px"
        >
        <button @click="goSerch(label)" class="button is-primary is-large">搜索</button>
        <!-- <router-link :to="'/search/' + label" class="button is-primary is-large">搜索</router-link> -->
      </p>
    </div>
    <!-- 登录里面需要点击注册，注册里面要登录，所以要传两个参数 -->
    <login
      :visible_Login.sync="visible_Login"
      :visible_Signin.sync="visible_Signin"
      @receive-user="changeUser"
    ></login>
    <signin :visible_Signin.sync="visible_Signin" :visible_Login.sync="visible_Login"></signin>
  </div>
</template>
<script>
import login from "./Login/Login";
import signin from "./Signin/Signin";
export default {
  data() {
    return {
      user: "",
      loginText: true,
      label: "",
      message: true,
      visible_Login: false,
      visible_Signin: false
    };
  },
  components: {
    login,
    signin
  },
  methods: {
    showLogin() {
      this.visible_Login = true;
    },
    showSignin() {
      this.visible_Signin = true;
    },
    goSerch(id) {
      if (id != "") {
        this.$router.push({ name: "search", params: { id } });
      }
      this.label = "";
    },
    changeUser(username, loginText) {
      // alert("我被触发了");
      this.user = username;
      this.loginText = loginText;
    }
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  height: 40px;
  width: 100%;
  background: #f7f7f7;
  .hello {
    font-size: 12px;
    line-height: 40px;
    margin-left: 50px;
    color: #666;
  }
  .menu-box {
    margin-right: 50px;
    float: right;
    line-height: 40px;
    .menu-item {
      display: inline-block;
      span {
        color: #e2e2e2;
      }
      a {
        font-size: 12px;
        color: #666;
        &:hover {
          color: #2673db;
        }
      }
      b {
        display: inline-block;
        width: 11px;
        height: 11px;
      }
    }
  }
}
.header {
  .logo {
    position: absolute;
    top: 53px;
    left: 66px;
    width: 200px;
    z-index: 99;
  }
  .control {
    margin: 30px 300px 30px 0px;
    select {
      font-size: 13px;
      font-family: "Mricosoft Yahei";
      padding-right: 30px;
    }
    input,
    .button {
      font-size: 16px;
      font-family: "Mricosoft Yahei";
    }
  }
}
</style>


