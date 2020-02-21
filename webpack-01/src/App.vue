<template>
    <div> 
        <p class="title">全部新碟</p>
        <div class="container">
        <div class="item" v-for="item of musics" :key="item.id">
            <img :src="item.picUrl" class="img" alt="">
            <p class="name">{{item.name}}</p>
            <p>{{item.artists[0].name}}</p>
        </div>
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
mounted(){
    var url = "https://music.aityp.com/top/album";
    axios.get(url).then(res=>{
        this.musics = res.data.albums;
    })
}
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
.item{
    width: 150px;
    height: 250px;
}
.img{
    width: 150px;
    height: 150px;
}
.name{
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.title{
    margin-left: 220px;
    font-size: 30px;
    border-bottom: 2px solid #c71d23;
    margin-right: 220px;
}

</style>