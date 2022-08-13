<template>
  <div style="width: 30%;">
    <!-- 编辑部分 -->
    <div class="wrap">
      <div style="display: flex;">
        <div style="width: 270px;margin-left: 10%;margin-top: 30px;">
          <el-timeline>
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                size=large
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
                placement="top"
                color="#50a0ff"
            >
              <el-card style="background-color: #3c3f41;color: #50a0ff">
                <h4>{{ activity.content }}&nbsp;&nbsp;&nbsp;&nbsp;评论了你的帖子</h4>
                <p>--{{ activity.name }}</p>
                <p>{{ activity.timestamp }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div style="width: 40px"></div>
      </div>

    </div>
  </div>
</template>

<script>

const activities = [
  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },
  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },
  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },
  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },

  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },
  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },
  {
    content: '江南',
    timestamp: '2018-04-18',
    name: '论XXX基金'

  },
  
]

export default {
  name: "SmRight",
  setup() {
    return {
      activities,
    }
  }
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