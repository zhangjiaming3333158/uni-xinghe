<template>
  <view class="container">
    <view class="img">
      <image :src="img" mode="aspectFit" />
    </view>
    <view class="goods-content">
      <view class="title">{{ title }}</view>
      <view class="time">定制于：2022.9.25</view>
      <view class="action">点击进行编辑</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #aca6a6;
  background-color: #fff;
  .img {
    height: 150px;
    width: 150px;
    border-radius: 15px;
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .goods-content {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px;
    .title {
      display: flex;
      align-items: center;
      height: 25%;
      font-size: 18px;
      font-weight: bold;
    }
    .time {
      display: flex;
      align-items: center;
      height: 25%;
      font-size: 14px;
      color: #999;
    }
    .action {
      display: flex;
      align-items: flex-end;
      height: 50%;
    }
  }
}
</style>
