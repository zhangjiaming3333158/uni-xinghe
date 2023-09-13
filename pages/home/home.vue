<template>
  <view>
    <my-nav :title="pageTitle"></my-nav>
    <!-- 使用自定义的搜索组件 -->
    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>
    <!-- card -->
    <view class="top-tag">
      <view class="top-tag-item"> <text>官方推荐</text></view>
    </view>
    <!-- body -->
    <view class="body-list">
      <view class="body-top">
        <view class="body-top-left">
          <view class="body-item-top">新品折扣</view>
          <view class="body-item-bottom">
            <swiper
              :indicator-dots="true"
              :autoplay="true"
              :interval="3000"
              :duration="1000"
              circular
            >
              <swiper-item v-for="item in swiperList" :key="item.goods_id">
                <navigator
                  class="swiper-item"
                  :url="
                    '/subpkgA/goods_detail/goods_detail?goods_id=' +
                    item.goods_id
                  "
                >
                  <!-- 动态绑定图片的 src 属性 -->
                  <image :src="item.image_src"></image>
                </navigator>
              </swiper-item>
            </swiper>
          </view>
        </view>
        <view class="body-top-right">
          <view class="body-item-top">热卖</view>
          <view class="body-item-bottom">
            <swiper
              :indicator-dots="true"
              :autoplay="true"
              :interval="3000"
              :duration="1000"
              circular
            >
              <swiper-item v-for="item in swiperList" :key="item.goods_id">
                <navigator
                  class="swiper-item"
                  :url="
                    '/subpkgA/goods_detail/goods_detail?goods_id=' +
                    item.goods_id
                  "
                >
                  <!-- 动态绑定图片的 src 属性 -->
                  <image :src="item.image_src"></image>
                </navigator>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>

      <view class="body-bottom">
        <view class="body-item">
          <view class="body-item-left">新<br />品</view>
          <view class="body-item-right">
            <swiper
              :indicator-dots="true"
              :autoplay="true"
              :interval="3000"
              :duration="1000"
              circular
            >
              <swiper-item v-for="item in swiperList" :key="item.goods_id">
                <navigator
                  class="swiper-item"
                  :url="
                    '/subpkgA/goods_detail/goods_detail?goods_id=' +
                    item.goods_id
                  "
                >
                  <!-- 动态绑定图片的 src 属性 -->
                  <image :src="item.image_src"></image>
                </navigator>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
    </view>
    <!-- scroll -->
    <view class="scroll">
      <scroll-view class="scroll-view_H">
        <view id="demo1" class="scroll-view-item_H uni-bg-red">
          <view v-for="(i, index) in 10" :key="index">
            <image src="../../static/my-icons/wx-logo.jpg" mode="scaleToFill" />
            <text>首页</text>
          </view>
        </view>
      </scroll-view>
    </view>
    <!-- waterfall -->
    <view class="waterfall">
      <u-waterfall v-model="flowList">
        <template v-slot:left="{ leftList }">
          <view
            class="demo-warter"
            v-for="(item, index) in leftList"
            :key="index"
          >
            <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
            <u-lazy-load
              threshold="-450"
              border-radius="10"
              :image="item.image"
              :index="index"
            ></u-lazy-load>
            <!-- 标题 -->
            <view class="demo-title">
              {{ item.title }}
            </view>
            <!-- 名称 -->
            <view class="demo-bottom">
              <view class="bottom-ava">
                <image src="/static/my-icons/wx-logo.jpg" mode="scaleToFill" />
              </view>
              <view class="bottom-name">
                {{ item.shop }}
              </view>
              <view class="bottom-like" @click="changLike(item)">
                <uni-icons
                  type="heart"
                  size="20"
                  class="bottom-icon"
                  v-if="item.choice == false"
                ></uni-icons>
                <uni-icons
                  type="heart-filled"
                  size="20"
                  class="bottom-icon"
                  v-else
                ></uni-icons>
                <text>{{ item.like }}</text>
              </view>
            </view>
          </view>
        </template>
        <template v-slot:right="{ rightList }">
          <view
            class="demo-warter"
            v-for="(item, index) in rightList"
            :key="index"
          >
            <u-lazy-load
              threshold="-450"
              border-radius="10"
              :image="item.image"
              :index="index"
            ></u-lazy-load>
            <view class="demo-title">
              {{ item.title }}
            </view>
            <!-- 名称 -->
            <view class="demo-bottom">
              <view class="bottom-ava">
                <image src="/static/my-icons/wx-logo.jpg" mode="scaleToFill" />
              </view>
              <view class="bottom-name">
                {{ item.shop }}
              </view>
              <view class="bottom-like" @click="changLike(item)">
                <uni-icons
                  type="heart"
                  size="20"
                  class="bottom-icon"
                  v-if="item.choice == false"
                ></uni-icons>
                <uni-icons
                  type="heart-filled"
                  size="20"
                  class="bottom-icon"
                  v-else
                ></uni-icons>
                <text>{{ item.like }}</text>
              </view>
            </view>
          </view>
        </template>
      </u-waterfall>
      <u-loadmore
        bg-color="rgb(240, 240, 240)"
        :status="loadStatus"
        @loadmore="addRandomData"
      ></u-loadmore>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import badgeMix from '@/mixins/tabbar-badge.js'
