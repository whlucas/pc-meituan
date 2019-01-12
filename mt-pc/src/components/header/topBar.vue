<template>
    <el-row class="m-header m-header-topbar"> <!--一行-->
        <!--两列-->
        <el-col :span="14">
            <geo />
        </el-col> <!--每一列占多大,注意每一行一共是24-->
        <el-col :span="10">
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
    import geo from './geo';
    // h5里面有nav标签,不能起名叫nav
    import MNav from './nav'
    export default {
        components: {
            geo,
            MNav
        }
    }
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss';
</style>
