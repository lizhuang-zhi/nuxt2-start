<template>
  <div class="user_page">
    <div class="title">User Page</div>
    <div class="cont">
      <div v-for="(item, index) in userList" :key="index">
        <div>{{ index }}.{{ item.Username }}.{{ item.Email }}</div>
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
      message: "message in data",
    };
  },
  // 初始化之前执行,所以函数中不能使用this
  async asyncData({ app }) {
    const response = await app.$axios.$get("http://localhost:8000/alluser");
    if (response.code == 0) {
      return { userList: response.data };
    } else {
      return { userList: [] };
    }
  },
  mounted() {
    // 此时获取到的this中包含message和userList
    console.log(this);
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