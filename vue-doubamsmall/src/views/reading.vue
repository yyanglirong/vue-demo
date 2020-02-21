<template>
  <div id="movie">
    <van-swipe class="wrap" :autoplay="autoplay" indicator-color="color">
      <van-swipe-item v-for="item of banners" :key="item.id" >
        <img :src="item.imageUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="content" >
        <Movieicon v-for="value of postList" :key="value.title" 
    :data="value"></Movieicon>
    </div>
  </div>
</template>
<script>
import Movieicon from "../components/Movieicon"
export default {
  name: "movie",
  components:{
      Movieicon
  },
  data() {
    return {
      autoplay: 2000,
      color: "#333",
      banners:[],
      postList:[]
    };
  },
  mounted(){
      this.axios.get("https://music.aityp.com/banner").then(res=>{
         var banner = res.data.banners;
         this.banners = banner.slice(0,3);
      })
      this.axios.get("http://yapi.demo.qunar.com/mock/36046/read").then(res=>{
          this.postList=res.data;
      })
  }
};
</script>

<style scoped>
img{
    width: 100%;
    height: 200px;
}
#movie{
    background: #ebebeb;
}
</style>