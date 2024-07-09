<template>
  <view style="background-color: #823027">
    <my-nav :showIcon="false" title="社区"></my-nav>
    <!-- 宝藏博主 -->
    <view class="blogger">
      <view><text class="title">宝藏博主</text></view>
      <view class="body">
        <view class="item">
          <view class="image"
            ><image src="https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/shop1.png" mode="widthFix"
          /></view>
          <view class="name">阿托雅莉</view>
        </view>
        <view class="item">
          <view class="image"
            ><image src="https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/shop2.png" mode="widthFix"
          /></view>
          <view class="name">阿瑞一家</view>
        </view>
        <view class="item">
          <view class="image"
            ><image src="https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/shop3.png" mode="widthFix"
          /></view>
          <view class="name">阿利尔家</view>
        </view>
      </view>
    </view>
    <!-- 分享社区 -->
    <view class="community">
      <view><text class="title">分享社区</text></view>
      <!-- waterfall -->
      <view class="waterfall">
        <u-waterfall v-model="flowList">
          <template v-slot:left="{ leftList }">
            <view
            @click="naviToCate(item.item_id)"
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
                <view class="left"
                  ><view class="img">
                    <image
                      style="width: 100%; height: 100%;border-radius: 50%;"
                      :src="item.avator"
                      mode="scaleToFill"
                    />
                  </view>
                  <view class="bottom-name"> {{ item.name }} </view></view
                >
                <view class="bottom-like" @click="changLike(item)">
                  <uni-icons type="heart" size="20"></uni-icons>
                  <text style="font-size: 10px; margin-left: 5px">{{
                    item.likes
                  }}</text>
                </view>
              </view>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
            @click="naviToCate(item.item_id)"
              class="demo-warter"
              v-for="(item, index) in rightList"
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
                <view class="left"
                  ><view class="img">
                    <image
                      style="width: 100%; height: 100%;border-radius: 50%;"
                      :src="item.avator"
                      mode="scaleToFill"
                    />
                  </view>
                  <view class="bottom-name"> {{ item.name }} </view></view
                >
                <view class="bottom-like" @click="changLike(item)">
                  <uni-icons type="heart" size="20"></uni-icons>
                  <text style="font-size: 10px; margin-left: 5px">{{
                    item.likes
                  }}</text>
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
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import badgeMix from '@/mixins/tabbar-badge.js'
export default {
  mixins: [badgeMix],
  data() {
    return {
      wh: '', //屏幕高度
      //瀑布流列表
      loadStatus: 'loadmore',
      flowList: [],
      pages: 0, //当前页数
      limit: 1, //总页数
      
    }
  },
  onLoad() {
    //获取屏幕高度
    const info = uni.getSystemInfoSync()
    //获取屏幕高度-搜索栏高度
    this.wh = info.windowHeight - 50
    //waterfall
    this.addRandomData()
  },
  computed: {
    ...mapState('m_cate', ['list']),
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
    addRandomData() {
      // for (let i = 0; i < this.list.length > 10 ? this.list.length : 10; i++) {
      //   // console.log(i)
      //   // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
      //   let item = JSON.parse(JSON.stringify(this.list[i]))
      //   item.id = this.$u.guid()
      //   this.flowList.push(item)
      //   this.flowList=this.list
      // }
      this.flowList = this.list
    },
    naviToCate(cate_id) {
      uni.navigateTo({
        url: `/subpkgA/cate_detail/cate_detail?cate_id=${cate_id}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$title-color: #c4a9a9;
$font-color: #1a1a1a;
.blogger {
  margin-top: 30px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  .title {
    padding: 5px;
    border-radius: 10px;
    background-color: $title-color;
    font-size: 14px;
    font-weight: bold;
    color: $font-color;
  }
  .body {
    margin-top: 20px;
    display: flex;
    overflow-y: scroll;
    .item {
      height: 100px;
      margin-right: 20px;
      min-width: 150px;
      border-radius: 40px;
      background-color: #fff;
      .image {
        height: 60%;
        overflow: hidden;
        image {
          height: 100%;
          width: 100%;
          border-top-right-radius: 40px;
          border-top-left-radius: 40px;
          z-index: 1;
        }
      }

      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40%;
        width: 100%;
        font-size: 12px;
        font-weight: bold;
        color: $font-color;
        background-color: #fff;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        z-index: 2;
      }
    }
  }
}
.community {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  .title {
    margin-left: 20px;
    padding: 5px;
    border-radius: 10px;
    background-color: $title-color;
    font-size: 14px;
    font-weight: bold;
    color: $font-color;
  }
  .waterfall {
    box-sizing: border-box;
    padding: 0 10px;
    .demo-warter {
      border-radius: 10px;
      margin: 20px 10px 0 10px;
      background-color: #ffffff;
      padding: 0;
      position: relative;
    }

    .demo-title {
      font-size: 10px;
      margin: 10px 0 0 10px;
      color: $font-color;
      font-weight: bold;
    }

    .demo-bottom {
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .img {
          border-radius: 50%;
          height: 25px;
          width: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bottom-name {
          margin-left: 5px;
          font-size: 10px;
          color: $font-color;
          justify-content: start;
          align-items: start;
        }
      }

      .bottom-like {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .bottom-icon {
          display: flex;
        }
      }
    }
  }
}
</style>
