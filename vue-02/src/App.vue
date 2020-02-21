<template>
    <div class="container">
        <div class="wrap" v-for="item of movie" :key="item.id">
            <img :src="item.images.small" class="pic" alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"App",
    data(){
        return{
            movie:[]
        }
    },
    mounted(){
        var url = "https://douban.uieee.com/v2/movie/top250";
        axios.get(url).then(res=>{
            this.movie = res.data.subjects;
        })
    }
}
</script>
<style scoped>
.container{
     width: 1000px;
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     margin-left: auto;
     margin-right: auto;
}
.wrap{
    width: 300px;
    height: 400px;
}
.pic{
    width: 300px;
    height: 300px;
}
</style>