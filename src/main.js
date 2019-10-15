import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// =========引入animate插件
import 'vue2-animate/dist/vue2-animate.min.css'
// =========

// =========全局引入vant 插件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
// =========

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
