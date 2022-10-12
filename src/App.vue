<template>
  <div id="app">
    <button @click="openPrev">打开预览</button>
    <button @click="showpay">点击支付</button>
    <preImg ref="imgRef"></preImg>
    
      <pppPay
      ref="pays"
      v-model="show"
      @close="close"
      @forget="forget"
      @input-end="inputEnd"
    ></pppPay>
    
  </div>
</template>

<script>
// import preImg from './plugins/preImg/preImg.vue'
// import pppPay from "./plugins/pppPay/lib/pppPay.vue";

export default {
  name: "App",
  // components: {
  //   pppPay,
  // },
  data() {
    return {
      show: false,
      url: "https://img95.699pic.com/photo/50028/4035.jpg_wh860.jpg",
      url1: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/05/0F/ChMlWl6P3CCIbNw6ADh6KMsyJh4AAONAALDwoQAOHpA408.jpg",
    };
  },
  methods: {
    openPrev() {
      this.$prevImg.open({ url: this.url1 });
    },
    closePrev() {
      this.$prevImg.close();
    },
    showpay() {
      this.show = true;
    },
    closepay(){
      this.show = false;
    },
    close() {
      console.log("close");
    },
    forget() {
      console.log("forget");
    },
    inputEnd(val) {
      setTimeout(() => {
        // 模拟支付成功的结果
        if (val == 111111) {
          // 调用插件的$success方法告知插件支付成功
          // 并且在then方法里面可以写支付成功的回调，例如可以跳转支付结果页面
          this.$refs.pays.$success().then(() => {
            console.log("支付成功");
            // this.$router.push("/success");
          });
          // 模拟支付失败的结果
        } else {
          this.$refs.pays.$fail();
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>

</style>
