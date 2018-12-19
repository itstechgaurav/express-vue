import "./assets/scss/main.scss"
require("./assets/js/main")

import Vue from 'vue'
import App from './App.vue'
import vueRouter from "vue-router"
import routes from "./routes"


Vue.use(vueRouter);

const router = new vueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});