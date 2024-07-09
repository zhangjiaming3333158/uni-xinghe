<template>
  <view class="body">
    <view class="time">
      <text style="font-size: 16px">20</text>
      <text style="color: #ff8d1a">/</text>
      <text>8</text>
      <text style="color: #ff8d1a">/</text>
      <text>2020年</text>
    </view>
    <view class="context">
      <text
        >做工很精美，实物与预期十分符合；能够将我预想的外形和质感做出来，很满意！</text
      >
    </view>
    <view class="image">
      <image src="https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/cate/cate1.png" mode="aspectFill" />
      <image src="https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/myJudge/judge.png" mode="aspectFill" />
      <image src="https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/cate/cate2.png" mode="aspectFill" />
    </view>
    <view class="detail">
      <text>浏览 364</text>
      <text>评论 9</text>
      <text>点赞 32</text>
    </view>
  </view>
</template>

<script></script>

<style scoped lang="scss">
.body {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px 30px;
  .time {
    font-size: 14px;
    color: #000;
  }
  .context {
    margin-top: 10px;
    font-size: 14px;
    color: #000;
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: space-between;
    image {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
  }
  .detail{
    margin-top: 10px;
    display: flex;
    align-items: center;
    color: #A6A6A6;
    font-size: 13px;
    text{
      margin-right: 15px;
    }
  }
}
</style>
