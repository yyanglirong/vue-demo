<template>
  <div id="about">
    <div id="nav">
      <router-link class="taber" to="/reading">
        <i class="iconfont icon">&#xe615;</i>
        <p class="font-1">阅读</p>
      </router-link>
      <router-link class="taber" to="/movie">
        <i class="iconfont icon">&#xe6af;</i>
        <p class="font-1">电影</p>
      </router-link>
      <router-link class="taber" to="/my">
        <i class="iconfont icon">&#xe66e;</i>
        <p class="font-1">我的</p>
      </router-link>
      <router-link class="taber" to="/music">
        <i class="iconfont icon">&#xe680;</i>
        <p class="font-1">音乐</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "about"
};
</script>
<style scoped>
#about #nav .router-link-active {
  color: #0061b2;
}
#nav {
  position: fixed;
  bottom: -40px;
  background: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid gainsboro;
  z-index: 700;
}
.taber {
  height: 60px;
  color: gray;
  text-decoration: none;
}
.icon {
  font-size: 25px;
  display: block;
  margin-top: 8px;
  border: none;
}
.font-1 {
  font-size: 15px;
  margin-top: 10px;
}
</style>
