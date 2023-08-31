export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    list: [
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
      {
        item_id: 2,
        price: 385,
        title: '大河上下，顿失滔滔',
        shop: '李白杜甫白居易旗舰店',
        image: '/static/my-icons/icon1.png',
        like: 0,
        choice: false,
      },
      {
        item_id: 3,
        price: 784,
        title: '欲与天公试比高',
        shop: '李白杜甫白居易旗舰店',
        image: '/static/my-icons/icon2.png',
        like: 0,
        choice: false,
      },
      {
        item_id: 4,
        price: 7891,
        title: '须晴日，看红装素裹，分外妖娆',
        shop: '李白杜甫白居易旗舰店',
        image: '/static/my-icons/icon3.png',
        like: 0,
        choice: false,
      },
      {
        item_id: 5,
        price: 2341,
        shop: '李白杜甫白居易旗舰店',
        title: '江山如此多娇，引无数英雄竞折腰',
        image: '/static/my-icons/icon4.png',
        like: 0,
        choice: false,
      },
    ],
  }),

  // 模块的 mutations 方法
  mutations: {
    // 增加收藏
    addLike(state, item) {
      // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
      const findResult = state.list.find((x) => x.item_id === item.item_id)
      console.log(findResult);
      // 如果购物车中有这件商品，则只更新数量即可
      findResult.like++
    },
    // 减少收藏
    removeLike(state, item) {
      // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
      const findResult = state.list.find((x) => x.item_id === item.item_id)
      // 如果购物车中有这件商品，则只更新数量即可
      findResult.like--
    },
    //改变选择状态
    changeChoice(state, item) {
      // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
      const findResult = state.list.find((x) => x.item_id === item.item_id)
      // 如果购物车中有这件商品，则只更新数量即可
      findResult.choice = !findResult.choice
    },
  },

  // 模块的 getters 属性
  getters: {},
}
