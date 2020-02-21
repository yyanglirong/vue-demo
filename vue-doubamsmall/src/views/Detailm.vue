<template>
  <div class="wrap">
    <Back></Back>
    <div class="container" v-for="item of sub" :key="item.id">
      <div class="top">
        <img class="topbg" :src="item.images.small" />
      </div>
      <div class="top-introduce">
        <p class="title">{{item.title}}</p>
        <p class="font-1">{{item.tags[0]}} • {{item.year}}</p>
        <div class="font-2">
          <span class="font-3">{{item.ratings_count}} 人喜欢</span>
          <span class="font-3">{{item.collect_count}} 人评论</span>
        </div>
      </div>
      <img class="bg" :src="item.images.small" />
      <div class="content">
        <p class="font-4">{{item.original_title}}</p>
        <p class="font-5">评分:{{item.rating.average}}</p>
        <p class="font-5">导演：{{item.writers[0].name}}</p>
        <div class="font-6">
          <span>类型：</span>
          <span v-for="val of item.genres" :key="val.id">{{val}}</span>
        </div>
      </div>
      <div class="summary">{{item.summary}}</div>
      <p class="font-5 marginfont">演职人员</p>
      <div class="casts">
        <div class="wrapper">
          <div v-for="vs of item.casts" :key="vs.id" class="pic-wrap">
            <img class="casts-pic" :src="vs.avatars.small" />
            <p class="font-7">{{vs.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from "../components/Back"
export default {
  name: "detailm",
  components:{
    Back
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      sub: []
    };
  },
  mounted() {
    this.axios.get(`subject/${this.id}`).then(res => {
      this.sub.push(res.data);
      console.log(this.sub);
    });
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 230px;
  position: relative;
  overflow: hidden;
}
.topbg {
  width: 100%;
  position: absolute;
  top: -30%;
  filter: blur(10px);
}
.top-introduce {
  height: 230px;
  position: absolute;
  top: 0;
  padding: 20px;
}
.title {
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  margin-top: 30px;
}
.font-1 {
  font-size: 18px;
  color: #fff;
}
.top-introduce p {
  line-height: 60px;
}
.font-3 {
  color: gray;
  margin-right: 10px;
}
.font-2 {
  font-size: 18px;
}
.bg {
  width: 100px;
  height: 130px;
  position: absolute;
  top: 170px;
  left: 260px;
}
.content {
  padding: 20px;
  border: 1px solid gainsboro;
}
.font-4 {
  font-size: 20px;
  color: #333;
}
.font-5 {
  font-size: 20px;
  color: gray;
}
.content p {
  line-height: 35px;
}
.font-6 span {
  line-height: 35px;
  font-size: 20px;
  color: gray;
}
.summary {
  padding: 20px;
  color: gray;
  font-size: 20px;
  border: 1px solid gainsboro;
}
.casts {
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
}
.casts-pic {
  width: 100px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(10, 100px);
  gap: 10px;
}
.marginfont {
  padding: 20px;
}
.font-7 {
  font-size: 15px;
  color: gray;
}
</style>