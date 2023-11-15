<template>
  <view class="my-search-container" @click="handler">
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view class="my-search-box">
      <uni-icons type="search" size="17"></uni-icons>
    </view>
  </view>
</template>

<script>
export default {
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
  height: 70px;
  background-color: #823027;
  padding: 30px 10px;
  .my-search-box {
    height: 30px;
    width: 100%;
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
}
</style>
