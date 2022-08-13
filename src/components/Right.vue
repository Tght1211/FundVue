<template>
  <!-- 右侧部分编辑部分 -->
  <div style="height: 110vh; width: 98%; background-color: #2b2b2b">
    <!--第一个模块-->
    <div
      style="
        border-radius: 20px;
        width: 100%;
        height: 30%;
        background-color: #3c3f41;
        margin-bottom: 20px;
      "
    >
      <div style="height: 20px; margin-top: 20px"></div>
      <div style="display: flex; height: 50%; width: 100%">
        <div
          class="img"
          style="
            border-radius: 50%;
            width: 120px;
            height: 120px;
            background-color: #ffffff;
            margin-left: 25px;
          "
        >
          <img
            v-if="user.userImgUrl"
            :src="user.userImgUrl"
            style="width: 100%; height: 100%; border-radius: 50%"
          />
        </div>
        <div style="width: 50%; height: 60%">
          <div style="height: 50px; margin-left: 20px">
            <span style="color: #50a0ff; font-size: 30px">{{
              user.userNickName
            }}</span>
          </div>
          <div style="height: 20px"></div>
          <div style="height: 30%; margin-left: 20px">
            <span
              style="font-size: 30px; color: #50a0ff"
              v-if="user.userSex == 1"
              >♂&nbsp;&nbsp;🧑</span
            >
            <span
              style="font-size: 30px; color: #fb63ba"
              v-if="user.userSex == 0"
              >♀&nbsp;&nbsp;👧</span
            >
            <span
              style="font-size: 30px; color: #c1c1c1"
              v-if="user.userSex == null"
              >未知</span
            >
          </div>
        </div>
      </div>

      <div style="height: 100px; margin-left: 25px">
        <div style="height: 30px"></div>
        <el-button
          type="primary"
          size="large"
          style="font-size: 20px"
          round
          @click=""
          >我的自选</el-button
        >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-button
          type="primary"
          size="large"
          style="font-size: 20px"
          round
          @click=""
          >我的帖子</el-button
        >
      </div>
    </div>
    <div class="mediu">
      <div class="gp" style="display: flex">
        <div class="gp-m"></div>
        <div class="gp-m"></div>
        <div class="gp-m"></div>
      </div>
      <div class="text" style="margin-top: 13px;">
        <p>
          今日预估总收益率<span style="color: red">&nbsp;&nbsp;+&nbsp;3%</span>
        </p>
        <p style="margin-top: 5px">
          今日预估总收益<span style="color: red"
            >&nbsp;&nbsp;+&nbsp;300&nbsp;元</span
          >
        </p>
      </div>
    </div>
    <div class="main">
      <div style="margin-left: 20px; margin-top: 5px">
        <div style="height: 15px;"></div>
        <p style="color: #50a0ff">
          累计收益 :<span style="color: red"
            >&nbsp;&nbsp;+&nbsp;3200&nbsp;元</span
          >
        </p>
      </div>
      <div style="width: 88%; margin-left: 20px; margin-top: 20px">
        <div style="color: #c1c1c1; font-size: 15px; margin-top: -10px">
          <span>我的仓位 :</span>
        </div>
        <div style="margin-top: 10px">
          <el-progress
            :text-inside="true"
            :stroke-width="23"
            :percentage="percentage"
            status="exception"
            :color="customColors"
          />
        </div>
      </div>
    </div>
    <div class="bottom" style="display: flex;">
      <div class="left" style="color: #50a0ff; font-size: 20px;">
        <p>粉丝&nbsp;:<span>&nbsp;&nbsp;200</span></p>
        <p>关注&nbsp;:<span>&nbsp;&nbsp;20</span></p>
        <p>帖子&nbsp;:<span>&nbsp;&nbsp;18</span></p>
        <p>评论&nbsp;:<span>&nbsp;&nbsp;178</span></p>
        <p>收藏&nbsp;:<span>&nbsp;&nbsp;328</span></p>
        <p>热度&nbsp;:<span>&nbsp;&nbsp;381290</span></p>
      </div>
      <div style="flex: 1;"></div>
      <div class="right" style="float: right;">
        <button
          style="
            background-color: #50a0ff;
            border: 0px;
            font-size: 35px;
            color: white;
            width: 80px;
            height: 200px;
          "
        >
          <p>去</p>
          <p>发</p>
          <p>贴</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// 一定要记得导入
import request from "../utils/request";
import { ref } from "vue";

/* 进度条颜色 */
const percentage = ref(78);
const customColors = [
  { color: "#12decc", percentage: 20 },
  { color: "#44e35e", percentage: 40 },
  { color: "#ffba04", percentage: 60 },
  { color: "#ff0090", percentage: 80 },
  { color: "#ed5151", percentage: 100 },
];

export default {
  name: "right",
  setup() {
    return {
      customColors,
      percentage,
      // 不然一初始化就是空的,先去登录的数据中拿到，更新数据的话，再去修改。user: JSON.parse(sessionStorage.getItem("user")), 不能加！！！！还没登录。登陆后可以加
      user: {},
      // user:{},
      form: {},
      id: 0,
    };
  },
  methods: {
    load() {
      request
        .get("/user/my/select", {
          params: {
            id: JSON.parse(sessionStorage.getItem("user")).userId, //会更新
          },
        })
        .then((res) => {
          console.log("1");
          console.log(res.data);
          //sessionStorage.setItem("user", JSON.stringify(res.data))
          this.user = res.data;
          console.log(this.user)
          // this.form = this.user;
          console.log(this.user.userImgUrl);
          console.log(this.user.userNickName);
        });
    },
  },
  created() {
    if (!sessionStorage.getItem("user")) {
      // 不会更新，但表示有没有登录
      console.log("this.NickName6");
      this.$router.push("/login");
      sessionStorage.clear();
    } else {
      //先给页面加载上，再load更新，就不要去return中直接指定
      this.user = JSON.parse(sessionStorage.getItem("user"))
      this.load();
      // console.log(JSON.parse(sessionStorage.getItem("user")).userId);
    }
  },
};
</script>

<style scoped>
.head,
.mediu {
  
  border-radius: 20px;
  width: 100%;
  height: 200px;
  background-color: #3c3f41;
  margin-bottom: 20px;
}

.main {
  
  border-radius: 20px;
  width: 100%;
  height: 130px;
  background-color: #3c3f41;
  /*line-height: 100px;*/
  margin-bottom: 20px;
  font-size: 20px;
}

.bottom {
  border-radius: 20px;
  width: 100%;
  height: 34%;
  background-color: #3c3f41;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
}

.head .img {
  float: left;
  /*width: 27%;
  height: 48%;*/
  height: 120px;
  width: 120px;
  background-color: #ffffff;
  margin: 20px 20px 0;
}

.head span {
  line-height: 130px;
}

.head button {
  width: 35%;
  height: 23%;
  /*margin-left: 20px;*/
  font-size: 20px;
  background-color: #50a0ff;
  color: white;
  border: 0px;
  border-radius: 15px;
}

.gp .gp-m {
  width: 90px;
  height: 80px;
  background-color: #fdc9e6;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.mediu .text {
  margin-left: 20px;
  width: 100%;
  height: 20px;
  font-size: 20px;
  margin-top: 5px;
  color: #50a0ff;
}

.bottom div {
  background-color: #3c3f41;
  width: 50%;
  height: 230px;
}

.bottom .left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.bottom .left p {
  margin-left: 20px;
}

.bottom .right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bottom .right button {
  border-radius: 20px;
}
</style>
