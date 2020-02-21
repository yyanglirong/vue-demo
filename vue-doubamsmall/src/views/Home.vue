<template>
  <div class="home">
    <div class="container">
      <img class="logo" src="@/assets/logo.png" />
      <p>hello</p>
      <router-link to="/about">
        <button class="btn">开启我的vue之旅</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style scoped>
.logo {
  width: 150px;
  height: 150px;
}
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #b3d4db;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 300px;
}
.btn {
  background: #b3d4db;
  border: 1px solid black;
  line-height: 40px;
  border-radius: 10px;
}
</style>                                                                                                             