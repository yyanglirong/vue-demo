<template>
  <div class="content">
    <div class="left">
      <h3></h3>
      <div class="price" v-for="item of searchPrice" :key="item.id"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      searchPrice: [
        { gt: 0, lt: 100, id: 1001 },
        { gt: 100, lt: 500, id: 1002 },
        { gt: 500, lt: 1000, id: 1003 },
        { gt: 1000, lt: 5000, id: 1004 },
        { gt: 5000, lt: 10000, id: 1005 }
      ]
    };
  }
};
</script>

<style scoped>
</style>