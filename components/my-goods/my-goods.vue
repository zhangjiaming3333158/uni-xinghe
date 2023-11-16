<template>
  <view>
    <view class="goods-item">
      <!-- 商品左侧图片区域 -->
      <view class="goods-item-left" v-if="showRadio">
        <radio
          :checked="goods.goods_state"
          color="#C00000"
          @click="radioClickHandler"
        ></radio>
      </view>
      <!-- 商品右侧信息区域 -->
      <view class="goods-item-right"
        ><image
          :src="goods.goods_small_logo || defaultPic"
          class="goods-pic"
        ></image>
        <view class="context"
          ><!-- 商品标题 -->
          <view class="goods-name">name</view>
          <!-- <view class="goods-name">{{ goods.goods_name }}</view> -->
          <!-- 商品尺码和颜色 -->
          <view class="goods-size">
            <text style="margin-right: 10px">尺码：M</text>
            <text>颜色：红色</text>
          </view>
          <!-- 商品价格 -->
          <view class="goods-price"
            >￥{{ goods.goods_price | tofixed }}</view
          ></view
        >
        <view class="goods-info-box">
          <!-- 商品数量 -->
          <view v-show="state === 0" class="goods-count">x1</view>
          <view v-show="state === 1" style="color: #910A18;">已收获</view>
          <view v-show="state === 2">未收获</view>
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
    // 是否展示图片左侧的 radio
    showRadio: {
      type: Boolean,
      // 如果外界没有指定 show-radio 属性的值，则默认不展示 radio 组件
      default: false,
    },
    // 是否展示价格右侧的 NumberBox 组件
    showNum: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Number,
      default: 0,
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
$font-title-color: #1a1a1a;
$font-color: #383838;
.goods-item {
  // 让 goods-item 项占满整个屏幕的宽度
  width: 80wh;
  // 设置盒模型为 border-box
  box-sizing: border-box;
  display: flex;
  padding: 10px 5px;

  .goods-item-left {
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .goods-item-right {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 20px;
    background-color: #c4a9a9;

    .goods-pic {
      width: 100px;
      height: 100px;
      border-radius: 15px;
      display: block;
    }
    .context {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      .goods-name {
        display: flex;
        align-items: center;
        height: 25%;
        font-size: 12px;
        color: $font-title-color;
      }
      .goods-size {
        display: flex;
        align-items: center;
        height: 25%;
        font-size: 10px;
        color: $font-color;
      }
      .goods-price {
        display: flex;
        align-items: center;
        height: 50%;
        font-size: 14px;
        color: $font-title-color;
      }
    }

    .goods-info-box {
      box-sizing: border-box;
      padding-right: 20px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .goods-count {
        padding: 2px 5px;
        border: 1px solid #fff;
        font-size: 13px;
        color: #000;
      }
    }
  }
}
</style>
