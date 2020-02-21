<template>
  <div>
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
    <div v-for="item of sub" :key="item.id">
      <div class="wrap">
        <div class="title">
          <img class="pic" :src="item.link" alt />
          <div class="title-right">
            <p class="title-1">{{item.name}}</p>
            <p class="title-2">{{item.create}}</p>
          </div>
        </div>
        <p class="suorce">{{item.atlas}}</p>
        <div class="pic-wrap">
          <div class="container" v-for="value of item.images" :key="value.id">
            <img :src="value" alt class="pic-2" />
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <i class="iconfont icon">&#xe619;</i>
            <p>赞</p>
          </div>
          <hr class="line" />
          <div class="content">
            <i class="iconfont icon">&#xe65e;</i>
            <p>收藏</p>
          </div>
          <hr class="line" />
          <div class="right">
            <i class="iconfont icon">&#xeb30;</i>
            <p>更多</p>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="list-title">
          <div class="line-2" />
          <p class="list-font1">所有评论</p>
        </div>
        <div class="list-wrap" v-for="items of item.list" :key="items.id">
          <div class="sub-top">
            <img :src="items.img" class="list-pic" alt />
            <div class="list-right">
              <p class="list-font2">{{items.name}}</p>
              <p class="list-font3">{{items.time}}</p>
            </div>
          </div>
          <p class="list-font4">{{items.maincont}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  data() {
    return {
      sub: []
    };
  },
  mounted() {
    this.axios.get(`/candy/detail?id=${this.id}`).then(res => {
      this.sub = res.data;
      this.list = res.data.list;
      console.log(this.sub.list);
    });
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
  outline:0;
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
.bottom {
  margin-top: 30px;
  border-top: 1px solid gainsboro;
  display: flex;
}
.bottom > div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  border: 0.5px solid gainsboro;
  height: 43px;
}
.list {
  margin-top: 30px;
  width: 603px;
  margin-left: auto;
  margin-right: auto;
}
.list-title {
  margin-left: 20px;
  display: flex;
}
.line-2 {
  width: 6px;
  background-color: #ff5855;
  height: 20px;
  border-radius: 5px;
}
.list-font1 {
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
}
.list-wrap {
  padding: 20px;
  border-bottom: 1px solid gainsboro;
}
.sub-top {
  display: flex;
}
.list-pic {
  width: 45px;
  height: 45px;
  border-radius: 50px;
}
.list-right {
  margin-left: 10px;
}
.list-font2 {
  font-size: 15px;
  font-weight: 700;
}
.list-font3 {
  font-size: 13px;
  color: gray;
  line-height: 30px;
}
.list-font4 {
  margin-left: 57px;
  margin-top: 20px;
}
</style>