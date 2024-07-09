<template>
  <view class="goods-detail-container">
    <my-sub-nav :title="title"></my-sub-nav>
    <view class="detail-container">
      <!-- 商品图片区域 -->
      <view class="image">
        <image :src="good_info.image" mode="aspectFit" />
      </view>
      <!-- 商品详情信息 -->
      <!-- <rich-text :nodes="goods_info.goods_introduce"></rich-text> -->
      <view class="detail">
        <view class="title">
          <text class="price"
            >¥ &nbsp;
            <text style="font-size: 32px">{{ good_info.price }}</text> &nbsp;
            起</text
          >
          <text class="name">{{ good_info.title }}</text>
        </view>
        <view class="count">
          <text>已售 {{ good_info.sale }} +</text>
          <uni-icons type="redo" color="#a6a6a6" size="25"></uni-icons
        ></view>
        <view class="list">
          <view class="list-item">
            <image
              class="list-item-icon"
              src="/static/my-icons/goods/car.jpg"
              mode="aspectFit"
            />
            <view class="list-item-content">
              <text>浙江 快递：免运费</text>
              <text>预定，付款后一周内发货</text>
            </view>
          </view>
          <view class="list-item">
            <image
              class="list-item-icon"
              src="/static/my-icons/goods/hands.jpg"
              mode="aspectFit"
            />
            <text class="list-item-content">七天无理由退货</text>
            <view class="list-right">></view>
          </view>
          <view class="list-item">
            <image
              class="list-item-icon"
              src="/static/my-icons/goods/app.jpg"
              mode="aspectFit"
            />
            <view class="list-right">></view>
          </view>
        </view>
      </view>
    </view>

    <!-- 商品导航组件 -->
    <view class="goods_nav">
      <!-- fill 控制右侧按钮的样式 -->
      <!-- options 左侧按钮的配置项 -->
      <!-- buttonGroup 右侧按钮的配置项 -->
      <!-- click 左侧按钮的点击事件处理函数 -->
      <!-- buttonClick 右侧按钮的点击事件处理函数 -->
      <uni-goods-nav
        :fill="true"
        :options="options"
        :buttonGroup="buttonGroup"
        @click="onClick"
        @buttonClick="buttonClick"
      />
    </view>
  </view>
</template>

<script>
// 按需导入 mapMutations 这个辅助方法
import { mapState, mapGetters, mapMutations } from 'vuex' //引入mapGetters
export default {
  data() {
    return {
      title: '商品详情',
      // 商品详情对象
      good_info: {},
      good_id: '',
      // 左侧按钮组的配置对象
      options: [
        // {
        //   icon: 'shop',
        //   text: '客服',
        // },
        {
          icon: 'cart',
          text: '购物车',
          // info: 2,
        },
      ],
      // 右侧按钮组的配置对象
      buttonGroup: [
        {
          text: '加入购物车',
          //线性渐变
          backgroundColor: 'linear-gradient(90deg, #F74848, #C41414)',
          color: '#fff',
        },
        // {
        //   text: '去定制',
        //   backgroundColor: '#910A18',
        //   color: '#fff',
        // },
      ],
    }
  },
  computed: {
    ...mapState('m_home', ['list']),
    ...mapGetters('m_cart', ['total']),
    ...mapState('m_cart', ['cart']),
  },
  onLoad(options) {
    // 获取商品 Id
    this.good_id = options.good_id
    // 调用请求商品详情数据的方法
    // this.getGoodsDetail(goods_id)
  },
  mounted() {
    this.getGoodsDetail(this.good_id)
  },
  methods: {
    // 定义请求商品详情数据的方法
    getGoodsDetail(good_id) {
      // this.good_info = this.list[good_id]
      this.good_info = this.list.find((x) => {
        if (x.item_id == good_id) return x
      })
      console.log(this.good_info)
    },
    // 实现轮播图的预览效果
    preview(i) {
      // 调用 uni.previewImage() 方法预览图片
      uni.previewImage({
        // 预览时，默认显示图片的索引
        current: i,
        // 所有图片 url 地址的数组
        urls: this.good_info.pics.map((x) => x.pics_big),
      })
    },
    onClick(e) {
      if (e.content.text === '购物车') {
        // 切换到购物车页面
        uni.switchTab({
          url: '/pages/cart/cart',
        })
      }
    },
    // 把 m_cart 模块中的 addToCart 方法映射到当前页面使用
    ...mapMutations('m_cart', ['addToCart']),
    // 右侧按钮的点击事件处理函数
    buttonClick(e) {
      console.log(e)
      // 1. 判断是否点击了 加入购物车 按钮
      if (e.content.text === '加入购物车') {
        // 2. 组织一个商品的信息对象
        const good = {
          good_id: this.good_info.item_id, // 商品的Id
          good_name: this.good_info.title, // 商品的名称
          good_price: this.good_info.price, // 商品的价格
          good_count: 1, // 商品的数量
          good_small_logo: this.good_info.image, // 商品的图片
          good_state: true, // 商品的勾选状态
        }

        // 3. 通过 this 调用映射过来的 addToCart 方法，把商品信息对象存储到购物车中
        this.addToCart(good)
        uni.showToast({
          // 不展示任何图标
          icon: 'none',
          // 提示的消息
          title: '添加成功',
          // 为页面添加透明遮罩，防止点击穿透
          mask: true,
          // 1.5 秒后自动消失
          duration: 1500,
        })
      } else if (e.content.text === '立即购买') {
      }
    },
  },
  watch: {
    // 1. 监听 total 值的变化，通过第一个形参得到变化后的新值
    total(newVal) {
      // 2. 通过数组的 find() 方法，找到购物车按钮的配置对象
      const findResult = this.options.find((x) => x.text === '购物车')

      if (findResult) {
        // 3. 动态为购物车按钮的 info 属性赋值
        findResult.info = newVal
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$price: #910a18;
.goods-detail-container {
  box-sizing: border-box;
  // 给页面外层的容器，添加 50px 的内padding，
  // 防止页面内容被底部的商品导航组件遮盖
  padding-bottom: 50px;
  background-color: #fff;
  .detail-container {
    box-sizing: border-box;
    padding: 60px 0 20px 0;
    .image {
      width: 100%;
      height: 300px;
      background-color: #ededed;
      image {
        width: 100%;
        height: 100%;
        // rotate: 18deg;
      }
    }
    .detail {
      box-sizing: border-box;
      padding: 15px;
      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .price {
          font-size: 24px;
          color: $price;
        }
        .name {
          font-size: 24px;
          color: #000;
        }
      }
      .count {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        color: #a6a6a6;
        margin: 10px 0;
      }
      .list {
        box-sizing: border-box;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: #f5f5f5;
        .list-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          height: 50px;
          .list-item-icon {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            image {
              width: 100%;
              height: 100%;
            }
          }
          .list-item-content {
            flex: 1;
            margin-left: 10px;
            font-size: 14px;
            color: #000;
            display: flex;
            flex-direction: column;
          }
          .item-right {
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #000;
          }
        }
      }
    }
  }

  .goods_nav {
    // 为商品导航组件添加固定定位
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
