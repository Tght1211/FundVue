<template>
  <div style="width: 30%;">
    <!-- 编辑部分 -->
    <div class="wrap">
      <div style="display: flex;">
        <div style="width: 270px;margin-left: 10%;margin-top: 30px;">
          <el-timeline>
            <el-timeline-item
                v-for="(item, index) in list"
                :key="index"
                size=large
                :hollow="true"
                :timestamp="item.posDate"
                placement="top"
                color="#50a0ff"         
            >
            <div @click="info">
              <el-card   style="background-color: #3c3f41;color: #50a0ff">
                <h4>{{ item.posTitle }}</h4>
                <br>
                <p>
                  <span v-if="item.posType==0">公开</span>
                  <span v-else>私有</span>
                  &nbsp;&nbsp;
                  {{ item.posHot }}
                  <span style="color: #f23939;">HOT</span>
                </p>
              </el-card>
            </div>  
            </el-timeline-item>
          </el-timeline>
        </div>
        <div style="width: 40px"></div>
      </div>

    </div>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "SmRight",
  data() {
    return {
      list: [],
    }
  },
  methods: {
    info() {
      console.log("chakan===============================================min");
    },
    load() {
      console.log("kaishl");
      request
        .get("/com/posts/selectMyMin", {
          params: {
            // 这些参数不用去return
            userId: JSON.parse(sessionStorage.getItem("user")).userId,
          },
        })
        .then((res) => {
          if (res.code == 0) {   
            this.list = res.data;
            console.log(this.list);
          } else {
            this.$message({
              type: "error",
              message: "加载失败",
            });
          }
        });
    },
  },
  created() {
    this.load();
  },
}
</script>

<style scoped>
.wrap {
  height: 100vh;
  background-color: #2b2b2b;
  margin-left: 30px;
  margin-top: 10px;
  width: 340px;
  overflow: auto;
}


/*滚动条宽 长,滚动条整体部分，其中的属性有width,height,background,border等。*/

::-webkit-scrollbar {
  width: 0px;
}


</style>