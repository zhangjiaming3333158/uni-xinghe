<template>
  <view class="body">
    <my-sub-nav :title="message"></my-sub-nav>
    <view class="content">
      <view class="title">
        <view class="pingjia active">评价</view>
        <view class="wenda">问答</view>
      </view>
      <view class="pingjia3">
        <view class="item active">
          <text>已评价</text>
        </view>
        <view class="item">
          <text>可评价</text>
        </view>
        <view class="item">
          <text>待评价</text>
        </view>
      </view>
      <view class="judge">
        <my-judge-card></my-judge-card>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: '我的评价',
    }
  },
}
</script>

<style scoped lang="scss">
$background-color: #823027;
$card-background-color: #f0f0f0;
.body {
  box-sizing: border-box;
  padding-top: 20px;
  background-color: $background-color;
  .content {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #fff;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      .pingjia {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 20px;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        background-color: $card-background-color;
        color: #000;
      }
      .wenda {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 20px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
        background-color: $card-background-color;
        color: #000;
      }
      .active {
        background-color: #fff;
      }
    }
  }
  .pingjia3 {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    .item {
      padding: 5px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $card-background-color;
      border-radius: 20px;
      text {
        font-size: 14px;
        color: #000;
      }
    }
    .active{
      background-color: #EED9DB;
    }
  }
}
</style>
