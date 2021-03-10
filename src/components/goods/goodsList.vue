<template>
  <div class="goods-list">
    <div
      class="good-item"
      v-for="item in goodslist"
      :key="item.id"
      @click="getDetail(item.id)"
    >
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage3.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070142956-000000000713063356_1_220x220.jpg%3Fver%3D2019&refer=http%3A%2F%2Fimage3.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617763196&t=ddd8f87d5dce9ed631ce980cb270a11f"
        alt=""
      />
      <div class="good-title">{{ item.title }}</div>
      <div class="info">
        <p class="price">
          <span class="new">￥{{ item.newprice }}</span>
          <span class="old">￥{{ item.oldprice }}</span>
        </p>
        <p class="sell">
          <span class="hot-sell">热卖中</span>
          <span class="count">剩{{ item.remind }}件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import axios from "axios";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getAllGoodsList();
  },
  methods: {
    getAllGoodsList() {
      axios.get("../../../data.json").then(res => {
        this.goodslist = res.data.goodsList;
      });
    },
    getDetail(id) {
      this.$router.push({ name: "goodinfo", params: { id: id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 8px 7px;
  justify-content: space-between;
  .good-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 304px;
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 6px 0 0 0;
    padding: 2px;
    img {
      width: 100%;
    }
    .good-title {
      font-size: 14px;
    }
    .info {
      width: 100%;
      color: #000;
      background: #ccc;
      opacity: 0.9;
      margin: 0;
      padding: 4px;
      .price {
        .new {
          color: red;
        }
        .old {
          text-decoration: line-through;
          margin-left: 10px;
        }
      }
      .sell {
        margin: 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>