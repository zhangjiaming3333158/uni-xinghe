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
      <view class="body-item">
        <view class="body-item-left1">新品<br />折扣</view>
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
                  '/subpkgA/goods_detail/goods_detail?goods_id=' + item.goods_id
                "
              >
                <!-- 动态绑定图片的 src 属性 -->
                <image :src="item.image_src"></image>
              </navigator>
            </swiper-item>
          </swiper>
        </view>
      </view>
      <view class="body-item">
        <view class="body-item-left2">热卖</view>
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
                  '/subpkgA/goods_detail/goods_detail?goods_id=' + item.goods_id
                "
              >
                <!-- 动态绑定图片的 src 属性 -->
                <image :src="item.image_src"></image>
              </navigator>
            </swiper-item>
          </swiper>
        </view>
      </view>
      <view class="body-item">
        <view class="body-item-left3">推荐</view>
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
                  '/subpkgA/goods_detail/goods_detail?goods_id=' + item.goods_id
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
    <!-- scroll -->
    <view class="scroll">
      <scroll-view class="scroll-view_H">
        <view id="demo1" class="scroll-view-item_H uni-bg-red">
          <view v-for="(i, index) in 10" :key="index">
            <img src="../../static/my-icons/wx-logo.jpg"
          /></view>
        </view>
      </scroll-view>
    </view>
    <!-- waterfall -->
    <view class="waterfall">
      <u-waterfall v-model="flowList" ref="uWaterfall">
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
              <view class="bottom-ava"> </view>
              <view class="bottom-name">
                {{ item.shop }}
              </view>
              <view class="bottom-like">
                <uni-icons
                  type="heart"
                  size="20"
                  class="bottom-icon"
                ></uni-icons>
                <text>1</text>
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
              <view class="bottom-ava"> </view>
              <view class="bottom-name">
                {{ item.shop }}
              </view>
              <view class="bottom-like">
                <uni-icons
                  type="heart"
                  size="20"
                  class="bottom-icon"
                ></uni-icons>
                <text>1</text>
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
      list: [
        {
          price: 35,
          title: '北国风光，千里冰封，万里雪飘',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
        },
        {
          price: 75,
          title: '望长城内外，惟余莽莽',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
        },
        {
          price: 385,
          title: '大河上下，顿失滔滔',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
        },
        {
          price: 784,
          title: '欲与天公试比高',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
        },
        {
          price: 7891,
          title: '须晴日，看红装素裹，分外妖娆',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
        },
        {
          price: 2341,
          shop: '李白杜甫白居易旗舰店',
          title: '江山如此多娇，引无数英雄竞折腰',
          image:
            'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
        },
        {
          price: 661,
          shop: '李白杜甫白居易旗舰店',
          title: '惜秦皇汉武，略输文采',
          image:
            'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
        },
        {
          price: 1654,
          title: '唐宗宋祖，稍逊风骚',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
        },
        {
          price: 1678,
          title: '一代天骄，成吉思汗',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
        },
        {
          price: 924,
          title: '只识弯弓射大雕',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
        },
        {
          price: 8243,
          title: '俱往矣，数风流人物，还看今朝',
          shop: '李白杜甫白居易旗舰店',
          image:
            'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
        },
      ],
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
  onReachBottom() {
    this.loadStatus = 'loading'
    // 模拟数据加载
    setTimeout(() => {
      this.addRandomData()
      this.loadStatus = 'loadmore'
    }, 1000)
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
      for (let i = 0; i < 10; i++) {
        let index = this.$u.random(0, this.list.length - 1)
        // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
        let item = JSON.parse(JSON.stringify(this.list[index]))
        item.id = this.$u.guid()
        this.flowList.push(item)
      }
    },
    remove(id) {
      this.$refs.uWaterfall.remove(id)
    },
    clear() {
      this.$refs.uWaterfall.clear()
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
    background-color: #fff;
    text-align: center;
    line-height: 100rpx;
    background-color: #cbc1b2;
    text {
      font-size: 25px;
      color: #000;
    }
  }
}
.body-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
    .body-item-left1,
    .body-item-left2,
    .body-item-left3 {
      position: absolute;
      box-sizing: border-box;
      padding-right: 10rpx;
      width: 220rpx;
      height: 100%;
      border-right: 1px solid #ccc;
      border-top-right-radius: 150rpx;
      border-bottom-right-radius: 150rpx;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 30px;
      z-index: 9;
    }
    .body-item-left1 {
      padding: 50rpx 10rpx 50rpx 0;
      // background-color: #fbd4ea;
      background: linear-gradient(#fff, #9fd3e8);
      line-height: 75rpx;
    }
    .body-item-left2 {
      // background-color: #9fd3e8;
      background: linear-gradient(#fff, #fbd4ea);
      line-height: 250rpx;
    }
    .body-item-left3 {
      // background-color: #f1ebb0;
      background: linear-gradient(#fff, #f1ebb0);
      line-height: 250rpx;
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
        height: 146rpx;
        width: 146rpx;
        text-align: center;
        line-height: 146rpx;
        img {
          height: 100%;
          width: 100%;
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
      width: 50rpx;
      height: 50rpx;
      border-radius: 40rpx;
      background-color: #f2f2f2;
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
