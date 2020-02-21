<template>
  <div>
    <div class="cotainer">
      <div class="wrap" v-for="item of list" :key="item.id">
        <div class="pic-wrap">
          <img :src="item.img" class="pic" />
        </div>
        <div class="coll">
          <div class="coll-bottom" v-for="value of item.coll" :key="value.id">
            <p>{{value}}</p>
          </div>
        </div>
        <div class="container-text">
          <div class="title">
            <p class="kw">{{item.name}}</p>
            <p class="like">
              <i class="iconfont">&#xe619;</i>
              {{item.like}}
            </p>
          </div>
          <div class="bottom">
            <img :src="item.bgimg" class="user-pic" alt />
            <div class="user-detail">
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  computed: {
    keyword() {
      return this.$route.query.keyword;
    }
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.axios.get(`/candy/search?kw=${this.keyword}`).then(res => {
      this.list = res.data[0].wooitem;
    });
  }
};
</script>

<style scoped>
.cotainer {
  width: 601px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid gainsboro;
  margin-top: 30px;
  padding: 20px;
}
.wrap {
  border: 1px solid gainsboro;
  width: 601px;
  margin-bottom: 20px;
  position: relative;
}
.pic {
  width: 601px;
}
.container-text {
  padding-left: 20px;
  margin-top: 20px;
}
.title {
  display: flex;
}
.like {
  margin-left: 40px;
}
.user-pic {
  width: 40px;
  height: 40px;
  border-radius: 50px;
}
.bottom {
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
}
.user-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.coll {
  position: absolute;
  width: 601px;
  bottom: 118px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 60px;
  opacity: 0;
}
.coll:hover{
    opacity: 1;
}
.coll-bottom {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.coll-bottom p{
    border:1px solid #fff;
    border-radius: 30px;
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.pic:hover {
  background-color: black;
  opacity: 0.7;
}
</style>