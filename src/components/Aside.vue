<template>
  <div class="back">
    <el-menu
      router
      active-text-color="#ffd04b"
      background-color="#3c3f41"
      class="el-menu-vertical-demo"
      :default-active="path"
      text-color="#50a0ff"
      unique-opened="true"
      style="border-right: 3px solid #ffd04b"
    >
      <el-menu-item index="/main">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <goods />
          </el-icon>
          <span>选基</span>
        </template>
        <el-menu-item index="/chooseFund">挑选基金</el-menu-item>
        <el-menu-item index="/myOptional">我的自选</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <house />
          </el-icon>
          <span>基场</span>
        </template>
        <el-menu-item index="/myFundField">我的基场</el-menu-item>
        <el-menu-item index="/accuIncome">我的收益</el-menu-item>
        <el-menu-item index="/operatingData">我的操作</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <coffee />
          </el-icon>
          <span>社区</span>
        </template>
        <el-menu-item index="/community">浏览社区</el-menu-item>
        <el-menu-item index="/comToShare">发布帖子</el-menu-item>
        <el-menu-item index="/myComment">消息中心</el-menu-item>
        <el-menu-item index="/myPosts">我的帖子</el-menu-item>
        <el-menu-item index="/myFavorite">我的收藏</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon>
            <list />
          </el-icon>
          <span>榜单</span>
        </template>
        <el-menu-item index="/hotFundList">热门基金排行</el-menu-item>
        <el-menu-item index="/hotUserList">人气达人排行</el-menu-item>
        <el-menu-item index="/tomIncomeList">昨日收益排行</el-menu-item>
        <el-menu-item index="/accuIncomeList">累计收益排行</el-menu-item>
        <el-menu-item index="/accuReturnRate">累计收益率榜</el-menu-item>
        <el-menu-item index="/accuLossRate">累计亏损率榜</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon>
            <setting />
          </el-icon>
          <span>我的</span>
        </template>
        <el-menu-item index="/basicInfo">基本信息</el-menu-item>
        <el-menu-item index="/investInfo">投资信息</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import {
  Location,
  Setting,
  List,
  Goods,
  House,
  Coffee,
} from "@element-plus/icons-vue";

import request from "../utils/request";

export default {
  name: "Aside",
  components: {
    Location,
    Setting,
    List,
    Goods,
    House,
    Coffee,
  },
  data() {
    return {
      user: {},
      path: this.$route.path, //设置默认高亮的菜单
    };
  },
  created() {
    if (!sessionStorage.getItem("user")) {
      console.log("this.NickName4");
      this.$router.push("/login");
    } else {
      let userStr = sessionStorage.getItem("user") || {};
      this.user = JSON.parse(userStr);
      console.log("this.NickName5");
      // 请求服务器,确认当前登录用户的合法信息
      // request.get("/user/" + this.user.id).then((res) => {
      //   this.user = res.data;
      // });
    }
  },
};
</script>

<style scoped>

.back {
  background-color: #2b2b2b;
  width: 13%;
  height: 170vh;
  /*background-color: darkcyan; 绿色*/
  overflow: hidden;
  /*border-right: 1px solid #296dbb;*/
}

.el_two {
  background-color: #3e3f41;
}
</style>
