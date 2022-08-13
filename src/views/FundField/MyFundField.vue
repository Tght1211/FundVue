<template>
  <div
    style="
      background-color: #2b2b2b;
      height: 170vh;
      display: flex;
      border-left: 1px solid #296dbb;
    "
  >
    <div style="width: 100%; margin-left: 1%">
      <!-- 中部 - 上面-->
      <div style="height: 30vh; background-color: #2b2b2b">
        <!-- 内嵌圆角块 -->
        <div
          style="
            height: 97%;
            width: 97%;
            margin-top: 1.25%;
            margin-left: 1.25%;
            background-color: #3c3f41;
            border-radius: 20px;
          "
        >
          <!--头部内容-->
          <div style="height: 10%"></div>
          <div style="height: 50%; width: 95%; margin-left: 2.5%">
            <div style="width: 100%; height: 40%; display: flex">
              <div style="width: 330px">
                <span style="font-size: 50px; color: #50a0ff; margin-left: 0px"
                  >我的基场</span
                >
              </div>
              <div style="width: 100px"></div>
              <!--资金信息-->
              <div
                style="
                  float: right;
                  width: 750px;
                  background-color: #3c3f41;
                  height: 130px;
                "
              >
                <!--总金额-->
                <div style="width: 100%">
                  <div style="display: flex">
                    <div
                      style="font-size: 20px; width: 200px; margin-right: 40px"
                    ></div>
                    <div style="flex: 1"></div>
                    <div style="height: 110px">
                      <div
                        style="font-size: 60px; color: #50a0ff; margin-top: 5px"
                      >
                        <span
                          style="
                            float: right;
                            font-size: 15px;
                            color: #c1c1c1;
                            margin-left: 20px;
                          "
                          >总金额</span
                        >
                        <span style="float: right">37190.25</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!--三个收益-->
                <div
                  style="
                    height: 30px;
                    text-align: center;
                    font-size: 15px;
                    color: #c1c1c1;
                  "
                >
                  <span style="float: right">累计收益（元）</span>
                  <span>持有收益（元）</span>
                  <span style="float: left; margin-left: 20px"
                    >昨日收益（元）</span
                  >
                </div>
                <div
                  style="text-align: center; font-size: 20px; color: #50a0ff"
                >
                  <span style="float: right; margin-right: 20px">+371.25</span>
                  <span>+371.25</span>
                  <span style="float: left; margin-left: 20px">+371.25</span>
                </div>
              </div>
            </div>
          </div>
          <!--说明部分-->
          <div
            style="
              border-top: 1px solid #ff6c37;
              width: 300px;
              margin-left: 30px;
            "
          >
            <div style="margin-left: 0px; margin-top: 20px">
              <span style="color: #a4b1c1">欢迎来到专为您打造的基金养殖场</span>
            </div>
          </div>
        </div>
      </div>
      <!--主体部分-->
      <!--背景布局-->
      <div style="height: 135vh; background-color: #2b2b2b">
        <!--圆角区域-->
        <div
          style="
            height: 97%;
            width: 97%;
            margin-top: 1.25%;
            margin-left: 1.25%;
            background-color: #3c3f41;
            border-radius: 20px;
          "
        >
          <div style="width: 100%; height: 60%">
            <!--折线图区域-->
            <div
              style="
                width: 100%;
                height: 100%;
                background-color: #3c3f41;
                border-radius: 30px;
              "
            >
              <div style="height: 50px">
                <div style="height: 20px"></div>
                <div style="margin-left: 30px; border-left: 5px solid #50a0ff">
                  <div>
                    <span
                      style="font-size: 20px; margin-left: 10px; color: #c1c1c1"
                      >持有基金估算收益曲线</span
                    >
                  </div>
                </div>
              </div>
              <div style="display: flex; width: 100%; height: 100%">
                <!--折线图形-->
                <div
                  id="gz"
                  style="height: 90%; width: 75%; background-color: #3c3f41"
                ></div>
                <!--折线信息-->
                <div style="width: 22%; height: 90%">
                  <div style="margin-left: 20px; width: 100%; height: 100%">
                    <!---->
                    <div
                      style="margin-left: 20px; height: 40px; color: #c1c1c1"
                    >
                      <span style="float: right; margin-right: 10px"
                        >今日预估收益（元）</span
                      >
                    </div>
                    <div
                      style="
                        font-size: 40px;
                        color: #50a0ff;
                        height: 70px;
                        width: 100%;
                      "
                    >
                      <!--为负数就是绿色-->
                      <span
                        style="
                          float: right;
                          color: rgb(255, 70, 131);
                          margin-right: 15px;
                        "
                        >+370.25</span
                      >
                    </div>
                    <!--持有仓位占比-->
                    <div style="width: 100%; height: 74%">
                      <div>
                        <div
                          style="
                            color: #c1c1c1;
                            text-align: right;
                            margin-right: 20px;
                            height: 30px;
                          "
                        >
                          持有仓位
                        </div>
                        <div style="height: 40px; width: 95%">
                          <el-progress
                            :text-inside="true"
                            :stroke-width="23"
                            :percentage="percentage"
                            status="exception"
                            :color="customColors"
                          />
                        </div>
                      </div>
                      <div
                        style="
                          height: 20%;
                          width: 95%;
                          color: #a8a8a8;
                          font-size: 30px;
                        "
                      >
                        <div
                          style="
                            border: 2px solid #296dbb;
                            height: 100%;
                            width: 100%;
                            border-radius: 20px;
                            margin-bottom: 20px;
                            display: flex;
                          "
                        >
                          <div style="margin-top: 15px; margin-left: 10px">
                            <span>上证指数</span>
                          </div>
                          <div
                            style="
                              color: #fa0e94;
                              margin-top: 15px;
                              margin-left: 10px;
                            "
                          >
                            +1.98%
                          </div>
                        </div>
                        <div
                          style="
                            border: 2px solid #296dbb;
                            height: 100%;
                            width: 100%;
                            border-radius: 20px;
                            margin-bottom: 20px;
                            display: flex;
                          "
                        >
                          <div style="margin-top: 15px; margin-left: 10px">
                            <span>深证成指</span>
                          </div>
                          <div
                            style="
                              color: #fa0e94;
                              margin-top: 15px;
                              margin-left: 10px;
                            "
                          >
                            +1.98%
                          </div>
                        </div>
                        <div
                          style="
                            border: 2px solid #296dbb;
                            height: 100%;
                            width: 100%;
                            border-radius: 20px;
                            display: flex;
                          "
                        >
                          <div style="margin-top: 15px; margin-left: 10px">
                            <span>创业版指</span>
                          </div>
                          <div
                            style="
                              color: #fa0e94;
                              margin-top: 15px;
                              margin-left: 10px;
                            "
                          >
                            +1.98%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: flex; height: 40%">
            <!--基金田-->
            <div style="width: 50%">
              <!--基金方块布局，滚动-->
              <div
                style="
                  height: 96%;
                  width: 98%;
           
                  margin-left: 20px;
                "
              >
                <!--基金田-->
                <div>
                  <div style="margin-left: 10px;border-left: 5px solid #50a0ff">
                    <span
                      style="font-size: 20px; margin-left: 10px; color: #c1c1c1"
                      >这是你的基金田</span
                    >
                  </div>
                  <div
                    class="m-bd"
                    style="
                      display: flex;
                      flex-wrap: wrap;
                      box-sizing: border-box;
                      margin-left: 10px;
                      width: 100%;
                      height: 320px;
                      margin-top: 10px;
                      overflow: auto;
                    "
                  >
                    <li style="list-style: none;box-sizing: border-box;
                    width: 130px;
                    height: 130px;
                    border: 3px solid #50a0ff;
                    border-radius: 10px;
                    margin: 10px;" v-for="i in 15"></li>
                 
                  </div>
                </div>
              </div>
            </div>
            <!--我的持有-->
            <div style="width: 50%">
              <!-- 持有表格 -->
              <div
                style="
                  height: 96%;
                  width: 96%;
                  margin-left: 2%;
                  text-align: left;
                  background-color: #3c3f41;
                "
              >
                <div style="font-size: 15px; width: 100%; margin-left: 30px">
                  <div style="height: 10px"></div>
                  <!--基金代码、基金名字、净值日期、当日净值、估算净值、涨跌百分比、估值时间、持有人数  -- 添加自选——蓝色（取消自选——红色）-->
                  <table>
                    <th
                      style="
                        width: 4300px;
                        border-left: 2px solid #ff0090;
                        color: #c1c1c1;
                      "
                    >
                      &nbsp;&nbsp;基金名称/基金代码
                    </th>
                    <th
                      style="
                        width: 22%;
                        border-left: 2px solid #ff0090;
                        color: #c1c1c1;
                      "
                    >
                      &nbsp;&nbsp;金额/昨日收益
                    </th>
                    <th
                      style="
                        width: 22%;
                        border-left: 2px solid #ff0090;
                        color: #c1c1c1;
                      "
                    >
                      &nbsp;&nbsp;持有收益/率
                    </th>

                    <!--表格内容-->
                    <tr
                      v-for="item in list"
                      :key="item.id"
                      style="color: #c1c1c1"
                    >
                      <td>
                        <div style="margin-top: 20px">
                          <div>
                            &nbsp;&nbsp;<button
                              style="
                                border: 0px;
                                background-color: #3c3f41;
                                color: #c1c1c1;
                                font-size: 15px;
                                color: #c1c1c1;
                              "
                            >
                              华夏国证半导体芯片ETF联接C
                            </button>
                          </div>

                          <div>
                            <span>&nbsp;&nbsp;008888</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div style="margin-top: 20px">
                          <div>
                            &nbsp;&nbsp;<button
                              style="
                                border: 0px;
                                background-color: #3c3f41;
                                color: #c1c1c1;
                                font-size: 15px;
                                color: #c1c1c1;
                              "
                            >
                              1007.67
                            </button>
                          </div>
                          <div>
                            <span style="font-size: 13px; color: #6e747c"
                              >&nbsp;&nbsp;-1.20</span
                            >
                          </div>
                        </div>
                      </td>
                      <!-- <td>&nbsp;&nbsp;1.2440</td>
                      <td>&nbsp;&nbsp;1.2388</td> -->
                      <td>
                        <div
                          style="
                            margin-top: 20px;

                            margin-left: 10px;
                          "
                        >
                          <div>
                            <span
                              style="color: rgb(10, 254, 173)"
                              v-if="item.pret < 0 ? true : false"
                              ><span>{{ item.pret }}</span></span
                            >
                            <span style="color: #ff0228" v-else
                              ><span>+{{ item.pret }}</span></span
                            >
                          </div>
                          <div>
                            <span
                              style="color: rgb(10, 254, 173)"
                              v-if="item.pret < 0 ? true : false"
                              ><span style="font-size: 12px"
                                >{{ item.pret }}%</span
                              ></span
                            >
                            <span style="color: #ff0228" v-else
                              ><span style="font-size: 12px"
                                >+{{ item.pret }}%</span
                              ></span
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
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
import * as echarts from "echarts";
import { option } from "./leiji.js";
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
  name: "MyFundField",
  setup() {
    return {
      customColors,
      percentage,
      option: option,
      mychart: null,
      list: [
        {
          id: 1,
          name: 1,
          pret: -0.43,
        },
        {
          id: 2,
          name: 1,
          pret: 0.43,
        },
        {
          id: 3,
          name: "",
          pret: -0.73,
        },
        {
          id: 1,
          name: 1,
          pret: -0.43,
        },
      ],
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

<style scoped>

  /*滚动条宽 长,滚动条整体部分，其中的属性有width,height,background,border等。*/

::-webkit-scrollbar {
  width: 0px;
}

</style>
