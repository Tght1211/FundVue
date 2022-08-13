<template>
  <div
    style="
      width: 100%;
      height: 170vh;
      border-left: 1px solid #296dbb;
      display: flex;
      background-color: #2b2b2b;
    "
  >
    <!-- 左右margin：1% -->
    <div
      style="
        width: 100%;
        margin-left: 2%;
        margin-right: 3%;
        background-color: #2b2b2b;
      "
    >
      <!-- 头部 -->
      <div
        style="
          width: 99%;
          height: 32%;
          background-color: #3c3f41;
          margin-left: 0.5%;
          margin-top: 1.5%;
          border-radius: 20px;
        "
      >
        <!-- 头像层 -->
        <div style="display: flex">
          <!-- 头像 -->
          <div
            style="
              width: 150px;
              height: 150px;
              background-color: white;
              margin: 20px;
              border-radius: 50%;
            "
          >
            <!-- <el-avatar shape="square" :size="100" :fit="cover" :src="form.userImgUrl" /> -->
            <img
              v-if="user.userImgUrl"
              :src="user.userImgUrl"
              style="width: 100%; height: 100%; border-radius: 50%"
            />
          </div>
          <!-- 昵称\性别 -->
          <div
            style="
              width: 400px;
              height: 150px;
              background-color: peachpuff;
              margin: 20px;
            "
          >
            <div style="height: 50%; background-color: #3c3f41">
              <span style="font-size: 40px; color: #50a0ff">{{
                user.userNickName
              }}</span>
            </div>
            <div style="height: 50%; background-color: #3c3f41">
              <span
                style="font-size: 40px; color: #50a0ff"
                v-if="user.userSex == 1"
                >♂&nbsp;&nbsp;🧑</span
              >
              <span
                style="font-size: 40px; color: #fb63ba"
                v-if="user.userSex == 0"
                >♀&nbsp;&nbsp;👧</span
              >
              <span
                style="font-size: 40px; color: #c1c1c1"
                v-if="user.userSex == null"
                >未知</span
              >
            </div>
          </div>
          <!-- 达人热度 -->
          <div
            style="
              width: 300px;
              height: 150px;
              background-color: peachpuff;
              margin: 20px;
              text-align: center;
            "
          >
            <div
              style="
                height: 37%;
                padding-top: 15px;
                background-color: #3c3f41;
                border-bottom: 1px solid #c1c1c1;
              "
            >
              <span style="font-size: 25px; color: #c1c1c1">达人热度</span>
            </div>
            <div
              style="height: 43%; background-color: #3c3f41; padding-top: 15px"
            >
              <span style="font-size: 40px; color: #50a0ff">2039</span
              ><span style="font-size: 40px; color: #f23939"
                >&nbsp;&nbsp;HOT</span
              >
            </div>
          </div>
          <!-- 编辑个人资料 -->
          <div
            style="
              width: 250px;
              height: 150px;
              background-color: #3c3f41;
              margin: 20px;
            "
          >
            <!-- 顶下去 -->
            <div style="height: 30%"></div>
            <div style="height: 30%">
              <button
                style="
                  height: 100%;
                  width: 70%;
                  margin-left: 30%;
                  background-color: #50a0ff;
                  border-radius: 10px;
                  border: 0px;
                "
                @click="BasicEdit"
              >
                <span style="font-size: 20px; color: white">编辑个人资料</span>
              </button>

              
              <el-dialog
                title="编辑个人信息"
                v-model="dialogVisible"
                width="40%"
              >
                <el-form
                  ref="form"
                  :model="form"
                  label-width="120px"
                  :rules="rules"
                  ><el-form-item label="userId" style="display: none">
                    <el-input
                      v-model="form.userId"
                      style="width: 80%"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="昵称" prop="userNickName">
                    <el-input
                      v-model="form.userNickName"
                      style="width: 80%"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="性别" prop="author">
                    <div>
                      <el-radio v-model="form.userSex" label="1" size="large"
                        >男&nbsp;🧑♂</el-radio
                      >
                      <el-radio v-model="form.userSex" label="0" size="large"
                        >女&nbsp;👧♀</el-radio
                      >
                    </div>
                  </el-form-item>

                  <el-form-item label="头像">
                    <!-- <el-upload
                      :action="FilesUploadUrl"
                      :on-success="filesUploadSuccess"
                      ref="upload"
                    >
                      <el-button type="primary">点击上传</el-button>
                    </el-upload>  -->
                    <el-upload
                      class="avatar-uploader"
                      action="http://127.0.0.1:5050/start/imageUrl"
                      :show-file-list="false"
                      :on-success="filesUploadSuccess"
                    >
                      <img
                        v-if="form.userImgUrl"
                        :src="form.userImgUrl"
                        class="avatar"
                      />
                     
                      <el-icon v-else class="avatar-uploader-icon"
                        ><Plus
                      /></el-icon>
                      
                    </el-upload>
                  </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="save">确 定</el-button>
                  </span>
                </template>
              </el-dialog>
            </div>
          </div>
        </div>
        <!-- 头像下面层 -->
        <div style="height: 140px; background-color: #3c3f41; margin: 20px">
          <div style="padding-top: 15px">
            <!-- 五个按钮盒子 -->
            <div style="display: flex">
              <!-- 第一个按钮盒子 -->
              <div
                style="
                  height: 120px;
                  width: 240px;
                  background-color: #3c3f41;
                  border-right: 1px solid #ff0090;
                "
              >
                <div style="height: 30%; margin-top: 10px; text-align: center">
                  <span style="font-size: 25px; color: #c1c1c1">粉丝</span
                  ><br />
                </div>
                <div style="margin-top: 10px; text-align: center">
                  <button
                    style="
                      height: 60px;
                      width: 140px;
                      background-color: #3c3f41;
                      border: 0px;
                    "
                  >
                    <span style="font-size: 25px; color: #50a0ff">200</span>
                  </button>
                </div>
              </div>
              <!-- 第二个按钮盒子 -->
              <div
                style="
                  height: 120px;
                  width: 240px;
                  background-color: #3c3f41;
                  border-right: 1px solid #ff0090;
                "
              >
                <div style="height: 30%; margin-top: 10px; text-align: center">
                  <span style="font-size: 25px; color: #c1c1c1">关注</span
                  ><br />
                </div>
                <div style="margin-top: 10px; text-align: center">
                  <button
                    style="
                      height: 60px;
                      width: 140px;
                      background-color: #3c3f41;
                      border: 0px;
                    "
                  >
                    <span style="font-size: 25px; color: #50a0ff">20</span>
                  </button>
                </div>
              </div>
              <!-- 第三个按钮盒子 -->
              <div
                style="
                  height: 120px;
                  width: 240px;
                  background-color: #3c3f41;
                  border-right: 1px solid #ff0090;
                "
              >
                <div style="height: 30%; margin-top: 10px; text-align: center">
                  <span style="font-size: 25px; color: #c1c1c1">帖子</span
                  ><br />
                </div>
                <div style="margin-top: 10px; text-align: center">
                  <button
                    style="
                      height: 60px;
                      width: 140px;
                      background-color: #3c3f41;
                      border: 0px;
                    "
                    @click="goPage(1)"
                  >
                    <span style="font-size: 25px; color: #50a0ff">18</span>
                  </button>
                </div>
              </div>
              <!-- 第四个按钮盒子 -->
              <div
                style="
                  height: 120px;
                  width: 240px;
                  background-color: #3c3f41;
                  border-right: 1px solid #ff0090;
                "
              >
                <div style="height: 30%; margin-top: 10px; text-align: center">
                  <span style="font-size: 25px; color: #c1c1c1">评论</span
                  ><br />
                </div>
                <div style="margin-top: 10px; text-align: center">
                  <button
                    style="
                      height: 60px;
                      width: 140px;
                      background-color: #3c3f41;
                      border: 0px;
                    "
                    @click="goPage(2)"
                  >
                    <span style="font-size: 25px; color: #50a0ff">118</span>
                  </button>
                </div>
              </div>
              <!-- 第五个按钮盒子 -->
              <div
                style="height: 120px; width: 240px; background-color: #3c3f41"
              >
                <div style="height: 30%; margin-top: 10px; text-align: center">
                  <span style="font-size: 25px; color: #c1c1c1">收藏</span
                  ><br />
                </div>
                <div style="margin-top: 10px; text-align: center">
                  <button
                    style="
                      height: 60px;
                      width: 140px;
                      background-color: #3c3f41;
                      border: 0px;
                    "
                    @click="goPage(3)"
                  >
                    <span style="font-size: 25px; color: #50a0ff">39</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 中间 -->
      <div
        style="
          width: 99%;
          height: 60%;
          background-color: #2b2b2b;
          margin-left: 0.5%;
          margin-top: 1.5%;
          border-radius: 20px;
          display: flex;
        "
      >
        <!-- 放组件，上面五个按钮点哪个显示哪个的信息，默认显示我的帖子 -->

        <div v-if="page == 1">
          <!--帖子-->
          <PostAndRight />
        </div>
        <div v-if="page == 2">
          <!--评论-->
          <ComAndRight />
        </div>
        <div v-if="page == 3">
          <!--收藏-->
          <FavAndRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";

