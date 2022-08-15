<template>
  <div
    style="
      width: 100%;
      height: 170vh;
      border-left: 1px solid #296dbb;
      display: flex;
      background-color: #2b2b2b;
    "
  >
    <!-- 内圆角左边 -->
    <div
      style="
        width: 69%;
        margin-left: 1.25%;
        margin-top: 0.75%;
        margin-right: 0.75%;
      "
    >
      <form ref="form" :model="form">
        <!-- 头部 -->
        <div
          style="
            height: 30vh;
            margin-top: 10px;
            background-color: #3c3f41;
            border-radius: 20px 20px 0px 0px;
          "
        >
          <!-- 写 标题、帖子类型 -->
          <div
            style="
              width: 90%;
              height: 90%;
              margin-left: 5%;
              background-color: #3c3f41;
            "
          >
            <!-- 顶下去 -->
            <div style="height: 50px; background-color: #3c3f41"></div>
            <!-- 头部信息 -->
            <div style="color: #50a0ff; margin-left: 20px; font-size: 30px">
              <!-- 文字+输入框 -->
              <label>标题&nbsp;:&nbsp;</label>
              <input
                v-model="form.posTitle"
                type="text"
                style="
                  width: 70%;
                  font-size: 30px;
                  border-bottom: 5px solid #50a0ff;
                  border-left: 0px;
                  border-right: 0px;
                  border-top: 0px;
                  background-color: #3c3f41;
                  color: #ffffff;
                  text-align: center;
                "
              /><br />
              <div style="margin-top: 30px; display: flex">
                <!-- 公开-私有 -->
                <el-switch
                  v-model="value1"
                  size="large"
                  active-text="公开"
                  inactive-text="私有"
                />
                <div style="flex: 1"></div>
                <!-- 按钮 ,有反馈-->
                <div style="margin-right: 20px">
                  <el-button
                    @click="save"
                    type="primary"
                    size="large"
                    style="font-size: 20px"
                    round
                    >发布📈</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 文本编辑区域 -->
        <div
          style="
            height: 130vh;
            background-color: #3c3f41;
            border-radius: 0px 0px 20px 20px;
          "
        >
          <div
            :ref="editor"
            id="div1"
            style="
              height: 850px;
              width: 90%;
              margin-left: 5%;
              background-color: #3c3f41;
            "
          ></div>
        </div>
      </form>
    </div>
    <!-- 内圆角右边 -->
    <!-- 右侧部分 -->
    <div style="width: 27%; margin-left: 1%; background-color: #2b2b2b">
      <!-- 编辑部分 -->
      <Right />
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import Right from "@/components/Right";
import Layout from "@/layout/Layout";
import { ref } from "vue";
import request from "../../utils/request";

let editor;
export default {
  name: "ComToShare",
  components: { Layout, Right },
  setup() {
    // 开关
    const value1 = ref(true);
    return {
      value1,
      form: {},
    };
  },
  methods: {
    save() {
      // 总共传userId、帖子标题、帖子内容、帖子类型四个
      // console.log(editor.txt.html())
      this.form.posContent = editor.txt.html(); // 获取编辑器里面的值，然后赋予到实体
      if (this.value1) {
        //true 则为0，1为flase
        this.form.posType = 0;
      } else {
        this.form.posType = 1;
      }
      this.form.userId = JSON.parse(sessionStorage.getItem("user")).userId;

      // 未发布之前就存再sessionStorage
      request.post("/com/posts/save", this.form).then((res) => {
        console.log(res);
        if (res.data != null) {
          this.$message({
            type: "success",
            message: "发布成功",
          });
        } else {
          this.$message({
            type: "error",
            message: "发布失败",
          });
        }
        // 直接跳到我的帖子去
        this.$router.push("/myPosts");
      });
    },
  },
  // 最后加载
  mounted() {
    // 最后加载富文本，new一个editor对象
    editor = new E("#div1");
    // 配置 server 接口地址  // 添加图片
    editor.config.uploadImgServer = "http://www.yjzs.gold:10010/com/posts/editor";
    editor.config.uploadFileName = "file"; // 设置上传参数名称

    // 设置编辑区域高度为 500px
    editor.config.height = 800;
    // 配置颜色（文字颜色、背景色）
    editor.config.colors = ["#000000", "#eeece0", "#1c487f", "#4d80bf"];
    // 配置字体
    editor.config.fontNames = [
      // 对象形式 v4.6.16
      { name: "黑体", value: "黑体" },
      { name: "绝绝字体", value: "Times New Roman" },
      // 字符串形式
      "黑体",
      "仿宋",
      "楷体",
      "标楷体",
      "华文仿宋",
      "华文楷体",
      "宋体",
      "微软雅黑",
      "Arial",
      "Tahoma",
      "Verdana",
      "Times New Roman",
      "Courier New",
    ];
    // 获取编辑区域的东西
    //editor.txt.html();
    //this.form.content = "";
    editor.create();
  },
};
</script>

<style scoped></style>
