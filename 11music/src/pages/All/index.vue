<template>
  <div id="container">
      <div v-for="(value,index) of playlists" :key="value.id" @click="handle(index)" :class="index%2==1?'active':''" >
        <all :data="value" class="wrap">
          <div class="lisen" slot="lisen">
              <img class="icon" src="../../images/bofang.png" alt="">
              <p class="num">{{value.subscribedCount}}万</p>
        </div>
      </all>
      </div>
  </div>
</template>

<script>
import All from './components/All'
export default {
    name:"music",
    components:{
        All
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
    },
    methods:{
         handle(index){
             this.playlists.splice(index,1);
        }
    }
}
</script>

<style class="less" scoped>
#container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
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
.active{
    border: 1px solid red;
}
</style>