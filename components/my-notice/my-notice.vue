<template>
  <view class="notice-container">
    <view class="avator">
      <image src="/static/my-icons/my/avator.png" mode="scaleToFill" />
    </view>
    <view class="context">
      <text class="context-name">Lucy</text>
      <text class="context-body">赞了你的评论</text>
    </view>
    <view class="time">
      <text>15:25</text>
    </view>
  </view>
</template>

<script></script>

<style scoped lang="scss">
.notice-container {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  .avator {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #fae084;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .context {
    flex: 1;
    box-sizing: border-box;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    .context-name {
      font-size: 18px;
      color: #000;
    }
    .context-body {
      font-size: 13px;
      color: #666565;
      //不换行，超出部分用...代替
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .time {
    margin-top: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    width: 50px;
    text {
      font-size: 13px;
      color: #666565;
    }
  }
}
</style>
