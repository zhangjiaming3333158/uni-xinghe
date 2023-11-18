<template>
  <view class="container">
    <my-sub-nav :title="pageTitle"></my-sub-nav>
    <view class="content">
      <view class="img">
        <image src="/static/my-icons/home/cloth.jpg" mode="aspectFit" />
      </view>
      <view class="more">
        <image
          class="more-img"
          src="/static/my-icons/home/zuobiao.jpg"
          mode="scaleToFill"
        />
        <view class="more-none-1" :class="[showMoreNone ? 'active' : '']">手绘图案</view>
        <view class="more-none-2" :class="[showMoreNone ? 'active' : '']">上传图片</view>
        <view class="more-button" @click="showMoreNoneAction">更多</view>
      </view>
      <view class="bottom-swiper">
        <view class="top">
          <view
            ><uni-icons type="back" size="30" color="#fff"></uni-icons>
          </view>
          <view
            ><uni-icons type="forward" size="30" color="#fff"></uni-icons>
          </view>
        </view>
        <view class="swiper">
          <swiper
            indicator-dots="true"
            indicator-color="#fff"
            indicator-active-color="#91473f"
            autoplay="false"
            interval="3000"
            duration="1000"
          >
            <swiper-item>
              <image src="/static/my-icons/home/cloth.jpg" mode="aspectFit" />
            </swiper-item>
            <swiper-item>
              <image src="/static/my-icons/home/cloth.jpg" mode="aspectFit" />
            </swiper-item>
            <swiper-item>
              <image src="/static/my-icons/home/cloth.jpg" mode="aspectFit" />
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '我的定制',
      showMoreNone: false
    }
  },
  methods:{
    showMoreNoneAction(){
      this.showMoreNone = !this.showMoreNone
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #823027;
  .content {
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #fff;
    // padding: 20px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    .img {
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      margin-top: 20px;
    }
    .more {
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding: 0 20px;
      width: 100%;
      height: 30px;
      .more-img {
        height: 100%;
        width: 30px;
        background-color: #ccc;
      }
      .more-button {
        height: 100%;
        width: 70px;
        border-radius: 15px;
        background-color: #91473f;
        color: #fff;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
      }
      .more-none-1,
      .more-none-2 {
        display: none;
        position: absolute;
        right: 20px;
        height: 30px;
        width: 100px;
        border-radius: 10px;
        background-color: #c4a9a9;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        color: #91473f;
        &.active {
          display: block;
        }
      }
      .more-none-1 {
        top: -40px;
      }
      .more-none-2 {
        top: -80px;
      }
    }
    .bottom-swiper {
      margin-top: 20px;
      width: 100%;
      height: 100%;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      background-color: #823027;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        height: 50px;
        .uni-icons {
          color: #fff;
        }
      }
      .swiper {
        box-sizing: border-box;
        padding: 0 20px;
        width: 100%;
        height: 100%;
        .swiper-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 50%;
          image {
            width: 50%;
            height: 50%;
          }
        }
      }
    }
  }
}
</style>
