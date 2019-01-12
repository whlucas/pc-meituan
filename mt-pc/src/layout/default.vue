<template>
        <el-container class="layout-default">
            <el-header>
                <my-header />
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
</template>

<script>
    // 因为H5里面本来就有一个标签叫header,所以这里避免冲突起个别的名字
    import MyHeader from '@/components/header/index';

    export default {
        components: {
            MyHeader
        }
    }
</script>

<style lang="scss">
    /*scss中引入其他文件的语法*/
    @import '@/assets/css/public/layout.scss';
</style>
