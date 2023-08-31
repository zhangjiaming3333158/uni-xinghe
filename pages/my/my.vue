<template>
  <view>
    <my-nav :title="pageTitle"></my-nav>
    <!-- 头像信息 -->
    <view class="user-info">
      <image
        class="avatar"
        src="../../static/my-icons/favicon.ico"
        mode="scaleToFill"
      ></image>
      <view class="info">
        <view class="name">XXXXXXXXXXX</view>
        <view class="info3"
          ><uni-tag
            :inverted="true"
            :circle="true"
            size="mini"
            text="身高: xxxcm"
          /><uni-tag
            :inverted="true"
            :circle="true"
            size="mini"
            text="体重: xxkg"
          /><uni-tag
            :inverted="true"
            :circle="true"
            size="mini"
            text="默认尺码: xxx"
          />
        </view>
      </view>
    </view>
    <view class="cell">
      <van-cell-group inset>
        <navigator url="/subpkgB/myInfo/myInfo">
          <van-cell icon="user-o" title="个人信息" value=">" />
        </navigator>
        <navigator url="/subpkgB/message/message">
          <van-cell icon="chat-o" title="消息" value=">" />
        </navigator>
        <navigator url="/subpkgB/order/order">
          <van-cell icon="orders-o" title="订单" value=">" />
        </navigator>
        <navigator url="/subpkgB/coupon/coupon">
          <van-cell icon="discount" title="优惠券" value=">" />
        </navigator>
        <navigator url="/subpkgB/invite/invite">
          <van-cell icon="gift-o" title="邀请有礼" value=">" />
        </navigator>
        <navigator url="/subpkgB/question/question">
          <van-cell icon="question-o" title="常见问题" value=">" />
        </navigator>
        <van-button type="primary" block>退出登录</van-button>
      </van-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '我的',
    }
  },
}
</script>

<style lang="scss">
.user-info {
  display: flex;
  align-items: center;
  height: 200rpx;
  background-color: #cbc1b2;
  .avatar {
    margin-left: 20rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #eeeedd;
  }
  .info {
    margin-top: -5px;
    margin-left: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .name {
      margin-bottom: 5px;
      font-size: 40rpx;
      font-weight: bold;
    }
    .info3 {
      .uni-tag {
        margin-right: 20rpx;
        border-color: #eeeedd;
        background-color: #eeeedd;
      }
    }
  }
}
.cell {
  margin-top: 20rpx;
  .van-cell {
    margin-top: 20rpx;
    border-radius: 50rpx;
  }
  .van-button {
    margin-top: 20rpx;
    border-radius: 50rpx;
    margin-bottom: 50rpx;
    border: 1px solid #552220;
    background-color: #552220;
  }
}
</style>
