<template>
  <div id="app">
    <div class="header">
      <div class="head">
        <div class="home">ToDoList</div>
        <div class="search">
          <el-input v-model="input" @keyup.enter.native="clickEnter" placeholder="添加ToDo"></el-input>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <p class="font-1">正在进行</p>
            <hello-world v-for="item of one" :key="item.id" 
            :data="item" @del="handleDel"></hello-world>
        <p class="font-1">已经完成</p>
            <hello-world v-for="item of two" @del="handleDel"
             :key="item.id" :data="item"></hello-world>
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      input:"",
      list:[]
    }
  },
  methods:{
    clickEnter(){
      this.list.push({name:this.input,isChecked:false})
    },
    handleDel(items){
      console.log(items)
        this.list = this.list.filter(item=>item!=items)
    }
  },
  computed:{
    one(){
      return this.list.filter(item=>!item.isChecked)
    },
    two(){
      return this.list.filter(item=>item.isChecked)
    }
  }
}
</script>

<style scoped>
.header{
  height: 43px;
  background-color: #323232;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head{
  width: 600px;
  display: flex;
  align-items: center;
}
.home{
  color: #fff;
  font-size: 25px;
  font-weight: 500;
}
.search{
  width: 360px;
  margin-left: 140px;
}
.container{
  display: flex;
  justify-content: center;
  position: fixed;
  top:43px;
  left: 0;
  right: 0;
  bottom: 0;
  background:linear-gradient(gray,white)
}
.font-1{
  font-size: 30px;
  font-weight: 600;
}
.content{
  min-width: 600px;
}
</style>
