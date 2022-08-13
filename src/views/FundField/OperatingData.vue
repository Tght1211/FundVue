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
          <!--头部-->
          <!-- <div style="margin: 20px">
              <div style="height: 20px"></div>
              <div style="color: #50a0ff; font-size: 30px">热门基金TOP10</div>
            </div> -->
          <div style="height: 10%"></div>
          <div style="height: 50%; width: 95%; margin-left: 2.5%">
            <div style="width: 100%; height: 40%; display: flex">
              <div style="width: 460px">
                <span style="font-size: 50px; color: #50a0ff; margin-left: 0px"
                  >我的操作</span
                >
              </div>
              <div style="flex: 1"></div>
              <div style="margin-top: 90px">
                <!-- 按钮 ,有反馈-->
                <div style="margin-right: 20px">
                  <el-button
                    type="primary"
                    size="large"
                    style="font-size: 20px"
                    round
                    >分享今日操作📈</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <!--说明部分-->
          <div
            style="
              border-top: 1px solid #ff6c37;
              width: 350px;
              margin-left: 30px;
            "
          >
            <div style="margin-left: 0px; margin-top: 20px">
              <span style="color: #a4b1c1"
                >下面是您的基金操作记录，可选择分享到社区哦~</span
              >
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
          <!--自动生成操作记录，显示卡片样式的记录，用表来处理，操作记录可点分享，-->
          <!--就一个表，表一天只能生成一行，操作其他基金是修改，有俩个区别，买入，卖出；俩个状态，撤单，进行中，正常可以不显示。
            （类别、名字、时间、金额、【占比，自己算】、状态：卖出撤单为份额，买入撤单为元，正常买入或卖出成功）-->
          <div style="height: 5%"></div>
          <div
            style="
              height: 90%;
              width: 90%;
              margin-left: 5%;
              border: 1px solid #ffd04b;
              font-size: 15px;
            "
          >
            <!--放表格-->
            <table style="text-align: center;width: 100%;">
              <th
                style="
                  width: 12%;
                  border-left: 2px solid #ff0090;
                  color: #c1c1c1;
                "
              >
                操作类型
              </th>

              <th
                style="
                  width: 39%;
                  border-left: 2px solid #ff0090;
                  color: #c1c1c1;
                "
              >
                基金名称
              </th>
              <th
                style="
                  width: 25%;
                  border-left: 2px solid #ff0090;
                  color: #c1c1c1;
                "
              >
                操作日期
              </th>
              <th
                style="
                  width: 12%;
                  border-left: 2px solid #ff0090;
                  color: #c1c1c1;
                "
              >
                &nbsp;&nbsp;操作状态
              </th>
              <th
                style="
                  width: 12%;
                  border-left: 2px solid #ff0090;
                  color: #c1c1c1;
                "
              >
                &nbsp;&nbsp;操作金额
              </th>

              <!--表格内容-->
              <tr v-for="item in list" :key="item.id" style="color: #c1c1c1">
                <td style="height: 40px;">
                  <span style="color: #ff0090;">买入</span>
                  <span style="color: #50a0ff;">卖出</span>
                </td>
                <td>
                  <div>
                    &nbsp;&nbsp;<button
                      style="
                        border: 0px;
                        background-color: #3c3f41;
                        color: #c1c1c1;
                        font-size: 15px;
                      "
                    >
                      华夏国证半导体芯片ETF联接C</button
                    ><span>&nbsp;&nbsp;008888</span>
                  </div>
                </td>
                <td>&nbsp;&nbsp;2018-09-25 15:00</td>
                <td>
                  买入成功
                </td>
                <td>
                  2000元
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperatingData",
  setup() {
    return {
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
};
</script>

<style scoped></style>
