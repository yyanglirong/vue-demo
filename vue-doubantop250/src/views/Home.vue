<template>
  <div class="home">
    <van-list class="list" :immediate-check="isChecked" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="container" v-for="item of movie" :key="item.id">
        <router-link :to="'/detail/'+item.id">
          <img class="movie-pic" :src="item.images.small" />
          <p class="movie-title">{{item.title | format}}</p>
        </router-link>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      movie: [],
      id: "",
      loading: false,
      finished: false,
      start:0,
      isChecked:false
    };
  },
  mounted() {
    this.axios.get("/v2/movie/top250").then(res => {
      this.movie = res.data.subjects;
      this.id = res.data.subjects.id;
    });
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.start +=20;
        this.axios.get(`/v2/movie/top250?start=${this.start}`).then(res => {
      this.id = res.data.subjects.id;
      this.movie = [...this.movie,...res.data.subjects];
      this.loading = false;
    });
        if (this.movie.length >240) {
          this.finished = true;
        }
      }, 500);
    },
  }
};
</script>
<style scoped>
.container {
  width: 100px;
  height: 160px;
  margin-top: 20px;
  text-align: center;
  border: 1px solid gainsboro;
  box-shadow: 2px 4px 10px 2px rgb(129, 128, 128);
}
.movie-pic {
  width: 100px;
  height: 130px;
}
.movie-title {
  font-size: 15px;
}
.list{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
