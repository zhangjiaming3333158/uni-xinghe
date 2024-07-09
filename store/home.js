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
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/bag.png',
        time:'0706',
        sale:100,
        category:'其他',
      },
      {
        item_id: 1,
        price: 700,
        title: '清桐 凤尾鞋',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/shoes.png',
        time:'0705',
        sale:200,
        category:'鞋子',
      },
      {
        item_id: 2,
        price: 18,
        title: '潮流凤尾袜',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/socks.png',
        time:'0704',
        sale:300,
        category:'其他',
      },
      {
        item_id: 3,
        price: 21,
        title: '畲式徽章',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/badge.png',
        time:'0703',
        sale:400,
        category:'其他',
      },
      {
        item_id: 4,
        price: 89,
        title: '八角花白色',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/jck.png',
        time:'0702',
        sale:500,
        category:'衣服',
      },
      {
        item_id: 5,
        price: 69,
        title: '壮族民族服饰',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/blue-jacket.png',
        time:'0701',
        sale:611,
        category:'衣服',
      },
      {
        item_id: 6,
        price: 29,
        title: '大理风休闲印花短裤',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/shots.png',
        time:'0706',
        sale:722,
        category:'裤子',
      },
      {
        item_id: 7,
        price: 59,
        title: '飞天豹风鞋子',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/shoes2.png',
        time:'0705',
        sale:811,
        category:'鞋子',
      },
      {
        item_id: 8,
        price: 22,
        title: '阿诗玛帆布包',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/bu.png',
        time:'0704',
        sale:912,
        category:'其他',
      },
      {
        item_id: 9,
        price: 69,
        title: '绣花半身长裙',
        image: 'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/home/red_skirt.png',
        time:'0703',
        sale:1000,
        category:'裤子',
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
