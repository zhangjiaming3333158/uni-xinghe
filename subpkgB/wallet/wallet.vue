<template>
  <view class="container">
    <my-sub-nav :title="title"></my-sub-nav>
    <view class="content">
      <view class="wallet-box">
        <view class="text">
          <text class="text-title">零钱余额 (元)</text>
          <text class="text-content">962.30</text>
        </view>
        <view class="wallet-node1"></view>
        <view class="wallet-node2"></view>
      </view>
      <view class="wallet-1"></view>
      <view class="wallet-2"></view>

      <view class="content-more">
        <view class="more-title">
          <view>充值</view>
          <view style="color: #808080; font-size: 18px">提现</view>
        </view>
        <view class="more-select">
          <view class="more-select-1"
            ><button class="active">充10元</button>
            <button>充20元</button>
            <button>充50元</button></view
          >
          <view class="more-select-2"
            ><button>充100元</button>
            <button>充300元</button>
            <button>充500元</button></view
          >
        </view>
        <view class="more-button">
          <button style="background-color: #b82c2c">
            <text style="font-size: 20px; color: #fff">找人充</text>
            <text style="color: #fff">并同意零钱服务协议</text>
          </button>
          <button style="border: 1px solid #b82c2c">
            <text style="font-size: 20px; color: #b82c2c">去充值</text>
            <text style="color: #b82c2c">并同意零钱服务协议</text>
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '我的钱包',
    }
  },
}
</script>

<style scoped lang="scss">
$background-color: #823027;
$background-color-wallet: #f7f7fa;
$button-small-active: #faede1;
.container {
  box-sizing: border-box;
  padding-top: 20px;
  background-color: $background-color;
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: $background-color-wallet;
    .wallet-box {
      margin: 50px 0 30px 0;
      position: relative;
      width: 320px;
      height: 160px;
      border-radius: 25px;
      //中心扩散
      background: radial-gradient(circle, #c95d5d 0%, #a10e1d 100%);
      z-index: 2;
      .text {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text-title {
          margin-top: 10px;
          display: flex;
          align-items: flex-end;
          height: 20%;
          font-size: 14px;
          color: #fff;
        }
        .text-content {
          display: flex;
          align-items: flex-start;
          height: 80%;
          font-size: 60px;
          color: #fff;
        }
      }
      .wallet-node1 {
        position: absolute;
        top: 50%;
        right: -3px;
        transform: translateY(-50%);
        width: 40px;
        height: 30px;
        //线性渐变
        background: linear-gradient(180deg, #d94c5a 0%, #883027 100%);
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        z-index: 3;
      }
      .wallet-node2 {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        background: linear-gradient(180deg, #e86868 0%, #cc3f4d 100%);
        border-radius: 50%;
        z-index: 3;
      }
    }
    .wallet-1 {
      position: absolute;
      top: 0;
      left: 30px;
      margin-top: 50px;
      width: 280px;
      height: 160px;
      border-radius: 25px;
      background-color: #ede3d5;
      z-index: 1;
      //设置原点
      transform-origin: 0 0;
      rotate: -5deg;
      z-index: 1;
    }
    .wallet-2 {
      position: absolute;
      top: 0;
      left: 30px;
      margin-top: 50px;
      width: 220px;
      height: 160px;
      border-radius: 25px;
      background-color: #910a18;
      z-index: 1;
      //设置原点
      transform-origin: 0 0;
      rotate: -10deg;
      z-index: 0;
    }

    .content-more {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
      background-color: #fff;
      .more-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        font-size: 20px;
        color: #000;
      }
      .more-select {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        .more-select-2,
        .more-select-1 {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          button {
            width: 30%;
            height: 40px;
            border-radius: 5px;
            background-color: #f7f7fa;
            font-size: 14px;
            line-height: 40px;
            color: #000;
          }
          .active {
            box-sizing: border-box;
            border: 1px solid #b82c2c;
            background-color: $button-small-active;
            color: #b82c2c;
          }
        }
        .more-select-1 {
          margin-bottom: 20px;
        }
        .more-select-2 {
          margin-bottom: 50px;
        }
      }
      .more-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          padding: 5px 0;
          width: 100%;
          height: 50px;
          border-radius: 10px;
          background-color: #f7f7fa;
          line-height: 20px;
          color: #000;
          text {
            line-height: 20px;
            font-size: 10px;
            color: #808080;
          }
        }
      }
    }
  }
}
</style>
