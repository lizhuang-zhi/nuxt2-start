<template>
  <div>
    <h1>Home Page</h1>
    <!-- 使用 bootstrap-vue -->
    <b-alert show>Default Alert</b-alert>
    <b-button variant="success" @click="$myCustomApiPlugin.call()">Say Hello from plugin</b-button>
    <Header></Header>
    <Dashboard />
    <DashboardButton />
    <DashboardButtonIcon />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  // 设置 myDashboard 布局
  layout: "myDashboard",
  head: {
    title: "This is the Home Page",
  },
  mounted() {
    console.log(this.$myCustomApiPlugin);
  }
}; 
</script>
