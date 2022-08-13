<template>
  <div style="width: 70%">
    <!-- 中间 -->
    <div style="height: 100vh; background-color: #2b2b2b">
      <div v-if="countLeng == 0">
        <div style="height: 140px"></div>
        <div style="text-align: center">
          <span style="color: #767676; font-size: 40px">暂无帖子</span>
        </div>
      </div>
      <div v-if="countLeng > 2" style="height: 100%; width: 100%">
        <!-- 无限滚动 -->
        <div
          style="height: 100%; width: 100%; margin-top: 10px; overflow: auto"
          v-infinite-scroll="load"
          class="infinite-list"
        >
          <!--滚动内容-->
          <div
            v-for="(item, index) in count"
            :key="index"
            class="infinite-list-item"
            style="
              border-bottom: 2px solid #fdc9e6;
              border-left: 2px solid #fdc9e6;
            "
          >
            <!--- 帖子div v-for="(i,index) in 10" :key="index" -->
            <div
              style="
                height: 240px;
                width: 100%;
                background-color: #3c3f41;
                border-radius: 30px;
              "
            >
              <!-- 显示内容部分 -->
              <div @click="info">
                <!-- 头部 -->
                <div
                  style="
                    height: 80px;
                    background-color: #3c3f41;
                    display: flex;
                    border-radius: 30px;
                  "
                >
                  <div
                    class="img"
                    style="
                      width: 67px;
                      height: 60px;
                      margin-top: 10px;
                      margin-left: 10px;
                      background-color: #50a0ff;
                      border-radius: 30px;
                    "
                  >
                    <img
                      v-if="item.userImgUrl"
                      :src="item.userImgUrl"
                      style="width: 100%; height: 100%; border-radius: 50%"
                    />
                  </div>
                  <!-- 标题部分 -->
                  <div style="height: 80px; width: 100%; margin-left: 10px">
                    <div style="width: 220px; float: left">
                      <div style="height: 15px"></div>
                      <div style="height: 30px">
                        <span
                          style="
                            text-align: left;
                            color: #a4b1c1;
                            font-size: larger;
                          "
                          >{{ item.userNickName }}</span
                        >
                      </div>
                      <div style="height: 50%; background-color: #3c3f41">
                        <span
                          style="font-size: 10px; color: #50a0ff"
                          v-if="item.userSex == 1"
                          >♂&nbsp;&nbsp;🧑</span
                        >
                        <span
                          style="font-size: 10px; color: #fb63ba"
                          v-if="item.userSex == 0"
                          >♀&nbsp;&nbsp;👧</span
                        >
                        <span
                          style="font-size: 10px; color: #c1c1c1"
                          v-if="item.userSex == 2"
                          >未知</span
                        >
                      </div>
                    </div>
                    <!-- 上标题 -->
                    <div
                      style="
                        height: 40px;
                        width: 90%;
                        margin-top: 5px;
                        color: #50a0ff;
                        font-size: larger;
                      "
                    >
                      <span style="font-size: 25px">{{ item.posTitle }}</span>
                    </div>
                    <!-- 下昵称+日期 -->
                    <div style="height: 30px; width: 95%">
                      <span
                        style="float: right; color: #a4b1c1; margin-top: 3px"
                        >发布时间: <span>{{ item.posDate }}</span></span
                      >
                    </div>
                  </div>
                </div>
                <!-- 预览内容 -->
                <div
                  style="
                    height: 86px;
                    width: 90%;
                    margin-left: 5%;
                    color: #a4b1c1;
                    overflow: hidden;
                  "
                >
                  <el-card
                    style="
                      min-height: 180px;
                      background-color: #3c3f41;
                      border: 0px;
                      color: #a4b1c1;
                    "
                  >
                    <div v-html="item.posContent"></div>
                  </el-card>
                </div>
              </div>
              <!-- 操作部分 -->
              <div>
                <!-- 底部按钮 -->
                <div style="height: 20px; margin-top: 25px">
                  <div style="float: right; margin-right: 15%">
                    <!-- 点赞按钮 -->
                    <el-button
                      v-if="item.isLike == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <el-button
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #d25096;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <!-- 点击会展开页面详情，然后提示，在下方评论 -->
                    <el-button
                      v-if="item.isCom == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <el-button
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #d25096;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <!-- 点击就会添加到收藏 -->
                    <el-button
                      v-if="item.isCol == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                    <el-button
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #d25096;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div v-else style="height: 100%; width: 100%">
        <!-- 没有滚动 -->
        <!-- 无限滚动 -->
        <div
          style="height: 100%; width: 100%; margin-top: 10px; overflow: auto"
          class="infinite-list"
        >
          <!--滚动内容-->
          <div
            v-for="(item, index) in count"
            :key="index"
            class="infinite-list-item"
            style="
              border-bottom: 2px solid #fdc9e6;
              border-left: 2px solid #fdc9e6;
            "
          >
            <!--- 帖子div v-for="(i,index) in 10" :key="index" -->
            <div
              style="
                height: 240px;
                width: 100%;
                background-color: #3c3f41;
                border-radius: 30px;
              "
            >
              <!-- 显示内容部分 -->
              <div @click="info">
                <!-- 头部 -->
                <div
                  style="
                    height: 80px;
                    background-color: #3c3f41;
                    display: flex;
                    border-radius: 30px;
                  "
                >
                  <div
                    class="img"
                    style="
                      width: 67px;
                      height: 60px;
                      margin-top: 10px;
                      margin-left: 10px;
                      background-color: #50a0ff;
                      border-radius: 30px;
                    "
                  >
                    <img
                      v-if="item.userImgUrl"
                      :src="item.userImgUrl"
                      style="width: 100%; height: 100%; border-radius: 50%"
                    />
                  </div>
                  <!-- 标题部分 -->
                  <div style="height: 80px; width: 100%; margin-left: 10px">
                    <div style="width: 220px; float: left">
                      <div style="height: 15px"></div>
                      <div style="height: 30px">
                        <span
                          style="
                            text-align: left;
                            color: #a4b1c1;
                            font-size: larger;
                          "
                          >{{ item.userNickName }}</span
                        >
                      </div>
                      <div style="height: 50%; background-color: #3c3f41">
                        <span
                          style="font-size: 10px; color: #50a0ff"
                          v-if="item.userSex == 1"
                          >♂&nbsp;&nbsp;🧑</span
                        >
                        <span
                          style="font-size: 10px; color: #fb63ba"
                          v-if="item.userSex == 0"
                          >♀&nbsp;&nbsp;👧</span
                        >
                        <span
                          style="font-size: 10px; color: #c1c1c1"
                          v-if="item.userSex == 2"
                          >未知</span
                        >
                      </div>
                    </div>
                    <!-- 上标题 -->
                    <div
                      style="
                        height: 40px;
                        width: 90%;
                        margin-top: 5px;
                        color: #50a0ff;
                        font-size: larger;
                      "
                    >
                      <span style="font-size: 25px">{{ item.posTitle }}</span>
                    </div>
                    <!-- 下昵称+日期 -->
                    <div style="height: 30px; width: 95%">
                      <span
                        style="float: right; color: #a4b1c1; margin-top: 3px"
                        >发布时间: <span>{{ item.posDate }}</span></span
                      >
                    </div>
                  </div>
                </div>
                <!-- 预览内容 -->
                <div
                  style="
                    height: 86px;
                    width: 90%;
                    margin-left: 5%;
                    color: #a4b1c1;
                    overflow: hidden;
                  "
                >
                  <el-card
                    style="
                      min-height: 180px;
                      background-color: #3c3f41;
                      border: 0px;
                      color: #a4b1c1;
                    "
                  >
                    <div v-html="item.posContent"></div>
                  </el-card>
                </div>
              </div>
              <!-- 操作部分 -->
              <div>
                <!-- 底部按钮 -->
                <div style="height: 20px; margin-top: 25px">
                  <div style="float: right; margin-right: 15%">
                    <!-- 点赞按钮 -->
                    <el-button
                      v-if="item.isLike == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <el-button
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #d25096;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <!-- 点击会展开页面详情，然后提示，在下方评论 -->
                    <el-button
                      v-if="item.isCom == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <el-button
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #d25096;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <!-- 点击就会添加到收藏 -->
                    <el-button
                      v-if="item.isCol == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                    <el-button
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #d25096;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";

