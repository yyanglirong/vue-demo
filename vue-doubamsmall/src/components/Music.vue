<template>
  <div class="warp">
    <router-link :to="'/musicdetail/'+data.id">
      <img class="pic" :src="data.coverImgUrl" />
      <p class="font-name">{{data.name}}</p>
      <p class="lisen">
        <i class="iconfont">&#xe607;</i>
        {{data.playCount}}
      </p>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "music",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style scoped>
.pic {
  width: 110px;
  height: 130px;
}
.warp {
  width: 110px;
  height: 200px;
  position: relative;
}
.font-name {
  font-size: 13px;
}
.lisen {
  position: absolute;
  right: 0;
  font-size: 13px;
  top: 0;
  color: #fff;
}
</style>