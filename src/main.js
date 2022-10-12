import Vue from 'vue'
import App from './App.vue'
import './assets/icon/iconfont.css'
import preImg from './plugins/preImg/index'
import pppPay from './plugins/pppPay/index.js'

Vue.config.productionTip = false
Vue.use(preImg)
Vue.use(pppPay)

new Vue({
  render: h => h(App),
}).$mount('#app')
