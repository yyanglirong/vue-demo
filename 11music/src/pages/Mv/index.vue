<template>
  <div id="container">
      <div v-for="value of mv" :key="value.id">
        <item :data="value" >
      </item>
      </div>
      
  </div>
</template>

<script>
import Item from './components/mv'
export default {
    name:"mv",
    components:{
      Item
    },
    data(){
      return{
        mv:[]
      }
    },
    mounted(){
      this.axios.get("/mv/first").then(res=>{
        var mv = res.data.data;
        this.mv = mv;
      })
    }
}
</script>

<style class="less" scoped>
#container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    background: linear-gradient(pink,white)
}
</style>