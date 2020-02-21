<template>
  <div>
    <van-loading size="24px" v-if="this.$store.state.isLoading">加载中...</van-loading>
    <div v-for="item of detail" :key="item.id">
      <Detail :data="item"></Detail>
    </div>
  </div>
</template>

<script>
import Detail from "../components/MovieDetail";
export default {
  name: "nowdetail",
  components: {
    Detail
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      detail: []
    };
  },
  mounted() {
    var url = `https://douban-api.uieee.com/v2/movie/subject/${this.id}`
    this.axios.get(url).then(res => {
      this.detail.push(res.data);
    });
  }
};
</script>

<style>
</style>