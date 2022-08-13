<template xmlns="http://www.w3.org/1999/html">
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
        <!-- 中部 - 上面-->
        <div style="height: 15vh; background-color: #2b2b2b">
          <!-- 内嵌圆角块 -->
          <div
            style="
              height: 97%;
              width: 97%;
              margin-top: 2%;
              margin-left: 1.25%;
              background-color: #3c3f41;
              border-radius: 20px;
            "
          >
            <div style="height: 10%"></div>
            <div style="height: 80%; width: 95%; margin-left: 2.5%;display: flex;">
              <div>
                <div><span style="color: #c1c1c1">今日预估收益</span></div>
                <div>
                  <span style="color: #ff0090; font-size: 50px">+3000</span>
                </div>
              </div>
              <div style="flex: 1;text-align: center;">
                <div style="height: 6px;"></div>
                <div>
                  <span style="color: #50a0ff;font-size: 30px;">你好呀，有眼光的年轻人</span>
                </div>
                <div style="height: 10px;"></div>
                <div>
                  <span style="color: #a6a6a6;font-size: 10px;">身在市场，你就得准备忍受痛苦。</span>
                </div>
                
              </div>
              <div>
                <div><span style="color: #c1c1c1;float: right;">昨日收益</span></div>
                <div>
                  <span style="color: #ff0090; font-size: 50px">+3000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 中部 - 中间-->
        <div style="height: 70vh; background-color: #2b2b2b">
          <!-- 内嵌圆角块 -->
          <div
            style="
              height: 97%;
              width: 97%;
              margin: 1.25%;
              background-color: #3c3f41;
              border-radius: 20px;
            "
          >
            <!-- 顶下去 -->
            <div style="height: 4%;">
              <div style="float: left;height: 20px;">
                <div style="margin-left: 30px; border-left: 5px solid #50a0ff;margin-top: 20px;">
                  <div>
                    <span
                      style="font-size: 15px; margin-left: 10px; color: #c1c1c1"
                      >持有基金估算收益曲线</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 折线图 -->
            <div id="gz" style="height: 98%; width: 98%;"></div>
          </div>
        </div>
        <!-- 中部 - 下面-->
        <div id="customerChart" style="height: 70vh; background-color: #2b2b2b">
          <!-- 内嵌圆角块 -->
          <div
            style="
              height: 97%;
              width: 97%;
              margin-left: 1.25%;
              background-color: #3c3f41;
              border-radius: 20px;
            "
          >
            <!-- 顶下去 -->
            <div style="height: 3%"></div>
            <!-- 表格不搞，太麻烦，来张图 -->
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
import Right from "@/components/Right"
import * as echarts from "echarts";
import { option } from "./leiji.js";

export default {
  name: "Main",
  components: {
    Right,
    // 子组件
  },
  setup() {
    return {
      option: option,
      mychart: null,
    };
  },
  mounted() {
    this.drawline(); 
  },
  methods: {
    drawline() {
      let mychart = echarts.init(document.getElementById("gz"));
      this.mychart = mychart;
      if (this.option) {
        this.mychart.setOption(this.option);
      }
    },
  },
};
</script>

<style scoped></style>
