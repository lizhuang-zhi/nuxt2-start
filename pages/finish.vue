<template>
  <div class="finished_page">
    <div class="title">What I Do</div>
    <div class="cont">
      <div class="strip_box" v-for="(item, index) in finished" :key="index">
        <div class="strip">{{ index + 1 }}. {{ item.title }}</div>
        <div class="finish" v-show="item.finished == false">
          {{ item.finished }}
        </div>
        <div class="finished" v-show="item.finished == true">
          {{ item.finished }}
        </div>
      </div>
    </div>
    <div class="create_task">
      <div class="title">创建任务</div>
      <div class="create_box">
        <van-field
          v-model="taskCont"
          label="输入任务内容"
          placeholder="请输入任务内容.."
        />
        <van-button style="margin-right: 10px;" type="primary" size="small" @click="create">创建</van-button>
        <van-button type="info" size="small" @click="taskCont == ''">重置</van-button>
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
          finished: true,
        },
        {
          title: "国际化文本缩放组件可用性",
          finished: false,
        },
        {
          title: "虚拟列表",
          finished: false,
        },
        {
          title: "将该列表写入数据库",
          finished: false,
        },
        {
          title: "添加权限，只有admin可编辑",
          finished: false,
        },
      ],
      taskCont: "",
    };
  },
  methods: {
    create() {
      if (this.taskCont == "") {
        this.$toast("请输入任务内容");
      } else {
        this.finished.push({
          title: this.taskCont,
          finished: false,
        });
        this.taskCont = "";
      }
    }
  }
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
    height: 70vh;
    overflow-y: scroll;
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
        color: orangered;
      }
      .finished {
        width: 20%;
        color: blue;
      }
    }
  }
  .create_task {
    margin-top: 20px;
    width: 78vw;
    position: fixed;
    bottom: 0;
    .title {
      font-size: 23px;
      font-weight: 700;
    }
    .create_box {
      width: 100%;
      display: flex;
      align-items: center;

      :deep(.van-cell) {
        width: 80%;
      }
    }
  }
}
</style>