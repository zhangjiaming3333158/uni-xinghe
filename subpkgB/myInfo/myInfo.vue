<template>
  <view class="show">
    <view class="top">
      <view class="name">
        <van-cell-group>
          <van-field :value="value" label="昵称" left-icon="contact" disabled />
        </van-cell-group>
      </view>
      <view class="ava">
        <image src="../../static/my-icons/favicon.ico" mode="scaleToFill" />
      </view>
    </view>
    <view class="body">
      <view class="item">
        <van-cell-group>
          <van-field :value="value" label="性别" left-icon="contact" disabled />
        </van-cell-group>
        <van-cell-group>
          <van-field :value="value" label="身高" left-icon="contact" disabled />
        </van-cell-group>
        <van-cell-group>
          <van-field :value="value" label="体重" left-icon="contact" disabled />
        </van-cell-group>
        <van-cell-group>
          <van-field :value="value" label="胸围" left-icon="contact" disabled />
        </van-cell-group>
        <van-cell-group>
          <van-field :value="value" label="腰围" left-icon="contact" disabled />
        </van-cell-group>
        <van-cell-group>
          <van-field :value="value" label="臀围" left-icon="contact" disabled />
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
          <van-field
            :value="value"
            label="电话号码"
            left-icon="phone-o"
            disabled
          />
          <my-address></my-address>
        </van-cell-group>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: 'xxx',
      isPlain: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
        },
        city_list: {
          110100: '北京市',
          120100: '天津市',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
        },
      },
    }
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
        .van-tag {
          margin-right: 30rpx;
        }
      }
    }
  }
}
</style>
