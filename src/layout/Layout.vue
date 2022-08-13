<template>
    <div>
        <!--    头部-->
        <Header/>
        <!--    主体-->
        <div style="display: flex">
            <!--      侧边栏-->
            <Aside/>
            <!--      内容区域-->
            <router-view style="flex: 1"/>
<!--            <Right/>-->
        </div>
    </div>
</template>

<script>

    import Header from "../components/Header";
    import Aside from "../components/Aside";
    import Right from "@/components/Right";

    export default{
        name:"Layout",
        components:{
            Header,
            Aside,
            Right,
        }
    }
</script>

<style scoped>

</style>