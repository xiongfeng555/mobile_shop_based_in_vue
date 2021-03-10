<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="postCount"
      ref="numbox_count"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
import "../../lib/mui/css/mui.css";
export default {
  mounted() {
    //初始化数字选择框
    mui(".mui-numbox").numbox();
  },
  methods: {
    postCount() {
      this.$emit("getCount", parseInt(this.$refs.numbox_count.value));
    }
  }
};
</script>
<style lang="scss" scoped>
</style>