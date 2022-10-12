<template>
  <div class="prewImg-wrap" v-show="isShow">
    <div class="mask"></div>
    <div class="action">
      <i class="icon iconfont icon-31xuanzhuan" @click="operate('rotate')"></i>
      <i class="icon iconfont icon-suoxiao" @click="operate('zoomIn')"></i>
      <i class="icon iconfont icon-fangda" @click="operate('zoomOut')"></i>
      <i class="icon iconfont icon-guanbi" @click="hide"></i>
    </div>
    <div class="img-wrap">
      <img :src="url" alt="" class="pic" ref="img" :style="imgStyle"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "preImg",
  data() {
    return {
      isShow: false,
      url: "",
      transform:{
        scaleVal:1,
        rotateVal:0
      }
    };
  },
  computed:{
    imgStyle(){
        let {scaleVal,rotateVal} = this.transform
        return {
            transform:`scale(${scaleVal}) rotate(${rotateVal}deg)`
        }
    }
  },
  methods: {
    hide() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
    },
    operate(type){
        if(type === 'zoomIn'){
            console.log(type)
            this.transform.scaleVal -=0.1
        }else if(type === 'zoomOut'){
            console.log(type)
            this.transform.scaleVal +=0.1
        }else{
            console.log(type)
            this.transform.rotateVal +=90
        }
    }
  },
};
</script>

<style scoped>
.prewImg-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
.mask {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
}
.action {
  width: 200px;
  padding: 20px;
  position: absolute;
  right: 10px;
  top: 20px;
  color: #fff;
  z-index: 30;
  display: flex;
  justify-content: flex-end;
}
.img-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic {
  max-height: 100%;
  max-width: 100%;
  transition: transform 0.3s ease 0s;
}
</style>