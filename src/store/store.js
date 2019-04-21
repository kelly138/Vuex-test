import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [{
        name: 'mayun',
        price: 200
      },
      {
        name: 'mahuateng',
        price: 160
      },
      {
        name: 'madongmei',
        price: 100
      },
      {
        name: 'mali',
        price: 10
      },
    ]
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map(
        product => {
          return {
            name: "**" + product.name + "**",
            price: product.price / 2
          }
        }
      )
      return saleProducts;
    }

  },
  mutations: {
    reducePrice: (state,payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  // 使用actions的好处就是：在使用vue工具追踪的时候，可以使数据和追踪的方法异步刷新，便于维护和测试代码（进行异步操作和传递参数）
  actions: {
    reducePrice: (context,payload) => {
      setTimeout(function () {
        context.commit("reducePrice",payload)
      }, 2000)
    }
  }
})