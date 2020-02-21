<template>
    <div class="container">
        <div class="wrap" v-for="item of books" :key="item.id">
            <p class="title">{{item.title}}</p>
            <p class="score">评分：{{item.rating.average}}</p>
            <span>{{item.author[0]}}/</span>
            <span>{{item.publisher}}/</span>
            <span>{{item.pubdate}}/</span>
            <span>{{item.price}}</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"App",
    data(){
        return{
            books:[]
        }
    },
    mounted(){
        var url = "https://douban.uieee.com/v2/book/search?q=你的名字";
        axios.get(url).then(res=>{
            console.log(res)
             this.books = res.data.books;
        })
    }
}
</script>
<style scoped>
.container{
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
.title{
    font-size: 30px;
    font-weight: 500;
}
.score{
    color: gold;
    font-size: 20px;
}
span{
    color: gray;
    font-size: 20px;
}
</style>