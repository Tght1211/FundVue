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
                    >累计收益</span
                  >
                  <span style="font-size: 50px; color: #e90386; margin-left: 20px"
                    >TOP15</span
                  >
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
                  >下面显示前十五位昨日收益最多的用户</span
                >
              </div>
            </div>
          </div>
        </div>
        <!--表格布局-->
        <div style="height: 135vh; background-color: #2b2b2b">
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
            <div style="height: 1%"></div>
            <!--表格盒子-->
            <div
              style="
                margin: 1%;
                margin-left: 2%;
                background-color: #3c3f41;
                width: 96%;
                height: 96%;
                color: #50a0ff;
                font-size: 15px;
                text-align: left;
              "
            >
              <!--基金代码、基金名字、净值日期、当日净值、估算净值、涨跌百分比、估值时间、持有人数  -- 添加自选——蓝色（取消自选——红色）-->
              <table>
                <th style="width: 125px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;累计收益
                </th>
  
                <th style="width: 240px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;昵称<span style="color: #c1c1c1; font-size: 10px"
                    >&nbsp;&nbsp;&nbsp;&nbsp;（点击昵称可查看详情）</span
                  >
                </th>
                <th style="width: 125px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;累计发帖
                </th>
                <th style="width: 125px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;获取评论
                </th>
                <th style="width: 125px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;获取收藏
                </th>
                <th style="width: 125px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;粉丝数量
                </th>
                <th style="width: 125px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;累计收益率
                </th>
                <th style="width: 160px; border-left: 2px solid #ff0090">
                  &nbsp;&nbsp;入驻时间
                </th>
  
                <!--表格内容-->
                <tr v-for="item in list" :key="item.id" style="color: #c1c1c1">
                  <td>
                    <span
                      style="margin-right: 15px; font-size: 10px; color: #ff0090"
                      >Top1</span
                    > <span
                    style="color: rgb(10, 254, 173)"
                    v-if="item.pret < 0 ? true : false"
                    >-49</span
                  >
                  <span style="color: #ff0228" v-else>+2038</span>
                  </td>
  
                  <td>
                    &nbsp;&nbsp;<button
                      style="
                        border: 0px;
                        background-color: #3c3f41;
                        color: #c1c1c1;
                        font-size: 15px;
                      "
                    >
                      不是王总</button
                    ><span style="color: #50a0ff" v-if="item.name == 1"
                      >&nbsp;&nbsp;已关注</span
                    >
                  </td>
                  <td style="height: 50px">&nbsp;&nbsp;209</td>
                  <td>&nbsp;&nbsp;28909</td>
                  <td>&nbsp;&nbsp;2440</td>
                  <td>&nbsp;&nbsp;2388</td>
                  <td>
                    &nbsp;&nbsp;
                    <span
                      style="color: rgb(10, 254, 173)"
                      v-if="item.pret < 0 ? true : false"
                      >{{ item.pret }}%</span
                    >
                    <span style="color: #ff0228" v-else>+{{ item.pret }}%</span>
                  </td>
                  <td>&nbsp;&nbsp;2018-09-25 15:00</td>
                </tr>
              </table>
              <!--顶下去的盒子-->
              <div>
                <!--用来放分页-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AccuIncomeList",
    data() {
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
            id: 3,
            name: "",
            pret: -0.73,
          },
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
          {
            id: 2,
            name: 1,
            pret: 0.43,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped></style>
  