<template>
  <div class="finished_page">
    <div class="title">What I Do</div>
    <div class="cont">
      <div class="strip_box" v-for="(item, index) in finished" :key="index">
        <div class="strip">{{ index + 1 }}. {{ item.title }}</div>
        <!-- 单选框 -->
        <van-checkbox
          class="finish"
          v-model="item.finished"
          @click="clickFinish(item)"
          >是否完成任务</van-checkbox
        >
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
        <van-button
          style="margin-right: 10px"
          type="primary"
          size="small"
          @click="create"
          >创建</van-button
        >
        <van-button type="info" size="small" @click="taskCont == ''"
          >重置</van-button
        >
      </div>
    </div>
  </div>
</template>
  
  <script>
import CommonBody from "../components/CommonBody.vue";
import { insertTask, getAllTask } from "@/api/request";
export default {
  components: { CommonBody },
  data() {
    return {
      finished: [],
      taskCont: "",
    };
  },
  async asyncData() {
    // asyncData方法会在server端和client端都执行
    const res = await getAllTask({
      page_index: 1,
      page_size: 10,
    });
    return { taskList: res.data };
  },
  mounted() {
    if (this.taskList && this.taskList.length > 0) {
      for (let item of this.taskList) {
        this.finished.push({
          title: item.task_name,
          finished: item.is_finished,
        });
      }
    }
  },
  methods: {
    create() {
      if (this.taskCont == "") {
        this.$toast("请输入任务内容");
      } else {
        insertTask({
          task_name: this.taskCont,
          is_finished: false,
        })
          .then((res) => {
            this.taskCont = "";
            this.$toast("创建任务成功");
          })
          .catch((err) => {
            this.$toast("创建任务失败");
          });
      }
    },
    clickFinish(item) {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否完成任务",
        })
        .then(() => {
          // 请求接口
          // item.finished = true;
        })
        .catch(() => {
          item.finished = false;
        });
    },
  },
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
        width: 35%;
        color: orangered;
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