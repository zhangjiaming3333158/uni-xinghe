<template>
  <view>
    <!-- nav自定义组件 -->
    <my-nav :showIcon="true" title="首页"></my-nav>
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
            @click="naviToGood(1)"
            class="img1"
            src="https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/shoes.png"
            mode="aspectFit"
        /></view>
      </view>
      <view class="item">
        <view class="right"
          ><image
            @click="naviToGood(0)"
            class="img2"
            src="https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/bag.png"
            mode="aspectFit" /></view
        ><view class="left">
          <view class="title">新品上市</view>
          <view class="desc">畲式 印花帆布包</view>
          <view class="time">2021.6.13-8.13</view>
        </view>
      </view>
    </view>
    <!-- select导航了 -->
    <view class="select-card">
      <view
        class="select-item"
        @click="sortTo(0)"
        :class="[activeIndex === 0 ? 'active' : '']"
        >全部</view
      >
      <view
        class="select-item"
        @click="sortTo(1)"
        :class="[activeIndex === 1 ? 'active' : '']"
        >款式新</view
      >
      <view
        class="select-item"
        @click="sortTo(2)"
        :class="[activeIndex === 2 ? 'active' : '']"
        >销量高</view
      >
      <view
        class="select-item"
        @click="sortTo(3)"
        :class="[activeIndex === 3 ? 'active' : '']"
        >价格低</view
      >
      <!-- <view class="select-item" @click="toggleShowMore" :class="[activeIndex >= 4 ? 'active' : '']"
        ><text>更多分类</text>
        <image
          style="width: 15px; height: 15px"
          src="/static/my-icons/home/select.png"
          mode="scaleToFill"
        />
        <view class="more" :class="[showMore ? 'active' : '']">
          <text @click="sortTo(4)" :class="[activeIndex === 4 ? 'activeindex' : '']">鞋子</text>
          <text @click="sortTo(5)" :class="[activeIndex === 5 ? 'activeindex' : '']">衣服</text>
          <text @click="sortTo(6)" :class="[activeIndex === 6 ? 'activeindex' : '']">裤子</text>
        </view>
      </view> -->
    </view>

    <!-- waterfall -->
    <view class="waterfall" v-if="loadStatus === 'loadmore'">
      <u-waterfall v-model="flowList">
        <template v-slot:left="{ leftList }">
          <view
            class="demo-warter"
            v-for="(item, index) in leftList"
            :key="index"
          >
            <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
            <u-lazy-load
              @click="naviToGood(item.item_id)"
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
              @click="naviToGood(item.item_id)"
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
      activeIndex: 0,
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
  },
  mounted() {
    this.addRandomData()
  },
  computed: {
    ...mapState('m_home', ['list']),
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
    sortTo(index) {
      console.log(index)
      if (index == 0) {
        this.list.sort((a, b) => {
          return a.item_id - b.item_id
        })
      } else if (index == 1) {
        this.list.sort((a, b) => {
          return b.time - a.time
        })
      } else if (index == 2) {
        this.list.sort((a, b) => {
          return a.sale - a.sale
        })
      } else if (index == 3) {
        this.list.sort((a, b) => {
          return a.price - b.price
        })
      } else if (index == 4) {
        this.list = this.list.filter((item) => {
          return item.type == '鞋子'
        })
        console.log(this.list, 'list')
      } else if (index == 5) {
        this.list = this.list.filter((item) => {
          return item.type == '衣服'
        })
      } else if (index == 6) {
        this.list = this.list.filter((item) => {
          return item.type == '裤子'
        })
      }
      this.loadStatus = 'loading'
      // 模拟数据加载
      setTimeout(() => {
        this.flowList = this.list
        console.log(this.flowList, 'flowList')
        this.loadStatus = 'loadmore'
      }, 300)
      this.activeIndex = index
    },
    addRandomData() {
      // 重新渲染页面
      this.flowList = this.list
      console.log(this.flowList, 'flowList')
      //forceUpdate
      // this.$forceUpdate()
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
    naviToGood(good_id) {
      uni.navigateTo({
        url: `/subpkgA/goods_detail/goods_detail?good_id=${good_id}`,
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
        scale: 1.3;
        rotate: -20deg;
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
      .activeindex {
        background-color: $active;
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
