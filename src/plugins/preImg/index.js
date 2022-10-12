import preImg from './preImg.vue'
export default {
    install(Vue) {
        let prevImgConstructor = Vue.extend(preImg);
        let instance = new prevImgConstructor(); //组件实例

        //将真实dom插入到页面中
        console.log("111", instance.$mount().$el)
        document.body.appendChild(instance.$mount().$el);

        let opts = {
            open(opts={url:""}){
                instance.show()
                instance.url = opts.url
            },
            close(){
                instance.hide()
            }
        }

        Vue.prototype.$prevImg = opts
    }
}