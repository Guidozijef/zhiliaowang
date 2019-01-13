<template>
  <div class="fooder-container">
    <div class="footer-service">
      <ul>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a herf="#">售后服务</a>
        </li>
        <li>
          <a herf="#">联系我们</a>
        </li>
        <li>
          <a herf="#">商业合作</a>
        </li>
        <li>
          <a herf="#">关于我们</a>
        </li>
      </ul>
    </div>
    <div class="site-info">
      <p class="company_info">
        <span id="copyright_desc">Copyright © 2015-2025 ZHIL知了商城&nbsp;版权所有 保留一切权利</span>
      </p>
      <p class="company">
        <a href="#">知了信息技术有限公司&nbsp;提供技术支持</a>&nbsp;&nbsp;
        <a href="#" style="text-decoration: none;">备案号：0337254</a>
      </p>
      <span class="affiche">本网站信息均为爬虫采集，如有侵权，请务必联系我们</span>
    </div>
    <!-- <br> -->
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.fooder-container {
  .footer-service {
    width: 100%;
    padding: 27px 0;
    margin: 0 auto;
    // border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #b0b0b0;
    background-color: #4f4f4f;
    ul {
      height: 25px;

      li {
        font-family: "Mricosoft Yahei";
        float: left;
        width: 20%;
        height: 25px;
        border-left: 1px solid #e0e0e0;
        font-size: 16px;
        text-align: center;
        &:first-child {
          border-left: 0;
        }
        a {
          color: #fff;
          line-height: 25px;
          &:hover {
            color: #2673db;
          }
        }
      }
    }
  }
  .site-info {
    overflow: hidden;
    background-color: #4f4f4f;
    height: 100px;
    .company_info {
      margin: 10px 0;
      color: #b5b5b5;
      span {
        display: block;
        text-align: center;
      }
    }
    .company {
      margin: 8px 0;
      text-align: center;
      a {
        color: #b5b5b5;
        &:hover {
          color: #2673db;
        }
      }
    }
    .affiche {
      display: block;
      text-align: center;
      margin: 8px 0;
      color: #b5b5b5;
    }
  }
}
</style>

