<template>
  <div class="goodsinfo">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<span class="marketPrice">￥2399</span>&nbsp;&nbsp;
            销售价：<span style="color:red">￥</span
            ><span class="nowPrice" ref="price">2199</span>
          </p>

          <p class="count">
            购买数量：<numbox @getCount="getNumboxCount"></numbox>
          </p>
          <p class="btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar"
              >加入购物车</mt-button
            >
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from "./goodsinfo_numbox.vue";
export default {
  data() {
    return {
      ballFlag: false,
      numboxCount: 1, //子组件传过来的购买数量
      id: this.$route.params.id
    };
  },
  components: {
    numbox
  },
  methods: {
    //点击加入购物车
    addShopCar() {
      this.ballFlag = !this.ballFlag;
      var goodinfo = {
        id: this.id,
        count: this.numboxCount,
        price: this.$refs.price.innerText,
        selected: true
      };
      this.$store.commit("addToCar", goodinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      //获取小球坐标
      var ballPosition = this.$refs.ball.getBoundingClientRect();
      var badge = document.getElementById("badge").getBoundingClientRect();
      var xDist = badge.left - ballPosition.left;
      var yDist = badge.top - ballPosition.top;
      el.style.transform = "translate(+" + xDist + "px," + yDist + "px)";
      el.style.transition = "all 0.5s cubic-bezier(.64,-0.16,.98,.62)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getNumboxCount(count) {
      this.numboxCount = count;
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo {
  background: #ccc;
  overflow: hidden; //解决margin塌陷问题
}
.mint-swipe {
  height: 200px;
}
.price {
  .marketPrice {
    text-decoration: line-through;
  }
  .nowPrice {
    color: red;
    font-weight: bold;
  }
}
.mui-card-footer {
  display: block;
  button {
    margin: 10px 0;
  }
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 999;
  left: 148px;
  top: 350px;
}
</style>