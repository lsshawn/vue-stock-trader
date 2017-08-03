import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {
  }
}

const actions = {
  buyStock: ({ commit }, order) => { // the mutations is in Portfolio module. Yes it's possible.
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks) // stocks from data folder
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks // stocks array in state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}