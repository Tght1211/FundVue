<template>
  <div class="back">
    <div class="box">
      <div class="wrap">
        <h1>养基助手</h1>
        <el-input class="el-inp" size="large" :prefix-icon="Avatar" v-model="account" placeholder="请输入手机号或邮箱">
          <el-icon>
            <avatar/>
          </el-icon>
        </el-input>
        <!--        <input type="text" >-->
        <!--        <input type="text" >-->
        <el-input class="el-inp" size="large" :prefix-icon="Lock" v-model="password" show-password placeholder="请输入你的密码">
          <el-icon color="#339fe7" class="no-inherit">
            <lock/>
          </el-icon>
        </el-input>
        <!--        <button>登录</button>-->
        <el-button class="el-but" size="large" type="primary" @click="login">登&nbsp;&nbsp;录</el-button>
        <span><a href="">忘记密码</a></span>
        <span class="register">没有账号？去<a href="../register">注册</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

import {
  Avatar,
  Lock,
} from '@element-plus/icons-vue';

export default {
  name: "Login",
  data() {
    return {
      account: '',
      password: '',
      form: {},
      Avatar,
      Lock,
    }
  },
  created() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("access");
    sessionStorage.clear();
    sessionStorage.setItem("tokenLR", "yjzs") 
  },
  methods: {
    login() {
      /**
       * 参数提交
       */
      request.get("/start/login", {
        params: {
          account: this.account,
          password: this.password,
        }
      }).then(res => {
        console.log(res)
        if (res.data != null) {
          this.$message({
            type: "success",
            message: "登录成功"
          })
          //更改vuex众y_user的信息,不用算了
         // this.$store.commit('setUser',JSON.stringify(res.data))
          sessionStorage.setItem("user", JSON.stringify(res.data)) // 缓存用户信息  ，会变
          sessionStorage.setItem("access", JSON.stringify(res.data))   // 不会变，要留下token
          this.$router.push('/')  // 登录成功之后进行页面的跳转，跳转到主页
          sessionStorage.removeItem("tokenLR")
        } else {
          this.$message({
            type: "error",
            message: "登录失败"
          })
        }
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.back {
  background-color: #2b2b2b;
  width: 100%;
  height: 100vh;
  /*background-color: darkcyan; 绿色*/
  overflow: hidden
}

.box {
  width: 460px;
  height: 400px;
  background-color: #3e3f41;
  border: 2px solid #296dbb;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -280px;
  margin-left: -230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.wrap {
  width: 340px;
  height: 320px;
}

h1 {
  color: white;
  margin-bottom: 30px;
  text-align: center;
}

.el-inp, .el-but {
  border: none;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 5px;
  /*  line-height: 40px*/
}

.el-inp {
  font-size: large;
}

.el-but {
  background-color: #339fe7;
  font-size: 24px;
  color: white;
  border-radius: 5px;
  /*  height: 40px;*/
}

span {
  color: white;
}

a {
  color: #339fe7;
  margin: 5px;
}

.register {
  float: right;
}
</style>
