<template>
  <div id="app">
    <div class="item">
      <input class="cbx" type="checkbox" v-model="data.isChecked"/>
      <div class="name">{{data.name}}</div>
      <img class="det" src="@/assets/det.png" @click="handleDet(data)"/>
    </div>
  </div>
</template>

<script>
export default {
  name:"hellowrod",
  props:{
    data:{
      type:Object
    }
  },
  methods:{
    handleDet(name){
      this.$emit("del",name)
    }
  }
}
</script>
<style scoped>
.item{
  display: flex;
  height:40px;
  align-items: center;
  position: relative;
  background-color:#fff;
  border-left: 4px solid gray; 
  margin: 10px 0;
}
.det{
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
}
.cbx{
  width: 30px;
  height: 30px;
}
.name{
  display: flex;
  align-items: center;
}
</style>