<template>
  <div class="common_body">
    <!-- 对应路由页面的显示区域 -->
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@horizontal-spacing: 2vw;
.common_body {
  width: calc(80vw - @horizontal-spacing);
  height: 100vh;
  position: fixed;
  left: calc(20vw + @horizontal-spacing);
  top: 0;
}
</style>

    