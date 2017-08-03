<template>
  <div class="container">
    <app-header></app-header>
    <div class="col-md-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    },
    created () { // when root is initialized, run 'initStocks' action in stocks module
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  body {
    padding: 30px
  }
</style>