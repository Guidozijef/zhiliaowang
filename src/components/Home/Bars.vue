<template>
  <div class="bars">
    <ul>
      <li>
        <tooltip content="个人中心" placement="left">
          <button class="button">
            <span class="icon is-medium">
              <i class="fa fa-user-o"></i>
            </span>
          </button>
        </tooltip>
      </li>
      <li>
        <tooltip content="联系客服" placement="left">
          <button class="button">
            <span class="icon is-medium">
              <i class="el-icon-service"></i>
            </span>
          </button>
        </tooltip>
      </li>
      <li>
        <tooltip content="收藏" placement="left">
          <button class="button">
            <span class="icon is-medium">
              <i class="fas el-icon-star-off"></i>
            </span>
          </button>
        </tooltip>
      </li>
      <li>
        <tooltip content="购物车" placement="left">
          <button class="button">
            <span class="icon is-medium">
              <i class="fas fa-cart-plus"></i>
            </span>
          </button>
        </tooltip>
      </li>
      <li>
        <tooltip content="分享" placement="left">
          <button class="button">
            <span class="icon is-medium">
              <i class="el-icon-share"></i>
            </span>
          </button>
        </tooltip>
      </li>
      <li class="arrow-up">
        <scroll-to target="#app">
          <button class="button is-outlined" id="t2">
            <span class="icon is-medium">
              <i class="el-icon-arrow-up"></i>
            </span>
          </button>
        </scroll-to>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bars {
  width: 38px;
  height: 216px;
  // border: 1px solid #ccc;
  position: fixed;
  top: 195px;
  right: 9px;
  float: right;
  li {
    padding-bottom: 5px;
    .button {
      height: 42px;
      width: 38px;
      border: none;
      margin: 0;
      padding: 0;
      .icon {
        margin: 0px;
      }
    }
    #t2:hover {
      background-color: #3c81df;
    }
  }
}
</style>



