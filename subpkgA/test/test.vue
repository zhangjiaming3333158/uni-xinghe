<template>
  <view>
    <view v-for="item in flowList" :key="item.item_id" @click="changeItem">
      <view>{{ item.like }}</view>
      <view>{{ item.choice }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      flowList: [
        {
          item_id: 0,
          price: 35,
          title: '北国风光，千里冰封，万里雪飘',
          shop: '李白杜甫白居易旗舰店',
          image: '/static/my-icons/wx-logo.jpg',
          like: 0,
          choice: false,
        },
        {
          item_id: 1,
          price: 75,
          title: '望长城内外，惟余莽莽',
          shop: '李白杜甫白居易旗舰店',
          image: '/static/my-icons/logo.png',
          like: 0,
          choice: false,
        },
      ],
    }
  },
  methods: {
		changeItem(e) {
			console.log(e);
			this.flowList[0].like = 1
		}
	},
}
</script>

<style lang="scss" scoped></style>
