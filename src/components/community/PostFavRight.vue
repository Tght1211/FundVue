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
                <h4>{{ activity.name }}</h4>
                <p>{{ activity.content }}</p>
                <P>{{ activity.timestamp }}</P>
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
    content: '今天一起来买白酒',
    timestamp: '2018-04-18',
    name: '江南'
  },
  {
    content: 'Approved',
    timestamp: '2018-04-17',
    name: '江南'
  },
  {
    content: 'Success',
    timestamp: '2018-04-16',
    name: '江南'
  },
  {
    content: 'Event start',
    timestamp: '2018-04-15',
    name: '江南'
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
    name: '江南'
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
    name: '江南'
  },
  {
    content: 'Event start',
    timestamp: '2018-04-10',
    name: '江南'
  },
  {
    content: 'Approved',
    timestamp: '2018-04-09',
    name: '江南'
  },
  {
    content: 'Success',
    timestamp: '2018-04-07',
    name: '江南'
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