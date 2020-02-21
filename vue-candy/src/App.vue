<template>
  <div id="app">
    <div class="nav">
      <div class="content">
        <p class="font-1">堆糖</p>
        <input class="search" />
        <div class="bg-1"></div>
        <button class="sousuo">
          <img class="bg" src="@/assets/sousuo.png" alt />
        </button>
      </div>
    </div>
    <div class="wrap" v-for="item of candy" :key="item.id">
      <div class="title">
        <img class="pic" :src="item.imgUrl" alt />
        <div class="title-right">
          <p class="title-1">{{item.title}}</p>
          <p class="title-2">{{item.time}}</p>
        </div>
      </div>
      <p class="suorce">{{item.source}}</p>
      <div class="pic-wrap" @click="handlechange(item.id)">
        <div class="container" v-for="value of item.images" :key="value.id">
          <img :src="value" alt class="pic-2" />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <i class="iconfont icon">&#xe619;</i>
          <p>赞</p>
          </div>
          <hr class="line">
        <div class="content"> 
          <i class="iconfont icon">&#xe65e;</i>
          <p>收藏</p>
          </div>
          <hr class="line">
        <div class="right">
          <i class="iconfont icon">&#xeb30;</i>
          <p>更多</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      candy: []
    };
  },
  mounted() {
    this.axios.get("/candy").then(res => {
      this.candy = res.data;
    });
  },
  methods:{
    handlechange(id){
      this.$router.push(`/detail?id=${id}`)
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
}
.content {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: relative;
}
.font-1 {
  color: #ff5855;
  font-size: 25px;
  font-weight: 500;
  position: absolute;
  left: 0;
}
.search {
  width: 270px;
  height: 35px;
  border-radius: 40px;
  border: 1px solid #ff5855;
}
.bg {
  width: 25px;
  height: 25px;
}
.sousuo {
  width: 70px;
  height: 41px;
  border: none;
  position: absolute;
  left: 585px;
  border-radius: 40px;
  background-color: #ff5855;
}
.bg-1 {
  width: 18px;
  height: 38px;
  background: #fff;
  position: absolute;
  left: 585px;
  z-index: 500;
}
.wrap {
  width: 603px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid gainsboro;
  margin-top: 20px;
}
.title {
  margin-left: 20px;
}
.pic {
  width: 54px;
  height: 54px;
  border-radius: 50px;
}
.title {
  display: flex;
  margin-top: 20px;
}
.title-1 {
  font-size: 20px;
}
.title-2 {
  font-size: 18px;
  color: gray;
  margin-top: 10px;
}
.title-right {
  margin-left: 10px;
}
.suorce {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.pic-wrap {
  width: 362px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-left: 20px;
}
.container {
  width: 115px;
  height: 130px;
}
.pic-2 {
  width: 115px;
  height: 115px;
  border-radius: 5px;
}
.bottom{
  margin-top: 30px;
  border-top: 1px solid gainsboro;
  display: flex;
}
.bottom>div{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line{
  border: 0.5px solid gainsboro;
  height: 43px;
}
</style>
