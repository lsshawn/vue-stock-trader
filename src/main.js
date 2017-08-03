import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import { routes } from './routes.js'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'https://abu-faqkfy.firebaseio.com/'

// global filter
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
