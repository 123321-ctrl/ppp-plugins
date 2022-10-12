import pppPay from './lib/pppPay.vue'

const myPlugin = {
    install(Vue){
        Vue.component('pppPay',pppPay)
    }
}
export default myPlugin;