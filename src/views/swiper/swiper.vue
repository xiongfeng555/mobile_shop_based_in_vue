<template>
  <div>
    <!-- 自己封装的轮播图组件 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imagesList" :key="item.id">
        <img :src="item.url" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["imagesList"] //父组件传过来的轮播图图片数组
};
</script>
<style lang="scss" scoped>
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mint-swipe {
  height: 200px;
}
</style>