import ComAndRight from "@/components/community/ComAndRight";
import FavAndRight from "@/components/community/FavAndRight";
import PostAndRight from "@/components/community/PostAndRight";
import { Plus } from "@element-plus/icons-vue";

export default {
  name: "BasicInfo",
  data() {
    return {
      id: 0,
      page: 1,
      // 先去登录中拿，修改后再更新user。
      user: {},
    //  user: {},
      NickName: "",
      form: {},
      form1: {},
      dialogVisible: false,
      FilesUploadUrl: "http://127.0.0.1:10010/start/imageUrl",
    };
  },
  components: { PostAndRight, FavAndRight, ComAndRight, Plus },
  methods: {
    load() {
      request
        .get("/user/my/select", {
          params: {
            id: this.user.userId,
          },
        })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("user", JSON.stringify(res.data))   // 在load中更新user。
        //  this.user = res.data;
   
        });
    },
    filesUploadSuccess(res) {
      this.form.userImgUrl = "";
      console.log(res);
      this.form.userImgUrl = res.data;

    },
    save() {
      this.$refs["form"].validate((res) => {
        if (res) {
          if (this.form) {
            //更新
            request.post("/user/my/update", this.form).then((res) => {
              console.log(res);
              if (res.code == "0") {
                this.$message({
                  type: "success",
                  message: "更新成功,请刷新页面",
                });
              } else {
                this.$message({
                  type: "error",
                  message: res.msg,
                });
              }
              this.dialogVisible = false;
              this.load();
            });  
          }
        }
      });
    },
    getEmailCode() {
      console.log(this.form.userEmail + "1");
      if (this.form.userEmail == null || this.form.userEmail) {
        this.$message({
          type: "error",
          message: "请输入注册账号邮箱！",
        });
        return;
      }
      console.log(this.form.account + "2");
      request
        .get("/user/start/sendCode", {
          params: {
            account: this.form.account,
          },
        })
        .then((res) => {
          console.log(res.msg);
          console.log(res.code);
          console.log(res.data);
          if (res.code == "0") {
            this.$message({
              type: "success",
              message: res.msg,
            });
          }
        });
    },

    goPage(page) {
      console.log(this.page);
      this.page = page;
      if (this.tabArr.indexOf(page) < 0) {
        this.tabArr.push(page);
      }
    },
    BasicEdit() {
      //  this.form = this.user;
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["upload"].clearFiles(); // 清楚历史文件列表
      });
      console.log(this.form.userNickName);
      this.form = JSON.parse(sessionStorage.getItem("user"));
    },
  },
  created() {
    this.load();
    if (!sessionStorage.getItem("access")) {
      router.push("/login");
    } else {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      this.load();
    }
    console.log(sessionStorage.getItem("user"));
  },
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.el-dialog__title {
            color: #50a0ff;
        }
</style>
