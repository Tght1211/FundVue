<template>
  <div>
    <div
      style="
        margin-left: 30px;
        border-left: 5px solid #50a0ff;
        font-size: 20px;
        color: #c1c1c1;
      "
    >
      <span style="font-size: 20px; margin-left: 10px; margin-right: 400px"
        >点击评论内容，可查看详情</span
      ><el-button
        style="
          font-size: 15px;
          color: #50a0ff;
          background-color: #3c3f41;
          border: 0px;
        "
        @click="goPage(1)"
        >评论
      </el-button>
      <el-button
        style="
          font-size: 15px;
          color: #50a0ff;
          background-color: #3c3f41;
          border: 0px;
        "
        @click="goPage(2)"
        >回复
      </el-button>
    </div>
    <div style="width: 100%">
      <Comment style="float: left" v-if="page==1"/>
      <PostCom style="float: left" v-if="page==1"/>
      <replay style="float: left" v-if="page==2"/>
      <PostReplay style="float: left" v-if="page==2"/>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/community/Comment";
import PostCom from "@/components/community/PostCom";
import replay from "@/components/community/replay";
import PostReplay from "@/components/community/PostReplay";

export default {
  name: "ComAndRight",
  components: {
    Comment,
    PostCom,
    replay,
    PostReplay
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    goPage(page) {
      console.log(this.page);
      this.page = page;
      if(this.tabArr.indexOf(page) < 0){
				this.tabArr.push(page);
			}
    },
  },
};
</script>

<style scoped></style>
