<template>
  <div class="container">
       <button @click="handleclick" class="back">返回</button>
      <div class="content">
        <video :src="url" class="vido" controls autoplay="muted">
        </video>
        <p class="title">{{name}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:"details",
    computed:{
        id(){
            return this.$route.query.id
        },
        name(){
            return this.$route.query.name
        }
    },
    data(){
        return{
            url:""
        }
    },
    mounted(){
        this.axios.get(`mv/url?id=${this.id}`).then(res=>{
            this.url=res.data.data.url;
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
.vido{
    width: 100%;
    height: 420px;
}
.title{
    font-size: 50px;
    font-weight: 700;
    margin-top: 40px;
}
.content{
    text-align: center;
    z-index: 900;
    position: absolute;
    top: 0;
    min-height: 100%;
    min-width: 100%;
    background-color: #fff;
}
.back{
    position: absolute;
    top: -100px;
    width: 100px;
    height: 50px;
    font-size: 30px;
    z-index: 990;
}

</style>