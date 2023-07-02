<template>
  <div>
    <h2>id pages</h2>
    <div>页面的路由参数为: {{ $route.params.id }}</div>
    <br />
    <div>
      Tips: 创建的文件前面需要携带"_", 如_id.vue, 对应的访问路由/clients/123
    </div>
    <Header></Header>
    <Dashboard />
    <DashboardButton />
    <DashboardButtonIcon />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>