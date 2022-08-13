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
                  >我的收益</span
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
              width: 350px;
              margin-left: 30px;
            "
          >
            <div style="margin-left: 0px; margin-top: 20px">
              <span style="color: #a4b1c1">下面是您的收益情况</span>
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
          <!--第一个图，日收益，上下柱状图-->
          <!--第二个图，累计收益折线，  -->
          <!--基金仓位占比图-使用仓位金额，占比,仓位金额，三个元素用占比最高的来排序-->
          <!--未采纳-->
          <div style="height: 10px"></div>
          <!--画布背景-->
          <div
            style="
              background-color: aliceblue;
              height: 94%;
              width: 96%;
              margin: 22px;
            "
          >
            <!--柱状图，基金：（①计划金额、②使用仓位、③累计收益、④持有收益[四个颜色]）-->
            <di id="sizhu"
              style="width: 100%; height: 50%; "
              
            ></di>
            <!--柱状图，日收益情况。（时间、昨日收益）。-->
            <div id="sx"
              style="width: 100%; height: 50%; background-color: #a4b1c1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "AccuIncome",
  setup() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    
  },
};
</script>

<style scoped></style>
