<template>
  <div class="photo-container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            全部
          </a>
          <a
            class="mui-control-item"
            href="#item2mobile"
            data-wid="tab-top-subpage-2.html"
          >
            家庭生活
          </a>
          <a
            class="mui-control-item"
            href="#item3mobile"
            data-wid="tab-top-subpage-3.html"
          >
            摄像设计
          </a>
          <a
            class="mui-control-item"
            href="#item4mobile"
            data-wid="tab-top-subpage-4.html"
          >
            明星美女
          </a>
          <a
            class="mui-control-item"
            href="#item5mobile"
            data-wid="tab-top-subpage-5.html"
          >
            娱乐健身
          </a>
          <a
            class="mui-control-item"
            href="#item5mobile"
            data-wid="tab-top-subpage-5.html"
          >
            科技致富
          </a>
        </div>
      </div>
    </div>

    <ul>
      <router-link
        to="/imgInfo"
        v-for="item in imgList"
        :key="item.id"
        tag="li"
      >
        <img v-lazy.photo-contain="item.img" />
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
import axios from "axios";
export default {
  data() {
    return {
      imgList: []
    };
  },
  mounted() {
    //解决重新刷新导航栏不能滚动bug
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAllImgList();
  },
  methods: {
    getAllImgList() {
      axios.get("../../../data.json").then(res => {
        this.imgList = res.data.images;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: none;
}

ul {
  padding: 0 10px;
  li {
    list-style: none;
    img {
      width: 100%;
      height: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>