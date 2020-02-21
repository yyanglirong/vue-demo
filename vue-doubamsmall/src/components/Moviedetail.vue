<template>
  <div class="warp">
    <router-link :to="'/detailm/'+data.id">
      <img :src="data.images.small" />
      <p class="font-1">{{data.title | formatone()}}</p>
      <div class="bottom">
        <van-rate v-model="value" size="13px" />
        <p>{{data.rating.average}}</p>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "moviedetail",
  props: {
    data: {
      type: Object,
      required: true
    },
    value: {
      type: Number
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100px;
  height: 250px;
}
img {
  width: 100px;
  height: 130px;
}
.font-1 {
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bottom {
  display: flex;
  font-size: 13px;
  margin-bottom: 10px;
}
</style>