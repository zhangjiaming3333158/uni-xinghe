<template>
  <view>
    <my-sub-nav :title="title"></my-sub-nav>
    <!-- 商品图片区域 -->
    <view class="image">
      <image src="/static/my-icons/home/shoe.png" mode="aspectFit" />
    </view>
    <!-- 商品详情信息 -->
    <!-- <rich-text :nodes="goods_info.goods_introduce"></rich-text> -->
    <view class="detail">
      <view class="title">
        <text class="price">宝藏单品，快来安利！</text>
        <text class="name">#藏族 #定制</text>
      </view>
      <view class="count">
        <text>10-20 西藏</text>
      </view>
      <view class="custom">
        <image
          class="image"
          src="/static/my-icons/home/dingzhi.png"
          mode="scaleToFill"
        />
        <view class="mid">一起来定制同款吧！</view>
        <view class="right">去定制 ></view>
      </view>
    </view>
    <view class="cate-bottom">
      <text>共14条评论</text>
    </view>
    <view class="cate-nav">
      <view class="left">
        <view class="input">
          <text></text>
          <text>说点什么吧...</text>
        </view>
      </view>
      <view class="right">
        <view><uni-icons type="heart" size="20"></uni-icons>342</view>
        <view><uni-icons type="star" size="20"></uni-icons>214</view>
        <view><uni-icons type="chat" size="20"></uni-icons>14</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '小西西',
    }
  },
}
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  background-color: #ededed;
  image {
    width: 100%;
    rotate: 18deg;
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
    }
    .name {
      font-size: 18px;
      color: #204978;
    }
  }
  .count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #a6a6a6;
    margin: 10px 0;
  }
  .custom {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e5e5e5;
    color: #808080;
    border-radius: 10px;
    height: 40px;
    width: 100%;
    margin: 10px 0;
    .image {
      width: 25px;
      height: 25px;
    }
    .mid {
      margin-left: 10px;
      flex: 1;
    }
    .right {
      width: 60px;
    }
  }
}

.cate-bottom {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  color: #5e5e5e;
  border-top: 1px solid #e5e5e5;
  height: 40px;
  width: 100%;
}

.cate-nav {
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 50px;
  .left {
    height: 100%;
    width: 50%;
    .input {
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: #f5f5f5;
      color: #808080;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
    view{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
