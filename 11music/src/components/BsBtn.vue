<template>
  <div class="container" @click="handleclick(data.id)">
      <img class="pic" :src="data.coverImgUrl" alt=""/>
      <p class="title">{{data.name | format()}}</p>
      <slot name="lisen"></slot>
  </div>
</template>
<script>
export default {
    name:"Item",
    props:{
        data:{
            type:Object,
            required:true
        }  
    },
    methods:{
        handleclick(id){
            console.log(id)
            this.$router.push(`/detail?id=${id}`)
        }
    }
}
</script>
<style class="less" scoped>
.pic{
    width: 200px;
    height: 200px;
    border-radius: 20px;
}
.container{
    width: 200px;
    height: 280px;
}
.title{
    font-size: 20px;
    padding: 10px;
}

</style>