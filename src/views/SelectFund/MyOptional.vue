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
      <div style="height: 25vh; background-color: #2b2b2b">
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
          <div style="height: 10%"></div>
          <div style="height: 50%; width: 95%; margin-left: 2.5%">
            <div style="width: 100%; height: 40%; display: flex">
              <div style="width: 460px">
                <span style="font-size: 50px; color: #50a0ff; margin-left: 0px"
                  >我的自选</span
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
              <span style="color: #a4b1c1">下面显示你添加到自选的基金</span>
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
              <th style="width: 100px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;基金代码
              </th>
              <th style="width: 300px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;基金名字<span
                  style="color: #c1c1c1; font-size: 10px"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（点击名称可查看详情）</span
                >
              </th>
              <th style="width: 120px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;净值日期
              </th>
              <th style="width: 100px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;当日净值
              </th>
              <th style="width: 100px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;估算净值
              </th>
              <th style="width: 100px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;估算涨跌 %
              </th>
              <th style="width: 150px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;估值时间
              </th>
              <th style="width: 120px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;添加后收益
              </th>
              <th style="width: 120px; border-left: 2px solid #ff0090">
                &nbsp;&nbsp;自选操作
              </th>
              <!--表格内容-->
              <tr
                v-for="(item, index) in list"
                :key="item.fundId"
                style="color: #c1c1c1"
              >
                <td style="height: 50px">&nbsp;&nbsp;{{ item.fundCode }}</td>
                <td>
                  &nbsp;&nbsp;{{ item.name
                  }}<span
                    style="color: #50a0ff"
                    v-if="item.chiY == 1 ? true : false"
                    >&nbsp;&nbsp;持有</span
                  >
                </td>
                <td>&nbsp;&nbsp;{{ item.jzrq }}</td>
                <td>&nbsp;&nbsp;{{ item.dwjz }}</td>
                <td>&nbsp;&nbsp;{{ item.gsz }}</td>
                <td>
                  &nbsp;&nbsp;
                  <span
                    style="color: rgb(10, 254, 173)"
                    v-if="item.gszzl < 0 ? true : false"
                    >{{ item.gszzl }}%</span
                  >
                  <span style="color: #ff0228" v-else>+{{ item.gszzl }}%</span>
                </td>
                <td>&nbsp;&nbsp;{{ item.gztime }}</td>
                <!--添加后收益-->
                <td>
                  &nbsp;&nbsp;
                  <span
                    style="color: rgb(10, 254, 173)"
                    v-if="item.optProfitProp < 0 ? true : false"
                    >{{ item.pret }}%<span
                      style="font-size: 10px; color: #c1c1c1"
                      >&nbsp;&nbsp;&nbsp;{{ item.day }}天</span
                    ></span
                  >
                  <span style="color: #ff0228" v-else
                    >+{{ item.optProfitProp }}%<span
                      style="font-size: 10px; color: #c1c1c1"
                      >&nbsp;&nbsp;{{ item.day }}天</span
                    ></span
                  >
                </td>
                <td>
                  &nbsp;&nbsp;
                  <!--初步考虑按钮就去详情操作页面吧-->
                  <button
                    @click="get(index)"
                    style="
                      border-radius: 10px;
                      width: 80px;
                      height: 28px;
                      background-color: #ffeb0c;
                      color: #000000;
                      border: 0px;
                    "
                    v-if="item.zhiX == 1 && item.chiY == 1 ? true : false"
                  >
                    持有基金
                  </button>
                  <button
                    @click="remove(index)"
                    style="
                      border-radius: 10px;
                      width: 80px;
                      height: 25px;
                      background-color: #ff0090;
                      color: #ffffff;
                      border: 0px;
                    "
                    v-if="item.zhiX == 1 && item.chiY == 0 ? true : false"
                  >
                    取消自选
                  </button>
                  <!--如果持有，则显示 -- 查看基场 --按钮-->
                </td>
              </tr>
            </table>
            <!--顶下去的盒子-->
            <div
              style="
                margin-top: 10px;
                margin: 0 auto;

                width: 100%;
              "
            >
              <div style="margin: 0 auto">
                <!--用来放分页,只改total、currentPage1-->
                <el-pagination
                  v-model:currentPage="currentPage"
                  :page-size="pageSize"
                  :small="small"
                  :disabled="disabled"
                  background
                  layout="total, prev, pager, next"
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 一定要记得导入import
import request from "../../utils/request";

export default {
  name: "MyOptional",
  data() {
    return {
      //JSON.parse(sessionStorage.getItem("listData2").records)
      list: [],
      // 先去登录中拿，修改后再更新user。
      user: JSON.parse(sessionStorage.getItem("user")),
      strLike: "",
      userId: "",
      fundCode: "",
      //分页部分
      currentPage: 1,
      pageSize: 16,
      total: 100,
    };
  },
  methods: {
    // handleSizeChange(pageSize) {
    //   // 改变当前每页的个数触发，简化，不用了
    //   this.pageSize = pageSize;
    //   this.load();
    // },
    handleCurrentChange(pageNum) {
      // 改变当前页码触发
      this.currentPage = pageNum;
      this.load();
      this.$message({
        type: "success",
        message: "第" + pageNum + "页",
      });
    },
    remove(index) {
      // 点击按钮，返回基金代码
      this.fundCode = this.list[index].fundCode;
      this.userId = this.user.userId;
      console.log(this.fundCode);
      request
        .delete("/main/optional/deleteMy/" + this.fundCode + "/" + this.userId)
        .then((res) => {
          if (res.data != null) {
            this.$message({
              type: "success",
              message: res.msg,
            });
            // this.list = res.data;
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.load();
    },
    load() {
      console.log(this.user.userId);
      console.log(this.currentPage);
      console.log(this.pageSize);
      request
        .get("/main/optional/selectMy", {
          params: {
            // 这些参数不用去return
            userId: this.user.userId,
            pageNum: this.currentPage,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          if (res.data != null) {
            sessionStorage.removeItem("listData2");
            sessionStorage.setItem("listData2", JSON.stringify(res.data));

            this.list = res.data.records;
            this.total = res.data.total;
            console.log(this.list);
            console.log("加载基金成功");
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
    },
  },
  created() {
    if (sessionStorage.getItem("listData2") != null) {
      this.list = JSON.parse(sessionStorage.getItem("listData2")).records;
      this.total = JSON.parse(sessionStorage.getItem("listData2")).total;
    }
    this.load();
  },
};
</script>

<style scoped></style>
