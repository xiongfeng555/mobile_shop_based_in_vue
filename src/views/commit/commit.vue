<template>
  <div class="commit-container">
    <h3>发表评论</h3>
    <hr />
    <textarea
      name=""
      id=""
      cols="30"
      rows="5"
      placeholder="请输入要评论的内容（最多吐槽120字）"
      maxlength="120"
    ></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div
        class="cmt-item"
        v-for="(item, index) in commentsList"
        :key="item.data_time"
      >
        <div class="item-title">
          第{{ index + 1 }}楼
          <span>匿名用户</span>
          <span>发表时间：{{ item.data_time }}</span>
        </div>
        <div class="item-content">
          {{ item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      commentsList: []
    };
  },
  props: ["id"],
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      axios.get("../../../data.json").then(res => {
        res.data.newslist.forEach((item, index) => {
          if (item.id === parseInt(this.id)) {
            this.commentsList = res.data.newslist[item.id - 1].comments;
            return;
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.commit-container {
  margin-top: 30px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    margin: 0;
  }
  .cmt-list {
    margin: 10px 0;
    .cmt-item {
      font-size: 13px;
      .item-title {
        background: #ccc;
        line-height: 35px;
        border-radius: 10px;
        padding-left: 10px;
      }
      .item-content {
        line-height: 35px;
      }
    }
  }
}
</style>