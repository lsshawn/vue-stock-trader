const state = {
  funds: 10000,
  stocks: [] // stocks in our portfolio
}

const mutations = {
  'BUY_STOCK' (state, { stockId, quantity, stockPrice }) { // get passed from Stocks-stock component
    // check if stock is in portfolio, add position
    // JS note: single line function has implicit return
    // 'element' is automatically passed into find method.
    const record = state.stocks.find(element => element.id == stockId)
    
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    // if tried to sell more, remove item from portfolio of stocks
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  }
}

const actions = {
  sellStock ({commit}, order) {
    commit('SELL_STOCK', order)
  }
  // buyStock action is in stocks module
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map( stock => {
      const record = getters.stocks.find(element => element.id == stock.id) // getting full list of stocks from store/modules/stocks 
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}