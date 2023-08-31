<template>
  <view>
    <view class="cart-container" v-if="cart.length !== 0">
      <!-- 商品列表区域 -->
      <!-- uni-swipe-action 是最外层包裹性质的容器 -->
      <uni-swipe-action>
        <view v-for="(goods, i) in cart" :key="i">
          <my-orders :goods="goods" :show-num="true"></my-orders>
          <view class="goods-item-bottom">
            <button @click="showPopup2">到哪了？</button>
            <van-action-sheet
              :show="show2"
              title="货物位置"
              @close="handleClose"
            >
              <my-steps></my-steps>
            </van-action-sheet>
            <button @click="gotoOrderDetail(i)">订单详情</button>
            <!-- <button> -->
            <button @click="showPopup">确认收货</button>
            <van-action-sheet
              :show="show1"
              title="确认收到货了吗？"
              @close="handleClose"
            >
              <my-orders :goods="goods" :show-num="true"></my-orders>
              <view class="buttons">
                <van-button style="margin-top: 20px" type="primary" size="large"
                  >确认收货</van-button
                >
                <van-button @click="handleClose" type="danger" size="large"
                  >取消</van-button
                >
              </view>
            </van-action-sheet>
            <!-- </button> -->
          </view>
        </view>
      </uni-swipe-action>
    </view>
    <!-- 空白购物车区域 -->
    <view class="empty-cart" v-else>
      <image src="/static/cart_empty@2x.png" class="empty-img"></image>
      <text class="tip-text">空空如也~</text>
    </view>
  </view>
</template>

<script>
// 按需导入 mapGetters 这个辅助方法
import { mapGetters, mapState, mapMutations } from 'vuex'
import badgeMix from '@/mixins/tabbar-badge.js'
import myAddress from '../../components/my-address/my-address.vue'
export default {
  components: { myAddress },
  mixins: [badgeMix],
  data() {
    return {
      show1: false,
      show2: false,
      options: [
        {
          text: '删除', // 显示的文本内容
          style: {
            backgroundColor: '#C00000', // 按钮的背景颜色
          },
        },
      ],
      actions: [
        {
          name: '选项',
        },
        {
          name: '选项',
        },
        {
          name: '选项',
          subname: '描述信息',
          openType: 'share',
        },
      ],
      steps: [
        {
          text: '步骤一',
          desc: '描述信息',
        },
        {
          text: '步骤二',
          desc: '描述信息',
        },
        {
          text: '步骤三',
          desc: '描述信息',
        },
        {
          text: '步骤四',
          desc: '描述信息',
        },
      ],
      pageTitle: '购物车',
    }
  },
  computed: {
    // 将 m_cart 模块中的 total 映射为当前页面的计算属性
    ...mapGetters('m_cart', ['total']),
    ...mapState('m_cart', ['cart']),
  },
  onShow() {
    // 在页面刚展示的时候，设置数字徽标
    this.setBadge()
  },
  methods: {
    // 点击了滑动操作按钮
    swipeActionClickHandler(goods) {
      console.log(goods)
    },
    setBadge() {
      // 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
      uni.setTabBarBadge({
        index: 2, // 索引
        text: this.total + '', // 注意：text 的值必须是字符串，不能是数字
      })
    },
    ...mapMutations('m_cart', [
      'updateGoodsState',
      'updateGoodsCount',
      'removeGoodsById',
    ]),
    // 商品的勾选状态发生了变化
    radioChangeHandler(e) {
      this.updateGoodsState(e)
    },
    numberChangeHandler(e) {
      this.updateGoodsCount(e)
    },
    // 点击了滑动操作按钮
    swipeActionClickHandler(goods) {
      this.removeGoodsById(goods.goods_id)
    },
    gotoOrderDetail(i) {
      console.log(i)
      uni.navigateTo({
        url: '/subpkgB/orderDetail/orderDetail?index=' + i,
      })
    },

    showPopup() {
      this.show1 = true
    },
    showPopup2() {
      this.show2 = true
    },
    handleClose() {
      this.show1 = false // 关闭弹出框
      this.show2 = false // 关闭弹出框
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-container {
  padding-bottom: 50px;
  .cart-title {
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 5px;
    border-bottom: 1px solid #efefef;
    .cart-title-text {
      margin-left: 10px;
    }
  }
  .goods-item-bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    height: 100rpx;
    width: 100%;
    background-color: #f0f0f0;
    border-bottom: 1px solid #333;
    button {
      height: 60rpx;
      width: 200rpx;
      font-size: 30rpx;
      line-height: 60rpx;
      text-align: center;
      border-radius: 30rpx;
      background: linear-gradient(#cbc1b2, #e4dfd7);
    }
  }
}
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  .empty-img {
    width: 90px;
    height: 90px;
  }

  .tip-text {
    font-size: 12px;
    color: gray;
  }
}
</style>
