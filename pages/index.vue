<template>
  <div class="user_page">
    <div class="title">Index Page</div>
    <div class="cont">
      首页内容
    </div>
  </div>
</template>

<script>
import CommonBody from "../components/CommonBody.vue";
export default {
  components: { CommonBody },
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.user_page {
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
}
</style>