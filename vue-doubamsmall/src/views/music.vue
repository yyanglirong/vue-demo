<template>
  <div class="container">
    <div class="wrap">
      <div class="nav">
        <i class="iconfont icon">&#xe619;</i>
        <span class="hot-font">热门歌曲</span>
        <span class="small-font">更多></span>
      </div>
      <div class="content">
          <Mus  v-for="item of hot" :key="item.id" :data="item"></Mus>
      </div>
    </div>
    <div class="wrap">
      <div class="nav">
        <i class="iconfont icon">&#xe60e;</i>
        <span class="hot-font">最新音乐</span>
        <span class="small-font">更多></span>
      </div>
      <div class="content">
          <Mus  v-for="item of now" :key="item.id" :data="item"></Mus>
      </div>
    </div>
    <div class="wrap">
      <div class="nav">
        <i class="iconfont icon">&#xe7c4;</i>
        <span class="hot-font">主播电台</span>
        <span class="small-font">更多></span>
      </div>
      <div class="content">
          <Mus  v-for="item of dj" :key="item.id" :data="item"></Mus>
      </div>
    </div>
  </div>
</template>

<script>
import Mus from '../components/Music'
export default {
  name: "music",
  components:{
      Mus
  },
  data(){
      return{
          hot:[],
          now:[],
          dj:[]
      }
  },
  mounted() {
      this.axios.get("https://music.aityp.com/top/playlist?order=hot").then(res=>{
         this.hot=res.data.playlists.slice(0,3);
      })
       this.axios.get("https://music.aityp.com/top/playlist?cat=日语").then(res=>{
         this.now=res.data.playlists.slice(0,3); 
      })
       this.axios.get("https://music.aityp.com/personalized/djprogram").then(res=>{
         var songs=[];
         songs =res.data.result;
         songs.every(item=>
             item.coverImgUrl=item.picUrl
         )
         songs.every(item=>
            item.playCount=item.program.adjustedPlayCount
         )
         this.dj=songs.slice(0,3)
      })
  },
};
</script>

<style scoped>
.icon {
  color: red;
  font-size: 20px;
}
.hot-font {
  font-size: 15px;
}
.small-font {
  font-size: 15px;
  position: absolute;
  right: 0;
}
.nav {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
  padding-left: 10px;
}
.wrap{
    border-top: 1px solid rgb(236, 236, 236);
    border-bottom: 1px solid rgb(236, 236, 236);
    margin-top: 10px;
}
.content{
  display: flex;
  justify-content: space-evenly;
}
.container{
  margin-bottom: 50px;
}
</style>