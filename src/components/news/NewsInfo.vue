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
      newsinfo: {},
      id: this.$route.params.id
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