<template>
  <div class="home">
   <router-link class="btn" to="/location">{{this.$store.state.city}}</router-link>
    <van-swipe class="pic-wrap">
      <van-swipe-item>
        <img class="pic" src="@/assets/1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img class="pic" src="@/assets/a.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <div id="nav">
      <div class="now">
        <router-link to="/home/nowPlaying">正在热映</router-link>
      </div>
      <div class="coming">
        <router-link to="/home/comingsong">即将上映</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
<style lang="scss" scoped>
.pic {
  min-width: 100%;
  height: 200px;
}
#nav {
  height: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav div{
  flex: 1;
  height: 100%;
}
#nav {
  a {
    color: #2c3e50;
    font-size: 15px;
    font-weight: 600;
    &.router-link-exact-active {
      color: #f97a02;
      border-bottom: 2px solid #f97a02;
      padding-bottom: 15px;
    }
  }
}
.pic-wrap{
  position: relative;
}
.btn{
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 500;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 30px;
  border-radius: 30px;
  font-size: 15px;
  color: #fff;
  background-color:rgba(15, 15, 15, 0.3);
}
</style>