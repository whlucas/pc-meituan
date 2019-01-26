<template>
    <div class="page-changeCity">
        <el-row>
            <province></province>
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="recentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
    import Province from '@/components/changeCity/province'
    import Hot from '@/components/changeCity/hot'
    import Category from '@/components/changeCity/category'
    export default {
        data() {
            return{
                hotList: ["哈尔滨","克拉玛依","乌鲁木齐","喀什","牡丹江","鹤岗"],
                recentList: ["哈尔滨","克拉玛依","乌鲁木齐","喀什","牡丹江","鹤岗"],
            }
        },
        components:{
            Province,
            Hot,
            Category
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/changecity/iselect.scss";
</style>
