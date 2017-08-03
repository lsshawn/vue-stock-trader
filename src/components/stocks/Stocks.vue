<template>
  <div>
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  
  export default {
    data () {
      return {
        stocks: [ 
          { id: 1, name: 'GOOG', price: 110 },
          { id: 2, name: 'AAPL', price: 250 },
          { id: 3, name: 'BMW', price: 90 },
          { id: 4, name: 'MSFT', price: 130 },
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>