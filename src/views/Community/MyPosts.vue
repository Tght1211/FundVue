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
    <!-- 左右margin：1% 背景 -->
    <div
      style="
        width: 100%;
        margin-left: 1%;
        margin-right: 1%;
        background-color: #2b2b2b;
      "
    >
      <!-- 头部 -->
      <div
        style="
          width: 99%;
          height: 15%;
          background-color: #3c3f41;
          margin-left: 0.5%;
          margin-top: 1.5%;
          border-radius: 20px;
        "
      >
        <!-- 我的帖子 -->
        <div
          style="
            height: 50%;
            width: 60%;
            margin: 2%;
            background-color: #3c3f41;
            border-bottom: 1px solid #ff6c37;
          "
        >
          <div style="padding-top: 20px">
            <span style="font-size: 40px; color: #50a0ff; margin-left: 20px"
              >我的帖子</span
            >
          </div>
        </div>
        <!-- 帖子说明，帖子数量信息 -->
        <div
          style="height: 28%; width: 96%; margin: 2%; background-color: #3c3f41"
        >
          <div style="font-size: 20px; color: #c1c1c1">
            <span style="margin-left: 20px">累计发帖</span>
            <span style="margin-left: 20px">{{ total }}</span>
          </div>
        </div>
      </div>
      <!-- 下面帖子部分 -->
      <div
        style="
          width: 99%;
          height: 70%;
          background-color: #2b2b2b;
          margin-left: 0.5%;
          margin-top: 1.5%;
          border-radius: 20px;
        "
      >
        <!--组件-->
        <PostAndRight />
      </div>
      <!-- 底部 -->
      <div style="height: 130px; width: 100%">
        <div style="font-size: 15px; color: #fcb1dc; margin-left: 30px">
          <span>注意雷区：</span>
          <span>禁止发布不良言论</span>、 <span>禁止发布涉嫌黄赌毒信息</span>、
          <span>禁止发布任何商业行为信息</span>
        </div>
        <div style="height: 20px"></div>
        <div style="font-size: 15px; color: #a4b2f8; margin-left: 30px">
          <span>举报热线：</span>
          <span>📞 18774903239</span>、 <span>🐧 2500851731</span>、
          <span>📫 tght_1211@163.com</span>
        </div>
        <div style="height: 20px"></div>
        <div style="font-size: 15px; color: #93d4fd; margin-left: 30px">
          <span>养基助手：</span>
          <span>我们期待着一个养基爱好者和平交流的平台，加入我们吧！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostAndRight from "@/components/community/PostAndRight";

export default {
  name: "MyPosts",
  components: {
    PostAndRight,
  },
  data() {
    return {
      total: sessionStorage.getItem("MyPostsTotal"),
    };
  },
};
</script>

<style scoped></style>
