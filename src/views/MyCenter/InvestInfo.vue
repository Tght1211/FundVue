<template>
  <div style="width: 100%;height: 170vh;border-left: 1px solid #296dbb;display: flex;background-color: #2b2b2b">
    <!-- 左右margin：1% -->
    <div style="width: 100%;margin-left: 2%;margin-right: 3%;background-color: #2b2b2b">

      <!-- 头部 -->
      <div
          style="width: 99%;height: 43%;background-color: #3c3f41;margin-left: 0.5%;margin-top: 1.5%;border-radius: 20px;">
        <!-- 头像层 -->
        <div style="display: flex">
          <!-- 头像 -->
          <div style="width: 150px;height: 150px;background-color: white;margin: 20px;border-radius: 50%;"></div>
          <!-- 昵称\性别 -->
          <div style="width: 400px;height: 150px;background-color: peachpuff;margin: 20px;">
            <div style="height: 50%;background-color: #3c3f41;"><span style="font-size: 40px;color: #50a0ff">不是王总</span>
            </div>
            <div style="height: 50%;background-color: #3c3f41"><span style="font-size: 40px;color: #50a0ff">♂&nbsp;&nbsp;🧑</span>
            </div>
          </div>
          <!-- 累计收益 -->
          <div style="width: 300px;height: 150px;background-color: peachpuff;margin: 20px;text-align: center">
            <div style="height: 37%;padding-top: 15px;background-color: #3c3f41;border-bottom: 1px solid #c1c1c1;"><span
                style="font-size: 25px;color: #c1c1c1">昨日收益</span></div>
            <div style="height: 43%;background-color: #3c3f41;padding-top: 15px"><span
                style="font-size: 45px;color: #ed1c24">+ 2038.87</span><span style="font-size: 20px;color: #c1c1c1">&nbsp;&nbsp;元</span>
            </div>
          </div>
          <!-- 编辑个人资料 -->
          <div style="width: 250px;height: 150px;background-color: #3c3f41;margin: 20px;">
            <!-- 顶下去 -->
            <div style="height: 30%"></div>
            <div style="height: 30%">
              <button
                  style="height: 100%;width: 70%;margin-left: 30%;background-color: #50a0ff;border-radius: 10px;border: 0px">
                <span style="font-size: 20px;color: white">更新仓位信息</span></button>
            </div>
          </div>
        </div>
        <!-- 信息层 -->
        <div style="height: 300px;background-color: #3c3f41">
          <!-- 第一层 -->
          <div style="height: 36%;padding-top:20px;background-color: #3c3f41">
            <div style="margin: 2%;background-color: #3c3f41;height: 70%;display: flex">
              <div style="font-size: 25px;color: #c1c1c1;width: 40%">
                <!-- 文字+输入框 -->
                <label>计划投资金额&nbsp;&nbsp;</label>
                <input type="text" style="width: 33%;
                text-align: center;
              font-size: 30px;
              border-bottom: 3px solid #fdc9e6;
              border-left: 0px;
              border-right: 0px;
              border-top: 0px;
              background-color: #3c3f41;
              color: #ed1c24"/><label>&nbsp;&nbsp;元</label><br>
              </div>
              <!-- 计划投资基金后 -->
              <div style="width: 60%;background-color: #3c3f41">
                <!-- 仓位使用情况 -->
                <div style="margin: 15px;display: flex">
                  <div style="font-size: 25px;margin-top: -8px;color:#c1c1c1;">
                    <label>仓位使用情况&nbsp;&nbsp;</label>
                  </div>
                  <div style="width: 60%">
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
            </div>
          </div>
          <!-- 第二层 -->
          <div style="height: 66%;background-color: #3c3f41">
            <div style="background-color: #3c3f41;margin: -5px 20px 20px;height: 90%;display: flex">
              <!-- 左边 -->
              <div style="width: 40%;height:100%;background-color: #3c3f41;font-size: 25px;color:#c1c1c1;">
                <div style="border-bottom: 1px solid #fb63ba;padding-bottom: 40px"><label>累计收益&nbsp;&nbsp;<span
                    style="color:#ed1c24;font-size: 25px;">+ 12037.31</span><label>&nbsp;&nbsp;元</label></label>
                </div>
                <div style="margin-top: 25px;">昨日收益统计人数 <span
                    style="color:#fdc9e6;font-size: 25px;">&nbsp;2037&nbsp;</span> 人
                </div>
                <div style="margin-top: 25px;"><label>昨日平台总收益&nbsp;&nbsp;<span
                    style="color:#ed1c24;font-size: 25px;">+ 762037.54</span><label>&nbsp;&nbsp;元</label></label></div>
              </div>
              <!-- 右边 -->
              <div
                  style="padding-left:30px;width: 60%;height:100%;background-color: #3c3f41;font-size: 25px;color:#c1c1c1;">
                <div style="padding-bottom: 40px"><label>已投资金额&nbsp;&nbsp;<span
                    style="color:#c1c1c1;font-size: 25px;">32037.45</span><label>&nbsp;&nbsp;元</label></label>
                </div>
                <div style="margin-top: 25px;">昨日最高收益 <span
                    style="color:#ed1c24;font-size: 25px;">+&nbsp;2038.87&nbsp;</span> 元
                  <span style="margin-left: 50px">昨日平均收益&nbsp;</span><span
                      style="color:#ed1c24;">+&nbsp;374.10&nbsp;</span> 元
                </div>
                <div style="margin-top: 25px;">昨日最低收益 &nbsp;<span style="color:#44e35e;font-size: 25px;">-&nbsp;6643.32&nbsp;</span>
                  元
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- 主体 : 计划-左图，右侧边-->
      <!-- 中间 -->
      <div
          style="width: 99%;height: 50%;background-color: #3c3f41;margin-left: 0.5%;margin-top: 1.5%;border-radius: 20px; display: flex">
        <!-- 左图 -->
        <!-- 折线图 -->
        <div id="gz" style="height: 90%;width: 98%;margin-top: 20px">

        </div>
        <!-- 右侧 -->
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Layout from "@/layout/Layout";
import * as echarts from "echarts";
import{option} from './line.js';

/* 进度条颜色 */
const percentage = ref(67)
const customColors = [
  {color: '#12decc', percentage: 20},
  {color: '#44e35e', percentage: 40},
  {color: '#ffba04', percentage: 60},
  {color: '#ff0090', percentage: 80},
  {color: '#ed5151', percentage: 100},
]

export default {
  name: "InvestInfo",
  components: {Layout},
  setup() {
    return {
      customColors,
      percentage,
    }
  },
  data() {
    return {
      mychart:null,
      option:option
    }
  },
  mounted() {
    this.drawline()
  },
  methods: {
    drawline(){
      let mychart = echarts.init(document.getElementById("gz"));
      this.mychart=mychart;
      if(this.option){
        this.mychart.setOption(this.option)
      }
    },
  },
}
</script>

<style scoped>

</style>