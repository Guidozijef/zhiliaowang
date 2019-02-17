<template>
  <div class="goods-container">
    <div class="IT-container">
      <h2 class="top-title">网页源码</h2>
      <router-link :to="'/List/网页源码'">
        <span class="more">更多&gt;&gt;</span>
      </router-link>
      <ul class="top-sub">
        <li
          v-for="(sub,index) in subs"
          :key="index"
          @mouseover="changeActive($event)"
          @mouseout="removeActive($event)"
          @click="goGoodsInfo(sub.title)"
        >
          <div class="goods-img">
            <img :src="sub.imgUrl" alt>
          </div>
          <h3 class="goods-title">
            <a herf="#" :title="sub.title">{{sub.title}}</a>
          </h3>
          <div class="goods-price">
            <span class="price-sign">￥</span>
            <span class="price">{{sub.price}}</span>
            <div class="people-mub">
              <span class="icon is-small">
                <i class="fas fa-heart"></i>
              </span>
              20 人购买
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      subs: [
        {
          sourceUrl: "//item.mi.com/1161200059.html",
          imgUrl:
            "http://zhicoo.cn/upload/products/201711/14/1440125a0a8fcc74f98jlyfRb.png",
          title: "周公解梦网页源码",
          desc: "四天线设计，更安全更稳定",
          price: "159",
          discountType: "free",
          discount: "免邮费"
        },
        {
          sourceUrl: "//www.mi.com/mibicycle/",
          imgUrl:
            "http://zhicoo.cn/upload/products/201710/10/13180659dc580e8f705gxFlTJ.jpg",
          title: "专业站长平台系统源码",
          desc: "力矩传感电助力，让城市出行轻松有趣",
          price: "149",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/mitu/",
          imgUrl:
            "http://zhicoo.cn/upload/products/201711/14/1525295a0a9a69c1636jUWxdO.jpg",
          title: "92GAME飞翔商城模板",
          desc: "能说会道，宝宝的好玩伴",
          price: "199",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/water2/",
          imgUrl:
            "http://zhicoo.cn/upload/products/201808/27/1554245b83ae302fbf1U6NHhl_thumb.jpg",
          title: "PHP米酷影院网站源码(MKCMS4.4.3完整版) 自动采集",
          desc: "厨下式 RO反渗透直出纯净水，包邮包安装",
          price: "199"
        },
        {
          sourceUrl: "//www.mi.com/ihealth/ ",
          imgUrl:
            "http://zhicoo.cn/upload/products/201801/17/1554575a5f01518d3550wmAUq_thumb.png",
          title: "微赞体重预测平台系统源码",
          desc: "送给父母的健康礼物 测血压仅需1步",
          price: "199"
        },
        {
          sourceUrl: "//www.mi.com/dianfanbao/",
          imgUrl:
            "http://zhicoo.cn/upload/products/201801/17/1604045a5f0374ef02fUzNI6d_thumb.jpg",
          title: "laravel内核带采集小程序商店，小程序",
          desc: "智能烹饪，3L 容量",
          price: "99"
        },
        {
          sourceUrl: "//item.mi.com/1163200015.html",
          imgUrl:
            "http://zhicoo.cn/upload/products/201806/03/1615465b13a3b28c805zWD7zs_thumb.jpg",
          title: "数字交易系统源码交易商城多商户新版源码交易商城含网站",
          desc: "开启你的智能生活",
          price: "292",
          oldPrice: "325",
          discountType: "discount",
          discount: "享九折"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://zhicoo.cn/upload/products/201708/18/1626115996a4a310cb1P2YCXC.png",
          title: "Laravel内核开发淘宝客系统淘宝客优惠券源码全站",
          desc: "实时监测心率，科学运动",
          price: "499"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://zhicoo.cn/upload/products/201810/26/1739175bd2e0c5183cfL4WcnW_thumb.gif",
          title: "微擎微赞仿拼多多拼团小程序拼团商城2.07商业版,拼多多一",
          desc: "实时监测心率，科学运动",
          price: "99"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://zhicoo.cn/upload/products/201810/26/1736595bd2e03b8efa93TZ83k_thumb.gif",
          title: "志汇超级外卖餐饮小程序 V5.8.0 后台模块+前端小程序",
          desc: "实时监测心率，科学运动",
          price: "99"
        }
      ]
    };
  },
  methods: {
    // 鼠标移入加入active类，即是动画
    changeActive($event) {
      $event.currentTarget.className = "active";
    },
    // 鼠标移出移除active类
    removeActive($event) {
      $event.currentTarget.className = "";
    },
    // 点击进入商品详情页
    goGoodsInfo(id) {
      this.$router.push({ name: "itgoodsinfo", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-container {
  background-color: #f5f5f5;
  height: 650px;
  margin-bottom: 20px;
  .IT-container {
    padding-top: 10px;
    // width: 93%;
    width: 1255px;
    margin: 0 auto;
    .top-title {
      display: inline;
      margin: 0;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
      padding-left: 5px;
      padding-top: 5px;
      border-left: 5px solid rebeccapurple;
    }
    .more {
      float: right;
      margin-right: 20px;
      line-height: 58px;
      color: #333;
      &:hover {
        color: #2673db;
      }
    }
    .top-sub {
      // 动画类
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .active {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        // transform: translate3d(0, -3px, 0);
        transform: scale(1.02);
      }
      li {
        float: left;
        margin: 0 10px 20px 10px;
        // width: 18.2%;
        width: 230px;
        height: 250px;
        background-color: #fff;
        transition: all 0.2s linear;
        .goods-img {
          width: 230px;
          margin: 0 auto 20px;
          text-align: center;
          height: 152px;
          overflow: hidden;
        }
        .goods-title {
          font-size: 16px;
          text-align: center;
          width: 230px;
          a {
            color: #333;
            display: inline-block;
            padding: 0 10px;
            width: 230px;
            height: auto;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .goods-price {
          margin-top: 5px;
          margin-left: 10px;
          .price-sign {
            font-size: 15px;
            // text-transform: uppercase;
            color: #ff0a0a;
            display: inline-block;
          }
          .price {
            font-family: "Mricosoft Yahei";
            font-size: 22px;
            color: rgb(230, 7, 7);
          }
          .people-mub {
            float: right;
            color: #999;
            font-size: 13px;
            margin-top: 15px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>

