<template>
  <div>
    <div class="shopcar-item" v-for="item in goodsList" :key="item.id">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getSelected[item.id]"
              @change="
                selectChanged(item.id, $store.getters.getSelected[item.id])
              "
            ></mt-switch>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage3.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070142956-000000000713063356_1_220x220.jpg%3Fver%3D2019&refer=http%3A%2F%2Fimage3.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617763196&t=ddd8f87d5dce9ed631ce980cb270a11f"
              alt=""
            />
            <div class="shopcar_info">
              <h3>小米手机（64G）小米（Note）移动全网通</h3>
              <p>
                <span class="price">{{ item.price }}</span>
                <shopcar_numbox
                  :initCount="$store.getters.getGoodsCount[item.id]"
                  :id="item.id"
                ></shopcar_numbox>
                <a href="#" @click.prevent="removeItem(item.id)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner sum_cal">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品<span class="red">{{
                $store.getters.getSumPrice.count
              }}</span
              >件，总价：<span class="red"
                >￥{{ $store.getters.getSumPrice.price }}</span
              >
            </p>
          </div>
          <mt-button type="danger" class="btn">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shopcar_numbox from "../views/shopcar/shopcar_numbox.vue";
export default {
  data() {
    return {
      goodsList: []
    };
  },
  components: {
    shopcar_numbox
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.goodsList = this.$store.state.car;
    },
    removeItem(id) {
      this.$store.commit("removeFromCar", id);
    },
    //同步状态到car里面
    selectChanged(id, val) {
      this.$store.commit("updateSelected", { id: id, val: val });
    }
  }
};
</script>
<style lang="scss" scoped>
.shopcar-item .mui-card .mui-card-content .mui-card-content-inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
  h3 {
    font-size: 13px;
  }
  .shopcar_info {
    p {
      margin-top: 8px;
    }
    .price {
      color: red;
      margin-right: 10px;
    }
  }
}
.sum_cal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    margin-right: 20px;
  }
  .red {
    color: red;
    font-weight: bold;
  }
}
</style>