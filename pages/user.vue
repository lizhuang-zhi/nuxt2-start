<template>
  <div class="user_page">
    <div class="title">User Page</div>
    <div class="cont">
      <h3 class="update_info">获取所有用户信息</h3>
      <div v-for="(item, index) in userList" :key="index">
        <div>{{ index }}.{{ item.Username }}.{{ item.Email }}</div>
      </div>
      <h3 class="update_info">更新用户数据</h3>
      <div class="update">
        <span>ID:</span>
        <input type="text" v-model="id">
      </div>
      <div class="update">
        <span>Name:</span>
        <input type="text" v-model="name">
      </div>
      <div class="update">
        <span>Email:</span>
        <input type="text" v-model="email">
      </div>
      <button @click="update">修改用户信息</button>
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
    const response = await app.$axios.$get("http://localhost:8000/user/alluser");
    if (response.code == 0) {
      return { userList: response.data };
    } else {
      return { userList: [] };
    }
  },
  mounted() {
    // 此时获取到的this中包含message和userList
  },
  methods: {
    update() {
    },
  }
};
</script>

<style lang="less" scoped>
.user_page {
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  .cont {
    .update {
      span {
        display: inline-block;
        width: 8vw;
      }
    }
  }
}
</style>