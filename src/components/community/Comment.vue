<template>
  <div style="width: 70%">
    <!-- 中间主体 -->
    <div style="height: 100vh; background-color: #2b2b2b">
      <!-- 无限滚动 :取消-->
      <div
        style="height: 100%; width: 100%; margin-top: 10px; overflow: auto"
        v-infinite-scroll="load"
        class="infinite-list"
      >
        <div
          v-for="i in count"
          :key="i"
          class="infinite-list-item"
          style="
            border-bottom: 2px solid #fdc9e6;
            border-left: 2px solid #fdc9e6;
          "
        >
          <!--- 帖子div v-for="(i,index) in 10" :key="index" -->
          <!-- 头像和内容 -->
          <div
            style="
              display: flex;
              width: 100%;
              background-color: #3c3f41;
              border-radius: 30px;
            "
          >
            <!--头像-->
            <div
              style="width: 15%; background-color: #3c3f41; border-radius: 30px"
            >
              <div
                style="
                  margin: 15%;
                  width: 90px;
                  height: 90px;
                  background-color: #ffffff;
                  border-radius: 50%;
                "
              ></div>
              <div style="height: 20px; background-color: #3c3f41"></div>
              <div style="text-align: center">
                <span>NO.{{ i }}</span>
              </div>
            </div>
            <!--主体内容-->
            <div
              style="width: 85%; background-color: #3c3f41; border-radius: 30px"
            >
              <div style="height: 20px"></div>
              <!---昵称 + 详情-->
              <div style="font-size: 25px; display: flex">
                <div style="width: 50%">
                  <span>不是王总</span>
                </div>
                <div style="flex: 1"></div>
                <div style="margin-right: 10%">
                  <span style="font-size: 20px"
                    ><a href="#" style="color: #fb63ba">查看详情</a></span
                  >
                </div>
              </div>
              <div style="height: 80%">
                <div style="height: 10px"></div>
                <!-- 评论内容 -->
                <div
                  style="
                    width: 90%;
                    background-color: #3c3f41;
                    margin-top: 10px;
                    font-size: 18px;
                    color: #a4b1c1;
                  "
                >
                  2021 最新 VsCode开发Vue没有行内style提示 怎么办？ 千次阅读
                  多人点赞 2020-06-06 00:43:51
                  行内样式没有提示很难受，相信大家和我一样去网上百度出来了一堆这种吧
                  这种办法其实是没有用的，相当于拆了东墙补西墙；如果这么设置后Vue的语法就不能提示了。
                </div>
                <div style="height: 20px"></div>
                <!--评论信息显示-->
                <div style="height: 20px">
                  <span style="margin-right: 10px">评论了你的的帖子--</span>
                  <span style="margin-right: 30px; color: #c1c1c1"
                    >快买白酒，赶紧上车</span
                  >
                  <span>2022-4-13 13:40:32</span>
                </div>
                <div style="height: 20px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Comment",
  setup() {
    const count = ref(0);
    const load = () => {
      count.value += 2;
    };
    return {
      count,
      load,
      timer: null,
    };
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
  /* align-items: center;
  justify-content: center; */
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
