<template>
  <view class="my-search-container">
    <view class="uni-bar" @click="backTo">
      <image
        style="width: 13px; height: 20px; margin-right: 17px"
        src="/static/my-icons/cate/left.png"
        mode="scaleToFill"
      />
    </view>
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view class="my-text">
      <text>{{ title }}</text>
    </view>
    <view class="after"></view>
  </view>
</template>

<script>
export default {
  props: {
    title:{
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    backTo() {
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.my-search-container {
  box-sizing: border-box;
  position: relative;
  height: 80px;
  background-color: #823027;
  padding: 30px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .uni-bar {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 13px;
      height: 20px;
    }
  }
  .my-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text {
      font-size: 18px;
      color: #fff;
    }
  }
  .after {
    width: 30px;
    height: 30px;
  } 
}
</style>
