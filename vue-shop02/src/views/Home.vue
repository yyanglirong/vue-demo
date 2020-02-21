<template>
  <div class="home">
    <div class="nav">
      <img class="logo" src="../assets/logo.svg" />
      <div class="but">
        <el-button type="success">登录</el-button>
        <el-button type="danger">退出</el-button>
        <img class="cart" src="../assets/shoping.png" />
      </div>
    </div>
    <div class="content">
      <div class="content-nav">
        <div class="sort">
          <el-button type="primary" size="small" plain>默认</el-button>
          <el-button type="success" size="small" plain>排序</el-button>
          <p class="price-sort">价格：</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 13px 0 gainsboro;
  position: relative;
  display: flex;
  align-items: center;
}
.logo {
  width: 47px;
  height: 47px;
  position: absolute;
  left: 40px;
}
.cart {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.but {
  display: flex;
  align-items: center;
  position: absolute;
  right: 40px;
}
.content {
  background: #ecf0f8;
  position: fixed;
  top: 53px;
  left: 0;
  right: 0;
  bottom: 0;
}
.content-nav {
  height: 40px;
  background: #fff;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
}
.sort{
  position: absolute;
  right: 0;
}
.sort{
  display: flex;
  align-items: center;
}
.price-sort{
  margin-left: 10px;
  font-size: 15px;
}
</style>
