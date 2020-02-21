<template>
  <div class="app">
    <img class="back" @click="handleBack" src="@/assets/back.png" />
    <div class="wrap-top">
      <img class="pic" :src="data.images.small" />
    </div>
    <div class="content">
      <span class="title post">{{data.title}}</span>
      <span class="span-1 post">{{data.genres | format()}}</span>
      <span class="span-2 post">{{data.pubdate}}上映</span>
      <p class="p-1">{{data.countries[0]}} | {{data.durations[0]}}</p>
      <div class="summary">
        <span class="span-3">{{data.summary}}</span>
      </div>
      <p class="span-4">演职人员</p>
      <div class="img-wrap">
        <div class="wraaper">
          <div v-for="value of data.directors" :key="value.id">
            <img class="img-1" :src="value.avatars.small" />
            <span class="span-5">{{value.name}}</span>
          </div>
          <div v-for="num of data.casts" :key="num.id">
            <img class="img-1" :src="num.avatars.small" />
            <span class="span-5">{{num.name}}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <van-cell>剧照</van-cell>
        <div class="wrappers">
          <div class="con">
            <div v-for="ty of data.trailers" :key="ty.id">
              <img class="img-2" :src="ty.medium" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "moviedetail",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods:{
      handleBack(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.pic {
  width: 100%;
  position: absolute;
  left: 0;
  top: -90%;
}
.wrap-top {
  height: 200px;
  overflow: hidden;
  position: relative;
}
.content {
  padding: 20px;
  text-align: left;
}
.post {
  display: block;
  text-align: left;
  line-height: 25px;
}
.title {
  font-size: 18px;
}
.span-1 {
  color: gray;
  font-size: 13px;
}
.span-2 {
  color: gray;
  font-size: 13px;
}
.p-1 {
  text-align: left;
  font-size: 13px;
  color: gray;
  margin: 0;
}
.summary {
  font-size: 13px;
  color: gray;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 10px;
}
.slpan-3 {
  display: inline-block;
}
.img-wrap {
  text-align: left;
  margin-top: 20px;
  overflow-x: auto;
  overflow-y: hidden;
}
.span-4 {
  font-size: 18px;
  display: inline;
}
.img-1 {
  width: 80px;
  height: 100px;
}
.img-wrap::-webkit-scrollbar {
  display: none;
}
.wraaper {
  display: grid;
  grid-template-columns: repeat(6, 80px);
  gap: 10px;
}
.span-5 {
  font-size: 10px;
}
.van-cell {
  padding: 0;
  font-size: 18px;
}
.bottom {
  margin-top: 20px;
}
.wrappers {
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 10px;
}
.img-2 {
  width: 200px;
  height: 80px;
}
.wrappers::-webkit-scrollbar {
  display: none;
}
.con {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  gap: 10px;
}
.back{
    width: 30px;
    height: 30px;
    top: 10px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 600;
    position: fixed;
}
.app{
    position: relative;
}
</style>