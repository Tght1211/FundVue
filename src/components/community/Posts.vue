<template>
  <div style="width: 70%">
    <!-- 中间 -->
    <div style="height: 100vh; background-color: #2b2b2b">
      <div v-if="countLeng == 0">
        <div style="height: 140px"></div>
        <div style="text-align: center">
          <span style="color: #767676; font-size: 40px">暂无帖子</span>
        </div>
      </div>
      <div v-if="countLeng > 2" style="height: 100%; width: 100%">
        <!-- 无限滚动 -->
        <div
          style="height: 100%; width: 100%; margin-top: 10px; overflow: auto"
          v-infinite-scroll="load"
          class="infinite-list"
        >
          <!--滚动内容-->
          <div
            v-for="(item, index) in count"
            :key="index"
            class="infinite-list-item"
            style="
              border-bottom: 2px solid #fdc9e6;
              border-left: 2px solid #fdc9e6;
            "
          >
            <!--- 帖子div v-for="(i,index) in 10" :key="index" -->
            <div
              v-if="item.posStatus == 0"
              style="
                height: 240px;
                width: 100%;
                background-color: #3c3f41;
                border-radius: 30px;
              "
            >
              <!-- 显示内容部分 -->
              <div @click="info(index)">
                <!-- 头部 -->
                <div class="g-index">
                  <div class="m-m1">
                    <div class="m-left">
                      <img v-if="item.userImgUrl" :src="item.userImgUrl" />
                    </div>
                    <div class="m-right">
                      <li style="font-size: 15px">{{ item.userNickName }}</li>
                      <li>
                        <span
                          style="font-size: 15px; color: #50a0ff"
                          v-if="item.userSex == 1"
                          >♂&nbsp;&nbsp;🧑</span
                        >
                        <span
                          style="font-size: 15px; color: #fb63ba"
                          v-if="item.userSex == 0"
                          >♀&nbsp;&nbsp;👧</span
                        >
                        <span
                          style="font-size: 15px; color: #c1c1c1"
                          v-if="item.userSex == 2"
                          >未知</span
                        >
                      </li>
                    </div>
                  </div>
                  <div class="m-m2">{{ item.posTitle }}</div>
                  <div class="m-m3">
                    <li>发布时间:</li>
                    <li>&nbsp;&nbsp;{{ item.posDate }}</li>
                  </div>
                </div>
                <!-- 预览内容 -->
                <div
                  style="
                    height: 86px;
                    width: 90%;
                    margin-left: 5%;
                    color: #a4b1c1;
                    overflow: hidden;
                  "
                >
                  <el-card
                    style="
                      min-height: 180px;
                      background-color: #3c3f41;
                      border: 0px;
                      color: #a4b1c1;
                    "
                  >
                    <div v-html="item.posContent"></div>
                  </el-card>
                </div>
              </div>
              <!-- 操作部分 -->
              <div>
                <!-- 底部按钮 -->
                <div style="height: 20px; margin-top: 25px">
                  <div style="float: right; margin-right: 15%">
                    <!-- 点赞按钮 -->
                    <el-button
                      @click="addLike(index)"
                      v-if="item.isLike == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <el-button
                      @click="remLike(index)"
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #ff0090;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <!-- 点击会展开页面详情，然后提示，在下方评论 -->
                    <el-button
                      @click="info(index)"
                      v-if="item.isCom == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <el-button
                      @click="info(index)"
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #ff0090;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <!-- 点击就会添加到收藏 -->
                    <el-button
                      @click="addCol(index)"
                      v-if="item.isCol == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                    <el-button
                      @click="remCol(index)"
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #ff0090;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div v-else style="height: 100%; width: 100%">
        <!-- 没有滚动 -->
        <!-- 无限滚动 -->
        <div
          style="height: 100%; width: 100%; margin-top: 10px; overflow: auto"
          class="infinite-list"
        >
          <!--滚动内容-->
          <div
            v-for="(item, index) in count"
            :key="index"
            class="infinite-list-item"
            style="
              border-bottom: 2px solid #fdc9e6;
              border-left: 2px solid #fdc9e6;
            "
          >
            <!--- 帖子div v-for="(i,index) in 10" :key="index" -->
            <div
              v-if="item.posStatus == 0"
              style="
                height: 240px;
                width: 100%;
                background-color: #3c3f41;
                border-radius: 30px;
              "
            >
              <!-- 显示内容部分 -->
              <div @click="info(index)">
                <!-- 头部 -->
                <div class="g-index">
                  <div class="m-m1">
                    <div class="m-left">
                      <img v-if="item.userImgUrl" :src="item.userImgUrl" />
                    </div>
                    <div class="m-right">
                      <li style="font-size: 15px">{{ item.userNickName }}</li>
                      <li>
                        <span
                          style="font-size: 15px; color: #50a0ff"
                          v-if="item.userSex == 1"
                          >♂&nbsp;&nbsp;🧑</span
                        >
                        <span
                          style="font-size: 15px; color: #fb63ba"
                          v-if="item.userSex == 0"
                          >♀&nbsp;&nbsp;👧</span
                        >
                        <span
                          style="font-size: 15px; color: #c1c1c1"
                          v-if="item.userSex == 2"
                          >未知</span
                        >
                      </li>
                    </div>
                  </div>
                  <div class="m-m2">{{ item.posTitle }}</div>
                  <div class="m-m3">
                    <li>发布时间:</li>
                    <li>&nbsp;&nbsp;{{ item.posDate }}</li>
                  </div>
                </div>
                <!-- 预览内容 -->
                <div
                  style="
                    height: 86px;
                    width: 90%;
                    margin-left: 5%;
                    color: #a4b1c1;
                    overflow: hidden;
                  "
                >
                  <el-card
                    style="
                      min-height: 180px;
                      background-color: #3c3f41;
                      border: 0px;
                      color: #a4b1c1;
                    "
                  >
                    <div v-html="item.posContent"></div>
                  </el-card>
                </div>
              </div>
              <!-- 操作部分 -->
              <div>
                <!-- 底部按钮 -->
                <div style="height: 20px; margin-top: 25px">
                  <div style="float: right; margin-right: 15%">
                    <!-- 点赞按钮 -->
                    <el-button
                      @click="addLike(index)"
                      v-if="item.isLike == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <el-button
                      @click="remLike(index)"
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #ff0090;
                        border: 0px;
                      "
                      >👍 ({{ item.likeNum }})
                    </el-button>
                    <!-- 点击会展开页面详情，然后提示，在下方评论 -->
                    <el-button
                      @click="replay(index)"
                      v-if="item.isCom == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <el-button
                      @click="info(index)"
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #ff0090;
                        border: 0px;
                      "
                      >💬 ({{ item.comNum }})
                    </el-button>
                    <!-- 点击就会添加到收藏 -->
                    <el-button
                      @click="info(index)"
                      v-if="item.isCol == '0'"
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #50a0ff;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                    <el-button
                      @click="remCol(index)"
                      v-else
                      type="info"
                      plain
                      style="
                        font-size: larger;
                        color: #ffffff;
                        background-color: #ff0090;
                        border: 0px;
                      "
                      >⭐ ({{ item.colNum }})
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------详情------------------------------------------------------ -->
    <!-- 帖子详情 -->
    <el-dialog v-model="dialogVisible" width="70%">
      <!-- 主体 -->
      <div>
        <!-- 帖子内容 -->
        <div style="background-color: #3c3f41; border-radius: 30px">
          <!-- 头部 -->
          <div class="g-index-2">
            <div class="m-m1" style="margin-top: 30px">
              <div class="m-left-2">
                <img v-if="detail.userImgUrl" :src="detail.userImgUrl" />
              </div>
              <div class="m-right">
                <li style="font-size: 15px; margin-top: 20px">
                  {{ detail.userNickName }}
                </li>

                <li>
                  <span
                    style="font-size: 15px; color: #50a0ff"
                    v-if="detail.userSex == 1"
                    >♂&nbsp;&nbsp;🧑</span
                  >
                  <span
                    style="font-size: 15px; color: #fb63ba"
                    v-if="detail.userSex == 0"
                    >♀&nbsp;&nbsp;👧</span
                  >
                  <span
                    style="font-size: 15px; color: #c1c1c1"
                    v-if="detail.userSex == 2"
                    >未知</span
                  >
                </li>
              </div>
            </div>
            <div class="m-m2-2">{{ detail.posTitle }}</div>
            <div class="m-m3-2">
              <li>发布时间:</li>
              <li>&nbsp;&nbsp;{{ detail.posDate }}</li>
            </div>
          </div>
          <!-- ---------------------- ------------------------- -->
          <!-- 预览内容 -->
          <div
            style="
              width: 90%;
              margin-left: 5%;
              color: #a4b1c1;
              /* overflow: hidden; */
            "
          >
            <el-card
              style="
                min-height: 180px;
                background-color: #3c3f41;
                border: 0px;
                color: #a4b1c1;
                font-size: 20px;
              "
              shadow="never"
            >
              <div v-html="detail.posContent"></div>
            </el-card>
          </div>
        </div>
        <div
          style="
            width: 86%;
            margin-left: 7%;
            height: 30px;
            border-bottom: 1px solid #ff6c37;
          "
        >
          发表评论
        </div>
        <div style="height: 30px"></div>
        <!-------------------------------------------------------- 评论内容 ----------------------------------------------------------->
        <div
          style="
            width: 86%;
            margin-left: 7%;
            color: #a4b1c1;
            background-color: #3c3f41;
            font-size: 20px;
          "
        >
          <!-- 评论区域，下面再是评论内容 -->
          <div style="display: flex">
            <div style="width: 80%">
              <el-input
                v-model="addCom.comContent"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="请输入评论内容"
              />
            </div>
            <!-- 发布按钮 -->
            <div style="margin-left: 60px; margin-top: 5px">
              <el-button
                @click="save"
                type="primary"
                size="large"
                style="font-size: 20px"
                round
                >发送💬</el-button
              >
            </div>
          </div>
          <div style="height: 20px"></div>
          <!-- 判断有无评论数据 -->
          <div
            v-if="countCom.length == 0"
            style="text-align: center; width: 100%; height: 60px"
          >
            <span style="color: #767676; font-size: 40px">暂无评论</span>
          </div>
          <!-- 遍历的评论区域 -->
          <div
            v-if="countCom.length != 0"
            v-for="(itcom, ind) in countCom"
            :key="ind"
          >
            <!-- 一条评论的主体，遍历体 -->
            <div style="width: 100%; display: flex">
              <!-- 头像部分，display：flex -->
              <div>
                <!-- 头像div -->
                <div
                  style="
                    width: 80px;
                    margin: 15px;
                    height: 80px;
                    border-radius: 50%;
                    background-color: #50a0ff;
                  "
                >
                  <!-- <img v-if="true" :src="com.userImgUrl" /> -->
                  <img
                    v-if="itcom.userImgUrl"
                    :src="itcom.userImgUrl"
                    style="width: 100%; height: 100%; border-radius: 50%"
                  />
                </div>
              </div>
              <!-- 评论主体内容-->
              <div style="color: #9da6b0; width: 100%">
                <!-- 昵称 + 性别 -->
                <div style="margin-top: 15px; font-size: 15px">
                  {{ itcom.userNickName }}&nbsp;
                  <span
                    style="font-size: 15px; color: #50a0ff"
                    v-if="itcom.userSex == 1"
                    >♂&nbsp;&nbsp;🧑</span
                  >
                  <span
                    style="font-size: 15px; color: #fb63ba"
                    v-if="itcom.userSex == 0"
                    >♀&nbsp;&nbsp;👧</span
                  >
                  <span
                    style="font-size: 15px; color: #c1c1c1"
                    v-if="itcom.userSex == 2"
                    >未知</span
                  >

                  <span
                    style="
                      font-size: 15px;
                      color: #fefafa;
                      background-color: #e94359;
                      margin-left: 10px;
                    "
                    v-if="itcom.userNickName == user.userNickName"
                    >&nbsp;作者&nbsp;</span
                  >
                </div>
                <!-- 内容  20px的字-->
                <div
                  style="
                    margin-top: 10px;
                    margin-bottom: 10px;
                    color: #16a4d0;
                    width: 100%;
                  "
                >
                  {{ itcom.comContent }}
                </div>
                <!-- 时间+回复 -->
                <div
                  style="display: flex; font-size: 15px; margin-bottom: 10px"
                >
                  <div>{{ itcom.comDate }}</div>
                  <div style="width: 20px"></div>
                  <div style="display: flex">
                    <div
                      @click="innerDia2(ind)"
                      style="color: #fc9754; width: 40px; text-align: center"
                    >
                      <!-- 点击有弹窗 -->
                      <span>回复</span>
                    </div>
                    <div style="width: 20px"></div>
                    <div
                      v-if="itcom.userNickName == user.userNickName"
                      @click="remCom(ind)"
                      style="color: #c1c1c1; width: 40px; text-align: center"
                    >
                      <!-- 点击有弹窗 -->
                      <span>删除</span>
                    </div>
                  </div>
                </div>

                <div style="height: 20px"></div>
                <!------------------------ 用户回复用户：用户回复用户的帖子评论 | 用户回复用户的回复评论 俩种 ------------------------>
                <!-- 和回复帖子的评论差不多 -->
                <!-- 遍历子评论的区域 -->
                <div
                  v-for="(itZ, indZ) in countComZ"
                  :key="indZ"
                  v-if="itcom.ztotal > 0"
                >
                  <!-- 一条子评论遍历体 -->
                  <div style="width: 100%; display: flex; font-size: 15px">
                    <!-- 头像部分 -->
                    <div>
                      <!-- 头像div -->
                      <div
                        style="
                          width: 40px;
                          margin: 15px;
                          height: 40px;
                          border-radius: 50%;
                          background-color: #50a0ff;
                        "
                      >
                        <!-- <img v-if="true" :src="com.userImgUrl" /> -->
                        <img
                          v-if="itZ.userImgUrl"
                          :src="itZ.userImgUrl"
                          style="width: 100%; height: 100%; border-radius: 50%"
                        />
                      </div>
                    </div>
                    <!-- 主体部分 -->
                    <div style="width: 100%">
                      <!-- 昵称 + 性别 发表评论自己的-->
                      <div style="margin-top: 15px; font-size: 15px">
                        {{ itZ.userNickName }}&nbsp;
                        <span
                          style="font-size: 15px; color: #50a0ff"
                          v-if="itZ.userSex == 1"
                          >♂&nbsp;&nbsp;🧑</span
                        >
                        <span
                          style="font-size: 15px; color: #fb63ba"
                          v-if="itZ.userSex == 0"
                          >♀&nbsp;&nbsp;👧</span
                        >
                        <span
                          style="font-size: 15px; color: #c1c1c1"
                          v-if="itZ.userSex == 2"
                          >未知</span
                        >

                        <span
                          style="
                            font-size: 15px;
                            color: #fefafa;
                            background-color: #e94359;
                            margin-left: 10px;
                          "
                          v-if="itZ.userNickName == user.userNickName"
                          >&nbsp;作者&nbsp;</span
                        >

                        <!-- -------------------上面是普通上标------------------ -->
                        <!-- -----------------------回复用户回复下标，需找出用户相关信息-------------------------- -->
                        <span
                          style="font-size: 15px; color: #c1c1c1"
                          v-if="itZ.comType != 0 && itZ.comType != 1"
                          >&nbsp;&nbsp;
                          <el-icon class="el-icon--right">
                            <arrow-right /> </el-icon
                          >&nbsp;&nbsp;{{ itZ.userNickName3 }}
                          <span
                            style="font-size: 15px; color: #50a0ff"
                            v-if="itZ.comType != 1 && itZ.userSex3 == 1"
                            >♂&nbsp;&nbsp;🧑</span
                          >
                          <span
                            style="font-size: 15px; color: #fb63ba"
                            v-if="itZ.comType != 1 && itZ.userSex3 == 0"
                            >♀&nbsp;&nbsp;👧</span
                          >
                          <span
                            style="font-size: 15px; color: #c1c1c1"
                            v-if="itZ.comType != 1 && itZ.userSex3 == 2"
                            >未知</span
                          >

                          <span
                            style="
                              font-size: 15px;
                              color: #fefafa;
                              background-color: #e94359;
                              margin-left: 10px;
                            "
                            v-if="itZ.userNickName3 == user.userNickName"
                            >&nbsp;作者&nbsp;</span
                          >
                        </span>
                      </div>
                      <!-- 内容  20px的字-->
                      <div
                        style="
                          margin-top: 10px;
                          margin-bottom: 10px;
                          color: #16a4d0;
                          width: 100%;
                          font-size: 20px;
                        "
                      >
                        {{ itZ.comContent }}
                      </div>
                      <!-- 时间+回复 -->
                      <div
                        style="
                          display: flex;
                          font-size: 15px;
                          margin-bottom: 10px;
                        "
                      >
                        <div>{{ itZ.comDate }}</div>
                        <div style="width: 20px"></div>
                        <div style="display: flex">
                          <div
                            @click="innerDia3(indZ, ind)"
                            style="
                              color: #fc9754;
                              width: 40px;
                              text-align: center;
                            "
                          >
                            <!-- 点击有弹窗 -->
                            <span>回复</span>
                          </div>
                          <div style="width: 20px"></div>
                          <div
                            v-if="itZ.userNickName == user.userNickName"
                            @click="remComZ(indZ)"
                            style="
                              color: #c1c1c1;
                              width: 40px;
                              text-align: center;
                            "
                          >
                            <!-- 点击有弹窗 -->
                            <span>删除</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 上面遍历子评论区域 -->

                <!-- 操作- 展开 n 条回复，被展开后就消失，设置一个变量openMore==false -->
                <div>
                  <div
                    v-if="itcom.ztotal > 0 && countComZ.length == 0"
                    style="font-size: 15px; margin-left: 30px"
                    @click="selectZC(ind)"
                  >
                    <span
                      >——&nbsp;&nbsp;展开 {{ itcom.ztotal }} 条回复
                      <el-icon class="el-icon--right"> <arrow-down /> </el-icon
                    ></span>
                  </div>

                  <div
                    @click="selectZ(ind)"
                    v-if="
                      itcom.ztotal > 0 &&
                      countComZ.length > 0 &&
                      itcom.ztotal > countComZ.length
                    "
                    style="font-size: 15px; margin-left: 30px"
                  >
                    <span
                      >——&nbsp;&nbsp;展开更多回复
                      <el-icon class="el-icon--right"> <arrow-down /> </el-icon
                    ></span>
                  </div>

                  <div
                    v-if="itcom.ztotal > 0 && itcom.ztotal <= countComZ.length"
                    style="font-size: 15px; margin-left: 30px"
                    @click="collZ()"
                  >
                    <span
                      >——&nbsp;&nbsp;收起
                      <el-icon class="el-icon--right"> <arrow-up /> </el-icon
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 上面是遍历主评论区域 -->
          <!-- 操作- 展开 n 条回复，被展开后就消失，设置一个变量openMore==false -->
          <div>
            <div
              v-if="comNumSum > 3 && countCom.length <= 3"
              style="font-size: 15px; margin-left: 30px"
              @click="select()"
            >
              <span
                >——&nbsp;&nbsp;展开 {{ comNumSum - 3 }} 条评论
                <el-icon class="el-icon--right"> <arrow-down /> </el-icon
              ></span>
            </div>

            <div
              @click="selectZ(ind)"
              v-if="comNumSum > countCom.length > 3"
              style="font-size: 15px; margin-left: 30px"
            >
              <span
                >——&nbsp;&nbsp;展开更多回复
                <el-icon class="el-icon--right"> <arrow-down /> </el-icon
              ></span>
            </div>

            <div
              v-if="comNumSum > 3 && comNumSum <= countCom.length"
              style="font-size: 15px; margin-left: 30px"
              @click="coll()"
            >
              <span
                >——&nbsp;&nbsp;收起
                <el-icon class="el-icon--right"> <arrow-up /> </el-icon
              ></span>
            </div>
          </div>
          <!-- 嵌套对话框，打开时的方法要传入回复用户的id。 -->
          <template>
            <el-dialog
              v-model="innerVisible"
              width="50%"
              append-to-body
              draggable
            >
              <!-- 评论区域，下面再是评论内容 -->
              <div style="display: flex">
                <div style="width: 80%">
                  <el-input
                    v-model="addComMin1.comContent"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    type="textarea"
                    placeholder="请输入回复内容"
                  />
                </div>
                <!-- 发布按钮 -->
                <div style="margin-left: 60px; margin-top: 5px">
                  <el-button
                    @click="replay()"
                    type="primary"
                    size="large"
                    style="font-size: 20px"
                    round
                    >发送💬</el-button
                  >
                </div>
              </div>
            </el-dialog>
          </template>

          <!-- 嵌套对话框，打开时的方法要传入回复用户的id。 -->
          <template>
            <el-dialog
              v-model="innerVisible3"
              width="50%"
              append-to-body
              draggable
            >
              <!-- 评论区域，下面再是评论内容 -->
              <div style="display: flex">
                <div style="width: 80%">
                  <el-input
                    v-model="addComMin2.comContent"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    type="textarea"
                    placeholder="请输入回复内容"
                  />
                </div>
                <!-- 发布按钮 -->
                <div style="margin-left: 60px; margin-top: 5px">
                  <el-button
                    @click="replay3()"
                    type="primary"
                    size="large"
                    style="font-size: 20px"
                    round
                    >发送💬</el-button
                  >
                </div>
              </div>
            </el-dialog>
          </template>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "../../utils/request";

