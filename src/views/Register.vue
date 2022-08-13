<template>
  <!--
      <div style="width: 100%; height: 100vh; background-color: darkcyan; overflow: hidden">
          <div style="width: 400px; margin: 150px auto">
              <div style="color: #cccccc; font-size: 30px; text-align: center; padding: 30px">欢迎注册</div>
              <el-form ref="form" :model="form" size="normal" :rules="rules">
                  <el-form-item prop="username">
                        <el-input :prefix-icon="Avatar" v-model="form.username"><el-icon><avatar /></el-icon></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                      <el-input :prefix-icon="Lock" v-model="form.password" show-password><el-icon><lock /></el-icon></el-input>
                  </el-form-item>
                  <el-form-item prop="confirm">
                      <el-input :prefix-icon="Lock" v-model="form.confirm" show-password><el-icon><lock /></el-icon></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button style="width: 100%" type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
                  </el-form-item>
              </el-form>
          </div>
      </div>
  -->


  <div class="back">
    <div class="box">
      <div class="wrap">
        <h1>养基助手</h1>
        <el-form ref="form" :model="form" size="normal" :rules="rules">
          <el-form-item prop="nickName">
            <el-input class="el-inp" size="large" :prefix-icon="Paperclip" v-model="form.nickName" placeholder="请输入用户昵称">
              <el-icon>
                <paperclip/>
              </el-icon>
            </el-input>
          </el-form-item>
          <el-form-item prop="account">
            <el-input class="el-inp" size="large" :prefix-icon="Avatar" v-model="form.account" placeholder="请输入手机号或邮箱">
              <el-icon>
                <avatar/>
              </el-icon>
            </el-input>
          </el-form-item>
          <el-form-item prop="userpswd">
            <el-input class="el-inp" size="large" :prefix-icon="Lock" v-model="form.userpswd" show-password placeholder="请输入你的密码">
              <el-icon>
                <lock/>
              </el-icon>
            </el-input>
          </el-form-item>
          <el-form-item prop="confirm">
            <el-input class="el-inp" size="large" :prefix-icon="Stamp" v-model="form.confirm" show-password placeholder="请再次输入密码">
              <el-icon><stamp /></el-icon>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input class="in-yan" :prefix-icon="Check" size="large" v-model="form.code" placeholder="验证码">
              <el-icon><check /></el-icon>
            </el-input>
            <el-button class="bu-yan" type="primary" @click="getCode">验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="el-but"  type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

import {
  Avatar,
  Lock,
  Paperclip,
  Stamp,
  Check,
} from '@element-plus/icons-vue';

export default {
  name: "Register",
  data() {
    return {
      account: '',
      form: {},
      Avatar,
      Lock,
      Paperclip,
      Stamp,
      Check,
      rules: {
        nickName: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur",
          },
        ],
        account: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        userpswd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        confirm: [
          {
            required: true,
            message: "请输再次入密码",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    }
  },
  methods: {
    getCode() {
      console.log(this.form.account+"1")
      if(this.form.account == null ||this.form.account == ''){
        this.$message({
          type: "error",
          message: "请输入注册账号（手机OR邮箱）！"
        })
        return
      }
      console.log(this.form.account+"2")
      request.get("/start/sendCode", {
        params: {
          account: this.form.account,
        }
      }).then(res => {
        console.log(res.msg)
        console.log(res.code)
        console.log(res.data)
        if (res.code == '0') {
          this.$message({
            type: "success",
            message: res.msg
          })
        }else{
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
    },

    register() {
      if (this.form.userpswd != this.form.confirm) {
        this.$message({
          type: "error",
          message: "俩次密码不一致！"
        })
        return
      }
      this.$refs['form'].validate((valid) => {
        if (valid) {
          request.post("/start/reg", this.form).then(res => {
            console.log(res)
            if (res.code == '0') {
              this.$message({
                type: "success",
                message: res.msg
              })
              sessionStorage.setItem("user", JSON.stringify(res.data)) // 缓存用户信息
              sessionStorage.setItem("access", JSON.stringify(res.data))
              this.$router.push('/')  // 登录成功之后进行页面的跳转，跳转到主页
              sessionStorage.removeItem("tokenLR")
             // this.$router.push('/login')  // 登录成功之后进行页面的跳转，跳转到主页
            } else {
              console.log(res)
              this.$message({
                type: "error",
                message: res.msg
              })
            }
          })
        }
      })

    }
  },
  created() {
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("access")
    sessionStorage.setItem("tokenLR", "yjzs") 
  },
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
  height: 560px;
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
  height: 480px;
}

h1 {
  color: white;
  margin-bottom: 30px;
  text-align: center;
}

/*input, button {
  border: none;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
}

button {
  background-color: #339fe7;
  font-size: 20px;
  color: white;
}*/

.el-inp, .el-but {
  border: none;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 5px;
  line-height: 40px
}

.el-inp {
  font-size: large;
}
.el-but {
  background-color: #339fe7;
  font-size: 20px;
  color: white;
  height: 40px;
}

span {
  color: white;

}

a {
  color: #339fe7;
  margin: 5px;
}


.in-yan {
  width: 60%;
  font-size: large;
  border: none;
  margin-bottom: 20px;
  border-radius: 5px;
  line-height: 40px
}

.bu-yan {
  width: 39%;
  float: right;
  margin-left: 1%;
  background-color: #339fe7;
  font-size: 20px;
  color: white;
  border: none;
  margin-bottom: 20px;
  height: 40px;
  border-radius: 5px;
}
</style>