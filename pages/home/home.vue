<template>
  <view>
    <!-- nav自定义组件 -->
    <my-nav :showIcon="true"></my-nav>
    <!-- swpier-card -->
    <view class="swiper-card">
      <view class="item">
        <view class="left">
          <view class="title">新品上市</view>
          <view class="desc">畲式 凤尾鞋 轻便款</view>
          <view class="time">2021.6.13-8.13</view>
        </view>
        <view class="right"
          ><image
            class="img1"
            src="/static/my-icons/home/shoe.png"
            mode="aspectFit"
        /></view>
      </view>
      <view class="item">
        <view class="right"
          ><image
            class="img2"
            src="/static/my-icons/home/bag.png"
            mode="aspectFit" /></view
        ><view class="left">
          <view class="title">新品上市</view>
          <view class="desc">畲式 凤尾鞋 轻便款</view>
          <view class="time">2021.6.13-8.13</view>
        </view>
      </view>
    </view>
    <!-- select导航了 -->
    <view class="select-card">
      <view class="select-item active">全部</view>
      <view class="select-item">款式新</view>
      <view class="select-item">销量高</view>
      <view class="select-item">好评多</view>
      <view class="select-item" @click="toggleShowMore"
        ><text>更多分类</text>
        <image
          style="width: 15px; height: 15px"
          src="/static/my-icons/home/select.png"
          mode="scaleToFill"
        />
        <view
          class="more"
          :class="[showMore ? 'active' : '']"
        >
          <text>鞋子</text>
          <text>T恤</text>
          <text>长袍</text>
          <text>长裙</text>
        </view>
      </view>
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
              <view class="bottom-name"> ¥{{ item.price }} </view>
              <view class="bottom-like" @click="changLike(item)">
                <image
                  style="width: 20px; height: 20px"
                  src="/static/my-icons/home/dingzhi.png"
                  mode="scaleToFill"
                />
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
              <view class="bottom-name"> ¥{{ item.price }} </view>
              <view class="bottom-like" @click="changLike(item)">
                <image
                  style="width: 20px; height: 20px"
                  src="/static/my-icons/home/dingzhi.png"
                  mode="scaleToFill"
                />
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
      showMore: false,
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
    //切换showmore展示
    toggleShowMore() {
      this.showMore = !this.showMore
    },
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
$background-color: #823027;
$font-color: #1a1a1a;
$active: #c26c63;
.swiper-card {
  height: 150px;
  max-width: 100wh;
  overflow-y: scroll;
  background-color: $background-color;
  display: flex;
  // justify-content: center;
  align-items: center;
  .item {
    display: flex;
    margin-left: 20px;
    height: 100px;
    width: 300px;
    border-radius: 15px;
    background-color: $active;
    .left {
      box-sizing: border-box;
      width: 170px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: $font-color;
      border-radius: 15px;
      padding: 10px 0 10px 20px;
      .title {
        font-size: 10px;
      }
      .desc {
        font-size: 16px;
        font-weight: bold;
      }
      .time {
        font-size: 10px;
        font-weight: bold;
      }
    }
    .right {
      position: relative;
      width: 130px;
      height: 100%;
      border-radius: 15px;
      .img1 {
        position: absolute;
        top: -15px;
        left: -10px;
        width: 100%;
        height: 100%;
        scale: 1.5;
      }
      .img2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        scale: 1.5;
      }
    }
  }
}
.select-card {
  height: 50px;
  background-color: $background-color;
  // background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $font-color;
  font-weight: bold;
  font-size: 14px;
  .select-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    background-color: #fff;
    .more {
      position: absolute;
      top: 45px;
      right: 0;
      padding: 5px;
      display: none;
      background-color: #fff;
      border-radius: 5px;
      font-size: 12px;
      z-index: 1;
      &.active {
        display: flex;
        flex-direction: column;
      }
    }
    &.active {
      background-color: $active;
    }
  }
}
.waterfall {
  background-color: $background-color;
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
    font-size: 14px;
    margin: 5px 0 0 10px;
    color: $font-color;
    font-weight: bold;
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

  .demo-bottom {
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bottom-name {
      font-size: 14px;
      color: $font-color;
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
    }
  }
}
</style>
