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
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '宝藏单品，快来安利',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate1.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
      },
      {
        item_id: 1,
        name: '罗罗',
        likes: 854,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '这件衣服太出片啦！',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate2.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator2.png',
      },
      {
        item_id: 2,
        name: '利可',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '太多款式啦，最后还是选择了这个。',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate3.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator3.png',
      },
      {
        item_id: 3,
        name: '有有',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '第一次给孩子尝试，很棒的体验！',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate4.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator4.png',
      },
      {
        item_id: 4,
        name: '汉服日记',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '汉服日记',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate5.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator5.png',
      },
      {
        item_id: 5,
        name: '林家小铺帽',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '林家小铺帽',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate6.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator6.png',
      },
      {
        item_id: 6,
        name: '牵与千寻',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '牵与千寻',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate7.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator7.png',
      },
      {
        item_id: 7,
        name: '陈十二Collection',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '陈十二Collection',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate8.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator7.png',
      },
      {
        item_id: 8,
        name: '妙摹',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '妙摹',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate9.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator8.png',
      },
      {
        item_id: 9,
        name: '海马体照相馆',
        likes: 15,
        star: 5,
        chat: [
          {
            name: '小西西',
            content: '宝藏单品，快来安利',
            avator:
              'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator1.png',
          },
        ],
        title: '海马体照相馆',
        image:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/cate10.png',
        avator:
          'https://mp-f8e9f035-1bf3-4088-9f69-9b64b6566cd6.cdn.bspapp.com/img/cate/avator9.png',
      },
    ],
  }),

  // 模块的 mutations 方法
  mutations: {
    // 增加 likes
    changeLikes(state, { itemId, amount }) {
      state.list[itemId].likes += amount
    },

    // 增加 star
    changeStars(state, { itemId, amount }) {
      state.list[itemId].star += amount
    },

    // 增加 chat 数据
    changeChat(state, { itemId, chat }) {
      console.log(itemId, chat,'itemId, chat');
      state.list[itemId].chat.push(chat)
    },
  },

  // 模块的 getters 属性
  getters: {},
}
