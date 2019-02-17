<template>
  <div class="goods-container">
    <div class="IT-container">
      <h2 class="top-title">IT行业</h2>
      <router-link :to="'/List/IT行业'">
        <span class="more">更多&gt;&gt;</span>
      </router-link>
      <ul class="top-sub">
        <li
          v-for="sub in subs"
          :key="sub.price"
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
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20180806/5b6817e00a106.jpg",
          title: "java基础教程(编程就像打字一样简单)",
          desc: "四天线设计，更安全更稳定",
          price: "1249",
          discountType: "free",
          discount: "免邮费"
        },
        {
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20180806/5b6817bf3a9ae.jpg",
          title: "Python入门教程完整版（懂中文就能学会）",
          desc: "力矩传感电助力，让城市出行轻松有趣",
          price: "149",
          discountType: "new",
          discount: "新品"
        },
        {
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20150828/55e02efda8a0c.jpg",
          title: "JavaWeb教程_JavaWeb入门教程|黑马程序员",
          desc: "能说会道，宝宝的好玩伴",
          price: "199",
          discountType: "new",
          discount: "新品"
        },
        {
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20180806/5b679fbb75913.jpg",
          title: "go语言基础深入浅出",
          desc: "厨下式 RO反渗透直出纯净水，包邮包安装",
          price: "1999"
        },
        {
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20180806/5b681838eacd1.jpg",
          title: "大数据hadoop教程入门",
          desc: "送给父母的健康礼物 测血压仅需1步",
          price: "1499"
        },
        {
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20190126/5c4bc39216027.jpg",
          title: "带你剖析JS轮播图原理",
          desc: "智能烹饪，3L 容量",
          price: "9909"
        },
        {
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20170809/598ad70525c4f.jpg",
          title:
            "Web前端入门教程_Web前端入门视频教程(html+css+JavaScript)入门|黑马程序员",
          desc: "开启你的智能生活",
          price: "2912",
          oldPrice: "325",
          discountType: "discount",
          discount: "享九折"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20190127/5c4d1fff57b10.jpg",
          title: "PHP初级教程_PHP零基础通关宝典",
          desc: "实时监测心率，科学运动",
          price: "969"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20180425/5ae037472637e.jpg",
          title: "轻松掌握C语言视频教程（会打字就能学会）",
          desc: "实时监测心率，科学运动",
          price: "599"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl:
            "http://yun.itheima.com/Upload//Images/20150828/55e02f22e3d47.jpg",
          title: "毕向东Java基础教程（适合初学者入门的Java基础视频）",
          desc: "实时监测心率，科学运动",
          price: "949"
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

