<template>
  <!--display: flex flex布局可以把盒状的元素变成行内的元素来使用-->
  <div
    style="
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #296dbb;
      display: flex;
    "
  >
    <!--
    padding-left: 30px 左边空格30像素
    font-weight: bold 字体加粗
    color: dodgerblue 字体颜色变蓝
    -->
    <div
      style="
        width: 250px;
        padding-left: 30px;
        font-weight: bold;
        color: #50a0ff;
        background-color: #2b2b2b;
        font-size: 30px;
      "
    >
      养基助手
    </div>
    <div style="background-color: #2b2b2b; width: 400px"></div>
    <div style="flex: 1; background-color: #2b2b2b"></div>
    <div
      style="
        width: 20%;
        padding-top: 18px;
        background-color: #2b2b2b;
        text-align: right;
      "
    >
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ user.userNickName }}
          <!--                  tght_1211@163.com-->

          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit()">修改手机</el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit()">修改邮箱</el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit()">修改密码</el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit()">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div style="width: 3%; background-color: #2b2b2b"></div>
  </div>
</template>

<script>
import { ArrowDown, Avatar, Lock } from "@element-plus/icons-vue";
import router from "../router";

export default {
  name: "Header",
  components: {
    ArrowDown,
  },
  created() {
    if (!sessionStorage.getItem("user")) {
    //  router.push("/login")  // 只放一个就好了  ,这俩个都可以，这些组件只要加一个组件的这个就好
        this.$router.push('/login')  // 这个请求不需要import
    } else {
      //将json字符串变为json对象
      // this.NickName = JSON.parse(this.$store.state.y_user).userNickName
      console.log("this.NickName3");
    //  this.NickName = JSON.parse(sessionStorage.getItem("user")).userNickName;
     this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  },
  data() {
    return {
      //NickName: "",
      user:{},
    };
  },
  methods: {
    exit() {
      this.$router.push("/login");
      sessionStorage.removeItem("user")
    },
  },
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