export default {
  name: "Posts",
  data() {
    return {
      innerVisible3: false,
      innerVisible: false,
      comZ: [],
      countComZ: [],
      // 用这这个接受
      coms: [],
      // 累加展示主评论
      countCom: [],
      // 发表
      addCom: {},
      // 发表子评论1
      addComMin1: {},
      // 发表子评论2
      addComMin2: {},
      dialogVisible: false,
      countLeng: 0,
      // 总集合
      count: [],
      // 每次请求得到的数据
      list: [],
      // num,请求一次就+1
      num: 1,
      numberZ: 1,
      number: 1,
      user: JSON.parse(sessionStorage.getItem("user")),
      total: 0,
      detail: {},
      size: 3,
      // 关联评论信息
      comcon: {},
      comconZ: {},
      // 帖子的主评论总数
      comNumSum: 0,
    };
  },
  methods: {
    coll() {
      this.number = 1;
      this.select();
    },
    // 收起
    collZ() {
      this.countComZ = [];
    },
    // 回复主评论3
    replay3() {
      if (this.addComMin2.comContent == "") {
        this.$message({
          type: "error",
          message: "评论不能为空",
        });
      } else {
        // 总共传userId、posId、comContent、comConId、comType
        this.addComMin2.userId = JSON.parse(
          sessionStorage.getItem("user")
        ).userId;
        this.addComMin2.comConId = this.comcon.comId;
        this.addComMin2.posId = this.comconZ.posId;
        this.addComMin2.comType = "@" + this.comconZ.userId;
        console.log(this.addComMin2);
        // 发表主评论
        request.post("/com/ment/replay3", this.addComMin2).then((res) => {
          console.log(res);
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "评论成功",
            });
            // 清空输入内容
            this.addComMin2 = {};
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
          // 刷新数据
          this.countCom = [];
          this.countComZ = [];
          this.number = 1;
          this.select();
        });
        this.innerVisible3 = false;
        this.loding();
      }
    },
    // 回复主评论
    replay() {
      if (this.addComMin1.comContent == "") {
        this.$message({
          type: "error",
          message: "评论不能为空",
        });
      } else {
        // 总共传userId、posId、comContent、comConId
        this.addComMin1.userId = JSON.parse(
          sessionStorage.getItem("user")
        ).userId;
        this.addComMin1.comConId = this.comcon.comId;
        this.addComMin1.posId = this.comcon.posId;
        console.log(this.addComMin1);
        // 发表主评论
        request.post("/com/ment/replay", this.addComMin1).then((res) => {
          console.log(res);
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "评论成功",
            });
            // 清空输入内容
            this.addComMin1 = {};
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
          // 刷新数据
          this.countCom = [];
          this.number = 1;
          this.select();
        });
        this.innerVisible = false;
        this.loding();
      }
    },
    // 删除子评
    remComZ(indZ) {
      console.log(this.countComZ[indZ].comId);
      request
        .delete("/com/ment/delete/" + this.countComZ[indZ].comId)
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "删除评论成功",
            });
            this.countCom = [];
            this.countComZ = [];
            this.number = 1;
            this.select();
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.loding();
    },
    // 删除主评
    remCom(ind) {
      console.log(this.countCom[ind].comId);
      request
        .delete("/com/ment/delete/" + this.countCom[ind].comId)
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "删除评论成功",
            });
            this.countCom = [];
            this.number = 1;
            this.select();
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.loding();
    },
    // 查看主评论
    select() {
      request
        .get("/com/ment/select", {
          params: {
            postId: this.detail.posId,
            pageNum: this.number,
            pageSize: 3,
          },
        })
        .then((res) => {
          if (res.code == 0) {
            this.coms = [];
            this.coms = res.data.records;
            this.comNumSum = res.data.total;
            if (this.coms == null) {
              this.countCom = [];
            } else {
              // 累加
              this.countCom = this.countCom.concat(this.coms);
              // 请求一次就触发。
              this.number += 1;
              console.log("在这" + res.data + ":" + this.countCom.length);
              console.log(this.countCom);
            }
          } else {
            this.$message({
              type: "warning",
              message: res.msg,
            });
          }
        });
    },
    // 第一次查看子评论,
    selectZC(ind) {
      request
        .get("/com/ment/selectZ", {
          params: {
            comId: this.countCom[ind].comId,
            pageNum: this.numberZ,
            pageSize: 3,
          },
        })
        .then((res) => {
          if (res.code == 0) {
            this.comZ = [];
            this.comZ = res.data;

            this.countComZ = [];

            // 累加
            this.countComZ = this.countComZ.concat(this.comZ);
            // 点击一次就触发一次
            // this.number +=1;
            console.log("子评论" + res.data + ":" + this.countComZ.length);
            console.log(this.countComZ);
          } else {
            this.$message({
              type: "warning",
              message: res.msg,
            });
          }
        });
    },
    // 查看子评论
    selectZ(ind) {
      request
        .get("/com/ment/selectZ", {
          params: {
            comId: this.countCom[ind].comId,
            pageNum: this.numberZ + 1,
            pageSize: 3,
          },
        })
        .then((res) => {
          if (res.code == 0) {
            this.comZ = [];
            this.comZ = res.data;
            if (this.comZ == null) {
              this.countComZ = [];
            } else {
              // 累加
              this.countComZ = this.countComZ.concat(this.comZ);
              // 点击一次就触发一次
              this.numberZ += 1;
              console.log("子评论" + res.data + ":" + this.countComZ.length);
              console.log(this.countComZ);
            }
          } else {
            this.$message({
              type: "warning",
              message: res.msg,
            });
          }
        });
    },
    save() {
      if (this.addCom.comContent == "") {
        this.$message({
          type: "error",
          message: "评论不能为空",
        });
      } else {
        // 总共传userId、posId、comContent
        this.addCom.userId = JSON.parse(sessionStorage.getItem("user")).userId;
        this.addCom.posId = this.detail.posId;
        console.log(this.addCom);
        // 发表主评论
        request.post("/com/ment/toShare", this.addCom).then((res) => {
          console.log(res);
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "评论成功",
            });
            // 清空输入内容
            this.addCom = {};
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
          // 刷新数据
          console.log(this.addCom);
          this.countCom = [];
          this.number = 1;
          this.select();
        });
        this.loding();
        console.log(this.addCom);
      }
    },
    innerDia3(indZ, ind) {
      this.comcon = {};
      this.comcon = this.countCom[ind];

      this.comconZ = {};
      this.innerVisible3 = true;
      this.comconZ = this.comZ[indZ];
      console.log("--------------------------------------看这里");
      console.log(this.comconZ);
    },
    innerDia2(ind) {
      this.comcon = {};
      this.innerVisible = true;
      this.comcon = this.countCom[ind];
    },
    // 点赞
    addLike(index) {
      // 帖子id
      console.log("点击了点赞");
      console.log(this.count[index].posId);
      request
        .get("/com/like/add", {
          params: {
            // 这些参数不用去return
            userId: JSON.parse(sessionStorage.getItem("user")).userId,
            posId: this.count[index].posId,
          },
        })
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "点赞成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.loding();
    },
    // 取消点赞
    remLike(index) {
      // 帖子id
      console.log("点击了取消点赞");
      console.log(this.count[index].posId);
      request
        .delete(
          "/com/like/delete/" +
            this.count[index].posId +
            "/" +
            JSON.parse(sessionStorage.getItem("user")).userId
        )
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "取消点赞成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.loding();
    },

    // 添加收藏
    addCol(index) {
      // 帖子id
      console.log("点击了收藏");
      console.log(this.count[index].posId);
      request
        .get("/com/collect/add", {
          params: {
            // 这些参数不用去return
            userId: JSON.parse(sessionStorage.getItem("user")).userId,
            posId: this.count[index].posId,
          },
        })
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "添加收藏成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.loding();
    },
    // 取消收藏
    remCol(index) {
      // 帖子id
      console.log("点击了取消收藏");
      console.log(this.count[index].posId);
      request
        .delete(
          "/com/collect/delete/" +
            this.count[index].posId +
            "/" +
            JSON.parse(sessionStorage.getItem("user")).userId
        )
        .then((res) => {
          if (res.code == 0) {
            this.$message({
              type: "success",
              message: "取消收藏成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      this.loding();
    },
    info(index) {
      console.log(
        "========================查看帖子详情======================="
      );
      this.countCom = [];
      this.dialogVisible = true;
      console.log(this.count[index].userImgUrl);
      this.detail.userImgUrl = this.count[index].userImgUrl;
      this.detail.userNickName = this.count[index].userNickName;
      this.detail.userSex = this.count[index].userSex;
      this.detail.posTitle = this.count[index].posTitle;
      this.detail.posDate = this.count[index].posDate;
      this.detail.posContent = this.count[index].posContent;
      this.detail.posId = this.count[index].posId;
      this.detail.userId = this.count[index].userId;
      this.detail.posId = this.count[index].posId;
      this.comNumSum = this.count[index].comNum;
      // 每次打开从新开始
      this.number = 1;
      this.select();
    },
    loding() {
      // 获取滚动条的位置

      this.count = [];
      this.size *= this.num;
      this.num = 1;
      console.log(this.size);
      this.load();
      // 回到滚动条位置
      this.$message({
        type: "success",
        message: "正在刷新页面",
      });
      this.size = 3;
      this.num = 1;
    },
    //加载帖子
    load() {
      request
        .get("/com/posts/selectMy", {
          params: {
            // 这些参数不用去return
            userId: JSON.parse(sessionStorage.getItem("user")).userId,
            pageNum: this.num,
            pageSize: this.size,
          },
        })
        .then((res) => {
          if (res.code == 0 && res.data.records != "") {
            // sessionStorage.removeItem("listData");
            // sessionStorage.setItem("listData", JSON.stringify(res.data));

            this.list = res.data.records;

            this.total = res.data.total;

            sessionStorage.setItem("MyPostsTotal", this.total);

            this.count = this.count.concat(this.list);
            this.num += 1;

            this.countLeng = this.count.length;
          } else {
            this.$message({
              type: "warning",
              message: res.msg,
            });
          }
        });
    },
  },
  created() {
    this.loding();
  },
};
</script>

<style scoped>
infinite-list {
  height: 850px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  background: var(--el-color-primary-light-9);
  margin: 30px;
  color: var(--el-color-primary);
  border-radius: 30px;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 30px;
}

/*滚动条宽 长,滚动条整体部分，其中的属性有width,height,background,border等。*/

::-webkit-scrollbar {
  width: 7px;
}

/*滚动条的滑轨背景颜色,可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/

::-webkit-scrollbar-track {
  background-color: #fdc9e6;

  /*-webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);*/
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);

  border-radius: 5px;
}

/* 滑块颜色 */

::-webkit-scrollbar-thumb {
  /*  background-color: rgba(0, 0, 0, 0.2);*/
  background-color: #fb63ba;

  border-radius: 5px;
}

/*滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/

::-webkit-scrollbar-button {
  /*  background-color: #eee;*/

  display: none;
}

