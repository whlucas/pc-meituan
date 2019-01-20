<template>
        <el-container class="layout-default">
            <el-header height="100%">
                <my-header />
            </el-header>
            <el-main >
                <!--为了将每一个页面都用到我这个写好的模板,这里使用嵌套路由-->
                <router-view></router-view>
            </el-main>
            <el-footer footer="100%">
                <my-footer />
            </el-footer>
        </el-container>
</template>

<script>
    // 因为H5里面本来就有一个标签叫header,所以这里避免冲突起个别的名字
    import MyHeader from '@/components/header/index';
    import MyFooter from '@/components/footer/index';
    export default {
        components: {
            MyHeader,
            MyFooter
        }
    }
</script>

<style lang="scss">
    /*scss中引入其他文件的语法*/
    @import '@/assets/css/public/layout.scss';
</style>
