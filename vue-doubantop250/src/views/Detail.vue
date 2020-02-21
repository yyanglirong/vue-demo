<template>
  <div class="container">
    <van-loading color="#1989fa" class="Load" v-if="this.$store.state.isLoading" size="40px">加载中...</van-loading>
    <div class="nav" @click="handleBack">
      <img class="back-pic" src="@/assets/1.png" />
    </div>
    <img class="pic" :src="sub.images.small" />
    <p class="summary">{{sub.summary | title()}}</p>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      sub: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.axios.get(`v2/movie/subject/${this.id}`).then(res => {
      console.log(res);
      this.sub=res.data;
    });
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.pic {
  width: 200px;
  height: 300px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.summary {
  font-size: 18px;
  padding: 20px;
  text-indent: 2em;
}
.nav {
  width: 100%;
  height: 40px;
  background: ghostwhite;
  margin-bottom: 20px;
  box-shadow: 2px 2px 10px 1px gainsboro;
}
.back-pic {
  width: 30px;
  height: 30px;
}
</style>