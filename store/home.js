export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    list: [
      {
        item_id: 0,
        price: 89,
        title: '印花帆布包',
        image: '/static/my-icons/home/bag.png',
      },
      {
        item_id: 1,
        price: 700,
        title: '清桐 凤尾鞋',
        image: '/static/my-icons/home/shoe.png',
      },
      {
        item_id: 2,
        price: 18,
        title: '潮流凤尾袜',
        image: '/static/my-icons/home/socks.png',
      },
      {
        item_id: 3,
        price: 21,
        title: '畲式徽章',
        image: '/static/my-icons/home/badge.png',
      },
    ],
  }),

  // 模块的 mutations 方法
  mutations: {
    // // 增加收藏
    // addLike(state, item) {
    //   // 根据提交的商品的Id，查询购物车中是否存在这件商品
    //   // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
    //   const findResult = state.list.find((x) => x.item_id === item.item_id)
    //   // 如果购物车中有这件商品，则只更新数量即可
    //   findResult.like++
    // },
    // // 减少收藏
    // removeLike(state, item) {
    //   // 根据提交的商品的Id，查询购物车中是否存在这件商品
    //   // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
    //   const findResult = state.list.find((x) => x.item_id === item.item_id)
    //   // 如果购物车中有这件商品，则只更新数量即可
    //   findResult.like--
    // },
    // //改变选择状态
    // changeChoice(state, item) {
    //   // 根据提交的商品的Id，查询购物车中是否存在这件商品
    //   // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
    //   const findResult = state.list.find((x) => x.item_id === item.item_id)
    //   // 如果购物车中有这件商品，则只更新数量即可
    //   findResult.choice = !findResult.choice
    //   console.log(findResult)
    // },
  },

  // 模块的 getters 属性
  getters: {},
}
