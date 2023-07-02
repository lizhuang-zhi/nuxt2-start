<template>
  <div>
    <div>Async Page</div>
    <div>请求到的数据:</div>
    <div>{{ ip }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 发送异步请求
  async asyncData({ app }) {
    const ip = await app.$axios.$get("http://icanhazip.com");
    return { ip };
  },
};
</script>