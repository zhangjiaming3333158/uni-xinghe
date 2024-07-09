<template>
  <!-- 使用自定义的搜索组件 -->
  <view class="container">
    <my-sub-nav :title="pageTitle"></my-sub-nav>
    <view class="content">
      <view v-for="i in 4" :key="i"
        ><my-goods-card
          :title="list[i].title"
          :img="list[i].image"
        ></my-goods-card
      ></view>
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
          image:
            'https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/custom/whiteTshirt.png',
          title: '时尚T恤',
        },
        {
          image:
            'https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/custom/whiteBag.png',
          title: '如意帆布包',
        },
        {
          image:
            'https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/custom/whiteCap.png',
          title: '吉祥鸭舌帽',
        },
        {
          image:
            'https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/home/shoes.png',
          title: '凤尾鞋',
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
    padding-bottom: 50px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }
  .bottom-nav {
    margin-top: 50px;
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
