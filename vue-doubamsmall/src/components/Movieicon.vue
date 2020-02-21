<template>
  <div class="item">
    <router-link :to="'/readdetail/'+data.postId">
      <div class="top">
        <div class="top-1">
          <img class="user-pic" :src="data.avatar" />
          <p class="top-font1">{{data.date}}</p>
        </div>
        <p class="title-font">{{data.title}}</p>
      </div>
      <img class="bg-pic" :src="data.imgSrc" />
      <p class="detail-font">{{data.detail | format()}}</p>
      <div class="bottom">
        <img class="icon-pic" src="@/assets/icon/chat1.png" />
        <p class="icon">{{data.collection}}</p>
        <img class="icon-pic" src="@/assets/icon/view.png" />
        <p class="icon">{{data.reading}}</p>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "movieicon",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.item {
  background: #fff;
  margin-top: 20px;
  padding: 10px;
}
.user-pic {
  width: 30px;
  height: 30px;
}
.top-1 {
  display: flex;
  align-items: center;
}
.top-font1 {
  font-size: 12px;
  color: gray;
  margin-left: 20px;
}
.title-font {
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  color: black;
}
.bg-pic {
  width: 100%;
  height: 200px;
  margin-top: 15px;
}
.detail-font {
  font-size: 15px;
  color: gray;
  line-height: 23px;
}
.bottom {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 13px;
  color: gray;
  margin-left: 10px;
  margin-right: 10px;
}
</style>