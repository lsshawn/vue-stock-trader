import Vue from 'vue'


export const loadData = ({ commit }) => {
  Vue.axios.get('data.json')
    .then((res) => {
      console.log(res.data)
      if (res.data) {
        const stocks = res.data.stocks
        const funds = res.data.funds
        const stockPortfolio = res.data.stockPortfolio
        
        const portfolio = {
          stockPortfolio,
          funds
        }
        
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
    .catch((error) => {
      console.log(error);
    })
}