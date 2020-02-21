<template>
  <div>
    <van-loading size="24px" v-if="this.$store.state.isLoading">加载中...</van-loading>
    <div class="container" v-for="item of movie" :key="item.id">
      <router-link :to="'/comingdetail/'+item.id">
        <div class="left">
          <img class="pic" :src="item.images.small" />
        </div>
        <div class="right">
          <span class="title">{{item.title}}</span>
          <span class="star">主演：</span>
          <div class="star-span">
            <span v-for="value of item.casts" :key="value.id">{{value.name}}/</span>
          </div>
          <span class="pubdates">上映日期：{{item.pubdates[0]}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "comingsong",
  data() {
    return {
      movie: []
    };
  },
  mounted() {
    var url = "https://douban-api.uieee.com/v2/movie/coming_soon"
    this.axios.get(url).then(res => {
      this.movie = res.data.subjects;
    });
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 130px;
  display: flex;
  position: relative;
}
.pic {
  height: 100px;
  width: 80px;
}
.left {
  height: 130px;
  align-items: center;
}
.title {
  font-size: 18px;
  color: black;
  position: absolute;
  left: 90px;
  top: 5px;
}
.star {
  position: absolute;
  left: 90px;
  top: 35px;
  font-size: 13px;
  color: gray;
}
.star-span {
  position: absolute;
  left: 125px;
  font-size: 13px;
  top: 35px;
  color: gray;
}
.pubdates {
  font-size: 13px;
  position: absolute;
  left: 90px;
  top: 60px;
  color: gray;
}
</style>