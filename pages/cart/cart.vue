<template>
  <view>
    <my-nav title="购物车"></my-nav>
    <view class="cart-container" v-if="cart.length !== 0">
      <!-- <my-address></my-address> -->
      <!-- 购物车商品列表的标题区域 -->
      <view class="cart-title">
        <!-- 左侧的图标 -->
        <!-- <uni-icons type="shop" size="24"></uni-icons> -->
        <!-- 描述文本 -->
        <text class="cart-title-text">购物车</text>
        <text style="font-size: 18px">(4件)</text>
      </view>
      <!-- 商品列表区域 -->
      <!-- uni-swipe-action 是最外层包裹性质的容器 -->
      <uni-swipe-action>
        <view v-for="(goods, i) in cart" :key="i">
          <!-- uni-swipe-action-item 可以为其子节点提供滑动操作的效果。需要通过 options 属性来指定操作按钮的配置信息 -->
          <uni-swipe-action-item
            :right-options="options"
            @click="swipeActionClickHandler(goods)"
          >
            <my-goods
              :goods="goods"
              :show-radio="true"
              :show-num="true"
              @radio-change="radioChangeHandler"
              @num-change="numberChangeHandler"
            ></my-goods>
          </uni-swipe-action-item>
        </view>
      </uni-swipe-action>
      <!-- 结算区域 -->
      <my-settle></my-settle>
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
      options: [
        {
          text: '删除', // 显示的文本内容
          style: {
            backgroundColor: '#C00000', // 按钮的背景颜色
          },
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
      this.removeGoodsById(goods.good_id)
    },
  },
}
</script>

<style lang="scss" scoped>
$background-color: #823027;
.cart-container {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: $background-color;
  padding-bottom: 50px;
  .cart-title {
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    padding-left: 5px;
    .cart-title-text {
      margin-left: 10px;
      font-size: 24px;
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
