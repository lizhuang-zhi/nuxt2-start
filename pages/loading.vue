<template>
  <div>
    <h1>Having fun with loaders</h1>
  </div>
</template>
  <script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      // 设置loading持续2s
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  },
};
</script>
  