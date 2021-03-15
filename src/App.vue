<template>
  <div class="contain">
    <!-- header 导航栏 -->
    <mt-header fixed title="基于vue移动商城">
      <span slot="left" @click="back" v-show="flag">
        <mt-button icon="back" class="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 中间部分 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部选项卡 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"
          ><span class="mui-badge" id="badge">{{
            $store.getters.getAllCounts
          }}</span></span
        >
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    if (this.$route.path === "/home") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  methods: {
    //定义点击返回按钮的功能
    back() {
      this.$router.go(-1);
      console.log(this.$router);
    }
  },
  watch: {
    //监听路由路径
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        //如果是home，则取消返回按钮的显示
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.contain {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
// 动画效果
.v-enter,
.v-leave-to {
  opacity: 0;
  position: absolute;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;

  width: 1%;
  height: 50px;

  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;

  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
  font-size: 11px;

  display: block;
  overflow: hidden;

  text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item1 .mui-icon:active {
  background: none;
}
.mint-button-text {
  font-size: 18px;
}
</style>
