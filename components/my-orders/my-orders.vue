<template>
  <view>
    <view class="goods-item">
      <!-- 商品左侧图片区域 -->
      <view class="goods-item-left">
        <image
          :src="goods.goods_small_logo || defaultPic"
          class="goods-pic"
        ></image>
        <view class="state" v-show="isState">{{ state }}</view>
      </view>
      <!-- 商品右侧信息区域 -->
      <view class="goods-item-right">
        <!-- 商品标题 -->
        <view class="goods-name">{{ goods.goods_name }}</view>
        <view class="goods-info-box">
          <!-- 商品价格 -->
          <view class="goods-price">￥{{ goods.goods_price | tofixed }}</view>
          <!-- 商品数量 -->
          <view class="count">* {{ goods.goods_count }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-goods',
  // 定义 props 属性，用来接收外界传递到当前组件的数据
  props: {
    // 商品的信息对象
    goods: {
      type: Object,
      defaul: {},
    },
    // 是否展示价格右侧的 NumberBox 组件
    showNum: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: '无',
    },
    isState: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // 默认的空图片
      defaultPic:
        'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
    }
  },
  methods: {
    // radio 组件的点击事件处理函数
    radioClickHandler() {
      // 通过 this.$emit() 触发外界通过 @ 绑定的 radio-change 事件，
      // 同时把商品的 Id 和 勾选状态 作为参数传递给 radio-change 事件处理函数
      this.$emit('radio-change', {
        // 商品的 Id
        goods_id: this.goods.goods_id,
        // 商品最新的勾选状态
        goods_state: !this.goods.goods_state,
      })
    },
    numChangeHandler(val) {
      // 通过 this.$emit() 触发外界通过 @ 绑定的 num-change 事件
      this.$emit('num-change', {
        // 商品的 Id
        goods_id: this.goods.goods_id,
        // 商品的最新数量
        goods_count: +val,
      })
    },
  },
  filters: {
    // 把数字处理为带两位小数点的数字
    tofixed(num) {
      return Number(num).toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.goods-item {
  // 让 goods-item 项占满整个屏幕的宽度
  width: 750rpx;
  // 设置盒模型为 border-box
  box-sizing: border-box;
  display: flex;
  padding: 10px 5px 0 5px;
  border-bottom: 1px solid #f0f0f0;

  .goods-item-left {
    position: relative;
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .goods-pic {
      width: 100px;
      height: 100px;
      display: block;
    }
    .state {
      position: absolute;
      top: 0;
      left: 50px;
      width: 50px;
      height: 20px;
      border-bottom-left-radius: 10px;
      background-color: #f0f0f0;
      text-align: center;
      line-height: 20px;
    }
  }

  .goods-item-right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    .goods-name {
      font-size: 13px;
      color: #333;
    }

    .goods-info-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .goods-price {
        font-size: 16px;
        color: #c00000;
      }
      .count {
        margin-right: 20rpx;
        font-size: 16px;
      }
    }
  }
}
</style>