/* 横向滚动条和纵向滚动条相交处尖角的颜色 */

::-webkit-scrollbar-corner {
  background-color: black;
}
</style>

<style>
.el-dialog {
  background-color: #3c3f41;
}

li {
  list-style: none;
}

.g-index {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #3c3f41;
  border-radius: 30px;
}

.g-index-2 {
  display: flex;
  justify-content: space-between;
  height: 130px;
  background-color: #3c3f41;
  border-radius: 30px;
}

.g-index > div:first-child {
  display: flex;
}

.g-index-2 > div:first-child {
  display: flex;
}

.m-left {
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: #50a0ff;
  border-radius: 30px;
}

.m-left-2 {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: #50a0ff;
  border-radius: 50px;
}

.m-left > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.m-left-2 > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.m-right > li:first-child {
  text-align: left;
  color: #a4b1c1;
  font-size: larger;
}

.m-right > li {
  margin: 12px;
}

.m-right > li:last-child > span {
  font-size: 10px;
}

.m-right > li:last-child > span:nth-child(1) {
  color: #50a0ff;
}

.m-right > li:last-child > span:nth-child(2) {
  color: #fb63ba;
  margin: 0 14px 0 14px;
}

.m-right > li:last-child > span:nth-child(3) {
  color: #c1c1c1;
}

.m-m3 {
  display: flex;
  margin: 50px 20px;
  color: #a4b1c1;
}
.m-m3-2 {
  display: flex;
  margin: 100px 20px;
  color: #a4b1c1;
  font-size: 15px;
}

.m-m2 {
  margin-top: 10px;
  font-size: 25px;
  color: #50a0ff;
  margin-left: 110px;
}
/* 帖子详情的都有-2 */
.m-m2-2 {
  margin-top: 0px;
  font-size: 35px;
  color: #50a0ff;
  margin-left: 75px;
}
</style>
