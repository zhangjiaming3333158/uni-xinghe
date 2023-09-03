<template>
  <view class="show">
    <view class="top">
      <view class="name">
        <van-cell-group>
          <van-field
            :value="info.my_name"
            label="昵称"
            left-icon="contact"
            @change="onChangeName"
          />
        </van-cell-group>
      </view>
      <view class="ava">
        <image src="../../static/my-icons/favicon.ico" mode="scaleToFill" />
      </view>
    </view>
    <view class="body">
      <view class="item">
        <van-cell-group>
          <van-field
            :value="info.my_sex"
            label="性别"
            left-icon="contact"
            @change="onChangeSex"
          />
        </van-cell-group>
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
        <van-cell-group>
          <van-field
            type="number"
            :value="info.my_breast"
            label="胸围(cm)"
            left-icon="contact"
            @change="onChangeBreast"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            type="number"
            :value="info.my_waist"
            label="腰围(cm)"
            left-icon="contact"
            @change="onChangeWaist"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            type="number"
            :value="info.my_bottock"
            label="臀围(cm)"
            left-icon="contact"
            @change="onChangeBottock"
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
        />
        <my-address></my-address>
      </van-cell-group>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isPlain: false,
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
      test: '',
    }
  },
  computed: {
    ...mapState('m_user', ['my']),
  },
  mounted() {
    if (this.my) {
      this.info = this.my
    }
  },
  methods: {
    ...mapMutations('m_user', ['setMy']),
    onChangeName(e) {
      this.info.my_name = e.detail
      this.setMy(this.info)
    },
    onChangeSex(e) {
      this.info.my_sex = e.detail
      this.setMy(this.info)
    },
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
    onChangePhone(e) {
      this.info.my_phone = e.detail
      this.setMy(this.info)
    },
    onChangeBreast(e) {
      this.info.my_breast = e.detail
      this.setMy(this.info)
    },
    onChangeWaist(e) {
      this.info.my_waist = e.detail
      this.setMy(this.info)
    },
    onChangeBottock(e) {
      this.info.my_bottock = e.detail
      this.setMy(this.info)
    },
  },
}
</script>

<style lang="scss">
.show {
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 100%;
  width: 100%;
  .top {
    margin-bottom: 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700rpx;
    height: 100%;
    padding: 30rpx 0;
    border-radius: 50rpx;
    background-color: #eeeedd;
    .name {
      width: 70%;
      height: 100%;
      align-items: center;
      .van-field__label {
        color: #000;
      }
      .van-cell {
        border: none;
        background-color: #eeeedd;
      }
    }
    .ava {
      width: 30%;
      height: 100%;
      text-align: center;
      background-color: #eeeedd;
      image {
        margin-left: 20rpx;
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700rpx;
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
    width: 100%;
  }
}
</style>
