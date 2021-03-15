<template>
  <div class="newsinfo-container">
    <h3>{{ newsinfo.title }}</h3>
    <div class="info">
      <span>发表时间：{{ newsinfo.date }}</span>
      <span>点击次数：{{ newsinfo.clickNum }}</span>
    </div>
    <hr />
    <div class="content">{{ newsinfo.infocontent }}</div>
    <commit :id="this.id"></commit>
  </div>
</template>
<script>
import axios from "axios";
import commit from "../../views/commit/commit.vue";
export default {
  data() {
    return {
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      axios.get("../../../data.json").then(res => {
        console.log(res.data.newslist);
        res.data.newslist.forEach((item, index) => {
          if (item.id === parseInt(this.id)) {
            this.newsinfo = item;
          }
        });
      });
    }
  },
  components: {
    commit
  },
  props: ["id"],
  //用于离开页面时判断
  beforeRouteLeave(to, from, next) {
    var answer = window.confirm("你确定要离开这个页面吗？");
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  h3 {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    color: #662aff;
    font-size: 13px;
  }
  .content {
    color: #aaa;
    font-size: 15px;
    img {
      width: 100%;
    }
  }
}
</style>