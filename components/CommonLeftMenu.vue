<template>
  <div class="common_left_menu">
    <nuxt-link to="/user">User Page</nuxt-link>
    <nuxt-link to="/clients">Clients Page</nuxt-link>
    <nuxt-link to="/index">Index Page</nuxt-link>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.common_left_menu {
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: bisque;
  a {
    display: inline-block;
    width: 100%;
    height: 10vh;
    background: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

    