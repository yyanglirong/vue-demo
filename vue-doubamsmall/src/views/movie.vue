<template>
  <div id="movie">
    <van-loading v-if="this.$store.state.isLoading" size="24px">加载中...</van-loading>
    <div class="warp" v-for="item of movie" :key="item.id">
        <router-link :to="'/moviedetail/'+item.subTitle">
         <div class="top">
          <p class="title">{{item.title}}</p>
          <p>更多></p>
               </div>
        </router-link>
      <div class="container">
        <detail
          :value="value.rating.average | number()"
          v-for="value of item.data"
          :key="value.id"
          :data="value"
        ></detail>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Detail from "../components/Moviedetail";
export default {
  name: "movie",
  components: {
    Detail
  },
  data() {
    return {
      movie: []
    };
  },
  mounted() {
    this.axios.get("top250").then(res => {
      var top250 = {};
      top250.title = "豆瓣top250";
      top250.data = res.data.subjects.slice(0, 3);
      top250.subTitle = "top250";
      this.movie.push(top250);
    });
    this.axios.get("in_theaters").then(res => {
      var inTheaters = {};
      inTheaters.title = "正在热映";
      inTheaters.data = res.data.subjects.slice(0, 3);
      inTheaters.subTitle = "in_theaters";
      this.movie.push(inTheaters);
    });
    this.axios.get("coming_soon").then(res => {
      var comingSoon = {};
      comingSoon.title = "即将上映";
      comingSoon.data = res.data.subjects.slice(0, 3);
      comingSoon.subTitle = "coming_soon";
      this.movie.push(comingSoon);
    });
  }
};
</script>

<style scoped>
.top {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: black;
}
.container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
#movie {
  margin-bottom: 70px;
}
</style>