<template>
  <div>
    <div style="margin-left: 30px; border-left: 5px solid #50a0ff">
      <span style="font-size: 20px; margin-left: 10px; color: #c1c1c1"
        >点击⭐，可以取消收藏</span
      >
    </div>
    <div style="width: 100%">
      <Favorite style="float: left" />
      <PostFavRight style="float: left" />
    </div>
  </div>
</template>

<script>
import Favorite from "@/components/community/Favorite";
import PostFavRight from "@/components/community/PostFavRight";

export default {
  name: "FavAndRight",
  components: {
    Favorite,
    PostFavRight,
  },
};
</script>

<style scoped></style>
