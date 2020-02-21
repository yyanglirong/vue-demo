<template>
  <div id="app">
      <van-swipe class="wrap" :autoplay="autoplay" indicator-color="color">
      <van-swipe-item>
        <img src="@/assets/1.jpeg"/>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/2.jpg"/>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/3.jpg"/>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/logo.png"/>
      </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      autoplay:2000,
      color:"#333"
    }
  }
}
</script>
<style scoped>

img{
  width: 100%;
  height: 300px;
}
</style>
