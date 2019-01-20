<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                container
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 同样h5里面有menu插件,不能直接用menu
    import MMenu from '@/components/index/menu'
    import MLife from '@/components/index/life'
    export default {
        components:{
            MMenu,
            MLife
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";
</style>
