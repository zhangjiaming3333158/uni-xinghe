<template>
  <view class="chat-container">
    <my-sub-nav :title="title"></my-sub-nav>
    <view class="chat-messages">
      <view v-for="(message, index) in messages" :key="index" class="message">
        <view
          :class="{
            'sent-message': message.sender === 'me',
            'received-message': message.sender === 'other',
          }"
        >
          {{ message.content }}
        </view>
        <image
          class="avatar"
          src="https://mp-d0916f12-1d32-4523-8bb2-7abf42b821f8.cdn.bspapp.com/image/image/my/myAvator.png"
          mode="scaleToFill"
        ></image>
      </view>
    </view>
    <view class="chat-input">
      <view class="icon">
        <uni-icons type="sound" size="20"></uni-icons>
      </view>
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="..."
      />
      <button @click="sendMessage">发送</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { content: '你好!', sender: 'me' },
      ],
      newMessage: '',
      title: '私人客服',
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ content: this.newMessage, sender: 'me' })
        this.newMessage = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  // padding: 20px;
  .chat-messages {
    height: 90%;
    box-sizing: border-box;
    padding: 0 20rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .message {
      margin: 10px 0;
      display: flex;
      justify-content: flex-end;
      .sent-message {
        text-align: right;
        background-color: #dcf8c6;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 5px 0;
        word-wrap: break-word;
      }
      .avatar {
        margin-left: 20rpx;
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }
    }
    /* For received messages */
    .message.received-message {
      justify-content: flex-start;
      .received-message {
				text-align: left;
        background-color: #ededed;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 5px 0;
        word-wrap: break-word;
      }
    }
  }
  .chat-input {
    height: 10%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    // height: 120rpx;
    background-color: #fff;
    .icon {
      margin: 0 20rpx;
      height: 65rpx;
      width: 65rpx;
      border-radius: 50%;
      border: 1px solid #000;
      text-align: center;
      line-height: 65rpx;
    }
    input {
      flex: 1;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 10px;
    }
    button {
      margin-right: 5px;
      padding: 5rpx;
      height: 60rpx;
      width: 100rpx;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 30rpx;
      text-align: center;
      line-height: 50rpx;
    }
  }
}
</style>
