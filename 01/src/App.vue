<template>
    <div class="container">
        <span>推荐节目</span>
        <span>(每日更新)</span>
        <div class="item" v-for="item of musics" :key="item.id">
            <img :src="item.coverUrl" class="pic" alt="">
            <p>{{item.name}}</p>
            <p>{{item.dj.brand}}</p>
            <p>播放{{item.listenerCount}}</p>
            <p>赞{{item.likedCount}}</p>
            <p>{{item.radio.category}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
     name: "App",
    data(){
        return {
            musics:[]
        }
  },
  mounted() {
    var url = "https://music.aityp.com/program/recommend?limit=30";
    axios.get(url).then(res=>{
        this.musics = res.data.programs;
    })
  }
}
</script>
<style scoped>
.container{
    width: 1000px;
    margin-right: auto;
    margin-left: auto;
}
.container span:nth-of-type(1){
    font-size: 30px;
}
.container sapn:nth-of-type(2){
    color: gray
}
.item{
    height: 100px;
    display: flex;
    margin-top: 20px;
}
.pic{
    width: 100px;
    height: 100px;
    padding: 10px;
}
.item p:nth-of-type(1){
    width: 250px;
    margin-left: 10px;
}
.item p:nth-of-type(2){
    width: 150px;
    margin-left: 40px;
    color: gray;
}
.item p:nth-of-type(3){
    width: 100px;
    margin-left: 30px;
    color: gray;
}
.item p:nth-of-type(4){
    color: gray;
    margin-left: 30px;
}
.item p{
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 5%;
}
.item p:last-child{
    color: gray;
    display: inline-block;
    border: 1px solid gray;
    margin-left: 80px;
    height: 25px;
    font-size: 15px;
}
</style>
