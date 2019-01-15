<template>
  <div class="search-container">
    <silde></silde>
    <div class="header-line">
      <breadcrumb>你的位置：
        <breadcrumb-item label="首页" to="#/home"></breadcrumb-item>
        <!-- <breadcrumb-item label="互联网" to="#/components"></breadcrumb-item> -->
        <breadcrumb-item :label="label" :to="'#/List/' + this.label"></breadcrumb-item>
      </breadcrumb>
    </div>
    <div class="search-list">
      <div class="search-classify">
        <ul>
          <li>
            <a
              v-for="(item, index1) in classList1"
              :key="index1"
              @click="addClick1(index1)"
              :class="{ present:current1 == index1 }"
              href="javascript:;"
            >{{ item.content }}</a>
            <!--present:current1 == index1  表示如果 current1 == index1就加入这个类-->
          </li>
          <li>
            <a
              v-for="(item, index2) in classList2"
              :key="index2"
              @click="addClick2(index2)"
              :class="{ present:current2 == index2 }"
              href="javascript:;"
            >{{ item.content }}</a>
          </li>
        </ul>
      </div>
    </div>
    <goodsitem></goodsitem>
  </div>
</template>


<script>
import silde from "../Goods/Silde";
import goodsitem from "../Goods/GoodsItem";
export default {
  // 点击进入这个组件时，马上初始化并把值传递给面包屑
  created() {
    this.label = this.$route.params.id;
  },
  data() {
    return {
      label: "", // 面包屑参数
      current1: 0,
      current2: 0,
      classList1: [
        { content: "综合排序" },
        { content: "销量" },
        { content: "价格" }
      ],
      classList2: [
        { content: "全部类别" },
        { content: "视频" },
        { content: "源码" },
        { content: "文档" }
      ]
    };
  },
  components: {
    silde,
    goodsitem
  },
  methods: {
    addClick1(index1) {
      this.current1 = index1;
    },
    addClick2(index2) {
      this.current2 = index2;
    }
  },
  // 监听路由，改变时把路由值取出来赋值到面包屑中
  watch: {
    $route(to, from) {
      // console.log(to.path); // 路由链接
      this.label = this.$route.params.id;
    }
  }
};
</script>
<style lang="scss" scoped>
.search-container {
  width: 100%;
  height: 900px;
  .header-line {
    height: 50px;
    width: 100%;
    background: #f7f8f8;
    border-bottom: 1px #eaeaea solid;
    border-top: 3px solid #2673db;
    ul {
      width: 93%;
      margin: 0 auto;
      li {
        font-size: 14px;
        line-height: 50px;
        a {
          color: #4a4a4a;
          &:hover {
            color: #2673db;
          }
        }
      }
    }
  }
  .search-list {
    width: 93%;
    margin: 0 auto;
    ul {
      li {
        height: 50px;
        &:nth-child(1) {
          margin-top: 10px;
        }
        &:nth-child(2) {
          margin-bottom: 10px;
        }
        a {
          line-height: 50px;
          margin: 10px 20px;
          font-size: 16px;
        }
        .present {
          padding: 10px;
          background-color: #2673db;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }
}
</style>


