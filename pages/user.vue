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
        <input type="text" v-model="id" />
      </div>
      <div class="update">
        <span>Name:</span>
        <input type="text" v-model="name" />
      </div>
      <div class="update">
        <span>Email:</span>
        <input type="text" v-model="email" />
      </div>
      <div v-show="udpateInfo != ''">{{ udpateInfo }}</div>
      <van-button type="primary" @click="update">修改用户信息</van-button>
    </div>
  </div>
</template>

<script>
import { getAllUser, updateUser } from "@/api/request.js";
import CommonBody from "../components/CommonBody.vue";
export default {
  components: { CommonBody },
  data() {
    return {
      id: "",
      name: "",
      email: "",
      udpateInfo: "",
    };
  },
  // 初始化之前执行,所以函数中不能使用this
  async asyncData() {
    const response = await getAllUser();
    if (response.code == 0) {
      return { userList: response.data };
    } else {
      return { userList: [] };
    }
  },
  mounted() {
    // 此时获取到的this.data中包含userList
  },
  methods: {
    update() {
      updateUser({
        id: this.id,
        name: this.name,
        email: this.email,
      })
        .then((res) => {
          console.log(res);
          this.$toast("更新成功");
          this.udpateInfo = res.message;
        })
        .catch((err) => {
          console.log(err);
          this.$toast("更新失败");
        });
    },
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