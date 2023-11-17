<template>
  <view class="body">
		<my-sub-nav :title="message"></my-sub-nav>
    <view class="content">
      <view class="message">
        <view class="item">
          <image src="/static/my-icons/my/like.png" mode="scaleToFill" />
          <text>赞和收藏</text>
        </view>
        <view class="item">
          <image src="/static/my-icons/my/avator.png" mode="scaleToFill" />
          <text>新增关注</text>
        </view>
        <view class="item">
          <image src="/static/my-icons/my/biaoqing.png" mode="scaleToFill" />
          <text>评论和@</text>
        </view>
      </view>
      <view class="notice" v-for="i in 2" :key="i">
				<my-notice></my-notice>
			</view>
    </view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			message: '消息',
		}
	},
}
</script>

<style lang="scss">
$background-color: #823027;
$color-text: #910a18;
.body {
  box-sizing: border-box;
  padding-top: 20px;
  background-color: $background-color;
  .content {
    box-sizing: border-box;
    padding: 10px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #fff;
    .message {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 100px;
      .item {
        margin: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        image {
          width: 50px;
          height: 50px;
        }
				text{
					margin-top: 10px;
					font-size: 14px;
					color: $color-text;
				}
      }
    }
  }
}
</style>
