<template>
  <div>
    <div
      style="
        background-color: #2b2b2b;
        height: 170vh;
        display: flex;
        border-left: 1px solid #296dbb;
      "
    >
      <div style="width: 70%; margin-left: 1%">
        <div>
          <!-- 头部 -->
          <div
            style="height: 30vh; background-color: #2b2b2b; border-radius: 20px"
          >
            <div
              style="
                height: 100%;
                width: 98.75%;
                margin-top: 1.25%;
                margin-left: 1.25%;
                border-radius: 0px;
              "
            >
              <div
                style="
                  height: 100%;
                  width: 100%;
                  margin-top: 1.25%;
                  margin-left: 0%;
                  border-radius: 0px;
                "
              >
                <!-- 上面的公告背景 -->
                <div
                  style="
                    height: 85%;
                    background-color: #3c3f41;
                    border-radius: 20px;
                  "
                >
                  <!-- 基金社区部分 -->
                  <div style="display: flex">
                    <div style="width: 250px; height: 40%">
                      <span
                        style="
                          font-size: 50px;
                          color: #50a0ff;
                          margin-left: 20px;
                        "
                        >基金社区</span
                      >
                    </div>
                    <div style="flex: 1"></div>
                    <div style="width: 240px">
                      <div style="height: 66%"></div>
                      <div>
                        <span style="color: #50a0ff"
                          ><div class="showtime"></div
                        ></span>
                      </div>
                    </div>
                  </div>
                  <!-- 下半部 -->
                  <div>
                    <div
                      style="
                        margin-top: 20px;
                        margin-left: 20px;
                        width: 95%;
                        border-top: 1px solid #ff6c37;
                      "
                    >
                      <div style="color: #a4b1c1; margin-top: 10px">
                        <span>欢迎来到基金社区</span><br /><br />
                        <span>去尽情分享你的收获吧 ！</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 下部分三个按钮 ： 最新、最热、关注 -->
                <div>
                  <div style="float: right; margin-right: 6%; margin-top: 5px">
                    <el-button
                      style="
                        font-size: larger;
                        color: #50a0ff;
                        background-color: #3c3f41;
                        border: 0px;
                      "
                      >最新
                    </el-button>
                    <el-button
                      style="
                        font-size: larger;
                        color: #50a0ff;
                        background-color: #3c3f41;
                        border: 0px;
                      "
                      >最热
                    </el-button>
                    <el-button
                      style="
                        font-size: larger;
                        color: #50a0ff;
                        background-color: #3c3f41;
                        border: 0px;
                      "
                      >关注
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 中间 -->
          <AllPosts />
          <!-- 底部 -->
          <div style="height: 120px;"></div>
          <div style="height: 130px; width: 100%">
            <div style="font-size: 15px; color: #fcb1dc; margin-left: 30px">
              <span>注意雷区：</span>
              <span>禁止发布不良言论</span>、
              <span>禁止发布涉嫌黄赌毒信息</span>、
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
      <!-- 右侧部分 -->
      <div style="width: 27%; margin-left: 1%; background-color: #2b2b2b">
        <!-- 编辑部分 -->
        <Right />
      </div>
    </div>
  </div>
</template>

<script>
import Right from "@/components/Right";
import AllPosts from "@/components/community/AllPosts";
import E from "wangeditor";

export default {
  name: "Community",
  components: { Right, AllPosts },
  mounted() {
    if(sessionStorage.getItem("access") != null){
      this.timer = setInterval(this.time, 1000);
    }
  },
  beforeDestroy() {
    if(sessionStorage.getItem("access") != null){
      clearInterval(this.timer);
    }
  },
  methods: {
    time() {
      const dt = new Date();
      const year = dt.getFullYear();
      const month = dt.getUTCMonth() + 1;
      const date = dt.getDate();
      const hour = dt.getHours();
      const minute = dt.getMinutes();
      const s = dt.getSeconds();
      document.querySelector(".showtime").innerHTML =
        year +
        "年" +
        month +
        "月" +
        date +
        "日 " +
        hour +
        ":" +
        minute +
        ":" +
        s;
    },
  },
  setup() {
    return {
      timer: "",
    };
  },
};
</script>

<style scoped>
.infinite-list {
  height: 850px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  background: var(--el-color-primary-light-9);
  margin: 30px;
  color: var(--el-color-primary);
  border-radius: 30px;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 30px;
}

/*滚动条宽 长,滚动条整体部分，其中的属性有width,height,background,border等。*/

::-webkit-scrollbar {
  width: 7px;
}

/*滚动条的滑轨背景颜色,可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/

::-webkit-scrollbar-track {
  background-color: #fdc9e6;

  /*-webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);*/
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);

  border-radius: 5px;
}

/* 滑块颜色 */

::-webkit-scrollbar-thumb {
  /*  background-color: rgba(0, 0, 0, 0.2);*/
  background-color: #fb63ba;

  border-radius: 5px;
}

/*滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/

::-webkit-scrollbar-button {
  /*  background-color: #eee;*/

  display: none;
}

/* 横向滚动条和纵向滚动条相交处尖角的颜色 */

::-webkit-scrollbar-corner {
  background-color: black;
}
</style>
