<template>
  <div class="content">
    <van-loading size="24px" v-if="this.$store.state.isLoading">加载中...</van-loading>
    <div class="container" v-for="item of movie" :key="item.id">
      <router-link :to="'/nowdetail/'+item.id">
        <div class="left">
          <img class="pic" :src="item.images.small" />
        </div>
        <div class="right">
          <span class="title">{{item.title}}</span>
          <span class="average">观众评分：{{item.rating.average}}</span>
          <span class="pubdates">上映时间：{{item.pubdates[0]}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "nowpalying",
  data() {
    return {
      movie: []
    };
  },
  mounted() {
    var url="https://douban-api.uieee.com/v2/movie/in_theaters"
    this.axios.get(url).then(res => {
      this.movie = res.data.subjects;
    });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 130px;
  position: relative;
}
.pic {
  height: 100px;
  width: 80px;
}
.left {
  height: 130px;
  display: flex;
  align-items: center;
}
.title {
  display: block;
  font-size: 18px;
  color: black;
  position: absolute;
  left: 90px;
  top: 20px;
}
.average {
  font-size: 13px;
  position: absolute;
  left: 90px;
  top: 55px;
  color: gray;
}
.pubdates {
  font-size: 13px;
  position: absolute;
  left: 90px;
  top: 80px;
  color: gray;
}
</style>