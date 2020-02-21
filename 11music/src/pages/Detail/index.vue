<template>
  <div class="container">
      <button style="z-index:9999;" @click="handleclick" class="back">返回</button>
        <div class="wraps">
            <div v-for="item of tracks" :key="item.id" class="wrap">
                <img class="img" :src="item.al.picUrl" alt="">
                <div class="content">
                    <p class="title">{{item.name}}</p>
                    <p class="ar">{{item.ar[0].name}}</p>
                </div>
                <p class="time">{{item.dt | handleTime()}}</p>
                <img class="active" src="../../images/bofang.png" alt="">
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name:"detail",
    computed:{
        id(){
            return this.$route.query.id
        }
    },
    data(){
        return{
            tracks:[]
        }
    },
    mounted(){
        this.axios.get(`playlist/detail?id=${this.id}`).then(res=>{
            this.tracks = res.data.playlist.tracks;
            console.log(this.tracks)
        })
    },
    methods:{
        handleclick(){
            this.$router.back()
        }
    }
}
</script>

<style class="less" scoped>
.img{
    width: 150px;
    height: 150px;
}
.wrap{
    display: flex;
    margin-bottom: 30px;
    align-items: center;
}
.title{
    font-size: 27px;
    color: #333;
}
.ar{
    font-size: 23px;
    color: gray;
}
.content{
    margin-left: 40px;
    width: 380px;
}
.content p{
    line-height: 50px;
}
.time{
    font-size: 27px;
    color: black;
    width: 150px;
}
.active{
    width: 40px;
    height: 40px;
}
.wraps{
    min-height: 100%;
    min-width: 100%;
    background-color: #fff;
    z-index: 900;
    position: absolute;
    top: 0;
}
.back{
    position: absolute;
    top: -100px;
    width: 100px;
    height: 50px;
    font-size: 30px;
}
.container{
    position: relative;
}
</style>