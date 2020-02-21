<template>
  <div>
    <p class="name">热门城市</p>
      <router-link
        to="/home/nowplaying"
         v-for="vas of hotcities"
        :key="vas.id"
        @click.native="handleClick(vas.name)"
      >
        <span class="city">{{vas.name}}</span>
      </router-link>
    <van-index-bar v-for="(item,index) of cities" :key="index">
      <van-index-anchor :index="index" />
      <router-link
        to="/home/nowplaying"
        @click.native="handleClick(value.name)"
        v-for="value of item"
        :key="value.id"
      >
        <van-cell :title="value.name" />
      </router-link>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      hotcities: [],
      cities: []
    };
  },
  mounted() {
    this.axios.get("/api/city").then(res => {
      this.hotcities = res.data.data.hotCities;
      this.cities = res.data.data.cities;
    });
  },
  methods: {
    handleClick(city) {
      this.$store.dispatch("changeCity", city);
    }
  }
};
</script>

<style scoped>
.city{
    font-size: 15px;
    color: black;
    padding-left: 10px;
}
</style>