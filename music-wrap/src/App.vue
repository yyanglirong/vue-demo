<template>
  <div id="app">
    <div class="container">
        <div class="search">
            <el-input v-model="keyword" @keyup.enter.native="handleUp"> </el-input>
        </div>
        <img class="pic" :class="isPlay?'rot':'end'" @click="handle" src="./assets/20180901160236_mybsx.jpg" alt="">
        <div class="name">{{keyword}}</div>
        <audio controls autoplay :src="url"
        @play="onPlay"
        @pause="onPause" ref="audio"></audio>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data(){
    return{
      keyword:"成都",
      id:"",
      url:"",
      isPlay:false
    }
  },
  methods:{
    async handleUp(){
      var url =`http://192.168.14.49:5000/search?keywords=${this.keyword}`;
      await axios.get(url).then(res=>{
        this.id=res.data.result.songs[0].id;
        console.log(this.id)
      })
      var songUrl = `https://music.aityp.com/song/url?id=${this.id}`;
      await axios.get(songUrl).then(res=>{
        console.log(res)
        this.url = res.data.data[0].url;
        console.log(this.url)
      })
    },
    onPlay(){
      this.isPlay=true
    },
    onPause(){
      this.isPlay = false
    },
    handle(){
      if(this.isPlay){
        this.$refs.audio.pause()
        this.isPlay = false
      }else{
        this.$refs.audio.play()
        this.isPlay = true
      }
    }
  }
}
</script>

<style scoped>
#app{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(pink,white);
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  width: 300px;
  display: inline-block;
}
.pic{
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.container{
  display: flex;
  height: 500px;
  width: 700px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
  @keyframes rotated {
    0%{
      transform: rotate(0deg)
    }
    100%{
      transform:rotate(360deg)
    }
  }
  .rot{
    animation: rotated 15s linear infinite;
    animation-play-state: running;
  }
  .end{
    animation: rotated 15s linear infinite;
    animation-play-state: paused;
  }
</style>
