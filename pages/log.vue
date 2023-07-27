<template>
  <div class="user_page">
    <div class="title">Log Page</div>
    <div class="cont">
      <div v-for="(item, index) in apiLog" :key="index">
        <div>{{item.id}}. {{ item.path }} || {{ item.method }} || {{ item.user }}</div>
      </div>
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
  async asyncData({ app }) {
    const response = await app.$axios.$get("http://localhost:8000/log/all");
    return {apiLog: response.data}
  },
  mounted() {
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