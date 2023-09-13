<template>
  <view class="custom-navbar">
    <image class="icon" src="../../static/my-icons/logo.png" @click="handleIconClick" />
    <text class="title">{{ title }}</text>
  </view>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    handleIconClick() {
      uni.switchTab({
        url: '../home/home',
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-navbar {
  display: flex;
  align-items: center;
  justify-content: center;
	padding-top:19px ;
  height: 64px;
  background-color: #f9e3a8;
	box-sizing: border-box;
  .icon {
		position: absolute;
		top: 30px;
		left: 10px;
		line-height: 64px;
    width: 100px;
    height: 25px;
    margin-right: 10px;
  }

  .title {
		text-align: center;
		justify-content: center;
		line-height: 64px;
    font-size: 20px;
		color: #cf9239;
  }
}
</style>
