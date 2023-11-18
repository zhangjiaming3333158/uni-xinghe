<template>
  <!-- 使用自定义的搜索组件 -->
  <view class="container">
    <my-sub-nav :title="pageTitle"></my-sub-nav>
    <view class="content">
      <view v-for="i in 4" :key="i"><my-goods-card></my-goods-card></view>
    </view>
    <view class="bottom-nav" @click="goToCustom"
      ><uni-icons type="plus" size="30" color="#fff"></uni-icons>
      开启新的定制</view
    >
  </view>
</template>

<script>
import badgeMix from '@/mixins/tabbar-badge.js'
export default {
  mixins: [badgeMix],
  data() {
    return {
      pageTitle: '历史定制',
      list: [
        {
          image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '昨夜星辰昨夜风，画楼西畔桂堂东',
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
          title: '身无彩凤双飞翼，心有灵犀一点通',
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
          title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
        },
      ],
    }
  },
  methods: {
    goToCustom() {
      uni.navigateTo({
        url: '/subpkgB/custom-goods/custom-goods',
      })
    },
  },
}
</script>

<style lang="scss">
.container {
  background-color: #823027;
  .content {
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }
  .bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    background-color: #910a18;
  }
}
</style>
