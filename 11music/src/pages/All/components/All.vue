<template>
  <div class="container">
      <img class="pic" :src="data.coverImgUrl" alt=""/>
      <p class="title">{{data.name | format()}}</p>
      <slot name="lisen"></slot>
  </div>
</template>
<script>
export default {
    name:"Music",
    props:{
        data:{
            type:Object,
            required:true
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