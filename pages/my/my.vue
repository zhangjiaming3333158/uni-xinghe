<template>
  <view>
    <my-nav :showNav="false" title="我的"></my-nav>
    <view class="my-container" v-if="userinfo.avatarUrl">
      <!-- 头像信息 -->
      <view class="user-info">
        <view class="top">
          <!-- <view class="message" @click="navigateToNotice">
            <image src="/static/my-icons/my/message.png" mode="scaleToFill" />
          </view> -->
          <image
            class="avatar"
            :src="userinfo.avatarUrl"
            mode="aspectFit"
          ></image>
          <text>{{ userinfo.nickName }}</text>
        </view>
        <view class="bottom">
          <view class="my3">
            <view>关注 23</view>
            <view style="width: 1px">|</view>
            <view>粉丝 63</view>
            <view style="width: 1px">|</view>
            <view>好友 12</view>
          </view>
          <view class="my4">
            <view class="item" @click="navigatorTo(1)">
              <image src="/static/my-icons/my/message.png" mode="scaleToFill" />
              <text>我的评价</text>
            </view>
            <view class="item" @click="navigatorTo(2)">
              <image src="/static/my-icons/my/message.png" mode="scaleToFill" />
              <text>私人客服</text>
            </view>
            <view class="item" @click="navigatorTo(3)">
              <image src="/static/my-icons/my/message.png" mode="scaleToFill" />
              <text>我的钱包</text>
            </view>
            <!-- <view class="item">
              <image src="/static/my-icons/my/message.png" mode="scaleToFill" />
              <text>民族概览</text>
            </view> -->
          </view>
        </view>
      </view>
      <!-- 近期购买 -->
      <view class="buy">
        <text class="title">近期购买</text>
        <view class="goods" v-for="(goods, i) in resList" :key="i"
          ><my-goods
            :state="1"
            :goods="goods"
            :show-radio="false"
            :show-num="true"
            @radio-change="radioChangeHandler"
            @num-change="numberChangeHandler"
          ></my-goods
        ></view>
      </view>
    </view>
    <view class="login" v-else>
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">
        一键登录
      </button>
    </view>
  </view>
</template>

<script>
// 按需导入 mapGetters 这个辅助方法
import { mapGetters, mapState, mapMutations } from 'vuex'
import badgeMix from '@/mixins/tabbar-badge.js'
// import myAddress from '../../components/my-address/my-address.vue'
export default {
  // components: { myAddress },
  mixins: [badgeMix],
  data() {
    return {
      options: [
        {
          text: '删除', // 显示的文本内容
          style: {
            backgroundColor: '#C00000', // 按钮的背景颜色
          },
        },
      ],
      pageTitle: '购物车',
      resList: uni.getStorageSync('reslist') || [],
    }
  },
  computed: {
    // 将 m_cart 模块中的 total 映射为当前页面的计算属性
    ...mapGetters('m_cart', ['total']),
    ...mapState('m_cart', ['cart']),
    ...mapState('m_user', ['userinfo']),
  },
  // onShow() {
  //   // 在页面刚展示的时候，设置数字徽标
  //   this.setBadge()
  // },
  methods: {
    setBadge() {
      // 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
      uni.setTabBarBadge({
        index: 2, // 索引
        text: this.total + '', // 注意：text 的值必须是字符串，不能是数字
      })
    },
    ...mapMutations('m_cart', [
      'updateGoodsState',
      'updateGoodsCount',
      'removeGoodsById',
    ]),
    ...mapMutations('m_user', ['updateUserInfo']),
    // 跳转notice页面
    navigateToNotice() {
      uni.navigateTo({
        url: '/subpkgB/notice/notice',
      })
    },
    // 跳转页面
    navigatorTo(index) {
      switch (index) {
        case 1:
          uni.navigateTo({
            url: '/subpkgB/judge/judge',
          })
          break
        case 2:
          uni.navigateTo({
            url: '/subpkgB/message/message',
          })
          break
        case 3:
          uni.navigateTo({
            url: '/subpkgB/wallet/wallet',
          })
          break
        default:
          break
      }
    },
    getUserInfo(e) {
      if (e.detail.userInfo) {
        console.log('用户信息：', e.detail.userInfo)
        this.$store.commit('m_user/updateUserInfo', e.detail.userInfo)
      } else {
        console.log('用户拒绝授权')
      }
      //更新页面
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped lang="scss">
$top-background-color: #c4a9a9;
$background-color: #823027;

.my-container {
  box-sizing: border-box;
  padding: 10px;
  background-color: $background-color;

  .user-info {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    border-radius: 30px;
    background-color: #cbc1b2;

    .top {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50%;
      width: 100%;

      .message {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 35px;
        width: 35px;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #fae084;
      }

      text {
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50%;
      width: 100%;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      background-color: $top-background-color;

      .my3 {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 30%;
        font-size: 16px;
        color: #000;
      }

      .my4 {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          image {
            margin-bottom: 10px;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  .buy {
    box-sizing: border-box;
    padding: 10px;
    margin: 20px 0;

    .title {
      margin: 20px 0;
      padding: 5px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: bold;
      background-color: $top-background-color;
    }

    .goods {
      margin-top: 20px;
    }
  }
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  button {
    margin-top: -100px;
    width: 200px;
    height: 50px;
    background-color: #823027;
    color: #fff;
    border: none;
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
  }
}
</style>
