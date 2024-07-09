<template>
  <view>
    <my-sub-nav :title="cate_info.name"></my-sub-nav>
    <view class="detial-container" @click="toggleInput(0)">
      <!-- 商品图片区域 -->
      <view class="image">
        <image :src="cate_info.image" mode="widthFix" />
      </view>
      <!-- 商品详情信息 -->
      <!-- <rich-text :nodes="goods_info.goods_introduce"></rich-text> -->
      <view class="detail">
        <view class="title">
          <text class="price">{{ cate_info.title }}</text>
          <text class="name">#藏族 #定制</text>
        </view>
        <view class="count">
          <text>10-20 西藏</text>
        </view>
        <!-- <view class="custom">
        <image
          class="image"
          src="/static/my-icons/home/dingzhi.png"
          mode="scaleToFill"
        />
        <view class="mid">一起来定制同款吧！</view>
        <view class="right">去定制 ></view>
      </view> -->
      </view>
      <view class="cate-bottom">
        <view>共{{ cate_info.chat.length }}条评论</view>
        <view class="chat-body" v-for="item in cate_info.chat">
          <view class="user-info">
            <image :src="item.avator" mode="scaleToFill" />
            <text>{{ item.name }}</text>
          </view>
          <view class="user-chat">
            <text>{{ item.content }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="cate-nav">
      <view class="left" @click="toggleInput(1)">
        <input
          v-if="isInputVisible"
          type="text"
          placeholder="说点什么吧..."
          v-model="charInfo.content"
        />
        <text v-else>{{ placeholderText }}</text>
      </view>
      <view class="right" v-if="!isInputVisible">
        <view>
          <uni-icons
            v-if="like_state === -1"
            type="heart"
            size="20"
            @click="toggleLike(cate_info.item_id)"
          ></uni-icons>
          <uni-icons
            v-else
            type="heart-filled"
            size="20"
            @click="toggleLike(cate_info.item_id)"
          ></uni-icons>
          {{ cate_info.likes }}
        </view>
        <view>
          <uni-icons
            v-if="star_state === -1"
            type="star"
            size="20"
            @click="toggleStar(cate_info.item_id)"
          ></uni-icons>
          <uni-icons
            v-else
            type="star-filled"
            size="20"
            @click="toggleStar(cate_info.item_id)"
          ></uni-icons>
          {{ cate_info.star }}
        </view>
        <view>
          <uni-icons type="send" size="20"></uni-icons>
          <uni-icons type="chat" size="20"></uni-icons>
          {{ cate_info.chat.length }}
        </view>
      </view>
      <view v-else>
        <button @click="sendMessage">发送</button>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '小西西',
      cate_info: {},
      charInfo: {
        avator: '',
        name: '',
        content: '',
      },
      cate_id: '',
      like_state: -1,
      star_state: -1,
      isInputVisible: false, // 控制输入框的显示与隐藏
      placeholderText: '点击发表评论', // 当输入框不可见时显示的文本
    }
  },
  computed: {
    ...mapState('m_cate', ['list']),
    ...mapState('m_user', ['userinfo']),
  },
  onLoad(options) {
    // 获取商品 Id
    this.cate_id = options.cate_id
  },
  mounted() {
    this.getCateDetail(this.cate_id)
  },
  methods: {
    ...mapMutations('m_cate', ['changeLikes', 'changeStars', 'changeChat']),
    async getCateDetail(cate_id) {
      this.cate_info = this.list[cate_id]
      console.log(this.cate_info, 'this.list')
    },
    toggleLike(cate_id) {
      this.like_state = -this.like_state
      this.changeLikes({ itemId: cate_id, amount: this.like_state })
    },
    toggleStar(cate_id) {
      this.star_state = -this.star_state
      this.changeStars({ itemId: cate_id, amount: this.star_state })
    },
    sendMessage() {
      console.log(this.userinfo, 'userinfo')
      if (!this.userinfo.nickName) return this.delayNavigate()
      if (!this.charInfo.content) return uni.$showMsg('请输入评论内容！')
      this.charInfo.avator = this.userinfo.avatarUrl
      this.charInfo.name = this.userinfo.nickName
      this.changeChat({ itemId: this.cate_id, chat: this.charInfo })
      this.charInfo = {
        avator: '',
        name: '',
        content: '',
      }
      this.toggleInput(0)
      uni.showToast({
        // 不展示任何图标
        icon: 'none',
        // 提示的消息
        title: '发送成功',
        // 为页面添加透明遮罩，防止点击穿透
        mask: true,
        // 1.5 秒后自动消失
        duration: 1500,
      })
    },
    // 展示倒计时的提示消息
    showTips(n) {
      // 调用 uni.showToast() 方法，展示提示消息
      uni.showToast({
        // 不展示任何图标
        icon: 'none',
        // 提示的消息
        title: '请登录后再结算！' + n + ' 秒后自动跳转到登录页',
        // 为页面添加透明遮罩，防止点击穿透
        mask: true,
        // 1.5 秒后自动消失
        duration: 1500,
      })
    },
    delayNavigate() {
      // 把 data 中的秒数重置成 3 秒
      this.seconds = 3
      this.showTips(this.seconds)

      this.timer = setInterval(() => {
        this.seconds--

        if (this.seconds <= 0) {
          clearInterval(this.timer)
          uni.switchTab({
            url: '/pages/my/my',
            // 页面跳转成功之后的回调函数
            success: () => {
              // 调用 vuex 的 updateRedirectInfo 方法，把跳转信息存储到 Store 中
              this.updateRedirectInfo({
                // 跳转的方式
                openType: 'switchTab',
                // 从哪个页面跳转过去的
                from: '/pages/cart/cart',
              })
            },
          })
          return
        }

        this.showTips(this.seconds)
      }, 1000)
    },
    toggleInput(i) {
      this.isInputVisible = i === 1 ? true : false
    },
  },
}
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  background-color: #ededed;
  image {
    width: 100%;
  }
}
.detial-container {
  box-sizing: border-box;
  padding: 60px 0;
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
  flex-direction: column;
  color: #5e5e5e;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  .chat-body {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .user-info {
      display: flex;

      align-items: center;
      image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      text {
        color: #999;
        margin-left: 10px;
      }
    }
    .user-chat {
      font-size: 16px;
      // 文字行首缩进
      margin-left: 40px;
    }
  }
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
    box-sizing: border-box;
    padding: 0 10px 0 0;
    display: flex;
    align-items: center;
    height: 100%;
    flex: 1;
    input {
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: 1px solid #111;
      background-color: #f5f5f5;
      color: #000;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
    view {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
