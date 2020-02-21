<template>
  <div id="container">
      <div v-for="value of playlists" :key="value.id">
        <Music :data="value" class="wrap">
          <div class="lisen" slot="lisen">
              <img class="icon" src="../../images/bofang.png" alt="">
              <p class="num">{{value.subscribedCount}}万</p>
        </div>
      </Music>
      </div>
  </div>
</template>

<script>
import Music from './components/music'
export default {
    name:"music",
    components:{
        Music
    },
    data(){
        return{
            playlists:[]
        }
    },
    mounted(){
        this.axios.get("/top/playlist").then(res=>{
            this.playlists = res.data.playlists;
        })
    }
}
</script>

<style class="less" scoped>
#container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    left: 0;
    right: 0;
    background: linear-gradient(pink,white)
}
.icon{
    width: 30px;
    height: 30px;
}
.wrap{
    position: relative;
}
.lisen{
    position: absolute;
    top: 10px;
    color: aliceblue;
    right: 0px;
    display: flex;
    font-size: 20px;
}
.num{
    color: aliceblue;
    margin-top: 8px;
}
</style>