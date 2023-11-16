export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    list: [
      {
        item_id: 0,
        name: '小西西',
        likes: 15,
        title: '宝藏单品，快来安利',
        image: '/static/my-icons/cate/cate1.png',
      },
      {
        item_id: 1,
        name: '罗罗',
        likes: 854,
        title: '这件衣服太出片啦！',
        image: '/static/my-icons/cate/cate2.png',
      },
      {
        item_id: 2,
        name: '利可',
        likes: 15,
        title: '太多款式啦，最后还是选择了这个。',
        image: '/static/my-icons/cate/cate3.png',
      },
      {
        item_id: 3,
        name: '有有',
        likes: 15,
        title: '第一次给孩子尝试，很棒的体验！',
        image: '/static/my-icons/cate/cate4.png',
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
