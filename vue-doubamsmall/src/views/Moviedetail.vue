<template>
  <div class="container">
    <Back></Back>
    <van-loading class="loading" v-if="this.$store.state.isLoading" size="24px">加载中...</van-loading>
    <div class="content">
      <Detail v-for="item of list" :key="item.id" :data="item"></Detail>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Detail from "../components/Moviedetail";
import Back from "../components/Back"
export default {
  name: "moviedetail",
  components: {
    Detail,
    Back
  },
  computed: {
    subTitle() {
      return this.$route.params.subTitle;
    }
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.axios.get(`${this.subTitle}`).then(res => {
      this.list = res.data.subjects;
    });
  },
  methods:{
      handleback(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
}
.back {
  box-shadow: 0 0 2px 2px gainsboro;
  height: 40px;
  width: 100%;
  z-index: 600;
  position: fixed;
  top: 0;
  background: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: gray;
}
.back-font{
    margin-left: 10px;
}
.loading{
    margin-left: 45%;
    margin-top: 100px;
}
</style>