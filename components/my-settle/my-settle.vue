<template>
  <!-- 最外层的容器 -->
  <view class="my-settle-container">
    <!-- 全选区域 -->
    <label class="radio" @click="changeAllState">
      <radio color="#C00000" :checked="isFullCheck" /><text>全选</text>
    </label>

    <!-- 合计区域 -->
    <view class="amount-box">
      合计:<text class="amount"
        ><text style="font-size: 16px">￥</text
        ><text style="font-size: 24px">{{ checkedGoodsAmount }}</text></text
      >
    </view>

    <!-- 结算按钮 -->
    <view class="btn-settle" @click="settlement">结算({{ checkedCount }})</view>
  </view>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      // 倒计时的秒数
      seconds: 3,
      // 定时器的 Id
      timer: null,
    }
  },
  computed: {
    ...mapGetters('m_cart', ['checkedCount', 'total', 'checkedGoodsAmount']),
    // addstr 是详细的收货地址
    ...mapGetters('m_user', ['addstr']),
    // token 是用户登录成功之后的 token 字符串
    ...mapState('m_user', ['token']),
    //是否全选
    isFullCheck() {
      return this.total === this.checkedCount
    },
  },
  methods: {
    // 2. 使用 mapMutations 辅助函数，把 m_cart 模块提供的 updateAllGoodsState 方法映射到当前组件中使用
    ...mapMutations('m_cart', ['updateAllGoodsState','removeGoodsById']),
    // 把 m_user 模块中的 updateRedirectInfo 方法映射到当前页面中使用
    ...mapMutations('m_user', ['updateRedirectInfo']),
    changeAllState() {
      // 修改购物车中所有商品的选中状态
      // !this.isFullCheck 表示：当前全选按钮的状态取反之后，就是最新的勾选状态
      this.updateAllGoodsState(!this.isFullCheck)
    },
    settlement() {
      // 1. 先判断是否勾选了要结算的商品
      if (!this.checkedCount) return uni.$showMsg('请选择要结算的商品！')

      // 2. 再判断用户是否选择了收货地址
      // if (!this.addstr) return uni.$showMsg('请选择收货地址！')

      // 3. 最后判断用户是否登录了
      // console.log(JSON.parse(uni.getStorageSync('userinfo')).nickName,'userinfo');
      if (!JSON.parse(uni.getStorageSync('userinfo')).nickName ) return this.delayNavigate()

      //在localstorage中添加一个reslist存储cart
      let reslist = uni.getStorageSync('reslist') || []
      let cart = JSON.parse(uni.getStorageSync('cart') || '[]')
      ///reslist存储cart数组中state为1的商品
      cart.forEach((item) => {
        console.log(item,'item');
        if (item.good_state) {
          reslist.push(item)
          this.removeGoodsById(item.good_id)
        }
      })
      uni.setStorageSync('reslist', reslist)
      // uni.setStorageSync('cart', JSON.stringify(cart))
    },
    // 展示倒计时的提示消息
    showTips(n) {
      // 调用 uni.showToast() 方法，展示提示消息
      uni.showToast({
        // 不展示任何图标
        icon: 'none',
        // 提示的消息
        title: '请登录后再结算！' + n + ' 秒后自动跳转到登录页',
        // 为页面添加透明遮罩，防止点击穿透
        mask: true,
        // 1.5 秒后自动消失
        duration: 1500,
      })
    },
    // 延迟导航到 my 页面
    delayNavigate() {
      // 把 data 中的秒数重置成 3 秒
      this.seconds = 3
      this.showTips(this.seconds)

      this.timer = setInterval(() => {
        this.seconds--

        if (this.seconds <= 0) {
          clearInterval(this.timer)
          uni.switchTab({
            url: '/pages/my/my',
            // 页面跳转成功之后的回调函数
            success: () => {
              // 调用 vuex 的 updateRedirectInfo 方法，把跳转信息存储到 Store 中
              this.updateRedirectInfo({
                // 跳转的方式
                openType: 'switchTab',
                // 从哪个页面跳转过去的
                from: '/pages/cart/cart',
              })
            },
          })
          return
        }

        this.showTips(this.seconds)
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
$font-title-color: #ab1b0e;
.my-settle-container {
  /* 底部固定定位 */
  position: fixed;
  bottom: 0;
  left: 0;
  /* 设置宽高和背景色 */
  width: 100%;
  height: 50px;
  // 将背景色从 cyan 改为 white
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  font-size: 14px;
  .radio {
    display: flex;
    align-items: center;
  }
  .amount-box {
    display: flex;
    align-items: center;
    .amount {
      color: $font-title-color;
    }
  }

  .btn-settle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    min-width: 100px;
    //线性渐变
    background: linear-gradient(to right, #d43030, #ab1b0e);
    color: white;
    padding: 0 10px;
    border-radius: 20px;
  }
}
</style>
