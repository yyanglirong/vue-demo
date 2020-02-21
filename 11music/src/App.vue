<template>
  <div id="app">
    <div id="back">
    </div>
    <router-view class="top"></router-view>
    <div id="nav">
      <router-link class="taber" to="/music">
      <i class="iconfont logo">&#xe680;</i>
      音乐
      </router-link>
      <router-link class="taber" to="/mv">
      <i class="iconfont logo">&#xe609;</i>
      mv</router-link>
      <router-link class="taber" to="/all">
      <i class="iconfont logo">&#xe617;</i>
      All</router-link>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app #nav .router-link-active{
  color: red;
}
#app {
  width:10rem;
  margin-left:auto;
  margin-right:auto;
  background: linear-gradient(pink,white);
  position: relative;
}
#nav{
  position: fixed;
  bottom: 0;
  background-color: plum;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  z-index: 500;
  width:10rem;
}
#back{
  position: fixed;
  width:10rem;
  top: 0;
  background-color: plum;
  height: 100px;
  z-index: 1000;
}
.icon{
  width: 30px;
  height: 30px;
  display: block;
}
.taber{
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: gray;
  font-size: 25px;
  line-height: 40px;
}
.logo{
  display: block;
  font-size: 35px;
  margin-top: 20px;
}
.top{
  margin-top: 100px;
}
</style>
