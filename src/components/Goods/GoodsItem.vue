<template>
  <div class="goods-box">
    <div class="goods-item">
      <ul class="top-sub">
        <li
          v-for="(sub, index) in subs"
          :key="index"
          @mouseover="changeActive($event)"
          @mouseout="removeActive($event)"
          @click="goGoodsInfo(sub.title)"
        >
          <div class="goods-img">
            <img :src="sub.imgUrl" alt width="200px" height="200px">
          </div>
          <h3 class="goods-title">
            <a herf="#">{{sub.title}}</a>
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
          imgUrl: "http://i3.mifile.cn/a4/T1rQAgB7Av1RXrhCrK.jpg",
          title: "小米路由器3",
          desc: "四天线设计，更安全更稳定",
          price: "1149",
          discountType: "free",
          discount: "免邮费"
        },
        {
          sourceUrl: "//www.mi.com/mibicycle/",
          imgUrl: "http://i3.mifile.cn/a4/2b69b930-a2fd-4d09-a46a-8690cb79f764",
          title: "电助力折叠自行车",
          desc: "力矩传感电助力，让城市出行轻松有趣",
          price: "149",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/mitu/",
          imgUrl: "http://i1.mifile.cn/a1/pms_1464615180.86261317!220x220.jpg",
          title: "米兔智能故事机",
          desc: "能说会道，宝宝的好玩伴",
          price: "199",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/water2/",
          imgUrl: "//i3.mifile.cn/a4/T1zTK_Bbhv1RXrhCrK.jpg",
          title: "小米净水器",
          desc: "厨下式 RO反渗透直出纯净水，包邮包安装",
          price: "1999"
        },
        {
          sourceUrl: "//www.mi.com/ihealth/ ",
          imgUrl: "http://i1.mifile.cn/a1/T17FCQByWv1RXrhCrK!220x220.jpg",
          title: "iHealth智能血压计（蓝牙版）",
          desc: "送给父母的健康礼物 测血压仅需1步",
          price: "1099"
        },
        {
          sourceUrl: "//www.mi.com/dianfanbao/",
          imgUrl: "http://i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg",
          title: "米家压力IH电饭煲",
          desc: "智能烹饪，3L 容量",
          price: "999"
        },
        {
          sourceUrl: "//item.mi.com/1163200015.html",
          imgUrl: "http://i1.mifile.cn/a1/pms_1470730028.12443689!220x220.jpg",
          title: "全系智能套装限时款",
          desc: "开启你的智能生活",
          price: "292",
          oldPrice: "325",
          discountType: "discount",
          discount: "享九折"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl: "http://i1.mifile.cn/a1/T1HcAQBgDT1RXrhCrK!220x220.jpg",
          title: "小米手环 光感版",
          desc: "实时监测心率，科学运动",
          price: "599"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl: "http://i1.mifile.cn/a1/T1HcAQBgDT1RXrhCrK!220x220.jpg",
          title: "小米手环 光感版",
          desc: "实时监测心率，科学运动",
          price: "499"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl: "http://i1.mifile.cn/a1/T1HcAQBgDT1RXrhCrK!220x220.jpg",
          title: "小米手环 光感版",
          desc: "实时监测心率，科学运动",
          price: "919"
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
.goods-box {
  width: 100%;
  height: 900px;
  background-color: #f5f5f5;
  .goods-item {
    padding-top: 10px;
    width: 93%;
    margin: 0 auto;
    .top-sub {
      // 动画类
      .active {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        // transform: translate3d(0, -3px, 0);
        transform: scale(1.02);
      }
      li {
        float: left;
        margin: 0 10px 20px 10px;
        width: 18.4%;
        height: 300px;
        background-color: #fff;
        transition: all 0.2s linear;
        .goods-img {
          width: 200px;
          height: 200px;
          margin: 0 auto 20px;
        }
        .goods-title {
          font-size: 16px;
          text-align: center;
          a {
            color: #333;
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