export default {
  name: "Favorite",
  data() {
    return {
      countLeng: 0,
      // 总集合
      count: [],
      // 每次请求得到的数据
      list: [],
      // num,请求一次就+1
      num: 1,
      user: {},
      total: 0,
    };
  },
  methods: {
    // 取消收藏
    remCol(index) {
      // 帖子id
      console.log("点击了取消收藏");
      console.log(this.count[index].posId);
      request
        .delete(
          "/com/collect/delete/" +
            this.count[index].posId +
            "/" +
            JSON.parse(sessionStorage.getItem("user")).userId
        )
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "取消收藏成功",
            });
            this.rans();
            this.load();
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
    },
    info() {
      console.log("chakan===============================================");
    },
    rans() {
      console.log("count赋值成功");
      this.count = this.count.concat(this.list);
      //  sessionStorage.removeItem("listDataMyPosts");
      //  sessionStorage.setItem("listDataMyPosts", JSON.stringify(this.count));
      console.log(this.count);
    },
    load() {
      console.log("kaishl");
      console.log("闯入" + this.num);
      request
        .get("/com/collect/select", {
          params: {
            // 这些参数不用去return
            userId: JSON.parse(sessionStorage.getItem("user")).userId,
            pageNum: this.num,
            pageSize: 3,
          },
        })
        .then((res) => {
          if (res.code == 0) {
            // sessionStorage.removeItem("listData");
            // sessionStorage.setItem("listData", JSON.stringify(res.data));
            this.list = res.data.records;      
            this.total = res.data.total;         
            this.rans();
            this.num += 1;
            this.countLeng = this.count.length;
          } else {
            this.$message({
              type: "warning",
              message: res.msg,
            });
          }
        });
    },
  },
  created() {
    console.log(this.count);
    this.rans();
    this.load();
  },
};
</script>

<style scoped>
infinite-list {
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