export default {
  mixins: [badgeMix],
  data() {
    return {
      pageTitle: '首页',
      //轮播图数据列表
      swiperList: [],
      //瀑布流列表
      loadStatus: 'loadmore',
      flowList: [],
      pages: 0, //当前页数
      limit: 1, //总页数
    }
  },
  onLoad() {
    //获取轮播图方法
    this.getSwiperList()
    //获取分类当行数据方法
    // this.getNavList()
    //获取楼层数据列表
    // this.getFloorList()
    //waterfall
    this.addRandomData()
  },
  computed: {
    ...mapState('m_home', ['list']),
  },
  onReachBottom() {
    this.limit = Math.floor(this.list.length / 10)
    if (this.limit > this.pages) {
      this.loadStatus = 'loading'
      // 模拟数据加载
      setTimeout(() => {
        this.addRandomData()
        this.loadStatus = 'loadmore'
      }, 1000)
      this.pages++ // 页数+1
    } else {
      this.loadStatus = 'none'
    }
  },
  methods: {
    gotoSearch() {
      uni.navigateTo({
        url: '/subpkgA/search/search',
      })
    },
    async getSwiperList() {
      const { data: res } = await uni.$http.get(
        '/api/public/v1/home/swiperdata'
      )
      if (res.meta.status !== 200) return uni.$showMsg()
      // 3.3 请求成功，为 data 中的数据赋值
      this.swiperList = res.message
    },
    addRandomData() {
      for (let i = 0; i < this.list.length > 10 ? this.list.length : 10; i++) {
        // console.log(i)
        // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
        let item = JSON.parse(JSON.stringify(this.list[i]))
        item.id = this.$u.guid()
        this.flowList.push(item)
      }
    },
    //获取home.js中的方法
    ...mapMutations('m_home', ['addLike', 'removeLike', 'changeChoice']),
    changLike(item) {
      if (item.choice == false) {
        console.log(item)
        this.addLike(item)
        this.changeChoice(item)
      } else {
        console.log(item)
        this.removeLike(item)
        this.changeChoice(item)
      }
      this.$nextTick(() => {
        // 可在这里执行一些依赖于状态更新后的操作
        this.flowList = this.list
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  // 设置定位效果为“吸顶”
  position: sticky;
  // 吸顶的“位置”
  top: 0;
  // 提高层级，防止被轮播图覆盖
  z-index: 999;
}

.top-tag {
  display: flex;
  justify-content: center;
  margin-top: 20rpx;
  text-align: center;
  .top-tag-item {
    width: 400rpx;
    height: 100rpx;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 100rpx;
    background-color: #ebb86c;
    text {
      font-size: 25px;
      color: #000;
    }
  }
}
.body-list {
  display: flex;
  flex-direction: column;
  .body-top {
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30rpx;
    .body-top-right,
    .body-top-left {
      width: 80%;
      border-radius: 10px;
      position: relative;
      height: 500rpx;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      background-color: #fff;
      overflow: hidden;
      .body-item-top{
        position: absolute;
        height: 30%;
        width: 100%;
        background: linear-gradient(90deg, #f7cee2, #ec89d3);
        opacity: 0.9;
        z-index: 9;
        font-size: 30px;
        text-align: center;
        line-height: 150rpx;
      }
      .body-item-bottom {
        width: 100%;
        height: 100%;
        swiper {
          height: 100%;
          .swiper-item,
          image {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .body-top-right {
      margin-left: 10px;
    }
  }
  .body-bottom {
    width: 100%;
    display: flex;
    justify-content: center;

    .body-item {
      position: relative;
      width: 700rpx;
      height: 250rpx;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      background-color: #fff;
      margin-top: 30rpx;
      overflow: hidden;
      .body-item-left {
        position: absolute;
        box-sizing: border-box;
        width: 180rpx;
        height: 100%;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        background: linear-gradient(90deg, #55bbf9, #578aef);
        opacity: 0.9;
        line-height: 75rpx;
        z-index: 9;
        padding: 10px 0;
        font-size: 30px;
        text-align: center;
        line-height: 105rpx;
      }

      .body-item-right {
        width: 100%;
        height: 100%;
        swiper {
          height: 300rpx;

          .swiper-item,
          image {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
.scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .scroll-view_H {
    white-space: nowrap;
    width: 730rpx;
    height: 292rpx;
    border-radius: 10px;
    background-color: #fff;
    .scroll-view-item_H {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      height: 292rpx;
      border-radius: 10px;
      view {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 146rpx;
        width: 146rpx;
        text-align: center;
        line-height: 146rpx;
        image {
          height: 70%;
          width: 70%;
          margin-bottom: -25px;
        }
        text {
          height: 30%;
          width: 70%;
          font-size: 24rpx;
          color: #000;
        }
      }
    }
  }
}
.waterfall {
  margin-top: 30rpx;
  .demo-warter {
    border-radius: 8px;
    margin: 5px;
    background-color: #ffffff;
    padding: 8px;
    position: relative;
  }

  .u-close {
    position: absolute;
    top: 32rpx;
    right: 32rpx;
  }

  .demo-image {
    width: 100%;
    border-radius: 4px;
  }

  .demo-title {
    font-size: 30rpx;
    margin-top: 5px;
    color: $u-main-color;
  }

  .demo-tag {
    display: flex;
    margin-top: 5px;
  }

  .demo-tag-owner {
    background-color: $u-type-error;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 4rpx 14rpx;
    border-radius: 50rpx;
    font-size: 20rpx;
    line-height: 1;
  }

  .demo-tag-text {
    border: 1px solid $u-type-primary;
    color: $u-type-primary;
    margin-left: 10px;
    border-radius: 50rpx;
    line-height: 1;
    padding: 4rpx 14rpx;
    display: flex;
    align-items: center;
    border-radius: 50rpx;
    font-size: 20rpx;
  }

  .demo-price {
    font-size: 30rpx;
    color: $u-type-error;
    margin-top: 5px;
  }

  .demo-name {
    font-size: 22rpx;
    color: $u-tips-color;
    margin-top: 5px;
  }
  .demo-bottom {
    display: flex;
    align-items: center;
    .bottom-ava {
      margin-top: 5px;
      margin-right: 5px;
      width: 60rpx;
      height: 60rpx;
      border-radius: 40rpx;
      background-color: #f2f2f2;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .bottom-name {
      font-size: 22rpx;
      width: 150rpx;
      color: $u-tips-color;
      margin-top: 5px;
    }
    .bottom-like {
      display: flex;
      flex-direction: column;
      margin: 5px 5px 0 17px;
      // background-color: #fff;
      .bottom-icon {
        display: flex;
      }
      text {
        text-align: center;
        font-size: 22rpx;
        color: $u-tips-color;
      }
    }
  }
}
</style>
