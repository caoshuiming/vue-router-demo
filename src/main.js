import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./routes"

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  // #是hash方式，这个是history方式
  // history模式 需要后端配合，把所有路径都指向index.html IE9不支持
  // hash模式 丑，无法使用锚点定位
  mode: "history",
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
