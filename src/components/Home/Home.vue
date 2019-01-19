<template>
  <div class="center-container">
    <div class="silde">
      <!-- 导航条 -->
      <div class="navigation">
        <ul class="silde-list">
          <span class="icon is-small good-all">
            <i class="fas fa-bars"></i>
            <router-link :to="'/List/' + '全部商品分类'">全部商品分类</router-link>
          </span>
          <li v-for="(info, index) in GPSList" :key="info.index">
            <router-link :to="'/List/' + info.title">{{info.title}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 全部分类的详情 -->
      <div class="all-list">
        <ul @mouseleave="tagle = !tagle">
          <li v-for="(item,index) in sideItems" :key="index" @mouseenter="showDetails(item.type)">
            <a href>{{item.content}}</a>
            <span>&gt;</span>
          </li>
          <div class="details" v-show="tagle">
            <ul v-for="(goods,index) in filterCurrGoods" :key="index">
              <div class="info" v-for="(good,index) in goods" :key="index">
                <a href>{{good.info}}</a>
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </div>
    <swiper></swiper>
    <itgoods></itgoods>
    <designgoods></designgoods>
    <codegoods></codegoods>
    <sanweigoods></sanweigoods>
    <bars></bars>
  </div>
</template>
<script>
import swiper from "../Home/Swiper";
import itgoods from "../Home/ItGoods";
import designgoods from "../Home/DesignGoods";
import bars from "../Home/Bars";
import codegoods from "../Home/CodeGoods";
import sanweigoods from "../Home/SanweiGoods";

export default {
  data() {
    return {
      detailsList: [],
      tagle: false,
      GPSList: [
        { title: "机械制造" },
        { title: "互联网" },
        // { title: "御灵代刷" },
        { title: "免费专区" },
        { title: "9.9包邮" }
      ],
      sideItems: [
        { type: "jixie", content: "机械制造" },
        { type: "It", content: "计算机/互联网" },
        { type: "sanwei", content: "三维逆向" },
        { type: "code", content: "网页源码" },
        { type: "twoD", content: "平面设计" }
      ],
      jixie: [
        { info: "UG" },
        { info: "soildwork" },
        { info: "pore" },
        { info: "模具设计" },
        { info: "数控编程" },
        { info: "三维建模" }
      ],
      It: [
        { info: "python" },
        { info: "java" },
        { info: "C" },
        { info: "PHP" }
      ],
      sanwei: [{ info: "杰魔" }, { info: "UG造型" }, { info: "DX" }],
      code: [{ info: "PHP" }, { info: "ASD" }, { info: "DX" }],
      twoD: [{ info: "PS" }, { info: "AI" }, { info: "DX" }]
    };
  },
  components: {
    swiper,
    itgoods,
    designgoods,
    bars,
    codegoods,
    sanweigoods
  },
  computed: {
    filterCurrGoods: function() {
      var detailsListGoods = [[], [], [], [], []];
      this.detailsList.forEach(function(item, index) {
        let goodsIndex = Math.floor(index / 6);
        detailsListGoods[goodsIndex].push(item);
      });
      return detailsListGoods;
    }
  },
  methods: {
    showDetails(currType) {
      this.detailsList = this[currType];
      this.tagle = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.silde {
  width: 93%;
  margin: 0 auto;
  .navigation {
    .silde-list {
      li {
        display: inline-block;
        font-size: 18px;
        font-family: "Mricosoft Yahei";
        padding: 10px 25px 10px 25px;
        a {
          color: #333;
        }
      }
      li:hover {
        color: #2673db;
        border-bottom: 2px solid #2673db;
        a {
          color: #2673db;
        }
      }
      .good-all {
        font-size: 18px;
        height: 47px;
        width: 250px;
        line-height: 47px;
        font-family: "Mricosoft Yahei";
        background-color: #2673db;
        color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
  .all-list {
    position: absolute;
    float: left;
    z-index: 99;
    width: 250px;
    height: 400px;
    // background-color: #3C81DF;
    background: rgba(0, 0, 0, 0.6);
    li {
      height: 50px;
      padding-left: 25px;
      // text-align: center;
      line-height: 50px;
      font-size: 14px;
      font-family: Mricosoft Yahei;
      color: #fff;
      &:hover {
        background-color: #eeeeee;
        a {
          color: #000;
        }
      }
      span {
        float: right;
        margin-right: 15px;
      }
      a {
        color: #fff;
      }
    }
    .details {
      position: absolute;
      top: 0px;
      left: 250px;
      width: 300px;
      height: 400px;
      background-color: #fff;
      z-index: 99;
      .info {
        height: 50px;
        padding-left: 20px;
        width: 100%;
        &:hover {
          background-color: #eee;
        }
        a {
          font-size: 16px;
          color: #000;
          line-height: 50px;
          &:hover {
            color: #2673db;
          }
        }
      }
    }
  }
}
</style>

