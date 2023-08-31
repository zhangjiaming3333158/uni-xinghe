<template>
  <view>
    <my-orders :goods="cart[index]" :show-num="true"></my-orders>
    <view class="body">
      <view class="tuihuo">
        <image
          src="../../static/my-icons/border-inner.png"
          mode="scaleToFill"
        />
        <text>X天无理由退货</text>
      </view>
      <view class="state">
        <text>待发货</text>
      </view>
      <view class="item">
        <text>预计XX发货</text>
      </view>
      <view class="item">
        <text>订单编号 <text class="bianhao">XXXXXXXXXXXX</text> </text>
        <text class="fuzhi">复制</text></view
      ><view class="item">
        <text>创建时间 <text class="bianhao">XXXXXXXXXXXX</text></text> </view
      ><view class="item">
        <text>发货时间</text><text class="bianhao">XXXXXXXXXXXX</text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      index: 0,
    }
  },
  computed: {
    // 将 m_cart 模块中的 total 映射为当前页面的计算属性
    ...mapGetters('m_cart', ['total']),
    ...mapState('m_cart', ['cart']),
  },
  onLoad(options) {
    console.log(options.index)
    this.index = options.index
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
.body {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tuihuo {
    box-sizing: border-box;
    padding: 0 10px;
    width: 60%;
    height: 100rpx;
    background-color: #fff;
    text-align: center;
    image {
      margin-top: 15rpx;
      float: left;
      width: 70rpx;
      height: 70%;
    }
    text {
      float: right;
      font-size: 18px;
      line-height: 100rpx;
    }
  }
  .state {
    margin-top: 20rpx;
    margin-left: -192px;
    width: 30%;
    height: 30px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #fff;
    text-align: center;
    text {
      font-size: 15px;
      line-height: 30px;
    }
  }
  .item {
    box-sizing: border-box;
    padding: 0 50rpx;
    width: 90%;
    height: 100rpx;
    background-color: #fff;
    text-align: left;
    text {
      line-height: 100rpx;
      font-size: 20px;
    }
    .bianhao {
      line-height: 100rpx;
      padding-left: 10px;
      font-size: 10px;
      color: #ccc;
    }
    .fuzhi {
      line-height: 0;
      float: inline-end;
      font-size: 10px;
      color: #333;
    }
  }
}
</style>
