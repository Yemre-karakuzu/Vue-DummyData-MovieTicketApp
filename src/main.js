import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"

Vue.use(VueRouter)
Vue.use(Vuex)

import Home from "./components/Home"

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
    path: "/",
    component: Home,
  }],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')