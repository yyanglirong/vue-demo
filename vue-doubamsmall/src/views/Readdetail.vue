<template>
  <div>
    <Back></Back>
    <div class="top" v-for="item of postList" :key="item.id">
      <img class="top-pic" :src="item.imgSrc" />
      <div class="title">
       <img class="pic" :src="item.avatar"/>
       <span class="font-time">知乎 发表于：{{item.dateTime}}</span>
      </div>
      <p class="title-1">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import Back from "../components/Back"
export default {
  name: "readdetail",
  computed: {
    postId() {
      return this.$route.params.postId;
    }
  },
  components:{
    Back
  },
  data() {
    return {
      postList: []
    };
  },
  mounted() {
    this.axios.get(`http://yapi.demo.qunar.com/mock/36046/read`).then(res => {
      this.postList.push(res.data[this.postId]);                                                
    });
  }
};
</script>

<style scoped>
.top-pic{
  width: 100%;
  height: 250px;
  margin-top: 30px;
}
.pic{
  width: 40px;
  height: 40px;
}
.font-time{
  font-size: 17px;
  margin-left: 20px;
}
.title{
  display: flex;
  align-items: center;
}
.title-1{
  font-size: 17px;
  line-height: 30px;
}
</style>