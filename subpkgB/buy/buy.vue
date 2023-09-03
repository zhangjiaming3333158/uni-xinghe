<template>
  <view>
    <my-orders :goods="cart[0]" :show-num="true" :is-state="false"></my-orders>
    <view class="body">
      <view class="item">
        <van-cell-group>
          <van-field
            type="number"
            :value="info.my_height"
            label="身高(cm)"
            left-icon="contact"
            @change="onChangeHeight"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            type="number"
            :value="info.my_weight"
            label="体重(kg)"
            left-icon="contact"
            @change="onChangeWeight"
          />
        </van-cell-group>
      </view>
    </view>
    <view class="foot">
      <view class="foot-item">
        <van-cell-group>
          <van-cell title="默认尺码">
            <view @click="changeSize(0)">
              <van-tag
                slot="right-icon"
                color="#7232dd"
                :plain="info.my_size != 0"
                >S</van-tag
              >
            </view>
            <view @click="changeSize(1)"
              ><van-tag
                slot="right-icon"
                color="#7232dd"
                :plain="info.my_size != 1"
                >M</van-tag
              ></view
            >
            <view @click="changeSize(2)"
              ><van-tag
                slot="right-icon"
                color="#7232dd"
                :plain="info.my_size != 2"
                >L</van-tag
              ></view
            >
            <view @click="changeSize(3)"
              ><van-tag
                slot="right-icon"
                color="#7232dd"
                :plain="info.my_size != 3"
                >XL</van-tag
              ></view
            >
            <view @click="changeSize(4)"
              ><van-tag
                slot="right-icon"
                color="#7232dd"
                :plain="info.my_size != 4"
                >XXL</van-tag
              ></view
            >
          </van-cell>
        </van-cell-group>
      </view>
    </view>
    <view class="bottom">
      <van-cell-group>
        <van-field
          :value="info.my_phone"
          label="电话号码"
          left-icon="phone-o"
          @change="onChangePhone"
          disabled
        />
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

    <van-button type="primary" block>购买</van-button>
  </view>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      message: '',
      info: {
        my_sex: '',
        my_height: '',
        my_weight: '',
        my_size: '',
        my_name: '',
        my_breast: '',
        my_waist: '',
        my_bottock: '',
        my_phone: '',
      },
    }
  },
  computed: {
    // 将 m_cart 模块中的 total 映射为当前页面的计算属性
    ...mapGetters('m_cart', ['total']),
    ...mapState('m_cart', ['cart']),
    ...mapState('m_user', ['my']),
    my_height() {
      return '身高: ' + this.my.my_height + 'cm'
    },
    my_weight() {
      return '体重: ' + this.my.my_weight + 'kg'
    },
  },
  mounted() {
    if (this.my) {
      this.info = this.my
    }
  },
  methods: {
    onChangeHeight(e) {
      this.info.my_height = e.detail
      this.setMy(this.info)
    },
    onChangeWeight(e) {
      this.info.my_weight = e.detail
      this.setMy(this.info)
    },
    changeSize(e) {
      this.info.my_size = e
      this.setMy(this.info)
    },
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
  margin-top: 20rpx;
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
      .van-cell__title {
        flex: 1 !important;
        width: 200rpx;
      }
      .van-cell__value {
        flex: 2;
        width: 200rpx;
        view {
          display: inline-block;
          .van-tag {
            margin-right: 30rpx;
          }
        }
      }
    }
  }
}
.bottom {
  margin-bottom: 30rpx;
  width: 100%;
}
</style>
