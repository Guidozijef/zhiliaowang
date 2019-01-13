<template>
  <div class="swiper-container">
    <!-- element轮播图 -->
    <div class="swiper-box block">
      <el-carousel trigger="click" :interval="5000" height="400px">
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img v-bind:src="img" alt style="width:100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 轮播图列表
      imgList: [
        require("../../assets/images/1.png"),
        require("../../assets/images/2.jpg"),
        require("../../assets/images/4.jpg"),
        require("../../assets/images/5.jpg")
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 93%;
  margin: 0 auto;
  .swiper-box {
    .el-carousel__item h3 {
      color: hotpink;
      font-size: 18px;
      opacity: 0.75;
      line-height: 500px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: red;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: darkblue;
    }
  }
}
</style>


