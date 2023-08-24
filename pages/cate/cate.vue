<template>
  <view>
    <my-nav :title="pageTitle"></my-nav>
    <!-- 使用自定义的搜索组件 -->
    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>
    
  </view>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '分类',
    }
  },
}
</script>

<style lang="scss"></style>
