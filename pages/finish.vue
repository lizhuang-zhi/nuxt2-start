<template>
  <div class="finished_page">
    <div class="title">What I Do</div>
    <div class="cont">
      <div class="strip_box" v-for="(item, index) in finished" :key="index">
        <div class="strip">{{ index + 1 }}. {{ item.title }}</div>
        <div class="finish">{{ item.finished }}</div>
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
      finished: [
        {
          title: "前端下拉触底, 后端分页请求[log模块]",
          finished: false,
        },
        {
          title: "token验证流程[首页]",
          finished: false,
        },
        {
          title: "使用Vant2",
          finished: false,
        },
        {
          title: "国际化文本缩放组件可用性",
          finished: false,
        },
        {
          title: "虚拟列表",
          finished: false,
        },
      ],
    };
  },
  mounted() {},
};
</script>
  
<style lang="less" scoped>
.finished_page {
  width: 100%;
  .title {
    font-size: 23px;
    font-weight: 700;
  }
  .cont {
    width: 100%;
    .strip_box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .strip {
        width: 100%;
      }
      .finish {
        width: 20%;
      }
    }
  }
}
</style>