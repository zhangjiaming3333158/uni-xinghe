<template>
  <!-- 使用自定义的搜索组件 -->
  <view class="container">
    <my-nav :title="pageTitle"></my-nav>
    <view class="head">
      <view class="head-left">
        <view><van-tag type="primary" plain>款式</van-tag></view>
        <view v-for="(item, index) in 4" :key="index"
          ><u-avatar src="/static/my-icons/wx-logo.jpg"></u-avatar
        ></view>
        <view><u-icon size="80" name="more-circle"></u-icon></view>
      </view>
      <view class="head-right">
        <image src="/static/my-icons/wx-logo.jpg" mode="scaleToFill" />
      </view>
    </view>
    <view class="body">
      <view class="body-left">
        <van-button type="default" color="#ff0000">加入购物车</van-button>
      </view>
      <view class="body-middle">
        <text>100¥</text>
      </view>
      <view class="body-right">
        <navigator
          url="/subpkgB/buy/buy"
          open-type="navigate"
          hover-class="navigator-hover"
        >
          <van-button type="default" color="#ffa200">立即购买</van-button>
        </navigator>
      </view>
    </view>
    <view class="foot">
      <u-swiper
        :list="list"
        mode="dot"
        indicator-pos="bottomCenter"
        :effect3d="true"
        :autoplay="false"
      ></u-swiper></view
  ></view>
</template>

<script>
// 按需导入 mapMutations 这个辅助方法
import { mapMutations } from 'vuex' //引入mapGettersf
import badgeMix from '@/mixins/tabbar-badge.js'
export default {
  mixins: [badgeMix],
  data() {
    return {
      pageTitle: '定制',
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
    // 把 m_cart 模块中的 addToCart 方法映射到当前页面使用
    ...mapMutations('m_cart', ['addToCart']),
    // 右侧按钮的点击事件处理函数
    buttonClick(e) {
      console.log(e)
      // 1. 判断是否点击了 加入购物车 按钮
      if (e.content.text === '加入购物车') {
        // 2. 组织一个商品的信息对象
        const goods = {
          goods_id: this.goods_info.goods_id, // 商品的Id
          goods_name: this.goods_info.goods_name, // 商品的名称
          goods_price: this.goods_info.goods_price, // 商品的价格
          goods_count: 1, // 商品的数量
          goods_small_logo: this.goods_info.goods_small_logo, // 商品的图片
          goods_state: true, // 商品的勾选状态
        }

        // 3. 通过 this 调用映射过来的 addToCart 方法，把商品信息对象存储到购物车中
        this.addToCart(goods)
      }
    },
  },
}
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    .head-left {
      box-sizing: border-box;
      padding: 20rpx 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 100%;
      background-color: #f5f5f5;
      .van-tag {
        margin-bottom: 10px;
      }
    }
    .head-right {
      box-sizing: border-box;
      padding: 20rpx;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .body {
    height: 70px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .body-left {
      width: 250rpx;
      height: 100%;
      background-color: #f5f5f5;
      text-align: center;
      line-height: 70px;
      .van-button {
        border-top-right-radius: 50rpx;
        border-bottom-right-radius: 50rpx;
        width: 250rpx;
      }
    }
    .body-middle {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 70px;
      background-color: #f5f5f5;
      text {
        font-size: 60rpx;
      }
    }
    .body-right {
      width: 250rpx;
      height: 100%;
      background-color: #f5f5f5;
      text-align: center;
      line-height: 70px;
      .van-button {
        border-top-left-radius: 50rpx;
        border-bottom-left-radius: 50rpx;
        width: 250rpx;
      }
    }
  }
  .foot {
    box-sizing: border-box;
    padding: 40rpx;
    height: 130px;
    background-color: #fff;
    swiper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      swiper-item {
        margin-left: 137rpx !important;
        width: 300rpx !important;
      }
    }
  }
}
</style>
