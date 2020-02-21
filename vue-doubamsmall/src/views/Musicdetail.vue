<template>
  <div class="app">
    <Back></Back>
    <div class="wrap" v-for="item of sub" :key="item.id">
      <img class="top-pic" :src="item.coverImgUrl"/>
      <p class="active">播放列表</p>
      <div class="container" v-for="val of item.tracks" :key="val.id">
        <img class="user-pic" :src="val.al.picUrl"/>
        <p class="font-name">{{val.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Back from "../components/Back"
export default {
  name:"musicdetail",
  components:{
    Back
  },
  computed:{
    id(){
      return this.$route.params.id
    }
  },
  data(){
    return{
      sub:[]
    }
  },
  mounted() {
    this.axios.get(`https://music.aityp.com/playlist/detail?id=${this.id}`).then(res=>{
      this.sub.push(res.data.playlist);
    })
  },
}
</script>

<style scoped>
.top-pic{
  width: 100%;
  height: 250px;
}
.user-pic{
  width: 50px;
  height: 50px;
}
.active{
  font-size: 15px;
  padding: 10px;
}
.container{
  height: 50px;
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  background: #fff;
  font-size: 15px;
}
.app{
  background: #ebebeb;
}
.font-name{
  margin-left: 15px;
}
</style>