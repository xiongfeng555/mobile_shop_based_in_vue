<template>
  <div>
    <!-- 轮播图区域 -->
    <swiper :imagesList="swiperList"></swiper>

    <!-- 导航栏 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist">
          <img src="../img/menu1.png" alt="" />
          <div class="mui-media-body">新闻资讯</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/photolist">
          <img src="../img/menu2.png" alt="" />
          <div class="mui-media-body">图片分享</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/goodslist">
          <img src="../img/menu3.png" alt="" />
          <div class="mui-media-body">商品购买</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../img/menu4.png" alt="" />
          <div class="mui-media-body">留言反馈</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../img/menu5.png" alt="" />
          <div class="mui-media-body">视频专区</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../img/menu6.png" alt="" />
          <div class="mui-media-body">联系我们</div></a
        >
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import swiper from "../views/swiper/swiper.vue";
export default {
  data() {
    return {
      swiperList: []
    };
  },
  created() {
    this.getSwiperImg();
  },
  methods: {
    getSwiperImg() {
      axios.get("../../../data.json").then(res => {
        console.log(res.data.swiperInfo);
        this.swiperList = res.data.swiperInfo;
      });
    }
  },
  components: {
    swiper
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-indicator.is-active {
  background: red;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  .mui-media-body {
    font-size: 13px;
  }
}
img {
  width: 60px;
  height: 60px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>