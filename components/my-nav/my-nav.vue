<template>
  <view class="my-search-container">
    <!-- <view class="uni-bar" v-show="showNav">
      <image
        v-if="showIcon"
        style="width: 20px; height: 20px; margin-right: 10px"
        src="/static/my-icons/home/list.png"
        mode="scaleToFill"
      />
      <image
        v-else
        style="width: 13px; height: 20px; margin-right: 17px"
        src="/static/my-icons/cate/left.png"
        mode="scaleToFill"
      />
    </view> -->
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <!-- <view class="my-search-box" @click="handler" v-show="showNav">
      <image
        style="width: 13px; height: 13px; margin-left: 10px"
        src="/static/my-icons/home/search.png"
        mode="scaleToFill"
      />
    </view> -->
    <!-- <view class="uni-scan">
      <uni-icons type="scan" size="25"></uni-icons>
    </view> -->
    <text>{{ title }}</text>
  </view>
</template>

<script>
export default {
  props: {
    showIcon: {
      type: Boolean,
      default: true,
    },
    showNav:{
      type: Boolean,
      default: true,
    },
    title:{
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handler() {
      // 跳转到搜索页面
      // uni.navigateTo({
      // 	url: '/pages/search/search',
      // })
      this.$emit('click') //触发父组件的事件
    },
  },
}
</script>

<style lang="scss" scoped>
.my-search-container {
  height: 80px;
  background-color: #823027;
  padding: 30px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  .uni-bar {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
  }
  .my-search-box {
    height: 30px;
    width: 900px;
    background-color: #f5f5f5;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 0.8;
    uni-icons {
      margin-left: 10px;
      color: #999;
    }
  }
  .uni-scan {
    margin: 0 10px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
  }
}
</style>
