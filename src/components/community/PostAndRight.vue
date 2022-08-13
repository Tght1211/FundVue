<template>
  <div>
    <div style="margin-left: 30px; border-left: 5px solid #50a0ff">
      <span style="font-size: 20px; margin-left: 10px; color: #c1c1c1"
        >点击帖子，可对帖子进行编辑</span
      >
    </div>
    <div style="width: 100%">
      <Posts style="float: left" />
      <SmRight style="float: left" />
    </div>
  </div>
</template>

<script>
import Posts from "@/components/community/Posts";
import SmRight from "@/components/SmRight";

export default {
  name: "PostAndRight",
  components: {
    Posts,
    SmRight,
  },
};
</script>

<style scoped></style>
