<template>
    <!--这个页面是汇总我头部页面的地方-->
    <div class="m-header">
        <!--整个两行,用elementUI来整,一个el-row代表一行-->
        <el-row>
            <!--当标签里面没有内容的时候,最好使用单标签-->
            <topBar />
        </el-row>
        <el-row>
            <searchBar />
        </el-row>
    </div>
</template>

<script>
    // 引入模块
    import topBar from './topBar';
    import searchBar from './searchBar';

    export default {
        components: {
            topBar,
            searchBar,
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss";
</style>
