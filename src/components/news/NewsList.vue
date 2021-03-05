<template>
  <div>
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in newslist"
        :key="item.id"
      >
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.avator" />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span
                >发表时间：{{
                  item.date | dataFormat("YYYY-MM-DD HH:mm:ss")
                }}</span
              >
              <span>点击:{{ item.clickNum }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      console.log(1);
      axios.get("../../../data.json").then(res => {
        this.newslist = res.data.newslist;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view .mui-media-body {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    display: flex;
    color: #226aff;
    justify-content: space-between;
  }
}
</style>