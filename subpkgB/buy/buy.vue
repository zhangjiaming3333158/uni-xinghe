<template>
  <view>
    <my-orders :goods="cart[0]" :show-num="true" :is-state="false"></my-orders>
    <view class="body">
      <view class="item">
        <van-cell-group>
          <van-field :value="value" label="身高" left-icon="contact" />
        </van-cell-group>
        <van-cell-group>
          <van-field :value="value" label="体重" left-icon="contact" />
        </van-cell-group>
      </view>
    </view>
    <view class="foot">
      <view class="foot-item">
        <van-cell-group>
          <van-cell title="默认尺码">
            <van-tag slot="right-icon" color="#7232dd" :plain="!isPlain"
              >S</van-tag
            >
            <van-tag slot="right-icon" color="#7232dd" :plain="!isPlain"
              >M</van-tag
            >
            <van-tag slot="right-icon" color="#7232dd" :plain="!isPlain"
              >L</van-tag
            >
            <van-tag slot="right-icon" color="#7232dd" :plain="!isPlain"
              >XL</van-tag
            >
            <van-tag slot="right-icon" color="#7232dd" :plain="!isPlain"
              >XXL</van-tag
            >
          </van-cell>
          <van-field :value="value" label="电话号码" left-icon="phone-o" />
          <my-address></my-address>
          <van-field
            :value="message"
            label="备注"
            type="textarea"
            placeholder="请输入备注"
            autosize
            :border="false"
          />
        </van-cell-group>
      </view>
    </view>
    <van-button type="primary" block>购买</van-button>
  </view>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    // 将 m_cart 模块中的 total 映射为当前页面的计算属性
    ...mapGetters('m_cart', ['total']),
    ...mapState('m_cart', ['cart']),
  },
}
</script>

<style lang="scss">
.body {
  margin-top: 50rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .item {
    width: 100%;
    .van-cell {
      border-radius: 20rpx;
    }
  }
}
.foot {
  margin-bottom: 100rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 750rpx;
  height: 100%;
  .foot-item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-cell {
      width: 750rpx;
      .van-tag {
        margin-right: 30rpx;
      }
    }
  }
}
</style>
