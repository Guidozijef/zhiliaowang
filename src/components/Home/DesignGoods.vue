<template>
  <div class="goods-container">
    <div class="IT-container">
      <h2 class="top-title">产品设计</h2>
      <router-link :to="'/List/产品设计'">
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
            "http://yun.itheima.com/Upload//./Images/20180806/5b6817fee651a.jpg",
          title: "2018版Photoshop从浅入深教程",
          desc: "四天线设计，更安全更稳定",
          price: "149",
          discountType: "free",
          discount: "免邮费"
        },
        {
          sourceUrl: "//www.mi.com/mibicycle/",
          imgUrl:
            "http://yun.itheima.com/Upload/./Images/20180807/5b6962cd9c4d9.jpg",
          title: "后期特效合成软件AE基础入门精品教程",
          desc: "力矩传感电助力，让城市出行轻松有趣",
          price: "149",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/mitu/",
          imgUrl:
            "http://yun.itheima.com/Upload/./Images/20180807/5b69615b40966.jpg",
          title: "C4D三维软件基础入门精品教程",
          desc: "能说会道，宝宝的好玩伴",
          price: "199",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/water2/",
          imgUrl:
            "http://yun.itheima.com/Upload/./Images/20190118/5c414b86c6ea0.jpg",
          title: "影视制作|零基础快速成为剪辑“大咖”",
          desc: "厨下式 RO反渗透直出纯净水，包邮包安装",
          price: "199"
        },
        {
          sourceUrl: "//www.mi.com/ihealth/ ",
          imgUrl:
            "http://yun.itheima.com/Upload/./Images/20180702/5b39e43213bda.jpg",
          title: "特效剪辑-魔术师之五大神技",
          desc: "送给父母的健康礼物 测血压仅需1步",
          price: "194"
        },
        {
          sourceUrl: "//www.mi.com/dianfanbao/",
          imgUrl:
            "http://yun.itheima.com/Upload/./Images/20180629/5b360069c7799.jpg",
          title: "剪辑理念——你被自己的大脑欺骗了",
          desc: "智能烹饪，3L 容量",
          price: "99"
        },
        {
          sourceUrl: "//item.mi.com/1163200015.html",
          imgUrl:
            "http://yun.itheima.com/Upload/./Images/20180629/5b358f394d5fa.jpg",
          title: "影视行业发展路径及剪辑软件基础",
          desc: "开启你的智能生活",
          price: "292",
          oldPrice: "325",
          discountType: "discount",
          discount: "享九折"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://yun.itheima.com/Upload//./Images/20190117/5c403ce78089a.jpg",
          title: "高端AE制作教程--业内最详细的光线穿梭步骤分析",
          desc: "实时监测心率，科学运动",
          price: "42"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://yun.itheima.com/Upload//./Images/20160119/569dfebef3eec.jpg",
          title: "Cocos2D-x教程_Cocos2D-x视频教程|黑马程序员",
          desc: "实时监测心率，科学运动",
          price: "95"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://yun.itheima.com/Upload//./Images/20170330/58dcc8de4d958.jpg",
          title: "新媒体营销特训营基础班",
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
    // 鼠标移入移除active类
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
      // 动画类
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

