<template>
  <div @click="handleback" class="back">
    <p class="back-font">返回</p>
  </div>
</template>

<script>
export default {
  name: "back",
  methods: {
    handleback() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
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
.back-font {
  margin-left: 10px;
}
</style>